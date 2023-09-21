import { useState } from "react"
import { createStyles, Navbar, Group, getStylesRef } from '@mantine/core';
import { RxDashboard } from "react-icons/rx"
import { BsCalendar3 } from "react-icons/bs"
import { FaUsers } from "react-icons/fa";
import { BiArchive, BiBookAdd } from "react-icons/bi"
import { TfiLayersAlt } from "react-icons/tfi";
import { MdOutlineLibraryBooks } from "react-icons/md"
import { CiRepeat, CiRainbow, CiLogout } from "react-icons/ci"
import { Link, useNavigate } from "react-router-dom";
import Headers from "../components/header";
import Logo from "/assets/logo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";
import { useDisclosure } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import { Text, Button } from '@mantine/core';
import { useCreateMeetingMutation, useGetMeetingIdQuery } from "../slices/meetApiSlice";


const useStyles = createStyles((theme) => ({
     
     header: {
       paddingBottom: theme.spacing.md,
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
       marginBottom: `calc(${theme.spacing.md} * 1.5)`,
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
     linkb: {
          ...theme.fn.focusStyles(),
          display: 'flex',
          alignItems: 'center',
          background: "red",
          color: "white",
          textDecoration: 'none',
          fontSize: theme.fontSizes.sm,
          padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
          borderRadius: theme.radius.sm,
          fontWeight: 500,
     },
     linkIconb: {
          ref: getStylesRef('icon'),
          color: "white",
          fontSize: "1.8em",
          marginRight: theme.spacing.sm,
        },
   
   }));

const datas = [
     { link: '/acceuil', label: 'Tableau de bord', type: "app", icon: RxDashboard },
     { link: '/creer-departement', label: 'Département', icon: TfiLayersAlt },  
     { link: '/module', label: 'Module', icon: BiArchive },
     { link: '/utilisateur', label: 'Utilisateur', icon: FaUsers },
     { link: '/formation', label: 'Mes cours', type: "app", icon: MdOutlineLibraryBooks },
     { link: '/creer-formation', label: 'Créer un cours', icon: BiBookAdd },
     { link: '/reunion', label: 'Reunions', pop: 'oui', type: "app", icon: CiRainbow },
];


export default function Layout({ children }) {

          const { classes, cx } = useStyles();
          const [active, setActive] = useState('Billing');
          const navigate = useNavigate()
          const dispatch = useDispatch()
          const [createMeeting] = useCreateMeetingMutation()
          const { userInfo } = useSelector(state => state.auth)
          const [logoutApiCall] = useLogoutMutation()
          const [opened, { open, close }] = useDisclosure(false);
          
          const logoutUser = async() => {
               try {
                    await logoutApiCall().unwrap()
                    dispatch(logout())
                    navigate("/")
               } catch (error) {
                    console.log(error)
               }
          }
          
          // creer meet element
          const HandleCreateMeeting = async () => {
               
               const { data } = await createMeeting();
               
               navigate(`/reunion/${data}`)
               
          };
          
          const { data } = useGetMeetingIdQuery()
	     const linkMeet = data && [...data.data].reverse()
          
          
          const openModal = () => modals.openConfirmModal({
               title: userInfo.role != "Apprenant" ? 'Voulez vous créer une reunion ?' : 'Voulez vous acceder à la reunion ?',
               centered: true,
               children: (
                    <Text size="sm">
                         Cette action est si importante que vous devez la confirmer avec un modal. 
                         Veuillez cliquer sur l'un de ces boutons pour continuer.
                 </Text>
               ),
               labels: { confirm: 'Confirmer', cancel: 'Annuler' },
               confirmProps: { color: userInfo.role != "Apprenant" ? 'orange' : 'green', variant: 'light'},
               onCancel: () => console.log('Cancel'),
               onConfirm: () => userInfo.role != "Apprenant" ? HandleCreateMeeting() : linkMeet.slice(0, 1).map((meet) => navigate(`/reunion/${meet.meetingId}`))
          })
          // Filtrer les éléments en fonction du role
          const filteredItems = userInfo.role != 'Apprenant' ? datas : datas.filter((item) => item.type === "app");
          const links = filteredItems.map((item, index) => (

                    item.pop === "oui" ? 
                         <Button 
                              onClick={openModal}
                              className={cx(classes.link, { [classes.linkActive]: item.label === active })}
                              key={index}
                         >
                              <item.icon className={classes.linkIcon} stroke={1.5} />
                              <span>{ item.label }</span>
                         </Button> 
                    :
                    <Link
                         className={cx(classes.link, { [classes.linkActive]: item.label === active })}
                         key={index}
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
                                        <span><img src={Logo} alt="Le logo de l'entreprise" className={classes.img} /></span>
                                   </Group>
                                   <div>
                                        {
                                        links
                                        }
                                   </div>
                              </Navbar.Section>
                              <Navbar.Section className={classes.footer}>
                                   <Link to="#" className={classes.linkb} onClick={logoutUser}>
                                        <CiLogout className={classes.linkIconb} stroke={1.5} />
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