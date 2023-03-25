import axios from "axios";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import './Body.css';

export default function Body() {

    const [result, setData] = useState([[{}]]);

    const GetData = async function () {
        try {
            // const response = await axios.get("http://localhost:5000");
            const response = await axios({
                method: "get",
                url: `http://localhost:5000/`,
                params: {
                }
            });
            // console.log(response.data);
            // response.data && response.data.map((item, index) => {
            //     // console.log(item);
            //     setData([...result, item]);
            // });
            setData(response.data);
        }
        catch (err) {
            throw (err);
        }
    }

    useEffect(() => {
        GetData();
    }, []);

    // console.log(result);


    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];

    return (<>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 boxes">
                    <div className="heading d-flex justify-content-center">
                        <h5>Intensity Graph</h5>
                    </div>
                    <BarChart
                        width={500}
                        height={300}
                        data={result[0]}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    </BarChart>
                </div>
                <div class="col-12 col-md-6 boxes">
                    <div className="heading d-flex justify-content-center">
                        <h5>Likelihood Graph</h5>
                    </div>
                    <BarChart
                        width={500}
                        height={300}
                        data={result[1]}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    </BarChart>
                </div>
                <div class="col-12 col-md-6 boxes">
                    <div className="heading d-flex justify-content-center">
                        <h5>Relevance Graph</h5>
                    </div>
                    <BarChart
                        width={500}
                        height={300}
                        data={result[2]}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    </BarChart>
                </div>
                <div class="col-12 col-md-6 boxes">
                    <div className="heading d-flex justify-content-center">
                        <h5>Yearly Graph</h5>
                    </div>

                    <BarChart
                        width={500}
                        height={300}
                        data={result[3]}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    </BarChart>
                </div>
                <div class="col-12 col-md-6 boxes">
                    <div className="heading d-flex justify-content-center">
                        <h5>Country Graph</h5>
                    </div>
                    <BarChart
                        width={500}
                        height={300}
                        data={result[4]}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    </BarChart>
                </div>
                <div class="col-12 col-md-6 boxes">
                    <div className="heading d-flex justify-content-center">
                        <h5>Topics Graph</h5>
                    </div>
                    <BarChart
                        width={500}
                        height={300}
                        data={result[5]}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    </BarChart>
                </div>
                <div class="col-12 col-md-6 boxes">
                    <div className="heading d-flex justify-content-center">
                        <h5>Region Graph</h5>
                    </div>
                    <BarChart
                        width={500}
                        height={300}
                        data={result[6]}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    </BarChart>
                </div>
                <div class="col-12 col-md-6 boxes">
                    <div className="heading d-flex justify-content-center">
                        <h5>City Graph</h5>
                    </div>
                    <BarChart
                        width={500}
                        height={300}
                        data={result[7]}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    </BarChart>
                </div>
            </div>
        </div>
    </>);

}