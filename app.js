/** @format */

const fs = require("fs");
const { createCanvas } = require("canvas");

const canvasTxt = require("canvas-txt").default;

const canvas = createCanvas(400, 400);
const ctx = canvas.getContext("2d");
// White bg
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "black";
const txt = "Lorem ipsum dolor sit amet";
//console.log(canvasTxt)
canvasTxt.debug = true;
canvasTxt.fontSize = 24;
canvasTxt.drawText(ctx, txt, 50, 50, 200, 200);

savePng(canvas, "output.png");

function savePng(canv, fileName) {
  const buf = canv.toBuffer();
  fs.writeFileSync(fileName, buf);
}
