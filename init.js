'use strict';
(function () {
  /*
  Instead of Number() -> parseInt()
  IIFE
  */

  const questionText = document.querySelector('.question__text');
  const questionTemplate = document.querySelector('#question-option').content.querySelector('.question__option');
  const questionOptions = document.querySelector('.question__options');
  const questionOptionsBox = document.querySelector('.question__options-box');
  
  const questionArea = document.querySelector('.question');
  const quizArea = document.querySelector('.quiz-results');
  const quizScore = document.querySelector('.quiz-results__score');


  const Questions = function () {
    this.data = [];
    this.count = 0;
    this.totalScore = 0;
    this.attempts = 0;
    this.percentage = 0;
    this.actualQn = null;

    this.nextBtn = document.querySelector('.question__next');
    this.questionForm = document.querySelector('.question__form');
    this.tryAgainBtn = document.querySelector('.question__try-again');
    this.okBtn = document.querySelector('.question__submit');
    this.resultsBtn = document.querySelector('.question__results');
    this.quitBtn = document.querySelector('.question__reset');
  };

  const Question  = function (dataEl) {
    this.question = dataEl.question;
    this.answers = dataEl.answers;
    this.options = [];
    this.selectedAnswers = [];
    this.type = dataEl.type//this.answers.type;//'radio';// a method that defines type OR it is enetred at the moment of data creation
    this.allCorrect = true;
  };








  Questions.prototype.fillData = function (question, answers, rightIdxs) {//rightIdx
    const dataEl = {};
    dataEl.question = question;
    dataEl.answers = [];
    dataEl.type;
    answers.forEach((it, key) => {//{'correct': true, 'answer': 'basya'},
        const isCorrect = rightIdxs.indexOf(key) >= 0;
        const type = rightIdxs.length > 1 ? 'checkbox' : 'radio';
        dataEl.answers.push({
          'correct': isCorrect,
          'answer': it,
        });
        dataEl.type = type;
      }
    );
    this.data.push(dataEl);
  };

  Questions.prototype.getQuestion = function (dataEl) {
    this.actualQn = new Question(dataEl);
    this.actualQn.renderQnText();
    this.actualQn.renderQnOptions(this.okBtn);
    this.okBtn.disabled = true;
  };

  Questions.prototype.deleteQuestion = function () {
    questionText.textContent = '';
    this.actualQn.deleteOpts();
  };

  Questions.prototype.reset = function () {
    this.okBtn.disabled = true;// move it from Questions.prototype.getQuestion
    this.okBtn.classList.remove('question__btn--none');//--> start new qns ?init
    this.nextBtn.classList.add('question__btn--none');//---> start new qns ? init
    this.resultsBtn.classList.add('question__btn--none');
    
    //if (this.actualQn) {
    this.deleteQuestion();
    //}
    //this.actualQn = null;// This line causes a TypeError: this.actualQn is null (init 118:7) Otherwise: TypeError: this.options[it] is undefined (203:9)
  };

  Questions.prototype.nextBtnPressHandler = function () {
    this.count += 1;
    this.deleteQuestion();

    if (this.actualQn.allCorrect) {
      this.totalScore += 1;
    }

    if (this.data[this.count]) {
      this.getQuestion(this.data[this.count]);

      this.nextBtn.classList.add('question__btn--none');
      this.tryAgainBtn.classList.add('question__btn--none');
      this.okBtn.classList.remove('question__btn--none');
    }
  };

  Questions.prototype.resultsBtnPressHandler = function () {
    questionArea.classList.add('question--none');
    window.getResults(this.totalScore, this.attempts);
    this.reset();
  };

  Questions.prototype.questionFormSubmitHandler = function (evt) {
    evt.preventDefault();
      this.attempts += 1;
      this.actualQn.submitHandler(this.okBtn, this.nextBtn, this.tryAgainBtn);
      //this.actualQn.submitHandler();

      this.okBtn.classList.add('question__btn--none');

      if (this.data.length - this.count === 1) {
        this.nextBtn.classList.add('question__btn--none');
        this.resultsBtn.classList.remove('question__btn--none');
      }
      if (this.data.length - this.count > 1) {
        this.nextBtn.classList.remove('question__btn--none');
    }
  };

  Questions.prototype.createListeners = function () {
    this.nextBtn.addEventListener('click', () => {
      this.nextBtnPressHandler();
    });

    this.questionForm.addEventListener('submit', (evt) => {
      this.questionFormSubmitHandler(evt);
    });

    this.resultsBtn.addEventListener('click', () => {
      this.resultsBtnPressHandler();
    });
  };

  // question functions:

  Question.prototype.renderQnOption = function (answer, key, okButton) {
    const qnOpt = questionTemplate.cloneNode(true);
    const qnLable = qnOpt.querySelector('label');
    const qnInput = qnOpt.querySelector('input');
    qnInput.id = `${key}`;
    qnInput.value =  `qn-${qnInput.id}`;
    qnInput.name = this.type === 'radio' ? 'qn' : `qn-${key}`;
    qnInput.type = this.type;
    qnLable.textContent = answer['answer'];
    qnLable.htmlFor = qnInput.id;

    qnLable.classList.add(`question__label--${this.type}`);

    qnInput.classList.add('visually-hidden');


    qnInput.addEventListener('change', (evt) => {
      evt.preventDefault();
      if (evt.target.checked && this.type === 'checkbox') {
        this.selectedAnswers.push(evt.target.id);
        okButton.disabled = false;
      }
      if (!evt.target.checked && this.type === 'checkbox') {
        this.selectedAnswers.splice(this.selectedAnswers.indexOf(evt.target.id), 1);
        if (!this.selectedAnswers.length) {
          okButton.disabled = true;
        }
      }

      if (this.type === 'radio') {
        this.selectedAnswers = [evt.target.id];
        okButton.disabled = false;
      }
    });
    
    return qnOpt;
  };

  Question.prototype.renderQnText = function () {
    questionText.textContent = this.question;
  };

  Question.prototype.renderQnOptions = function (okButton) {
    const fragment = document.createDocumentFragment();
    this.answers.forEach((it, key) => {
      this.options.push(this.renderQnOption(it, key, okButton));//NEW
      fragment.appendChild(this.options[key]);//appendChild(this.renderQnOption(it, key));
    });
    // questionOptions.appendChild(fragment);
    questionOptionsBox.appendChild(fragment);
  };

  Question.prototype.checkAnswers = function () {
    this.selectedAnswers.forEach((it) => {
      if (this.answers[it].correct) {
        this.options[it].children[1].classList.add('question__label--correct');
      }
      if (!this.answers[it].correct) {
        this.options[it].children[1].classList.add('question__label--error');
        this.allCorrect = false;
      }
    })
  };

  Question.prototype.submitHandler = function (okButton, nextButton, tryAgainButton) {
    
    this.checkAnswers();

    this.options.forEach((it) => {
      it.children[0].disabled = true;
    });

    if (!this.allCorrect) {
      tryAgainButton.classList.remove('question__btn--none');
      tryAgainButton.addEventListener('click', (evt) => {

        okButton.disabled = true;
        okButton.classList.remove('question__btn--none');
        nextButton.classList.add('question__btn--none');

        this.allCorrect = true;

        this.options.forEach((it) => {
          this.selectedAnswers = [];
          it.children[0].disabled = false;
          it.children[0].checked = false;
          it.children[1].classList.remove('question__label--error');
          it.children[1].classList.remove('question__label--correct');
        });

        tryAgainButton.classList.add('question__btn--none');
      });

      //window.lottie.checkAnim();
      window.lottie.renderAnim(false, 3200);
    }

    if (this.allCorrect) {
      //window.lottie.checkAnim();
      window.lottie.renderAnim(true, 3200);
    }
  };


  Question.prototype.deleteOpts = function () {
    while (this.options.length) {
      questionOptionsBox.removeChild(this.options.pop());
    }
  };


  window.initQuestions = function (langData) {
    const qns = new Questions();
    qns.data = langData; //for processed data
    /*langData.forEach(
      (it) => {
        qns.fillData(...it);
      }
    );*///for unprocessed data

    qns.getQuestion(qns.data[qns.count]);
    qns.createListeners();
    return qns;
  };

})();


