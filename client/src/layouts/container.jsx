import { useState } from "react"
import { createStyles, Navbar, Group, getStylesRef } from '@mantine/core';
import { RxDashboard } from "react-icons/rx"
import { BsCalendar3 } from "react-icons/bs"
import { FaUsers } from "react-icons/fa";
import { BiArchive } from "react-icons/bi"
import { CiRepeat, CiRainbow, CiLogout } from "react-icons/ci"
import { Link, useNavigate } from "react-router-dom";
import Headers from "../components/header";
import Logo from "/assets/logo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";


const useStyles = createStyles((theme) => ({
     
     header: {
       paddingBottom: theme.spacing.md,
     //   border: "1px solid red",
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
       marginBottom: `calc(${theme.spacing.md} * 1.5)`,
     //   borderBottom: `${rem(1)} solid ${
     //     theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
     //   }`,
     },
     img : {
          height: '85%',
          width: '85%',
     },

     aside: {
          background: "#ffff",
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
     linkb: {
          ...theme.fn.focusStyles(),
          display: 'flex',
          alignItems: 'center',
          background: "orange",
          color: "white",
          textDecoration: 'none',
          fontSize: theme.fontSizes.sm,
          // color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
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
     { link: '/acceuil', label: 'Tableau de bord', type: "app", icon: RxDashboard },
     { link: '/formation', label: 'Mes cours', type: "app", icon: BiArchive },
     { link: '/creer-formation', label: 'Créer un cours', icon: BiArchive },
     { link: '/creer-departement', label: 'Departement', icon: BiArchive },  
     { link: '/module', label: 'Module', icon: BiArchive },
     { link: '/utilisateur', label: 'Utilisateur', icon: FaUsers },
     { link: '/reunion', label: 'Reunions', type: "app", icon: CiRainbow },
];


export default function Layout({ children }) {

          const { classes, cx } = useStyles();
          const [active, setActive] = useState('Billing');
          const navigate = useNavigate()
          const dispatch = useDispatch()
          const { userInfo } = useSelector(state => state.auth)
          const [logoutApiCall] = useLogoutMutation()

          // Filtrer les éléments en fonction du role
          const filteredItems = userInfo.role != 'Apprenant' ? data : data.filter((item) => item.type === "app");
          const links = filteredItems.map((item) => (
                    <Link
                         className={cx(classes.link, { [classes.linkActive]: item.label === active })}
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

          const logoutUser = async() => {
               try {
                    await logoutApiCall().unwrap()
                    dispatch(logout())
                    navigate("/")
               } catch (error) {
                    console.log(error)
               }
          }


     return (
          <div className="container_home">
               <aside>
                    <Navbar height="100vh" width={{ sm: 230 }} p="md" className={classes.aside}>
                         <Navbar.Section grow>
                              <Group className={classes.header} position="apart">
                                   <span><img src={Logo} alt="Le logo de l'entreprise" className={classes.img} /></span>
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
                              <Link to="#" className={classes.linkb} onClick={logoutUser}>
                                   <CiLogout className={classes.linkIcon} stroke={1.5} />
                                   <span>Deconnexion</span>
                              </Link>
                         </Navbar.Section>
                    </Navbar>
               </aside>
               <main>
                    <Headers data={userInfo} />
                    {
                         children
                    }
               </main>
          </div>
     )
}