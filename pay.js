// 1. membuat fungsi calculatechange
// 2.

function calculateChange(price, cash) {
  const returnValue = cash - price;
  const round = Math.round(returnValue / 1000) * 1000;
  const 

  return round;
}

console.log(calculateChange(700649, 800000));
console.log(calculateChange(575650, 580000));
console.log(calculateChange(657650, 600000));
