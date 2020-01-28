import React, { Component } from 'react';
import Tile from '../Components/Tile';

const kanjiArray = [
    //hiragana Chart
      { sym: "何", eng: 'what', hira: 'nani' }
    , { sym: "家", eng: 'house', hira: 'ie' }
    , { sym: "森", eng: 'forest', hira: 'もり' }
    , { sym: "緑", eng: 'green', hira: 'みどり' }
    , { sym: "白い", eng: 'white', hira: 'しろい' }
    , { sym: "黒", eng: 'black', hira: 'くろ' }
    , { sym: "黄", eng: 'yellow', hira: 'き' }
    , { sym: "赤", eng: 'red', hira: 'あか' }
    , { sym: "青い", eng: 'blue', hira: 'あおい' }
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

        if (this.state.userGuess === this.state.currentAns) {
            alert(this.state.currentHira)
            this.pickSomething();
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
                    <h1 className="col-6 test">Intermediate</h1>
                    <div className="col-3" />
                </div>
                <div className="row">
                    <div className="col-3" />
                    <h2 className="col-6 test">Translate the Kanji to english!</h2>
                    <div className="col-3" />
                </div>
                <div className="row">
                    <div className="col-3" />
                    <div className="col-6 test">
                        <Tile class="" id="tile" question={this.state.currentQuest}></Tile>
                        {/* <User answer={this.state.currentAns} handleInputChange={this.answerComparison}/> */}
                        <input
                            value={this.state.userGuess.toLowerCase().trim()}
                            name="userGuess"
                            onChange={this.handleInputChange}
                            type="text"
                        />
                        <button onClick={this.handleFormSubmit}>Submit</button>
                    </div>
                    <div className="col-3" />
                </div>
            </div>);
    };
};



export default interPage;