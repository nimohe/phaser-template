BasicGame.Menu = function (game) {

};

BasicGame.Menu.prototype = {
    init: function () {
        //        console.log("menu");
    },
    create: function () {
        var xcenter = this.game.width / 2;
        var ycenter = this.game.height / 2;

        //this.stage.backgroundColor = '#4FA4B3'; // blue

        this.bg = this.add.sprite(0, 0, "background");
        this.bg.anchor.setTo(0.5,0.5);
        this.bg.x = xcenter;
        this.bg.y = ycenter;
        this.ver = this.add.text(0, 0, BasicGame.VER, {
            font: "18px monospace",
            fill: "#fff"
        });
        
        this.ball=this.add.sprite(0,0,"ball");
        this.ball.anchor.setTo(0.5,0.5);
        this.ball.x=xcenter;
        this.ball.y=ycenter;
    },

    update: function () {

    },

    startGame: function () {
        this.state.start("game");
    },

    render: function () {
        // this.game.debug.spriteInfo(this.gameName, 32, 32);
    },

    resize: function () {
        console.log("menu--", "resize", this.game.width, this.game.height);

        //        this.bg.scale.set(BasicGame.configuration.scale_ratio);

        //        this.bg.x = (this.game.width - this.bg.width) / 2;
        //        this.bg.y = (this.game.height - this.bg.height) / 2;
    }


};
