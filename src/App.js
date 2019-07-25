import React from 'react';
import './App.css';
import EventScheduler from './components/EventScheduler/EventScheduler';
import SearchPanel from './components/SearchPanel/SearchPanel';
import { SchedulerData, ViewTypes, DATE_FORMAT } from 'react-big-scheduler';
import moment from 'moment';
class App extends React.Component {

  render() {

    let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Week);
    //moment.locale('zh-cn');
    schedulerData.setLocaleMoment(moment);
    let resources = [
      {
        id: 'r0',
        name: 'Resource0',
      },
      {
        id: 'r1',
        name: 'Resource1'
      },
      {
        id: 'r2',
        name: 'Resource2',
      },
      {
        id: 'r3',
        name: 'Resource3',
      },
      {
        id: 'r4',
        name: 'Resource4',
      },
    ];
    schedulerData.setResources(resources);
    let events = [
      {
        id: 1,
        start: '2017-12-18 09:30:00',
        end: '2017-12-19 23:30:00',
        resourceId: 'r1',
        title: 'I am finished',
        bgColor: '#D9D9D9'
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
    schedulerData.setEvents(events);
    return (
      <React.Fragment>
        <SearchPanel />
        <EventScheduler schedulerData={schedulerData} />
      </React.Fragment>
    )
  }

}

export default App;
