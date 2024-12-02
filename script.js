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


//light
const Light = new THREE.BoxGeometry(1, 2, 1 ); //lanipis, kataas, katambok
const Lightmaterial = new THREE.MeshBasicMaterial( {color: 0x000000} ); 
const cube3 = new THREE.Mesh( Light, Lightmaterial );
cube3.position.set(7,0.5,8);
scene.add( cube3 );


//poste
const LightPost = new THREE.BoxGeometry(0.2, 5, 0.5 ); //lanipis, kataas, katambok
const Lightpostmaterial = new THREE.MeshBasicMaterial( {color: 0x716868} ); 
const cube4 = new THREE.Mesh( LightPost, Lightpostmaterial );
cube4.position.set(7,4,8); //side, up or down, forward or backward
scene.add( cube4 );


// Bulb for the lamp post (not part of the tree)
const bulbGeometry = new THREE.SphereGeometry(0.5, 32, 32); // Adjust shape for better appearance
const bulbMaterial = new THREE.MeshStandardMaterial({
  color: 0xff7900,    // Base color of the bulb
  emissive: 0xffa500, // Glow effect color
  emissiveIntensity: 2, // Intensity of the glow
});
const bulb = new THREE.Mesh(bulbGeometry, bulbMaterial);
bulb.position.set(7, 6.7, 8); // Position (side, up or down, forward or backward)
scene.add(bulb);

// Add a PointLight to simulate the lighthouse effect
const bulbLight = new THREE.PointLight(0xfff8dc, 1.5,1200); // Color, intensity, and range
bulbLight.position.set(7, 6.7, 8); // Match bulb position
scene.add(bulbLight);

// Optional: Create a halo effect around the bulb
const haloGeometry = new THREE.SphereGeometry(0.55, 32, 32); // Slightly larger than the bulb
const haloMaterial = new THREE.MeshBasicMaterial({
  color: 0xfff8dc,      // Glow color
  transparent: true,    // Enable transparency
  opacity: 0.2,         // Make it faint
});
const halo = new THREE.Mesh(haloGeometry, haloMaterial);
halo.position.set(7, 6.7, 8); // Match bulb position
scene.add(halo);





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



// Define the properties for the pool lights
const poolLightColor = 0xffffff; // White color for the lights
const poolLightIntensity = 1; // Intensity of the lights
const poolLightDistance = 10; // Distance at which the light is effective

// Create four point lights around the pool
const poolLight1 = new THREE.PointLight(poolLightColor, poolLightIntensity, poolLightDistance);
poolLight1.position.set(1.8, 1, -4.4); // Position to the left of the pool
scene.add(poolLight1);


const poolLight2 = new THREE.PointLight(poolLightColor, poolLightIntensity, poolLightDistance);
poolLight2.position.set(0.3, 1, -4.4); // Position to the front of the pool
scene.add(poolLight2);

const poolLight3 = new THREE.PointLight(poolLightColor, poolLightIntensity, poolLightDistance);
poolLight3.position.set(3.3, 1, -4.4); // Position to the back of the pool
scene.add(poolLight3);



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

//gatepath
const doorPath = new THREE.BoxGeometry(1, 0.10, 5.20 ); 
const pathmaterial = new THREE.MeshBasicMaterial( {color: 0x555555 } ); 
const cube2 = new THREE.Mesh( doorPath, pathmaterial );
cube2.position.set(0, 0, 4);
scene.add( cube2 )







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



// Load the moon texture
const Moon = textureLoader.load();
Moon.wrapS = THREE.RepeatWrapping; // Repeat horizontally
Moon.wrapT = THREE.RepeatWrapping; // Repeat vertically

// Create moon geometry
const moonGeometry = new THREE.SphereGeometry(1, 20, 32); // Radius, width segments, height segments
const moonMaterial = new THREE.MeshStandardMaterial({
    map: Moon, // Texture map for the moon
    emissive: 0xffffff, // White color for the emissive glow
    emissiveIntensity: 1 // Set initial emissive intensity
});

const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.set(-5, 12, -5); // Position the moon in the scene
scene.add(moon);

// Function to animate the moon glow
const animateMoonGlow = () => {
    // Randomly change the emissive intensity for flickering effect
    moonMaterial.emissiveIntensity = Math.random() * 2; // Random intensity between 0 and 2
};









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
const ambientLight = new THREE.AmbientLight('#ffffff', 0)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001).name('Light Intensity'); // Added a name for clarity
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#ffffff', 0)
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
camera.position.x = 20
camera.position.y = 4
camera.position.z = 15
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



// Firefly parameters
const fireflyCount = 100; // Number of fireflies
const fireflies = []; // Array to hold firefly meshes
const radius = 2; // Radius for circular movement around the tree
const speed = 0.5; // Speed of the circular movement

// Create fireflies
for (let i = 0; i < fireflyCount; i++) {
    const fireflyGeometry = new THREE.SphereGeometry(0.05, 5, 5); // Small sphere for firefly
    const fireflyMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00, emissive: 0xffff00, emissiveIntensity: 1 }); // Yellow color with emissive effect
    const firefly = new THREE.Mesh(fireflyGeometry, fireflyMaterial);

    // Randomly position fireflies around the tree
    const angle = Math.random() * Math.PI * 2; // Random angle for circular motion
    const heightOffset = Math.random(); // Random height offset for twinkling effect


    // Randomly position fireflies around the tree
    const randomX = Math.random() * 2 - 1; // Random x position within the tree bounds
    const randomY = Math.random() * 2 + 1; // Random y position above the trunk
    const randomZ = Math.random() * 2 - 1; // Random z position within the tree bounds

    firefly.position.set(-2 + randomX, randomY, 4 + randomZ); // Position firefly around the tree
    scene.add(firefly); // Add firefly to the scene
    fireflies.push(firefly); // Store firefly in array
}

// Animate fireflies
const animateFireflies = () => {
    
    fireflies.forEach(firefly => {
        // Randomly move fireflies in a small range
        firefly.position.x += (Math.random() - 0.5) * 0.02; // Small random movement in x
        firefly.position.y += (Math.random() - 0.5) * 0.02; // Small random movement in y
        firefly.position.z += (Math.random() - 0.5) * 0.02; // Small random movement in z

        // Make fireflies flicker
        firefly.material.emissiveIntensity = Math.random(); // Random intensity for flickering effect
    });
};

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

    // Update fireflies
    animateFireflies(); 

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

