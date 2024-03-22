import EventEmitter from "./EventEmitter";

export default class Sizes extends EventEmitter {
	constructor() {
		super();

		// Setup
		// this.width = window.innerWidth;
		// this.height = window.innerHeight;

		this.viewport = {}
		this.$sizeViewport = document.createElement('div');
		this.$sizeViewport.style.width = '100vw';
		this.$sizeViewport.style.height = '100vh';
		this.$sizeViewport.style.position = 'absolute';
		this.$sizeViewport.style.top = 0;
		this.$sizeViewport.style.left = 0;
		this.$sizeViewport.style.pointerEvents = 'none'

//		alert(document.querySelector('.section--1').clientHeight);
		this.pixelRatio = Math.min(window.devicePixelRatio, 2);

		// Resize event
		this.resize = this.resize.bind(this)
		window.addEventListener('resize', this.resize)

		this.resize()

		// Resize event


		// window.addEventListener('resize', () => {
		//
		// 	document.body.appendChild(this.$sizeViewport)
		// 	this.viewport.width = this.$sizeViewport.offsetWidth
		// 	this.viewport.height = this.$sizeViewport.offsetHeight
		// 	document.body.removeChild(this.$sizeViewport)
		//
		//
		// 	this.width = this.$sizeViewport.offsetWidth;
		// 	this.height = this.$sizeViewport.offsetHeight;
		// 	this.pixelRatio = Math.min(window.devicePixelRatio, 2);
		//
		// 	this.trigger('resize');
		// });
	}


	resize()
	{
		document.body.appendChild(this.$sizeViewport)
		this.viewport.width = this.$sizeViewport.offsetWidth
		this.viewport.height = this.$sizeViewport.offsetHeight
		document.body.removeChild(this.$sizeViewport)

		this.width = window.innerWidth
		this.height = window.innerHeight
		this.pixelRatio = Math.min(window.devicePixelRatio, 2);
		this.trigger('resize')
	}
}
