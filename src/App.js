import Button from "./components/Button";
import React, { useState } from 'react';


function App() {

  const [number, setNumber] = useState(null);

  const images = [
      null, 
       require('./components/img/pic1.png'),
        require('./components/img/pic2.png'),
        require('./components/img/pic3.png'),
        require('./components/img/pic4.png'),
        require('./components/img/pic5.png'),
        require('./components/img/pic6.png')
  ];

  function handleRoll(randomNumber) {
      setNumber(randomNumber);
  }

  return (
    <div className="App">
      <h1>Задание - бросить кубик</h1>
      <Button onRoll={handleRoll}/>
      {number && <img src={images[number]} alt={`Кубик ${number}`} />}
    </div>
  );
}

export default App;
