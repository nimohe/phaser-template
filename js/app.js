window.onload = function () {

    /** Config part */
    var FIXED_SIZE = 640;
    var FIXED_MEASURE = 'Height';

    /** Name maping */
    var fixedName = FIXED_MEASURE;
    var resName = fixedName === 'Height' ? 'Width' : 'Height';
    var FIXED_NAME = fixedName.toUpperCase();
    var RES_NAME = resName.toUpperCase();

    /** Measures of document */
    var documentElement = document.documentElement;
    var documentFixed = documentElement['client' + fixedName];
    var documentRes = documentElement['client' + resName];
    var ratio = documentRes / documentFixed;

    /** Canvas measures */
    var canvasFixed = FIXED_SIZE;
    var canvasRes = FIXED_SIZE * ratio;

    var screen = {};
    screen['CANVAS_' + FIXED_NAME] = canvasFixed;
    screen['CANVAS_' + RES_NAME] = canvasRes;

    /* Fix for CocoonJS */
    window.width = navigator.isCocoonJS ? window.innerWidth : screen.CANVAS_WIDTH;
    window.height = navigator.isCocoonJS ? window.innerHeight : screen.CANVAS_HEIGHT;

    var game = new Phaser.Game(screen.CANVAS_WIDTH, screen.CANVAS_HEIGHT, Phaser.CANVAS, 'game_div');
    game.state.add('boot', BasicGame.Boot);
    game.state.add('preload', BasicGame.Preload);
    game.state.add('game', BasicGame.Game);
    game.state.add("menu", BasicGame.Menu);


    game.state.start('boot');
};
