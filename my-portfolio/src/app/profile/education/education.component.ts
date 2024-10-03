import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educationDetails = [
    {
      university: 'California State University-Sacramento',
      fromYear: '2021',
      toYear: '2024',
      degree: 'Master of Science in Computer Science',
    },
    {
      university: 'Osmania University',
      fromYear: '2015',
      toYear: '2019',
      degree: 'Bachelor of Technology in Computer Science',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
