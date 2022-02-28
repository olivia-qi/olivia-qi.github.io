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
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList == "indexthing") {
                    entry.target.classList.add('indexthing')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}

scrollTrigger('.indexthing')
scrollTrigger('#aboutme')
scrollTrigger('#aboutme_text')
scrollTrigger('#firstyoutube')
scrollTrigger('#firstimage')
scrollTrigger('#secondyoutube')
scrollTrigger('#secondimage')
console.log("haha you got this far")

/*Nav*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";

    } else {
        x.className = "topnav";

    }
}