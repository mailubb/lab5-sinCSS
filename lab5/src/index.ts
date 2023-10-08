import "./screens/dashboard"
import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({ mode: "open" });
   }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot){
        const dashboard = this.ownerDocument.createElement("dashboard-app")
        this.shadowRoot?.appendChild(dashboard)
        }
    }
}

customElements.define("app-container", AppContainer)