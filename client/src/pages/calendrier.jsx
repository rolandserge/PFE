import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import fr from 'date-fns/locale/fr'
import Headers from '../components/header';

const locales = {
     'fr': fr,
}
const localizer = dateFnsLocalizer({
     format,
     parse,
     startOfWeek,
     getDay,
     locales,
})

const events = [
     {
         id: 1,
         title: 'Meet en developpement',
         start: new Date('2023-06-17T18:00:00.000Z'),
         end: new Date('2023-06-17T19:12:00.000Z'),
         colorEvent: "gray",
     },
     {
         id: 2,
         title: 'Formation Figma',
         start: new Date('2023-06-18T10:00:00.000Z'),
         end: new Date('2023-06-18T12:30:00.000Z'),
         colorEvent:'orange',
     },
     {
          id: 2,
          title: 'Formation Figma',
          start: new Date('2023-06-16T15:00:00.000Z'),
          end: new Date('2023-06-16T16:30:00.000Z'),
          colorEvent:'violet',
      },
      {
          id: 2,
          title: 'Formation Figma',
          start: new Date('2023-06-16T18:00:00.000Z'),
          end: new Date('2023-06-16T20:00:00.000Z'),
          colorEvent:'green',
      },
     
 ]

export default function Calendrier() {

     return (
          <>
               <Headers title={"Calendrier de formation"} />
               <div>
                    <Calendar
                         selectable
                         localizer={localizer}
                         events={events}
                         startAccessor="start"
                         endAccessor="end"
                         culture='fr'
                         defaultDate={new Date()}
                         messages={{
                              allDay: "Tous les jours",
                              next: ">",
                              previous: "<",
                              today: "Aujourd'hui",
                              month: "Mois",
                              week: "Semaine",
                              day: "Jour",
                              date: "Date",
                              time: "Heure",
                              event: "Evenement",
                              agenda: "Agenda",
                         }}
                         style={{ height: "80vh" , margin: "1.8em 1.3em"}}
                         eventPropGetter={(myEventsList) => {
                              const backgroundColor = myEventsList.colorEvent ? myEventsList.colorEvent : 'blue';
                              const color = myEventsList.color ? myEventsList.color : 'white';
                              const border = "none"
                              return { style: { backgroundColor ,color, border} }
                         }}
                    />
               </div>
          </>
     )
}