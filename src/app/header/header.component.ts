import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Input ist ein Annonation extra Eigensacht einer Variable oder Funktion damit wir dieser Variable außerhalb deiser datein nutzen können
  @Input() darkmode = true;
  constructor() { }

  ngOnInit(): void {
  }

}
