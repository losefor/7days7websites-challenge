const random = document.querySelector(".random");
const cube = document.querySelector(".cube");

const sides = [
  {
    x: 0,
    y: 0,
  }, {
    x: 180,
    y: 0,
  }, {
    x: 0,
    y: 90,
  }, {
    x: 0,
    y: -90,
  }, {
    x: 180,
    y: 90,
  }, {
    x: -90,
    y: 0,
  }, {
    x: 90,
    y: 0,
  },
];

const randSide = [
    {
      x: 45,
      y: 30,
    }, {
      x: 130,
      y: 12,
    }, {
      x: 20,
      y: 45,
    }, {
      x: 70,
      y: 100,
    }, {
      x: 10,
      y: 100,
    }, {
      x: -90,
      y: 450,
    }, {
      x: 90,
      y:-45,
    },
  ];

function randomGenerator(){
    return Math.floor(Math.random()*sides.length)
}
random.addEventListener("click", () => {
    var side = sides[randomGenerator()]
    var randomeSide = randSide[randomGenerator()]

    cube.style.transform = `rotateX(${randomeSide.x}deg) rotateY(${randomeSide.y}deg)`;
    
    setTimeout(()=>{
        cube.style.transform = `rotateX(${side.x}deg) rotateY(${side.y}deg)`;
    },300)
});
