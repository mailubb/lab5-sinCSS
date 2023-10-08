import { AttributesTop } from "../Minibutton/button"
import TopButton from "../Minibutton/button"
import {Emojis} from "../../service/dataEmoji"



class CharacterButtons extends HTMLElement{
constructor(){
    super()
    this.attachShadow({mode:"open"});
    }

    connectedCallback(){
    this.render()
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML= '';

        const sombreroRow = document.createElement("div") 
        const caraRow = document.createElement("div") 
        const manosRow = document.createElement("div") 
        

        const EmojiInstance = new Emojis()
        const Emojidata = EmojiInstance.get()

        for (let i = 0; i < 3; i++){
                const HatButton = document.createElement("top-button") as TopButton
                HatButton.setAttribute(AttributesTop.top, Emojidata[i].topimage)
                sombreroRow.appendChild(HatButton)
        }

        for (let i = 0; i < 3; i++){
                const FaceButton = document.createElement("top-button") as TopButton
                FaceButton.setAttribute(AttributesTop.mid, Emojidata[i].midimage)
                caraRow.appendChild(FaceButton)
            }

        for (let i = 0; i < 3; i++){
                const HandButton = document.createElement("top-button") as TopButton
                HandButton.setAttribute(AttributesTop.bottom,Emojidata[i].bottomimage )
                manosRow.appendChild(HandButton)
            }

        this.shadowRoot?.appendChild(sombreroRow)
        this.shadowRoot?.appendChild(caraRow)
        this.shadowRoot?.appendChild(manosRow)

    }
    
}



customElements.define("row-buttons", CharacterButtons)
export default CharacterButtons