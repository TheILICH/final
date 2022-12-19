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

var number = document.querySelector('#number'),
        numberTop = number.getBoundingClientRect().top,
        start = +number.innerHTML, end = +number.dataset.max;

        window.addEventListener('scroll', function onScroll() {
            if(window.pageYOffset > numberTop - window.innerHeight / 2) {
                this.removeEventListener('scroll', onScroll);
                var interval = setInterval(function() {
                    number.innerHTML = ++start;
                    if(start === end) {
                        clearInterval(interval);
                    }
                }, 5);
            }
        });
        var number1 = document.querySelector('#number1'),
        numberTop1 = number1.getBoundingClientRect().top,
        start1 = +number1.innerHTML, end1 = +number1.dataset.max;

        window.addEventListener('scroll', function onScroll() {
            if(window.pageYOffset > numberTop1 - window.innerHeight / 2) {
                this.removeEventListener('scroll', onScroll);
                var interval1 = setInterval(function() {
                    number1.innerHTML = ++start1;
                    if(start1 === end1) {
                        clearInterval(interval1);
                    }
                }, 5);
            }
        });
        var number2 = document.querySelector('#number2'),
        numberTop2 = number2.getBoundingClientRect().top,
        start2 = +number2.innerHTML, end2 = +number2.dataset.max;

        window.addEventListener('scroll', function onScroll() {
            if(window.pageYOffset > numberTop2 - window.innerHeight / 2) {
                this.removeEventListener('scroll', onScroll);
                var interval2 = setInterval(function() {
                    number2.innerHTML = ++start2;
                    if(start2 === end2) {
                        clearInterval(interval2);
                    }
                }, 5);
            }
        });

//скорость скролла
const wed = document.getElementById("wed");
const photo = document.getElementById("photo");

const slow_scroll = (element,position) => {
    element.style.transform = `translateY(${position}px)`
}
document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;

    window.requestAnimationFrame(function() {
        slow_scroll(wed,lastKnownScrollPosition*0.1);
    });
    window.requestAnimationFrame(function() {
        slow_scroll(photo,lastKnownScrollPosition*0.1);
    });
});