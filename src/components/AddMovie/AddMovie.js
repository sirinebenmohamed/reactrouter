import React, { useState } from "react";
import Modal from "react-modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import  "./AddMovie.css";

Modal.setAppElement("#root");

const AddMovie = ({ addMovie }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [rating, setrating] = useState("0");
    const [date, setDate] = useState("");

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleSubmit = () => {
        let newMovie = {
            image,
            rating,
            name,
            date,
        };
        addMovie(newMovie);
        setIsOpen(false);
        setImage("");
        setrating("0");
        setName("");
        setDate("");
    };

    return (
        <div>
            <div className="add-movie">
                <Button onClick={openModal}>ADD MOVIE</Button>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                    <h1>Add A Movie</h1>
                    <Form>
                        <label>Movie Name : </label>
                        <input type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
                        <br />
                        <label>Movie Rate : </label>
                        <div></div>
                        <input type="number" name="rating" required min="1" max="5" value={rating} onChange={(e) => setrating(e.target.value)} />
                        <br />
                        <label>Movie Release Date : </label>
                        <input type="number" name="date" required value={date} onChange={(e) => setDate(e.target.value)} />
                        <br />

                        <label>Movie Image : </label>
                        <input type="url" name="image" required value={image} onChange={(e) => setImage(e.target.value)} />
                    </Form>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal>
            </div>
        </div>
    );
};
export default AddMovie;