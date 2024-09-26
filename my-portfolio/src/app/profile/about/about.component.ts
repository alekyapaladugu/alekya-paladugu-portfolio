import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    // Fade-in animation for text
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  aboutMe: string[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.aboutMe = this.profileService.getAboutInfo();
  }
}
