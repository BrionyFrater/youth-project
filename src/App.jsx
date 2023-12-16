import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import { nextFrame } from "@tensorflow/tfjs";
// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";
import {drawRect} from "./utils"; 

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);


  const runCoco = async () => {

    const net = await tf.loadGraphModel('https://storage.googleapis.com/youth_model/model.json')
    
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640,480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)
      //console.log(obj)

      const boxes = await obj[1].array()
      const classes = await obj[2].array()
      const scores = await obj[4].array()
      

      
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      //drawSomething(obj, ctx)  
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)}); 

      //take out so they dont hog memory
      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)

    }
  };

  useEffect(()=>{runCoco()},[]);

  return (
    <div className="flex w-full justify-center">
      
      <header className="">
        <Webcam
          ref={webcamRef}
          muted={true} 
          mirrored={true}
          className="relative text-center z-[9] rounded-md"
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
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />


      </header>
    </div>
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



