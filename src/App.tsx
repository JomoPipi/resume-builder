import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Experiences } from './experience'
import { Skills } from './skills';
import { Projects } from './projects';

export default function App() {
  return (<div className="app">
    <div className="header">
      <h1>Ronald Corona</h1>
    </div>
    <div className="contact-info">
      <div>
        <span>(818) 743-6091 </span>
        <span>Bakersfield, CA 93308</span>
      </div>
      <div>
        <span>ronaldmcorona@gmail.com</span>
        <span><a href="https://linkedin.com/in/42b" rel="noreferrer" target="_blank">www.linkedin.com/in/42b</a></span>
      </div>
      <div>
        <span><a href="https://github.com/JomoPipi" rel="noreferrer" target="_blank">https://github.com/JomoPipi</a></span>
        <span></span>
      </div>
    </div>
    <hr/>
    <Skills/>
    <Experiences/>
    <Projects/>
    <div>
        <h2> Activity </h2>
        <ul style={{padding: '0 4rem'}}>
          <li>Rank 103 on <a href="https://www.codewars.com/users/Jomo%20Pipi" rel="noreferrer" target="_blank">Codewars</a>,
          an algorithm solving platform with over a million users.</li>

          <li>Made a <a href="https://www.youtube.com/watch?v=6uOXedOu_T4" 
          rel="noreferrer" target="_blank">remote control esp8266 wifi car</a>. </li>
        </ul>
    </div>

  </div>);
}