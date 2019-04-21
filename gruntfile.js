module.exports = function(grunt) {

    const sass = require('node-sass');
    require('time-grunt')(grunt);

    grunt.config('theme', (function(){
        var choice = grunt.option('theme') || 'default';
        var theme;
        switch (choice) {
            case 'default':
            case 'wet-boew':
                theme = { 
                    name: 'wet-boew', 
                    repository: 'ircc-web-solutions/theme-wet-boew'};
            case 'goc-intranet': 
                theme = {
                    name: "goc-intranet", 
                    repository: 'ircc-web-solutions/theme-goc-intranet'};
                break;
            default:
                theme = { 
                    name: 'unregistered-repo', 
                    repository: choice};
        }
        return theme;
    })())

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-wget');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-string-replace');

    // project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		coreDist: 'dist/wet-boew',        
        themeDist: 'dist/theme-wet-boew',
        copy: {
            prepare: {
                files:
                [ 
                    {
                        cwd: 'node_modules/bootstrap-sass/assets/stylesheets',
                        src: ['**/*.scss'],
                        dest: 'src/bootstrap/stylesheets',
                        expand: true,
                        flatten: false
                    },
                    {
                        cwd: 'wip/repo/wet-boew/wet-boew-master/src',
                        src: ['**/*.scss', '!**/demo/**', '!plugins/**'],
                        dest: 'src/wet-boew/stylesheets',
                        expand: true,
                        flatten: false
                    },
                    {
                        cwd: 'wip/repo/wet-boew/wet-boew-master/src/plugins',
                        src: ['**/*.scss', '!**/demo/**'],
                        dest: 'src/plugins/stylesheets',
                        expand: true,
                        flatten: false
                    },
                    {
                        cwd: 'wip/repo/wet-boew/wet-boew-master/theme',
                        src: ['**/*.scss', '!**/demo/*.scss'],
                        dest: 'src/theme-wet-boew/stylesheets',
                        expand: true,
                        flatten: false
                    }
                ]
            }
        },
        clean: {
            prepare: ['wip', 'src', 'dist'],
            finalize: ['wip', 'src']
        },
        wget: {
            prepare: {
                files: {
                    'wip/base.zip': 'https://github.com/ircc-web-solutions/theme-base/archive/master.zip',
                    'wip/theme.zip': 'https://github.com/' + grunt.config('theme').repository + '/archive/master.zip',
                    'wip/zip/wet-boew.zip': 'https://github.com/wet-boew/wet-boew/archive/master.zip'
                }
            }
        },
        unzip: {
            prepare: {
                files: {
                    'wip/repo/wet-boew/': 'wip/zip/wet-boew.zip'
                }
            }
        },
        sass: {
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
        },       
        sprite: {
            prepare: {
                src: "wip/repo/wet-boew/wet-boew-master/src/plugins/share/sprites/*.png",
                destCss: "src/plugins/stylesheets/share/_sprites.scss",
                dest: "src/plugins/stylesheets/share/assets/images/sprites.png"
            }
        },
        'string-replace': {
            prepare: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: '**/*.scss',
                        dest: 'src/'
                    }
                ],
                options: {
                    replacements: [
                        {
                            pattern: '@import "sprites/sprites_share";',
                            replacement: '@import "sprites";'
                        },
                        {
                            pattern: /@import.\"\.\.\/plugins/g,
                            replacement: '@import "src/plugins/stylesheets'
                        },
                        {
                            pattern: /@import.\"\.\.\/polyfills/g,
                            replacement: '@import "src/wet-boew/stylesheets/polyfills'
                        },
                        {
                            pattern: /@import.\"\.\.\/variables/g,
                            replacement: '@import "src/wet-boew/stylesheets/variables'
                        },
                        {
                            pattern: /@import.\"\.\.\/\.\.\/variables/g,
                            replacement: '@import "src/wet-boew/stylesheets/variables'
                        },
                        {
                            pattern: /@import.\"\.\.\/src\/variables/g,
                            replacement: '@import "src/wet-boew/stylesheets/variables'
                        },
                        {
                            pattern: /@import.\"\.\.\/src\/base/g,
                            replacement: '@import "src/wet-boew/stylesheets/base'
                        },
                        {
                            pattern: /@import.\"bootstrap-sass\/assets/g,
                            replacement: '@import "src/bootstrap'
                        },
                        {
                            pattern: /@extend %#{\$service};/g,
                            replacement: '@extend %#{$service} !optional;'
                        }                        
                    ]
                }//@extend %#{$service};
            }
        }
    });

    grunt.registerTask('prepare', ['clean:prepare', 'wget:prepare', 'unzip:prepare', 'copy:prepare', 'string-replace:prepare', 'sprite:prepare']);
    grunt.registerTask('css', ['sass:theme']);
    grunt.registerTask('finalize', ['clean:finalize'])
    grunt.registerTask('build', ['prepare', 'css', 'finalize']);
}