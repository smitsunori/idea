import p5 from 'p5';

const sketch = (p) => {

	let centerX = p.width/2,
		 centerY = p.height/2;

	let diam = 10;


	const initialSetUp = () => {
		p.createCanvas(p.windowWidth,p.windowHeight);		
		p.background(180);
		p.strokeWeight(4);
		p.strokeCap(p.SQUARE);

		for(let h = 10; h <= p.height - 15; h+=10) {
			p.stroke(0, 255-h);
			p.line(10, h, p.width - 20, h);
			p.stroke(255, h);
			p.line(10, h+4, p.width - 20, h+4);
		}
	}


	p.setup = () => {
		initialSetUp();
	}


	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth,p.windowHeight);
		centerX = p.width/2,
		centerY = p.height/2;

		console.log(p.windowWidth);
		console.log(p.windowHeight);
		initialSetUp();
	}


}


if(document.querySelector('body').classList.contains('05')){
	console.log('05');
	new p5(sketch);
}