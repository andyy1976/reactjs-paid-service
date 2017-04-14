var gulp = require('gulp');
var browserify = require('browserify');
//var reactify = require('reactify'); // Converts jsx to js
var babelify = require('babelify');
var es2015 = require('babel-preset-es2015');
var react = require('babel-preset-react');
var source = require('vinyl-source-stream'); // Converts string to a stream
var connect = require('gulp-connect');

gulp.task('browserify', function(){
	browserify('./src/js/main.js')
		.transform('babelify',{
			presets: [
		        'es2015',  //转换es6代码
		        'stage-0',  //指定转换es7代码的语法提案阶段
		        'react'  //转换React的jsx
		      ],
		})
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function(){
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
	gulp.src('src/css/*.*')
		.pipe(gulp.dest('dist/css'));
	gulp.src('src/js/vendors/*.*')
		.pipe(gulp.dest('dist/js'));
});

gulp.task('server', function() {
	connect.server({
		root: 'dist',
		livereload: true,
		port: 4321
	});
});

gulp.task('default', ['browserify', 'copy','server'], function(){
	return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});
