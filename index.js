var Kahoot = require("kahoot.js-updated");
var KahootApi = [];
var random = require("random-name");
const prompt = require('prompt-sync')();
const pin = Number(prompt("Pin? (ChaseDestroyer)> "));
const name = prompt("Name? (ChaseDestroyer)> ")+" (Botted by ChaseDestroyer)"
var bots = Number(prompt("Bots? (ChaseDestroyer)> "));
var ans;
for (var i=0; i<bots; i++) {
    KahootApi.push(new Kahoot);
KahootApi[i].join(pin, random.first()+i).catch(error => {
    console.log("ChaseDestroyerBot could not join. "+error.description);
})
KahootApi[i].on("Joined", () => {
    console.log("ChaseDestroyerBot has weapons up.");
})
KahootApi[i].on("QuestionStart", (question) => {
    ans = Math.floor(
        Math.random() * question.quizQuestionAnswers[question.questionIndex]
    )
    question.answer(
         ans
    );
    console.log("ChaseDestroyerBot chose answer number "+ans);
});
KahootApi[i].on("Disconnect", (reason) => {
    console.log("ChaseDestroyerBot got destroyed because of "+ reason);
        bots++;
        console.log("ChaseDestroyerBot has been reveived.");

})
}