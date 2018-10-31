/*tell gulp to put all svg file into one file to maximize the loading time*/
var gulp        = require('gulp'),
    svgSprite   = require('gulp-svg-sprite'),
    rename      = require('gulp-rename'),
    del      = require('del')

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

gulp.task('beginClean', function() { /* delete the old copy before generate a new one */
    return del(['./app/temp/sprite', './app/assets/images/sprites'])
})

gulp.task('createSprite', ['beginClean'], function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config)) /*merge all svg file together on this step*/
        .pipe(gulp.dest('./app/temp/sprite/'))
})

gulp.task('copySpriteGraphic', ['createSprite'], function() {
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'))
})

gulp.task('copySpriteCSS', ['createSprite'], function() {
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))/*use npm pagage Rename to add _ in front of the sprite.css */
        .pipe(gulp.dest('./app/assets/styles/modules'))
})

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
    return del('./app/temp/sprite')
})

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean'])
/*
Use when added new icons to the sprite
- type --> gulp icons --> to run both task at the same time.
*/