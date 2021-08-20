import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalAngularPackages: any;

  user: any;

  id: string ='';
  
  constructor(private http: HttpClient) { }

  getUsers() {
    // Simple GET request with response type <any>
    this.http.get('http://localhost:8080/customers').subscribe(data => {
      this.totalAngularPackages = data;
    })  
  }

  getUser() {
    // Simple GET request with response type <any>
    this.http.get('http://localhost:8080/customers/' + this.id).subscribe(data => {
      this.user = data;
    })  
  }
}
