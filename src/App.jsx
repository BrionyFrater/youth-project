import "./App.css";
import React, { useRef, useEffect, useState } from "react";
//import Webcam from "react-webcam";
//import { drawRect } from "./utils";
//import * as tf from "@tensorflow/tfjs";

import Header from "./components/header";
import First from "./first";
 

function App() {
  // const webcamRef = useRef(null);
  // const canvasRef = useRef(null);


  // const runNetwork = async () => {

  //   const network = await tf.loadGraphModel('https://storage.googleapis.com/youth_model/model.json')
    
  //   //  Loop and detect hands
  //   setInterval(() => {
  //     detect(network);
  //   }, 10);
  // };

  // const detect = async (network) => {
  //   // Check data is available
  //   if (
  //     typeof webcamRef.current !== "undefined" &&
  //     webcamRef.current !== null &&
  //     webcamRef.current.video.readyState === 4
  //   ) {
  //     // Get Video Properties
  //     const video = webcamRef.current.video;
  //     const videoWidth = webcamRef.current.video.videoWidth;
  //     const videoHeight = webcamRef.current.video.videoHeight;

  //     // Set video width
  //     webcamRef.current.video.width = videoWidth;
  //     webcamRef.current.video.height = videoHeight;

  //     // Set canvas height and width
  //     canvasRef.current.width = videoWidth;
  //     canvasRef.current.height = videoHeight;


  //     const img = tf.browser.fromPixels(video)
  //     const resized = tf.image.resizeBilinear(img, [640,480])
  //     const casted = resized.cast('int32')
  //     const expanded = casted.expandDims(0)
  //     const obj = await network.executeAsync(expanded)
  //     //console.log(obj)
  //     const boxes = await obj[1].array()
  //     const classes = await obj[2].array()
  //     const scores = await obj[4].array()
      

      
  //     // Draw mesh
  //     const ctx = canvasRef.current.getContext("2d");

  //     // 5. TODO - Update drawing utility
  //     //drawSomething(obj, ctx)  
  //     requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)}); 

  //     //take out so they dont hog memory
  //     tf.dispose(img)
  //     tf.dispose(resized)
  //     tf.dispose(casted)
  //     tf.dispose(expanded)
  //     tf.dispose(obj)

  //   }
  // };

  // useEffect(()=>{
  //   runNetwork()
  // },[]);

  return (
    <>

    <Header/>
    <First/>
    
    {/* <div className="flex w-full justify-center items-center py-8">
     
        <Webcam
          ref={webcamRef}
          muted={true} 
          mirrored={true}
          className="absolute text-center z-[4] rounded-lg"
          style={{
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />


      
    </div> */}

    

    <div id="video" className="flex w-full items-center justify-center">
      <div className="w-[640px] h-[480px] bg-black rounded-lg"></div>
    </div>
    </>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import * as tf from "@tensorflow/tfjs";
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
  
//   return (
//     <div className="text-4xl flex w-full h-screen text-blue-700 justify-center items-center">
//       Pain
//     </div>
//   )
// }

// export default App



