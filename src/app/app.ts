import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly bestSellers = [
    {
      category: 'Building Material',
      title: 'Regular Crush | Pan Crush | C Class | 5 mm TO 10 mm',
      image: '/assets/product-pan-crush.webp',
    },
    {
      category: 'A Class',
      title: 'Plant Crush | Poni | A Class | 25mm to 38mm',
      image: '/assets/product-poni.webp',
    },
    {
      category: 'Class A',
      title: 'A Class | Water Bound | 2 Inch To 3 Inch',
      image: '/assets/product-water-bound.webp',
    },
    {
      category: 'A Class',
      title: 'Plant Crush | Adhi Down | A Class | 16mm To 20mm',
      image: '/assets/product-adhi-down.webp',
    },
  ];

  protected readonly categories = [
    {
      title: 'A Class',
      count: '5 Products',
      image: '/assets/category-a-class.jpg',
    },
    {
      title: 'B Class',
      count: '3 Products',
      image: '/assets/category-b-class.webp',
    },
    {
      title: 'Building Material',
      count: '11 Products',
      image: '/assets/category-building.jpg',
    },
  ];
}
