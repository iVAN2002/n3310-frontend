# N3310 Frontend

A template for Nokia 3310-styled games. Made for [Nokia 3310 Jam](https://itch.io/jam/3310jam).

## Requirements

* Any input device that can output symbols

* Knowledge of JS

* Notepad app

* Browser that supports JS and HTML5

## Installation

1. Clone a repo or download a ZIP file with code
  * You can also fork repo before this step

2. Do your changes in `js/game.js`

3. Open `index.html` file in your browser.

## API

`🚧Under construction...`

### `nDrawImage(im (Image), x = 0 (Integer), y = 0 (Integer), context (CanvasRenderingContext2D))`

Draws image on canvas.
**Example:**

```javascript
resources.load([
    'img/example.png'
]);

let mycanvas = document.getElementById(canvas_id);
let mycontext = mycanvas.getContext('2d');

nDrawImage(resources.get('img/example.png'), 0, 0, mycontext);
```

### `nDrawPixel(x = 0 (Integer), y = 0 (Integer), context (CanvasRenderingContext2D))`

Puts one pixel at given coordinates on canvas.
**Example:**

```javascript
let mycanvas = document.getElementById(canvas_id);
let mycontext = mycanvas.getContext('2d');

nDrawPixel(33, 10, mycontext);
```

### `nResetCanvas(context (CanvasRenderingContext2D))`

Fills canvas with background color.
**Example:**

```javascript
let mycanvas = document.getElementById(canvas_id);
let mycontext = mycanvas.getContext('2d');

nResetCanvas(mycontext);
```

## Demo

`🚧Under construction...`

## License

See [LICENSE.md](./LICENSE.md)