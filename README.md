# LaunchDarkly React Sample App

## About

This repository contains a React application demonstrate the freature flagging capabilities of the LaunchDarkly continuous delivery tool. It utilizes a few third-party libraries to provide a functional experience:

1. [Create React App](https://github.com/facebook/create-react-app): Used to generate boilerplate React code to quickstart project.

2. [Faker.js](https://github.com/marak/Faker.js/): Fake data API, used to randomize users for feature flag evaluations.

3. [uuid](https://www.npmjs.com/package/uuid): Used to generate unique user IDs.

4. [LaunchDarkly React SDK](https://github.com/launchdarkly/react-client-sdk): Used to remotely configure feature flag states.

5. [Semantic UI](https://semantic-ui.com/): CSS library used to provide general UI styling.

### Components

The application consists of the following 5 components, located in the :

1. `App.js`: Provides general structure and layout of application, consisting of a header and multi-celled table.

2. `BoolFlag.js`: Contains a React component for a Boolean feature flag. Conditionally returns "True" when flag is enabled, and "False" when flag is disabled.

3. `JsonFlag.js`: Contains a React component for a JSON feature flag. Returns a template literal string which accesses the `firstName` and `lastName` properties provided by the feature flag JSON.

4. `NumFlag.js`: Contains a React component for a Numeric feature flag. Returns a number if the feature is defined, or the string "Not Defined" if the feature is not defined.

5. `StringFlag.js`: Contains a React component for a String feature flag. Returns a string if the flag is on, otherwise returns "Flag Off".

## Using this project

1. In the terminal, clone this repo to your local machine  with the command: `git clone https://github.com/SuperRockyCat/launchdarkly-react-example.git`

2. In the same terminal session, run the following command: `cd launchdarkly-react-example && npm install`

3. Follow the steps in prerequisites to get your app properly configured

### Prerequisites

#### If you'd like to skip the account setup steps, you can skip to the "!!! Skip here !!!" header at the end of Step 2 and follow the .env creation steps

1. This project requires a LaunchDarkly trial to use. Visit launchdarkly.com and click "Start Trial" to get started:
![Free Trial Screenshot](https://raw.githubusercontent.com/SuperRockyCat/launchdarkly-react-example/master/screenshots/create-trial.png)

2. For the sake of this tutorial, we will skip the quickstart instructions provided upon login. Navigate to the "Account Settings" Tab at the bottom of the left hand nav:

![Sidebar](https://raw.githubusercontent.com/SuperRockyCat/launchdarkly-react-example/master/screenshots/sidebar.png)

Your Client-side LaunchDarkly ID must be set as an environment variable to properly initialize the LaunchDarkly React client. This can be found in your newly created account under account settings, under the "Projects" tab:

![Keys](https://raw.githubusercontent.com/SuperRockyCat/launchdarkly-react-example/master/screenshots/keys.png)

### !!! Skip here !!!

Once the Client-side ID is copied, you'll need to add a `.env` file to the top level of this project directory, and store the client ID in a variable called `REACT_APP_LAUNCHDARKLY_CLIENTSIDE_ID`. Your .env file should look like this, also note the directory structure on the left-hand side:

![dotenv](https://raw.githubusercontent.com/SuperRockyCat/launchdarkly-react-example/master/screenshots/dotenv.png)

To save yourself time on this step, you can use the Client-side ID for my project `5f5e5d91f5d1ac0a4d464b34`

3. Navigate to the "Feature flags" tab at the top of the left hand nav, and click the green "+ FLAG" button on the right hand side:

![create flag](https://raw.githubusercontent.com/SuperRockyCat/launchdarkly-react-example/master/screenshots/create-flag.png)


4. You will need to create one feature flag of each available type. You can select the type of flag you want to create from the drop down menu under the "Flag variations" header:

![flag variations](https://raw.githubusercontent.com/SuperRockyCat/launchdarkly-react-example/master/screenshots/flag-variations.png)

Your flags will need to be named as followed:

`boolflag`: A boolean type feature flag

`numflag` : A numeric type feature flag

`stringflag`: A string type feature flag

`jsonflag`: A JSON type feature flag, must contain a JSON object with a `firstName` and `lastName` property. Here's an example: 

![jsonflag](https://raw.githubusercontent.com/SuperRockyCat/launchdarkly-react-example/master/screenshots/jsonflag.png)

Make sure to check the option to make your feature available to SDKs using Client-side ID:

![Client-side ID](https://raw.githubusercontent.com/SuperRockyCat/launchdarkly-react-example/master/screenshots/client-side-id.png)

#### Once created, make sure to turn your flags ON in production, and configure any default flag rules:

![Dashboard](https://raw.githubusercontent.com/SuperRockyCat/launchdarkly-react-example/master/screenshots/flags-on.png)


5. Once these steps are complete, you can start the project from the terminal with the `npm start` command. If everything is configured properly, your app should look like this:

![App](https://raw.githubusercontent.com/SuperRockyCat/launchdarkly-react-example/master/screenshots/app.png)

## Behavior

If you configure your flags to have variations and use a percentage rollout for the JSON, String, and Numeric flag types, like so:

![Percentage Rollout](https://raw.githubusercontent.com/SuperRockyCat/launchdarkly-react-example/master/screenshots/perc-rollout.png)

You should see a random variation each time you reload the app in the browser. The app is designed to provide a random user each time the browser is reloaded. This is meant to demonstrate how different feature configurations can be given to different users.