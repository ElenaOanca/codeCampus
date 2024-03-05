import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  courses = [
    { category: "Linguaggi di Programmazione", languages: ["Java", "Python", "JavaScript", "C++", "C#", "Ruby", "PHP", "Swift", "Kotlin"] },
    { category: "Sviluppo Web", languages: ["HTML", "CSS", "JavaScript", "Frameworks come React, Angular, Vue.js"] },
    { category: "Sviluppo Backend", languages: ["Frameworks come Spring (Java), Django (Python), Express (JavaScript), Ruby on Rails (Ruby), ASP.NET (C#)"] },
    { category: "Basi di Dati", languages: ["SQL", "NoSQL (come MongoDB)"] },
    { category: "Version Control", languages: ["Git"] },
    { category: "Sicurezza Informatica", languages: [] },
    { category: "Test e Debugging", languages: [] },
    { category: "Sviluppo Mobile", languages: ["Swift (iOS)", "Java/Kotlin (Android)"] },
    { category: "Cloud Computing", languages: ["AWS (Amazon Web Services)", "Azure (Microsoft)", "GCP (Google Cloud Platform)"] },
    { category: "Containerization e Orchestration", languages: ["Docker", "Kubernetes"] },
    { category: "DevOps", languages: [] },
    { category: "Machine Learning e Intelligenza Artificiale", languages: ["TensorFlow", "PyTorch"] }
  ];

}
