function randombg(){
	var rand = Math.floor(Math.random() * 3) + 0;
	var imgs = ["<img src='/img/bgs/building.jpg' id='background'>",
				"<img src='/img/bgs/dog.png' id='background'>",
				"<img src='/img/bgs/city.jpg' id='background'>"];
	var titleStyles = ["5px 5px red",
					   "5px 5px white",
					   "5px 5px #10ff00"];
	document.getElementById("random").innerHTML = imgs[rand];
	document.getElementById("bartitle").style.textShadow = titleStyles[rand];
}