import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../pages/Header.js";
import Footer from "../pages/Footer.js";
import "./Add.css";

export default function Add() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        type: "",
        value: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        // console.log(user);
        const { type, value } = user;
        if (type && value && value !== "Select") {
            try {
                // const response = await axios.post("http://localhost:5000/add", user);
                const response = await axios({
                    method: "post",
                    url: `http://localhost:5000/add`,
                    params: {
                        id: ""
                    },
                    data: user
                })
                alert(response.data.message);
            }
            catch (err) {
                throw new Error('Unable to get a token.')
            }
        }
    }

    return (<>
        <Header />
        <section id="form-section">
            <form className="form" onSubmit={onFormSubmit}>
                <div className="heading d-flex justify-content-center">
                    <h2>Add the Details Here</h2>
                </div>
                <div className="mb-5">
                    <select class="form-select" value={user.type} onChange={handleChange} name="type" aria-label="Default select example">
                        <option selected>Select</option>
                        <option value="Intensity">Intensity</option>
                        <option value="Likelihood">Likelihood</option>
                        <option value="Relevance">Relevance</option>
                        <option value="Year">Year</option>
                        <option value="Country">Country</option>
                        <option value="Topics">Topics</option>
                        <option value="Region">Region</option>
                        <option value="City">City</option>
                    </select>
                </div>
                <div className="form-outline mb-4">
                    <input type="text" id="form5Example2" autoComplete="off" name="value" onChange={handleChange} value={user.value} className="form-control" placeholder="Enter the value" />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary btn-block mb-4 me-3">Add</button>
                    <button type="button" class="btn btn-success mb-4 ms-3" onClick={() => (navigate("/"))}>Back</button>
                </div>
            </form>
        </section>
        <Footer />
    </>);
}