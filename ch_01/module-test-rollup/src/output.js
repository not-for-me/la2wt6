import {areaOfCircle, areaOfRectangle} from './area-util';

console.log('The area of figures');

const circleArea = areaOfCircle(4);
console.log(`the area of a circle with radius 4: ${circleArea}`);

const rectangleArea = areaOfRectangle(3, 6);
console.log(`the area of a rectangle with width 3, height 6: ${rectangleArea}`);
