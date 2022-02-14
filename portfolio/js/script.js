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
                        //document.getElementById('textbig').style.backgroundColor = 'yellow'
                } else if (entry.target.id == "aboutme_text") {
                    entry.target.classList.add('rectangletext')
                } else if (entry.target.id == "FILL THIS") {


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

console.log("here")

// Example usages:
//scrollTrigger('.intro-text')

// scrollTrigger('.scroll-reveal', {
//     rootMargin: '-200px',
// })

// scrollTrigger('.loader', {
//     rootMargin: '-200px',
//     cb: function(el) {
//         el.innerText = 'Loading...'
//         setTimeout(() => {
//             el.innerText = 'Task Complete!'
//         }, 1000)
//     }
// })