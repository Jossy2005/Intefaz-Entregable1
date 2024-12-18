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
      name: 'Producto 1',
      image: 'https://i.gifer.com/origin/4f/4f5d1807ba2d22d9de3f1abb925cab9c_w200.gif',
      price: '$10.00'
    },
    {
      name: 'Producto 2',
      image: 'https://www.upsocl.com/wp-content/uploads/2013/03/tumblr_mw0u9wmKXk1qcsenco1_400-1.gif',
      price: '$15.00'
    },
    {
      name: 'Producto 3',
      image: 'https://i.pinimg.com/originals/94/22/ab/9422ab503ad892908134e3e8a711b0c5.gif',
      price: '$8.50'
    },
    {
      name: 'Producto 4',
      image: 'https://media3.giphy.com/media/DirPxXrUHKaCA/giphy.gif?cid=6c09b952vfe813ssl6551uewwvymdpf99kgbrwl9b3b0yotu&ep=v1_gifs_search&rid=giphy.gif&ct=g',
      price: '$12.75'
    },
    {
      name: 'Producto 5',
      image: 'https://res.cloudinary.com/postedin/image/upload/mascotas/c-postedin-image-45349.gif',
      price: '$18.00'
    },
    {
      name: 'Producto 6',
      image: 'https://i.gifer.com/2imV.gif',
      price: '$9.99'
    }
  ];

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
    }
  ];

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
