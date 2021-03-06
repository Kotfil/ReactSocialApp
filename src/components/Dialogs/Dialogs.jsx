import React from "react";
import s from "./Dialogs.module.css";
import Dialogsitem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogsElements = props.state.dialogs.map(d => (
    <Dialogsitem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map(m => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <div>
            <textarea ref={newMessageElement}></textarea>
          </div>
          <div>
            <button onClick={addMessage}></button>Send
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
