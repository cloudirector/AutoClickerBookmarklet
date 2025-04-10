(function () {
  const DELAY_DEFAULT = 1000;
  let delay = DELAY_DEFAULT;
  let clickingInterval, x, y;
  let clickActive = false;

  const autoClickerUI = document.createElement('div');
  autoClickerUI.id = 'autoClickerUI';
  autoClickerUI.style = `
    position: fixed;
    top: 10px;
    left: 10px;
    background-color: #2e3440;
    color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    width: 270px;
    z-index: 9999;
    font-family: Arial, sans-serif;
  `;

  autoClickerUI.innerHTML = `
    <div id="windowBar" style="background-color:#3b4252; padding:10px; cursor:move; text-align:center; color:white; font-size:16px; border-radius:8px 8px 0 0;">
      Auto Clicker 
      <span id="closeButton" style="float:right; cursor:pointer; font-size:18px;">&#10005;</span>
    </div>
    <div style="margin-top:20px; text-align:center;">
      <label for="cpsSlider" style="font-size:14px; margin-right:10px;">Cps</label>
      <input type="range" id="cpsSlider" min="1" max="200" value="1" style="width:60%; margin-bottom:10px;" />
      <span id="cpsValue" style="font-size:16px; margin-left:10px;">1</span>
    </div>
    <div style="text-align:center; margin-top:20px;">
      <button id="startButton" style="background-color:#88c0d0; color:white; border:none; padding:12px; width:80%; border-radius:5px; margin:10px 0; cursor:pointer; transition: all 0.3s ease;">Start</button>
      <button id="stopButton" style="background-color:#bf616a; color:white; border:none; padding:12px; width:80%; border-radius:5px; margin:10px 0; cursor:pointer; transition: all 0.3s ease;" disabled>Stop</button>
    </div>
  `;

  document.body.appendChild(autoClickerUI);

  let isDragging = false, offsetX = 0, offsetY = 0;

  const dragMouseMove = (e) => {
    if (isDragging) {
      autoClickerUI.style.left = `${e.clientX - offsetX}px`;
      autoClickerUI.style.top = `${e.clientY - offsetY}px`;
    }
  };

  document.getElementById('windowBar').addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - autoClickerUI.getBoundingClientRect().left;
    offsetY = e.clientY - autoClickerUI.getBoundingClientRect().top;

    document.addEventListener('mousemove', dragMouseMove);
    document.addEventListener('mouseup', () => {
      isDragging = false;
      document.removeEventListener('mousemove', dragMouseMove);
    }, { once: true });
  });

  const cpsSlider = document.getElementById('cpsSlider');
  const cpsValueLabel = document.getElementById('cpsValue');

  cpsSlider.addEventListener('input', function () {
    const cps = parseInt(this.value);
    cpsValueLabel.textContent = cps;
    delay = 1000 / cps;
  });

  document.getElementById('startButton').addEventListener('click', () => {
    const cps = parseInt(cpsSlider.value);
    if (cps < 1) return alert('CPS must be greater than or equal to 1');

    document.body.style.cursor = 'crosshair';
    clickActive = true;

    const mouseMoveHandler = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    addEventListener('mousemove', mouseMoveHandler);
    document.getElementById('stopButton').disabled = false;
    document.getElementById('startButton').disabled = true;

    clickingInterval = setInterval(() => {
      if (!clickActive) return;
      const el = document.elementFromPoint(x, y);
      el?.click();
    }, delay);
  });

  document.getElementById('stopButton').addEventListener('click', () => {
    clickActive = false;
    clearInterval(clickingInterval);
    document.body.style.cursor = 'default';
    document.getElementById('stopButton').disabled = true;
    document.getElementById('startButton').disabled = false;
  });

  document.getElementById('closeButton').addEventListener('click', () => {
    autoClickerUI.remove();
    clearInterval(clickingInterval);
    document.body.style.cursor = 'default';
  });
})();
