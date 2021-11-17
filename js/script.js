function dark() {
  let light = (document.body.style.backgroundColor === "white");
  let bgColor = "white";
  let font1 = "black";
  if (light) {
    //switch to dark mode
    bgColor = "black"
    font1 = "white"
  } 
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = font1;
}