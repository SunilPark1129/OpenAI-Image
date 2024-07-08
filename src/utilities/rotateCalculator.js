/*
get the original image orientation value 
and then return it as a rotation degree
*/
export function rotateCalculator(val) {
  switch (val) {
    case 1:
    case 2:
      return 0;
    case 3:
    case 4:
      return 180;
    case 6:
    case 5:
      return 90;
    case 7:
    case 8:
      return 270;
    default:
      return 0;
  }
}
