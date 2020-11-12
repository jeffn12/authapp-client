<h1 align="center">Auth App</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://jneu-authapp.netlify.app">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/jeffn12/authapp-client">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/N1fvBjQfhlkctmwj1tnw">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

- Where can we find the demo?
  - Check out the demo [here](https://jneu-authapp.netlify.app)
- What was your experience?
  - Another great exercise in developing a UI and UX from wireframes, and integrating protected information that can only be accessed by an authorized user. This is a great starting point for me to be able create more personalized apps for users without sensitive data ending up in places it shouldn't.
- What have you learned/improved?
  - While I was deciding what to use as the backend for this project, I read a lot about sessions, web tokens, cookies, and why https was invented. Ultimately, I settled on firebase because it is cost-effective, off-premise (I don't have the means to host anything on-site), and bundles all of the services I would have built myself.
- Your wisdom? :)
  - Don't be afraid to build from the ground up to understand something, but know when an existing solution is a better option.

Note: before I decided on firebase, I built a standalone Express app with Passport to handle email/password authentication. I learned a lot about about sessions, cookies, web tokens, and password hashing, that all helped with understanding how firebase was working behind the scenes once I switched.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [firebase](https://firebase.com)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/N1fvBjQfhlkctmwj1tnw) was to build an application to complete the given user stories.

- register a new account
- log in to an existing account
- register/login with email & password, Google, or GitHub
- logout of account
- view profile details (only when logged in)
  - photo
  - name
  - bio
  - phone
- edit profile

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/jeffn12/authapp-client

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->

- [Node.js](https://nodejs.org/)
- [Create React App](https://create-react-app.dev/)
- [tailwindcss](https://tailwindcss.com)
- [Firebase](https://firebase.com/)
- [Web Dev Simplified](https://youtube.com/webdevsimplified)

## Contact

- Website [jeffneuberger.dev](https://www.jeffneuberger.dev})
- GitHub [@jeffn12](https://github.com/jeffn12)
- Twitter [@jeffneuberger](https://twitter.com/jeffneuberger})
