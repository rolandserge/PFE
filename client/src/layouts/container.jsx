import { useState } from "react"
import "../styles/components/layout.css"
import { createStyles, Navbar, Group, getStylesRef } from '@mantine/core';
import { RxDashboard } from "react-icons/rx"
import { BsCalendar3 } from "react-icons/bs"
import { BiArchive } from "react-icons/bi"
import { CiRepeat, CiRainbow, CiLogout } from "react-icons/ci"
import { Link, useNavigate } from "react-router-dom";


const useStyles = createStyles((theme) => ({
     
     header: {
       paddingBottom: theme.spacing.md,
       marginBottom: `calc(${theme.spacing.md} * 1.5)`,
     //   borderBottom: `${rem(1)} solid ${
     //     theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
     //   }`,
     },

     aside: {
          background: "#f6f6f6",
          position: "fixed",
          top: 0,
     },

     footer: {
       paddingTop: theme.spacing.md,
       marginTop: theme.spacing.md,
     //   borderTop: `${rem(1)} solid ${
     //     theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
     //   }`,
     },
   
     link: {
       ...theme.fn.focusStyles(),
       display: 'flex',
       alignItems: 'center',
       textDecoration: 'none',
       fontSize: theme.fontSizes.sm,
       color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
       padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
       borderRadius: theme.radius.sm,
       fontWeight: 500,
   
       '&:hover': {
         backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
         color: theme.colorScheme === 'dark' ? theme.white : theme.black,
   
         [`& .${getStylesRef('icon')}`]: {
           color: theme.colorScheme === 'dark' ? theme.white : theme.black,
         },
       },
     },
   
     linkIcon: {
       ref: getStylesRef('icon'),
     //   color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
     color: "black",
     fontSize: "1.8em",
       marginRight: theme.spacing.sm,
     },
   
     linkActive: {
       '&, &:hover': {
         backgroundColor: 'orange',
         color: 'white',
         [`& .${getStylesRef('icon')}`]: {
           color: "white",
         },
       },
     },
   }));

const data = [
     { link: '/acceuil', label: 'Tableau de bord', icon: RxDashboard },
     { link: '/formation', label: 'Mes formations', icon: BiArchive },
     { link: '/creer-formation', label: 'Créer formation', icon: BiArchive },
     { link: '#', label: 'Catégories', icon: BiArchive },
     { link: '#', label: 'Reunions', icon: CiRainbow },
     { link: '/calendrier', label: 'Calendrier', icon: BsCalendar3 },
];


export default function Layout({ children }) {

          const { classes, cx } = useStyles();
          const [active, setActive] = useState('Billing');
          const navigate = useNavigate()

          const links = data.map((item) => (
                    <Link
                         className={cx(classes.link, { [classes.linkActive]: item.label === active })}
                         // to={item.link}
                         key={item.label}
                         onClick={(event) => {
                         event.preventDefault();
                         setActive(item.label);
                         navigate(item.link)
                         }}
                    >
                         <item.icon className={classes.linkIcon} stroke={1.5} />
                         <span>{item.label}</span>
                    </Link>
          ));

     return (
          <div className="container_home">
               <aside>
                    <Navbar height="100vh" width={{ sm: 230 }} p="md" className={classes.aside}>
                         <Navbar.Section grow>
                              <Group className={classes.header} position="apart">
                                   <span>E.Learning</span>
                              </Group>
                              <div>
                                   {
                                   links
                                   }
                              </div>
                         </Navbar.Section>
                         <Navbar.Section className={classes.footer}>
                              <Link to="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                                   <CiRepeat className={classes.linkIcon} stroke={1.5} />
                                   <span>Modifier mon profil</span>
                              </Link>
                              <Link to="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                                   <CiLogout className={classes.linkIcon} stroke={1.5} />
                                   <span>Deconnexion</span>
                              </Link>
                         </Navbar.Section>
                    </Navbar>
               </aside>
               <main>
                    {
                         children
                    }
               </main>
          </div>
     )
}