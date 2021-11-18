const Product = require('./models/Product.js');
const Question = require('./models/Question.js');
const Answer = require('./models/Answer.js');
const Answer_Photo = require('./models/Answer_Photo.js');

const markQuestionHelpful = (question_id) => {
  // do stuff
  return Question.increment('question_helpfulness', {
    where: {question_id: question_id}
  });
};

const reportQuestion = (question_id) => {
  return Question.update({reported: true}, {
    where: {question_id: question_id}
  });
};

const markAnswerHelpful = (answer_id) => {
  return Answer.increment('answer_helpfulness', {
    where: {answer_id: answer_id}
  });
};

module.exports.markQuestionHelpful = markQuestionHelpful;
module.exports.reportQuestion = reportQuestion;
module.exports.markAnswerHelpful = markAnswerHelpful;