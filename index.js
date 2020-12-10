// Your code here
const saturdayFun = (activity = "roller-skate") => {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => {
  return `This Monday, I will ${activity}.`
}

const wrapAdjective = (flair = "*") => { 
  return function(arg = "special"){
    return `You are ${flair}${arg}${flair}!`
  }
}

const Calculator = {
  add: (a,b) => a + b,
  subtract: (a,b) => a - b,
  multiply: (a,b) => a * b,
  divide: (a,b) => a / b
}

let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}