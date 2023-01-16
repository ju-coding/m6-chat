import {onValue, ref, rtdb} from "./rtdb";
const API_BASE_URL = "http://localhost:3000"

const state = {
    data: {

    },
    listeners: [],
    getState(){
        return this.data
    },
    setState(newState){
        this.data = newState;
        for (const cb of this.listeners) {
            cb()
        }
        console.log("Soy el state, he cambiado", this.data);
    },
    subscribe(callback: (any) => any) {
        this.listeners.push(callback)
    }
}
export {state}