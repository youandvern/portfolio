


function getRndWave(){
  return Math.floor(Math.random() * 18) - 9;
}

function getRndScale(){
  return Math.random() * 0.08 + 0.96;
}

function getRndDuration(){
  return Math.random() * 0.6 + 1.2;
}

function getRndAmount(){
  return Math.random() * 0.6 + 0.9;
}

export {getRndWave, getRndScale, getRndDuration, getRndAmount};
