import p5 from 'p5';

const sketch = (p) => {

	let windowWidth,
		windowHeight;

	let centerX,
		centerY;

	const setCanvasSize = () => {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		
	}
	setCanvasSize();

	window.addEventListener('resize', ()=> {
		setCanvasSize();
		//console.log('resize')
		p.resizeCanvas(windowWidth,windowHeight);
		centerX = p.width/2,
		centerY = p.height/2;
	})

	let diam = 10;

	p.setup = () => {
		let x = addNumbers(1,2);
		console.log(x);
		p.createCanvas(windowWidth,windowHeight);

		centerX = p.width/2,
		centerY = p.height/2;
		//p.size(500, 200);
		p.smooth();
		p.background(180);
		p.stroke(0);
		p.strokeWeight(5);
		p.fill(255, 50);

	}
	let addNumbers = (a, b) => {
		const returnvalue = a + b;
		return returnvalue;
	}

	p.draw = () => {
		if(diam <= 400){
			p.background(180);
			p.ellipse(centerX, centerY, diam, diam);
			diam+=10;
		}
	}


}



if(document.querySelector('body').classList.contains('03')){
	console.log('03');
	new p5(sketch);
}