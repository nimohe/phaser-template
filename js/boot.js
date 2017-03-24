var BasicGame = {
    GAME_WIDTH: 480,
    GAME_HEIGHT: 640,
    VER: "v1.5"
};

BasicGame.Boot = function (game) {
    this.game = game;
};


BasicGame.Boot.prototype = {
    init: function () {
        this.scale.fullScreenMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // USER_SCALE;
        this.game.scale.refresh(); //update scale
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        //        this.scale.setResizeCallback(this.resizeFunc, this);
        this.game.scale.onSizeChange.add(this.onSizeChange, this);
    },

    onSizeChange: function () {
        //        console.log("game state resize");
        //        this.game.state.resize();
    },
    resizeFunc: function () {
        //        console.log("boot resize");
        this.game.state.resize();
    },

    preload: function () {
        this.load.image('preloaderBar', 'assets/preloader-bar.png');
    },
    create: function () {
        this.state.start('preload');
    }
};
