window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = Math.floor(Math.random()),
      timer,
      progress,
      max;
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'Cairo is the capital of which country?' : ['Georgia', 'Haiti', 'Iceland', 'Egypt', 3],
        'Zagreb is the capital of which country?' : ['Croatia', 'Costa Rica', 'Estonia', 'Fiji', 0],
        'Tbilisi is the capital of which country?' : ['Gabon', 'Georgia', 'Guatemala', 'Indonesia', 1],
        'Santiago is the capital of which country?' : ['Croatia', 'Cuba', 'Congo', 'Chile', 3],
        'Tehran is the capital of which country?' : ['Iraq', 'Iran', 'Kenya', 'Kosovo', 1],
        'Buenos Aires is the capital of which country?' : ['Bermuda', 'Bolivia', 'Argentina', 'Armenia', 2],
        'New Delhi is the capital of which country?' : ['India', 'Haiti', 'Iceland', 'Egypt', 3],
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
        'Colombo is the capital of which country?' : ['Taiwan', 'Tanzania', 'Sri Lanka', 'Slovakia', 2],
        'Wellington is the capital of which country?' : ['Pakistan', 'Poland', 'New Zealand', 'Montenegro', 2],
        'Ulaanbaatar is the capital of which country?' : ['Montenegro', 'Mongolia', 'Morrocco', 'Mozambique', 1],
        'Male is the capital of which country?' : ['Moldova', 'Maldives', 'Mauritius', 'Mauritania', 1],
        'Caracas is the capital of which country?' : ['Venezuela', 'Uganda', 'Senegal', 'Tajikistan', 0],
        'Oslo is the capital of which country?' : ['Finland', 'Denmark', 'Sweden', 'Norway', 3],
        'Bern is the capital of which country?' : ['Austria', 'Liechenstein', 'Switzerland', 'Sweden', 2],
        'Doha is the capital of which country?' : ['Saudi Arabia', 'Jordan', 'Qatar', 'Syria', 2],
        'Addis Ababa is the capital of which country?' : ['Ethiopia', 'Eritrea', 'Ghana', 'Mauritania', 0],
        'Amman is the capital of which country?' : ['Jordan', 'Uganda', 'Senegal', 'Georgia', 0],
        'Antananarivo is the capital of which country?' : ['Finland', 'Turkmenistan', 'Madagascar', 'Norway', 2],
        'Baku is the capital of which country?' : ['Brunei', 'Gambia', 'Azerbaijan', 'Sweden', 2],
        'Bandar Seri Begawan is the capital of which country?' : ['Saudi Arabia', 'Gambia', 'Brunei', 'Belize', 2],
        'Brazzaville is the capital of which country?' : ['Kyrgystan', 'Barbados', 'Mauritius', 'Republic of the Congo', 3],
        'Cardiff is the capital of which country?' : ['Venezuela', 'Ireland', 'Wales', 'Scotland', 2],
        'Chisinau is the capital of which country?' : ['Moldova', 'Senegal', 'Bangladesh', 'Guinea-Bissasu', 0],
        'Dakar is the capital of which country?' : ['Austria', 'Senegal', 'Tanzania', 'Tajikistan', 1],
        'Freetown is the capital of which country?' : ['Sierra Leone', 'Guyana', 'Guatemala', 'Guam', 0],
        'Hanoi is the capital of which country?' : ['Vietnam', 'Gibraltar', 'Moldova', 'South Sudan', 0],
        'Kampala is the capital of which country?' : ['Senegal', 'Venezuela', 'Uganda', 'Tajikistan', 2],
        'Lisbon is the capital of which country?' : ['Austria', 'Portugal', 'Angola', 'Zambia', 1],
        'Manila is the capital of which country?' : ['Laos', 'Jordan', 'Philippines', 'Cambodia', 2],
        'Minsk is the capital of which country?' : ['Moldova', 'Belarus', 'Monaco', 'Liberia', 1],
        'Montevideo is the capital of which country?' : ['Uruguay', 'Oman', 'Bahamas', 'Niger', 0],
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
        answerTracker(true);             
      } else {
        answerTracker(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
        current += Math.floor(Math.random() + 1);
        
        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = 'Done';
        answerArea.innerHTML = '';
      }
                              
    };
  }


  function answerTracker(bool) {
  	var curScore = 0;

  	if (bool) {
  		$('#cur-score').html(++curScore);
  	} else {
  		$('#cur-score').html(--curScore);
  	}
  }

$(document).ready(function() {
progress = $("#myProgress");
max = progress.attr("max");
timer = setInterval("updateBar()", 1000);
});

function updateBar() {
var current = progress.attr("value");
current -= 1;
progress.attr("value", current);

if (current <= max) {
clearInterval(timer);
}
}
  
  // Start the quiz right away
  loadQuestion(current);
  loadAnswers(current);
  
};