const function7 = function(){
const h_scr2 = window.innerWidth;
const v_scr2 = window.innerHeight;
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(120, h_scr2/v_scr2, 0.1, 1000);
camera2.position.y = 15;
camera2.lookAt(0,0,0); 

const renderer2 = new THREE.WebGLRenderer({canvas: HelloCanvas7}); 
renderer2.setSize( h_scr2, v_scr2 ); 
renderer2.shadowMap.enabled = true;
const light2 = new THREE.PointLight( 0xffffff, 1, 100 );
light2.castShadow = true; 
scene2.add( light2 );


light2.shadow.mapSize.width = 1024; 
light2.shadow.mapSize.height = 1024;
light2.shadow.radius = 20;

const sphereGeometry = new THREE.SphereGeometry( 5, 32, 32 );
const sphereMaterial = new THREE.MeshPhongMaterial( { 
    color: 0xffff00, shininess : 90.0 });
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.castShadow = true;
sphere.receiveShadow = false;
scene2.add( sphere );

const planeGeometry = new THREE.PlaneGeometry( 60, 60, 32, 32 );
const planeMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff } )
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;
plane.rotation.x = -1.57;
plane.position.set(0,-5,0);
scene2.add( plane );


var x = -12;
light2.position.set( x, 10, 0 );


	
	renderer2.render( scene2, camera2 );
}
function7();