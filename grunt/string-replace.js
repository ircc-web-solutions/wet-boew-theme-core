module.exports = {
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