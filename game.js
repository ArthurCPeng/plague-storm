window.onload = function(){

  config = {
    height: 720,
    width: 1280,
    backgroundColor: "#ffffe0",
    scene: [Scene_main],
    physics: {
	     default: "arcade",
	     arcade: {debug: false}
    }
  }

  var game = new Phaser.Game(config);

}
