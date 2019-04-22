module.exports = function(grunt, options){
    return {
        prepare: {
            files: {
                'wip/base.zip': 'https://github.com/ircc-web-solutions/theme-base/archive/master.zip',
                'wip/theme.zip': 'https://github.com/' + grunt.config('theme').repository + '/archive/master.zip',
                'wip/zip/wet-boew.zip': 'https://github.com/wet-boew/wet-boew/archive/master.zip'
            }
        }
    }
}