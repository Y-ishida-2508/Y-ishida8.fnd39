'use strict'
// 1行目に記載している 'use strict' は削除しないでください


// ボタンがクリックされたときに実行される関数
function handleClick() {
   
   const num = document.querySelector('.inputText2').value;

   let cards = [];
   //if (num != null) {
      if (num <= 4 || num === "4 or 8 or 16 or 24") {
         cards = [
            "1","2",
            "1","2",
         ];
      } else if (num <= 6) {
         cards = [
            "1","3","2",
            "1","3","2",
         ];    
      } else if (num <= 8) {
         cards = [
            "1","2","3","4",
            "1","2","3","4",
         ];
      } else if (num <= 10) {
         cards = [
            "1","3","4","5","6",
            "1","3","4","5","6",
         ];
      } else if (num <= 12) {
         cards = [
            "1","3","4","5","6","7",
            "1","3","4","5","6","7",
         ];
      } else if (num <= 14) {
         cards = [
            "1","3","4","5","6","7","8",
            "1","3","4","5","6","7","8",
         ];
      } else if (num <= 16) {
         cards = [
            "1","5","6","7","8","2","3","4",
            "1","5","6","7","8","2","3","4",
         ];
      } else if (num <= 18) {
         cards = [
            "1","5","6","7","8","9","2","3","4",
            "1","5","6","7","8","9","2","3","4",
         ];
      } else if (num <= 20) {
         cards = [
            "1","2","3","4","5","6","7","8","9","10",
            "1","2","3","4","5","6","7","8","9","10",
         ];
      } else if (num <= 22) {
         cards = [
            "1","2","3","4","5","6","7","8","9","10","11",
            "1","2","3","4","5","6","7","8","9","10","11",
         ];
      } else if (num <= 24) {
         cards = [
            "1","2","3","4","5","6","7","8","9","10","11","12",
            "1","2","3","4","5","6","7","8","9","10","11","12",
         ];
      } else {
         cards = [
            "1","2",
            "1","2",
         ];
      }

   for (let i=cards.length-1; i>0; i--){
      let r = rand(0,i);
      let tmp = cards[i];
      cards[i] = cards[r];
      cards[r] = tmp;
   }

   // 中身を空にする
   let field = "";
   document.getElementById("field").innerHTML = "";
   field = document.getElementById("field");

   for (let i=0; i<cards.length; i++){
      let elm = document.createElement("div");
      elm.className = "card";
      elm.innerHTML = ""; //cards[i];
      elm.index = i;
      elm.onclick = click;
      field.appendChild(elm);
   }

   let first = null; //明示的に「空」にする
   let second = null;
   let timer = null;

   let count = 0;
   let hanten = 0;
   let clock = document.getElementById("clock");
   let timer2 = setInterval( function() {
      clock.innerText = "　経過時間〔秒〕：" +(++count)}, 700 );
    

   //min～maxまでで整数乱数を作る
   function rand(min, max){
      return Math.floor(Math.random()*(max-min+1))+min;
   }

   //クリックされた時
   function click(em){
      if (timer){
         clearTimeout(timer);
         judge();
      }
      let elm = em.target;
      elm.innerHTML = cards[ elm.index ];

      if (cards[elm.index] === "1"){
         elm.style.backgroundImage = "url('./image/image1.png')";
      } else if(cards[elm.index] === "2") {
         elm.style.backgroundImage = "url('./image/image2.png')";
      } else if(cards[elm.index] === "3") {
         elm.style.backgroundImage = "url('./image/image3.png')";
      } else if(cards[elm.index] === "4") {
         elm.style.backgroundImage = "url('./image/image4.png')";
      } else if(cards[elm.index] === "5") {
         elm.style.backgroundImage = "url('./image/image5.png')";
      } else if(cards[elm.index] === "6") {
         elm.style.backgroundImage = "url('./image/image6.png')";
      } else if(cards[elm.index] === "7") {
         elm.style.backgroundImage = "url('./image/image7.png')";
      } else if(cards[elm.index] === "8") {
         elm.style.backgroundImage = "url('./image/image8.png')";
      } else if(cards[elm.index] === "9") {
         elm.style.backgroundImage = "url('./image/image9.png')";
      } else if(cards[elm.index] === "10") {
         elm.style.backgroundImage = "url('./image/image10.png')";
      } else if(cards[elm.index] === "11") {
         elm.style.backgroundImage = "url('./image/image11.png')";
      } else {
         elm.style.backgroundImage = "url('./image/image12.png')";
      }

      if (!first){
         first = elm;
      } else if (first.index === elm.index){
         return;
      } else {
         second = elm;
         timer = setTimeout( judge, 700);
      }
   }

   //ジャッジする
   function judge (){
      if (first.innerHTML === second.innerHTML ){
         first.style.visibility = "hidden";
         second.style.visibility = "hidden";
         hanten += 2;
         if ( hanten === cards.length ){
            clearInterval(timer2);
         }
      } else {
         first.innerHTML = "";
         second.innerHTML = "";
         first.style.backgroundImage = "url('./image/image0.png')";
         second.style.backgroundImage = "url('./image/image0.png')";
      }
      first = null; //明示的に「空」にする
      second = null;
      timer = null;
   }

}

// ページをリロードする
function reload(){
   location.reload();
}

// グローバル変数
const cards3 = ["りんご","みかん","ばなな"];

//配置記憶Ver.
function handleClick2() {
   //function try3() {
      // 中身を空にする
      let field3 = "";
      document.getElementById("field3").innerHTML = "";
      field3 = document.getElementById("field3");

      for (let i=0; i<cards3.length; i++){
         let elm3 = document.createElement("div");
         elm3.className = "card3";
         elm3.innerHTML = cards3[i];
         if (cards3[i] === "りんご") {
            elm3.style.backgroundImage = "url('./image/card3/りんご.png')";
         } else if (cards3[i] === "みかん") {
            elm3.style.backgroundImage = "url('./image/card3/みかん.png')";
         } else {
            elm3.style.backgroundImage = "url('./image/card3/ばなな.png')";
         }
         elm3.index = i;
         elm3.onclick = click3;
         field3.appendChild(elm3);
      }

      //クリックされた時
      function click3(em3){
         let elm3 = em3.target;
         elm3.innerHTML = "";
         elm3.style.backgroundImage = "url('./image/card3/cardBack.png')";
         elm3.onclick = click4;
      }

      //再度クリックされた時
      function click4(em4){
         let elm4 = em4.target;
         elm4.innerHTML = cards3[ elm4.index ];
         if (cards3[elm4.index] === "りんご") {
            elm4.style.backgroundImage = "url('./image/card3/りんご.png')";
         } else if (cards3[elm4.index] === "みかん") {
            elm4.style.backgroundImage = "url('./image/card3/みかん.png')";
         } else {
            elm4.style.backgroundImage = "url('./image/card3/ばなな.png')";
         }
      }
   //}
}

   //配置記憶Ver. 全て裏返す
   function try4() {
      // 中身を空にする
      let field3 = "";
      document.getElementById("field3").innerHTML = "";
      field3 = document.getElementById("field3");

      for (let i=0; i<cards3.length; i++){
         let elm5 = document.createElement("div");
         elm5.className = "card3";
         elm5.style.backgroundImage = "url('./image/card3/cardBack.png')";
         elm5.index = i;
         elm5.onclick = click5;
         field3.appendChild(elm5);
      }

      //クリックされた時
      function click5(em5){
         let elm5 = em5.target;
         elm5.innerHTML = cards3[ elm5.index ];
         if (cards3[elm5.index] === "りんご") {
            elm5.style.backgroundImage = "url('./image/card3/りんご.png')";
         } else if (cards3[elm5.index] === "みかん") {
            elm5.style.backgroundImage = "url('./image/card3/みかん.png')";
         } else {
            elm5.style.backgroundImage = "url('./image/card3/ばなな.png')";
         }
      }
   }
