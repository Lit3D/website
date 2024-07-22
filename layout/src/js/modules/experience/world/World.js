import * as THREE from 'three';
import Experience from "../Experience";
import Environment from "./Environment";
import Blob from "./Blob";
import Overlay from "./Overlay";

export default class World {
	constructor() {
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.resources = this.experience.resources;

		// Wait for resources loading
		this.resources.on('loaded', () => {

			// Add blob

			// Setup environment after resources loaded
			// this.environment = new Environment();
		});

		this.blob = new Blob();
		this.overlay = new Overlay();
	}

	update() {
		if (this.overlay) {
			this.overlay.update();
		}

		if (this.blob) {
			this.blob.update();
		}
	}
}
