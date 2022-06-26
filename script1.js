const function_1 = function(){
    const h_scr2 = window.innerWidth;
    const v_scr2 = window.innerHeight;
    const scene2 = new THREE.Scene();
    const camera2 = new THREE.PerspectiveCamera(120, h_scr2/v_scr2, 0.1, 1000);
    camera2.position.z = 10; // (0,0,z)에서 (0,0,0)을 보고있는 것
    
    const renderer2 = new THREE.WebGLRenderer({canvas: HelloCanvas1}); 
    renderer2.setSize( h_scr2, v_scr2 ); 
  
    const light2 = new THREE.PointLight( 0xffffff, 1, 100 );
    light2.position.set( 0, 0, 0 );
    scene2.add( light2 );


    const sphereGeometry = new THREE.SphereGeometry( 2, 32, 32 );
    const sphereMaterial = new THREE.MeshPhongMaterial( { 
    color: 0xffff00, shininess : 90.0 });
    const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    sphere.position.set(0,8,0);
    scene2.add( sphere );

    const sphereGeometry2 = new THREE.SphereGeometry( 2, 32, 32 );
    const sphereMaterial2 = new THREE.MeshPhongMaterial( { 
    color: 0xffff00, shininess : 90.0 });
    const sphere2 = new THREE.Mesh( sphereGeometry2, sphereMaterial2 );
    sphere2.position.set(-8,8,0);
    scene2.add( sphere2 );

    const sphereGeometry3 = new THREE.SphereGeometry( 2, 32, 32 );
    const sphereMaterial3 = new THREE.MeshPhongMaterial( { 
    color: 0xffff00, shininess : 90.0 });
    const sphere3 = new THREE.Mesh( sphereGeometry3, sphereMaterial3 );
    sphere3.position.set(-8,0,0);
    scene2.add( sphere3 );

    const sphereGeometry4 = new THREE.SphereGeometry( 2, 32, 32 );
    const sphereMaterial4 = new THREE.MeshPhongMaterial( { 
    color: 0xffff00, shininess : 90.0 });
    const sphere4 = new THREE.Mesh( sphereGeometry4, sphereMaterial4 );
    sphere4.position.set(-8,-8,0);
    scene2.add( sphere4 );

    const sphereGeometry5 = new THREE.SphereGeometry( 2, 32, 32 );
    const sphereMaterial5 = new THREE.MeshPhongMaterial( { 
    color: 0xffff00, shininess : 90.0 });
    const sphere5 = new THREE.Mesh( sphereGeometry5, sphereMaterial5 );
    sphere5.position.set(0,-8,0);
    scene2.add( sphere5 );

    const sphereGeometry6 = new THREE.SphereGeometry( 2, 32, 32 );
    const sphereMaterial6 = new THREE.MeshPhongMaterial( { 
    color: 0xffff00, shininess : 90.0 });
    const sphere6 = new THREE.Mesh( sphereGeometry6, sphereMaterial6 );
    sphere6.position.set(8,-8,0);
    scene2.add( sphere6 );

    const sphereGeometry7 = new THREE.SphereGeometry( 2, 32, 32 );
    const sphereMaterial7 = new THREE.MeshPhongMaterial( { 
    color: 0xffff00, shininess : 90.0 });
    const sphere7 = new THREE.Mesh( sphereGeometry7, sphereMaterial7 );
    sphere7.position.set(8,0,0);
    scene2.add( sphere7 );

    const sphereGeometry8 = new THREE.SphereGeometry( 2, 32, 32 );
    const sphereMaterial8 = new THREE.MeshPhongMaterial( { 
    color: 0xffff00, shininess : 90.0 });
    const sphere8 = new THREE.Mesh( sphereGeometry8, sphereMaterial8 );
    sphere8.position.set(8,8,0);
    scene2.add( sphere8 );

    
    const planeGeometry2 = new THREE.PlaneGeometry( 60, 60, 32, 32 );
    const planeMaterial2 = new THREE.MeshStandardMaterial( { color: 0xffffff } )
    const plane2 = new THREE.Mesh( planeGeometry2, planeMaterial2 );
    plane2.position.z = -30;
    scene2.add( plane2 );


    renderer2.render( scene2, camera2 );
    }
    function_1();