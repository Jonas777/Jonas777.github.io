function calcAge()
{
	var birthday = new Date(1995, 03, 07);
	var today = new Date();
	var diff = today.valueOf() - birthday.valueOf();
	var age = Math.floor(diff / 31536000000);
	document.getElementById("agecontainer").innerHTML = age;
}