const function9 = function(){

const h_scr2 = window.innerWidth;
const v_scr2 = window.innerHeight;
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(120, h_scr2/v_scr2, 0.1, 1000);
camera2.position.z = 10; 
camera2.position.x = 30;

const renderer2 = new THREE.WebGLRenderer({canvas: HelloCanvas9}); 
renderer2.setSize( h_scr2, v_scr2 ); 
renderer2.shadowMap.enabled = true;
renderer2.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap


const light2 = new THREE.PointLight( 0xffffff, 1, 100 );

light2.position.set( 0, 0, 0 );

light2.castShadow = true;
scene2.add( light2 );


const sphereGeometry2 = new THREE.SphereGeometry( 1, 32, 32 );
const sphereMaterial2 = new THREE.MeshPhongMaterial( { 
    color: 0xffff00, shininess : 90.0 });
const sphere2 = new THREE.Mesh( sphereGeometry2, sphereMaterial2 );
sphere2.castShadow = true; //default is false
sphere2.receiveShadow = true; //default
sphere2.position.z = -5
scene2.add( sphere2 );


const sphereGeometry2_1 = new THREE.SphereGeometry( 5, 32, 32 );
const sphereMaterial2_1 = new THREE.MeshPhongMaterial( { 
    color: 0xffff00, shininess : 90.0 });
const sphere2_1 = new THREE.Mesh( sphereGeometry2_1, sphereMaterial2_1 );
sphere2_1.castShadow = true;
sphere2_1.position.z = -15
scene2.add( sphere2_1 );

const planeGeometry2 = new THREE.PlaneGeometry( 60, 60, 32, 32 );
const planeMaterial2 = new THREE.MeshStandardMaterial( { color: 0xffffff } )
const plane2 = new THREE.Mesh( planeGeometry2, planeMaterial2 );
plane2.receiveShadow = true;
plane2.position.z = -30;
scene2.add( plane2 );

const helper2 = new THREE.CameraHelper( light2.shadow.camera );
scene2.add( helper2 );


var x2 = -8;
var z2 = 0;
var x_trans2 = 0;

const animate2 = function () {
	requestAnimationFrame( animate2 );
/*
    if(x2>=8)
    {
        x_trans2 = -0.1;
    }
    else if(x2<=-8)
    {
        x_trans2 = +0.1;
    }

    x2 += x_trans2;


	light2.position.set( x, 0, 0 );
    plane2.position.z = -30;
    */
    plane2.position.z -= 0.05;

	renderer2.render( scene2, camera2 );
};
//animate2();
renderer2.render( scene2, camera2 );
}
function9();