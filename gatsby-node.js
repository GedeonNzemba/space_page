"use strict"

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  // need createRedirect action in actions collection
  // to make the redirection magic happen.
  // https://www.gatsbyjs.org/docs/bound-action-creators/
  const { createRedirect } = actions

  // Let’s set up some string consts to use thoroughout the following.
  // MDN > JavaScript reference > Statements and declarations
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
  // But sometimes to homepage.
  const homePath = `/`
  const comingSoonPath = `/ComingSoon/`

  // A more modern approach might use forEach rather than for...of
  // Compare
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement
  // and
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  let redirectBatch = [
    { f: comingSoonPath, t: homePath },
    { f: `/test`, t: homePath },
  ]

  redirectBatch.forEach(({ f, t }) => {
    if (t === ``) {
      t = homePath
    }
    createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t,
    })
    // Uncomment next line to see forEach in action during build
    // console.log('\nRedirecting:\n' + f + '\nTo:\n' + t + '\n');
  })
}
