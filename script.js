//your JS code here. If required.
const square = document.querySelectorAll(".square")
for(let square of squares){
	square.addEventListener("mouseover",(e)=>addBgcolor(e))
	square.addEventListener("mouseout",(e)=>addDefaultBgColor(e))													
}

function addBgcolor(e){
	console.log(e.target.id)
	for(let i = 0 ; i<squares.length;i++){
		if(squares[i] !== e.target.id){
			squares[i].style.backgroundcolor = "#E6E6FA"
		}
	}
		}


function addDefaultBgColor(){
		for(let square of squares){
			square.style.backgroundColor = "#E6E6FA"
		}
}