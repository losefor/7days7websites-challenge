const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const fourth = document.querySelector('.fourth')
const firstLabel = document.querySelector('.first-label')
const secondLabel = document.querySelector('.second-label')
const thirdLabel = document.querySelector('.third-label')
const fourthLabel = document.querySelector('.fourth-label')
const random = document.querySelector('.random')

function randoNumber(){
    return  Math.floor( Math.random() * colors.length)
}

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
      alert("the color coppied")
    }
  }

  pickColor()

function pickColor(){

    var currentPallete = colors[randoNumber()]
    
    first.style.backgroundColor = `#${currentPallete.first}`
    second.style.backgroundColor = `#${currentPallete.second}`
    third.style.backgroundColor = `#${currentPallete.third}`
    fourth.style.backgroundColor = `#${currentPallete.fourth}`
    
    
    firstLabel.innerHTML = `#${currentPallete.first}`
    secondLabel.innerHTML = `#${currentPallete.second}`
    thirdLabel.innerHTML = `#${currentPallete.third}`
    fourthLabel.innerHTML = `#${currentPallete.fourth}`
    
   
}

random.addEventListener('click' , ()=>{
    pickColor()
})

