import { createStyles, Header, Avatar, Text, Group, rem, TextInput} from '@mantine/core';
import { IoIosSearch } from "react-icons/io"
import User from "/assets/utilisateur.png"


const useStyles = createStyles((theme) => ({
     header: {
       paddingLeft: theme.spacing.md,
       paddingRight: theme.spacing.md,
       background: '#f6f6f6'
     },
   
     inner: {
       height: rem(70),
       display: 'flex',
       justifyContent: 'space-between',
       alignItems: 'center',
     },
     groupRight: {
          width: "60%",
          display: "flex",
          justifyContent: "space-between",
     },
     groupSearch: {
          width: "65%",
     },
     search: {
       width: "100%",
     },
     user: {
          display: 'block',
          width: '100%',
          padding: theme.spacing.md,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      
          '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        },
   }));


export default function Headers({data}) {

     const { classes } = useStyles();

     return (
          <>
               <header>
                    <Header height={70} className={classes.header}>
                         <div className={classes.inner}>
                              <Group>
                                   <div>
                                        <h2>{data.role}</h2>
                                   </div>
                              </Group>
                              <Group className={classes.groupRight}>
                                   <Group className={classes.groupSearch}>
                                        <TextInput placeholder="Barre de recherche" className={classes.search} icon={<IoIosSearch size="0.8rem" />} />
                                   </Group>
                                   <Group>
                                        <div style={{ flex: 1 }}>
                                             <Text size="sm" weight={500}>
                                             { data.nom }
                                             </Text>

                                             <Text color="dimmed" size="xs">
                                                  { data.email}
                                             </Text>
                                        </div>
                                        <Avatar src={User} size={50} radius="xl" />
                                   </Group>
                              </Group>
                         </div>
                    </Header>
               </header>
          </>
     )
}