import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  leftContent = [
    { content: 'Favoritos', isTitle: true },
    { content: 'Reportes', isTitle: false},
    { content: 'Expediente', isTitle: false},
    { content: 'Catalogo', isTitle: false},
    { content: 'Cotizador', isTitle: false}
  ];

  mainContent = [
    { isHeader: false,
      content: [
        { content: 'Clientes', isTitle: true },
        { content: 'CRM', isTitle: false },
        { content: 'Prospectos', isTitle: false },
        { content: 'ADN', isTitle: false },
        { content: 'Calificacion', isTitle: false }
      ]
    },
    { isHeader: false,
      content: [
        { content: 'Lorem', isTitle: true },
        { content: 'Ipsum', isTitle: false },
        { content: 'Ipsum', isTitle: false },
        { content: 'Ipsum', isTitle: false },
        { content: 'Ipsum', isTitle: false }
      ]
    },
    { isHeader: false,
      content: [
        { content: 'Lorem', isTitle: true },
        { content: 'Ipsum', isTitle: false },
        { content: 'Ipsum', isTitle: false },
        { content: 'Ipsum', isTitle: false },
        { content: 'Ipsum', isTitle: false }
      ]
    }
  ];
  
  activeFinder = false;

  
  ngOnInit() {
    
  }
toggleFinder(e) {
    console.log(e);
    this.activeFinder = e;
  }
}
