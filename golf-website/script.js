var crsr = document.querySelector("#cursor");
var blurr = document.querySelector("#cursor-blur");
var mouseX = 0;
var mouseY = 0;

document.addEventListener("mousemove", function (dets) {
    mouseX = dets.x;
    mouseY = dets.y;
});

function animateCursor() {
    crsr.style.left = mouseX + "px";
    crsr.style.top = mouseY + "px";
    blurr.style.left = mouseX - 250 + "px"; // Adjust blur position if needed
    blurr.style.top = mouseY - 250 + "px"; // Adjust blur position if needed
    requestAnimationFrame(animateCursor);
}

animateCursor(); // Start the animation

// when we hover to elements of nav bar it should change the cursor
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
});