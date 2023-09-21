import { useEffect, useState } from 'react';
import Formation from "../../components/formation";
import { createStyles, Anchor, Group, rem } from '@mantine/core';
import { useGetUsersAllCoursesQuery } from '../../slices/coursesApi';
import { useGetAllModulesQuery } from '../../slices/moduleApiSlice';


const HEADER_HEIGHT = rem(48);

const useStyles = createStyles((theme) => ({
     header: {
          height: HEADER_HEIGHT,
          margin: "2em 0 0.5em 1.2em"
     },
   
     mainLinks: {
          marginRight: `calc(${theme.spacing.sm} * -1)`,
     },
      
     mainLink: {
          textTransform: 'capitalize',
          fontSize: rem(16),
          color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : "black",
          padding: `${rem(4)} ${theme.spacing.sm}`,
          borderBottom: `${rem(5)} solid transparent`,
          transition: 'border-color 100ms ease, color 100ms ease',
      
          '&:hover': {
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            textDecoration: 'none',
          },
     },
     links: {
          height: HEADER_HEIGHT,
          display: 'flex',
          alignItems: "center",
          justifyContent: 'space-between',
     },
     linkActive: {
          '&, &:hover': {
            backgroundColor: "white",
            color: "orange",
            borderRadius: "0.5em",
            fontWeight: "600",
          },
     },
     mainLinkActive: {
          color: theme.colorScheme === 'dark' ? theme.white : "orange",
          borderBottomColor: "orange",
     },
}));

export default function FormationPage() {

     const { classes, cx } = useStyles();
     const [active, setActive] = useState(-1);
     const [cours, setCours] = useState([]);
     const [modules, setModules] = useState([]);
     const { currentData } = useGetAllModulesQuery()
     const { data } = useGetUsersAllCoursesQuery()


     const mainItems = modules && modules.map((item, index) => (
          <Anchor
            key={item.label}
            className={cx(classes.mainLink, { [classes.linkActive]: index === active })}
            onClick={(event) => {
              event.preventDefault();
              setActive(index);
            }}
          >
            {item.nom}
          </Anchor>
     ));
     

     useEffect(() => {
          if(data && currentData) {
               setCours(data.data)
               setModules(currentData.data)
          }
     }, [data, currentData]);
     
     return (
          <div>
               <div className="categorie-containers">
                    <div className={classes.header}>
                         <div className={classes.links}>
                              <Group spacing={30} position="left">
                                   <Anchor
                                        className={cx(classes.mainLink, { [classes.linkActive]: -1 === active })}
                                        onClick={(event) => {
                                             event.preventDefault();
                                             setActive(-1);
                                        }}
                                   >
                                        Tous
                                   </Anchor>
                                   {mainItems}
                              </Group>
                         </div>
                    </div>
               </div>
               <div className="formation-all">
                    <Formation cours={cours} />
               </div>
          </div>
     )
}