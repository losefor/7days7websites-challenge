const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const firstLabel = document.querySelector(".first-label");
const secondLabel = document.querySelector(".second-label");
const thirdLabel = document.querySelector(".third-label");
const fourthLabel = document.querySelector(".fourth-label");
const random = document.querySelector(".random");

var rotaition = 360 ; 
//a function for creating random number
function randoNumber() {
  return Math.floor(Math.random() * colors.length);
}

//the function that used for copy the color code 
function CopyToClipboard(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("the color coppied");
  }
}


//seleect color onstart 
pickColor();


//a function for selecting random color
function pickColor() {
  var currentPallete = colors[randoNumber()];

  first.style.backgroundColor = `#${currentPallete.first}`;
  second.style.backgroundColor = `#${currentPallete.second}`;
  third.style.backgroundColor = `#${currentPallete.third}`;
  fourth.style.backgroundColor = `#${currentPallete.fourth}`;

  firstLabel.innerHTML = `#${currentPallete.first}`;
  secondLabel.innerHTML = `#${currentPallete.second}`;
  thirdLabel.innerHTML = `#${currentPallete.third}`;
  fourthLabel.innerHTML = `#${currentPallete.fourth}`;
}

console.log( random.style.transform)
//when click the random button reselecting the colors
random.addEventListener("click", () => {
  firstLabel.style.opacity = '0'
  secondLabel.style.opacity = '0'
  thirdLabel.style.opacity = '0'
  fourthLabel.style.opacity = '0'
  pickColor();
  random.style.transform = `rotate(${rotaition}deg)`;
  rotaition += 360 ; 
});


first.addEventListener('click' , ()=>{
  firstLabel.style.opacity = '1'
  secondLabel.style.opacity = '0'
  thirdLabel.style.opacity = '0'
  fourthLabel.style.opacity = '0'
})


second.addEventListener('click' , ()=>{
  firstLabel.style.opacity = '0'
  secondLabel.style.opacity = '1'
  thirdLabel.style.opacity = '0'
  fourthLabel.style.opacity = '0'
})



third.addEventListener('click' , ()=>{
  firstLabel.style.opacity = '0'
  secondLabel.style.opacity = '0'
  thirdLabel.style.opacity = '1'
  fourthLabel.style.opacity = '0'
})



fourth.addEventListener('click' , ()=>{
  firstLabel.style.opacity = '0'
  secondLabel.style.opacity = '0'
  thirdLabel.style.opacity = '0'
  fourthLabel.style.opacity = '1'
})
