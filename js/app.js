//console.log(window.offsetWidth)
const noSignal = document.querySelector('.nosignal');
const styles = noSignal.style;
const width = window.screen.width

const noSignalCurrentPosition = [10, 600]


let xDirection = 1
let yDirection = 1

// styles.bottom = '30x'
// noSignal.style.left = '500px'
console.log(noSignal.style)

function moveNoSignal(){
  noSignalCurrentPosition[0] += yDirection
  noSignalCurrentPosition[1] -= xDirection
  styles.bottom = noSignalCurrentPosition[1] + 'px';
  styles.left = noSignalCurrentPosition[0] + 'px';
  if(noSignalCurrentPosition[0] >= width || noSignalCurrentPosition[0] <= 0){
    changeDirection()
  }else if(noSignalCurrentPosition[1] <= 0 || noSignalCurrentPosition[1] >= 620){
    changeDirection()
  }
//  console.log(noSignalCurrentPosition)
 
}

function changeDirection(){
  if(xDirection === 1 && yDirection === 1){
    yDirection = -1
    //return
  }else if(xDirection === 1 && yDirection === -1){
    xDirection = -1
    //return
  }else if(xDirection === -1 && yDirection === -1){
    yDirection = 1
    //return
  }else if(xDirection === -1 && yDirection === 1){
    xDirection = 1
    //return
  }
  //return
  
}

setInterval(moveNoSignal, 40);
console.log(window.screen.width)

//console.log(xStyle)Int16Array