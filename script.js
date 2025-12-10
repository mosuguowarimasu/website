// Cardiff Met IST4000 PORT2 – interactive quiz
const questions = document.querySelectorAll('.question');
const scoreBoard = document.getElementById('score');
let current = 0, correctCount = 0;

questions.forEach(q => {
  const btn = q.querySelector('.check-btn');
  btn.addEventListener('click', () => {
    const selected = q.querySelector('input[type="radio"]:checked');
    const feedback = q.querySelector('.feedback');
    if (!selected) {
      feedback.textContent = 'Pick an answer first!';
      feedback.classList.remove('correct','incorrect');
      return;
    }
    const correct = selected.value === q.dataset.answer;
    feedback.textContent = correct ? '✅ Correct!' : '❌ Try again.';
    feedback.classList.add(correct ? 'correct' : 'incorrect');
    if (correct) correctCount++;
    btn.disabled = true;
    setTimeout(() => {
      q.classList.remove('active');
      current++;
      if (current < questions.length) {
        questions[current].classList.add('active');
      } else {
        scoreBoard.textContent = `You scored ${correctCount} out of ${questions.length}. Refresh to retry.`;
      }
    },1200);
  });
});