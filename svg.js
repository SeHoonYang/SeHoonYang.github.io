// mobile detection
var mobile = false;
if (window.innerWidth <= 800)
	mobile = true;

function NormalColorShader(lightList, worldPosition, normal, baseColor, finalColor){
	finalColor[0] = Math.floor((Math.floor(normal[0] * 128) + 128)*255/256);
	finalColor[1] = Math.floor((Math.floor(normal[1] * 128) + 128)*255/256);
	finalColor[2] = Math.floor((Math.floor(normal[2] * 128) + 128)*255/256);
}

var viewPortWidth = 200;
var viewPortHeight = 200;
var clearColor = "#FFFFFF";

var context = svg3djsInit("viewportContainer", viewPortWidth, viewPortHeight, clearColor);

var position = [0,0,-2];
var rotation = [0,90,180];
var scale = [1,1,1];

var bunny = context.createObject(bunny_vertices, position, rotation, scale);
var bunnyRotMat = bunny.getRotMat();

var camPosition = [0,0,2];
var camRotation = [0,0,0];
var near = 0.1;
var far = 10000;
var fovy = 70;

var mainCamera = context.createCamera(camPosition, camRotation, near, far, viewPortWidth / viewPortHeight, fovy);

var pLight1 = context.createPointLight([0,-5,-2], 0xFF0000, 0.5);

// Mouse manipulation
var ViewPort = document.getElementById("viewportContainer");
var x = viewPortWidth / 2;
var y = viewPortHeight / 2;

if (!mobile)
{
	onmousemove = function(e){
		var vp = ViewPort.getBoundingClientRect();
		x = Math.max(0, Math.min(viewPortWidth, e.clientX - vp.left));
		y = Math.max(0, Math.min(viewPortHeight, e.clientY - vp.top));
	}
}
var loopInterval = 25;
if (mobile)
	loopInterval = 50;

setInterval(loop, loopInterval);

function loop() {
	// Apply  rotation
	var rot_q = quat.create();
	var rot_m = mat4.create();

	if(!mobile)
	{
		quat.fromEuler(rot_q, - (y / viewPortHeight - 0.5) * 180, (x / viewPortWidth - 0.5) * 180, 0);
		mat4.fromQuat(rot_m, rot_q);
		mat4.multiply(rot_m, rot_m, bunnyRotMat);
		bunny.rotateTo(rot_m);
	}
	else
	{
		quat.fromEuler(rot_q, 2,5,3);
		mat4.fromQuat(rot_m, rot_q);
		mat4.multiply(rot_m, rot_m, bunny.getRotMat());
		bunny.rotateTo(rot_m);
	}
	context.draw3d();
}