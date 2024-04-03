const questions = [
  {
    question: "¿Cuál de las siguientes acciones NO es considerada bullying?",
    options: ["Hablar mal de alguien a sus espaldas", "Ayudar a un compañero con sus deberes", "Aislar a alguien del grupo"],
    correctAnswer: 1
  },
  {
    question: "¿Qué hacer si eres testigo de una situación de bullying?",
    options: ["Ignorarla", "Intervenir y buscar ayuda de un adulto", "Reírte junto con los agresores"],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es una forma común de bullying?",
    options: ["Agresión física"," Dar cumplidos", "Compartir intereses"],
    correctAnswer: 1
  },
  {
    question: "¿Qué puede hacer una persona que está siendo intimidada?",
    options:["Ignorar el problema"," Pedir ayuda a un adulto de confianza","Defenderse con violencia"],
    correctAnswer:1
  },
  {
    question:"¿Cuál es un efecto común del bullying en la víctima?",
    options:["Mayor confianza en sí mismo", "Bajo rendimiento académico","Desarrollo de habilidades sociales"],
    correctAnswer:1
  }
  // Agrega más preguntas aquí
];

let currentQuestion = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

function loadQuestion() {
  const question = questions[currentQuestion];
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-button"); 
    button.onclick = () => checkAnswer(index);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const question = questions[currentQuestion];
  if (selectedIndex === question.correctAnswer) {
    correctAnswers++;
  } else {
    wrongAnswers++;
    const errorSound = new Audio("error_sound.mp3"); // Ruta a tu archivo de sonido de error
    errorSound.play();
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    finishGame();
  }
}

function finishGame() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const menuButton = document.createElement("button");
  
  questionElement.textContent = `Respuestas correctas: ${correctAnswers}, Respuestas incorrectas: ${wrongAnswers}`;
  optionsElement.innerHTML = "";
  
  menuButton.textContent = "Volver al Menú";
  menuButton.id = "menu-button"; 
  menuButton.onclick = returnToMenu;
  
  optionsElement.appendChild(menuButton);
}

function returnToMenu() {
  window.location.href = "menú.html"; // Redirige al menú principal
}

loadQuestion();