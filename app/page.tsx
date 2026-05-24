* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
  background: #ffffff;
  color: #070707;
  font-family: Arial, Helvetica, sans-serif;
}

button,
input {
  font-family: inherit;
}

@keyframes splashFadeOut {
  0% { opacity: 1; transform: scale(1); }
  85% { opacity: 1; }
  100% { opacity: 0; transform: scale(1.04); pointer-events: none; }
}

@keyframes drawBorder {
  to { stroke-dashoffset: 0; }
}

@keyframes letterPop {
  0% {
    opacity: 0;
    transform: translateY(14px) scale(0.88);
    filter: blur(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes drawRoof {
  to { stroke-dashoffset: 0; }
}

@keyframes homeAppear {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
