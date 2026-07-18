(() => {
  const menuButton = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-main-nav]');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('[data-filter]').forEach((input) => {
    const selector = input.dataset.filter;
    const cards = [...document.querySelectorAll(selector)];
    const empty = document.querySelector('[data-filter-empty]');

    input.addEventListener('input', () => {
      const query = input.value.trim().toLocaleLowerCase('ko');
      let visible = 0;

      cards.forEach((card) => {
        const text = (card.dataset.search || card.textContent).toLocaleLowerCase('ko');
        const match = !query || text.includes(query);
        card.classList.toggle('is-hidden', !match);
        if (match) visible += 1;
      });

      if (empty) empty.classList.toggle('is-visible', visible === 0);
    });
  });

  document.querySelectorAll('[data-practice-question]').forEach((question) => {
    const checkButton = question.querySelector('[data-check-answer]');
    const result = question.querySelector('[data-answer-result]');
    const answerPanel = question.querySelector('[data-answer-panel]');
    const correct = Number(question.dataset.correct);

    checkButton?.addEventListener('click', () => {
      const selected = question.querySelector('input[type="radio"]:checked');
      if (!selected) {
        result.textContent = '먼저 답을 선택하세요.';
        result.className = 'answer-result wrong';
        return;
      }

      const selectedIndex = Number(selected.value);
      question.querySelectorAll('.practice-option').forEach((option, optionIndex) => {
        option.classList.toggle('is-correct', optionIndex === correct);
        option.classList.toggle('is-wrong', optionIndex === selectedIndex && selectedIndex !== correct);
      });

      const isCorrect = selectedIndex === correct;
      result.textContent = isCorrect ? '정답입니다. 근거까지 확인하세요.' : '오답입니다. 초록색 정답과 해설을 확인하세요.';
      result.className = `answer-result ${isCorrect ? 'correct' : 'wrong'}`;
      answerPanel.hidden = false;
    });
  });

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
