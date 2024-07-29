import "./App.css";

function App() {
  const handleColorPick = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    await chrome.scripting.executeScript({
      target: { tabId: tab.id as number },
      func: () => {
        console.log("executeScript Tab : ", tab.id);
      },
    });
  };

  return (
    <section id="app">
      <h1>Color Picker</h1>

      <div>
        <button className="btn" onClick={handleColorPick}>
          🎨
        </button>
      </div>
    </section>
  );
}

export default App;
