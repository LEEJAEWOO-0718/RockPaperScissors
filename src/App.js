import { useState } from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock:{
    name:"Rock",
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"https://cdn-icons-png.flaticon.com/512/6297/6297996.png"
  },
  paper:{
    name:"Paper",
    img:"https://i.pinimg.com/736x/80/29/c6/8029c6d9ca3e8550e3acca108525d567.jpg"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("");
  const [borderColor, setBorderColor] = useState(false);

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setUserResult(judgement(choice[userChoice],computerChoice));
    setComputerResult(judgement(computerChoice,choice[userChoice]));
  };

  const judgement=(user, computer)=>{
    if(user.name === computer.name) {
      return "tie"
    } else if (user.name === "Rock") return computer.name === "Scissors"?"win":"lose"
    else if (user.name === "Scissors") return computer.name === "Paper"?"win":"lose"
    else if (user.name === "Paper") return computer.name === "Rock"?"win":"lose"
  }

  const randomChoice=()=>{
    let itemArray=Object.keys(choice);
    let randomItem=Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final]
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} userResult={userResult}/>
        <Box title="Computer" item={computerSelect} computerResult={computerResult}/>
      </div>
      <div className="main">
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
