# React - Redux - Typescript - Firebase example app

Attendee app to add & remove attendees in event.
This is a practice example of using React, Redux, Typescript and Firebase real-time database (read, write, remove).

# Run project

1. Run `yarn install`
2. Run `yarn start`

## Run with or without Firebase
By default, this app is working without Firebase, so enable connection, go to file `./helpers/helpers.tsx` and set `syncWidthFirebase = true;`


## Firebase setup

1. Create new Real-time database in https://console.firebase.google.com
2. Open your project
3. Project Overview > Project settings and copy & paste your credentials to `.env.example`
4. Rename `.env.example` to `.env`

### Security rules
By default there are security rules in Firebase allowing full access to everyone. Google won't let you keep this forever.

    {
      "rules": {
        ".read": true,
        ".write": true
      }
    }

In this project there is applied Anonymous authentication with following rules:

    {
      "rules": {
        ".read": "auth.uid !== null",
        ".write": "auth.uid !== null"
      }
    }

At the end of a day, it's no difference, but you can later on convert anonymous users to authenticated users (if you decide later on to apply FB or Gmail or custom authentication).