var gulp            = require('gulp'),
postcss         = require('gulp-postcss'),
autoprefixer    = require('autoprefixer'),
cssVars         = require('postcss-simple-vars'),
cssNested       = require('postcss-nested'),
cssImport       = require('postcss-import'),
mixins          = require('postcss-mixins')


// gulp.task('styles', function() {
//     console.log("Imagin Sass or PostCSS tasks runing here.")
// })
gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssVars, cssNested, autoprefixer]))
            .on('error', function(errorInfo) {
                console.log(errorInfo.toString()) //shows message about the error but don't stop working.
                this.emit('end')
            }) //tell gulp don't stop watching even if it is an error. Keep going.
        .pipe(gulp.dest('./app/temp/styles'))
})