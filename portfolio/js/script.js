function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    console.log(els)
    els.forEach(el => {
        addObserver(el, options)
        console.log(el)
    })
}

function addObserver(el, options) {
    if (!('IntersectionObserver' in window)) {
        if (options.cb) {
            options.cb(el)
        } else {
            entry.target.classList.add('active')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id == "aboutme") {
                    entry.target.classList.add('rectangle')
                } else if (entry.target.id == "aboutme_text") {
                    entry.target.classList.add('rectangletext')
                } else if (entry.target.id == "textbig") {
                    entry.target.classList.add('bigtext')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}

scrollTrigger('#aboutme')
    //scrollTrigger('.rectangletext')
scrollTrigger('#aboutme_text')

console.log("haha you got this far")

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";

    } else {
        x.className = "topnav";

    }
}