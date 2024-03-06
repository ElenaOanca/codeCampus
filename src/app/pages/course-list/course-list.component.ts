import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  activeIndex = 0; // Indice della card attiva
  cards = [
    { imgSrc: '../../../assets/java.png"', title: 'Corsi JAVA', text: 'This is the first card.' },
    { imgSrc: '../../../assets/phyton.png"', title: 'Corsi PHYTON', text: 'This is the second card.' },
    { imgSrc: '../../../assets/angular.png"', title: 'Corsi ANGULAR', text: 'This is the third card.' },
    { imgSrc: '../../../assets/react.png"', title: 'Corsi REACT', text: 'This is the fourth card.' },
    { imgSrc: '../../../assets/vue.png"', title: 'Corsi VUE', text: 'This is the fifth card.' },
    { imgSrc: '../../../assets/css.png"', title: 'Corsi JAVA', text: 'This is the first card.' },
    { imgSrc: '../../../assets/html.png"', title: 'Corsi PHYTON', text: 'This is the second card.' },
    { imgSrc: '../../../assets/springboot.png"', title: 'Corsi ANGULAR', text: 'This is the third card.' },
    { imgSrc: '../../../assets/nodejs.png"', title: 'Corsi REACT', text: 'This is the fourth card.' },
    { imgSrc: '../../../assets/js.png"', title: 'Corsi VUE', text: 'This is the fifth card.' }




  ];

  next() {
    // Incrementa l'indice per muoversi alla prossima card
    if (this.activeIndex < this.cards.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0; // Torna all'inizio se siamo all'ultima card
    }
  }

  previous() {
    // Decrementa l'indice per tornare alla card precedente
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.cards.length - 1; // Vai all'ultima card se siamo alla prima
    }
  }
}
