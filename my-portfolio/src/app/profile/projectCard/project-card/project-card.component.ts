import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/Project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project = {} as Project;
  showGitHUb = false;

  constructor() {}

  showGitHubLink() {
    if (this.isDesktop()) {
      this.showGitHUb = true;
    }
  }

  hideGitHubLink() {
    if (this.isDesktop()) {
      this.showGitHUb = false;
    }
  }

  toggleGitHubLink() {
    if (this.isMobileOrTablet()) {
      this.showGitHUb = !this.showGitHUb;
    }
  }

  private isDesktop(): boolean {
    return window.innerWidth > 1024; // Desktop devices
  }

  private isMobileOrTablet(): boolean {
    return window.innerWidth <= 1024; // Mobile and tablet devices
  }

  ngOnInit(): void {}
}
