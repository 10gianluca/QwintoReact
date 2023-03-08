import React, { useState, useEffect } from 'react';
import './App.css';

const QwintoBoard = () => {
  const [rollAmount, setRollAmount] = useState(0);
  const [clickAmount, setClickAmount] = useState(false);
  const [orangeTrue, setOrangeTrue] = useState(false);
  const [yellowTrue, setYellowTrue] = useState(false);
  const [purpleTrue, setPurpleTrue] = useState(false);
  const [numberRolled1, setNumberRolled1] = useState();
  const [numberRolled2, setNumberRolled2] = useState();
  const [numberRolled3, setNumberRolled3] = useState();
  const [combinedNumber, setCombinedNumber] = useState();
  const [orangeOI0, setOrangeOI0] = useState('');
  const [orangeOI1, setOrangeOI1] = useState('');
  const [orangeOI2, setOrangeOI2] = useState('');
  const [orangeOI3, setOrangeOI3] = useState('');
  const [orangeOI4, setOrangeOI4] = useState('');
  const [orangeOI5, setOrangeOI5] = useState('');
  const [orangeOI6, setOrangeOI6] = useState('');
  const [orangeOI7, setOrangeOI7] = useState('');
  const [orangeOI8, setOrangeOI8] = useState('');
  const [yellowYI0, setYellowYI0] = useState('');
  const [yellowYI1, setYellowYI1] = useState('');
  const [yellowYI2, setYellowYI2] = useState('');
  const [yellowYI3, setYellowYI3] = useState('');
  const [yellowYI4, setYellowYI4] = useState('');
  const [yellowYI5, setYellowYI5] = useState('');
  const [yellowYI6, setYellowYI6] = useState('');
  const [yellowYI7, setYellowYI7] = useState('');
  const [yellowYI8, setYellowYI8] = useState('');
  const [purplePI0, setPurplePI0] = useState('');
  const [purplePI1, setPurplePI1] = useState('');
  const [purplePI2, setPurplePI2] = useState('');
  const [purplePI3, setPurplePI3] = useState('');
  const [purplePI4, setPurplePI4] = useState('');
  const [purplePI5, setPurplePI5] = useState('');
  const [purplePI6, setPurplePI6] = useState('');
  const [purplePI7, setPurplePI7] = useState('');
  const [purplePI8, setPurplePI8] = useState('');
  const [clicks, setClicks] = useState(0);
  const [length, setLength] = useState({
    row1: Array(9).fill(null),
    row2: Array(9).fill(null),
    row3: Array(9).fill(null),
    row4: Array(4).fill(null),
    row5: Array(10).fill(null),
    row6: Array(3).fill(null),
  });

  useEffect(() => {
    if (clicks === 0) {
      setClicks(clicks + 1);
      document.getElementById("keepButton").click();
      document.getElementById("Save").click();
    } else if (clicks === 1) {
      setTimeout(() => {
        document.getElementById("keepButton").click();
        document.getElementById("Save").click();
      }, 0);
    }
    const intervalId = setInterval(() => {
      if (clicks > 0) {
        putNumber();
      }
    }, 1);
    
    return () => clearInterval(intervalId);
  }, [clicks]);
  

  const Rolles = () => {
    if (orangeTrue === true || yellowTrue === true || purpleTrue === true){
      if (rollAmount < 2) {
        if (orangeTrue === true) {
          setNumberRolled1(Math.floor(Math.random() * 6) + 1);
        }
        if (yellowTrue === true) {
          setNumberRolled2(Math.floor(Math.random() * 6) + 1);
        }
        if (purpleTrue === true) {
          setNumberRolled3(Math.floor(Math.random() * 6) + 1);
        }
        setRollAmount(rollAmount + 1);
      } else {
        alert("TOO MANY REROLLS NATHALIE");
      }
    }else{
      alert("choose a dice")
    }

  };
  const getTotalDice = () => {
    setCombinedNumber(numberRolled1 + numberRolled2 + numberRolled3);
  }


  const rollOrange = () => {
    if (orangeTrue === true){
      if (rollAmount < 1){
        document.querySelector('.diceRow .diceCol:nth-child(1)').style.borderColor = "black";
        setOrangeTrue(false);
      }else{
        alert("already chose")
      }
    }else{
      if (rollAmount < 1){
        document.querySelector('.diceRow .diceCol:nth-child(1)').style.borderColor = "white";
        setOrangeTrue(true);
      }else{
        alert("already chose")
      }
    }
  };
  const rollYellow = () => {
    if (yellowTrue === true){
      if (rollAmount < 1){
        document.querySelector('.diceRow .diceCol:nth-child(2)').style.borderColor = "black";
        setYellowTrue(false);
      }else{
        alert("already chose")
      }
    }else{
      if (rollAmount < 1){
        document.querySelector('.diceRow .diceCol:nth-child(2)').style.borderColor = "white";
        setYellowTrue(true);
      }else{
        alert("already chose")
      }
    }
  };
  const rollPurple = () => {
    if (purpleTrue === true){
      if (rollAmount < 1){
        document.querySelector('.diceRow .diceCol:nth-child(3)').style.borderColor = "black";
        setPurpleTrue(false);
      }else{
        alert("already chose")
      }
    }else{
      if (rollAmount < 1){
        document.querySelector('.diceRow .diceCol:nth-child(3)').style.borderColor = "white";
        setPurpleTrue(true);
      }else{
        alert("already chose")
      }
    }
  };
  const putNumber = () => {
    document.getElementById("OI0").value = orangeOI0;
    document.getElementById("OI1").value = orangeOI1;
    document.getElementById("OI2").value = orangeOI2;
    document.getElementById("OI3").value = orangeOI3;
    document.getElementById("OI4").value = orangeOI4;
    document.getElementById("OI5").value = orangeOI5;
    document.getElementById("OI6").value = orangeOI6;
    document.getElementById("OI7").value = orangeOI7;
    document.getElementById("OI8").value = orangeOI8;
    document.getElementById("YI0").value = yellowYI0;
    document.getElementById("YI1").value = yellowYI1;
    document.getElementById("YI2").value = yellowYI2;
    document.getElementById("YI3").value = yellowYI3;
    document.getElementById("YI4").value = yellowYI4;
    document.getElementById("YI5").value = yellowYI5;
    document.getElementById("YI6").value = yellowYI6;
    document.getElementById("YI7").value = yellowYI7;
    document.getElementById("YI8").value = yellowYI8;
    document.getElementById("PI0").value = purplePI0;
    document.getElementById("PI1").value = purplePI1;
    document.getElementById("PI2").value = purplePI2;
    document.getElementById("PI3").value = purplePI3;
    document.getElementById("PI4").value = purplePI4;
    document.getElementById("PI5").value = purplePI5;
    document.getElementById("PI6").value = purplePI6;
    document.getElementById("PI7").value = purplePI7;
    document.getElementById("PI8").value = purplePI8;
  }

  const orangeClick = (event) => {
    if (orangeTrue === true){
      if (document.getElementById(event.target.id).value === '' || document.getElementById(event.target.id).value === "0" ){
        if (document.getElementById(event.target.id).id === "OI0"){
          const currentColor =  document.querySelector('.row:nth-child(1) .col:nth-child(1)').style.borderColor;
          document.querySelector('.row:nth-child(1) .col:nth-child(1)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setOrangeOI0(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "OI1"){
          const currentColor =  document.querySelector('.row:nth-child(1) .col:nth-child(2)').style.borderColor;
          document.querySelector('.row:nth-child(1) .col:nth-child(2)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setOrangeOI1(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "OI2"){
          const currentColor =  document.querySelector('.row:nth-child(1) .col:nth-child(3)').style.borderColor;
          document.querySelector('.row:nth-child(1) .col:nth-child(3)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setOrangeOI2(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "OI3"){
          const currentColor =  document.querySelector('.row:nth-child(1) .col:nth-child(4)').style.borderColor;
          document.querySelector('.row:nth-child(1) .col:nth-child(4)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setOrangeOI3(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "OI4"){   
          const currentColor =  document.querySelector('.row:nth-child(1) .col:nth-child(5)').style.borderColor;
          document.querySelector('.row:nth-child(1) .col:nth-child(5)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setOrangeOI4(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "OI5"){
          const currentColor =  document.querySelector('.row:nth-child(1) .col:nth-child(6)').style.borderColor;
          document.querySelector('.row:nth-child(1) .col:nth-child(6)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setOrangeOI5(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "OI6"){
          const currentColor =  document.querySelector('.row:nth-child(1) .col:nth-child(7)').style.borderColor;
          document.querySelector('.row:nth-child(1) .col:nth-child(7)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setOrangeOI6(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "OI7"){
          const currentColor =  document.querySelector('.row:nth-child(1) .col:nth-child(8)').style.borderColor;
          document.querySelector('.row:nth-child(1) .col:nth-child(8)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setOrangeOI7(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "OI8"){
          const currentColor =  document.querySelector('.row:nth-child(1) .col:nth-child(9)').style.borderColor;
          document.querySelector('.row:nth-child(1) .col:nth-child(9)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setOrangeOI8(combinedNumber);
          putNumber();
        }else{
          putNumber();
        }
      }else{
        alert("already Number")
      }
    }else{
      alert("you didn't click orange")
    }
  };

  const yellowClick = (event) => {
    if (yellowTrue === true){
      if (document.getElementById(event.target.id).value === '' || document.getElementById(event.target.id).value === "0" ){
        if (document.getElementById(event.target.id).id === "YI0"){
          const currentColor =  document.querySelector('.row:nth-child(2) .col:nth-child(1)').style.borderColor;
          document.querySelector('.row:nth-child(2) .col:nth-child(1)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setYellowYI0(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "YI1"){
          const currentColor =  document.querySelector('.row:nth-child(2) .col:nth-child(2)').style.borderColor;
          document.querySelector('.row:nth-child(2) .col:nth-child(2)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setYellowYI1(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "YI2"){
          const currentColor =  document.querySelector('.row:nth-child(2) .col:nth-child(3)').style.borderColor;
          document.querySelector('.row:nth-child(2) .col:nth-child(3)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setYellowYI2(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "YI3"){
          const currentColor =  document.querySelector('.row:nth-child(2) .col:nth-child(4)').style.borderColor;
          document.querySelector('.row:nth-child(2) .col:nth-child(4)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setYellowYI3(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "YI4"){  
          const currentColor =  document.querySelector('.row:nth-child(2) .col:nth-child(5)').style.borderColor;
          document.querySelector('.row:nth-child(2) .col:nth-child(5)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setYellowYI4(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "YI5"){
          const currentColor =  document.querySelector('.row:nth-child(2) .col:nth-child(6)').style.borderColor;
          document.querySelector('.row:nth-child(2) .col:nth-child(6)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setYellowYI5(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "YI6"){
          const currentColor =  document.querySelector('.row:nth-child(2) .col:nth-child(7)').style.borderColor;
          document.querySelector('.row:nth-child(2) .col:nth-child(7)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setYellowYI6(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "YI7"){
          const currentColor =  document.querySelector('.row:nth-child(2) .col:nth-child(8)').style.borderColor;
          document.querySelector('.row:nth-child(2) .col:nth-child(8)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setYellowYI7(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "YI8"){
          const currentColor =  document.querySelector('.row:nth-child(2) .col:nth-child(9)').style.borderColor;
          document.querySelector('.row:nth-child(2) .col:nth-child(9)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setYellowYI8(combinedNumber);
          putNumber();
        }else{
          putNumber();
        }
      }else{
        alert("already Number")
      }
    }else{
      alert("you didn't click yellow")
    }
  };

  const purpleClick = (event) => {
    if (purpleTrue === true){
      if (document.getElementById(event.target.id).value === '' || document.getElementById(event.target.id).value === "0" ){
        if (document.getElementById(event.target.id).id === "PI0"){
          const currentColor =  document.querySelector('.row:nth-child(3) .col:nth-child(1)').style.borderColor;
          document.querySelector('.row:nth-child(3) .col:nth-child(1)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setPurplePI0(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "PI1"){
          const currentColor =  document.querySelector('.row:nth-child(3) .col:nth-child(2)').style.borderColor;
          document.querySelector('.row:nth-child(3) .col:nth-child(2)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setPurplePI1(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "PI2"){
          const currentColor =  document.querySelector('.row:nth-child(3) .col:nth-child(3)').style.borderColor;
          document.querySelector('.row:nth-child(3) .col:nth-child(3)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setPurplePI2(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "PI3"){
          const currentColor =  document.querySelector('.row:nth-child(3) .col:nth-child(4)').style.borderColor;
          document.querySelector('.row:nth-child(3) .col:nth-child(4)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setPurplePI3(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "PI4"){  
          const currentColor =  document.querySelector('.row:nth-child(3) .col:nth-child(5)').style.borderColor;
          document.querySelector('.row:nth-child(3) .col:nth-child(5)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setPurplePI4(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "PI5"){
          const currentColor =  document.querySelector('.row:nth-child(3) .col:nth-child(6)').style.borderColor;
          document.querySelector('.row:nth-child(3) .col:nth-child(6)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setPurplePI5(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "PI6"){
          const currentColor =  document.querySelector('.row:nth-child(3) .col:nth-child(7)').style.borderColor;
          document.querySelector('.row:nth-child(3) .col:nth-child(7)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setPurplePI6(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "PI7"){
          const currentColor =  document.querySelector('.row:nth-child(3) .col:nth-child(8)').style.borderColor;
          document.querySelector('.row:nth-child(3) .col:nth-child(8)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setPurplePI7(combinedNumber);
          putNumber();
        }else if (document.getElementById(event.target.id).id === "PI8"){
          const currentColor =  document.querySelector('.row:nth-child(3) .col:nth-child(9)').style.borderColor;
          document.querySelector('.row:nth-child(3) .col:nth-child(9)').style.borderColor = currentColor === 'white' ? 'black' : 'white';
          setPurplePI8(combinedNumber);
          putNumber();
        }else{
          putNumber();
        }
      }else{
        alert("already Number")
      }
    }else{
      alert("you didn't click purple")
    }
  };
  const EndTurn = () => {
    putNumber();
    setOrangeTrue(false);
    setYellowTrue(false);
    setPurpleTrue(false);
    setNumberRolled1(0);
    setNumberRolled2(0);
    setNumberRolled3(0);
    setRollAmount(0);
    getTotalDice();
  }
  const keep = () => {
    document.querySelector('.diceRow .diceCol:nth-child(1)').style.borderColor = "black";
    document.querySelector('.diceRow .diceCol:nth-child(2)').style.borderColor = "black";
    document.querySelector('.diceRow .diceCol:nth-child(3)').style.borderColor = "black";
    getTotalDice();
    setClicks(clicks + 1);
  };
  return (
    <div className="qwinto-board">
      <div className="row">
        {length.row1.map((score, col) => (
          <div key={col} className="col">
            <input className="inputstyle"               
            id={`OI${col}`}
            onClick={orangeClick} value={''} />
          </div>
        ))}
      </div>
      <div className="row">
        {length.row2.map((score, col) => (
          <div key={col} className="col">
            <input className="inputstyle"
            id={`YI${col}`}
            onClick={yellowClick} value={''} />
          </div>
        ))}
      </div>
      <div className="row">
        {length.row3.map((score, col) => (
          <div key={col} className="col">
            <input className="inputstyle" 
            id={`PI${col}`}
            onClick={purpleClick} value={''} />
          </div>
        ))}
      </div>
      <div className='negative'>
        <div className="negativeRow">
          {length.row4.map((score, col) => (
            <div key={col} className="negativeCol">
              <input className="inputstyle"
              id={`N${col}`}
              value={''} />
            </div>
          ))}
        </div>
      </div>
      <div className='score'>
        <div className="scoreRow">
          {length.row5.map((score, col) => (
            <div key={col} className="scoreCol">
              <input className="inputstyle"
              id={`S${col}`} 
              value={''} />
            </div>
          ))}
        </div>
      </div>
      <div className='dice'>
        <div className="diceRow">
          <div className="diceCol">
            <input className="inputstyle" id='orangebutton' onClick={rollOrange} value={numberRolled1} />
          </div>
          <div className="diceCol">
            <input className="inputstyle" onClick={rollYellow} value={numberRolled2} />
          </div>
          <div className="diceCol">
            <input className="inputstyle" onClick={rollPurple} value={numberRolled3} />
          </div>
          <div className="diceCol">
            <input className="inputstyle" id='total' value={combinedNumber} />
          </div>
        </div>
      </div>
      <div className='buttons'>
        <div className="buttonsRow">
          <div className='buttonsCol'>
            <button className='buttonsCol' onClick={Rolles}>
              {rollAmount > 0 ? 'Reroll' : 'Roll'}
            </button>
          </div>
          <div className='buttonsCol'>
              <button className='buttonsCol' id="keepButton" onClick={keep}>Keep Number</button>
          </div>
          <div className='buttonsCol'>
              <button className='buttonsCol' id="Save" onClick={EndTurn}>End Turn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QwintoBoard;