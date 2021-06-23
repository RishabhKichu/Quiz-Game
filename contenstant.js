class Contestant {
  constructor() {}

  getCount() {
    let contestantCountRef = database.ref("contestantCount");
    contestantCountRef.on("value", (data) => {
      contestantCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      contestantCount: count,
    });
  }
  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      answer: this.answer,
    });
  }

  static getContestantInfo() {
    var contestantInfoRef = database.ref("players");
    contestantInfoRef.on("value", (data) => {
      allcontestants = data.val();
    });
  }
}
