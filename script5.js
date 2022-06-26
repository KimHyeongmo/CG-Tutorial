const function5 = function(){
const h_scr2 = window.innerWidth;
const v_scr2 = window.innerHeight;
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(120, h_scr2/v_scr2, 0.1, 1000);
camera2.position.y = 15;
camera2.lookAt(0,0,0); 

//Create a WebGLRenderer and turn on shadows in the renderer
const renderer2 = new THREE.WebGLRenderer({canvas: HelloCanvas5}); 
renderer2.setSize( h_scr2, v_scr2 ); 
renderer2.shadowMap.enabled = true;
const light2 = new THREE.PointLight( 0xffffff, 1, 100 );
//const light2 = new THREE.DirectionalLight( 0xffffff, 1);
//light2.position.set( 0, 0, 1 );
//directioanl은 항상 위에서 온다.
//light2.rotaion.x = 90;
light2.castShadow = true; // default false
scene2.add( light2 );


//Set up shadow properties for the light
light2.shadow.mapSize.width = 128; // default
light2.shadow.mapSize.height = 128; // default
//light2.shadow.camera.near = 0.5; // default
//light2.shadow.camera.far = 500; // default

//Create a sphere that cast shadows (but does not receive them)
const sphereGeometry = new THREE.SphereGeometry( 5, 32, 32 );
const sphereMaterial = new THREE.MeshPhongMaterial( { 
    color: 0xffff00, shininess : 90.0 });
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.castShadow = true; //default is false
sphere.receiveShadow = false; //default
scene2.add( sphere );

//Create a plane that receives shadows (but does not cast them)
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
function5();