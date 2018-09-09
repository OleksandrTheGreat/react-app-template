const path = require('path');
const package = require('./package.json');

var
    outputDirName = 'dist',

    folders = {
        root: __dirname,
        src: path.resolve(__dirname, 'src'),
        dist: path.resolve(__dirname, outputDirName),
        build: path.resolve(__dirname, outputDirName + '/build'),
        bin: path.resolve(__dirname, outputDirName + '/bin'),
        js: path.resolve(__dirname, outputDirName + '/bin/lib'),
        css: path.resolve(__dirname, outputDirName + '/bin/assets/css'),
        fonts: path.resolve(__dirname, outputDirName + '/bin/assets/fonts')
    },

    getEntry = function(entry) {

        if (entry)
            return entry;

        return {
            app: folders.build + '/main.ts'
        };
    },

    getOutput = function() {
        return {
            filename: '[name].js',
            path: folders.bin,
            library: package.name || 'unknown',
            libraryTarget: "umd"
        };
    },

    getModule = function(settings) {

        var rules = [{
            test: /\.tsx?$/,
            use: [
                'awesome-typescript-loader?configFileName=' + settings.tsconfig
            ]
        }];

        if (settings && settings.rules)
            for (var i = 0; i < settings.rules.length; i++)
                rules.push(settings.rules[i]);

        return {
            rules: rules
        };
    },

    getResolve = function() {
        return {
            extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss", ".less", ".html"],
            modules: [
                path.resolve(__dirname, 'node_modules')
            ],
            descriptionFiles: ["package.json"]
        };
    };

module.exports = {
    package: package,
    folders: folders,
    getEntry: getEntry,
    getOutput: getOutput,
    getModule: getModule,
    getResolve: getResolve
};