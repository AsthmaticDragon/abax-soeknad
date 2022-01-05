# brewdogbeerchallenge

## Launching the project
npm run serve
## Architecture
The biggest choice I made for the architecture is how I handle state. I change state whenever a button is pressed, but only allowing state to be changed if you have completed the previous stages of the ingredient. This is checked programmatically with a watch function, handling edge cases (in case a beer only has the middle or end part) when the component is mounted by skipping to the appropriate stage. Because the API is instrumental to rendering the application I decided not to wrap it in a try-catch to utilize the fail fast principle. I would not have done this with a third-party library like AJAX
## Known issues
Updating the beer page will result in a blank page, due to how I have set up the router
## dependencies
    "core-js": "^3.6.5",
    "mocha": "^9.1.3",
    "vue": "^3.2.26",
    "vue-loader": "^15.9.8",
    "vue-router": "^4.0.0-0"
 ## devDependencies
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-plugin-router": "^4.5.15",
    "@vue/cli-plugin-unit-mocha": "^4.5.15",
    "@vue/cli-service": "~4.5.0",
    "@vue/compiler-sfc": "^3.2.26",
    "@vue/test-utils": "^2.0.0-rc.18",
    "babel-eslint": "^10.1.0",
    "chai": "^4.1.2",
    "css-loader": "^6.5.1",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^7.0.0",
    "file-loader": "^6.2.0",
    "mini-css-extract-plugin": "^2.4.5"
