/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable constructor-super */
/*
 * square.js
 * Language: javascript
 * Test: tests/geometry.test.js
 * Path: src/square.js
 *
 * Create a square class
 *
 */

/*
 * Define a Square class that has the following properties:
 *  1) Inherits (extends) from the Rectangle class
 *  2) A constructor that accepts the square's side length
 *     a) calls the super class constructor with height
 *        and width, both equal to the side of the square
 *       https://mzl.la/2Z5y8my
 *     b) sets the property called name to 'Square'
 *  3) By default, has the methods inherited from rectangle
 *    a) count()
 *    b) perimeter()
 *    c) sayName()
 *    d) area()
 *    e) isValid()
 *  5) A method called getSide() that returns the length
 *     of the square's side
 *
 * hint: as well as passing the height and width to the
 * the super class constructor, you can store side
 * as a property in this class
 * to use with its new method getSide()
 */

//  👇 👇 👇 👇 👇 👇 👇 👇 👇 👇 👇 👇 👇 👇 👇
/* --------------Important Step Below ------------ */
// import the polygon class using the CommonJS require() function
// https://nodejs.org/api/modules.html#modules-commonjs-modules
// const { Polygon } = require('./polygon');

const { Rectangle } = require('./rectangle');
/**
 * Square class
 * @class Square class extends rectangle
 * @constructor Square constructor function
 * @param {array} sides
 * @property {string} name
 * @property {number} side
 */

class Square extends Rectangle {
  /**
  * @constructor
  * @param {number} side - the length of a side
  * must use super() to call the parent class constructor
  * hint: this constructor gets 1 number as an argument
  * and calls the parent class constructor with height and width
  */

  /**
   * @constructor
   * @param {number} side - the length of a side of the square
   */
  constructor(side) {
    super(side, side);
    this.name = 'Square';
    this.side = typeof side === 'number' && side > 0 ? parseFloat(side) : 0;
  }

  getSide() {
    return this.side;
  }

  perimeter() {
    return 4 * this.side;
  }

  area() {
    return this.side * this.side;
  }

  isValid() {
    return typeof this.side === 'number' && this.side > 0;
  }
}
module.exports = {
  Square,
};
