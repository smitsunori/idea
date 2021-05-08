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
		
		p.createCanvas(windowWidth,windowHeight);

		centerX = p.width/2,
		centerY = p.height/2;
		
		p.background(180);
		p.stroke(0);
		p.strokeWeight(1);
		p.fill(255, 25);

	}

	p.draw = () => {
		if(diam <= 400){
			//p.background(180);
			p.ellipse(centerX, centerY, diam, diam);
			diam += 10;
		}
	}


}



if(document.querySelector('body').classList.contains('04')){
	console.log('04');
	new p5(sketch);
}