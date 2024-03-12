import MultipleMessages from "./Components/MultipleMessages";
import SingleMessage from "./Components/SingleMessage";
import Code from "./Components/Code";

function App() {
  return (
    <div className="App">
      <MultipleMessages/>
      <input/>
      <Code/>
      <div className="button-container">
        <button id="get-query">Query</button>
        <button id="clear-chat">Clear Chat</button>
      </div>
    </div>
  );
}

export default App;
