import './style.css'
import * as THREE from 'three';
//import orbit controls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//import axis helper
import { AxesHelper } from 'three';

//import texture loader
import { TextureLoader } from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// plane geometry
const geometry = new THREE.PlaneGeometry( 15, 15);
const material = new THREE.MeshBasicMaterial( {color: "#2389da", side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
//rotate plane to be flat
plane.rotation.x = Math.PI / 2;
scene.add( plane );


// horizonatl line geometry
const lineGeometry = new THREE.BufferGeometry().setFromPoints( [new THREE.Vector3( -5, 0, 0 ), new THREE.Vector3( 5, 0, 0 )] );
//line material
const lineMaterial = new THREE.LineBasicMaterial( { color: "#0f5e9c", linewidth: 5 } );
//create the line and add it to the scene
const line = new THREE.Line( lineGeometry, lineMaterial );
line.position.y = 0.5;
scene.add( line );



const lineGeometry2 = new THREE.BufferGeometry().setFromPoints( [new THREE.Vector3( -7, 0, 2 ), new THREE.Vector3( 7, 0, 2 )] );
const lineMaterial2 = new THREE.LineBasicMaterial( { color: "#0f5e9c" } );
const line2 = new THREE.Line( lineGeometry2, lineMaterial2 );
line2.position.y = 1;
scene.add( line2 );


const lineGeometry3 = new THREE.BufferGeometry().setFromPoints( [new THREE.Vector3( -7, 0, 4 ), new THREE.Vector3( 7, 0, 4 )] );
const lineMaterial3 = new THREE.LineBasicMaterial( { color: "#0f5e9c" } );
const line3 = new THREE.Line( lineGeometry3, lineMaterial3 );
line3.position.y = 1.5;
scene.add( line3 );


const lineGeometry4 = new THREE.BufferGeometry().setFromPoints( [new THREE.Vector3( -7, 0, -2 ), new THREE.Vector3( 7, 0, -2 )] );
const lineMaterial4 = new THREE.LineBasicMaterial( { color: "#0f5e9c" } );
const line4 = new THREE.Line( lineGeometry4, lineMaterial4 );
line4.position.y = 2;
scene.add( line4 );


const lineGeometry5 = new THREE.BufferGeometry().setFromPoints( [new THREE.Vector3( -7, 0, -4 ), new THREE.Vector3( 7, 0, -4 )] );
const lineMaterial5 = new THREE.LineBasicMaterial( { color: "#0f5e9c" } );
const line5 = new THREE.Line( lineGeometry5, lineMaterial5 );
line5.position.y = 2.5;
scene.add( line5 );


//make new plane geometry
const geometry2 = new THREE.PlaneGeometry( 8, 8);
const material2 = new THREE.MeshBasicMaterial( {color: "#EDC9AF", side: THREE.DoubleSide} );
const plane2 = new THREE.Mesh( geometry2, material2 );
//rotate plane to be flat
plane2.rotation.x = Math.PI / 2;
plane2.position.y = 1.1;
scene.add( plane2 );

//make cilinder geometry in each corner of the plane
const geometry3 = new THREE.CylinderGeometry( 0.2, 0.2, 6, 32 );
const material3 = new THREE.MeshBasicMaterial( {color: "#964B00"} );
const cylinder = new THREE.Mesh( geometry3, material3 );
cylinder.position.x = -4;
cylinder.position.z = 4;
cylinder.position.y = 2;
scene.add( cylinder );

const geometry4 = new THREE.CylinderGeometry( 0.2, 0.2, 6, 32 );
const material4 = new THREE.MeshBasicMaterial( {color: "#964B00"} );
const cylinder2 = new THREE.Mesh( geometry4, material4 );
cylinder2.position.x = 4;
cylinder2.position.z = 4;
cylinder2.position.y = 2;
scene.add( cylinder2 );

const geometry5 = new THREE.CylinderGeometry( 0.2, 0.2, 6, 32 );
const material5 = new THREE.MeshBasicMaterial( {color: "#964B00"} );
const cylinder3 = new THREE.Mesh( geometry5, material5 );
cylinder3.position.x = -4;
cylinder3.position.z = -4;
cylinder3.position.y = 2;
scene.add( cylinder3 );


const geometry6 = new THREE.CylinderGeometry( 0.2, 0.2, 6, 32 );
const material6 = new THREE.MeshBasicMaterial( {color: "#964B00"} );
const cylinder4 = new THREE.Mesh( geometry6, material6 );
cylinder4.position.x = 4;
cylinder4.position.z = -4;
cylinder4.position.y = 2;
scene.add( cylinder4 );


//make new plane geometry for the top
// const geometry7 = new THREE.PlaneGeometry( 8, 8);
// const material7 = new THREE.MeshBasicMaterial( {color: "#fff", side: THREE.DoubleSide} );
// const plane3 = new THREE.Mesh( geometry7, material7 );
//rotate plane to be flat
// plane3.rotation.x = Math.PI / 2;
// plane3.position.y = 5;
// scene.add( plane3 );


//make new plane for the sides
const geometry8 = new THREE.PlaneGeometry( 4, 8);
const material8 = new THREE.MeshBasicMaterial( {color: "#242561", side: THREE.DoubleSide} );
const plane4 = new THREE.Mesh( geometry8, material8 );
//rotate plane to be flat
plane4.rotation.z = Math.PI / 2;
plane4.position.y = 3;
plane4.position.x = 0;
plane4.position.z = -4
scene.add( plane4 );


const geometry9 = new THREE.PlaneGeometry( 4, 8);
const material9 = new THREE.MeshBasicMaterial( {color: "#242561", side: THREE.DoubleSide} );
const plane5 = new THREE.Mesh( geometry9, material9 );
//rotate plane to be flat
plane5.rotation.z = Math.PI / 2;
//rotate 90 degrees
plane5.rotation.y = Math.PI / 2;
plane5.position.y = 3;
plane5.position.x = -4;
plane5.position.z = 0
scene.add( plane5 );


const geometry10 = new THREE.PlaneGeometry( 4, 8);
const material10 = new THREE.MeshBasicMaterial( {color: "#242561", side: THREE.DoubleSide} );
const plane6 = new THREE.Mesh( geometry10, material10 );
//rotate plane to be flat
plane6.rotation.z = Math.PI / 2;
//rotate 90 degrees
plane6.rotation.y = Math.PI / 2;
plane6.position.y = 3;
plane6.position.x = 4;
plane6.position.z = 0
scene.add( plane6 );

//cone geometry on top
const geometry11 = new THREE.ConeGeometry( 7, 4, 32 );
const material11 = new THREE.MeshBasicMaterial( {color: "#964B00"} );
const cone = new THREE.Mesh( geometry11, material11 );
cone.position.y = 7;
scene.add( cone );



const geometry12 = new THREE.PlaneGeometry( 4, 2);
const material12 = new THREE.MeshBasicMaterial( {color: "#242541", side: THREE.DoubleSide} );
const plane7 = new THREE.Mesh( geometry12, material12 );
//rotate plane to be flat
plane7.rotation.z = Math.PI / 2;
plane7.position.y = 3;
plane7.position.x = -3;
plane7.position.z = 2
scene.add( plane7 );


const geometry13 = new THREE.PlaneGeometry( 4, 2);
const material13 = new THREE.MeshBasicMaterial( {color: "#242541", side: THREE.DoubleSide} );
const plane8 = new THREE.Mesh( geometry13, material13 );
//rotate plane to be flat
plane8.rotation.z = Math.PI / 2;

plane8.position.y = 3;
plane8.position.x = 3;
plane8.position.z = 2
scene.add( plane8 );






//orbit controls
const controls = new OrbitControls( camera, renderer.domElement );


// const axisHelper = new AxesHelper( 5 );
// scene.add( axisHelper );

camera.position.z = 14;
camera.position.y = 5;

function animate() {
	requestAnimationFrame( animate );

	line.position.y = Math.sin(Date.now() * 0.001) * 1;
  line2.position.y = Math.sin(Date.now() * 0.001 + 1) * 1;
  line3.position.y = Math.sin(Date.now() * 0.001 + 2) * 1;
  line4.position.y = Math.sin(Date.now() * 0.001 - 1) * 1;
  line5.position.y = Math.sin(Date.now() * 0.001 - 2) * 1;
  controls.update();

	renderer.render( scene, camera );
}

animate();