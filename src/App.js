import React, { useState } from 'react'
import QrReader from 'react-qr-reader-es6';
import useSound from 'use-sound';
import beep from "./mp3/beep.mp3";
import Button from '@mui/material/Button';

function App() {
  const[result,setResult] = useState("Please scan first");
  const[openScan,setOpenSCan] = useState(false);
  const handleError = (err)=> console.log(err);
  
  const openScanner = ()=>{
    setOpenSCan(true);
  }
  const handleScan =  (data)=>{
    if(data){
      play();
      setOpenSCan(false);
    } 
    else  stop();
    setTimeout(1500);
    setResult(data);
  }
  const [play,{stop}] = useSound(beep);
  return (<>
           <Button onClick={openScanner} variant="contained">Scan</Button>
            {
            openScan && 
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{width:500,height: 500}}
            />}
            
        <p>{result}</p>
    </>
  )
}


export default App;