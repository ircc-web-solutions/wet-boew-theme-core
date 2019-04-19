//
module.exports = function(grunt) {

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
        wget: {
            theme: {
                files: {
                    'wip/base.zip': 'https://github.com/ircc-web-solutions/theme-base/archive/master.zip',
                    'wip/theme.zip': 'https://github.com/' + grunt.config('theme').repository + '/archive/master.zip',
                    'wip/src/wet-boew.zip': 'https://github.com/wet-boew/wet-boew/archive/master.zip'
                }
            }
        },
        unzip: {
            'wip/theme/': 'wip/theme.zip'
        }
    });

    grunt.registerTask('build', ['clean', 'wget', 'unzip']);

}