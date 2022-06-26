import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  cvUrl: any;
  constructor() {}

  ngOnInit(): void {
    this.cvUrl = '.././assets/media/alekya full job resume.pdf';
  }
}
