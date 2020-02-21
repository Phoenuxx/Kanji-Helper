import React, { Component } from 'react';
import Tile from '../Components/Tile';


const kanjiArray = [
  //hiragana Chart
    { sym: "何", eng: 'what', hira: 'なに' }
  , { sym: "家", eng: 'house', hira: 'いえ ' }
  , { sym: "木", eng: 'tree', hira: 'き' }
  , { sym: "森", eng: 'forest', hira: 'もり' }
  , { sym: "緑", eng: 'green', hira: 'みどり' }
  , { sym: "白", eng: 'white', hira: 'しろ' }
  , { sym: "黒", eng: 'black', hira: 'くろ' }
  , { sym: "黄", eng: 'yellow', hira: 'きいろ' }
  , { sym: "赤", eng: 'red', hira: 'あか' }
  , { sym: "青", eng: 'blue', hira: 'あお' }
  , { sym: "私", eng: 'i', hira: 'わたし' }
  , { sym: "彼", eng: 'he', hira: 'かれ' }
  , { sym: "彼女", eng: 'she', hira: 'かのじょ' }
  , { sym: "北", eng: 'north', hira: 'きた' }
  , { sym: "南", eng: 'south', hira: 'みなみ' }
  , { sym: "東", eng: 'east', hira: 'ひがし' }
  , { sym: "西", eng: 'west', hira: 'にし' }
  , { sym: "建物", eng: 'building', hira: 'たてもの' }
  , { sym: "出口", eng: 'exit', hira: 'でぐち' }
  , { sym: "入り口", eng: 'entrance', hira: 'いりぐち' }
  , { sym: "魚", eng: 'fish', hira: 'さかな' }
  , { sym: "牛", eng: 'cow', hira: 'うし' }
  , { sym: "鳥", eng: 'bird', hira: 'とり' }
  , { sym: "肉", eng: 'meat', hira: 'にく' }
  , { sym: "牛肉", eng: 'beef', hira: 'ぎゅにく' }
  , { sym: "鳥肉", eng: 'chicken', hira: 'とりにく' }
  , { sym: "魚肉", eng: 'fish', hira: 'ぎょにく' }
  , { sym: "手", eng: 'hand', hira: 'て' }
  , { sym: "右", eng: 'right', hira: 'みぎ' }
  , { sym: "左", eng: 'left', hira: 'ひだり' }
  , { sym: "一", eng: 'one', hira: 'いち' }
  , { sym: "二", eng: 'two', hira: 'に' }
  , { sym: "三", eng: 'three', hira: 'さん' }
  , { sym: "四", eng: 'four', hira: 'よん' }
  , { sym: "五", eng: 'five', hira: 'ご' }
  , { sym: "六", eng: 'six', hira: 'ろく' }
  , { sym: "七", eng: 'seven', hira: 'なな' }
  , { sym: "八", eng: 'eight', hira: 'はち' }
  , { sym: "九", eng: 'nine', hira: 'きゅ' }
  , { sym: "十", eng: 'ten', hira: 'じゅ' }
  , { sym: "百", eng: 'hundred', hira: 'ひゃく' }
  , { sym: "千", eng: 'thousand', hira: 'せん' }
  , { sym: "万", eng: 'ten thousand', hira: 'まん' }
  , { sym: "苺", eng: 'strawberry', hira: 'いちご' }
  , { sym: "後", eng: 'after', hira: 'あと' }
  , { sym: "父", eng: 'dad', hira: 'ちち' }
  , { sym: "母", eng: 'mom', hira: 'はは' }
  , { sym: "仕事", eng: 'my job', hira: ' しごと' }
  , { sym: "先生", eng: 'teacher', hira: 'せんせい' }
  , { sym: "国", eng: 'country', hira: 'くに' }
  , { sym: "家族", eng: 'family', hira: 'かぞく' }
  , { sym: "本", eng: 'book', hira: 'ほん' }
  , { sym: "車", eng: 'car', hira: 'くるま' }
  , { sym: "駅", eng: 'station', hira: 'えき' }
  , { sym: "英語", eng: 'english', hira: 'えいご' }
  , { sym: "お茶 ", eng: 'tea', hira: 'おちゃ' }
  , { sym: "水", eng: 'water', hira: 'みず' }
  , { sym: "図書館 ", eng: 'library', hira: 'としょかん ' }
  , { sym: "火", eng: 'fire', hira: 'ひ' }
  , { sym: "禁止する", eng: 'prohibit', hira: 'きんしする' }
  , { sym: "可愛い", eng: 'cute', hira: 'かわいい' }
  , { sym: "彼氏 ", eng: 'boyfriend', hira: 'かれし' }
  , { sym: "大学", eng: 'university', hira: 'だいがく' }
  , { sym: "多い", eng: 'many', hira: 'おおい' }
  , { sym: "荷物", eng: 'luggage', hira: 'にもつ' }
  , { sym: "試験", eng: 'test', hira: 'しけん' }
  , { sym: "床", eng: 'floor', hira: 'ゆか' }
  , { sym: "遅い", eng: 'slow', hira: 'おそい' }
  , { sym: "財布", eng: 'wallet', hira: 'さいふ' }
  , { sym: "少し", eng: 'small quantity', hira: 'すこし' }
  , { sym: "少ない", eng: 'not many', hira: 'すくない' }
  , { sym: "宿題", eng: 'homework', hira: 'しゅくだい ' }
  , { sym: "動物 ", eng: 'animal', hira: 'どうぶつ' }
  , { sym: "動物園", eng: 'zoo', hira: 'どうぶつえん' }
  , { sym: "一つ", eng: 'one item', hira: 'ひとつ' }
  , { sym: "二つ", eng: 'two items', hira: 'ふたつ' }
  , { sym: "三つ", eng: 'three items', hira: 'みっつ' }
  , { sym: "四つ", eng: 'four items', hira: 'よっつ' }
  , { sym: "五つ", eng: 'five items', hira: 'いつつ' }
  , { sym: " 六つ", eng: 'six items', hira: 'むっつ' }
  , { sym: "七つ", eng: 'seven items', hira: 'ななつ' }
  , { sym: "八つ", eng: 'eight items', hira: 'やっつ' }
  , { sym: "九つ", eng: 'nine items', hira: 'ここのつ' }
  , { sym: "十 (count)", eng: 'ten items', hira: 'とお' }
  , { sym: "毎日", eng: 'every day', hira: 'まいにち' }
  , { sym: "毎週", eng: 'every week', hira: 'まいしゅう' }
  , { sym: "毎月", eng: 'every month', hira: 'まいつき' }
  , { sym: "毎年", eng: 'every year', hira: 'まいとし' }
  , { sym: "電車", eng: 'train', hira: 'でんしゃ' }
  , { sym: "ひこうき", eng: 'airplane', hira: 'ひこうき' }
  , { sym: "自転車", eng: 'bicycle', hira: 'じてんしゃ' }
  , { sym: "バス", eng: 'bus', hira: 'バス' }
  , { sym: "タクシー", eng: 'taxi', hira: 'タクシー' }
  , { sym: "地下鉄", eng: 'subway', hira: 'ちかてつ' }
  , { sym: "船", eng: 'boat', hira: 'ふね' }
  , { sym: "行きます", eng: 'to go', hira: 'いきます' }
  , { sym: "行かない", eng: 'to not go', hira: 'いかない' }
  , { sym: "来ます", eng: 'to come', hira: 'きます' }
  , { sym: "来ません", eng: 'to not come', hira: 'きません' }
  , { sym: "帰ります", eng: 'to return home', hira: 'かえります' }
  , { sym: "帰りません", eng: 'to not return', hira: 'かえりません' }
  , { sym: "病院", eng: 'hospital', hira: 'びょういん' }
    , { sym: "雨", eng: 'rain', hira: 'あめ' }
    , { sym: "円", eng: 'yen', hira: 'エン' }
    , { sym: "下", eng: 'below', hira: 'した' }
    , { sym: "花	", eng: 'flower', hira: 'はな' }
    , { sym: "休", eng: 'rest', hira: 'やす-む' }
    , { sym: "玉", eng: 'ball', hira: 'たま' }
    , { sym: "空", eng: 'sky', hira: 'そら' }
   , { sym: "月", eng: 'moon', hira: 'つき' }
    , { sym: "見る", eng: 'see', hira: 'みる' }
    , { sym: "耳", eng: 'ear', hira: 'みみ' }
    , { sym: "小", eng: 'small', hira: 'ちい-さい' }
    , { sym: "人", eng: 'person', hira: 'ひと' }
    , { sym: "川", eng: 'river', hira: 'かわ' }
    , { sym: "村", eng: 'village', hira: 'むら' }
    , { sym: "大", eng: 'large', hira: 'おお-きい' }
    , { sym: "日", eng: 'day', hira: 'ニチ' }
    , { sym: "日曜日", eng: 'sunday', hira: 'にちよび' }
    , { sym: "火曜日", eng: 'tuesday', hira: 'かよび' }
    , { sym: "水曜日", eng: 'wednesday', hira: 'すいよび' }
    , { sym: "木曜日", eng: 'thursday', hira: 'もくよび' }
    , { sym: "金曜日", eng: 'friday', hira: 'きんよび' }
    , { sym: "土曜日", eng: 'saturday', hira: 'どよび' }
    , { sym: "月曜日", eng: 'monday', hira: 'げ つよび' }
 //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }
  //   , { sym: "", eng: '', hira: '' }

];

class interPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuest: "",
      currentAns: "",
      userGuess: ""
    }
  }

  //randomly sets state for a flash card and ensures affirmation text is hidden
  pickSomething = () => {
    let currentSym = kanjiArray[Math.floor(Math.random() * kanjiArray.length)];

    //Reverts affirmation text to hidden
    document.getElementById("correct-guess").style.display = "none";
    document.getElementById("incorrect-guess").style.display = "none";

    this.setState({
      currentQuest: currentSym.sym,
      currentAns: currentSym.eng,
      currentHira: currentSym.hira
    });
    console.log(currentSym.sym);
    console.log(this.state);
  };

  //Plans to reveal correct answer before picking new card
  skipToNext = () => {
    this.pickSomething();
  }

  //Plans to reveal correct answer before picking new card
  handleInputChange = event => {
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  }

  // function for hiding incorrect guess text
  incorrectHide = () => {
    document.getElementById("incorrect-guess").style.display = "none"
  }

  // checks user answers and runs pick something
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit
    event.preventDefault();

    if (this.state.userGuess.toLowerCase() === this.state.currentAns) {

      document.getElementById("correct-guess").style.display = "block";

      //roll new flash card after 3 second delay
      setTimeout(this.pickSomething, 2000);
    } else {
      document.getElementById("incorrect-guess").style.display = "block";
      setTimeout(this.incorrectHide, 1000);
    }
    // Clear `this.state.firstName` and `this.state.lastName`
    this.setState({
      userGuess: ""
    });

  };

  // ensures a flash card is chosen on page load
  componentDidMount = () => {
    this.pickSomething();
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-3" />
          <h1 className="col-6 center-col" id="int-title">Medium</h1>
          <div className="col-3" />
        </div>
        <div className="row">
          <div className="col-3" />
          <h2 className="col-6 center-col">Translate the Kanji to english!</h2>
          <div className="col-3" />
        </div>
        <div className="row">
          <div className="col-3" />
          <div className="col-6 tile-col">
            <Tile question={this.state.currentQuest} hint={this.state.currentHira}></Tile>
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
            <h1 id="correct-guess">GOOD JOB! </h1>
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



export default interPage;