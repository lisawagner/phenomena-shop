# Full Stack Application || phenomena-shop 

This is an e-Commerce concept project in-process.

## General Info

Frontend: React, Redux, Axios, Styled Components

Backend: Node, Express, Stripe, MongoDB, Mongoose, JWT

Components
* Navbar
* Hero
* Product List UI
* Shopping Categories
* Login & Register Page
* Single Product Page
* Shopping Car
* Footer

## Development Stages

1. UI/UX
2. MongoDB setup and testing
3. Stripe setup and testing
4. Shopping Cart setup and testing
5. Data-persistence setup and testing
6. Admin dashboard creation and testing
7. Firebase images

## CURRENT ISSUES

1. Stripe working on the backend. Data is received and posted correctly to Stripe. Bug found in the checkout payment POST to the eCommerce site itself.

2. Data Persistence bug found: The reducers for Login and Navigation work with persistence separately. However when "combineReducers" is used, the application breaks.

   Currently researching and testing possible solutions (as at May 20, 2022)
   
## SOLVED ISSUES
1. Initial project set to use Material UI, however bugs surfaced during integration with React 18:
   * Installation issues, solved by following [these procedures](https://stackoverflow.com/questions/71713111/mui-installation-doesnt-work-with-react-18).
   * A major issue with MUI also came up while testing responsiveness for mobile/tablet. The screen margins were breaking and pushing the UI off to the side. Initially thought it was a CSS reset or styling issue, until I pulled all styling from the project code to test.

   When the bug persisted, the next step I took was to determine if there were conflicts or issues with dependencies. I found that React 18 and MUI don't always work well together. If you are experience this issue, go to your projects 'public' folder and try this in your html `<head>`:
   
    ```html
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    ```
   
     You need both *minimum-scale* and *initial-scale*.
