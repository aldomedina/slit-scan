let video;
let x = 0;
function setup() {
	createCanvas(800, 240);
	pixelDensity(1);
	video = createCapture(VIDEO);
	video.size(320, 240);
	background(51);
}

function draw() {
	video.loadPixels();
	const vw = video.width;
	const vh = video.height;
	copy(video, vw / 2, 0, 1, vh, x, 0, 1, vh);
	if (x > 799) {
		x = 0;
	}
	x++;
}
