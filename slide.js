var i = 1;
function getSlider()
{
	var img = document.getElementById("slide");
	if(i<4)
	{
		img.src = "sliderImage/"+i+".jpg";
	    i++;
	}
	else 
	{
		img.src= "sliderImage/"+i+".png";
		i++;
	}

	if (i === 7)
		i=1;
	window.setTimeout("getSlider()", 2300);
}