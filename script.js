var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");

console.log(color1);
console.log(color2);
function setgradient(){
	alert("hello");
	body.style.background = "linear-gradient(to right," + 
							"," + "," +
							 color1.value + "," +
							 color.value + ")";


}

/*color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);*/