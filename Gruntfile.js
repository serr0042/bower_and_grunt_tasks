module.exports = function(grunt) {
	
	grunt.initConfig({
	
		copy: {
			main: {
				files: [
					
					{expand: true, flatten: true, src: "bower_components/components-font-awesome/fonts/*", dest: "dist/fonts"},
					{expand: true, flatten: true, src: "bower_components/bootstrap/dist/css/bootstrap.css", dest: "dist/css"},
					{expand: true,
					 flatten: true,
					 src: "css/main.css", dest: "dist/css"
						
					},
					{expand: true, flatten: true, src: "bower_components/bootstrap/dist/js/bootstrap.js", dest: "dist/js"},
					{expand: true, flatten: true, src: "bower_components/components-font-awesome/css/font-awesome.css", dest: "dist/css"},
					{expand: true, flatten: true, src: "bower_components/jquery/dist/jquery.js", dest: "dist/js"},
					{expand: true, flatten: true, src: "js/main.js", dest: "dist/js"},
					{expand: true, flatten: true, src: "index.html", dest: "dist"}
					
				]
			}
		},
		
		uglify: {
		my_target: {
			files: {
				'dist/js/main.min.js': ['dist/js/jquery.js', 'dist/js/main.js', 'dist/js/bootstrap.js']
			}
		}
	},
		
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
				expand: true,
					src: ['dist/css/bootstrap.css', 'dist/css/font-awesome.css', 'dist/css/main.css'],
					dest: 'dist/main.css',
				ext: '.min.css'	
					
				}
			}
		},
		
		
		
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', 'copy');
};