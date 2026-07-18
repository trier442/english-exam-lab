// 정답 선택지만 유일하게 길어지는 단서를 없애기 위해,
// 필요한 경우 두 개 이상의 오답 판단을 하나의 복합 선택지로 묶습니다.
export const buildQuestion = (prompt, options, answer, explanation) => {
  const balanced = [...options];
  const lengths = balanced.map((option) => [...option].length);
  const correctLength = lengths[answer];
  const incorrect = lengths
    .map((length, index) => ({ index, length }))
    .filter(({ index }) => index !== answer)
    .sort((a, b) => b.length - a.length);

  if (correctLength > incorrect[0].length) {
    const target = incorrect[0].index;
    const separator = balanced.some((option) => /[가-힣]/.test(option)) ? " / 또한 " : " / ";
    let combined = balanced[target].replace(/[.!?]$/, "");
    for (const { index } of incorrect.slice(1)) {
      combined += `${separator}${balanced[index].replace(/[.!?]$/, "")}`;
      if ([...combined].length >= correctLength) break;
    }
    balanced[target] = combined;
  }

  return { prompt, options: balanced, answer, explanation };
};
