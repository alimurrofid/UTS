let text = document.getElementById('text');
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    text.style.marginRight = value * 4 + 'px';
})


const content = document.querySelector('.content');
const jumbo = document.querySelector('.jumbo');

content.addEventListener('click', function(e){

    //cek apakah yang diklik adalah thumb
    if(e.target.className == 'thumb'){
        jumbo.src = e.target.src;
    }
});