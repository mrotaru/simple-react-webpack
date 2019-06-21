# Simple React/Redux/Webpack Project

Code is organized into:
- functionality modules, containing any code specific to the module
- services and common components - used across different modules
- minimal Webpack configuration
- styling: - with SCSS
- state management with Redux; async with `redux-thunk`
- unit tests with Jest/Enzyme

## Layout

```
├─ src/components/     common components
│  ├─ modules/        functionality modules
│  │  └─ posts/       posts functionality module
│  ├─ services/       application services
│  │  ├─ api/         service for interacting with an HTTP API
│  │  └─ object/      service for manipulating objects
└─ webpack.config.js   webpack config
```