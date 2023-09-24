import React, { useState, useEffect } from 'react';
import "./Form.css";

function Form(props) {
    const [nama, setNama] = useState("");
    const [kelompok, setKelompok] = useState("");
    const [namaIsValid, setNamaIsValid] = useState(null);
    const [kelompokIsValid, setKelompokIsValid] = useState(null);
    const [formIsValid, setFormIsValid] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();

        if (formIsValid) {
            console.log({ nama, kelompok });
            props.onAddPraktikan({ nama, kelompok });

            setNama("");
            setKelompok("");
        } else {
            alert("Form tidak valid");
        }
    };

    const changeNamaHandler = (event) => {
        const inputNama = event.target.value;
        setNamaIsValid(inputNama.trim().length > 0);
        setNama(inputNama);
    }

    const changeKelompokHandler = (event) => {
        const inputKelompok = event.target.value;
        setKelompokIsValid(inputKelompok.trim().length > 0);
        setKelompok(inputKelompok);
    }

    useEffect(() => {
        setFormIsValid(namaIsValid && kelompokIsValid);
        console.log(`${Form.name}: ${formIsValid}`);
    }, [namaIsValid, kelompokIsValid]);

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="nama">Nama</label>
            <input
                className={namaIsValid === false ? "invalid" : ""}
                autoComplete="off"
                type="text"
                id="nama"
                name="nama"
                value={nama}
                onChange={changeNamaHandler}
            />

            <label htmlFor="kelompok">Kelompok</label>
            <input
                className={kelompokIsValid === false ? "invalid" : ""}
                autoComplete="off"
                type="number"
                id="kelompok"
                name="kelompok"
                value={kelompok}
                onChange={changeKelompokHandler}
            />

            <button type="submit">Buat Kartu Praktikan</button>
        </form>
    );
}

export default Form;
