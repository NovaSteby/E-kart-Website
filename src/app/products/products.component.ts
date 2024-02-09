import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ApiService } from '../api.service';
import { SingleComponent } from '../single/single.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [NavbarComponent, FooterComponent,RouterLink]
})
export class ProductsComponent {
data: any=[];
constructor(public api:ApiService ) { }
ngOnInit() {
    this.api.getData().subscribe((res:any) => {
      this.data = res
    })
  }

}
