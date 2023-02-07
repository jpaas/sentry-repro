import * as Sentry from "@sentry/react-native"
import { AppRegistry } from 'react-native';
import App from './app/App';

const dsn = process.env.NX_SENTRY_DSN
const dist = process.env.NX_SENTRY_DIST || "1"

Sentry.init({
  debug: true,
  dist,
  dsn,
  environment: "development",
  release: "1.0.0",
  tracesSampleRate: 1.0
})

console.info("sentry-repro starting...", { dist, dsn })
const usingHermes = typeof HermesInternal === "object" && HermesInternal !== null
console.info(`Hermes js engine: ${usingHermes}`)

AppRegistry.registerComponent('SentryRepro', () => Sentry.wrap(App));
