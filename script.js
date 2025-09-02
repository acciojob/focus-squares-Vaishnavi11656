//your JS code here. If required.
const square = document.querySelectorAll(".square")
for(let square of squares){
	square.addEventListener("mouseover",(e)=>addBgcolor(e))
	square.addEventListener("mouseout",(e)=>addDefaultBgColor(e))													
}

function addBgcolor(){
	const selectedBoxID = e.targert.id
	for(let i =0;i<square.length;i++){
		if(square[i].id !== selectedBoxID){
			square[i],style.backgroundColor = "#6F4E37"
		}
	}
}

function addDefaultBgColor(){
		for(let square of squares){
			square.style.backgroundColor = "#E6E6FA"
		}
}