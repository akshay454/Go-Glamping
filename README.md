# Go Glamping


## Description
A full-stack application built on a MongoDB/Express/Node stack, utilizing RESTful architecture with the Bootstrap 4 CSS framework for styling.
The app performs CRUD operations for users, the campground, and the comments. These pieces are referenced within the database through various associations. Actionable commands are displayed dynamically on the site (edit/delete) for campground and comments, depending on a user’s authorization/ownership. Flash messages handle error and success messages to provide the visitor with feedback.

MongoDB Atlas, a cloud-based NoSQL database is the data store in use. User authorization and authentication in place for various routes, utilizing Passport.js and related submodules. The app is deployed from a GitHub branch through a Heroku pipeline.
The application is hosted on heroku and can be accessed at the below web address:
https://goglamping.herokuapp.com/






