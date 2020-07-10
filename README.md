# StocksData

## API to hit

*JSON API URL :*
`https://jsonmock.hackerrank.com/api/stocks?date=<date>`

## Expected Outputs when result found

- `Open: {open}`
- `Close: {close}`
- `High: {high}`
- `Low: {low}`

## Expected Output when NO results found

In case of no results render below div
`<div data-test-id="no-result">No Results Found</div>`

## Testing Requirements

- Input should have the data-test-id attribute 'app-input'.
- Button should have the data-test-id attribute 'submit-button'.
- `<ul>` should have data-test-id attribute 'stock-data'.
- The 'No Results Found' div should have the data-test-id attribute 'no-result'.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:8000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` or `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
