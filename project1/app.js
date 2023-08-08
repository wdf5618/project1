const navbarBtn = document.getElementById('navbar-btn');

navbarBtn.addEventListener('click', (e)=>{
    navbarBtn.classList.toggle('toggle');
    console.log(navbarBtn);
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.querySelector(".navbar").style.padding = "10px";
    document.querySelector(".navbar").style.background = 'rgba(255, 255, 255, 0.3)';
  }else{
    document.querySelector(".navbar").style.background = '';
  }
}


document.getElementById('year').innerText = new Date().getFullYear();
