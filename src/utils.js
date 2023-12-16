const labelMap = {
    1:{tag:'Hello', color:'red'},
    2:{tag:'Thank You', color:'yellow'},
    3:{tag:'I Love You', color:'lime'},
    4:{tag:'Yes', color:'blue'},
    5:{tag:'No', color:'purple'},
}

export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let lcv=0; lcv<=boxes.length; lcv++){
        if(boxes[lcv] && classes[lcv] && scores[lcv]>threshold){
            
            const [y,x,height,width] = boxes[lcv]
            const text = classes[lcv]
            
            


            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            
            // ctx.beginPath()
            // ctx.fillText(labelMap[text]['tag'] + ' - ' + Math.round(scores[lcv]*100)/100, x*imgWidth, y*imgHeight-10)
            // ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            // ctx.stroke()

            console.log(labelMap[text]['tag'] + ' - ' + Math.round(scores[lcv]*100)/100, x*imgWidth, y*imgHeight-10)
            console.log(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
        }
    }
}