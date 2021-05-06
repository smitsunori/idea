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
		//p.background(0);
		
		
	}

	p.draw = () => {
		p.ellipse(100, 100, 100, 100);
	}

}

new p5(sketch)