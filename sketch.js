function setup() {
  createCanvas(200, 200);
  background(220);
  
  translate(0,200)
  
  var altura = [random(-10, -100), random(-10, -100), random(-10, -100), random(-10, -100)]
  
  rect(24, 0, 20, altura[0])
  rect((24+20+24), 0, 20, altura[1])
  rect((24+20+24+20+24), 0, 20, altura[2])
  rect((24+20+24+20+24+20+24), 0, 20, altura[3])
}
function refresh(){
  window.location.reload()
}

