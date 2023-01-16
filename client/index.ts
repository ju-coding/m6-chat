
import "./pages/home"
import "./pages/chat"
import "./router"

// function conectarAlChatroom() {
//     fetch(API_BASE_URL+"/chatroom", {
//         method:"post"
//     }).then(res=>{
//         return res.json()
//     }).then(data=>{
//         const chatrooms = ref(rtdb, "/chatrooms/" + data.id);
//         onValue(chatrooms, (snapshot) =>{
//             const valor = snapshot.val();
//             document.querySelector(".id").innerHTML = data.id;
//             document.querySelector(".root").innerHTML = JSON.stringify(valor);
//         })
        
//     })
// }

// (function(){
//     const button = document.querySelector(".conectar")
//     button?.addEventListener("click", conectarAlChatroom)
// })()