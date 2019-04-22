module.exports = function(grunt) {

    // Track the time that each Grunt task takes
    require('time-grunt')(grunt);
    // Load the required libraries for each Grunt task (removes the need for all the 'grunt.loadNpmTasks('<grunt-module>')' commands
    require('load-grunt-tasks')(grunt, tasks);

    // Function to handle the theme request as an optional parameter ('grunt build --theme=wet-boew')
    grunt.config('theme', (function() {
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
        }
    )());

    // Set the scope of tasks
    var tasks = {
        scope: ['devDependencies', 'dependencies']
    };
    // Set the options for the grunt config
    var options = {
        config: 
        {
            src: 'grunt/*.js',
            pkg: grunt.file.readJSON('package.json'),
            coreDist: 'dist/wet-boew',        
            themeDist: 'dist/theme-wet-boew'
        }
    };

    // Load the library that will handle the loading of each task from the /grunt/*.js files
    var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);

    // Declare all the functions that will be handled by the grunt task
    grunt.registerTask('prepare', ['clean:prepare', 'wget:prepare', 'unzip:prepare', 'copy:prepare', 'string-replace:prepare', 'sprite:prepare']);
    grunt.registerTask('css', ['sass:theme']);
    grunt.registerTask('finalize', ['clean:finalize'])
    grunt.registerTask('build', ['prepare', 'css', 'finalize']);
}