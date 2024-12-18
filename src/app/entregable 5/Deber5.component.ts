import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
  // Lista de productos
  products = [
    { 
      name: 'En Adopción', 
      image: 'https://i.gifer.com/origin/4f/4f5d1807ba2d22d9de3f1abb925cab9c_w200.gif'
    },
    { 
      name: 'En Adopción ', 
      image: 'https://www.upsocl.com/wp-content/uploads/2013/03/tumblr_mw0u9wmKXk1qcsenco1_400-1.gif'
    },
    { 
      name: 'En Adopción',  
      image: 'https://i.pinimg.com/originals/94/22/ab/9422ab503ad892908134e3e8a711b0c5.gif'
    },
    { 
      name: 'En Adopción ', 
      image: 'https://media3.giphy.com/media/DirPxXrUHKaCA/giphy.gif?cid=6c09b952vfe813ssl6551uewwvymdpf99kgbrwl9b3b0yotu&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    { 
      name: 'En Adopción', 
      image: 'https://res.cloudinary.com/postedin/image/upload/mascotas/c-postedin-image-45349.gif'
    },
    { 
      name: 'En Adopción', 
      image: 'https://i.gifer.com/2imV.gif'
    },
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 4 productos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 3 productos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 2 productos visibles en pantallas pequeñas
      numScroll: 1
    },

  ];

  // Método para determinar el severidad de la disponibilidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}
