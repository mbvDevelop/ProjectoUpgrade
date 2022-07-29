import { Component, OnInit } from '@angular/core';
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faCoffee = faCoffee;
  faArrowRight = faArrowRight;


  constructor() { }

  ngOnInit(): void {
  }

}
