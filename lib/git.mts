import fs from "fs";
import path from "path";
import { promisify } from "util";
import childProcess from "child_process";

const exec = promisify(childProcess.exec);

/**
 * gets the current git information for the project being processed
 * @param options
 * @param options.directory - the directory to check for git information
 */
export async function Git(options?: { directory: string }) {
  let { directory } = options || {};
  directory = directory || process.cwd();

  // check if the directory contains git
  if (!fs.existsSync(path.resolve(directory, ".git"))) {
    throw new Error("directory does not contain git");
  }

  const git = {
    commit: "",
    author_name: "",
    author_email: "",
    author_date: "",
    committer_name: "",
    committer_email: "",
    committer_date: "",
    message: "",
    branch: "",
    remotes: {
      name: "",
      url: "",
    },
  };

  const { stdout: gitResponse } = await exec(
    "git log --pretty=format:'%H\n%an\n%ae\n%at\n%cn\n%ce\n%ct\n%s' -1",
    {
      cwd: directory,
    }
  );

  const raw = gitResponse.split("\n");

  git.commit = raw[0];
  git.author_name = raw[1];
  git.author_email = raw[2];
  git.author_date = raw[3];
  git.committer_name = raw[4];
  git.committer_email = raw[5];
  git.committer_date = raw[6];
  git.message = raw[7];

  try {
    const { stdout: branch } = await exec("git symbolic-ref --short HEAD", {
      cwd: directory,
    });

    git.branch = branch.replace("\n", "") || process.env.BRANCH_NAME || "";
  } catch (ex) {
    // noop
  }

  const { stdout: remotes } = await exec("git remote -v", {
    cwd: directory,
  });

  remotes.split("\n").forEach((remote: string) => {
    if (!/\s\(push\)$/.test(remote)) {
      return;
    }
    const remoteParts = remote.split(/\s+/);
    git.remotes.name = remoteParts[0];
    git.remotes.url = remoteParts[1];
  });

  if (!git.remotes.url || !git.remotes.name) {
    throw new Error("no remote found");
  }

  return git;
}
