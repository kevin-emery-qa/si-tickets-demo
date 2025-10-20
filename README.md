Playwright / Typescript test suite example for SI Tickets

## Setup

# Installation (nodejs)
npm install
npx playwright install


## Usage

# to run all tests
npx playwright test

# to run a single test in debug mode (with playwright explorer)
npx playwright test -g "validate home page load" --debug

# to run a single test in headless mode
npx playwright test -g "validate home page load"

# to run all tests in a specific file 
npx playwright test tests/home.spec.ts