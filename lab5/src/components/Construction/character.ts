import "../export"

class CharacterContainer extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = '';

        const characterContenedor = document.createElement("row-buttons");
        this.shadowRoot?.appendChild(characterContenedor);
    }
}

customElements.define("character-container", CharacterContainer);
export default CharacterContainer;
