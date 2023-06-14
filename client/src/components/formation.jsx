import { createStyles, Card, Image, Text, Badge} from '@mantine/core';
import image from "../assets/login.jpg"
import image1 from "../assets/connexion.jpg"


const useStyles = createStyles((theme) => ({

     componentFormation: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
     },
     card: {
       backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
       width: "30%",
       margin: "1em 0"
     },
   
     title: {
       fontFamily: `Greycliff CF, ${theme.fontFamily}`,
     },
   
}));

export default function Formation() {

     const { classes } = useStyles();

     return (
          <div className={classes.componentFormation}>
               <Card withBorder padding="lg" radius="md" className={classes.card}>
                    <Card.Section mb="sm">
                         <Image src={image} alt={"Image d'illustration de la formation"} height={180} />
                    </Card.Section>
                    <Badge>Delevoppemnt web</Badge>
                    <Text fw={700} className={classes.title} mt="xs">
                         Comment securisé un site web de A a Z
                    </Text>
               </Card>
               <Card withBorder padding="lg" radius="md" className={classes.card}>
                    <Card.Section mb="sm">
                         <Image src={image} alt={"Image d'illustration de la formation"} height={180} />
                    </Card.Section>
                    <Badge>Delevoppemnt web</Badge>
                    <Text fw={700} className={classes.title} mt="xs">
                         Comment securisé un site web de A a Z
                    </Text>
               </Card>
               <Card withBorder padding="lg" radius="md" className={classes.card}>
                    <Card.Section mb="sm">
                         <Image src={image1} alt={"Image d'illustration de la formation"} height={180} />
                    </Card.Section>
                    <Badge>Delevoppemnt web</Badge>
                    <Text fw={700} className={classes.title} mt="xs">
                         Comment securisé un site web de A a Z
                    </Text>
               </Card>
               <Card withBorder padding="lg" radius="md" className={classes.card}>
                    <Card.Section mb="sm">
                         <Image src={image} alt={"Image d'illustration de la formation"} height={180} />
                    </Card.Section>
                    <Badge>Delevoppemnt web</Badge>
                    <Text fw={700} className={classes.title} mt="xs">
                         Comment securisé un site web de A a Z
                    </Text>
               </Card>
               <Card withBorder padding="lg" radius="md" className={classes.card}>
                    <Card.Section mb="sm">
                         <Image src={image1} alt={"Image d'illustration de la formation"} height={180} />
                    </Card.Section>
                    <Badge>Delevoppemnt web</Badge>
                    <Text fw={700} className={classes.title} mt="xs">
                         Comment securisé un site web de A a Z
                    </Text>
               </Card>
               <Card withBorder padding="lg" radius="md" className={classes.card}>
                    <Card.Section mb="sm">
                         <Image src={image} alt={"Image d'illustration de la formation"} height={180} />
                    </Card.Section>
                    <Badge>Web Strategies</Badge>
                    <Text fw={700} className={classes.title} mt="xs">
                         Comment securisé un site web de A a Z
                    </Text>
               </Card>
          </div>
     )
}