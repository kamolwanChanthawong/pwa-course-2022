import './App.css';

function Userlist () {
  return (
    <div className="userlist">
      <h1 className='text'>Kamolwan C.</h1>
    </div>
  )
}

function Chat () {
  return (
    <div className="chat">
    </div>
  )
}

function Inputbox () {
  return (
    <div className="inputbox">
      <input className='chatbox'></input>
      <button className='send'>Send</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Userlist/>
      <Chat/>
      <Inputbox/>
    </div>
  );
}

export default App;
