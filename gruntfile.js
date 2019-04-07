//
module.exports = function(grunt) {

    grunt.config('theme', (function(){
        var choice = grunt.option('theme') || 'default';
        var theme = { 
            name: "wet-boew", 
            source_sass: "node_modules/wet-boew-theme-default/stylesheets", 
            target_sass: "wet-boew-default/stylesheets"};
        switch (choice) {
            case 'goc-intranet': 
                theme = {
                    name: "goc-intranet", 
                    source_sass: "node_modules/wet-boew-theme-goc-intranet/stylesheets", 
                    target_sass: "goc-intranet/stylesheets"
                };
                break;
        }
        return theme;
    })())

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // configuration for grunt-contrib-clean
        //
        // command: grunt clean
        // result: all folders will be emptied/removed
        //
        // command: grunt clean:folder_dist
        // result: folder 'dist' will be emptied/removed
        clean: {
            dist: ["dist"],
            wip: ["wip"]
        },
        // configuration for grunt-contrib-copy
        //
        // command: grunt copy
        // result: 
        copy: {
            bootstrap: {
                cwd: 'node_modules/bootstrap-sass/assets/stylesheets',
                src: '**',
                dest: 'wip/theme-' + grunt.config('theme').name + '/bootstrap/stylesheets',
                expand: true,
                flatten: false
            },
            base: {
                cwd: 'node_modules/wet-boew-theme-base/stylesheets',
                src: '**',
                dest: 'wip/theme-' + grunt.config('theme').name + '/base/stylesheets',
                expand: true,
                flatten: false
            },
            theme: {
                cwd: grunt.config('theme').source_sass,
                src: '**',
                dest: 'wip/theme-' + grunt.config('theme').name + '/' + grunt.config('theme').target_sass,
                expand: true,
                flatten: false
            } 
        }
    });

    grunt.registerTask('build', ['clean', 'copy']);

}