export interface Student {
  id?:string;
  ci:number;
  avatar?:string;
  name:string;
  lastName:string;
  location:string;
  score?:number;
  presenteeism?:number;
  courses?:number[];
  birth?:Date;
  bio?:string;
  online?:boolean;
}