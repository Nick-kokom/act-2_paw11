import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

// Load the grass texture for the floor
const grassTexture = textureLoader.load('/grass.jpg')
grassTexture.repeat.set(10, 10) 
grassTexture.wrapS = THREE.RepeatWrapping 
grassTexture.wrapT = THREE.RepeatWrapping 




const snowGrass = textureLoader.load('/grass1.jpg')
snowGrass.repeat.set(10, 10) 
snowGrass.wrapS = THREE.RepeatWrapping 
snowGrass.wrapT = THREE.RepeatWrapping 




// Load a rock texture (replace with your rock texture file)
const rockTexture = textureLoader.load('/rock1.jpg')
rockTexture.wrapS = THREE.RepeatWrapping // Repeat horizontally
rockTexture.wrapT = THREE.RepeatWrapping // Repeat vertically

const Chimney= textureLoader.load('/chimney.jpg')
Chimney.wrapS = THREE.RepeatWrapping // Repeat horizontally
Chimney.wrapT = THREE.RepeatWrapping // Repeat vertically

const Cubegeometry = new THREE.BoxGeometry(0.2, 1.4, 0.5 ); 
const material = new THREE.MeshBasicMaterial( {map: Chimney } ); 
const cube = new THREE.Mesh( Cubegeometry, material );
cube.position.set(1,4,0);
scene.add( cube );


const garageGeometry = new THREE.BoxGeometry(4, 2.5, 4); // Width, height, depth
const garageMaterial = new THREE.MeshStandardMaterial({ color: 0xa0522d }); // Brown color
const garage = new THREE.Mesh(garageGeometry, garageMaterial);
garage.position.set(4, 1.25, 0); // Position the walls above the ground (adjust here to move the house)
scene.add(garage);



const pool = new THREE.BoxGeometry(8, 0.10, 4.20 ); // Width, height, depth
const poolMaterial = new THREE.MeshStandardMaterial({ color: 0x4b4b4b }); // Brown color
const pool1 = new THREE.Mesh(pool, poolMaterial);
pool1.position.set(1.8, 0, -4.4); // Position the walls above the ground (adjust here to move the house)
scene.add(pool1);

const poolwater = new THREE.BoxGeometry(6, 0.20, 4.10 ); // Width, height, depth
const poolMaterial1 = new THREE.MeshStandardMaterial({ color: 0x89e1f9 }); // Brown color
const pool2 = new THREE.Mesh(poolwater, poolMaterial1);
pool2.position.set(1.8, 0.1, -4.4); // Position the walls above the ground (adjust here to move the house)
scene.add(pool2);

// Loading the garage texture (fixed the texture reference)
const garageImage = textureLoader.load('/garage.jpg');
garageImage.wrapS = THREE.RepeatWrapping;
garageImage.wrapT = THREE.RepeatWrapping;

// Another garage wall 
const garageWallGeometry = new THREE.BoxGeometry(3, 2, 0.20); // Thin wall geometry
const garageWallMaterial = new THREE.MeshStandardMaterial({ map: garageImage });
const garageWallRight = new THREE.Mesh(garageWallGeometry, garageWallMaterial);
garageWallRight.position.set(4.3, 1.10, 2.05); // Right side of the front wall
scene.add(garageWallRight);

// Roof (Cone)
const roofGeometry1 = new THREE.ConeGeometry(3.5, 2, 4); // Radius, height, segments
const roofMaterial1 = new THREE.MeshStandardMaterial({ color: 0x8b0000 }); // Dark red color
const roof1 = new THREE.Mesh(roofGeometry1, roofMaterial1);
roof1.position.set(4, 3.5, 0); // Position roof on top of the walls (adjust here to move with walls)
roof1.rotation.y = Math.PI / 4; // Rotate to align with walls
scene.add(roof1);

const carWay = new THREE.BoxGeometry(3, 0.10, 5.20 ); 
const carmaterial = new THREE.MeshBasicMaterial( {color: 0x555555 } ); 
const cube1 = new THREE.Mesh( carWay, carmaterial );
cube1.position.set(4.3, 0, 4);
scene.add( cube1 );





/**
 * Rock (Sphere or Box)
 */
const rockGeometry = new THREE.SphereGeometry(0.50, 20, 25) // Sphere geometry to represent the rock
const rockMaterial = new THREE.MeshStandardMaterial({ map: rockTexture }) // Apply the rock texture
const rock = new THREE.Mesh(rockGeometry, rockMaterial)

// Position the rock beside the cylinder (adjust the position as needed)
rock.position.set(2.1, 0.5, 3) // This positions the rock beside the cylinder
scene.add(rock)

const rockGeometry1 = new THREE.SphereGeometry(0.40, 20, 20) // Sphere geometry to represent the rock
const rockMaterial1 = new THREE.MeshStandardMaterial({ color: 0x228b22}) // Apply the rock texture
const rock1 = new THREE.Mesh(rockGeometry1, rockMaterial1)
rock1.position.set(1.30, 0.10, 2)
scene.add(rock1)



/**Floor */
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ map: grassTexture })
)
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
scene.add(floor)


/* Snow Grass*/ 
const floorsnow = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ map: snowGrass })
)

floorsnow.material.map.repeat.set(1, 1);
floorsnow.rotation.x = - Math.PI * 0.5
floorsnow.position.y = 0
scene.add(floorsnow)




/**
 * House
 */
// Walls (Cube)
const wallsGeometry = new THREE.BoxGeometry(4, 2.5, 4); // Width, height, depth
const wallsMaterial = new THREE.MeshStandardMaterial({ color: 0xa0522d }); // Brown color
const walls = new THREE.Mesh(wallsGeometry, wallsMaterial);
walls.position.set(0, 1.25, 0); // Position the walls above the ground (adjust here to move the house)
scene.add(walls);

// Roof (Cone)
const roofGeometry = new THREE.ConeGeometry(3.5, 2, 4); // Radius, height, segments
const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x8b0000 }); // Dark red color
const roof = new THREE.Mesh(roofGeometry, roofMaterial);
roof.position.set(0, 3.5, 0); // Position roof on top of the walls (adjust here to move with walls)
roof.rotation.y = Math.PI / 4; // Rotate to align with walls
scene.add(roof);

// Door (Smaller Cube)
const doorGeometry = new THREE.BoxGeometry(1, 1.5, 0.1); // Width, height, depth
const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 }); // Dark brown color
const door = new THREE.Mesh(doorGeometry, doorMaterial);
door.position.set(0, 0.75, 2.05); // Centered on the front wall (adjust here to align with walls)
scene.add(door);

// Windows (Smaller Cubes)
const windowGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.1); // Width, height, depth
const windowMaterial = new THREE.MeshStandardMaterial({ color: 0x87ceeb, transparent: true, opacity: 0.7 }); // Light blue, semi-transparent

// Left window
const window1 = new THREE.Mesh(windowGeometry, windowMaterial);
window1.position.set(-1, 1.5, 2.05); // Left side of the front wall (adjust here to align with walls)
scene.add(window1);

// Right window
const window2 = window1.clone();
window2.position.set(1, 1.5, 2.05); // Right side of the front wall (adjust here to align with walls)
scene.add(window2);


/**
 (Point Light)
 */
const doorLight = new THREE.PointLight(0xffffff, 1, 10); 
doorLight.position.set(0, 2.3, 2.5); // Position it in front of the door
doorLight.castShadow = true; 
scene.add(doorLight);
 

/**
 (Point Light)
 */
 const garageLight = new THREE.PointLight(0xffffff, 1, 10); 
 garageLight.position.set(4.2, 2.3, 2.5); // Position it in front of the door
 garageLight.castShadow = true; 
 scene.add(garageLight);



/**
 * Christmas Tree
 */
// Tree trunk (Cylinder)
const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 12); // Small cylinder for the trunk
const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 }); // Brown color for the trunk
const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
trunk.position.set(-2, 0.5, 4); // Position the trunk beside the left window
scene.add(trunk);




// First (largest) tree layer
const treeLayerMaterial1 = new THREE.MeshStandardMaterial({ color: 0x005d00 });
const treeLayer1 = new THREE.ConeGeometry(1.8, 2, 5); // Radius, height, and segments
const layer1 = new THREE.Mesh(treeLayer1, treeLayerMaterial1);
layer1.position.set(-2, 2, 4); // Position it above the trunk
scene.add(layer1);

// Second tree layer (slightly smaller)
const treeLayerMaterial2 = new THREE.MeshStandardMaterial({ color: 0x008000 });
const treeLayer2 = new THREE.ConeGeometry(1.4, 1.5, 6);
const layer2 = new THREE.Mesh(treeLayer2, treeLayerMaterial2);
layer2.position.set(-2, 3.5, 4); // Positioned above the first layer
scene.add(layer2);

// Third tree layer (smaller again)
const treeLayerMaterial3 = new THREE.MeshStandardMaterial({ color: 0x00a600 });
const treeLayer3 = new THREE.ConeGeometry(1, 1, 6);
const layer3 = new THREE.Mesh(treeLayer3, treeLayerMaterial3);
layer3.position.set(-2, 4.8, 4); // Positioned above the second layer
scene.add(layer3);



// Star on top (Geometry - A small sphere)
const starGeometry = new THREE.SphereGeometry(0.3, 5, 5);
const starMaterial = new THREE.MeshStandardMaterial({ color:  0xe8e337 }); // Yellow color
const star = new THREE.Mesh(starGeometry, starMaterial);
star.position.set(-2, 5.4, 4); // Position it above the tree layers
scene.add(star);


// Function to create a point light for each layer of the tree
function addTreeLayerLights(position, intensity = 1, distance = 10) {
    const treeLayerLight = new THREE.PointLight(0xffffff, intensity, distance);
    treeLayerLight.position.set(position.x, position.y + 1, position.z); // Position it slightly above the tree layer
    treeLayerLight.castShadow = true; // Enable shadow casting
    scene.add(treeLayerLight); // Add light to the scene
}

// Add lights to each tree layer (based on layer position)
addTreeLayerLights(layer1.position, 1, 4); // Light for the first layer
addTreeLayerLights(layer2.position, 1.2, 5); // Light for the second layer
addTreeLayerLights(layer3.position, 1, 6); // Light for the third layer



function getRandomLightColor() {
    // Generate RGB values for light colors (values are set high for light colors)
    const r = Math.floor(Math.random() * 128) + 128; // Range 128-255 for light red
    const g = Math.floor(Math.random() * 128) + 128; // Range 128-255 for light green
    const b = Math.floor(Math.random() * 128) + 128; // Range 128-255 for light blue

    // Convert to hexadecimal and return the color
    return (r << 16) | (g << 8) | b;
}

// Change the star's color to a random light color every 1 second
setInterval(() => {
    star.material.color.set(getRandomLightColor());
}, 1000);







/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001).name('Light Intensity'); // Added a name for clarity
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#ffffff', 0.5)
moonLight.position.set(4, 5, -2)
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001).name('Light Intensity 1');
gui.add(moonLight.position, 'x').min(-5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(-5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(-5).max(5).step(0.001)
scene.add(moonLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Rotate the tree layers and star continuously
    const rotationSpeed = 0.02; // Set the rotation speed

    // Rotate tree layers and star
    layer1.rotation.y += rotationSpeed; // Rotate layer 1
    layer2.rotation.y += rotationSpeed; // Rotate layer 2
    layer3.rotation.y += rotationSpeed; // Rotate layer 3
    star.rotation.y += rotationSpeed * 0.5; // Rotate star slower for effect

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

