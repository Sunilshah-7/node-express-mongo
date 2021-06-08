var rect = require('./rectangle');

function solveRect(l,b){
    console.log("-------------------------");
    console.log("Solving for l="+l+" and b="+b);
    
    rect(l,b,(error,rectangle)=>{
        if(error){
            console.log(error.message);
        }
        else{
            console.log("Area of the rectangle with l= "+l+" and b= "+b+ " is "+rectangle.area());
            console.log("Perimeter of the rectangle with l= "+l+" and b= "+b+ " is "+rectangle.perimeter());
        }
    })
}

solveRect(1,2);
solveRect(3,4);
solveRect(-1,3);