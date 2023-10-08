import { EmojiCharacter } from "../types/cake"; 


export class Emojis {
  get(): EmojiCharacter[] {
    return [
      {
        topimage: "https://www.pngkey.com/png/full/159-1596090_hat-baseball-cap-emoji-png.png",
        midimage: "https://raw.githubusercontent.com/mailubb/images/main/imagenes/cara1.png",
        bottomimage: "https://raw.githubusercontent.com/mailubb/images/main/imagenes/hand2.png"
      },

      {
        topimage: "https://raw.githubusercontent.com/mailubb/images/main/imagenes/hat2.png",
        midimage: "https://raw.githubusercontent.com/mailubb/images/main/imagenes/cara2.png",
        bottomimage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Emoji_u1f64f.svg/1200px-Emoji_u1f64f.svg.png"
      },

      {
        topimage: "https://raw.githubusercontent.com/mailubb/images/main/imagenes/hat1.png",
        midimage: "https://raw.githubusercontent.com/mailubb/images/main/imagenes/cara3.png",
        bottomimage: "https://raw.githubusercontent.com/mailubb/images/main/imagenes/hand3.png"
      }
    ];
  }
}

console.log(Emojis)

