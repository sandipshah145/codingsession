import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  number = null;
  anskgtogram = null;
  anskmtometer = null;
  kgtogram = false;
  kmtometer = false;
  anspnd=null;
  ansounce=null;
  ansft=null;
  ansmili=null;
  anscenti=null;
  ansmile=null;
ansinch=null;
ansmtk=null;
anskd=null;

constructor() { }

ngOnInit() {
}

onKgToGram(event: Event) {
  //console.log(event);
  this.number = (<HTMLInputElement>event.target).value;
  this.anskgtogram = (this.number*1000);
  this.anspnd = (this.number*2.20462262);
  this.ansounce = (this.number*35.2739619);
}
ongrntother(event: Event) {
  //console.log(event);
  this.number = (<HTMLInputElement>event.target).value;
  //this.anskgtogram = (this.number/1000);
  this.anspnd = (this.number*0.00220462262);//grm to pound
  this.ansounce = ((this.number*0.0352739619)/1);//gram to ounce
  this.anskd = (this.number/1000);//grma to kilogram
}
onpuntother(event: Event) {
  //console.log(event);
  this.number = (<HTMLInputElement>event.target).value;
  this.anskgtogram = (this.number*453.59237);//pound to g
  //this.anspnd = (this.number*0.45359237);//pound to kilogram
  this.ansounce = (this.number*16);//pound to ounce
  this.anskd = (this.number*0.45359237);//pound to kgram
}
ontoounce(event: Event) {
  //console.log(event);
  this.number = (<HTMLInputElement>event.target).value;
  this.anskgtogram = (this.number*28.3495231);//ounce to gram
  this.anspnd = (this.number*0.0625);//ounce to pound
  //this.ansounce = (this.number*35.2739619);
  this.anskd = (this.number*0.0283495231);//ounce to kilogram
}
kgToGram()
{
  this.kgtogram = true;
}
onKmToMeter(event: Event) {
  //console.log(event);
  this.number = (<HTMLInputElement>event.target).value;
  this.anskmtometer = (this.number*1000);
  this. ansft = (this.number*3280.8);  
  this. ansmili = (this.number*1000000);
  this. anscenti = (this.number*100000);
  this. ansmile= (this.number*0.62137);
  this. ansinch= (this.number*39370);

}
onmtother(event: Event)
{
  this.number = (<HTMLInputElement>event.target).value;
 // this.anskmtometer = (this.number*1000);
  this.ansmtk = (this.number*0.001);//m to km
  this. ansft = (this.number*3.2808399);// m to foot 
  this. ansmili = (this.number*1000);
  this. anscenti = (this.number*100);
  this. ansmile= (this.number*0.00745645431);
  this. ansinch= (this.number*472.440945);
}

oncntother(event: Event)
{
  this.number = (<HTMLInputElement>event.target).value;
  this.anskmtometer = (this.number/100);//cm to m
  this.ansmtk = (this.number/100000);//cm to km
  this. ansft = (this.number*0.032808399);//cm to ft  
  this. ansmili = (this.number*10);//cm to mm
//  this. anscenti = (this.number*100000);
  this. ansmile= (this.number*0.00062137);//cm to mile
  this. ansinch= (this.number*39.370);//cm to inch
}

oninchtother(event: Event)
{
  this.number = (<HTMLInputElement>event.target).value;
  this.anskmtometer = (this.number/39.370);//inch to m
  this.ansmtk = (this.number*0.000025);//inch to km
  this. ansft = (this.number*0.083333);  //inch to ft
  this. ansmili = (this.number/0.039370);//inch to mm
  this. anscenti = (this.number/0.39370);//inch to cm
  this. ansmile= (this.number*0.000015783);//inch to mile
 // this. ansinch= (this.number*39370);
}
onfoottother(event: Event)
{
  this.number = (<HTMLInputElement>event.target).value;
  this.anskmtometer = (this.number*0.3048);// to m
  this.ansmtk = (this.number*0.0003048);// to km
 // this. ansft = (this.number*4);  
  this. ansmili = (this.number*304.8);// to mil
  this. anscenti = (this.number*30.48); // to cnmi
  this. ansmile= (this.number*0.000189393939); // to mile
  this. ansinch= (this.number*12);// to inch
}
onmilitother(event: Event)
{
  this.number = (<HTMLInputElement>event.target).value;
  this.anskmtometer = (this.number*.001);// to m
  this.ansmtk = (this.number*0.000001);// to km
  this. ansft = (this.number*.0032808399); // to ft 
  //this. ansmili = (this.number*1000000);
  this. anscenti = (this.number*.1); // to cnt
  this. ansmile= (this.number*.0000006214); // to mile
  this. ansinch= (this.number*.03937); // inch
}
onmilestother(event: Event)
{
  this.number = (<HTMLInputElement>event.target).value;
  this.anskmtometer = (this.number*1609.344); // to m
  this.ansmtk = (this.number*1.609344); // to km
  this. ansft = (this.number*5280);  // to ft
  this. ansmili = (this.number*1609344); // to mil
  this. anscenti = (this.number*160934.4); // to centi
 // this. ansmile= (this.number*0.62137);
  this. ansinch= (this.number*63360); // to in
}


kmToMeter()
{
  this.kmtometer = true;
}
}
