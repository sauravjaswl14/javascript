/*
new keyword
-----------
    - creates a blank, plain Javascript object;
    - Links (sets the constructor of) this object to another object;
    - Passes the newly created object from step1 as the this context
    -Returns this if the function doesn't return its own object
*/

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}
Color.prototype.rgb = function () {
  const { r, g, b } = this; //the value of this will depend on how rgb mrthid will be called
  return `rgb(${r},${g},${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r},${g},${b},${a})`;
};

const color1 = new Color(40, 255, 60);
const color2 = new Color(0, 0, 0);
color1.rgb(); //value of this will depend on color1 object
color2.rgb(); //value of this will depend on color2 object
