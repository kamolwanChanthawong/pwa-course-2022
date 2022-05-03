import { useState } from 'react';
import '../css/Userlist.css';

function Userlist () {
  const [trayStatus, setTrayStatus] = useState("close");

  function onButtonClicked() {
    if(trayStatus === "close"){
      setTrayStatus ("open");
    }
    if(trayStatus === "open"){
      setTrayStatus ("close");
    }
  }

  return (
    <div className={"userlist "+trayStatus}>
    <div className={"userlist" +setTrayStatus}/>
      <div className="close-button" onClick={onButtonClicked}>x</div>
      <div className="open-button" onClick={onButtonClicked}>x</div>
    </div>
  )
}

export default Userlist;