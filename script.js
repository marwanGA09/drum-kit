window.addEventListener("keypress", (event) => {
  const keys = document.querySelector(`.${event.code}`);
  //   console.log(keys);
  keys.classList.add("current-play");

  switch (event.code) {
    case "KeyA":
      document.querySelector("[help='A']").play();
      break;
    case "KeyS":
      document.querySelector("[help='S']").play();
      break;
    case "KeyD":
      document.querySelector("[help='D']").play();
      break;
    case "KeyF":
      document.querySelector("[help='F']").play();
      break;
    case "KeyG":
      document.querySelector("[help='G']").play();
      break;
    case "KeyH":
      document.querySelector("[help='H']").play();
      break;
    case "KeyJ":
      document.querySelector("[help='J']").play();
      break;
    case "KeyK":
      document.querySelector("[help='K']").play();
      break;
    case "KeyL":
      document.querySelector("[help='L']").play();
      break;
    case "Semicolon":
      document.querySelector("[help='Semicolon']").play();
      break;
  }
  setTimeout(() => keys.classList.remove("current-play"), 200);
  // ;
});
