module.exports = {
    title: 'build.sh',
    nav: {
      Source: 'https://github.com/gabrielcsapo/build.sh',
      Storybook: './storybook/index.html',
      Example: './example/index.html',
      Docs: './code/index.html'
    },
    body: `
      <div class="text-center">
        <h3 class="text-black">build.sh</h3>
        <div class="text-black">We have coverage reports, test reports, now we have build reports!</div><br/>
        <div style="width:60%;margin: 0 auto;">
          <img class="responsive" src="./success.png" alt="">
        </div>
      </div>
    `,
    options: {
      width: '100%'
    },
    footer: {
      author: 'Made with 🐒 by @gabrielcsapo',
      website: 'http://www.gabrielcsapo.com'
    }
};
