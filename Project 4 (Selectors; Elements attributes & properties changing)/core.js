var cartoonPanda = "https://tinyjpg.com/images/social/website.jpg";
var realPanda = "https://upload.wikimedia.org/wikipedia/commons/e/e2/Fressender_Panda.JPG";

function changePicture() {
	var el = document.getElementsByTagName("img");
	var message = document.getElementById("message");
	switch (el[0].src) {
		case cartoonPanda:
			el[0].src = realPanda;
			message.innerHTML = "Yay! Click one more time to make it cartoon again.";
			break;
		case realPanda:
			el[0].src = cartoonPanda;
			message.innerHTML = "Click on panda to make it real!";
			break;
		default:
			alert(el[0].src);
		break;
	}
}