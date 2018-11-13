$(document).ready(function() {
  //Store the total number of questions
  var totalQuestions = $('.questions').length;

  //Set the current question to display to 1
  var currentQuestion = 0;

  //Store the selector in a variable.
  $questions = $('.questions');

  // Get progress bar
  $progress = $('#questionProgress');
  var percentage = 0;

  //Show the first question
  $($questions.get(currentQuestion)).show("slide", {direction: "right"}, 600);

  //attach a click listener to the HTML element with the id of 'next'
  $('#next').click(function () {
    //if there are no more questions do stuff
    if (currentQuestion >= totalQuestions-1) {
    } else {
      $($questions.get(currentQuestion)).hide("slide", {direction: "left"}, 600)
      .queue(function() {
        //increment the current question by one
        currentQuestion += 1;

        // update progress bar
        updateProgress();

        //otherwise show the next question
        $($questions.get(currentQuestion))
          .show("slide", {direction: "right"}, 600);
        console.log(currentQuestion);
      });
    }
  });

  //attach a click listener to the HTML element with the id of 'prev'
  $('#prev').click(function () {
    //if there are no more questions do stuff
    if (currentQuestion <= 0) {
    } else {
      $($questions.get(currentQuestion)).hide("slide", {direction: "right"}, 600)
      .queue(function() {
        //decrement the current question by one
        currentQuestion -= 1;

        // update progress bar
        updateProgress();

        //otherwise show the previous question
        $($questions.get(currentQuestion))
          .show("slide", {direction: "left"}, 600);
        console.log(currentQuestion);
      });
    }
  });

  function updateProgress() {
    percentage = (100*(currentQuestion+1)/totalQuestions);
    $progress.css("width", percentage + "%");
    $progress.prop("aria-valuenow", percentage)
  }
});
