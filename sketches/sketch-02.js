const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')


const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#F4B733';
    context.fillRect(0, 0, width, height);

    const cx = width *0.5;
    const cy =  height *0.5;
    const w = width * 0.001;
    const h = height * 0.1;
    let x,y;


    
    //context.translate(x,y); // translada el origen que antes estaba en 0,0 a donde esta el inicio de la figura 
    const num = 1;
    const radius = width *0.3;
    
    for(let i = 0; i<num; i++){
      const slice  = math.degToRad(360/num);
      const angle = slice*i;
      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);
      
      
      context.save();
      context.translate(cx*2,cy*2);
      context.rotate(-angle);
      context.scale(random.range(0.5,3),1)
      context.fillStyle = 'black';
      context.beginPath();
      context.rect(random.range(0.4,-w*0.9),random.range(0.2,-h*0.5),w,h*random.range(10,15));
      context.fill();  
      context.restore();
      
      context.save();
      context.translate(cx*0,cy*0);
      context.rotate(-angle);
      context.scale(random.range(0.5,3),1)
      context.fillStyle = 'black';
      context.beginPath();
      context.rect(random.range(0.4,-w*0.9),random.range(0.2,-h*0.5),w,h*random.range(1,8));
      context.fill();  
      context.restore();
      
      
      
      
      context.save();
      context.translate(cx,cy);
      context.rotate(-angle);
      context.lineWidth= random.range(1,5);
      
      context.beginPath();
      
      context.arc(0,0,radius*random.range(0.7,1.3),0,1);
      context.stroke();
      context.restore();
    };
  };
};

canvasSketch(sketch, settings);
