var typed = new Typed('#element', {
  strings: ['ভুনা খিচুড়ি',' লেটকা খিচুড়ি', 'ফ্রাইড রাইস', 'চিকেন মাসালা'],
  typeSpeed: 80,
  backSpeed: 100,
  loop: true,
  
});

var typed = new Typed('#element2', {
  strings: ['শনিবার ', ' রবিবার',],
  typeSpeed: 150,
  backSpeed: 100,
  loop: true,

});

let navtoggle = document.querySelector(".navtoggle")

let sidebar = document.querySelector(".ullist"
)

navtoggle.addEventListener("click", function(){
  sidebar.classList.toggle('open')
  
})
