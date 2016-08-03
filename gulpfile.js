'use strict'
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const rename = require('gulp-rename');

// gulp.task('scripts',function(){
// 	return gulp.src('scripts/*.js')
// 		.pipe(plugins.watch('scripts/*.js'))
// 		.pipe(plugins.plumber())
// 		.pipe(plugins.babel({
// 			presets : ['es2015']
// 		}))
// 		.pipe(gulp.dest('public/js'))
// 		.pipe(plugins.livereload());
// });

gulp.task('scripts',function(){
	return gulp.src('scripts/*.js')
		.pipe(gulp.dest('public/js'))
		.pipe(plugins.livereload());
});

gulp.task('watch',function(){
	gulp.watch('scripts/*.js',['scripts']);
	gulp.watch('scripts/*.js',function(event){
		console.log(event.type);
		console.log(event.path);
	});
});

gulp.task('test',function(){
	return gulp.src('scripts/**/*.js')
		.pipe(plugins.uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('refresh',function(){
	let loverlive = plugins.livereload({start:true});
});

gulp.task('rename',function(){
	return gulp.src('scripts/common/*.js')
		.pipe(gulp.dest('renameJS/common'))
		.pipe(plugins.uglify())
		.pipe(rename({
			prefix: 'a.',
			suffix: '.min',
			extname : '.js'
		}))
		.pipe(gulp.dest('renameJS/common'));
});

gulp.task('concat_js',function(){
	return gulp.src('scripts/*.js')
		.pipe(plugins.concat('jquery.min.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('copy',['concat_js'],function(){
	return gulp.src('scripts/*.js')
		.pipe(plugins.contribCopy())
		.pipe(gulp.dest('build'));
});

gulp.task('zip',['copy'],function(){
	let now = new Date();
	let nowTime = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + '-' 
		+ now.getHours() + '-' + now.getMinutes() + '-' + now.getSeconds();
	let zipName = 'gulpTest_' + nowTime + '.zip';
	return gulp.src('build')
		.pipe(plugins.zip(zipName))
		.pipe(gulp.dest('zipFiles'));
});

gulp.task('deleteBuild',function(){
	gulp.src('build')
		.pipe(plugins.clean());
});

gulp.task('deleteZipFiles',function(){
	gulp.src('zipFiles')
		.pipe(plugins.clean());
});

gulp.task('clear',['deleteBuild','deleteZipFiles']);

gulp.task('default',['refresh','watch','concat_js','copy','zip']);