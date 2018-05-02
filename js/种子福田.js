// 创建圆点和时间
function createDot(time){
	var timeWrap = document.createElement("div")
	var o1 = document.createElement("div");
	var o2 = document.createElement("div");
	var o3 = document.createElement("div");
	var timer = document.createElement("div")
	timeWrap.className = "timeWrap"
	o1.className = "dot1";
	o2.className = "dot2";
	o3.className = "dot3";
	timer.className = "timer";
	timer.innerHTML = time;
	timeWrap.appendChild(o1);
	timeWrap.appendChild(o2);
	timeWrap.appendChild(o3);
	timeWrap.appendChild(timer);
	return timeWrap
}
//创建信息框
function createInf(time,things,type,score){
	var thingsWrap = document.createElement("div");
	var thing = document.createElement("span");
	var check = document.createElement("span");
	var img1 = document.createElement("img");
	var img2 = document.createElement("img");
	var checkAgain = document.createElement("span");
	var br = document.createElement("br");
	var typ = document.createElement("span");
	var sco = document.createElement("span");
	var no_check = document.getElementById("no_check");
	thingsWrap.className = "thingsWrap";
	thing.className = "thing";
	thing.className += " " + "left"
	check.className = "check";
	checkAgain.className = "checkAgain";
	typ.className = "typ";
	typ.className += " " + "left"
	sco.className = "sco";
	thing.innerHTML = time+things;
	check.innerHTML = "审核";
	checkAgain.innerHTML = "复审";
	typ.innerHTML = "类型:"+type;
	sco.innerHTML = "+"+score+"分";
	img1.src = "images/yes.png";
	img2.src = "images/yes.png";
	thingsWrap.appendChild(thing);
	thingsWrap.appendChild(check);
	thingsWrap.appendChild(img1);
	thingsWrap.appendChild(checkAgain);
	thingsWrap.appendChild(img2);
	thingsWrap.appendChild(br);
	thingsWrap.appendChild(typ);
	thingsWrap.appendChild(sco);
	return thingsWrap
}

// 给项目绑定点事件
var item = document.getElementsByClassName("item");
var content = document.getElementsByClassName("content");
for (var i = 0; i < item.length; i++){
	(function(i){
		console.log(item[i]);
		item[i].addEventListener("click",function(){

			// item[i].style.color = "#fd6252";
			console.log(content.length);
			for(var j = 0; j < content.length; j++){
				if (j==i){
					content[j].style.display = "block";
					item[j].style.color = "#fd6252";
				}
				else{
					content[j].style.display = "none";
					item[j].style.color = "#aaa";
				}
			}
	});
	})(i)
}
var no_check = document.getElementById("no_check")
var check = document.getElementById("check")
var check_again = document.getElementById("check_again")
var cancel = document.getElementById("cancel")

no_check.appendChild(createDot("2018.3.3"));
no_check.appendChild(createInf("1月45日","倒垃圾","临时性加分",30));
no_check.appendChild(createInf("1月45日","倒垃圾","临时性加分",30));
no_check.appendChild(createDot("2017.8.6"));
no_check.appendChild(createInf("1月45日","倒垃圾","临时性加分",30));
no_check.appendChild(createDot("2017.8.6"));
no_check.appendChild(createInf("1月45日","倒垃圾","临时性加分",30));

check.appendChild(createDot("2018.3.3"));
check.appendChild(createInf("1月45日","倒垃圾","临时性加分",30));
check.appendChild(createDot("2018.3.3"));
check.appendChild(createInf("1月45日","倒垃圾","临时性加分",30));

check_again.appendChild(createDot("2018.3.3"));
check_again.appendChild(createInf("1月45日","倒垃圾","临时性加分",30));
no_check.appendChild(createDot("2017.8.6"));
no_check.appendChild(createInf("1月45日","倒垃圾","临时性加分",30));

cancel.appendChild(createDot("2018.3.3"));
cancel.appendChild(createInf("1月45日","倒垃圾","临时性加分",30));
cancel.appendChild(createInf("1月45日","倒垃圾","临时性加分",30));