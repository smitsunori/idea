import p5 from 'p5';



const sm = [];

sm.updateWindowSize = () => {

	
	
	
}
sm.updateWindowSize();

const sketch = (p) => {

	let windowWidth,
			windowHeight;

	const setCanvasSize = () => {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		
	}
	setCanvasSize();

	window.addEventListener('resize', ()=> {
		setCanvasSize();
		console.log('resize')
		p.resizeCanvas(windowWidth,windowHeight);
	})

	p.setup = () => {
		p.createCanvas(windowWidth,windowHeight);
	}
	let posX = 0,
			posY = 0;
	const rectW = 120,
				rectH = 120;
	p.draw = () => {
		p.background(255);
		
		p.fill(111);
		p.strokeWeight(0)
		p.rect(posX, posY, rectW, rectH);
		
		posX += 8;
		posY += 2;
		if(posX > windowWidth || posY > windowHeight){
			posX = 0;
			posY = 0;
		}
	}

}

new p5(sketch)