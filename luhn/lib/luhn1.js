
//luhn algo

function doubler(num) {
  let account = num.toString().split("");
  // console.log(account);
  var doubledArray = [];
  for (let i = 0; i < account.length; i++) {
    if (i === 0 || i % 2 === 0) {
      doubledArray.push(account[i]);
    }
    else if (account[i] * 2 < 9) {
      doubledArray.push(account[i]);
    }
    else {
      doubledArray.push(account[i] * 2 - 9);
    }
  }
  let total = 0;
  for (num of doubledArray) {
    console.log(Number(num));
    total += Number(num);
  }
  console.log(total);
  console.log(doubledArray);
  return total;
}

function checkDigit(num2) {
  let digit = doubler(num2) * 9 % 10;
  return digit;
}

function finalNumber(num3) {
  let final = num3.toString() + checkDigit(num3).toString();
  return final;
}

doubler(2205588990);
console.log(checkDigit(2205588990));
finalNumber(2205588990);

module.exports = {
  doubler: doubler,
  checkDigit: checkDigit,
  finalNumber: finalNumber

  };