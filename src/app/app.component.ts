import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [MessageService],
    standalone: true,
    imports: [NavbarComponent, LoadingComponent, RouterOutlet, FooterComponent]
})
export class AppComponent {
  title = 'e-commerce';

  constructor(private messageService: MessageService){

  }
}
