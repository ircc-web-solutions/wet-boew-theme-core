const sass = require('node-sass');

module.exports = function(grunt, options){
    return {
        options: {
            includePaths: ['node_modules'],
            implementation: sass
        },
        theme: {
            files: [
                {
                    expand: true,
                    cwd: 'src/wet-boew/stylesheets/base',
                    src: ['noscript.scss'],
                    dest: 'dist/theme-' + grunt.config('theme').name + '/css',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'src/theme-wet-boew/stylesheets',
                    src: ['ie8-theme.scss', 'ie8-wet-boew.scss', 'wet-boew.scss', 'theme.scss'],
                    dest: 'dist/theme-' + grunt.config('theme').name + '/css',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'src/wet-boew/stylesheets/polyfills/datalist',
                    src: ['datalist.scss'],
                    dest: 'dist/theme-' + grunt.config('theme').name + '/css/polyfills',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'src/wet-boew/stylesheets/polyfills/datepicker',
                    src: ['datepicker.scss'],
                    dest: 'dist/theme-' + grunt.config('theme').name + '/css/polyfills',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'src/wet-boew/stylesheets/polyfills/details',
                    src: ['details.scss'],
                    dest: 'dist/theme-' + grunt.config('theme').name + '/css/polyfills',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'src/wet-boew/stylesheets/polyfills/meter',
                    src: ['meter.scss'],
                    dest: 'dist/theme-' + grunt.config('theme').name + '/css/polyfills',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'src/wet-boew/stylesheets/polyfills/progress',
                    src: ['progress.scss'],
                    dest: 'dist/theme-' + grunt.config('theme').name + '/css/polyfills',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'src/wet-boew/stylesheets/polyfills/slider',
                    src: ['slider.scss'],
                    dest: 'dist/theme-' + grunt.config('theme').name + '/css/polyfills',
                    ext: '.css'
                }
            ]
        }
    }
}