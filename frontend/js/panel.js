const velocidadScroll = 6; 

document.addEventListener("wheel", (event) => {
    event.preventDefault(); 
    window.scrollBy({
      top: event.deltaY * velocidadScroll, 
      left: 0,
      behavior: "auto", 
    });
  }, { passive: false }); 
  