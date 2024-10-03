import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  currentSkill: any = null;

  developmentSkills = [
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      percentage: 80,
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      percentage: 75,
    },
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      percentage: 90,
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      percentage: 85,
    },
    {
      name: 'SCSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
      percentage: 80,
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      percentage: 75,
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      percentage: 70,
    },
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
      percentage: 65,
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      percentage: 65,
    },
    {
      name: 'jQuery',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg',
      percentage: 70,
    },
    {
      name: 'Flask',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
      percentage: 60,
    },
    {
      name: 'SQL Server',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
      percentage: 70,
    },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      percentage: 65,
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
      percentage: 70,
    },
    {
      name: 'Redis',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
      percentage: 50,
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      percentage: 55,
    },

    {
      name: 'SQLAlchemy',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg',
      percentage: 55,
    },

    // Add more skills here if needed
  ];

  toolsSkills = [
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      percentage: 85,
    },

    {
      name: 'Chrome DevTools',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg',
      percentage: 90,
    },
    {
      name: 'Grunt',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grunt/grunt-original.svg',
      percentage: 60,
    },
    {
      name: 'Gulp',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg',
      percentage: 65,
    },
    {
      name: 'Webpack',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg',
      percentage: 65,
    },
    {
      name: 'Postman',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
      percentage: 70,
    },
    {
      name: 'Jira',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg',
      percentage: 90,
    },
    {
      name: 'Bitbucket',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg',
      percentage: 90,
    },
    // Add more tool skills here
  ];

  showProgress(skill: any) {
    if (this.isDesktop()) {
      this.currentSkill = skill;
    }
  }

  hideProgress() {
    if (this.isDesktop()) {
      this.currentSkill = null;
    }
  }
  toggleSkill(skill: any) {
    if (this.isMobileOrTablet()) {
      this.currentSkill = skill === this.currentSkill ? null : skill;
    }
  }

  private isDesktop(): boolean {
    return window.innerWidth > 1024; // Desktop devices
  }

  private isMobileOrTablet(): boolean {
    return window.innerWidth <= 1024; // Mobile and tablet devices
  }

  constructor() {}

  ngOnInit(): void {}
}
