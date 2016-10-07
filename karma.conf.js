//$ karma start --browsers chrome_without_security
//$ open -a Google\ Chrome --args --disable-web-security
//$ karma run

module.exports = function(config) {
    config.set({

        // Répertoire pour la résolution des fichiers
        basePath: '',
        frameworks: ['jasmine'],

        // Fichiers (pattern) à inclure lors du chargement lors des test
        // Attention à l'ordre
        files: [
            './node_modules/angular/angular.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './src/modules/**/!(*.spec).js',
            './src/modules/**/*.spec.js'
        ],
        // Fichiers (pattern) à exclure du chargement lors des test
        exclude: [
            './src/modules/_block.js'
        ],


        // Utilisation d'un reporter particulier
        reporters: ['progress', 'html'],
        htmlReporter: {
            outputDir: 'karma_reports', // Répertoire des rapports
            templatePath: null,
            focusOnFailures: true,
            namedFiles: false,
            pageTitle: null,
            urlFriendlyName: false,
        },
        port: 9876,

        proxies: {},
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ['Chrome'], //, 'PhantomJS'],
        customLaunchers: {},
        singleRun: false
    });
};
