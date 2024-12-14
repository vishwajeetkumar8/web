var body = document.querySelector("body")
var cursor = document.querySelector("#cursor")


body.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x-20,
        y:dets.y-20,
    })
})