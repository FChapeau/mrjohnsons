/* eslint-env node */
"use strict";
let gulp = require('gulp');
let webpackStream = require('webpack-stream');
let nodemon = require('gulp-nodemon');

let webpackConfig = {
    devtool: "source-map",
    output: {
        filename: "app.js"
    },
    module :{
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel"
            }
        ]
    }
};

gulp.task("compile:client", function(){
    return gulp.src('./client/index.jsx')
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('public/dist/js/'));
});

gulp.task("watch:client", function(){
    return gulp.src('./client/index.jsx')
        .pipe(webpackStream(Object.assign(webpackConfig, {watch:true})))
        .pipe(gulp.dest('public/dist/js/'));
});

gulp.task("watch:app", function(){
    var stream = nodemon({
        script: './app.js',
        ext: 'js',
        ignore: ["client/*", "public/*"]
    });

    stream
        .on('crash', function(){
            stream.emit('restart', 10);
        });
});

gulp.task('watch', ['watch:client', 'watch:app']);