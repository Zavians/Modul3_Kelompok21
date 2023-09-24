import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card'; // Import komponen Card jika belum diimpor

function App() {
  const [count, setCount] = useState(0);
  const [praktikan, setPraktikan] = useState(null);

  const addPraktikanHandler = (data) => {
    console.log(data);
    setPraktikan(data);
  };

  const removePraktikanHandler = () => {
    setPraktikan(null);
  };

  return (
    <div className="App">
      <h1>Kartu Praktikan</h1>
      <Form onAddPraktikan={addPraktikanHandler} />

      {praktikan && (
        <>
          <button className="delete" onClick={removePraktikanHandler}>
            Hapus
          </button>

          <Card nama={praktikan.nama} kelompok={praktikan.kelompok} />
        </>
      )}
    </div>
  );
}

export default App;
