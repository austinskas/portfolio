module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      compass: {
          options: {
              sassDir: 'src/assets/sass',
              imagesDir: 'src/img',
              cssDir: 'web/assets/css',
              force: true
          },
          dist: {
              options: {
                  environment: 'production',
                  noLineComments: true
              }
          },
          dev: {
              options: {
                  noLineComments: true
              }
          },
          watch: {
              options: {
                  noLineComments: true,
                  watch: true
              }
          }
      },
      assemble: {
        options: {
            layoutdir: 'src/template/layouts',
            layout: ['default.hbs'],
            partials: ['src/template/partials/{,*/}*.*','src/sprites/svg/*'],
            helpers: ['partial'],
            flatten: true
        },
        en: {
            options: {
                data: ['src/template/data/en/*.yml']
            },
            src: ['src/template/pages/en/*.hbs'],
            dest: './web'
        },

    },
    watch: {
        options: {
        },
        dev: {
            files: ['src/assets/sass/**/*.scss', 'src/template/**/*.hbs'],
            tasks: ['compass:dev', 'assemble:site']
        },
        handlebars: {
            files: ['src/template/*/*.hbs', 'src/template/layouts/*.hbs' ],
            tasks: ['assemble:site']
        }
    },
    svg_sprite: {
      generate: {
          cwd: 'web/assets/vendor/material-design-icons',
          src: [
              '../../../../web/assets/image/ic_facebook_24px.svg',
              '../../../../web/assets/image/ic_twitter_24px.svg',
              '../../../../web/assets/image/ic_dribbble_24px.svg',
                '../../../../web/assets/image/ic_phone_24px.svg',
                  '../../../../web/assets/image/ic_monitor_24px.svg',
                    '../../../../web/assets/image/ic_editing_24px.svg',
                      '../../../../web/assets/image/ic_strategy_24px.svg',



          ],
          dest: 'src/sprites',
          options: {
              shape: {
                  id: {
                      generator: function(filename) {
                          var id = filename.match(/ic_(\w+)_\d+/);
                          return id[1];
                      }
                  },
              },
              mode: {
                  symbol: {
                      dest: ''
                  }
              }
          }
      }
  },

  });

  [
    'grunt-contrib-compass',
    'grunt-contrib-watch',
    'grunt-assemble',
    'grunt-svg-sprite'


].forEach(grunt.loadNpmTasks);

  // Default task(s).
  grunt.registerTask('assemble:site', [
          'assemble:en',

  ]);
  grunt.registerTask('default', [
      'compass:dist',
      'assemble:en',

  ]);

};
