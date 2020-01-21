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
            <DiffSelect class="diff-btn col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5" src="/beginner" difficulty="Beginner" descript="Hiragana/Katakana - English" />
          </div>
          <div className="row" >
            <DiffSelect class="diff-btn col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5" src="/Intermediate" difficulty="Intermediate" descript="K/H Words - English" />
          </div>
          <div className="row" >
            <DiffSelect class="diff-btn col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5" src="/difficult" difficulty="難しい" descript="Kanji - English" />
          </div>
        </div>
        <div className="col-3" />
      </div>
      <div className="row">
        <div className="col-3" />
        <div className="test col-6">
          <h4>
            This is a game designed to help in memorizing Japanese! From the basic Hiragana and Katakana to Kanji.
      </h4>
          <div className="col-3" />
        </div>
      </div>
    </div>);
}