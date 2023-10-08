import { addObserver, appState } from "../../src/redux/store"
import { CharacterButtons} from "../components/export";
import  "../components/export"


class Dashboard extends HTMLElement {

	buttonsRowdata: CharacterButtons[] = []

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this)
	}

	connectedCallback() {
		this.render();
	}

    render(){
        if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `<p>chao</p>
			
			`

			const characterContainer = document.createElement("character-container")
			this.shadowRoot?.appendChild(characterContainer)

			this.buttonsRowdata.forEach((container) => {
				this.shadowRoot?.appendChild(container)
			})

			const emoji = this.ownerDocument.createElement("div")
			
			const sombreroDiv = this.ownerDocument.createElement ("img")
			const caraDiv = this.ownerDocument.createElement ("img")
			const handsDiv = this.ownerDocument.createElement ("img")

			sombreroDiv.src = appState.top
			caraDiv.src = appState.mid
			handsDiv.src = appState.bottom

			emoji.appendChild(sombreroDiv)
			emoji.appendChild(caraDiv)
			emoji.appendChild(handsDiv)

			this.shadowRoot?.appendChild(emoji)

		}
		
    }
}

customElements.define("dashboard-app", Dashboard)
export default Dashboard