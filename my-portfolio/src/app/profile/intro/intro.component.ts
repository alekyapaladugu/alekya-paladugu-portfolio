import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  cvUrl: any;
  constructor() {}

  ngOnInit(): void {
    this.cvUrl =
      'https://drive.google.com/file/d/1G07n8rxna8EzOOTzm8aBIFH_YG8cGyq8/view?usp=sharing';
    const options = {
      strings: [
        'Software Engineer',
        'Frontend Developer',
        "Computer Science Master's student",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed('#typed-text', options);
  }
}
