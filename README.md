# Prizeout Applicant Take Home Test

## Instructions
This take-home challenge is geared toward testing one's ability to code in a React application. The application is built using TypeScript, React, Redux Toolkit, JSX and Less CSS.

Starting the application will render a list of gift card offers available to a given user.

**Please complete the following tasks:**

- When clicking on a gift card offer in the grid, please set a blue border around the offer card so the user knows which one is selected.

- When clicking on an offer, please populate the right sidebar with the selected offers information. It should display the gift card, gift card name, a list of available cost options for the gift card and the Prizeout button. 

- A user should be able to select a value for the gift card they would like to purchase.

- Clicking the Prizeout button should trigger an api call to the server. You can mock a successful response from the server. The request should include all viable information inregards to the offer that has been selected and the gift card value that was chosen. The following values are required by the checkout endpoint: `checkout_value_id`, `cost_in_cents`, `name`, `value_in_cents`. 

- Style the list of available cost options for the gift card according to the attached design:

![Prizeout calculation](https://assets.prizeout.com/temp/code-challenge/calculation-section.png)



## Offer Schema Example

```
{
    checkout_hero_url: null,
    currency_code: 'USD',
    description: '0',
    giftcard_list: [  // This is a list of cost options available
        {
            checkout_value_id: 'd4ec7fb1-f214-4f76-9163-92a6cc6ef3a1',
            cost_in_cents: 980,
            display_bonus: 2.04,
            display_monetary_bonus: null,
            value_in_cents: 1000
        },
        {
            checkout_value_id: '51df3cec-4277-4327-acd9-8c1e09c6c45e',
            cost_in_cents: 2450,
            display_bonus: 2.04,
            display_monetary_bonus: null,
            value_in_cents: 2500
        },
        {
            checkout_value_id: '7257dd8d-fdf8-45de-abdc-7d565dd0d7e1',
            cost_in_cents: 4900,
            display_bonus: 2.04,
            display_monetary_bonus: null,
            value_in_cents: 5000
        }
    ],
    image_url: 'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/EBOOKUL_fp01.png',
    is_enabled: true,
    logomark_url: null,
    name: 'Unlimited eBooks',
    stores: [],
    support_creative_list: [],
    tag: null
}
```

## Initialization
`npm i` to install dependancies.
`npm start` to start the app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8069](http://localhost:8069) to view it in the browser.

The page will reload if you make edits.

### `npm test`

Launches the test runner in the console.

### `npm run lint`

This will lint all of the ts/tsx files in the application. It will auto fix any issues and report on the findings of any outstanding issues that cannot be fixed automatically.

### `npm run build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

# prizeout-application-takehome
