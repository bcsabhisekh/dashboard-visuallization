import axios from "axios";
import express from "express";
import mongoose from "mongoose";
import _ from "lodash";
import { v4 as uuid } from "uuid";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const MONGO_KEY = process.env.MONGO_KEY;

mongoose.connect("mongodb+srv://" + MONGO_KEY + "@cluster0.mrg3ztd.mongodb.net/assessmentDB", { useNewUrlParser: true }).then(() => console.log("connected successfully")).catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    id: String,
    type: String,
    value: String,
});

const userModel = mongoose.model("userModel", userSchema);

const categories = new Array("Intensity", "Likelihood", "Relevance", "Year", "Country", "Topics", "Region", "City");

export const GetQuery = async function (req, res) {
    const final_data = new Array();
    categories.forEach(async (item) => {
        const data = await userModel.find({ type: item });
        const obj = new Object();
        data && data.forEach((result) => {
            if (!(obj.hasOwnProperty(result.value))) {
                obj[result.value] = 0;
            }
            ++obj[result.value];
        });
        final_data.push({ type: item, obj: obj });
    })
    const tmp_data = new Array();
    setTimeout(() => {
        final_data && final_data.forEach((item) => {
            const keys = Object.keys(item.obj);
            const arr = new Array();
            keys.forEach((newitem) => {
                const newobj = new Object({ name: newitem, value: item.obj[newitem] });
                arr.push(newobj);
            });
            tmp_data.push({ type: item.type, data: arr });
        });
    }, 3000);
    setTimeout(() => (res.send(tmp_data)), 3000);
}

export const PostQuery = async function (req, res) {
    const { type, value } = req.body;
    const data = new userModel({
        type: type,
        value: value
    });
    await data.save().then(() => console.log('image is saved')).catch((err) => console.log(err));
    res.send({ message: "Recieved Successfully" });
}


export const GetSpecificQuery = async function (req, res) {
    const { type, value } = req.body;
    const response = await userModel.countDocuments({ type: type, value: value });
    const obj = { type: type, value: value, count: response };
    console.log(obj);
    res.send(obj);
}

