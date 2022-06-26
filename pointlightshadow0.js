const function_0 = function(){
const h_scr2 = window.innerWidth;
const v_scr2 = window.innerHeight;
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(120, h_scr2/v_scr2, 0.1, 1000);
camera2.position.z = 10; // (0,0,z)에서 (0,0,0)을 보고있는 것

const renderer2 = new THREE.WebGLRenderer({canvas: HelloCanvas0}); 
renderer2.setSize( h_scr2, v_scr2 ); 
renderer2.shadowMap.enabled = true;
renderer2.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

const light2 = new THREE.PointLight( 0xffffff, 1, 100 );
light2.position.set( 0, 0, 0 );
scene2.add( light2 );

const planeGeometry2 = new THREE.PlaneGeometry( 60, 60, 32, 32 );
const planeMaterial2 = new THREE.MeshStandardMaterial( { color: 0xffffff } )
const plane2 = new THREE.Mesh( planeGeometry2, planeMaterial2 );
plane2.position.z = -30;
scene2.add( plane2 );

renderer2.render( scene2, camera2 );
}
function_0();