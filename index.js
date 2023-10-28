var le=gsap.timeline();

le.from("#text",{
    delay:1,
    y:30,
    opacity:0,
    duration:2,
})
gsap.from(".main .card",{
    // delay:1,
    // duration:2,
    y:200,
    opacity:0,
    scrollTrigger:
    {
        trigger:".main",
        start:"top 50%",
        end:"top 40%",
        // markers:true,
        scrub:2,
        stagger:2,
        pin:true,
    }
});

// gsap.from(".main2 .card",{
//     // delay:1,
//     // duration:2,
//     // y:200,
//     opacity:0,
//     scrollTrigger:
//     {
//         trigger:".main2",
//         start:"top 50%",
//         end:"top 40%",
//         // markers:true,
//         // scrub:2,
//         // stagger:2,
//         // pin:true,
//     }
// });

gsap.from(".main2",{
    opacity:0,
    y:100,
    scrollTrigger:
    {
        trigger:".main2",
        start:"top 90%",
        end:"top 70%",
        // markers:true,
        scrub:4,
        stagger:2,
    }
});
let main=document.querySelector(".main");
console.log(main);

let cursor=document.querySelector(".cursor");
// let main=document.querySelector(".main");
main.addEventListener("mousemove",function(dets)
{
    cursor.style.left=dets.x+"px";
    cursor.style.top=dets.y+"px";
    console.log(dets);
})

