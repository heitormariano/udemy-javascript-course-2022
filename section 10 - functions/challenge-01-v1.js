// challenge: simple poll app
// The solution version presents a limit of answers
const poll = {
  question: 'What is your favourite programming language?',
  options: [],
  answers: [],
  answersCounter: 0,
  createOption(index, language) {
    return { index: index, language: language };
  },
  loadOptions() {
    this.options.push(this.createOption(0, 'JavaScript'));
    this.options.push(this.createOption(1, 'Python'));
    this.options.push(this.createOption(2, 'Rust'));
    this.options.push(this.createOption(3, 'C++'));
  },
  defineMessage() {
    let userMsg = `${this.question}\n`;
    for (let i = 0; i < this.options.length; i++) {
      userMsg += `${this.options[i].index} : ${this.options[i].language}\n`;
    }
    userMsg += `(Write option number)`;
    return userMsg;
  },
  registerNewAnswer() {
    if (this.options.length == 0) {
      this.loadOptions();
    }
    let msgToShow = this.defineMessage();
    let opt = prompt(msgToShow);
    if (opt != null && opt != '') {
      opt = new Number(opt).valueOf();
      this.checkAnswers(opt);
    }
  },
  checkAnswers(input) {
    if (!isNaN(input)) {
      let totalAnswers = this.options.length;
      if (this.answersCounter < totalAnswers) {
        if (input >= 0 && input < totalAnswers) {
          this.answers.push(input);
          this.answersCounter++;
        } else {
          alert('Value entered outside the allowed range. Please enter a value between 0 and 3');
        }
      } else {
        alert('Response limit reached. Please try again later');
      }
    } else {
      alert('Text entered. Please enter a value between 0 and 3');
    }
  },
  displayResults() {
    this.registerNewAnswer();
    let result = '';
    if (this.answers.length > 0) {
      result += `Answers:\n`;
      for (const elem of this.answers) {
        result += `${this.options[elem].index} --> ${this.options[elem].language}\n`;
      }
    } else {
      result = 'No answers saved.';
    }
    alert(result);
  },
};

const elemBtn = document.querySelector('.poll');
elemBtn.addEventListener('click', poll.displayResults.bind(poll));
