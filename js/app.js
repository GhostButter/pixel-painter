function getBackgroundColor(idName){
	var element = document.getElementById(idName);
	var style = window.getComputedStyle(element,null).getPropertyValue("background-color")
	document.getElementById("selectedColorName").style.backgroundColor = style
}

function changeColorOnClick(idName){
	var orignalElementColor = document.getElementById("selectedColorName").style.backgroundColor
	document.getElementById(idName).style.backgroundColor = orignalElementColor
	console.log(orignalElementColor)
}