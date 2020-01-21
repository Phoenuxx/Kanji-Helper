import React from 'react';
import Tile from '../Components/Tile';

const hiraKataArray = [
//hiragana Chart
  { sym: "あ", eng: 'a' }, { sym: 'い', eng: "i" }, { sym: 'う', eng: "u" }, { sym: 'え', eng: "e" }, { sym: 'お', eng: "o" },
  { sym: 'か', eng: 'ka' }, { sym: 'き', eng: 'ki' }, { sym: 'く', eng: 'ku' }, { sym: 'け', eng: 'ke' }, { sym: 'こ', eng: 'ko' },
  { sym: 'さ', eng: 'sa' }, { sym: 'し', eng: 'shi' }, { sym: 'す', eng: 'su' }, { sym: 'せ', eng: 'se' }, { sym: 'そ', eng: 'so' },
  { sym: 'た', eng: 'ta' }, { sym: 'ち', eng: 'chi' }, { sym: 'つ', eng: 'tsu' }, { sym: 'て', eng: 'te' }, { sym: 'と', eng: 'to' },
  { sym: 'な', eng: 'na' }, { sym: 'に', eng: 'ni' }, { sym: 'ぬ', eng: 'nu' }, { sym: 'ね', eng: 'nu' }, { sym: 'の', eng: 'nu' },
  { sym: 'は', eng: 'ha' }, { sym: 'ひ', eng: 'hi' }, { sym: 'ふ', eng: 'fu' }, { sym: 'へ', eng: 'he' }, { sym: 'ほ', eng: 'ho' },
  { sym: 'ま', eng: 'ma' }, { sym: 'み', eng: 'mi' }, { sym: 'む', eng: 'mu' }, { sym: 'め', eng: 'me' }, { sym: 'も', eng: 'mo' },
  { sym: 'や', eng: 'ya' }, { sym: 'ゆ', eng: 'yu' }, { sym: 'よ', eng: 'yo' },
  { sym: 'ら', eng: 'ra' }, { sym: 'り', eng: 'ri' }, { sym: 'る', eng: 'ru' }, { sym: 'れ', eng: 're' }, { sym: 'ろ', eng: 'ro' },
  { sym: 'わ', eng: 'wa' }, { sym: 'を', eng: 'wo' }, { sym: 'ん', eng: 'n' },
//katakana Char
  { sym: 'ア', eng: 'a' }, { sym: 'イ', eng: 'i' }, { sym: 'ウ', eng: 'u' }, { sym: 'エ', eng: 'e' }, { sym: 'オ', eng: 'o' },
  { sym: 'カ', eng: 'ka' }, { sym: 'キ', eng: 'ki' }, { sym: 'ク', eng: 'ku' }, { sym: 'ケ', eng: 'ke' }, { sym: 'コ', eng: 'ko' },
  { sym: 'サ', eng: 'sa' }, { sym: 'シ', eng: 'shi' }, { sym: 'ス', eng: 'su' }, { sym: 'セ', eng: 'se' }, { sym: 'ソ', eng: 'so' },
  { sym: 'タ', eng: 'ta' }, { sym: 'チ', eng: 'chi' }, { sym: 'ツ', eng: 'tsu' }, { sym: 'テ', eng: 'te' }, { sym: 'ト', eng: 'to' },
  { sym: 'ナ', eng: 'na' }, { sym: 'ニ', eng: 'ni' }, { sym: 'ヌ', eng: 'nu' }, { sym: 'ネ', eng: 'ne' }, { sym: 'ノ', eng: 'no' },
  { sym: 'ハ', eng: 'ha' }, { sym: 'ヒ', eng: 'hi' }, { sym: 'フ', eng: 'fu' }, { sym: 'ヘ', eng: 'he' }, { sym: 'ホ', eng: 'ho' },
  { sym: 'マ', eng: 'ma' }, { sym: 'ミ', eng: 'mi' }, { sym: 'ム', eng: 'mu' }, { sym: 'メ', eng: 'me' }, { sym: 'モ', eng: 'mo' },
  { sym: 'ヤ', eng: 'ya' }, { sym: 'ユ', eng: 'yu' }, { sym: 'ヨ', eng: 'yo' },
  { sym: 'ラ', eng: 'ra' }, { sym: 'リ', eng: 'ri' }, { sym: 'ル', eng: 'ru' }, { sym: 'レ', eng: 're' }, { sym: 'ロ', eng: 'ro' },
  { sym: 'ワ', eng: 'wa' }, { sym: 'ヲ', eng: 'wo' }, { sym: 'ン', eng: 'n' }];

export default function easyPage() {
  return (
    <div className="App container-fluid">
      <div className="row title">
        <div className="col-3" />
        <h1 className="col-6 test">Beginner</h1>
        <div className="col-3" />
      </div>
      <div className="row title">
        <div className="col-3" />
        <h2 className="col-6 test">Type the sound for each Hiragana/Katakana that appears!</h2>
        <div className="col-3" />
      </div>
      <div className="row">
        <div className="col-3" />
        <div className="col-6 test">
          <Tile class="" question={hiraKataArray[0].sym} answer={hiraKataArray[0].eng}></Tile>
        </div>
        <div className="col-3" />
      </div>

    </div>);
}