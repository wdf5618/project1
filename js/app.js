const menubtn = document.getElementById('menu-btn');
const closebtn = document.getElementById('close-btn');
const menu = document.querySelector('nav .container ul')

const readmorebtn = document.querySelector('.read-more');
const readmoretext = document.querySelector('.read-more-content');

const skillitems = document.querySelectorAll('section.skills .skill');


// add box shadow on scroll 
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0);
})


// show menu 
menubtn.addEventListener('click', ()=>{
    menu.style.display = 'block';
    menubtn.style.display = 'none';
    closebtn.style.display = 'inline-block';
});

// close menu  
closebtn.addEventListener('click', ()=>{
    menu.style.display = 'none';
    menubtn.style.display = 'inline-block';
    closebtn.style.display = 'none';
});


const navitems = menu.querySelectorAll('li');

const changeactitem = ()=>{
    navitems.forEach(item =>{
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}

navitems.forEach(item =>{
    // console.log(item);

    const link = item.querySelector('a');
    link.addEventListener('click', ()=>{
        changeactitem();
        link.classList.add('active');
    })
});



// Read More about
readmorebtn.addEventListener('click', ()=>{
    readmoretext.classList.toggle('show-content'); 

    if(readmoretext.classList.contains('show-content')){
        readmorebtn.textContent = 'Show Less';
    }else{
        readmorebtn.textContent = 'Show More';
    }
})


// Show / Hide Skills items 
skillitems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', ()=>{
        skill.querySelector('.items').classList.toggle('show-items');
    })
})





















// Start Swiper Slide (Testimonial Section)
const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
        }
    });

// End Swiper Slide 