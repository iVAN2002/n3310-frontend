// Game's code
window.onload = function () {
    let mycanvas = document.getElementById(canvas_id);
    let mycontext = mycanvas.getContext('2d');

    function nGameLoop() {
        var now = Date.now();
        var dt = (now - lastTime) / 1000.0;

        nResetCanvas(mycontext);
        game.update(dt);
        game.draw(mycontext);

	lastTime = now;

        requestAnimFrame(nGameLoop);
    };

    game.update = function (dt) {
        gameTime += dt;
        console.log(dt);
    };

    game.draw = function (ctx) {
        nDrawImage(resources.get('img/example.png'), 5, 5, ctx);
        nDrawPixel(0, 0, ctx);
    };

    resources.load([
        'img/example.png'
    ]);

    resources.onReady(nGameLoop);
}
