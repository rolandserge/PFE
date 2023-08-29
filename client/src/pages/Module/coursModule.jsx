import React from "react";
import { useNavigate } from "react-router-dom";
import Formation from "../../components/formation"


export default function CoursModule() {

    const navigate = useNavigate()

    return (
        <div>
            <div className="container-cours-module">
                <div className="title">
                    <p>Cours du module</p>
                </div>
                <div className="cours-modules">
                    <Formation />
                </div>
            </div>
        </div>
    )
}