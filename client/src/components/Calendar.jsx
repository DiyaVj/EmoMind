import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Card } from "react-bootstrap";

const Calendar = ({ posts }) => {
  const events = [];

  function getDate(dayString) {
    let yourDate = new Date(dayString);
    const offset = yourDate.getTimezoneOffset();
    yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
    return yourDate.toISOString().split("T")[0];
  }

  for (let ele of posts) {
    let eventColor;
    let textColor = "white";
    let eventTitle;
    let sentimentDecimal = Number(ele.sentiment.$numberDecimal);
    if (sentimentDecimal < -0.5) {
      eventColor = "red";
      eventTitle = "v.negative";
    } else if (sentimentDecimal < 0) {
      eventColor = "orange";
      eventTitle = "negative";
    } else if (sentimentDecimal === 0) {
      eventColor = "yellow";
      eventTitle = "neutral";
      textColor = "black";
    } else if (sentimentDecimal < 0.5) {
      eventColor = "lightgreen";
      textColor = "black";
      eventTitle = "positive";
    } else {
      eventColor = "green";
      eventTitle = "v.positive";
    }
    events.push({
      title: eventTitle ? eventTitle: "Amaze",
      start: getDate(ele.date) ? getDate(ele.date) : "23/02/2024",
      end: getDate(ele.date) ? getDate(ele.date) : "24/02/2024",
      backgroundColor: eventColor ? eventColor : "black",
      textColor: textColor ? textColor : "white",
    });
  }
  return (
    <Card className="shadow">
      <Card.Body>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
        />
      </Card.Body>
    </Card>
  );
};

export default Calendar;
