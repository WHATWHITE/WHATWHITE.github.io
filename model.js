import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';

//Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x72645b);
scene.fog = new THREE.Fog(0x72645b, 120, 200);
scene.add(new THREE.AxesHelper(30));

//ground
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry( 400, 400 ),
    new THREE.MeshPhongMaterial( { color: 0xcbcbcb, specular: 0x474747 } )
);
plane.rotation.x = - Math.PI / 2;
plane.position.y = - 21;
scene.add( plane );

plane.receiveShadow = true;


//Model
const loader = new STLLoader();
loader.load( './model/main.stl', function ( geometry ) {

    const material = new THREE.MeshPhongMaterial( { 
        color: 0xe63223, 
        specular: 0x494949, 
        shininess: 200 
    } );
    const mesh = new THREE.Mesh( geometry, material );

    mesh.position.set( 0, 3, 0 );
    mesh.rotation.set( -Math.PI / 2, 0, 0 );
    mesh.scale.set( 0.1, 0.1, 0.1 );

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add( mesh );
} );

loader.load( './model/frame.stl', function ( geometry ) {

    const material = new THREE.MeshPhongMaterial( { 
        color: 0xffc90e, 
        specular: 0x494949, 
        shininess: 200 
    } );
    const mesh = new THREE.Mesh( geometry, material );

    mesh.position.set( 0, 3, 0 );
    mesh.rotation.set( -Math.PI / 2, 0, 0 );
    mesh.scale.set( 0.1, 0.1, 0.1 );

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add( mesh );
} );

loader.load( './model/lid_outer.stl', function ( geometry ) {

    const material = new THREE.MeshPhongMaterial( { 
        color: 0xffc90e, 
        specular: 0x494949, 
        shininess: 200 
    } );
    const mesh = new THREE.Mesh( geometry, material );

    mesh.position.set( 0, 3, 0 );
    mesh.rotation.set( -Math.PI / 2, 0, 0 );
    mesh.scale.set( 0.1, 0.1, 0.1 );

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add( mesh );
} );

loader.load( './model/pole.stl', function ( geometry ) {

    const material = new THREE.MeshPhongMaterial( { 
        color: 0xffc90e, 
        specular: 0x494949, 
        shininess: 200 
    } );
    const mesh = new THREE.Mesh( geometry, material );

    mesh.position.set( 0, 3, 0 );
    mesh.rotation.set( -Math.PI / 2, 0, 0 );
    mesh.scale.set( 0.1, 0.1, 0.1 );

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add( mesh );
} );

loader.load( './model/tassels.stl', function ( geometry ) {

    const material = new THREE.MeshPhongMaterial( { 
        color: 0xe63223, 
        specular: 0x494949, 
        shininess: 200 
    } );
    const mesh = new THREE.Mesh( geometry, material );

    mesh.position.set( 0, 3, 0 );
    mesh.rotation.set( -Math.PI / 2, 0, 0 );
    mesh.scale.set( 0.1, 0.1, 0.1 );

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add( mesh );
} );

loader.load( './model/holder.stl', function ( geometry ) {

    const material = new THREE.MeshPhongMaterial( { 
        color: 0x977c20, 
        specular: 0x494949, 
        shininess: 200 
    } );
    const mesh = new THREE.Mesh( geometry, material );

    mesh.position.set( 0, 3, 0 );
    mesh.rotation.set( -Math.PI / 2, 0, 0 );
    mesh.scale.set( 1, 1, 1 );

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add( mesh );
} );

//Light
const pointLight = new THREE.PointLight(0xffffff,3,0,0);
pointLight.position.set(20, 40, 20);
pointLight.castShadow = true;
scene.add(pointLight);
const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
scene.add(pointLightHelper);

const ambientlight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientlight);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(20, 20, 30);// directionalLight.target = mesh;// 方向光指向对象网格模型mesh，可以不设置，默认的位置是0,0,0
// directionalLight.castShadow = true;
// scene.add(directionalLight);
// const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight,1,0xff0000);
// scene.add(dirLightHelper);


//Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(60, 20, 60 ); 

camera.lookAt(0, 0, 0);

//Render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.render(scene, camera);
document.body.appendChild( renderer.domElement );

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 2;
//controls.enablePan = false;
controls.addEventListener('change', function () {
    renderer.render(scene, camera); //执行渲染操作
});//监听鼠标、键盘事件
function animate() {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
}
animate();