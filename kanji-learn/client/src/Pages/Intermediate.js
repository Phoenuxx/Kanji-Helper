import React, { Component } from 'react';
import Tile from '../Components/Tile';

const kanjiArray = [
    //hiragana Chart
    { sym: "何", eng: 'what', hira: 'nani' }
    , { sym: "家", eng: 'house', hira: 'ie' }
    , { sym: "木", eng: 'tree', hira: 'き' }
    , { sym: "森", eng: 'forest', hira: 'もり' }
    , { sym: "緑", eng: 'green', hira: 'みどり' }
    , { sym: "白", eng: 'white', hira: 'しろ' }
    , { sym: "黒", eng: 'black', hira: 'くろ' }
    , { sym: "黄", eng: 'yellow', hira: 'き' }
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
    , { sym: "牛肉", eng: 'beef', hira: 'ぎょにく' }
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

    pickSomething = () => {
        let currentSym = kanjiArray[Math.floor(Math.random() * kanjiArray.length)];
        
        //Reverts congratulatory text to hidden
        document.getElementById("correct-guess").style.display = "none";

        this.setState({
            currentQuest: currentSym.sym,
            currentAns: currentSym.eng,
            currentHira: currentSym.hira
        });
        console.log(currentSym.sym);
        console.log(this.state);
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit
        event.preventDefault();

        if (this.state.userGuess.toLowerCase() === this.state.currentAns) {

            document.getElementById("correct-guess").style.display = "block";
            
            //roll new flash card after 3 second delay
            setTimeout(this.pickSomething, 3000);
        } else {
            alert("try again")
        }
        // Clear `this.state.firstName` and `this.state.lastName`
        this.setState({
            userGuess: ""
        });

    };

    componentDidMount = () => {
        this.pickSomething();
    }

    render() {
        return (
            <div className="App container-fluid">
                <div className="row">
                    <div className="col-3" />
                    <h1 className="col-6 center-col">Intermediate</h1>
                    <div className="col-3" />
                </div>
                <div className="row">
                    <div className="col-3" />
                    <h2 className="col-6 center-col">Translate the Kanji to english!</h2>
                    <div className="col-3" />
                </div>
                <div className="row">
                    <div className="col-3" />
                    <div className="col-6 center-col">
                        <Tile question={this.state.currentQuest} hint={this.state.currentHira}></Tile>
                        {/* <User answer={this.state.currentAns} handleInputChange={this.answerComparison}/> */}
                        <input
                            value={this.state.userGuess}
                            name="userGuess"
                            onChange={this.handleInputChange}
                            type="text"
                        />
                        <button onClick={this.handleFormSubmit}>Submit</button>
                    </div>
                    <div className="col-3" />
                </div>
                <div className="col-3" />
                <div className="row">
                <div className="col-3" />
                <div className="col-6 center-col">
                    <div>
                        <h1 id="correct-guess">GOOD JOB!</h1>
                    </div>
                </div> 
                </div>
            </div>);
    };
};



export default interPage;