//点击展开选项
function select(){
	this.nextElementSibling.style.display = "block";
}
//点选项选择，并关闭列表
var x = document.getElementsByClassName("option");
for (i = 0; i < x.length; i++){
	(function(i){
		x[i].addEventListener("click",function(){
			x[i].parentNode.previousElementSibling.children[0].innerHTML = x[i].innerHTML;
			x[i].parentNode.style.display = "none";
	});
	})(i)
}
//点击清除input里的value
function clear(){
	this.value = "";
}
document.getElementById("detail_seed").addEventListener("click",clear);
document.getElementById("num").addEventListener("click",clear);
document.getElementById("things").addEventListener("click",clear);
document.getElementById("des").addEventListener("click",clear);
