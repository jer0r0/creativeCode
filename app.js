let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle ="#F9F6EE"
//context.fillRect(100,100,400,400);
// (w,x,y,z) w=x when start, x=when start, y= xwhen start drawing, z=y when finish drawing

context.lineWidth=4;
context.beginPath();
context.rect(100,100,400,400);
//context.stroke();

context.beginPath();
context.arc(300,300,100, 0,Math.PI*2);
// 200 in this case is the radious of the arc
//context.stroke();

let favBandas = ['nirvana', 'the beatles','los petitfellas','nicolas y los fumadores'];
let favMusica = ['teen spirit', 'help','los verbos','NPi'];

function listArtistas(){
    for(let i = 0; i < favBandas.length; i++){
        console.log(favBandas[i]);
        console.log(favMusica[i]);
        console.log('\n');
        
    }
}
listArtistas();
