# Simple React/Webpack

Simple React/Redux app for trying out various things. The idea is to have a
'baseline' on the `master` branch, and try things on branches. These feature
branches might not be merged into `master`. This is a similar idea to the the
`arc` repository, which has Redux and Redux-SSR on different, parallel
branches. Code is grouped by coupling, instead of type.

#### Styling
- with SCSS (alt: `styled-components`, simple template strings, `decss`)
- themes: 'light' and 'dark'; can be changed dynamically
- buttons reacting to theme changes; derive from theme colors

#### State
- management with Redux (alt: without)
- async with `redux-thunk` (alt: `redux-promise`, `redux-observable`, `redux-saga`) 
- try: `reselect`, `redux-entities`

#### Build
- minimal Webpack configuration

#### Test
- unit tests with Jest/Enzyme
- integration tests: webdriverio (alt: `puppeteer`, `cypress`)

#### TODO
- JWT authentication
- Open Graph
- Google Analytics

References
- https://github.com/facebook/create-react-app
- https://github.com/focusaurus/express_code_structure