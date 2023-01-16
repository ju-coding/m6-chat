import {Router} from "@vaadin/router";

class Home extends HTMLElement {
    
    conectedCallback(){
        
        this.render()
        this.addListeners()
        
    }
    addListeners(){
        const form = this.querySelector(".form")
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            const target = e.target as any
            console.log(target.nombre.value);
            Router.go("/chat")
        })
    }
    render() {
        
        this.innerHTML = `
        <form class="form">
        <div>
            <label for="">Tu nombre</label>
        </div>
        <input type="text" name="nombre">
        <button>Comenzar</button>
        </form>
        `;
        
        const style = document.createElement("style");
        style.innerHTML = `
        .container{
            margin: 30px;
        }
        `;

        this.append(style)
    }
}
customElements.define("home-page", Home)