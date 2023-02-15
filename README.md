# An example system that searches images hosted on Unsplash

Created by [Brendan Murty](https://github.com/brendanmurty).

I've used some icons from the open source [Feather icon pack](https://feathericons.com/).

## Requirements

1. Setup a new Unsplash API app
  - Follow the **Setting up an application** steps from the [Unsplash Documentation](https://unsplash.com/documentation#public-actions)
  - Provide suitable values for the API application
  - Initial use here only requires a **Demo** level API application 
2. Setup [Node and NPM](https://nodejs.org/en/)
  - Use the appropriate installer for your local machine
3. Setup [Git](https://git-scm.com/)
  - Git may already be installed on your machine, check by running `which git` from a Terminal window
  - Confirm that you've completed the [initial Git setup steps](https://docs.github.com/en/get-started/quickstart/set-up-git)

## Initial Setup

1. Make a local clone of this Git repository
2. Open a Terminal/Console window
3. Change to the local clone's directory
4. Run `npm install`
5. Create the environment configuration file: `cp -n .env.example .env`
6. Edit `.env` and add the appropriate values

## Local Server

```
npm run start
```

## Other Commands

Please refer to the [React documentation](docs/react.md) for further details.

## Production Use

### Apply for production

The Unsplash API app used by this system must be reviewed by the Unsplash team before it can be used in production.

This process can be prompted by clicking your app's name in the [Your Apps](https://unsplash.com/oauth/applications) list page, then following the steps in the **Apply for production** section.

### Build

1. Ensure that the configuration values in `.env` match the values you want to use in production 
2. Run `npm run build`
3. The contents of the `build` directory here will now contain all of the required minified production-ready files

### Deployment

Deploy the entire contents of the `build` directory to your production system.

For a real-world application, this would be via a CI system like BitBucket Pipelines or GitHub Actions.
