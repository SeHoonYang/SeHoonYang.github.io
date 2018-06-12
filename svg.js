var viewPortWidth = 1000;
var viewPortHeight = 600;
var clearColor = "#FFFFFF";

var context = svg3djsInit("viewportContainer", viewPortWidth, viewPortHeight, clearColor);

var position = [0,0,0];
var rotation = [0,0,180];
var scale = [1,1,1];

var bunny = context.createObject(bunny_vertices, position, rotation, scale);

var camPosition = [0,0,5];
var camRotation = [0,0,0];
var near = 0.1;
var far = 10000;
var fovy = 70;

var mainCamera = context.createCamera(camPosition, camRotation, near, far, viewPortWidth / viewPortHeight, fovy);

var pLight = context.createPointLight([2,-2,0], 0xFF0000, 5.0);

setInterval(loop, 25);

function loop() {
	context.draw3d();
}