import React, { Component } from 'react';
import Tile from '../Components/Tile';


const hiraKataArray = [
  //hiragana Chart
  { sym: "あ", eng: 'a' }, { sym: 'い', eng: "i" }, { sym: 'う', eng: "u" }, { sym: 'え', eng: "e" }, { sym: 'お', eng: "o" },
  { sym: 'か', eng: 'ka' }, { sym: 'き', eng: 'ki' }, { sym: 'く', eng: 'ku' }, { sym: 'け', eng: 'ke' }, { sym: 'こ', eng: 'ko' },
  { sym: 'さ', eng: 'sa' }, { sym: 'し', eng: 'shi' }, { sym: 'す', eng: 'su' }, { sym: 'せ', eng: 'se' }, { sym: 'そ', eng: 'so' },
  { sym: 'た', eng: 'ta' }, { sym: 'ち', eng: 'chi' }, { sym: 'つ', eng: 'tsu' }, { sym: 'て', eng: 'te' }, { sym: 'と', eng: 'to' },
  { sym: 'な', eng: 'na' }, { sym: 'に', eng: 'ni' }, { sym: 'ぬ', eng: 'nu' }, { sym: 'ね', eng: 'ne' }, { sym: 'の', eng: 'no' },
  { sym: 'は', eng: 'ha' }, { sym: 'ひ', eng: 'hi' }, { sym: 'ふ', eng: 'fu' }, { sym: 'へ', eng: 'he' }, { sym: 'ほ', eng: 'ho' },
  { sym: 'ま', eng: 'ma' }, { sym: 'み', eng: 'mi' }, { sym: 'む', eng: 'mu' }, { sym: 'め', eng: 'me' }, { sym: 'も', eng: 'mo' },
  { sym: 'や', eng: 'ya' }, { sym: 'ゆ', eng: 'yu' }, { sym: 'よ', eng: 'yo' },
  { sym: 'ら', eng: 'ra' }, { sym: 'り', eng: 'ri' }, { sym: 'る', eng: 'ru' }, { sym: 'れ', eng: 're' }, { sym: 'ろ', eng: 'ro' },
  { sym: 'わ', eng: 'wa' }, { sym: 'を', eng: 'wo' }, { sym: 'ん', eng: 'n' },
  { sym: 'が', eng: 'ga' }, { sym: 'ぎ', eng: 'gi' }, { sym: 'ぐ', eng: 'gu' }, { sym: ' げ', eng: 'ge' }, { sym: 'ご', eng: 'go' },
  { sym: 'ざ', eng: 'za' }, { sym: 'じ', eng: 'ji' }, { sym: 'ず', eng: 'zu' }, { sym: 'ぜ', eng: 'ze' }, { sym: 'ぞ', eng: 'zo' },
  { sym: 'だ', eng: 'da' }, { sym: 'で', eng: 'de' }, { sym: 'ど', eng: 'do' },
  { sym: 'ば', eng: 'ba' }, { sym: 'び', eng: 'bi' }, { sym: 'ぶ', eng: 'bu' }, { sym: 'べ', eng: 'be' }, { sym: 'ぼ', eng: 'bo' },
  { sym: 'ぱ', eng: 'pa' }, { sym: 'ぴ', eng: 'pi' }, { sym: 'ぷ', eng: 'pu' }, { sym: 'ぺ', eng: 'pe' }, { sym: 'ぽ', eng: 'po' },

  //katakana Chart
  { sym: 'ア', eng: 'a' }, { sym: 'イ', eng: 'i' }, { sym: 'ウ', eng: 'u' }, { sym: 'エ', eng: 'e' }, { sym: 'オ', eng: 'o' },
  { sym: 'カ', eng: 'ka' }, { sym: 'キ', eng: 'ki' }, { sym: 'ク', eng: 'ku' }, { sym: 'ケ', eng: 'ke' }, { sym: 'コ', eng: 'ko' },
  { sym: 'サ', eng: 'sa' }, { sym: 'シ', eng: 'shi' }, { sym: 'ス', eng: 'su' }, { sym: 'セ', eng: 'se' }, { sym: 'ソ', eng: 'so' },
  { sym: 'タ', eng: 'ta' }, { sym: 'チ', eng: 'chi' }, { sym: 'ツ', eng: 'tsu' }, { sym: 'テ', eng: 'te' }, { sym: 'ト', eng: 'to' },
  { sym: 'ナ', eng: 'na' }, { sym: 'ニ', eng: 'ni' }, { sym: 'ヌ', eng: 'nu' }, { sym: 'ネ', eng: 'ne' }, { sym: 'ノ', eng: 'no' },
  { sym: 'ハ', eng: 'ha' }, { sym: 'ヒ', eng: 'hi' }, { sym: 'フ', eng: 'fu' }, { sym: 'ヘ', eng: 'he' }, { sym: 'ホ', eng: 'ho' },
  { sym: 'マ', eng: 'ma' }, { sym: 'ミ', eng: 'mi' }, { sym: 'ム', eng: 'mu' }, { sym: 'メ', eng: 'me' }, { sym: 'モ', eng: 'mo' },
  { sym: 'ヤ', eng: 'ya' }, { sym: 'ユ', eng: 'yu' }, { sym: 'ヨ', eng: 'yo' },
  { sym: 'ラ', eng: 'ra' }, { sym: 'リ', eng: 'ri' }, { sym: 'ル', eng: 'ru' }, { sym: 'レ', eng: 're' }, { sym: 'ロ', eng: 'ro' },
  { sym: 'ワ', eng: 'wa' }, { sym: 'ヲ', eng: 'wo' }, { sym: 'ン', eng: 'n' },
  { sym: 'ガ', eng: 'ga' }, { sym: 'ギ', eng: 'gi' }, { sym: 'グ', eng: 'gu' }, { sym: 'ゲ', eng: 'ge' }, { sym: 'ゴ', eng: 'go' },
  { sym: 'ザ', eng: 'za' }, { sym: 'ジ', eng: 'ji' }, { sym: 'ズ', eng: 'zu' }, { sym: 'ゼ', eng: 'ze' }, { sym: 'ゾ', eng: 'zo' },
  { sym: 'ダ', eng: 'da' }, { sym: 'デ', eng: 'de' }, { sym: 'ド', eng: 'do' },
  { sym: 'バ', eng: 'ba' }, { sym: 'ビ', eng: 'bi' }, { sym: 'ブ', eng: 'bu' }, { sym: 'ベ', eng: 'be' }, { sym: 'ボ', eng: 'bo' },
  { sym: 'パ', eng: 'pa' }, { sym: 'ピ', eng: 'pi' }, { sym: 'プ', eng: 'pu' }, { sym: 'ペ', eng: 'pe' }, { sym: 'ポ', eng: 'po' },
];

class easyPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuest: "",
      currentAns: "",
      userGuess: ""
    }
  };

  //randomly sets state for a flash card and ensures affirmation text is hidden
  pickSomething = () => {
    let currentSym = hiraKataArray[Math.floor(Math.random() * hiraKataArray.length)];

    document.getElementById("correct-guess").style.display = "none";

    this.setState({
      currentQuest: currentSym.sym,
      currentAns: currentSym.eng
    });
    console.log(currentSym.sym);
    console.log(this.state);
  };

  //Plans to reveal correct answer before picking new card TODO
  skipToNext = event => {
    event.preventDefault();
    this.pickSomething();
  }

  //Plans to reveal correct answer before picking new card
  handleInputChange = event => {
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  // function for hiding incorrect guess text
  incorrectHide = () => {
    document.getElementById("incorrect-guess").style.display = "none"
  }

  // checks user answers and runs pick something
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit
    event.preventDefault();
    // check answer
    if (this.state.userGuess.toLowerCase() === this.state.currentAns) {

      document.getElementById("correct-guess").style.display = "block";
      //roll new flash card after 3 second delay
      setTimeout(this.pickSomething, 2000);
    } else {
      document.getElementById("incorrect-guess").style.display = "block";
      setTimeout(this.incorrectHide, 1000);
    };

    //clear input box
    this.setState({
      userGuess: ""
    });

  };

  //ensures card is drawn on page first load
  componentDidMount = () => {
    this.pickSomething();
  };

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-3" />
          <h1 className="col-6 center-col">Beginner</h1>
          <div className="col-3" />
        </div>
        <div className="row">
          <div className="col-3" />
          <h2 className="col-6 center-col">Type the sound for each Hiragana or Katakana that appears!</h2>
          <div className="col-3" />
        </div>
        <div className="row">
          <div className="col-3" />
          <div className="col-6 tile-col">
            <Tile question={this.state.currentQuest} hint={this.state.currentAns}></Tile>
          </div>
        </div>
        <div className="row">
          <div className="col-3" />
          <div className="col-6 center-col">
            <input
              value={this.state.userGuess}
              name="userGuess"
              onChange={this.handleInputChange}
              type="text"
            />
            <br />
            <button onClick={this.handleFormSubmit} className="btn btn-success" type="submit">Submit</button>
            <br />
            <button onClick={this.skipToNext} className="btn btn-secondary">Skip?</button>
          </div>
        </div>
        <div className="row">
          <div className="col-3" />
          <div className="col-6">
            <h1 id="correct-guess">GOOD JOB!</h1>
            <h1 id="incorrect-guess">Oops, Try Again!</h1>
          </div>
        </div>
        <div id="home-btn">
        <a class="btn btn-info" href="#" role="button">Home</a>
        </div>
      </div>
    );
  };
};



export default easyPage;