import '../styles/pages/auth.css'
import LoginImage from "../assets/connexion.jpg"
import {
     TextInput,
     PasswordInput,
     Checkbox,
     Anchor,
     Paper,
     Title,
     Container,
     Group,
     Button,
   } from '@mantine/core';

export default function Login() {

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
                                   Bienvenu !
                              </Title>
                              <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                                   <TextInput label="Email" placeholder="webturba@gmail.com" required />
                                   <PasswordInput label="Mot de passe" placeholder="Votre mot de passe" required mt="md" />
                                   <Group position="apart" mt="lg">
                                        <Checkbox label="Remember me" />
                                        <Anchor component="button" size="sm">
                                        Mot de passe oublié ?
                                        </Anchor>
                                   </Group>
                                   <Button fullWidth mt="xl" color='yellow'>
                                        Sign in
                                   </Button>
                              </Paper>
                         </Container>
                    </div>
               </div>
          </div>
     )
}