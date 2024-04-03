

//export per far vedere la classe al progetto
export  class Corso {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
  img: string;

  constructor(JsonString: string | null){
    //controllo che la string/json non sia null
    if(JsonString!=null){

      let jsonObj = JSON.parse(JsonString);
      this.id = jsonObj.id;
      this.name = jsonObj.name;
      this.description = jsonObj.description;
      this.duration = jsonObj.duration;
      this.price = jsonObj.price;
      this.category = jsonObj.category;
      this.img = jsonObj.img;
    }
  }

  /*fromJsonToObject(JsonString: string){
    let jsonObj = JSON.parse(JsonString);
    return  jsonObj as Corso;
  }*/

}
