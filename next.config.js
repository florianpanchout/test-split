const withSplit = require('next-with-split').withSplit({
  splits: {
    example1: { // Identification of A/B tests (any)
      path: '/test', // Paths to perform A/B testing. (regular expression)
      hosts: {
        // [branch name]: host name
        main: 'test-split.vercel.app',
        'challenger': { host: 'test-split-git-challenger-nos-gestes-climat.vercel.app', weight: 10 },
      },
      cookie: { // Optional (For Sticky's control)
        maxAge: 60 * 60 * 12 * 1000 // Number of valid milliseconds for sticky sessions. (default is 1 day)
      }
    },
  },
  isOriginal: true,
  hostname: 'test-split.vercel.app',
  currentBranch: 'main'
})

module.export = withSplit({
  reactStrictMode: true,
})