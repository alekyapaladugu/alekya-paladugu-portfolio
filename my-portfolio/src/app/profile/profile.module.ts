import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { ProfileComponent } from './profile.component';
import { IntroModule } from './intro/intro.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, HeaderModule, IntroModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}
