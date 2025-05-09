// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="App">
      <h1>Virtual Fashion Fitting</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" />}
      {/* Add your virtual fitting logic here */}
    </div>
  );
}

export default App;