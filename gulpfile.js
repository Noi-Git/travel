var gulp            = require('gulp'),
    cssRequire      = require('gulp-css-require'),
    watch           = require('gulp-watch'),
    autoprefixer    = require('autoprefixer'),
    postcss         = require('gulp-postcss'),
    cssImport       = require('postcss-import'),
    cssVars         = require('postcss-simple-vars'),
    cssNested       = require('postcss-nested')
    


gulp.task('default', function() {
    console.log("Hooray - you created a Gulp task.")
})

gulp.task('html', function() {
    console.log("Imagine something useful being done to your HTML here")
})

// gulp.task('styles', function() {
//     console.log("Imagin Sass or PostCSS tasks runing here.")
// })
gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssRequire, cssImport, cssVars, cssNested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'))

})

gulp.task('watch', function() {

    watch('./app/index.html', function() {
        gulp.start('html')
    })

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles')
    })
})

