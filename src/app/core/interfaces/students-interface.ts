export interface Student {
  ci:number;
  avatar?:string;
  name:string;
  lastName:string;
  location:string;
  score?:number;
  presenteeism?:number;
  courses?:number[];
  careers?:number[];
  birth?:Date;
  bio?:string;
  online?:boolean;
}