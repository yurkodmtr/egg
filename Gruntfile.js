module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
          development: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            },
            files: {
              "css/main.css": "less/design.less"
            }
          }
        },
        concat: {
            css: {
                src: [
                    "css/*.css",
                    "!css/main.min.css"
                ],
                dest: 'css/main.css'
            },
            concatAppDev: {
                options: {
                    separator: ';',
                },
                src: [
                    'js/libs/*.js',
                    'js/scripts/*.js',
                ],
                dest: 'js/app.js'
            }
        },
        cssmin: {
            dist: {
                files: {
                    'css/main.min.css': 'css/main.css'
                }
            }
        },
        watch: {
            default: {
                files: [
                    'js/libs/*.js',
                    'js/scripts/*.js',
                    "css/*.css",
                    "less/design.less",
                    "!css/main.min.css"
                ],
                tasks: ['build'],
                options: {
                    event: ['all']
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', [
        'less',
        'concat',
        'cssmin'
    ]);
};