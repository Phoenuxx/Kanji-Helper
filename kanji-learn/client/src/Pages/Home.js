import React from 'react';
import DiffSelect from '../Components/DifficultySelect';

export default function homePage() {
  return (
    <div className="App container-fluid">
      <div className="row title">
        <div className="col-3" />
        <h1 className="col-6 center-col">Flash Japanese</h1>
        <div className="col-3" />
      </div>
      <div className="row title">
        <div className="col-3" />
        <h2 className="col-6 center-col">Select a difficulty below to begin practice!</h2>
        <div className="col-3" />
      </div>
      <div className="row">
        <div className="col-3" />
        <div className="col-6 center-col" >
          <div className="row" >
            <DiffSelect class="diff-btn col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5" src="/Kanji-Helper/#/beginner" difficulty="Beginner" descript="Guess the sound of the shown Hiragana or Katakana" />
          </div>
          <div className="row" >
            <DiffSelect class="diff-btn col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5" src="/Kanji-Helper/#/intermediate" difficulty="Medium" descript="Guess the Kanji's english meaning" />
          </div>
        </div>
        <div className="col-3" />
      </div>
      <div className="row">
        <div className="col-3" />
        <div className="center-col col-6">
          <h4>
            This is a game designed to help in memorizing Japanese! <br />
            From the basic Hiragana and Katakana to Kanji.<br />
            If you have trouble figuring one out, scroll over the <br />
            flash card for the answer (For medium you get a hint through Hiragana)
      </h4>
          <div className="col-3" />
        </div>
      </div>
    </div>
  );
}