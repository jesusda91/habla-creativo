'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'habla-creativo',
    environment,
    rootURL: '/',
	locationType: 'auto',
	firebase: {
		apiKey: "AIzaSyBBpF4qMI3oSjJD0iQ_s00BIsHd_FIj1cM",
		authDomain: "habla-creativo.firebaseapp.com",
		databaseURL: "https://habla-creativo.firebaseio.com",
		projectId: "habla-creativo",
		storageBucket: "habla-creativo.appspot.com",
		messagingSenderId: "797073949088"
	},
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
