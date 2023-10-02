import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card'; // Import komponen Card jika belum diimpor

function App() {
  const [count, setCount] = useState(0);
  const [praktikan, setPraktikan] = useState(null);
  const [showCongratulations, setShowCongratulations] = useState(false);

  useEffect(() => {
    if (count === 10) {
      // Jika "count" mencapai 10, tampilkan pesan selamat
      setShowCongratulations(true);

      // Setelah beberapa detik, sembunyikan pesan selamat
      setTimeout(() => {
        setShowCongratulations(false);
      }, 3000); // 3000 milidetik (3 detik)
      
      // Reset nilai "count" dan hapus praktikan
      setCount(0);
      setPraktikan(null);
    }
  }, [count]);

  const addPraktikanHandler = (data) => {
    console.log(data);
    setPraktikan(data);
  };

  const removePraktikanHandler = () => {
    setPraktikan(null);
  };

  const incrementCounter = () => {
    if (count < 10) {
      setCount(count + 1);
    }
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

      {showCongratulations && (
        <div className="congratulations">
          Selamat, counter sudah berada di angka 10!
        </div>
      )}

      <div className="counter">
        <p>Counter: {count}</p>
        {count < 10 && (
          <button onClick={incrementCounter}>Tambah Counter</button>
        )}
      </div>
    </div>
  );
}

export default App;
