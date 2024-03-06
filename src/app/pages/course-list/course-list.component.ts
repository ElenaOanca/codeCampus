import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  activeIndex = 0; // Indice della card attiva

  // Definisce esplicitamente il tipo di cards e cardGroups
  cards: { imgSrc: string; title: string; text: string }[] = [
    {
      imgSrc: '../../../assets/angular.png',
      title: 'Angular',
      text: 'Angular è un framework per la costruzione di applicazioni web.',
    },

    {
      imgSrc: '../../../assets/react.png',
      title: 'React',
      text: 'React è una libreria JavaScript per la costruzione di interfacce utente.',
    },

    {
      imgSrc: '../../../assets/vue.png',
      title: 'Vue',
      text: 'Vue è un framework progressivo per la costruzione di interfacce utente.',
    },

    {
      imgSrc: '../../../assets/nodejs.png',
      title: 'Node.js',
      text: 'Node.js è un ambiente di runtime JavaScript per lato server.',
    },

    {
      imgSrc: '../../../assets/angular.png',
      title: 'MongoDB',
      text: 'MongoDB è un database NoSQL flessibile e scalabile.',
    },

    {
      imgSrc: '../../../assets/js.png',
      title: 'Express',
      text: 'Express è un framework per applicazioni web Node.js.',
    },

    {
      imgSrc: '../../../assets/js.png',
      title: 'TypeScript',
      text: 'TypeScript è un linguaggio di programmazione open-source sviluppato e mantenuto da Microsoft.',
    },

    {
      imgSrc: '../../../assets/js.png',
      title: 'JavaScript',
      text: 'JavaScript è un linguaggio di programmazione ad alto livello, interpretato e orientato agli oggetti.',
    },

    {
      imgSrc: '../../../assets/html.png',
      title: 'HTML',
      text: 'HTML è un linguaggio di markup per la strutturazione delle pagine web.',
    },

    {
      imgSrc: '../../../assets/java.png',
      title: 'CSS',
      text: 'CSS è un linguaggio usato per definire la presentazione di un documento scritto in HTML.',
    },


    {
      imgSrc: '../../../assets/html.png',
      title: 'HTML',
      text: 'HTML è un linguaggio di markup per la strutturazione delle pagine web.',
    },



    {
      imgSrc: '../../../assets/java.png',
      title: 'C++',
      text: 'C++ è un linguaggio di programmazione ad alto livello, orientato agli oggetti e imperativo.',
    },

    {
      imgSrc: '../../../assets/java.png',
      title: 'C#',
      text: 'C# è un linguaggio di programmazione orientato agli oggetti sviluppato da Microsoft.',
    }





  ];

  // Qui dichiariamo cardGroups come array di array di oggetti card
  cardGroups: { imgSrc: string; title: string; text: string }[][] = [];

  ngOnInit() {
    this.initializeCardGroups();
  }

  initializeCardGroups() {
    // Questo ciclo crea gruppi di 4 card ciascuno
    for (let i = 0; i < this.cards.length; i += 4) {
      // Assicurati che slice prenda l'ultimo gruppo di card anche se meno di 4
      this.cardGroups.push(
        this.cards.slice(i, Math.min(i + 4, this.cards.length))
      );
    }
  }next() {
    // Incrementa l'indice per mostrare la prossima card, ma controlla per non superare il limite
    if (this.activeIndex < this.cards.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0; // Torna all'inizio se siamo all'ultima card
    }
  }

  previous() {
    // Decrementa l'indice per mostrare la card precedente, ma controlla per non andare sotto 0
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.cards.length - 1; // Vai all'ultima card se siamo alla prima
    }
  }



  //ULTIMI CORSI AGGIUNTI
  ultimiCorsiAggiunti = [
    {
      immagine: '../../../assets/java.png',
      nomeCorso: 'JS',
      autore: 'Mario Rossi',
      difficolta: 'Principiante',
      durata: '10 ore',
      costo: 'Gratis'
    },

    {
      immagine: '../../../assets/angular.png',
      nomeCorso: 'Angular',
      autore: 'Luca Bianchi',
      difficolta: 'Intermedio',
      durata: '20 ore',
      costo: '€ 20'
    },

    {
      immagine: '../../../assets/react.png',
      nomeCorso: 'React',
      autore: 'Giuseppe Verdi',
      difficolta: 'Avanzato',
      durata: '30 ore',
      costo: '€ 30'
    },

    {
      immagine: '../../../assets/vue.png',
      nomeCorso: 'Vue',
      autore: 'Giovanni Neri',
      difficolta: 'Principiante',
      durata: '10 ore',
      costo: 'Gratis'
    },
    {
      immagine: '../../../assets/java.png',
      nomeCorso: 'JS',
      autore: 'Mario Rossi',
      difficolta: 'Principiante',
      durata: '10 ore',
      costo: 'Gratis'
    },

    {
      immagine: '../../../assets/angular.png',
      nomeCorso: 'Angular',
      autore: 'Luca Bianchi',
      difficolta: 'Intermedio',
      durata: '20 ore',
      costo: '€ 20'
    },

    {
      immagine: '../../../assets/react.png',
      nomeCorso: 'React',
      autore: 'Giuseppe Verdi',
      difficolta: 'Avanzato',
      durata: '30 ore',
      costo: '€ 30'
    },

    {
      immagine: '../../../assets/vue.png',
      nomeCorso: 'Vue',
      autore: 'Giovanni Neri',
      difficolta: 'Principiante',
      durata: '10 ore',
      costo: 'Gratis'
    },
    {
      immagine: '../../../assets/java.png',
      nomeCorso: 'JS',
      autore: 'Mario Rossi',
      difficolta: 'Principiante',
      durata: '10 ore',
      costo: 'Gratis'
    },

    {
      immagine: '../../../assets/angular.png',
      nomeCorso: 'Angular',
      autore: 'Luca Bianchi',
      difficolta: 'Intermedio',
      durata: '20 ore',
      costo: '€ 20'
    },

    {
      immagine: '../../../assets/react.png',
      nomeCorso: 'React',
      autore: 'Giuseppe Verdi',
      difficolta: 'Avanzato',
      durata: '30 ore',
      costo: '€ 30'
    },

    {
      immagine: '../../../assets/vue.png',
      nomeCorso: 'Vue',
      autore: 'Giovanni Neri',
      difficolta: 'Principiante',
      durata: '10 ore',
      costo: 'Gratis'
    }
  ];

}

// next() {
//   // Incrementa l'indice per muoversi alla prossima card
//   if (this.activeIndex < this.cards.length - 1) {
//     this.activeIndex++;
//   } else {
//     this.activeIndex = 0; // Torna all'inizio se siamo all'ultima card
//   }
// }

// previous() {
//   // Decrementa l'indice per tornare alla card precedente
//   if (this.activeIndex > 0) {
//     this.activeIndex--;
//   } else {
//     this.activeIndex = this.cards.length - 1; // Vai all'ultima card se siamo alla prima
