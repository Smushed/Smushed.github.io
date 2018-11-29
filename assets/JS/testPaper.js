//You need live server in order for this to work.
//The CORS is giving an issue
var width;
var height;
var center = view.center;
var mousePos = 500;
var pathHeight;

var newTriangle = new Path.RegularPolygon({
    center: new Point(1500, 900),
    sides: 3,
    radius: 250
})
newTriangle.fillColor = "lightblue";
newTriangle.scale(1.7, 0.8);

var rectangle = new Path.Rectangle({
    center: view.center,
    width: 100,
    height: 80,
    strokeColor: "black"
});

var myCricle = new Path.Circle({
    center: view.center,
    width: 30,
    height: 30,
    strokeColor: "blue"
});

var onResize = function (event) {
    rectangle.position = view.center;
    myCricle.position = view.center;
};

var myPoint = new Point(10, 20);
var myPath = new Path();

myPath.strokeColor = "black";
myPath.add(new Point(0, 0), new Point(500, 500));
myPath.insert(1, new Point(250, 400));
myPath.insert(3, new Point(700, 300))
myPath.closed = true;
myPath.smooth();

function onMouseMove(event) {
    mousePos = event.point;
};

function onFrame(event) {
    if (mousePos.y < 500 && mousePos.x < 1000) {
        pathHeight = mousePos.y;
        myPath.segments[2].point.y = pathHeight;
        myPath.segments[2].point.x = mousePos.x;
        myPath.smooth({ type: "continuous" });
    } else {
        if (myPath.segments[2].point.x > 500) {
            myPath.segments[2].point.x -= 10;
        }
        // myPath.segments[2].point = (500, 500)
    }
}