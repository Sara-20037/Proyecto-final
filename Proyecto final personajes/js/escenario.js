const scene = new THREE.Scene();

var loader = new THREE.TextureLoader()
loader.load('./Img/fondo.png', function(textura) {
    scene.background = textura;
});

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//personaje 1
const gltfLoader = new THREE.GLTFLoader();

gltfLoader.load('./Img/tornado/Torn.gltf',
    (gltf) => {
        var loaderObjeto = gltf.scene;
        loaderObjeto.scale.set(0.8, 0.8, 0.8);

        loaderObjeto.position.x = -20;
        loaderObjeto.position.y = -40;
        loaderObjeto.position.z = 1;

        scene.add(loaderObjeto);
        console.log('carga completa');

        let object = [loaderObjeto]

        const DragControls = new THREE.DragControls(object, camera, renderer.domElement);
        DragControls.deactivate();
        DragControls.activate();

        DragControls.addEventListener("hoveron", function(event) {
            event.object.material.wireframe = true;
            event.object.scale.y *= 1;
        });

        DragControls.addEventListener("hoveroff", function(event) {
            event.object.material.wireframe = false;
            event.object.scale.y /= 1;
        });

    }, () => {
        console.log('cargando');

    }, () => {
        console.log('error');
    }
);

//personaje 2

gltfLoader.load('./Img/Dino/dinosaurio.gltf',
    (gltf) => {
        var loaderObjeto2 = gltf.scene;
        loaderObjeto2.scale.set(15, 15, 15);

        loaderObjeto2.position.x = 40;
        loaderObjeto2.position.y = -49;
        loaderObjeto2.position.z = 5;

        scene.add(loaderObjeto2);
        console.log('carga completa');

        let object = [loaderObjeto2]

        const DragControls = new THREE.DragControls(object, camera, renderer.domElement);
        DragControls.deactivate();
        DragControls.activate();

        DragControls.addEventListener("hoveron", function(event) {
            event.object.material.wireframe = true;
            event.object.scale.y *= 1;
        });

        DragControls.addEventListener("hoveroff", function(event) {
            event.object.material.wireframe = false;
            event.object.scale.y /= 1;
        });

    }, () => {
        console.log('cargando');

    }, () => {
        console.log('error');
    }
);

//personaje 3

gltfLoader.load('./Img/niño/flin.gltf',
    (gltf) => {
        var loaderObjeto3 = gltf.scene;
        loaderObjeto3.scale.set(0.2, 0.2, 0.2);

        loaderObjeto3.position.x = -70;
        loaderObjeto3.position.y = -49;
        loaderObjeto3.position.z = 10;

        scene.add(loaderObjeto3);
        console.log('carga completa');

        let object = [loaderObjeto3]

        const DragControls = new THREE.DragControls(object, camera, renderer.domElement);
        DragControls.deactivate();
        DragControls.activate();

        DragControls.addEventListener("hoveron", function(event) {
            event.object.material.wireframe = true;
            event.object.scale.y *= 1;
        });

        DragControls.addEventListener("hoveroff", function(event) {
            event.object.material.wireframe = false;
            event.object.scale.y /= 1;
        });

    }, () => {
        console.log('cargando');

    }, () => {
        console.log('error');
    }
);

const Light1 = new THREE.DirectionalLight(0xffffff, 1)
Light1.position.set(6, 6, 6)
scene.add(Light1)
const al = new THREE.AmbientLight(0xffffff, 1)
scene.add(al)

camera.position.z = 90;

//animacion
function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}
animate();