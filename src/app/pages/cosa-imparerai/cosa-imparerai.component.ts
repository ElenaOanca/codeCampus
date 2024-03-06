import { Component, OnInit } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-cosa-imparerai',
  templateUrl: './cosa-imparerai.component.html',
  styleUrl: './cosa-imparerai.component.scss'
})
export class CosaImpareraiComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
  courses = [
    {
      name: 'Angular',
      description: 'Angular è un framework per la costruzione di applicazioni web.',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png'
    },

    {
      name: 'React',
      description: 'React è una libreria per la costruzione di interfacce utente.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },

    {
      name: 'Vue',
      description: 'Vue è un framework per la costruzione di applicazioni web.',
      imageUrl: 'https://vuejs.org/images/logo.png'
    },

    {
      name: 'Node.js',
      description: 'Node.js è un runtime JavaScript per la costruzione di applicazioni server.',
      imageUrl: 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png'
    },

    {
      name: 'MongoDB',
      description: 'MongoDB è un database NoSQL.',
      imageUrl: 'https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png'
    },

    {
      name: 'PostgreSQL',
      description: 'PostgreSQL è un database relazionale.',
      imageUrl: 'https://www.postgresql.org/media/img/about/press/elephant.png'
    },

    {
      name: 'Docker',
      description: 'Docker è una piattaforma per la costruzione, la distribuzione e l’esecuzione di applicazioni in contenitori.',
      imageUrl: 'https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png'
    },

    {
      name: 'Kubernetes',
      description: 'Kubernetes è un sistema open-source per l’automazione della distribuzione, della scalabilità e della gestione delle applicazioni in contenitore.',
      imageUrl: 'https://kubernetes.io/images/kubernetes-horizontal-color.png'
    },

    {
      name: 'AWS',
      description: 'Amazon Web Services è una piattaforma di servizi cloud.',
      imageUrl: 'https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af2f6e2a7a2e6f4b1f4c5b9e9f8f6b6a8d6.png'
    },

    {
      name: 'Azure',
      description: 'Microsoft Azure è una piattaforma di servizi cloud.',
      imageUrl: 'https://www.azure.cn/cnassets/images/logo-azure-2x.png'
    },

    {
      name: 'GCP',
      description: 'Google Cloud Platform è una piattaforma di servizi cloud.',
      imageUrl: 'https://cloud.google.com/_static/images/cloud/products/logos/cloud-logo.svg'
    },

    {
      name: 'Git',
      description: 'Git è un sistema di controllo di versione distribuito.',
      imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png'
    },

    {
      name: 'Jenkins',
      description: 'Jenkins è uno strumento open-source per l’automazione della distribuzione di software.',
      imageUrl: 'https://www.jenkins.io/images/logos/jenkins/jenkins.png'
    },

    {
      name: 'Jest',
      description: 'Jest è un framework di testing per JavaScript.',
      imageUrl: 'https://jestjs.io/img/jest.png'
    },

    {
      name: 'Cypress',
      description: 'Cypress è un framework di testing end-to-end.',
      imageUrl: 'https://www.cypress.io/static/cypress-io-logo-social-share-8fb8a8503b1f3a5f3b1f3f3a7b4b2d8b.png'
    },

    {
      name: 'TypeScript',
      description: 'TypeScript è un linguaggio di programmazione open-source sviluppato da Microsoft.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
    },

    {
      name: 'JavaScript',
      description: 'JavaScript è un linguaggio di programmazione ad alto livello, orientato agli oggetti e agli eventi.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    },

    {
      name: 'HTML',
      description: 'HTML è un linguaggio di markup per la strutturazione delle pagine web.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
    },

    {
      name: 'CSS',
      description: 'CSS è un linguaggio usato per definire la formattazione di documenti HTML.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
    },

    {
      name: 'Sass',
      description: 'Sass è un estensione di CSS che aggiunge funzionalità mancanti a CSS.',
      imageUrl: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
    },

      {
        name: 'Bootstrap',
        description: 'Bootstrap è un framework front-end per la progettazione di siti e applicazioni web.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'
      },

      {
        name: 'Tailwind',
        description: 'Tailwind è un framework front-end per la progettazione di siti e applicazioni web.',
        imageUrl: 'https://tailwindcss.com/_next/static/media/twitter-square.5a5d8e9c7c3b8f8b9b9e3b6d6d7b3f0e.png'
      },

      {
        name: 'Material UI',
        description: 'Material UI è un framework front-end per la progettazione di siti e applicazioni web.',
        imageUrl: 'https://material-ui.com/static/logo_raw.svg'
      },

      {
        name: 'NestJS',
        description: 'NestJS è un framework per la costruzione di applicazioni server.',
        imageUrl: 'https://nestjs.com/img/logo_text.svg'
      },

      {
        name: 'Express',
        description: 'Express è un framework per la costruzione di applicazioni server.',
        imageUrl: 'https://expressjs.com/images/express-facebook-share.png'
      },

      {
        name: 'Socket.IO',
        description: 'Socket.IO è una libreria per la costruzione di applicazioni real-time.',
        imageUrl: 'https://socket.io/images/logo.svg'
      },

      {
        name: 'GraphQL',
        description: 'GraphQL è un linguaggio di interrogazione per le API.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg'
      },

      {
        name: 'REST',
        description: 'REST è un modello architetturale per la progettazione di servizi web.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/RESTful_Logo.svg'
      },

      {
        name: 'OAuth',
        description: 'OAuth è un protocollo per l’autorizzazione di applicazioni.',
        imageUrl: 'https://oauth.net/images/oauth-2-sm.png'
      },

      {
        name: 'JWT',
        description: 'JWT è uno standard aperto per la creazione di token di accesso.',
        imageUrl: 'https://jwt.io/img/pic_logo.svg',
      },

      {
        name: 'WebSockets',
        description: 'WebSockets è una tecnologia che fornisce un canale di comunicazione full-duplex attraverso una singola connessione TCP.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/WebSockets.svg'
      },

      {
        name: 'RxJS',
        description: 'RxJS è una libreria per la programmazione reattiva.',
        imageUrl: 'https://rxjs-dev.firebaseapp.com/assets/images/logos/Rx_Logo_S.png'
      },

      {
        name: 'Redux',
        description: 'Redux è una libreria per la gestione dello stato.',
        imageUrl: 'https://redux.js.org/img/redux.svg'
      },

      {
        name: 'MobX',
        description: 'MobX è una libreria per la gestione dello stato.',
        imageUrl: 'https://mobx.js.org/assets/mobx.png'
      },

      {
        name: 'Next.js',
        description: 'Next.js è un framework per la costruzione di applicazioni web.',
        imageUrl: 'https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-logo.png'
      },

      {
        name: 'Gatsby',
        description: 'Gatsby è un framework per la costruzione di siti web.',
        imageUrl: 'https://www.gatsbyjs.com/Gatsby-Monogram.svg'
      },

      {
        name: 'Nuxt.js',
        description: 'Nuxt.js è un framework per la costruzione di applicazioni web.',
        imageUrl: 'https://nuxtjs.org/logos/nuxt.svg'
      },

      {
        name: 'Flutter',
        description: 'Flutter è un framework per la costruzione di applicazioni mobili.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png'
      },

      {
        name: 'React Native',
        description: 'React Native è un framework per la costruzione di applicazioni mobili.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
      },

      {
        name: 'Ionic',
        description: 'Ionic è un framework per la costruzione di applicazioni mobili.',
        imageUrl: 'https://ionicframework.com/img/meta/logo.png'
      },




    ]


}
