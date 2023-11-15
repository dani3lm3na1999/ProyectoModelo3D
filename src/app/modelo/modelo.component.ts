import { AfterViewInit, ElementRef, ViewChild, Component } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css']
})
export class ModeloComponent implements AfterViewInit {
  @ViewChild('rendererContainer') rendererContainer?: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene: any;
  camera: any;
  mesh: any;

  constructor() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    const loader = new GLTFLoader();
    loader.load('assets/camiseta.glb', (gltf) => {
      this.scene.add(gltf.scene);
    }, undefined, function (error) {
      console.error(error);
    });
  }

  ngAfterViewInit(): void {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer?.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }

}
