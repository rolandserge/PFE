import React, { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from "react-redux"
import { TextInput, Input, Button} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from "../../slices/authSlice"
import { useRegisterMutation } from "../../slices/userApiSlice"
import axios from 'axios';


export default function Register() {

    const [data, setData] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: ""
    })
    const [departements, setDepartements] = useState([])
    const [departement, setDepartement] = useState('')
    const [role, setRole] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [ register, { isLoading }] = useRegisterMutation()
    const  { userInfo } = useSelector((state) => state.auth)

    const { enqueueSnackbar } = useSnackbar()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    useEffect(() => {

        (async () => {
            const { data } = await axios.get('/api/departements')
            setDepartements(data.data)
        })()

    }, [])

    const addUtilisateur = async(event) => {

        event.preventDefault();

        try {
            const res = await register({ nom: data.nom, prenom: data.prenom, email: data.email, role: role, departement: departement, password: data.password}).unwrap()
            dispatch(setCredentials({...res}))
            console.log(res)
            alert('Successfully registered')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="creer-module-page">
        <div className="container-formulaire">
            <div className="title">
                <p>Créer un utilisateur</p>
                <div className="trait">

                </div>
            </div>
            <form onSubmit={addUtilisateur}>
                <div>
                    <TextInput
                        label="Le nom de l'utilisateur"
                        mb="0.8em"
                        value={data.nom}
                        name="nom"
                        onChange={handleChange}
                        placeholder="Entrer le nom de l'utilisateur"
                        required
                    />
                </div>
                <div>
                    <TextInput
                        label="Le prenom de l'utilisateur"
                        mb="0.8em"
                        value={data.prenom}
                        name="prenom"
                        onChange={handleChange}
                        placeholder="Entrer le prenom de l'utilisateur"
                        required
                    />
                </div>
                <div>
                    <TextInput
                        label="L'adresse email de l'utilisateur"
                        mb="0.8em"
                        type='email'
                        value={data.email}
                        name="email"
                        onChange={handleChange}
                        placeholder="Entrer l'adresse email de l'utilisateur"
                        required
                    />
                </div>
                <div>
                    <TextInput
                        label="Le mot de passe de l'utilisateur"
                        mb="0.8em"
                        type='password'
                        value={data.password}
                        name="password"
                        onChange={handleChange}
                        placeholder="Entrer le mot de passe de l'utilisateur"
                        required
                    />
                </div>
                <div>
                    <Input component="select" m="1em 0" name="departement" value={departement} onChange={e => setDepartement(e.target.value)} required rightSection={<IconChevronDown size={14} stroke={1.5} />}>
                        <option value="">Veillez choisir le département de l'utilisateur</option>
                        {
                            departements.map((departement, index) => (

                                <option value={departement._id} key={index}>{departement.libele}</option>

                            ))
                        }
                    </Input>
                </div>
                <div>
                    <Input component="select" m="1em 0" name="departement" value={role} onChange={e => setRole(e.target.value)} required rightSection={<IconChevronDown size={14} stroke={1.5} />}>
                        <option value="">Veillez choisir le role</option>
                        <option value="Formateur">Formateur</option>
                        <option value="Apprenant">Apprenant</option>
                        <option value="Administrateur">Administrateur</option>
                    </Input>
                </div>
                <div>
                    <Button type="submit" h="6.5vh" fz="1em" color="orange" fullWidth>
                        Ajouter l'utilisateur
                    </Button>
                </div>
            </form>
        </div>
    </div>
    )
}