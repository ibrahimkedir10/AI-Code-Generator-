import SingleMessage from "./SingleMessage";

interface UserMessage{
    role: string,
    content: string
}
interface MessagesDisplayProps{
    userMessages: UserMessage[]
}
function MultipleMessages({userMessages}: MessagesDisplayProps) {
    return (
      <div className="MultipleMessages">
       {userMessages.map((userMessage, _index) => <SingleMessage key={_index} message={userMessage} />)}

      </div>
    );
  }
  
  export default MultipleMessages;
  