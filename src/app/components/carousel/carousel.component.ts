import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { CategoriesService } from 'src/app/services/categories.service';
import { PrimeTemplate } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';
@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    standalone: true,
    imports: [CarouselModule, PrimeTemplate]
})
export class CarouselComponent {
  @Input() Categories:any[]=[];

  responsiveOptions: any[] | undefined;

  constructor(private categorytService: CategoriesService) {}

  ngOnInit() {
      this.categorytService.getAll().subscribe((Categories) => {
          this.Categories = Categories.data;
          this.Categories = this.Categories.filter(c => c.name !== "Women's Fashion");
          console.log(this.Categories)
      });

  }


}
