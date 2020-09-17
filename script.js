let stage = null;
let count = null;
let hasDisks = null;
let ultimoElemento = null;
let ultimoPai = null;

let countResult = document.getElementById("count");
let numberOfDisks = document.getElementById("numberOfDisks").value;

const startButton = document.getElementById("startDisks");
startButton.addEventListener("click", generateDisks);

const firstTower = document.getElementById("firstTower");
firstTower.addEventListener("click", checker);

const secondTower = document.getElementById("secondTower");
secondTower.addEventListener("click", checker);

const thirdTower = document.getElementById("thirdTower");
thirdTower.addEventListener("click", checker);

function generateDisks() {
  numberOfDisks = document.getElementById("numberOfDisks").value;
  if (hasDisks == null) {
    createDisks(numberOfDisks);
    hasDisks = 1;
  } else if (hasDisks == 1) {
    reset();
    createDisks(numberOfDisks);
  }
}

function createDisks(numberOfDisks) {
  const docFrag = document.createDocumentFragment();

  for (let i = 1; i <= numberOfDisks; i++) {
    const div = document.createElement("div");
    div.classList.add("disks");
    div.id = `disk${i}`;
    docFrag.appendChild(div);
  }
  firstTower.appendChild(docFrag);
}

function reset() {
  firstTower.innerHTML = "";
  secondTower.innerHTML = "";
  thirdTower.innerHTML = "";
  stage = 0

  document.getElementById("vitoria").classList.add("hidden");

  countResult.textContent = 0;
  count = 0;
}

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
  ultimoElemento.style.backgroundColor = "";

  if (currentTower.lastElementChild === null) {
    currentTower.appendChild(ultimoElemento);
  } else if (
    currentTower.lastElementChild.clientWidth > ultimoElemento.clientWidth
  ) {
    currentTower.appendChild(ultimoElemento);
  } else if (
    currentTower.lastElementChild.clientWidth < ultimoElemento.clientWidth
  ) {
    ultimoPai.appendChild(ultimoElemento);
  }
  // Testa a condição de Vitória //
  if (thirdTower.childElementCount == numberOfDisks) {
    document.getElementById("vitoria").classList.remove("hidden");
  }
  stage = null;
  count++;
  countResult.textContent = count;
}
