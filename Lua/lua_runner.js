let logData = "";

async function runLuaFromFile() {
  const luaCode = await fetch("main.lua").then(r => r.text());
  const result = lua.run(luaCode);

  document.getElementById("output").textContent = result;
  appendLog("File Executed: main.lua");
  appendLog("Result: " + result);
}

function appendLog(text) {
  const stamp = new Date().toLocaleString();
  const line = `[${stamp}] ${text}`;
  logData += line + "\n";
  document.getElementById("log").textContent = logData;
}

function downloadLog() {
  const blob = new Blob([logData], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "run_log.txt";
  a.click();
}
