import { Component } from '@angular/core';
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OKU';
  faCoffee = faCoffee;
  faArrowRight = faArrowRight;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faGooglePlus = faGooglePlus
  
}
