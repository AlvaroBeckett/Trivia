window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Zagreb is the capital of which country?' : ['Croatia', 'Costa Rica', 'Estonia', 'Fiji', 0],
        'Tbilisi is the capital of which country?' : ['Gabon', 'Georgia', 'Guatemala', 'Indonesia', 1],
        'Santiago is the capital of which country?' : ['Croatia', 'Cuba', 'Congo', 'Chile', 3],
        'Tehran is the capital of which country?' : ['Iraq', 'Iran', 'Kenya', 'Kosovo', 1],
        'Buenos Aires is the capital of which country?' : ['Bermuda', 'Bolivia', 'Argentina', 'Armenia', 2],
        'New Delhi is the capital of which country?' : ['', 'Haiti', 'Iceland', 'Egypt', 3],
        'Pyongyang is the capital of which country?' : ['South Korea', 'North Korea', 'Kazakhstan', 'Hungary', 1],
        'Kabul is the capital of which country?' : ['Andorra', 'Ukraine', 'Afganistan', 'Azerbaijan', 2],
        'Reykjavik is the capital of which country?' : ['Jamaica', 'Jordan', 'Iceland', 'Ireland', 2],
        'Canberra is the capital of which country?' : ['Austria', 'Australia', 'Angola', 'Andorra', 1],
        'Port-au-prince is the capital of which country?' : ['Honduras', 'Haiti', 'Hungary', 'Eritrea', 1],
        'Copenhagen is the capital of which country?' : ['Norway', 'Denmark', 'Netherlands', 'Latvia', 1],
        'Helsinki is the capital of which country?' : ['France', 'Honduras', 'Finland', 'Georgia', 2],
        'Tallinn is the capital of which country?' : ['Equador', 'Equador', 'Estonia', 'Lithuania', 2],
        'Kathmandu is the capital of which country?' : ['Peru', 'Oman', 'Qatar', 'Nepal', 3],
        'Beirut is the capital of which country?' : ['Lebanon', 'Latvia', 'Maldives', 'Malta', 0],
        'Ankara is the capital of which country?' : ['Uruguay', 'Turkey', 'Uganda', 'Vanuatu', 1],
        'Lima is the capital of which country?' : ['Nicaragua', 'Peru', 'Panama', 'Paraguay', 1],
        'Mogadishu is the capital of which country?' : ['Tanzania', 'Senegal', 'Kenya', 'Somalia', 3],
        'Bucharest is the capital of which country?' : ['Bulgaria', 'Romania', 'Hungary', 'Montenegro', 1],
        'Poland is the capital of which country?' : ['Chech Republic', 'Poland', 'Samoa', 'San Marino', 1],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
      };
      
  function loadQuestion(curr) {
  // This function loads all the question into the questionArea
  // It grabs the current question based on the 'current'-variable
  
    var question = Object.keys(allQuestions)[curr];
    
    questionArea.innerHTML = '';
    questionArea.innerHTML = question;    
  }
  
  function loadAnswers(curr) {
  // This function loads all the possible answers of the given question
  // It grabs the needed answer-array with the help of the current-variable
  // Every answer is added with an 'onclick'-function
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);      
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      
      answerArea.appendChild(createDiv);
    }
  }
  
  function checkAnswer(i, arr) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answerArea and let them know it's done.
    
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);             
      } else {
        addChecker(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
        current += 1;
        
        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = 'Done';
        answerArea.innerHTML = '';
      }
                              
    };
  }
  
  function addChecker(bool) {
  // This function adds a div element to the page
  // Used to see if it was correct or false
  
    var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);
    
    createDiv.appendChild(txt);
    
    if (bool) {
      
      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
  }
  
  
  // Start the quiz right away
  loadQuestion(current);
  loadAnswers(current);
  
};