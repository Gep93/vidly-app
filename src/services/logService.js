// import Raven from "raven-js";

function init() {
  // Raven.config(
  //   "https://330d943295a0416faf2543954ae63898@o482360.ingest.sentry.io/5532487",
  //   {
  //     release: "1-0-0",
  //     environment: "development-test",
  //   }
  // ).install();
}

function log(error) {
  console.log(error);
  // Raven.captureException(error);
}

export default {
  init,
  log,
};
