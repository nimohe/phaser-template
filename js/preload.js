BasicGame.Preload = function (game) {

};

BasicGame.Preload.prototype = {
    preload: function () {
        console.log("preload");

        this.stage.backgroundColor = '#000000';

        this.preloadBar = this.add.sprite(this.game.width / 2 - 100, this.game.height / 2, 'preloaderBar');
        this.add.text(this.game.width / 2, this.game.height / 2 - 30, "Loading...", {
            font: "32px monospace",
            fill: "#fff"
        }).anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(this.preloadBar);
        this.load.image("background", "assets/background.jpg");
        this.load.image("ball","assets/ball.png");
    },
    create: function () {
        this.preloadBar.cropEnabled = false;
    },
    update: function () {
        this.state.start("menu");
    }
};
