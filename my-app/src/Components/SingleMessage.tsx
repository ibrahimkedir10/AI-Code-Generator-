
interface UserMessage{
    role: string,
    content: string
}
interface MessagesDisplayProps{
    message: UserMessage
}

function SingleMessage({message}: MessagesDisplayProps) {
    return (
      <div className="SingleMessage">
        <p id="icon">X</p>
        <p>{message.role}</p>
        <p>{message.content}</p>
      </div>
    );
  }
  
  export default SingleMessage;
  