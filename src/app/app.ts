import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly primaryPhone = '+92 300 6126774';
  protected readonly businessAddress = 'Pull 111 Market Sargodha';
  protected readonly callHref = 'tel:+923006126774';
  protected readonly whatsappHref =
    'https://wa.me/923006126774?text=I%20need%20a%20bulk%20crush%20aggregate%20quote.';
  protected readonly mobileMenuOpen = signal(false);

  protected readonly trustSignals = [
    'Factory wholesale rates',
    'Direct Punjab delivery',
    'Lab-tested aggregate',
    'Accurate quantity',
  ];

  protected readonly bestSellers = [
    {
      category: 'Building Material',
      title: 'Regular Crush | Pan Crush | C Class | 5 mm TO 10 mm',
      detail: 'Fine regular crush for plaster, flooring, and finishing works.',
      image: 'assets/product-pan-crush.webp',
    },
    {
      category: 'A Class',
      title: 'Plant Crush | Poni | A Class | 25mm to 38mm',
      detail: 'High-strength plant crush for foundations and RCC work.',
      image: 'assets/product-poni.webp',
    },
    {
      category: 'Class A',
      title: 'A Class | Water Bound | 2 Inch To 3 Inch',
      detail: 'Road-grade water bound material for base and sub-base layers.',
      image: 'assets/product-water-bound.webp',
    },
    {
      category: 'A Class',
      title: 'Plant Crush | Adhi Down | A Class | 16mm To 20mm',
      detail: 'Consistent graded aggregate for concrete and commercial builds.',
      image: 'assets/product-adhi-down.webp',
    },
  ];

  protected readonly categories = [
    {
      title: 'A Class',
      count: '5 Products',
      image: 'assets/category-a-class.jpg',
    },
    {
      title: 'B Class',
      count: '3 Products',
      image: 'assets/category-b-class.webp',
    },
    {
      title: 'Building Material',
      count: '11 Products',
      image: 'assets/category-building.jpg',
    },
  ];

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
