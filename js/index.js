


window.onload=function(){
	// banner
	// 轮播图
	new BannerPic({
			"boxDom":$("#banner_jpg"),//轮播图的容器
			"imgs":["img/1.jpg","img/2.jpg"],

			"douSize":16,//豆豆的大小
			"douSpace" : 10,//豆豆的间距
			"douColor" : "#a59397",//豆豆的颜色
			"douHighColor":"white",//高亮颜色
			"douIsCircle":true,//是否是圆的
			"doudouDirection":"下",//"上"，"右"，"下"，"左"，

			"currIndex":0,//当前显示的图片序号
			"myTimer":null,
			"timeSpace":2000,
			"doudouBorder":"2px solid #614945"	
		});


}


//返回顶部

function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}