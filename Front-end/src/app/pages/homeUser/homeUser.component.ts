import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './homeUser.component.html',
  styleUrls: ['./homeUser.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(
    // private api: ApiService,
    // private router: Router,
    // private http: HttpClient
  ) {}
  
   token = ""
  ngOnInit(): void {
    this.token = localStorage.getItem("token") || ""
  }

}
