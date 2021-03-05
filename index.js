const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll",show)
show()
  function show(){

    const triggerBottom = (window.innerHeight / 5) * 2.5;
  
  
  boxes.forEach((box) => {
    const topBox = box.getBoundingClientRect().top;

    if (topBox < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
  }
