'use strict';
(function () {
  const langList = document.querySelector('.languages-list');
  const langBtns = document.querySelectorAll('.languages-list__btn');
  const question = document.querySelector('.question');

  let qns;
  function blurResLangBtns(list, activeKey, blurClass) {
    for (let i = 0; i < list.length; i++) {
      if (i !== activeKey) {
        list[i].classList.add(blurClass);
        list[i].disabled = true;
      }
    }
  }

  function unblurResLangBtns(list, activeKey, blurClass) {
    for (let i = 0; i < list.length; i++) {
      if (i !== activeKey) {
        list[i].classList.remove(blurClass);
        list[i].disabled = false;//module utils
      }
    }
  }
  

  langBtns.forEach((it, key) => {
    it.addEventListener('click', (evt) => {
      //const thisKey = langBtnsArray.indexOf(it);
      //dataList[evt.currentTarget.id], 'DATA');
      blurResLangBtns(langBtns, key, 'languages-list__btn--unselected');
      const dataId = evt.currentTarget.id;
      console.log(dataList[dataId] === ru);
      qns = window.initQuestions(dataList[dataId]);//(ru);//(dataList.dataId);//(dataList[evt.currentTarget.id]);//(dataToFeedRu);


      //console.log(qns, 'QNS');
      setTimeout(function () {//REPLACE with fetch and when you get the respond start typing first qn -> 
        //-> we should have two window functions: initQnsData by a Questions constructor
        // and adding listeners (fillData to replace  with getting data from the server -->fetch data)
        //and fillData will be actually in dataConstructor utiliy to push it afterwards into json file!!!  
        //AND getQuestion or maybe not...
        langList.classList.add('languages-list--none');
        question.classList.remove('question--none');
        unblurResLangBtns(langBtns, key, 'languages-list__btn--unselected');
      }, 1500);
    });
  });
})();


