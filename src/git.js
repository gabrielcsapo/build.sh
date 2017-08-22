/**
 * @module src/git
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
* get's the current git information for the project being processed
* @method git
* @param {Object=} options
* @param  {String=} options.directory - the directory to check for git information
* @returns {Promise}
*/
module.exports = function git(options) {
  let { directory } = options || {};
  directory = directory || process.cwd();

  return new Promise((resolve, reject) => {
      // check if the directory contains git
      if (!fs.existsSync(path.resolve(directory, '.git'))) {
          return reject('directory does not contain git');
      }

      const git = {
          commit: '',
          author_name: '',
          author_email: '',
          author_date: '',
          committer_name: '',
          committer_email: '',
          committer_date: '',
          message: '',
          branch: '',
          remotes: {
              name: '',
              url: ''
          }
      };

      exec("git log --pretty=format:'%H\n%an\n%ae\n%at\n%cn\n%ce\n%ct\n%s' -1", {
          cwd: directory
      }, (err, response) => {
          if (err) {
              return reject(err);
          }
          const raw = response.split('\n');

          git.commit = raw[0];
          git.author_name = raw[1];
          git.author_email = raw[2];
          git.author_date = raw[3];
          git.committer_name = raw[4];
          git.committer_email = raw[5];
          git.committer_date = raw[6];
          git.message = raw[7];

          exec("git symbolic-ref --short HEAD", {
              cwd: directory
          }, (err, branch) => {

              git.branch = branch.replace('\n', '') || process.env.BRANCH_NAME;

              exec("git remote -v", {
                  cwd: directory
              }, (err, response) => {
                  if (err) {
                      return reject(err);
                  }

                  response.split("\n").forEach((remote) => {
                      if (!/\s\(push\)$/.test(remote)) {
                          return;
                      }
                      remote = remote.split(/\s+/);
                      git.remotes.name = remote[0];
                      git.remotes.url = remote[1];
                  });

                  if (!git.remotes.url || !git.remotes.name) {
                      return reject('no remote found');
                  }

                  return resolve(git);
              });
          });
      });
  });
}
