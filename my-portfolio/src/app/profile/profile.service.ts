import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  about2 = `Software Developer with 3.5 years of experience .  
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 12, Javascript,  jQuery and UI with Responsive Designs .
  Have good understanding of Bootstrap, MYSQL`;
  about =
    'Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.';

  exprienceData: any = [
    {
      id: 1,
      company: 'Accenture',
      location: 'Hyderabad',
      timeline: 'Nov 2018 to May 2022',
      role: 'Frontend  Developer',
      work: `Technologies : JavaScript, Angular 12 , jQuery , HTML, CSS, Bootstrap . 
      3.5 years of experience in developing E-commerce web applications using HTML, CSS and JavaScript .
      Experience in developing Single Page Applications using Angular with no compromise in accessibility by using ARIA .
      Developed Components dynamically by populating data from REST APIs using RxJS .
      Used KendoUI for creating grids, dropdowns, datepicker .
      Experience in understanding user story from Product Manager & UX Engineer and develop features that meet all acceptance criteria of Product Owner .
      Implemented dynamic pages by using jQuery and making AJAX calls to the REST APIs .
      Was a key player in the Performance team for improving the stability of the websites .
      Designed pixel-perfect, robust and accessible user interfaces on the web with high quality .
      Developed responsive websites that adjust depending on the screen size .
      Worked in pushing or deleting objects on occurrence of user events for Analytics .
      Involved in Code Debugging and pushing defect fix with high performance environment. `,
    },
  ];

  experience(): Observable<any> {
    return this.exprienceData;
  }

  skillsData: any = [
    {
      id: '1',
      skill: 'ANGULAR 12',
      progress: '85%',
    },
    {
      id: '2',
      skill: 'JAVASCRIPT JQUERY',
      progress: '80%',
    },
    {
      id: '3',
      skill: 'HTML',
      progress: '75%',
    },
    {
      id: '2',
      skill: 'CSS',
      progress: '70%',
    },
  ];

  skills(): Observable<any> {
    return this.skillsData;
  }
}
