export default [
    {
         id: 1,
         start: '2017-12-18 09:30:00',
         end: '2017-12-19 23:30:00',
         resourceId: 'r1',
         title: 'I am finished',
         bgColor: '#D9D9D9',
         firstName:"Root" 
     },
     {
         id: 2,
         start: '2017-12-18 12:30:00',
         end: '2017-12-26 23:30:00',
         resourceId: 'r2',
         title: 'I am not resizable',
         resizable: false
     },
     {
         id: 3,
         start: '2017-12-19 12:30:00',
         end: '2017-12-20 23:30:00',
         resourceId: 'r3',
         title: 'I am not movable',
         movable: false
     },
     {
         id: 4,
         start: '2017-12-19 14:30:00',
         end: '2017-12-20 23:30:00',
         resourceId: 'r1',
         title: 'I am not start-resizable',
         startResizable: false
     },
     {
         id: 5,
         start: '2017-12-19 15:30:00',
         end: '2017-12-20 23:30:00',
         resourceId: 'r2',
         title: 'R2 has recurring tasks every week on Tuesday, Friday',
         rrule: 'FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR',
         bgColor: '#f759ab'
     }
 ];