'use strict';
(function () {
  const animationBox = document.querySelector('.question__animation-box');
  const animationBtn = document.querySelector('.animation-btn');
  const ANIMATION_TIME_CORRECT = 3200;
  const ANIMATION_TIME_WRONG = 3200;

  let timer;
  //submit
  //nextBtn
  function checkAnim() {
    clearTimeout(timer);
    if (animationBox.innerHTML) {
      animationBox.innerHTML = ''; 
    }
  }

  window.lottie = {
    renderAnim: function (isCorrect) {
      checkAnim();
      // listener for submit and nextbtn
      const duration = isCorrect ? ANIMATION_TIME_CORRECT : ANIMATION_TIME_WRONG;
      const modifier = isCorrect ? '--correct' : '--wrong';
      const jsonFileName = isCorrect ? 'girl_correct-mir' : 'girl_wrong-cloud';;
      animationBox.classList.add(`question__animation-box${modifier}`);
      checkAnim();
      const animation = bodymovin.loadAnimation({
        container: animationBox,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: `${jsonFileName}.json`,
      });
      timer = setTimeout(function () {
        animationBox.innerHTML = '';
      }, duration);

      console.log(animationBox.innerHTML == false);
      //console.log(this, 'checking', lottie === this, window.lottie);// lottie, true
    },
    
  };
})();
