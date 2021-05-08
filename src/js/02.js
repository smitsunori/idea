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

	p.setup = () => {
		p.createCanvas(windowWidth,windowHeight);

		centerX = p.width/2,
		centerY = p.height/2;
		//p.size(500, 200);
		p.smooth();
		p.background(230);

		

		p.stroke(130, 0, 0, 255);
		p.strokeWeight(1);
		p.line(centerX - 70, centerY - 70, centerX + 70, centerY + 70);
		p.line(centerX + 70, centerY - 70, centerX - 70, centerY + 70);

		p.stroke(0, 125);
		p.strokeWeight(6);
		p.fill(255, 255);
		//p.noFill();
		p.noStroke();
		const rectSize = 50;
		p.rect(centerX, centerY, rectSize, rectSize, 8);
		p.fill(0, 255);
		p.rect(centerX - rectSize, centerY - rectSize, rectSize, rectSize, 8);

	}


}



if(document.querySelector('body').classList.contains('02')){
	console.log('02');
	new p5(sketch);
}