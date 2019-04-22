module.exports = {
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
}