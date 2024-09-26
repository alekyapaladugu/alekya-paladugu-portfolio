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
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DragDropModule } from '@angular/cdk/drag-drop';
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
    ProjectModalComponent,
  ],
  imports: [
    CarouselModule.forRoot(),
    CommonModule,
    FormsModule,
    DragDropModule,
  ],
  exports: [ProfileComponent, SplitPipe],
})
export class ProfileModule {}
