const bars = document.querySelector('.fa-bars')
const toggle =  document.querySelector('.slide')
const body =  document.querySelector('body')
const alertComponent =  document.querySelector('.alert')
const closeAlert =  document.querySelector('.close')






bars.addEventListener('click' , ()=>{
    console.log(toggle.classList)
    if(toggle.classList =='toggle slide'){
        toggle.className = 'slide'
        body.style.overflowY = 'scroll'
    }else{
        toggle.className = 'toggle slide'
        body.style.overflowY = 'hidden'

    }
})

closeAlert.addEventListener('click' , ()=>{
    document.querySelector('.alert').style.height = '0px'
    document.querySelector('.alert').style.padding = '0px'

})