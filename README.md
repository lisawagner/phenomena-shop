# Full Stack Application || phenomena-shop 

This is an e-Commerce concept project in-process.

## General Info

Frontend: React, Redux, Axios, Styled Components

Backend: Node, Express, Stripe, MongoDB, Mongoose, JWT

## Development Stages

1. UI/UX
2. MongoDB setup and testing
3. Stripe setup and testing
4. Shopping Cart setup and testing
5. Data-persistence setup and testing
6. Admin dashboard creation and testing

## CURRENT ISSUES

1. Stripe working on the backend. Data is received and posted correctly to Stripe. Bug found in the checkout payment POST to the eCommerce site itself.

2. Data Persistence bug found: The reducers for Login and Navigation work with persistence separately. However when "combineReducers" is used, the application breaks.

   Currently researching and testing possible solutions (as at May 20, 2022)
