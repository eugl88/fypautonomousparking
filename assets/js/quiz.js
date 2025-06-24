function submitQuiz() {
const correctAnswers = {
    1: ['Arduino Mega Board', 'Motor Driver Shield', 'Chassis', 'Breadboard', 'Li-ion Battery & other components', 'DC Motors components', 'Ultrasonic components', 'Optical Speed Sensor & Encoder Disc'],
    2: ['Ultrasonic'],
    3: ['Move forward until an obstacle detected infront', 'Move backward and turn left if there is an obstacle infront'],
    4: ['Light interruptions from disc slots']
    ,
    5: ['20'],
    6: ['1-2-1']
    
  };

  const feedbackMessages = {
    1: {
      correct: 'Great! You have all the necessary components!',
      incorrect: 'Oops! Some components are missing. Double-check your list!'
    },
    2: {
      correct: 'Correct! Ultrasonic sensors are low-cost and effective for short-range detection.',
      incorrect: 'LiDAR and optical sensors are used in advanced systems.'
    },
    3: {
      correct: 'Correct! The car will stop and move backward, and then turn left to continue moving forward',
      incorrect: 'The car will stop and move backward, and then turn left to continue moving forward'
    }
  };

  // Build selectedAnswers dynamically based on checkboxes
  let selectedAnswers = {};
  const checkboxes = document.querySelectorAll('.answer-option');

  checkboxes.forEach(checkbox => {
    const qNum = parseInt(checkbox.getAttribute('data-question'), 10);
    if (!selectedAnswers[qNum]) selectedAnswers[qNum] = [];
    if (checkbox.checked) selectedAnswers[qNum].push(checkbox.value);
  });

  // Clear previous feedback and highlighting
  document.querySelectorAll('.answer').forEach(answer => {
    answer.classList.remove('correct', 'incorrect', 'unselected-correct');
  });

  Object.keys(selectedAnswers).forEach(qNum => {
    const correct = correctAnswers[qNum] || [];
    const selected = selectedAnswers[qNum] || [];
    const feedbackElem = document.getElementById(`feedback-${qNum}`);

    const isCorrect =
      selected.length === correct.length &&
      selected.every(val => correct.includes(val));

    // Display feedback
    if (feedbackElem) {
      feedbackElem.textContent = isCorrect
        ? feedbackMessages[qNum]?.correct || 'Correct!'
        : feedbackMessages[qNum]?.incorrect || 'Incorrect!';
    }

    // Mark selected answers
    selected.forEach(answer => {
      const label = [...document.querySelectorAll('.answer')].find(el =>
        el.textContent.includes(answer)
      );
      if (label) {
        label.classList.add(correct.includes(answer) ? 'correct' : 'incorrect');
      }
    });

    // Mark unselected correct answers
    correct.forEach(answer => {
      if (!selected.includes(answer)) {
        const label = [...document.querySelectorAll('.answer')].find(el =>
          el.textContent.includes(answer)
        );
        if (label) label.classList.add('unselected-correct');
      }
    });
  });
}