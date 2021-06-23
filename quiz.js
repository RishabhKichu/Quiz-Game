class Quiz {
  constructor() {}

  getState() {
    let gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }
  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      let contestants = await database.ref("contestantCount").once("value");
      if (contestants.exists()) {
        contestantCount = contestants.val();
        contestant.getCount();
      }

      question = new Question();
      question.display();
    }
  }

  play(contestant) {
    const btn = createButton("Reset");
    btn.position(50, 50);
    btn.mousePressed(() => {
      contestant.updateCount(0);
      location.reload();
    });
    background("blue");
    question.hide();
    question.question.html(" Results! ");
    question.note.position(150, 130);
    Contestant.getContestantInfo();
    let y = 200;
    if (allcontestants) {
      question.note.html(
        "Note: The Names Of The People Who Got The Correct Answer Is Highlighted In Green While The Wrong Answers Are Highlighted In Red"
      );
      for (let plr in allcontestants) {
        if (allcontestants[plr].answer === "3") fill(75, 238, 68);
        else fill("red");

        text(allcontestants[plr].name, 150, y);
        y = y + 40;
      }
    }
  }
}
