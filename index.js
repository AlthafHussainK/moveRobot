const robot = document.querySelector('.robot')

let number = 50

function moveRobot() {
  robot.style.right = number + 'px'
  number += 50
}

robot.addEventListener('click', moveRobot)