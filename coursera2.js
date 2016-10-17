colors= new Array();
colors=['blue','cyan','gold','gray','green','magenta','orange','red','white','yellow'];
var len=colors.length;
var target_index=Math.floor(Math.random()*len);
var target=colors[target_index];
while(1)
{
	var user_input=prompt("I am thinking of one of these colors:\n\n" + colors.join(",")+ "\n\nWhat color am I thinking of?");
	var i=0,flag=1,count=0;
	while(i<len)
	{
		if(user_input==colors[i])
		{
			flag=0;
			break;
		}
		i++;	
	}
	if(flag==1)
		alert("Sorry, I don't recognize your color\n\nPlease try again.");
	else{
		if(user_input<target)
			alert("Sorry, your guess is not correct!\n\nHint:your color is alphabetically lower than mine.\n\n Please try again.");
		else if(user_input>target)
			alert("Sorry, your guess is not correct!\n\nHint:your color is alphabetically higher than mine.\n\nPlease try again.");
		else{
			alert("You've guessed the right color\n\nYou took " + count + " turns.");
			mybody=document.getElementByTagName("body")[0];
			mybody.style.background=target;
		}
	}
	count++;
}

