import { useState } from 'react';
import Formation from "../../components/formation";
import { createStyles, Anchor, Group, rem } from '@mantine/core';


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

const mainLinks = [
     {
          link: "#",
          label: "Tous"
     },
     {
          link: "#",
          label: "Node.js Complet"
     },
     {
          link: "#",
          label: "Next.js Complet"
     },
     {
          link: "#",
          label: "Laravel 10 Complet"
     },
     {
          link: "#",
          label: "React.js Complet"
     },
]

export default function FormationPage() {

     const { classes, cx } = useStyles();
     const [active, setActive] = useState(0);


     const mainItems = mainLinks.map((item, index) => (
          <Anchor
            href={item.link}
            key={item.label}
            className={cx(classes.mainLink, { [classes.linkActive]: index === active })}
            onClick={(event) => {
              event.preventDefault();
              setActive(index);
            }}
          >
            {item.label}
          </Anchor>
        ));

     return (
          <div>
               <div className="categorie-containers">
                    <div className={classes.header}>
                         <div className={classes.links}>
                              <Group spacing={30} position="left">
                                   {mainItems}
                              </Group>
                         </div>
                    </div>
               </div>
               <div className="formation-all">
                    <Formation />
               </div>
          </div>
     )
}