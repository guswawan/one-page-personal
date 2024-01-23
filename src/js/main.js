import confetti from 'canvas-confetti';

const confettiArea = document.getElementById('confetti-area');

confettiArea.addEventListener('mouseover', () => {
  const scalar = 8;
  const watermolon = confetti.shapeFromText({ text: '🍉', scalar });

  confetti({
    shapes: [watermolon],
    scalar,
    spread: 50,
  });

  // launch a few confetti from the left edge
  confetti({
    particleCount: 100,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
  });

  // and launch a few from the right edge
  confetti({
    particleCount: 100,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
  });

  confetti(config);
});
