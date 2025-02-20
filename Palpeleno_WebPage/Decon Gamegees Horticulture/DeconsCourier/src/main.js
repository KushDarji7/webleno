import "./style.css";

import * as THREE from "three";

// container that controls object within canvas like, camera, lighting.
// uses scene camera and render to create objects in the canvas
const scene = new THREE.Scene();

// allows to see the screen and objects in it
// setting the rendered screen size as the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / innerHeight,
  0.1,
  1000
);

// renders graphics to the screen, instatiates the rednerer
const renderer = new THREE.WebGL3DRenderTarget({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

//render draws on to the canvas that is the scene created above
renderer.render(scene, camera);

// creating objects using geometry

const geometry = new THREE.SphereGeometry(16, 16, 8);
// the wrapping paper for an object, releyes on light source but some do not
const material = new THREE.MeshBasicMaterial({ color: green, wireframe: true });
const sphere = THREE.Mesh(geometry, material);

scene.add(sphere);

//recursive animate functions that tellst he browser to repaint the screen
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  //
  // animate the geomerty object created
  //
}
animate();
