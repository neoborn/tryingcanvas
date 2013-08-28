var tweens;

function init(){

  tweens = []

	var mycanvas = document.getElementById("mycanvas");

  var stage = new createjs.Stage(mycanvas);

	var square = new createjs.Shape();

  square.graphics.setStrokeStyle(5);
	square.graphics.beginStroke("#ff9900");
  square.graphics.drawRect(100,100,200,200);

  tweens.push({ref:square});
  stage.addChild(square);

}
