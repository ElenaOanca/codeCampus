export class User{

  id: number;
  password: string;
  lastName: string;
  firstName: string;
  username: string;
  role: string;
  token: string;
  email:string;
  address:string;
  lastUpdate: Date;

  constructor(jsonString:string | null){

    if(jsonString!=null){

    let jsonObj = JSON.parse(jsonString);
    this.id = jsonObj.id;
    this.firstName = jsonObj.firstName;
    this.lastName = jsonObj.lastName;
    this.username = jsonObj.username;
    this.role = jsonObj.role;
    this.password = jsonObj.password;
    this.token = jsonObj.token;
    this.email = jsonObj.email;
    this.address = jsonObj.address;
    this.lastUpdate = new Date(jsonObj.lastUpdate) ;
  }
  }

}
