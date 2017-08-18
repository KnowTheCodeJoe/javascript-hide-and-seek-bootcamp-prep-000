function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  var x = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < x.length; i++){
  x[i].innerHTML = parseInt(x[i].innerHTML) + n
  }
  return
}

function deepestChild(){
  var dchild = document.querySelector('#grand-node')
  return document.querySelector('#grand-node div div div div')
}
