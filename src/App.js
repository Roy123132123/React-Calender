import './App.css';
import React, { useEffect, useState } from 'react';


export default function App() {
//define all use state cases
const [Longday, setLongDay] = useState('');
const [LongMonth, setLongMonth] = useState('');
const [dayNum, setDayNum] = useState('');
const [year,setYear]= useState('');

useEffect(() => {
  const date = new Date();
  //get the long versions of the month and weekday instead of numbers
  const formattedDay = date.toLocaleDateString("en",{weekday:"long"});
  const formattedMonth = date.toLocaleDateString("en", {month:"long"});
  //get the number of the day and the number of the current year
  const daynum = date.getDate();
  const Year = date.getFullYear();
  //set all appropriate values
  setYear(Year);
  setDayNum(daynum);
  setLongDay(formattedDay);
  setLongMonth(formattedMonth);
}, []);
  return (
    <>
      <div id='Main-Container'>
        <div id = 'Text'>
        <p id='Month'>{LongMonth}</p>
        <p id='Day'>{Longday}</p>
        <p id='DayNum'>{dayNum}</p>
        <p id='Year'>{year}</p>
        </div>
      </div>
    </>
  );
}


