function counter() {
    const humanDate = new Date();

    let minutes, seconds;
    function minAndsec(){
        minutes = humanDate.getMinutes();
        seconds = humanDate.getSeconds(); 
    }

    if(humanDate.getHours()==24){
        const hours =  12 ;
        minAndsec();

        const formattedTime = `${hours}:${minutes}:${seconds} am`;
        console.log(formattedTime); 
    }
    
    if (humanDate.getHours() > 12 && humanDate.getHours()<24){
        const hours = humanDate.getHours() - 12 ;
        minAndsec();

        const formattedTime = `${hours}:${minutes}:${seconds} pm`;
        console.log(formattedTime); 
    }

    else{
        const hours = humanDate.getHours();
        minAndsec();

        const formattedTime = `${hours}:${minutes}:${seconds} am`;
        console.log(formattedTime);
    }

}
setInterval(counter, 1000);