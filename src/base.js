const canvas_id = "main_screen";
const framerate = 60;
const canvas_width = 84;
const canvas_height = 48;

const b_color_hex = "#c7f0d8";
const f_color_hex = "#43523d";

var game = {};
var lastTime = Date.now();
var gameTime = 0;

// A cross-browser requestAnimationFrame
// See https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
var requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / framerate);
        };
})();

function nDrawImage(im, x = 0, y = 0, context) {
    x = parseInt(x, 10);
    y = parseInt(y, 10);

    context.drawImage(im, x, y);
}

function nDrawPixel(x = 0, y = 0, context) {
    x = parseInt(x, 10);
    y = parseInt(y, 10);

    context.fillStyle = f_color_hex;
    context.fillRect(x, y, 1, 1);
}

function nResetCanvas(context) {
    context.fillStyle = b_color_hex;
    context.fillRect(0, 0, canvas_width, canvas_height);
}

// Simple resource manager
// Copypasted from https://github.com/jlongster/canvas-game-bootstrap
(function () {
    var resourceCache = {};
    var loading = [];
    var readyCallbacks = [];

    // Load an image url or an array of image urls
    function load(urlOrArr) {
        if (urlOrArr instanceof Array) {
            urlOrArr.forEach(function (url) {
                _load(url);
            });
        } else {
            _load(urlOrArr);
        }
    }

    function _load(url) {
        if (resourceCache[url]) {
            return resourceCache[url];
        } else {
            var img = new Image();
            img.onload = function () {
                resourceCache[url] = img;

                if (isReady()) {
                    readyCallbacks.forEach(function (func) {
                        func();
                    });
                }
            };
            resourceCache[url] = false;
            img.src = url;
        }
    }

    function get(url) {
        return resourceCache[url];
    }

    function isReady() {
        var ready = true;
        for (var k in resourceCache) {
            if (resourceCache.hasOwnProperty(k) &&
                !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    function onReady(func) {
        readyCallbacks.push(func);
    }

    window.resources = {
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();

game.update = function (dt) {};
game.draw = function (context) {};