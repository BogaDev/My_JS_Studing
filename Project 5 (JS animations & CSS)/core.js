window.onload = function() {
	var t = setInterval(move, 10);
	// 0 - move right, 1 - move left
	var side = 0;

	// start pos
	var pos = 0;
	var box = document.getElementById("box");

	function move() {
		if (side === 0) {
			if (pos >= 150) {
				side = 1;
			} else {
				pos += 1;
				box.style.left = pos + "px";
			}
		} else if(side === 1)
		{
			if (pos <= 0) {
				side = 0;
			} else {
				pos -= 1;
				box.style.left = pos + "px";
			}
		}
	}
};