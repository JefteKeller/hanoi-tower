let stage = null;
let ultimoElemento = null;
let ultimoPai = null;

let firstTower = document.getElementById("firstTower");
firstTower.addEventListener("click", checker);

let secondTower = document.getElementById("secondTower");
secondTower.addEventListener("click", checker);

let thirdTower = document.getElementById("thirdTower");
thirdTower.addEventListener("click", checker);

function checker(e) {
  let currentTower = e.currentTarget;
  if (stage === 1) {
    drop(currentTower);
  } else {
    get(currentTower);
  }
}

function get(currentTower) {
  ultimoElemento = currentTower.lastElementChild;
  ultimoPai = currentTower;


  if (ultimoElemento !== null) {
    ultimoElemento.style.backgroundColor = "green";
    stage = 1;
  }
  
}

function drop(currentTower) {
  ultimoElemento.style.backgroundColor = "white";

  if (currentTower.lastElementChild === null) {
    currentTower.appendChild(ultimoElemento);
  } else if (
    currentTower.lastElementChild.textContent > ultimoElemento.textContent
  ) {
    currentTower.appendChild(ultimoElemento);
  } else if (
    currentTower.lastElementChild.textContent < ultimoElemento.textContent
  ) {
    ultimoPai.appendChild(ultimoElemento);

  }
  vitoria()
  stage = null;
 
}

function vitoria () {
  if (thirdTower.childElementCount === 4) {
    document.getElementById("vitoria").classList.remove("hidden")
    
  }
}

