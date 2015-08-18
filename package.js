Package.describe({
  summary: "Bluebird is a fully featured promise library with focus on innovative features and performance.",
  git: 'https://github.com/davidchase/bluebird-meteor'
});

Package.on_use(function (api) {
    api.add_files('lib/bluebird/js/browser/bluebird.js', ['client','server']);
});
