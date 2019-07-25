import React, { Component } from "react";
import Scheduler, { ViewTypes, DATE_FORMAT } from "react-big-scheduler";
import "react-big-scheduler/lib/css/style.css";
import moment from "moment";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

class EventScheduler extends Component {
  constructor(
    date = moment().format(DATE_FORMAT),
    viewType = ViewTypes.Week,
    showAgenda = false,
    props
  ) {
    super(props);
  }

  onViewChange() {
    alert("view changed");
  }

  prevClick() {
    alert("prevClick");
  }
  nextClick() {
    alert("nextClick");
  }

  onSelectDate() {
    alert("onSelectDate");
  }

  eventClicked() {
    alert("eventClicked");
  }

  render() {
    const { schedulerData } = this.props;
    return (
      <Scheduler
        schedulerData={schedulerData}
        prevClick={this.prevClick}
        nextClick={this.nextClick}
        onSelectDate={this.onSelectDate}
        onViewChange={this.onViewChange}
        eventItemClick={this.eventClicked}
      />
    );
  }
}
// export default DragDropContext(EventScheduler);
export default DragDropContext(HTML5Backend)(EventScheduler);
