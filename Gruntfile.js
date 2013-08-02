var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
	return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('assemble-less');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			less: {
				files: ['src/styles/*.less'],
				tasks: ['less:server']
			},
			assemble: {
				files: ['src/templates/**/*.html', 'src/content/*.md', 'src/data/*.yaml'],
				tasks: ['assemble']
			},
			livereload: {
				files: [
					'.tmp/*.html',
					'.tmp/styles/*.css',
					'src/scripts/*.js',
					'src/img/*.{jpg,png,gif,svg}'
				],
				tasks: ['livereload']
			}
		},
		connect: {
			options: {
				port: 9300,
				hostname: '0.0.0.0'
			},
			livereload: {
				options: {
					middleware: function (connect) {
						return [
							lrSnippet,
							mountFolder(connect, '.tmp'),
							mountFolder(connect, 'src')
						];
					}
				}
			},
			dist: {
				options: {
					middleware: function (connect) {
						return [
							mountFolder(connect, 'dist')
						];
					}
				}
			}
		},
		open: {
			server: {
				url: 'http://localhost:<%= connect.options.port %>'
			}
		},
		clean: {
			dist: ['.tmp', 'dist/*'],
			cardflow: ['.tmp', 'cardflow/*'],
			server: '.tmp'
		},
		less: {
			options: {
				version: 'node_modules/less',
				paths: ['src/bower_components', 'src/styles'],
			},
			dist: {
				files: {
					'dist/styles/<%= pkg.name %>.css': 'src/styles/<%= pkg.name %>.less',
					'dist/styles/ie.css': 'src/styles/ie.less'
				}
			},
			cardflow: {
				files: {
					'cardflow/styles/<%= pkg.name %>.css': 'src/styles/<%= pkg.name %>.less',
					'cardflow/styles/ie.css': 'src/styles/ie.less'
				}
			},
			server: {
				files: {
					'.tmp/styles/<%= pkg.name %>.css': 'src/styles/<%= pkg.name %>.less',
					'dist/styles/ie.css': 'src/styles/ie.less'
				}
			}
		},
		assemble: {
			options: {
				data: 'src/data/*.yaml',
				layout: 'src/templates/layouts/default.html',
				partials: 'src/templates/partials/*.html',
				engine: 'handlebars',
				flatten: true
			},
			dist: {
				files: {
					'.tmp/': [
						'src/templates/pages/*.html']
				}
			}
		},
		useminPrepare: {
			html: 'src/templates/layouts/*.html',
			options: {
				dest: 'dist'
			}
		},
		usemin: {
			html: ['.tmp/*.html'],
			options: {
				dirs: ['.tmp']
			}
		},
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: 'src',
					dest: 'dist',
					src: [
						'*.{ico,png,txt,htaccess}',
						'img/**/*.{jpg,png,gif,svg}',
						'fonts/*.{eot,svg,ttf,woff}'
					]
				}]
			},
			cardflow: {
				files: [{
					expand: true,
					dot: true,
					cwd: 'src',
					dest: 'cardflow',
					src: [
						'*.{ico,png,txt,htaccess}',
						'img/**/*.{jpg,png,gif,svg}',
						'fonts/*.{eot,svg,ttf,woff}'
					]
				}]
			}
		},
		prettify: {
			options: {
				brace_style: 'collapse',
				indent_size: 2,
				indent_char: ' ',
				unformatted: ['pre', 'em', 'strong', 'a']
			},
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '.tmp',
					dest: 'dist',
					src: [
						'*.html',
					]
				}]
			},
			cardflow: {
				files: [{
					expand: true,
					dot: true,
					cwd: '.tmp',
					dest: 'cardflow',
					src: [
						'*.html',
					]
				}]
			}
		}
	});

	grunt.renameTask('regarde', 'watch');

	grunt.registerTask('server', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'less:server',
			'assemble:dist',
			'livereload-start',
			'connect:livereload',
			'open',
			'watch'
		]);
	});

	grunt.registerTask('build', [
		'clean:dist',
		'less:dist',
		'assemble:dist',
		'useminPrepare',
		'concat',
		'usemin',
		'copy:dist',
		'prettify:dist',
		'clean:server'
	]);

	grunt.registerTask('cardflow', [
		'clean:cardflow',
		'less:cardflow',
		'useminPrepare',
		'concat',
		'usemin',
		'copy:cardflow',
		'prettify:cardflow',
		'clean:server'
	]);

	grunt.registerTask('default', 'build');
}
