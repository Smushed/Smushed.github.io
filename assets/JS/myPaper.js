var path = new Path.Rectangle({
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

var myPoint = new Point(10, 20);
var myPath = new Path();

function onResize(event) {
    path.position = view.center;
    myCricle.position = view.center;
}