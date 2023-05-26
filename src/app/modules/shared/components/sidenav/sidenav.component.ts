import { MediaMatcher } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {


mobileQuery:MediaQueryList;

menuNav =[
  {name : "Inicio", route: "home" , icon:"home"},
  {name : "Personas", route: "home" , icon:"people"},
  {name : "Productos", route: "home" , icon:"home"}
]

constructor(media:MediaMatcher){
  this.mobileQuery= media.matchMedia('(max-width : 600px)');
}
shouldRun = true;

}
