function drawStandingKirby(frame) {
    // ctx.fillRect(*UNIT,*UNIT,*UNIT,*UNIT);
    ctx.fillStyle = "black";
    ctx.fillRect(6*UNIT,0*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,1*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,2*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,3*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(1*UNIT,5*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(0*UNIT,6*UNIT,1*UNIT,4*UNIT); 
    ctx.fillRect(1*UNIT,10*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,11*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,10*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,12*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,13*UNIT,1*UNIT,1*UNIT);   
    ctx.fillRect(1*UNIT,14*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,15*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,13*UNIT,7*UNIT,1*UNIT);
    ctx.fillRect(7*UNIT,14*UNIT,4*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,15*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,14*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(14*UNIT,13*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(12*UNIT,12*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,10*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(13*UNIT,11*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(13*UNIT,10*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,6*UNIT,1*UNIT,5*UNIT);
    ctx.fillRect(14*UNIT,4*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(13*UNIT,2*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(11*UNIT,1*UNIT,2*UNIT,1*UNIT);
    // ctx.fillRect(9*UNIT,5*UNIT,1*UNIT,3*UNIT);
    // ctx.fillRect(11*UNIT,5*UNIT,1*UNIT,3*UNIT);
  
    ctx.fillStyle = "#F6C2E4"; // Light Pink
    ctx.fillRect(7*UNIT,1*UNIT,3*UNIT,4*UNIT);
    ctx.fillRect(5*UNIT,2*UNIT,2*UNIT,6*UNIT);
    ctx.fillRect(7*UNIT,2*UNIT,2*UNIT,6*UNIT);
    ctx.fillRect(4*UNIT,3*UNIT,1*UNIT,6*UNIT);
    ctx.fillRect(3*UNIT,4*UNIT,1*UNIT,7*UNIT);
    ctx.fillRect(2*UNIT,5*UNIT,1*UNIT,5*UNIT);
    ctx.fillRect(1*UNIT,7*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(5*UNIT,8*UNIT,1*UNIT,4*UNIT);
    ctx.fillRect(7*UNIT,12*UNIT,4*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,9*UNIT,4*UNIT,3*UNIT);
    ctx.fillRect(8*UNIT,8*UNIT,4*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,2*UNIT,2*UNIT,3*UNIT);
    ctx.fillRect(10*UNIT,5*UNIT,1*UNIT,5*UNIT);
    ctx.fillRect(12*UNIT,3*UNIT,1*UNIT,5*UNIT);
    ctx.fillRect(13*UNIT,6*UNIT,2*UNIT,2*UNIT);
    ctx.fillRect(11*UNIT,9*UNIT,2*UNIT,2*UNIT);
    ctx.fillRect(10*UNIT,11*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(14*UNIT,8*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(3*UNIT,4*UNIT,11*UNIT,4*UNIT);
 
    ctx.fillStyle = "ED6CCB"; // Purple
    ctx.fillRect(6*UNIT,1*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,2*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,3*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,6*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,9*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,10*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,9*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,8*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,12*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,13*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,14*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(11*UNIT,14*UNIT,4*UNIT,1*UNIT);
    ctx.fillRect(12*UNIT,13*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(11*UNIT,12*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(12*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(14*UNIT,10*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(13*UNIT,9*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(12*UNIT,8*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(13*UNIT,4*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(12*UNIT,2*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,1*UNIT,1*UNIT,1*UNIT);

    ctx.fillStyle = "black";
    if(frame==1){
        ctx.fillRect(9*UNIT,5*UNIT,1*UNIT,3*UNIT);
        ctx.fillRect(11*UNIT,5*UNIT,1*UNIT,3*UNIT);
    }else if(frame==2) {
        ctx.fillRect(8*UNIT,6*UNIT,2*UNIT,1*UNIT)
        ctx.fillRect(11*UNIT,6*UNIT,2*UNIT,1*UNIT)

    }    
}

function drawWalkingKirby(frame){
    if(frame==1){
        ctx.fillStyle = "#F6C2E4"; // light pink
        ctx.fillRect(5*UNIT,1*UNIT,5*UNIT,12*UNIT);
        ctx.fillRect(3*UNIT,2*UNIT,9*UNIT,1*UNIT);
        ctx.fillRect(4*UNIT,3*UNIT,8*UNIT,9*UNIT);
        ctx.fillRect(1*UNIT,4*UNIT,12*UNIT,4*UNIT);
        ctx.fillRect(2*UNIT,9*UNIT,11*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,8*UNIT,11*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,10*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(14*UNIT,4*UNIT,1*UNIT,4*UNIT);

        ctx.fillStyle = "black";
        ctx.fillRect(8*UNIT,4*UNIT,1*UNIT,3*UNIT);
        ctx.fillRect(10*UNIT,4*UNIT,1*UNIT,3*UNIT);
        ctx.fillRect(9*UNIT,9*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(5*UNIT,0*UNIT,5*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,1*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,2*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,3*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(0*UNIT,4*UNIT,1*UNIT,4*UNIT);
        ctx.fillRect(1*UNIT,8*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,9*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(0*UNIT,10*UNIT,1*UNIT,2*UNIT);
        ctx.fillRect(1*UNIT,12*UNIT,1*UNIT,2*UNIT);
        ctx.fillRect(2*UNIT,14*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,15*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,10*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,11*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(4*UNIT,12*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(5*UNIT,13*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(5*UNIT,14*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(5*UNIT,13*UNIT,5*UNIT,1*UNIT);
        ctx.fillRect(10*UNIT,1*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,2*UNIT,1*UNIT,2*UNIT);
        ctx.fillRect(12*UNIT,3*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(13*UNIT,4*UNIT,1*UNIT,6*UNIT);
        ctx.fillRect(15*UNIT,4*UNIT,1*UNIT,4*UNIT);
        ctx.fillRect(14*UNIT,8*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,10*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,11*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(15*UNIT,11*UNIT,1*UNIT,2*UNIT);
        ctx.fillRect(10*UNIT,12*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(10*UNIT,14*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(13*UNIT,13*UNIT,2*UNIT,1*UNIT);

        ctx.fillStyle = "ED6CCB"; // purple   
        ctx.fillRect(5*UNIT,1*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(9*UNIT,1*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,2*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(11*UNIT,2*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,4*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(4*UNIT,4*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,4*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,7*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(5*UNIT,7*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(11*UNIT,7*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(14*UNIT,7*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,8*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,9*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,9*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(11*UNIT,11*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(5*UNIT,12*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(9*UNIT,12*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,10*UNIT,1*UNIT,2*UNIT);
        ctx.fillRect(2*UNIT,11*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,12*UNIT,2*UNIT,2*UNIT);
        ctx.fillRect(3*UNIT,13*UNIT,2*UNIT,2*UNIT);
        ctx.fillRect(10*UNIT,13*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,12*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(13*UNIT,11*UNIT,2*UNIT,1*UNIT);

    }else if(frame==2){
        ctx.fillStyle="black";
        ctx.fillRect(5*UNIT,1*UNIT,6*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,2*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,3*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,4*UNIT,1*UNIT,2*UNIT);
        ctx.fillRect(0*UNIT,6*UNIT,1*UNIT,4*UNIT);
        ctx.fillRect(1*UNIT,10*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,11*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,11*UNIT,1*UNIT,3*UNIT);
        ctx.fillRect(4*UNIT,12*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(4*UNIT,9*UNIT,1*UNIT,2*UNIT);
        ctx.fillRect(4*UNIT,14*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(5*UNIT,15*UNIT,6*UNIT,1*UNIT);
        ctx.fillRect(5*UNIT,13*UNIT,7*UNIT,1*UNIT);
        ctx.fillRect(9*UNIT,14*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(11*UNIT,14*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,12*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(13*UNIT,5*UNIT,1*UNIT,7*UNIT);
        ctx.fillRect(11*UNIT,2*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,3*UNIT,1*UNIT,2*UNIT);
        ctx.fillRect(14*UNIT,6*UNIT,1*UNIT,5*UNIT);
        ctx.fillRect(10*UNIT,10*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(9*UNIT,5*UNIT,1*UNIT,3*UNIT);
        ctx.fillRect(11*UNIT,5*UNIT,1*UNIT,3*UNIT);
        
        ctx.fillStyle = "ED6CCB"; // purple
        ctx.fillRect(5*UNIT,2*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(10*UNIT,2*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,3*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,4*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(4*UNIT,8*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(6*UNIT,8*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,8*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,9*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,10*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(4*UNIT,11*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(5*UNIT,12*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(4*UNIT,13*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(5*UNIT,14*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(10*UNIT,14*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(11*UNIT,12*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,11*UNIT,1*UNIT,1*UNIT);
        
        ctx.fillStyle = "#F6C2E4"; // light pink
        ctx.fillRect(6*UNIT,2*UNIT,4*UNIT,3*UNIT);
        ctx.fillRect(4*UNIT,3*UNIT,8*UNIT,2*UNIT);
        ctx.fillRect(3*UNIT,4*UNIT,1*UNIT,7*UNIT);
        ctx.fillRect(2*UNIT,5*UNIT,7*UNIT,3*UNIT);
        ctx.fillRect(1*UNIT,6*UNIT,1*UNIT,3*UNIT);
        ctx.fillRect(2*UNIT,8*UNIT,1*UNIT,2*UNIT);
        ctx.fillRect(5*UNIT,8*UNIT,1*UNIT,4*UNIT);
        ctx.fillRect(6*UNIT,9*UNIT,4*UNIT,4*UNIT);
        ctx.fillRect(8*UNIT,8*UNIT,4*UNIT,2*UNIT);
        ctx.fillRect(10*UNIT,5*UNIT,1*UNIT,3*UNIT);
        ctx.fillRect(12*UNIT,5*UNIT,1*UNIT,3*UNIT);
        ctx.fillRect(10*UNIT,11*UNIT,1*UNIT,2*UNIT);
        ctx.fillRect(11*UNIT,10*UNIT,1*UNIT,2*UNIT);
        ctx.fillRect(12*UNIT,9*UNIT,1*UNIT,2*UNIT);
        // ctx.fillRect(*UNIT,*UNIT,*UNIT,*UNIT);
        // ctx.fillRect(*UNIT,*UNIT,*UNIT,*UNIT);
        // ctx.fillRect(*UNIT,*UNIT,*UNIT,*UNIT);
        // ctx.fillRect(*UNIT,*UNIT,*UNIT,*UNIT);
        // ctx.fillRect(*UNIT,*UNIT,*UNIT,*UNIT);
        // ctx.fillRect(*UNIT,*UNIT,*UNIT,*UNIT);
        // ctx.fillRect(*UNIT,*UNIT,*UNIT,*UNIT);

    


         
    
    }

}

