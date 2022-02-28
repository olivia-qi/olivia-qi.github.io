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
                } else if (entry.target.id == "firstyoutube") {
                    document.getElementById('textbig1').classList.add('bigtext')
                } else if (entry.target.id == 'firstimage') {
                    document.getElementById('textbig2').classList.add('bigtext')
                    document.getElementById('textbig1').classList.remove('bigtext')
                } else if (entry.target.id == 'secondyoutube') {
                    document.getElementById('textbig3').classList.add('bigtext')
                    document.getElementById('textbig2').classList.remove('bigtext')
                } else if (entry.target.id == 'secondimage') {
                    document.getElementById('textbig4').classList.add('bigtext')
                    document.getElementById('textbig3').classList.remove('bigtext')
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
scrollTrigger('#firstyoutube')
scrollTrigger('#firstimage')
scrollTrigger('#secondyoutube')
scrollTrigger('#secondimage')
console.log("haha you got this far")

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";

    } else {
        x.className = "topnav";

    }
}