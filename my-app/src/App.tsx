import MultipleMessages from "./Components/MultipleMessages";
import SingleMessage from "./Components/SingleMessage";
import Code from "./Components/Code";
import {useState} from "react";

interface ChatData{
  role: string,
  content: string,
}

function App() {
  const [value, setValue] = useState<string>("");
  const [chat,setChat] =useState<ChatData[]>([]);

  const getQuery = async()=>{
    try{
      const options: RequestInit ={
        method: 'POST',
        headers:{
          "Content-Type":  "application/json"
        },
        body: JSON.stringify({
          message: value
        })
      }

      const response = await fetch("http://localhost:3001/completions", options);
      const data: ChatData = await response.json();
      console.log(data);
      const userMessage: ChatData= {
        role: "user",
        content: value
      }
      setChat(oldChat => [...oldChat, data]);
    }
    catch (error){
      console.error();
    }
  }

  const clearChat =()=>{
    setValue("");
    setChat([]);
  }
  const filteredUserMessages = chat.filter(message => message.role === "user");
  const latestCode = chat.filter(message => message.role === "assistant").pop()
  return (
    <div className="App">
      <MultipleMessages userMessages = {filteredUserMessages}/>
      <input value = {value} onChange={e=> setValue(e.target.value)}/>
      <Code text={latestCode?.content || " "}/>
      <div className="button-container">
        <button id="get-query" onClick={getQuery}>Query</button>
        <button id="clear-chat" onClick={clearChat}>Clear Chat</button>
      </div>
    </div>
  );
}

export default App;
