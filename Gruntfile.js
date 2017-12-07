"use strict";

module.exports = function (grunt) {

    //load plugins
    [
        "grunt-markdown-toc"
    ].forEach(function(task){
        grunt.loadNpmTasks(task);
    });

    //configure plugins
    grunt.initConfig({
        markdown_toc: {
            src: ['./**.md', './docs/**.md']
        },
    });
};