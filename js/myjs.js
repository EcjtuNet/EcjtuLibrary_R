function showdiv_1() {
	// var strHref_1 = document.getElementById("sideBar_img");
    document.getElementById("sideBar_hiv").style.display = "block";
    // strHref_1.href = "javascript:hidediv_1();";
}
function hidediv_1() {
	// var strHref_1_h = document.getElementById("sideBar_img");
    document.getElementById("sideBar_hiv").style.display = "none";
    // strHref_1_1.href = "javascript:showdiv_1();";
}
function gId(id){
	return document.getElementById(id);
}

/********计时器*******/
var aid=1;
var myopacity=0;

function fontsports()
{
	if(aid<=9){
		if(myopacity<1)
		{
			myopacity+=0.1;
			gId("t"+aid).style.opacity=myopacity;
		}else
		{
			myopacity=0;
			aid++;
		}
	}
	if(aid>9){
		for (var i = 1; i <10; i++) {
			gId("t"+i).style.opacity=0;	
		}
		aid=1;
		myopacity=0;
		fontsports();
	}
}
setInterval(fontsports,50);
/************公告**************/
function gonggaoShow(){
	gId("wrapper_1").style.display = "block";
	gId("wrapper_2").style.display = "none";
	gId("gonggao").style.backgroundColor = "#fff";
	gId("gonggao").style.color = "#42c7ab";
	gId("dongtai").style.backgroundColor = "#42c7ab";
	gId("dongtai").style.color = "#fff";
}
function dongtaiShow(){
	gId("wrapper_1").style.display = "none";
	gId("wrapper_2").style.display = "block";
	gId("dongtai").style.backgroundColor = "#fff";
	gId("dongtai").style.color = "#42c7ab";
	gId("gonggao").style.backgroundColor = "#42c7ab";
	gId("gonggao").style.color = "#fff";
}
/*************登录***********/
function loginShow(){
	//$("#login_e").show();
	gId("login_e").style.display = "block";
}
function loginHide1(){
	gId("sou").value = "学(工)号";
	//$("#login_e").hide();
	gId("login_e").style.display = "none";
}
function loginHide2(){
	gId("sou").value = "借书证号";
	gId("login_e").style.display = "none";
}
/**************三角形**************/
function triShow(j){
		for(var i = 1;i<=8;i++){
			//console.log(i);
			gId("btm_icon"+i).style.display = "none";
			gId("o"+i).style.color = "#9A9A9A";
		}
		gId("btm_icon"+j).style.display = "block";
		gId("o"+j).style.color = "#17BD9B";
	}
/*圆心点******************/
function dotAnimate1(id){
	gId("s1").src = "images/search"+4+".png";
	gId("s2").src = "images/search"+3+".png";
	gId("s3").src = "images/search"+3+".png";
}
function dotAnimate2(){
	gId("s2").src = "images/search"+4+".png";
	gId("s1").src = "images/search"+3+".png";
	gId("s3").src = "images/search"+3+".png";
}
function dotAnimate3(){
	gId("s3").src = "images/search"+4+".png";
	gId("s2").src = "images/search"+3+".png";
	gId("s1").src = "images/search"+3+".png";
}
/**阻止a事件跳转页面***********/
$(document).ready(function(){
	$(".below_options a").bind("click", function(event){
	event.preventDefault();
})
})