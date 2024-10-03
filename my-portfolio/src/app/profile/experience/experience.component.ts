import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/_models/Tag';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  constructor() {}
  tags = [] as Tag[];

  ngOnInit(): void {}
}
