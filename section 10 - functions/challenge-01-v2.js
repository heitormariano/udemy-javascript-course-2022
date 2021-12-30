// challenge: simple poll app
// The solution version no presents a limit of answers.
// The code allow to show the number votes (answers) of each language listed

const poll = {
  question: 'What is your favourite programming language?',
  options: [],
  // This generates [0, 0, 0, 0].
  answers: new Array(4).fill(0),
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
      if (input >= 0 && input < this.answers.length) {
        this.answers[input]++;
      } else {
        alert('Value entered outside the allowed range. Please enter a value between 0 and 3');
      }
    } else {
      alert('Text entered. Please enter a value between 0 and 3');
    }
  },
  displayResults() {
    this.registerNewAnswer();
    result = `Answers:\n`;
    for (const indice in this.answers) {
      result += `index ${this.options[indice].index} (${this.options[indice].language}) --> ${this.answers[indice]} answer(s)\n`;
    }
    alert(result);
  },
};

const elemBtn = document.querySelector('.poll');
elemBtn.addEventListener('click', poll.displayResults.bind(poll));
