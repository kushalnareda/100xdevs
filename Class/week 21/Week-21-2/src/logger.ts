
import {GameManager} from './store';

export function startLogger(){
    setInterval (()=>{
        setInterval(() => {
            console.log(games);
        }, 4000)
    })
}