import p5 from 'p5';

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
		p.stroke(200);
		
		//p.fill('rgba(220, 220, 220, .5)');
		//console.log(p.width/2);
	}

	let strokeWeightNum = 1,
		gaining = true;
	const speed = 1;

	p.draw = () => {
		p.background(255);
		p.smooth();
		p.strokeWeight(10);
		p.fill(255);
		p.ellipse(p.width/6, p.height/3, p.height/2, p.height/2);

		p.strokeWeight(10);
		p.fill(200);
		p.ellipse(p.width*0.5, p.height/2, p.height/1.5, p.height/1.5);
		
		/*
		p.strokeWeight(strokeWeightNum);
		//console.log(strokeWeightNum )
		if(strokeWeightNum > p.height/2){
			gaining = false;
		} else if(strokeWeightNum < 1){
			gaining = true;
		}

		if(gaining){
			strokeWeightNum+=speed;
		} else {
			strokeWeightNum-=speed;
		}*/

		
	}

}



if(document.querySelector('body').classList.contains('01')){
	new p5(sketch);
}