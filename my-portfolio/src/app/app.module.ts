import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
// const routes: Routes = [
//   {
//     path: ' ',
//     component: ProfileComponent,
//   },
// ];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    // RouterModule.forRoot(routes, {
    //   initialNavigation: 'enabled',
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
