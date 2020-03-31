let gulp = require("gulp");
let sass = require('gulp-sass');
let uglify = require('gulp-uglify-es').default;

gulp.task('sass', function () {
    return gulp.src('../sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('../css'));
  });

gulp.task("uglify", function () {
      return gulp.src("../css/*.css")
          .pipe(uglify(/* options */))
          .pipe(gulp.dest("../dist/"));
  });