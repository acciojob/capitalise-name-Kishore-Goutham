//your JS code here. If required.
let i = document.getElementById("fname")

i.addEventListener("change",function(){
	let v = i.value.toUpperCase();
	i.value= v
})