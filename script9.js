const function1 = function(){
//그림자옵션이 꺼질 때의 점광원 테스트
//그 테스트는 구에서 시행할 것
//그림자로 인해 도형이 어두워지는 것과 그냥 빛을 받지않아 도형이 어두워진 것을 표현하는 것과의 차이를 분석할 것.
//그렇게 점광원과 점광원 그림자에 대한 테스트를 진행한 후 점광원 그림자 관련 함수들을 사용해보면서 변화를 설명할 것.
//변수명의 뒤에는 종류와 무관하게 파일 번호를 입력할 것.
const h_scr2 = window.innerWidth;
const v_scr2 = window.innerHeight;
//const h_scr = 800;
//const v_scr = 750;
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(120, h_scr2/v_scr2, 0.1, 1000);
camera2.position.z = 10; // (0,0,z)에서 (0,0,0)을 보고있는 것
camera2.position.x = 30;

//Create a WebGLRenderer and turn on shadows in the renderer
const renderer2 = new THREE.WebGLRenderer({canvas: HelloCanvas2}); 
renderer2.setSize( h_scr2, v_scr2 ); 
renderer2.shadowMap.enabled = true;
renderer2.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

//Create a PointLight and turn on shadows for the light
const light2 = new THREE.PointLight( 0xffffff, 1, 100 );
//const light2 = new THREE.DirectionalLight( 0xffffff, 1);
light2.position.set( 0, 0, 0 );
//light2.position.set( 0, 0, 1 );
//directioanl은 항상 위에서 온다.
//light2.rotaion.x = 90;
light2.castShadow = true; // default false
scene2.add( light2 );

//Set up shadow properties for the light
light2.shadow.mapSize.width = 512; // default
light2.shadow.mapSize.height = 512; // default
light2.shadow.camera.near = 0.5; // default
light2.shadow.camera.far = 500; // default

//Create a sphere that cast shadows (but does not receive them)
const sphereGeometry2 = new THREE.SphereGeometry( 1, 32, 32 );
const sphereMaterial2 = new THREE.MeshPhongMaterial( { 
    color: 0xffff00, shininess : 90.0 });
const sphere2 = new THREE.Mesh( sphereGeometry2, sphereMaterial2 );
sphere2.castShadow = true; //default is false
sphere2.receiveShadow = true; //default
sphere2.position.z = -5
//sphere2.position.z = -5
scene2.add( sphere2 );

//Create a sphere that cast shadows (but does not receive them)
const sphereGeometry2_1 = new THREE.SphereGeometry( 5, 32, 32 );
const sphereMaterial2_1 = new THREE.MeshPhongMaterial( { 
    color: 0xffff00, shininess : 90.0 });
const sphere2_1 = new THREE.Mesh( sphereGeometry2_1, sphereMaterial2_1 );
sphere2_1.castShadow = true; //default is false
sphere2_1.receiveShadow = true; //default
sphere2_1.position.z = -15
//sphere2_1.position.z = -15
scene2.add( sphere2_1 );



//Create a plane that receives shadows (but does not cast them)
const planeGeometry2 = new THREE.PlaneGeometry( 60, 60, 32, 32 );
const planeMaterial2 = new THREE.MeshStandardMaterial( { color: 0xffffff } )
const plane2 = new THREE.Mesh( planeGeometry2, planeMaterial2 );
plane2.receiveShadow = true;
plane2.position.z = -30;
scene2.add( plane2 );

//Create a helper for the shadow camera (optional)
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
function1();