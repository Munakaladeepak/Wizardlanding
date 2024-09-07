var tl = gsap.timeline()
function page1animation(){

    tl.from("nav h1,nav h4,nav button",{
        y:-20,
        opacity:0,
        duration:0.6,
        stagger:0.2,
        delay:0.2
    })
    tl.from(".center-part1,.center-part1 h4,.center-part1 p,.center-part1 button",{
        x:-100,
        opacity:0,
        duration:0.3,
        stagger:0.4
    })
    tl.from(".center-part2 img",{
        opacity:0,
        y:30,
        duration:0.2,
    },"-=0.6")
    
    tl.from(".section1bottom img",{
        opacity:0,
        y:40,
        stagger:0.10,
        duration:0.3
    })
    
}
page1animation()


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".container",
        scroller:"body",
        start:"top 50%",
        scrub:0.2,
        end:"top 0%",
        // markers:true,

    }
})
tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.3,
})
tl2.from(".elem.line1.left",{
x:-200,
opacity:0,
duration:0.3,
},"anim1")
tl2.from(".elem.line2.left",{
x:-200,
opacity:0,
},"anim")
tl2.from(".elem.line2.right",{
x:200,
opacity:0,
},"anim")
tl2.from(".elem.line1.right",{
x:200,
opacity:0,
},"anim1")



// var st1 = gsap.timeline({
//     scrollTrigger:{
//         scrollTrigger:"#footer",
//         scroller:"body",
//         markers:true,
//         start:"top 90%",
//         end:"top 60%",
//         scrub:0.3
//     },
// })
gsap.from(".containerFooter",{
    scrollTrigger:{
        trigger:".footer",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 50%",
        scrub:0.3
    },
    opacity:0,
    y:-100,
})