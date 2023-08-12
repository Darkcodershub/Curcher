var tl=gsap.timeline()

tl.from("nav,h1",{
    y:-80,
    opacity:0,
    duration:0.8,
    delay:0.2,
})
tl.from("nav,h2",{
    y:-80,
    opacity:0,
    duration:0.8,
    delay:0.3,
})
tl.from("nav,h3,h4",{
    y:-80,
    opacity:0,
    duration:0.8,
    delay:0.3,
})
tl.from("#right img",{
    y:-80,
    opacity:0,
    duration:0.8,
    delay:0.3,
})
