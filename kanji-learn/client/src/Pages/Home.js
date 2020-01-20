import React from 'react';
import DiffSelect from '../Components/DifficultySelect';

export default function homePage() {
return (
<div className="App container-fluid">
      <div className="row title">
        <div className="col-3" />
        <h1 className="col-6 test">TITLE</h1>
        <div className="col-3" />
      </div>
      <div className="row title">
        <div className="col-3" />
        <h2 className="col-6 test">Select a difficulty below to begin practice!</h2>
        <div className="col-3" />
      </div>
      <div className="row">
        <div className="col-3" />
        <div className="col-6 test" >
          <div className="row" >
            <DiffSelect class="diff-btn col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5" difficulty="Beginner" src="/beginner"/>
          </div>
          <div className="row" >
            <DiffSelect class="diff-btn col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5" difficulty="Intermediate" src="/Intermediate"/>
          </div>
          <div className="row" >
            <DiffSelect class="diff-btn col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5" difficulty="難しい" src="/difficult"/>
          </div>
        </div>
        <div className="col-3" />
      </div>

    </div>);
}