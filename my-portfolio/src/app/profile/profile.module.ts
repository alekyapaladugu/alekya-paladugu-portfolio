import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { SplitPipe } from './split.pipe';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './projectCard/project-card/project-card.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    ProfileComponent,
    SplitPipe,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
    ProjectsComponent,
    ProjectCardComponent,
  ],
  imports: [
    NgCircleProgressModule.forRoot({
      radius: 60,
      outerStrokeWidth: 8,
      outerStrokeColor: '#007bff',
      innerStrokeColor: '#e7e8ea',
      animation: true,
      animationDuration: 300,
    }),
    CarouselModule.forRoot(),
    CommonModule,
    FormsModule,
    DragDropModule,
  ],
  exports: [ProfileComponent, SplitPipe],
})
export class ProfileModule {}
