import LoginImage from "/assets/connexion.jpg"
import {
     TextInput,
     PasswordInput,
     Paper,
     Title,
     Container,
     Group,
     Button,
   } from '@mantine/core';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setCredentials } from "../slices/authSlice";
import { useLoginMutation } from "../slices/userApiSlice";

export default function Login() {

     const navigate = useNavigate()

     const [data, setData] = useState({
          email: "",
          password: ""
     })
     const dispatch = useDispatch()
     const [login, { isLoading }] = useLoginMutation()
     const { userInfo } = useSelector((state) => state.auth)

     const handleChange = (event) => {
          const { name, value } = event.target;
          setData({ ...data, [name]: value });
      };
  

     useEffect(() => {
          if(userInfo) {
               navigate('/acceuil')
          }

     }, [userInfo, navigate])

     const userLogin = async (event) => {

          event.preventDefault()

          try {
               const res = await login({email: data.email, password: data.password}).unwrap()
               dispatch(setCredentials({...res}))
               navigate('/acceuil')
          } catch (error) {
               console.log(error)
          }
     }


     return (
          <div className="login_page">
               <div className="container_login">
                    <div className="image_card">
                         <img src={LoginImage} alt="image d'illustration de login" className="image" />
                    </div>
                    <div className="login_card">
                         <Container size={500} my={40}>
                              <Title
                              align="center"
                              sx={() => ({fontWeight: 900 })}
                              >
                                   Bienvenue !
                              </Title>
                              <form action="" method="post" onSubmit={userLogin}>
                                   <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                                        <TextInput label="Email" type="email" value={data.email} name="email" onChange={handleChange} placeholder="webturba@gmail.com" required />
                                        <PasswordInput label="Mot de passe" name="password" value={data.password} onChange={handleChange} placeholder="Votre mot de passe" required mt="md" />
                                        <Group position="apart" mt="lg">
                                        </Group>
                                        <Button fullWidth mt="xl" disabled={isLoading} type="submit" color='yellow'>
                                             Se connecter
                                        </Button>
                                   </Paper>
                              </form>
                         </Container>
                    </div>
               </div>
          </div>
     )
}