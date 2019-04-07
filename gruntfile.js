//
module.exports = function(grunt) {

    grunt.config('theme', (function(){
        var choice = grunt.option('theme') || 'bootstrap';
        var theme = { 
            name: "bootstrap", 
            source_sass: "node_modules/bootstrap-sass/assets/stylesheets", 
            target_sass: "bootstrap/stylesheets"};
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
            stylesheets: {
                cwd: grunt.config('theme').source_sass,
                src: '**',
                dest: "wip/theme-" + grunt.config('theme').name + "/" + grunt.config('theme').target_sass,
                expand: true,
                flatten: false
            } 
        }
    });

    grunt.registerTask('build', ['clean', 'copy:stylesheets']);

}