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

const buttons = Array.from(document.getElementsByTagName('button'));
const buttonLength = buttons.length;

const addScore = score => score = score + 1;

const renderAnswerBtns = (answers, buttons) => {
  answers.forEach((answer, index) => buttons[index].textContent = answer);
}

//クイズの問題文、選択肢を定義
const setupQuiz = ({ question, answers }) => {
  document.getElementById('js-question').textContent = question;
  renderAnswerBtns(answers, buttons);
};

const clickHandler = e => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score = addScore(score);
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength) {
  //問題数がまだあればこちらを実行
    setupQuiz(quiz[quizIndex]);
  } else {
    window.alert(`終了！あなたの正解数は${score}/${quizLength}です！`);
  }
}

const addEventToButtons = (buttons => {
  buttons.forEach(
    button => button.addEventListener('click',
      e => clickHandler(e)
    )
  ); 
})(buttons);

//問題文や選択肢の書き換えを行っていいる命令
setupQuiz(quiz[quizIndex]);