import './App.css';
import React, { useEffect, useState } from 'react';


export default function App() {
const [Longday, setLongDay] = useState('');
const [LongMonth, setLongMonth] = useState('');
const [dayNum, setDayNum] = useState('');
const [year,setYear]= useState('');
useEffect(() => {
  const date = new Date();
  const formattedDay = date.toLocaleDateString("en",{weekday:"long"});
  const formattedMonth = date.toLocaleDateString("en", {month:"long"});
  const daynum = date.getDate();
  const Year = date.getFullYear();
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


