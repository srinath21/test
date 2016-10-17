var numberOfFaces=5;
function generate_image(){
	var theLeftSide=document.getElementById("leftSide");
	var i=0;
	while(i<numberOfFaces){
		var img=document.createElement("img");
		img.src="smile.png";
		img.style.left=Math.floor(Math.random()*400)+"px";
		img.style.top=Math.floor(Math.random()*400)+"px";
		theLeftSide.appendChild(img);
		i++;
	}
	var theRightSide=document.getElementById("rightSide");
	var leftSideImages=theLeftSide.cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastChild);
	theRightSide.appendChild(leftSideImages);
	var theBody=document.getElementsByTagName("body")[0];
	theLeftSide.lastChild.onclick=function nextlevel(event) {
                               while(theLeftSide.firstChild)
                                        theLeftSide.removeChild(theLeftSide.firstChild);
                               while(theRightSide.firstChild)
                                        theRightSide.removeChild(theRightSide.firstChild);

				event.stopPropagation();
				numberOfFaces+=5;
				generate_image();
			};
	theBody.onclick=function gameOver() {
				alert("Game Over!");
				theBody.click=null;
				theLeftSide.lastChild.onclick=null;
			};
}

