import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/Project';
import { Tag } from 'src/app/_models/Tag';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: any;
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.projects = this.profileService.GetProjects();
  }
}
