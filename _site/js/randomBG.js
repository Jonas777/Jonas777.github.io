function randombg(){
	var rand = Math.floor(Math.random() * 4) + 0;
	var imgs = ["<img src='/img/bgs/building.jpg' id='background'>",
				"<img src='/img/bgs/dog.png' id='background'>",
				"<img src='/img/bgs/city.jpg' id='background'>",
				"<img src='/img/bgs/god.jpg' id='background'>"];
	var imgSrcs = ["<a href='https://chromfell.artstation.com'>Background source, refresh for more cool art!</a>",
				   "Original artwork. Refresh for more cool art!",
				   "<a href='https://adammidd.artstation.com'>Background source, refresh for more cool art!</a>",
				   "<a href='https://chingyeh.artstation.com'>Background source, refresh for more cool art!</a>"];
	var titleStyles = ["5px 5px red",
					   "5px 5px white",
					   "5px 5px #10ff00",
					   "5px 5px red"];
	document.getElementById("random").innerHTML = imgs[rand];
	document.getElementById("bartitle").style.textShadow = titleStyles[rand];
	document.getElementById("imgsources").innerHTML = imgSrcs[rand];
}