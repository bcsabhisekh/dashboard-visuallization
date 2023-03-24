import { React, useState } from "react";
import Header from "../pages/Header.js";
import Footer from "../pages/Footer.js";
import "./Add.css";

export default function Add() {
    return (<>
        <Header />
        <form>
            <div class="form-outline mb-4">
                <input type="text" id="form5Example1" class="form-control" />
                <label class="form-label" for="form5Example1">Name</label>
            </div>
            <div class="form-outline mb-4">
                <input type="email" id="form5Example2" class="form-control" />
                <label class="form-label" for="form5Example2">Email address</label>
            </div>
            <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="form5Example3" checked />
                <label class="form-check-label" for="form5Example3">
                    I have read and agree to the terms
                </label>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4">Subscribe</button>
        </form>
        <Footer />
    </>);
}