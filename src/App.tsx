import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Experiences } from './experience'
import { Skills } from './skills';

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
    </div>
    <hr/>
    <Experiences/>
    <Skills/>
    <div>
        <h2> Achievements </h2>
        <span>Rank 103 on <a href="https://www.codewars.com/users/Jomo%20Pipi" rel="noreferrer" target="_blank">Codewars</a>,
        an algorithm solving platform with over a million users.</span>
    </div>

  </div>);
}