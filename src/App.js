import React from "react";
import "./App.css";
import EventScheduler from "./components/EventScheduler/EventScheduler";
import SearchPanel from './components/SearchPanel/SearchPanel';
import { SchedulerData, ViewTypes, DATE_FORMAT } from "react-big-scheduler";
import moment from "moment";
import resources from "./data/resources";
import events from "./data/events";

class App extends React.Component {
  render() {
    let schedulerData = new SchedulerData(
      new moment().format(DATE_FORMAT),
      ViewTypes.Week
    );
    //moment.locale('zh-cn');

    schedulerData.setLocaleMoment(moment);
    schedulerData.setResources(resources);

    schedulerData.setEvents(events);
    
    return (
      <React.Fragment>
        <SearchPanel />
        <EventScheduler schedulerData={schedulerData} />
      </React.Fragment>
    );
  }
}

export default App;
