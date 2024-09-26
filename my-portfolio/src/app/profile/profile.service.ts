import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  getAboutInfo(): string[] {
    return [
      `<p class="about-text">With 5 years of Software Development experience, currently crafting solutions for environmental health 
      at the Office of Water Programs, my work as a Full Stack Developer involves building web applications 
      that detect harmful chemicals in water resources. With a focus on <span class="highlight">React</span>, 
      Tailwind CSS, and JavaScript, I bring innovative approaches to frontend creation. Meanwhile, 
      Python, Flask, and MSSQL underpin a robust backend system.Our collaborative efforts support the 
      California State Water Resources Control Board's mission to ensure water safety.</p>`,

      `<p class="about-text">As a Master of Science candidate in Computer Science at California State University-Sacramento, 
      I'm sharpening my expertise in data structures, algorithms, and database management systems. 
      This academic foundation complements my hands-on experience, where I proactively address technical 
      challenges and contribute to the advancement of web technologies. Motivated by a commitment to 
      societal betterment, I continuously explore new technologies to enhance our digital world.</p>`,

      `<p class="about-text">Here are a few technologies I’ve been working with recently:<br><br>
        <ul class="tech-list">
        <div>
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          </div>
          <div>
          <li>Python</li>
          <li>SQL Alchemy</li>
          <li>Microsoft SQL Server</li>
          </div>
        </ul>
      </p>`,
    ];
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

  projects: Project[] = [
    {
      id: 0,
      name: 'FlowMail',
      summary:
        'Developed an email assistant outlook add-in to support students in drafting academically appropriate emails.',
      description:
        'I developed an Outlook email assistant add-in designed to help students draft academically appropriate emails with greater ease and professionalism. The project was aimed at improving communication between students and academic staff by providing assistance in structuring emails, ensuring proper tone, and responding to common queries.  Leveraged Large Language Models (LLMs) to suggest and generate well-structured email drafts based on the context provided by the student. This feature helped students write clear and formal emails when addressing professors, requesting information, or following up on academic matters. Provided a set of predefined templates for frequently asked questions, such as, Extensions on assignments, Inquiries about course materials. Utilized the Yeoman generator to scaffold the Outlook add-in, ensuring a streamlined development process for the add-in’s UI and core functionality. Designed an easy-to-use interface within Outlook where students could choose templates, input relevant details, and let the LLM refine the language and tone of their message. Implemented features that allowed the LLM to take into account the email context, such as the subject, recipient, and specific query, to tailor suggestions and ensure the content aligns with academic norms.',
      projectLink: 'https://github.com/alekyapaladugu/FlowMail',
      pictures: [
        '../../assets/images/outlook_addin.jpeg',
        '../../assets/images/machine_learning.jpeg',
        '../../assets/images/redis_db.jpeg',
      ],
      tags: [Tag.JAVASCRIPT, Tag.FLASK, Tag.LLM],
    },
    {
      id: 2,
      name: 'Multi-Label Text Classification of toxic comment dataset',
      summary:
        'Designed the base model of a paper that uses Multi-label Text classification using Attention based Graph Neural Network.',
      description:
        "I along with my peers designed and developed the base model for a research paper focusing on Multi-label Text Classification using an Attention-based Graph Neural Network (GNN). The primary objective was to classify textual data into multiple categories, leveraging the graph structure to capture relationships between labels and input text features. The attention mechanism was used to dynamically weigh the importance of different parts of the input text, improving the classification accuracy by allowing the model to focus on the most relevant sections. After building the GNN model, I further enhanced the model's performance by integrating a BERT transformer. BERT (Bidirectional Encoder Representations from Transformers) was applied to the same dataset to capture contextual information from the text more effectively. By replacing the traditional text representation with BERT embeddings, I managed to boost the base model's accuracy by 0.5%, demonstrating the powerful contextual understanding that transformers provide for natural language processing tasks.",
      projectLink:
        'https://github.com/alekyapaladugu/multilabel_text_classification',
      pictures: [
        '../../assets/images/outlook_addin.jpeg',
        '../../assets/images/machine_learning.jpeg',
        '../../assets/images/redis_db.jpeg',
      ],
      tags: [Tag.PYTHON, Tag.PYTORCH, Tag.BERT],
    },
    {
      id: 3,
      name: 'CRUD Operations on Redis Enterprise Cloud',
      summary:
        'Implemented a dashboard for showing the analysis of FIFA world cup dataset.',
      description:
        'I developed an interactive dashboard using JavaScript and Chart.js to visualize and analyze data from the FIFA World Cup dataset, while integrating a Flask backend for data management through GET and POST APIs. The project involved creating a full-stack solution where the frontend dashboard provided dynamic data visualization, and the backend enabled data persistence and CRUD operations. Integrated an ORM (Object Relational Mapping) layer to interact with a Redis database, ensuring efficient data storage and retrieval. ',
      projectLink: 'https://github.com/alekyapaladugu/redis-backend',
      pictures: [
        '../../assets/images/outlook_addin.jpeg',
        '../../assets/images/machine_learning.jpeg',
        '../../assets/images/redis_db.jpeg',
      ],
      tags: [Tag.JAVASCRIPT, Tag.FLASK, Tag.REDIS],
    },
  ];

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this?.projects?.find((project) => project?.id === id);
    if (project === undefined) {
      throw new TypeError('There is no project that matches.' + id);
    }
    return project;
  }
}
