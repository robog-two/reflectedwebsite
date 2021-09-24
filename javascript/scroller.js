// The debounce function receives our function as a parameter
const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {

    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {

      // Call our function and pass any params we received
      fn(...params);
    });

  }
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  let posY = (visualViewport.height * 0.1) - ((window.scrollY - (visualViewport.height * 2)) * 0.7)
  document.getElementById("launcherbg").style.backgroundPositionY = `${posY}px`

  if (window.scrollY > 0.3 * visualViewport.height) {
    if (document.getElementById("titleprescroll")) {
      document.getElementById("titleprescroll").id = "titlepostscroll"
    }
  } else {
    if (document.getElementById("titlepostscroll")) {
      document.getElementById("titlepostscroll").id = "titleprescroll"
    }
  }
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();
