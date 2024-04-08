import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, Route } from "react-router-dom";
import Structure from "./structure";

const StructureSelectionPage = () => {
    const [structures, setStructures] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/structures')
            .then(response => {
                console.log(response.data);
                setStructures(response.data);
            })
            .catch(error => {
                console.error('Error fetching structures:', error);
            });
    }, []);

    return (
        <div style={{ marginLeft: "10px" }}>
            <h1>Structures</h1>
            <ul>
                {structures.map(structure => (
                    <li key={structure.s}>
                        <Link to={`/structure/${structure.structure_id}`}>{structure.structure_name} ${structure.price}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StructureSelectionPage;
