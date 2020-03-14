const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
function rel(relativePath) {
  return path.join(__dirname, relativePath);
}
function parseQuizFromMarkdown( markdown ) {
  var cards = markdown.split(/\n---+\n/);
  var quiz = cards.map(function ( card ) {
    var qAndA = card.split('\n>\n');
    var card = { question: qAndA[0], answer: qAndA[1] };
    if(qAndA.length != 2){
      console.warn("missing answer for question: ", qAndA);
      card = { question: "???", answer: "???"};
    }
    return card;
  });
  return quiz;
}

app.get('/api/quizzes/:quizId', function ( request, response ) {
  response.setHeader('Content-Type', 'application/json');
  console.log('requested quiz', request.quizId);
  var content = fs.readFileSync(rel("/live-examples/javascript_syntax_quiz.md"), 'utf8');
  var quiz = parseQuizFromMarkdown(content);
  response.send(quiz);
});


app.use('/live', express.static(rel('live-examples')));
app.use('/ouicards.js', express.static(rel('ouicards.js')));
app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port 3000!');
});