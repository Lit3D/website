import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter {
	constructor() {
		super();

		// Setup
		this.start = Date.now();
		this.current = this.start;
		this.elapsed = 0;
		this.delta = 16;

		// Don't call function immediately, we wait one frame, because in another way delta is 0
		window.requestAnimationFrame(() => {
			this.tick();
		});
	}

	// Methods
	tick() {
		const currentTime = Date.now();
		this.delta = currentTime - this.current;
		this.current = currentTime;
		this.elapsed = this.current - this.start;

		this.trigger('tick');

		window.requestAnimationFrame(() => {
			this.tick();
		});
	};
}
