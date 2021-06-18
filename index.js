class Formatter {
  static capitalize(string){
    let words= string.split(" ")
    for(let i = 0; i < words.length; i++){
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    } return words.join(" ")
  }
  
  static sanitize(string){
    let words = string.split(" ")
    for(let i = 0; i < words.length; i++){
      words[i].toString()
      words[i] = words[i].replace(/[^-,'A-Za-z0-9]+/g, '')
    }return words.join(" ")
  }
   static titleize (string){
    let words = string.split(" ")
    return words.map(word => word[0].toUpperCase() + word.slice(1))
    
   }
}


 const titleize = string =>{
    let words = string.split(" ")
    return words.map(word => word[0].toUpperCase() + word.slice(1))
   }
    titleize("where the wild things are")


Formatter.capitalize("bursting balloon")