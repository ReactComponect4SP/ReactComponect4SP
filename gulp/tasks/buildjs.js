﻿import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import shim from 'browserify-shim';
import path from 'path';
import uglify from 'gulp-uglify';
import config from '../../config.js';
import del from 'del';

let debug = false;

gulp.task('buildjs-dev', function () {
    debug = true;
    build();
});

gulp.task('buildjs', function () {
    build();
});

function build() {
    gulp.start('buildjs-wp', 'buildjs-layout');
}

gulp.task('buildjs-wp', function () {
    let srcs = new Set();
    for (let webpart of config.webparts) {
        srcs.add(path.join(config.rootpath, webpart.src));
    }
    bundleJs("webparts.js", Array.from(srcs),
        path.join(config.rootpath,
            config.webpartStyleoutput));
})

gulp.task('buildjs-layout', function () {
    for (let layout of config.layouts) {
        bundleJs(layout.name + '.js',
            [path.join(config.rootpath, layout.src)],
            path.join(config.rootpath, layout.output, layout.name));
    }
})

function bundleJs(name, srcs, des) {
    del(path.join(des, name));
    var stream = browserify(srcs, {
        standalone: 'MyLibrary'
    })
        .transform(babelify, {
            presets: ['es2015', 'react']
        })
        .transform(shim)
        .bundle()
        .pipe(source(name))
    //if (!debug) {
    //    stream.pipe(uglify());
    //}
    stream.pipe(gulp.dest(des));
}

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('watchjs', (callback) => {
    gulp.watch(['./webparts/**/*.jsx', './layoutks/**/*.jsx'], ['buildjs']);
});