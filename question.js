class Question {
  constructor() {
    this.input = createInput("Name");
    this.input2 = createInput("Answer");
    this.question = createElement("h3");
    this.title = createElement("h1");
    this.option1 = createElement("h4");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");
    this.option4 = createElement("h4");
    this.note = createElement("h4");
    this.button = createButton("Submit");
  }
  hide() {
    this.button.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.input.hide();
    this.input2.hide();
  }

  display() {
    this.title.html("My Quiz Game");
    this.title.position(350, 0);

    this.question.html(
      "Question: I’m tall when I’m young, and I’m short when I’m old. What am I?"
    );
    this.question.position(150, 80);

    this.option1.html("1: Age");
    this.option2.html("2: Rain");
    this.option3.html("3: Candle");
    this.option4.html("4: A Human");

    this.option1.position(150, 120);
    this.option2.position(150, 140);
    this.option3.position(150, 160);
    this.option4.position(150, 180);
    this.button.position(150, 280);

    this.input.position(150, 230);
    this.input2.position(350, 230);

    this.button.mousePressed(() => {
      this.input.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input.value();
      contestant.answer = this.input2.value();
      contestantCount += 1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
