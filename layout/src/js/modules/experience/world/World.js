import * as THREE from 'three';
import Experience from "../Experience";
import Environment from "./Environment";
import Blob from "./Blob";

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
	}

	update() {
		if (this.fox) {
			this.fox.update();
		}

		if (this.blob) {
			this.blob.update();
		}
	}
}
