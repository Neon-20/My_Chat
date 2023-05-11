import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='b531c3c5-0e2f-49c5-88ff-a8fdd9a597da'
        username={props.user.username}
        secret={props.user.secret}
        style={{height : '100%'}}
      />
    </div>
  );
};

export default ChatsPage;