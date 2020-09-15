let firstTower = document.getElementById("firstTower");
firstTower.addEventListener("click", checker(firstTower));

let secondTower = document.getElementById("secondTower");
secondTower.addEventListener("click", checker(secondTower));

let thirdTower = document.getElementById("thirdTower");
thirdTower.addEventListener("click", checker(thirdTower));


function checker(clickedTower) {
  firstClick = clickedTower.lastElementChild;
  
}
