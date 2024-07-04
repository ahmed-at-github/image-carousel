import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import "../src/styles.css";

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/2560px-Monet_-_Impression%2C_Sunrise.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/31/Claude_Monet_023.jpg",
  " https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg/1596px-Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg",
  " https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Claude_Monet_-_Path_in_the_Wheat_Fields_at_Pourville.jpg/1280px-Claude_Monet_-_Path_in_the_Wheat_Fields_at_Pourville.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/The_Bookworm_-_Grohmann_Museum.jpg/1124px-The_Bookworm_-_Grohmann_Museum.jpg",
];

const title = [
  "Impression, Sunrise (French: Impression, soleil levant), Claude Monet, 1872",
  "Woman with a Parasol facing left, Claude Monet, 1886",
  "Wanderer above the Sea of Fog (German: Der Wanderer über dem Nebelmeer), Caspar David Friedrich, 1818",
  " Path in the Wheat Fields at Pourville, Claude Monet, 1882",
  "The Bookworm (German: Der Bücherwurm), Carl Spitzweg, 1850",
];

function App() {
  const [current, setcurrent] = useState(0);

  function next() {
    setcurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prev() {
    setcurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div className="App">
      <h2> Classical Art Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prev}>
          
        </div>

        <div className="right-arrow" onClick={next}>
          ⮕
        </div>

        <div>
          {images.map(
            (image, index) =>
              current === index && (  //special && js operator which returns (...) if the condition is true 
                <div className="slide" key={image}>
                  <img src={image} alt="images" />
                  <div className="title"> {index+1}. {title[index]}  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
