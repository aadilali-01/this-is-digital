function a (){
    gsap.registerPlugin(ScrollTrigger);
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#pages"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#pages", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#pages").style.transform ? "transform" : "fixed"
  });
  
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
}
  
a();



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});





var tl = gsap.timeline();

tl.from("#page1 h1,#btncenter",{
    opacity: 0,
    delay: .4,
    duration: 1

},)


.from("#img1",{
    y: 300,
    opacity: 0,
    duration: 1,
},'-=.5')

.from("#img2",{
    x: 100,
    opacity: 0,
    duration:1
},'-=1')

.from("#img3",{
    y: -100,
    opacity: 0,
    duration:1
},'-=1')

gsap.from("#page2 h3, #page2 h1, #page2 #about-us",{
  scrollTrigger: {
    scroller: "#pages",
    trigger: "#page2",
    start: "top 60%",
  },
  opacity: 0,
  y: 100,
  stagger: .5,
})

gsap.from("#page3 #page3-left, #page3-right",{
  scrollTrigger: {
    scroller: "#pages",
    trigger: "#page3",
    start: "top 60%",
  },
  opacity: 0,
  y: 100,
  stagger: .5,
})

gsap.from("#page4 h1, #page4 #logos",{
  scrollTrigger: {
    scroller: "#pages",
    trigger: "#page4",
    start: "top 60%",
  },
  opacity: 0,
  y: 100,
  stagger: .5,
})

gsap.from("#page5-images, #page5 #see-more",{
  scrollTrigger: {
    scroller: "#pages",
    trigger: "#page5",
    start: "top 60%",
  },
  opacity: 0,
  y: 100,
  stagger: .5,
})

gsap.from("#page6 .swiper-wrapper",{
  scrollTrigger: {
    scroller: "#pages",
    trigger: "#page6",
    start: "top 60%",
  },
  opacity: 0,
  y: 100,
  stagger: .5,
})

gsap.from("#page7 #last-image, #page7-bottom #btm-container",{
  scrollTrigger: {
    scroller: "#pages",
    trigger: "#page7",
    start: "top 60%",
  },
  opacity: 0,
  y: 50,
  stagger: .5,
})

var menu = document.querySelector("#menu");
var rmenu = document.querySelector("#responsive-menu");
var line1 = document.querySelector("#line1");
var line2 = document.querySelector("#line2");
var line3 = document.querySelector("#line3");
var flag = 0;

menu.addEventListener("click",function(){
    if(flag===0){
        line1.style.transformOrigin = "50% 30%"
        line1.style.transform = "rotate(-45deg)"
        line3.style.width = "35px"
        line3.style.transformOrigin = "80% 50%"
        line3.style.transform = "rotate(45deg)"
        line2.style.display = "none"
        rmenu.style.top = "0";
        flag = 1;
    }else{
        line1.style.transform = "rotate(0deg)"
        line3.style.transform = "rotate(0deg)"
        line3.style.width = "15px"
        line2.style.display = "flex"
        rmenu.style.top = "-100%";
        flag = 0;
    }
})


