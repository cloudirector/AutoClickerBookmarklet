<div align="center">
<p align="center">
  <img src="https://github.com/user-attachments/assets/6c4f86ac-3f8f-4845-aa99-000e91782e16" style="border-radius: 20px" width="20%" height="20%">
</p>
  
<h1> Auto Clicker Bookmarklet </h1>
</div>


### without cdn
``` javascript
javascript: !function(){let e,t,n,o=1e3,d=!1;const i=document.createElement("div");i.id="autoClickerUI",i.style="\n position: fixed;\n top: 10px;\n left: 10px;\n background-color: #2e3440;\n color: white;\n padding: 20px;\n border-radius: 10px;\n box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);\n width: 270px;\n z-index: 9999;\n font-family: Arial, sans-serif;\n ",i.innerHTML='\n <div id="windowBar" style="background-color:#3b4252; padding:10px; cursor:move; text-align:center; color:white; font-size:16px; border-radius:8px 8px 0 0;">\n Auto Clicker \n <span id="closeButton" style="float:right; cursor:pointer; font-size:18px;">&#10005;</span>\n </div>\n <div style="margin-top:20px; text-align:center;">\n <label for="cpsSlider" style="font-size:14px; margin-right:10px;">Cps</label>\n <input type="range" id="cpsSlider" min="1" max="200" value="1" style="width:60%; margin-bottom:10px;" />\n <span id="cpsValue" style="font-size:16px; margin-left:10px;">1</span>\n </div>\n <div style="text-align:center; margin-top:20px;">\n <button id="startButton" style="background-color:#88c0d0; color:white; border:none; padding:12px; width:80%; border-radius:5px; margin:10px 0; cursor:pointer; transition: all 0.3s ease;">Start</button>\n <button id="stopButton" style="background-color:#bf616a; color:white; border:none; padding:12px; width:80%; border-radius:5px; margin:10px 0; cursor:pointer; transition: all 0.3s ease;" disabled>Stop</button>\n </div>\n ',document.body.appendChild(i);let r=!1,l=0,s=0;const a=e=>{r&&(i.style.left=e.clientX-l+"px",i.style.top=e.clientY-s+"px")};document.getElementById("windowBar").addEventListener("mousedown",(e=>{r=!0,l=e.clientX-i.getBoundingClientRect().left,s=e.clientY-i.getBoundingClientRect().top,document.addEventListener("mousemove",a),document.addEventListener("mouseup",(()=>{r=!1,document.removeEventListener("mousemove",a)}),{once:!0})}));const c=document.getElementById("cpsSlider"),u=document.getElementById("cpsValue");c.addEventListener("input",(function(){const e=parseInt(this.value);u.textContent=e,o=1e3/e})),document.getElementById("startButton").addEventListener("click",(()=>{if(parseInt(c.value)<1)return alert("CPS must be greater than or equal to 1");document.body.style.cursor="crosshair",d=!0;addEventListener("mousemove",(e=>{t=e.clientX,n=e.clientY})),document.getElementById("stopButton").disabled=!1,document.getElementById("startButton").disabled=!0,e=setInterval((()=>{if(!d)return;const e=document.elementFromPoint(t,n);e?.click()}),o)})),document.getElementById("stopButton").addEventListener("click",(()=>{d=!1,clearInterval(e),document.body.style.cursor="default",document.getElementById("stopButton").disabled=!0,document.getElementById("startButton").disabled=!1})),document.getElementById("closeButton").addEventListener("click",(()=>{i.remove(),clearInterval(e),document.body.style.cursor="default"}))}();
```

### with cdn
``` javascript
javascript: fetch("https://cdn.jsdelivr.net/gh/cloudirector/AutoClickerBookmarklet@latest/AutoClicker.min.js").then(r => r.text()).then(r => eval(r))
```
