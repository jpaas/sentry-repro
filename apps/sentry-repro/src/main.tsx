import * as Sentry from "@sentry/react-native"
import { AppRegistry } from 'react-native';
import App from './app/App';

Sentry.init({
  debug: true,
  dist: process.env.NX_SENTRY_DIST || "1",
  dsn: process.env.NX_SENTRY_DSN,
  environment: "development",
  release: "1.0.0",
  tracesSampleRate: 1.0
})

console.info("sentry-repro starting...", process.env)
const usingHermes = typeof HermesInternal === "object" && HermesInternal !== null
console.info(`Hermes js engine: ${usingHermes}`)

AppRegistry.registerComponent('SentryRepro', () => Sentry.wrap(App));
