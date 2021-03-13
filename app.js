const quiz = [
  {
    question:'ゲーム市場、最も売れたゲーム機は次の内どれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション２',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct:'ニンテンドーDS'
  } , {
    question:'糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [
      'MOTHER2',
      'スーパーマリオブラザーズ３',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct:'MOTHER2'
  }, {
    question:'ファイナルファンタジーⅣの主人公の名前は？',
    answers: [
      'フリオニール',
      'クラウド',
      'ティーダ',
      'セシル'
    ],
    correct:'セシル'
  },{
    question:'2019年、最も売れたゲームは？',
    answers: [
      'Minecraft',
      'スーパーマリオメーカー2',
      '大乱闘スマッシュブラザーズ SPECIAL',
      'ドラゴンクエストⅪ'
    ],
    correct:'大乱闘スマッシュブラザーズ SPECIAL'
  },{
    question:'2021年アプリ売り上げランキング1位はどれ？',
    answers: [
      'ドラゴンクエストウォーク',
      'パズドラ',
      'ウマ娘　プリティーダービー',
      'ポケモンGO'
    ],
    correct:'ドラゴンクエストウォーク'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
//データセット完了
//↑while文回転させる

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button [buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
} 
}

//問題文や選択肢の書き換えを行っていいる命令
setupQuiz();
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent ){
    window.alert('正解！');
    score++;
    } else {
    window.alert('不正解！');
    }
    quizIndex++;
    if(quizIndex < quizLength) {
      //問題数がまだあればこちらを実行
      setupQuiz();
    } else {
      //問題数がなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  
  }
  }

let handlerIndex =  0;

while(handlerIndex < buttonLength) {
  $button [handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
});
handlerIndex++;
}
