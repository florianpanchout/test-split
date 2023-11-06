const withSplit = require('next-with-split').withSplit({
  splits: {
    example1: { // Identification of A/B tests (any)
      path: '/*', // Paths to perform A/B testing. (regular expression)
      hosts: {
        // [branch name]: host name
        original: 'test-split.vercel.app',
        'challenger': 'test-split-git-challenger-nos-gestes-climat.vercel.app',
      },
      cookie: { // Optional (For Sticky's control)
        maxAge: 60 * 60 * 12 * 1000 // Number of valid milliseconds for sticky sessions. (default is 1 day)
      }
    },
  }
})

module.export = withSplit({
  reactStrictMode: true,
})