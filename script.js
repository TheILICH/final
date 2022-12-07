const first = document.getElementById("first")
const second = document.getElementById("second")

const animate = (element,position) => {
     element.style.transform = `translateX(${position}px)`
} 

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;
    
   window.requestAnimationFrame(function() {
      animate(first,lastKnownScrollPosition*-.8)
      animate(second,lastKnownScrollPosition*.8)
      
    });
});