function randombg(){
	//format: [image, source link, title style]
	var imgs = [["<img src='/img/bgs/building.jpg' id='background'>",
				 "<a style='color:black;' href='https://chromfell.artstation.com'>Background source, refresh for more cool art!</a>",
				 "5px 5px red"],
				["<img src='/img/bgs/dog.png' id='background'>",
				 "Original artwork. Refresh for more cool art!",
				 "5px 5px white"],
				["<img src='/img/bgs/city.jpg' id='background'>",
				 "<a style='color:black;' href='https://adammidd.artstation.com'>Background source, refresh for more cool art!</a>",
				 "5px 5px #10ff00"],
				["<img src='/img/bgs/god.jpg' id='background'>",
				 "<a style='color:gray;' href='https://chingyeh.artstation.com'>Background source, refresh for more cool art!</a>",
				 "5px 5px red"]
				];

	var rand = Math.floor(Math.random() * imgs.length) + 0;
	document.getElementById("random").innerHTML = imgs[rand][0];
	document.getElementById("imgsources").innerHTML = imgs[rand][1];
	document.getElementById("bartitle").style.textShadow = imgs[rand][2];
}