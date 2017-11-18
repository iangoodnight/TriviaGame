    //Timer
    //  Set our number counter to 100.
    var number = 30;

    //  Display number.
    $("#time-counter").text(number);

    //  set score
    var score = 0

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  Question Array
    var questionArray = [$("#a1", "#a2", "#a3", "#a4", "#a5", "#a6", "#a7", "#a8", "#a9", "#a1")];
    console.log(questionArray);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #time-counter tag.
      $("#time-counter").text(number);


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

      }
    }

    //  Blank Scoresheet
    var scoreSheet = [];
    console.log(scoreSheet);

    //  The stop function
    function stop() {
    	if($("#a1").is(":checked")) {
    		console.log("true");
    		scoreSheet.push(true);
    	}

    	if($("#a2").is(":checked")) {
    		console.log("true");
    		scoreSheet.push(true);
    	}

    	if($("#a3").is(":checked")) {
    		console.log("true");
    		scoreSheet.push(true);
    	}

    	if($("#a4").is(":checked")) {
    		console.log("true");
    		scoreSheet.push(true);
    	}

    	if($("#a5").is(":checked")) {
    		console.log("true");
    		scoreSheet.push(true);
    	}

    	if($("#a6").is(":checked")) {
    		console.log("true");
    		scoreSheet.push(true);
    	}

    	if($("#a7").is(":checked")) {
    		console.log("true");
    		scoreSheet.push(true);
    	}

    	if($("#a8").is(":checked")) {
    		console.log("true");
    		scoreSheet.push(true);
    	}

    	if($("#a9").is(":checked")) {
    		console.log("true");
    		scoreSheet.push(true);
    	}

    	if($("#a10").is(":checked")) {
    		console.log("true");
    		scoreSheet.push(true);
    	}
    	for (var i = 0; i < scoreSheet.length; i++) {
    		if (scoreSheet[i] === true) {
    			score++;
    			console.log(score)
    		}
    	}

    //  Alert the user that time is up.  Alert score
        alert("Time Up!  You Got " + score + " of 10 correct!");
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }



    //  Execute the run function.
    run();