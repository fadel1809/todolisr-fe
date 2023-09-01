/* eslint-disable no-unused-vars */
import React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { BsSunFill } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";
const Links = [
  { text: "Today", path: ".", icon: <AiFillCalendar /> },
  { text: "Tomorrow", path: "tomorrow", icon: <BsSunFill /> },
  {
    text: "Upcoming events",
    path: "upcoming-events",
    icon: <MdOutlineCalendarMonth />,
  },
];

export default Links;
