/* eslint-disable no-useless-escape */
import {
  getNumberFromEnvParser,
  getStringEnumFromEnvParser,
  getStringFromEnvParser,
  validateConfig,
} from 'typed-env-parser'

export const appEnvs = validateConfig({
  NODE_ENV: getStringEnumFromEnvParser('NODE_ENV', ['production', 'development', 'test'] as const),

  firebase: {
    apiKey: getStringFromEnvParser('REACT_APP_API_KEY'),
    authDomain: getStringFromEnvParser('REACT_APP_AUTHDOMAIN', { pattern: '.+\.firebaseapp.com' }),
    projectId: getStringFromEnvParser('REACT_APP_PROJECTID'),
    storageBucket: getStringFromEnvParser('REACT_APP_STORAGEBUCKET', { pattern: '.+\.appspot.com' }),
    messagingSenderId: getNumberFromEnvParser('REACT_APP_MESSAGINGSENDERID'),
    appId: getStringFromEnvParser('REACT_APP_APPID', { pattern: '1:.*:web:.*' }),
    measurementId: getStringFromEnvParser('REACT_APP_MEASUREMENTID', { pattern: 'G-*.' }),
    databaseURL: getStringFromEnvParser('REACT_APP_DATABASE_URL', { pattern: '(http|https)://' }),
  }

})