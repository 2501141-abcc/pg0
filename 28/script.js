// script.js


//　「趣味」のロード画面
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('H1loading').style.display = 'none';
    document.body.style.backgroundColor = ""; // 空文字でデフォルトに戻す
  }, 3000);
});

window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('H2loading').style.display = 'none';
    document.body.style.backgroundColor = ""; // 空文字でデフォルトに戻す
  }, 3000);
});



//　「アニメ」のロード画面
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('A1loading').style.display = 'none';
    document.body.style.backgroundColor = ""; // 空文字でデフォルトに戻す
  }, 4000);
});

window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('A2loading').style.display = 'none';
    document.body.style.backgroundColor = ""; // 空文字でデフォルトに戻す
  }, 4000);
});

//　「アニメ」のロード文字
var id = ['a']; //指定するidを全て配列で渡す
var tx = [];
var txCount = [];
var txSp = 130; // テキストの表示速度
var dly = 0; // 次の文章までの待ち時間
var count = 0;

window.onload = function(){
  kamikakushi();
  countSet();
  itimozi()
}

function countSet(){ // 文字数カウントの初期設定
  for(n=0;n<id.length;n++){
    txCount[n] = 0;
  }
}

function kamikakushi(){ // 要素を取得して非表示（opacity:0;）にする
  for(i=0;i<id.length;i++){
    id[i] = document.getElementById(id[i]);
    tx[i] = id[i].firstChild.nodeValue; // 初期の文字列
    id[i].innerHTML = '';
  }
}

function itimozi(){ //　一文字ずつ表示
    id[count].innerHTML = tx[count].substr( 0, ++txCount[count] ); // テキストの指定した数の間の要素を表示
  if(tx[count].length != txCount[count]){ // Count が初期の文字列の文字数と同じになるまでループ
    setTimeout("itimozi()",txSp); // 次の文字へ進む
  }
}



//　「読書」のロード画面
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('R1loading').style.display = 'none';
    document.body.style.backgroundColor = ""; // 空文字でデフォルトに戻す
  }, 3000);
});

window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('R2loading').style.display = 'none';
    document.body.style.backgroundColor = ""; // 空文字でデフォルトに戻す
  }, 3000);
});



//　「ゲーム」のロード画面
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('G1loading').style.display = 'none';
    document.body.style.backgroundColor = ""; // 空文字でデフォルトに戻す
  }, 4000);
});

window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('G2loading').style.display = 'none';
    document.body.style.backgroundColor = ""; // 空文字でデフォルトに戻す
  }, 4000);
});
//　「ゲーム」のスライドショー設定
let current = 0;
    const slides = document.querySelectorAll(".slide");
    setInterval(() => {
      // 現在の画像を非表示にする
      slides[current].classList.remove("visible");
      // 次の画像に切り替える
      current = (current + 1) % slides.length;
      slides[current].classList.add("visible");
    }, 3000);

let current2 = 0;
    const slide2s = document.querySelectorAll(".slide2");
    setInterval(() => {
      // 現在の画像を非表示にする
      slide2s[current2].classList.remove("visible2");
      // 次の画像に切り替える
      current2 = (current2 + 1) % slide2s.length;
      slide2s[current2].classList.add("visible2");
    }, 3000);

let current3 = 0;
    const slide3s = document.querySelectorAll(".slide3");
    setInterval(() => {
      // 現在の画像を非表示にする
      slide3s[current3].classList.remove("visible3");
      // 次の画像に切り替える
      current3 = (current3 + 1) % slide3s.length;
      slide3s[current3].classList.add("visible3");
    }, 3000);



//　「音楽」のロード画面
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('M1loading').style.display = 'none';
    document.body.style.backgroundColor = ""; // 空文字でデフォルトに戻す
  }, 4000);
});

window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('M2loading').style.display = 'none';
    document.body.style.backgroundColor = ""; // 空文字でデフォルトに戻す
  }, 4000);
});