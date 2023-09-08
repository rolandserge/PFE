import React from "react";
import { Table } from '@mantine/core';

export default function Utilisateurs(){
    const elements = [
        { nom: "Komenan", prenom: "Serge-Roland", email: 'roland@gmail.com', role: 'Administrateur' },
        { nom: "Sanogo", prenom: "Issa Ramadane", email: 'sanogo@gmail.com', role: 'Formateur' },
        { nom: "Mimi", prenom: "Hartson", email: 'mimi.mimi@gmail.com', role: 'Apprenant' },
        { nom: "Koffi", prenom: "Serge", email: 'koffi@gmail.com', role: 'Apprenant' },
        { nom: "Formateur", prenom: "Formateur Jean Pierre", email: 'formateur@gmail.com', role: 'Formateur' },
      ];

      const rows = elements.map((element, index) => (
        <tr key={index}>
          <td>{element.nom}</td>
          <td>{element.prenom}</td>
          <td>{element.email}</td>
          <td>{element.role}</td>
        </tr>
      ));
    

    return (
        <div className="user-container">
            <Table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </div>
    )
}