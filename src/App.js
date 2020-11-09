import React from 'react';
import './App.css';

const App = () => {
  const body = document.querySelector("body")

  window.addEventListener('click', (e) => {
    const colors = [
      "#FF6F61",
      "#6B5B95",
      "#88B04B",
      "#F7CAC9",
      "#92A8D1",
      "#955251",
      "#B565A7",
      "#009B77",
      "#DD4124",
      "#D65076",
      "#45B8AC",
      "#EFC050",
      "#5B5EA6",
      "#9B2335",
      "#DFCFBE",
      "#55B4B0",
      "#E15D44",
      "#7FCDCD",
      "#BC243C",
      "#C3447A",
      "#98B4D4",
      "#FF0000",
    ]
    function createRandom(colorArr) {
      let lengthColor = colorArr.length;
      return colorArr[ Math.floor(Math.random() * lengthColor)];
    }
    
    const divElement = document.createElement('div');
    divElement.style.position = 'fixed';
    divElement.style.left = `${e.x}px`;
    divElement.style.top = `${e.y}px`;
    divElement.style.fontFamily = 'Courier New'
    divElement.innerHTML = '&#x1f416; Cao Thị Trang';
    divElement.style.color = createRandom(colors);
    divElement.classList.add('tim-bay');
    body.appendChild(divElement);
    
    setTimeout(function() {
      divElement.remove();
    },1400)
  })
  return (
    <></>
  )
}
export default App;
