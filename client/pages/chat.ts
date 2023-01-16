class Chat extends HTMLElement {
    shadow = this.attachShadow({mode: "open"});
    conectedCallback(){
        
        this.render()
        this.addListeners()
    }
    addListeners(){
        const form = this.querySelector(".submit-message")
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            const target = e.target as any
            console.log(target.message.value);
            
        })
    }

    render() {

        const div = document.createElement('div')
        div.className = "container"
        div.innerHTML = `
        <form class="submit-message">

        <input type="text" name="message">
        <button>Enviar</button>
        </form>
        `

        const style = document.createElement("style");
        style.innerHTML = ``

        this.shadow.append(div)
        this.shadow.append(style)
    }
}
customElements.define("chat-page", Chat)