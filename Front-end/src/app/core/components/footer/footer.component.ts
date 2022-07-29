import { Component, OnInit } from '@angular/core';
import { faCoffee,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { faInstagram,faTwitter,faGooglePlus} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faInstagram=faInstagram;
  faTwitter=faTwitter;
  faGooglePlus=faGooglePlus

  constructor() { }

  ngOnInit(): void {
  }

}
