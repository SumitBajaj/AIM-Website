'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            assets: {
                files: 'app/assets/**/*',
                options: {
                    livereload: true
                }
            }
        }
    });
}