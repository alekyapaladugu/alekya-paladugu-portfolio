import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  about2 = `Software Developer with 5 years of experience .  
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Javascript, React, Angular, jQuery and UI with Responsive Designs .
 Have good understanding of Python, Flask, SQLAlchemy, Microsoft SQL Server.`;
  about =
    'Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.';

  exprienceData: any = [
    {
      id: 1,
      company: 'Office of Water Programs,',
      location: 'California',
      timeline: 'Oct 2023 to Present',
      role: 'Software Engineer',
      work: `Technologies : JavaScript, React, Python, Flask, SQLAlchemy, MSSQL Server . 
      Developed website from scratch for the State Water Board of California for detection of PFAS chemical in water using React, Material UI, and Tailwind CSS, improving user interface consistency .
      Created high-performance REST APIs with Python, Flask, and MSSQL utilizing SQLAlchemy to optimize database operations for improved efficiency and scalability .
      Improved SQL Server join operations and boosted database query efficiency by 60% through the implementation of indexes on frequently queried columns, enhancing overall feature performance .
      Proposed and implemented the Render Prop design pattern and custom hooks, significantly enhancing code reusability and maintainability across the project.`,
    },
    {
      id: 2,
      company: 'Accenture',
      location: 'India',
      timeline: 'Dec 2021 to May 2022',
      role: 'Application Development Senior Analyst',
      work: `Technologies : JavaScript, Spartacus, SAP Hybris, Angular, HTML, CSS, KendoUI . 
      Led the development of Heineken Mexico storefront playing a pivotal role in Sprint Planning and estimation of User stories following Agile Principles .
      Participated in digitalizing Heineken B2B enterprise using SAP Commerce Cloud Solution enabling advanced CRM and delivered engaging shopping experiences across multiple channels (web,tablet and mobile) .
      Migrated Intel Web Order Management (WOM) legacy storefront to Spartacus Angular Storefront and leveraged the SAP Commerce Cloud CMS tool, SmartEdit for page content providing personalized customer experience .
      Mentored and guided 2 junior developers, performing thorough code reviews to uphold best practices and coding standards .
      Collaborated closely with product managers and key stakeholders to define and prioritize project requirements, driving alignment and execution for a development team of 7 members.`,
    },
    {
      id: 3,
      company: 'Accenture',
      location: 'India',
      timeline: 'Nov 2020 to Dec 2021',
      role: 'Digital Tech Developer Analyst',
      work: `Technologies : JavaScript, Spartacus, SAP Hybris, Angular, HTML, CSS, KendoUI . 
      Spearheaded the development of Single Page Applications using HTML5, CSS3, and JavaScript, with expertise in Angular and React frameworks, enhancing user experience and application performance .
      Participated in agile development processes, including sprint planning, daily stand-ups, and retrospective meetings, which improved team collaboration and project delivery timelines .
      Created a global stylesheet (colors, dropdowns, search dropdowns, favorites, links, forms) for maintaining consistency across pages of websites that led to a reduction in duplication of code by 60% and improved code reuse .
      Achieved a 50% boost in page speed by eliminating redundant AJAX API calls, implementing lazy loading of images, refactoring code, and compressing resources using tools like Webpack `,
    },
    {
      id: 4,
      company: 'Accenture',
      location: 'India',
      timeline: 'Nov 2018 to Nov 2020',
      role: 'Associate Software Engineer',
      work: `Technologies : JavaScript, Spartacus, SAP Hybris, Angular, HTML, CSS, KendoUI . 
      Developed MEAN and MERN applications during training, enhancing skills in JavaScript frameworks and improving code quality .
      Implemented pages using JavaScript, jQuery, and AJAX calls to APIs, improving user interaction and page load times .
      Debugged code and pushed defect fixes, ensuring high performance and reliability in the software`,
    },
  ];

  experience(): Observable<any> {
    return this.exprienceData;
  }

  skillsData: any = [
    {
      id: '1',
      skill: 'JAVASCRIPT',
      progress: '80%',
    },
    {
      id: '2',
      skill: 'REACT',
      progress: '70%',
    },
    {
      id: '3',
      skill: 'ANGULAR',
      progress: '70%',
    },
    {
      id: '4',
      skill: 'NODE',
      progress: '60%',
    },

    {
      id: '5',
      skill: 'JQUERY',
      progress: '70%',
    },
    {
      id: '6',
      skill: 'HTML',
      progress: '80%',
    },
    {
      id: '7',
      skill: 'CSS',
      progress: '80%',
    },
    {
      id: '8',
      skill: 'PYTHON',
      progress: '60%',
    },
    {
      id: '9',
      skill: 'FLASK',
      progress: '60%',
    },
    {
      id: '10',
      skill: 'SQL SERVER',
      progress: '70%',
    },
  ];

  skills(): Observable<any> {
    return this.skillsData;
  }
}
