var gulp = require("gulp");

//复制
gulp.task("copy-html",async ()=>{
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web3ce"));
});
gulp.task("copy-php",async ()=>{
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("*.php")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\web3ce"));
});

gulp.task("copy-js",async ()=>{
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web3ce\\js"));
});
gulp.task("copy-css",async ()=>{
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web3ce\\css"));
});
gulp.task("copy-img",async ()=>{
	gulp.src("img/*.{jpg,png,gif}")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web3ce\\img"));
});
//监听
gulp.task("watchall",async ()=>{
	gulp.watch("*.html",async ()=>{
		gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\web3ce"));
	});
	gulp.watch("js/*.js",async ()=>{
		gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\web3ce\\js"));
	});
	gulp.watch("img/*.{jpg,png,gif}",async ()=>{
		gulp.src("img/*.{jpg,png,gif}").pipe(gulp.dest("D:\\phpStudy\\WWW\\web3ce\\img"));
	});
	gulp.watch("css/*.css",async ()=>{
		gulp.src("css/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\web3ce\\css"));
	});
});

