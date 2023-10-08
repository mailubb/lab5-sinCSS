import { changeFace, changeHands, changeHead } from "../../redux/actions";
import { dispatch } from "../../redux/store";
import { appState } from "../../redux/store";


export enum AttributesTop{
    "top" = "top" ,
    "mid" = "mid",
    "bottom" = "bottom"
}

class TopButton extends HTMLElement {
	top?: string;
	mid?: string;
    bottom?: string;

	static get observedAttributes() {
		const attrs: Record<AttributesTop, null> = {
			top: null,
			mid: null,
			bottom: null
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributesTop, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
			}
			this.mount();
		}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.mount();
	}

	mount() {
		this.render();
		//Seleccionar mi boton (button con el background de la img)
		const btn = this.shadowRoot?.querySelector('button');
		btn?.addEventListener('click', () => {
			if (this.top){
				dispatch(changeHead(
					this.top
				));
			} else if (this.mid){
				dispatch(changeFace(
					this.mid
				));
			} else if (this.bottom){
				dispatch(changeHands(
					this.bottom
				));
			}
		});
	}

	render() {
		if (this.shadowRoot){
			this.shadowRoot.innerHTML = ``

			const buttonEmojis = this.ownerDocument.createElement("button")
			const buttonImage = this.ownerDocument.createElement("img")
			buttonImage.setAttribute("src", `${this.top || this.mid || this.bottom}` )

			buttonEmojis.appendChild(buttonImage)
			this.shadowRoot?.appendChild(buttonEmojis)
			}
		}
}	  

customElements.define("top-button", TopButton);
export default TopButton