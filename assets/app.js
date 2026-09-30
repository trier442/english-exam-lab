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
        if (query && match && input.hasAttribute('data-filter-open')) {
          const details = card.closest('details');
          if (details) details.open = true;
        }
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

  document.querySelectorAll('[data-speak-button]').forEach((button) => {
    const set = button.closest('[data-listening-set]');
    const script = set?.querySelector('[data-listening-script]');
    const speed = set?.querySelector('[data-speech-rate]');
    const status = set?.querySelector('[data-speech-status]');

    if (!('speechSynthesis' in window) || !script) {
      button.disabled = true;
      if (status) status.textContent = '이 브라우저에서는 음성 재생을 지원하지 않습니다.';
      return;
    }

    button.addEventListener('click', () => {
      window.speechSynthesis.cancel();
      const spokenText = script.textContent.trim().replace(/^(Man|Woman):\s*/gm, '');
      const utterance = new SpeechSynthesisUtterance(spokenText);
      utterance.lang = 'en-US';
      utterance.rate = Number(speed?.value || 0.9);
      utterance.pitch = 1;
      button.disabled = true;
      button.textContent = '재생 중…';
      if (status) status.textContent = '대본을 보지 않고 핵심 정보를 들어 보세요.';

      utterance.onend = () => {
        button.disabled = false;
        button.textContent = '▶ 다시 듣기';
        if (status) status.textContent = '필요하면 속도를 바꾸어 한 번 더 들어 보세요.';
      };
      utterance.onerror = () => {
        button.disabled = false;
        button.textContent = '▶ 영어 듣기';
        if (status) status.textContent = '음성 재생에 실패했습니다. 브라우저 음성 설정을 확인하세요.';
      };

      window.speechSynthesis.speak(utterance);
    });
  });

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
