import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>{{message}}</div>`,
})
export class AppComponent {
  message = '';

  
  constructor(private http: HttpClient) {
    console.log('Hello World!');
  

    this.http.get('https://pokerleagueproj.azurewebsites.net/api/users?code=c_yUI2yu9enkqu-5SaiSUKZlZWTH-nVlPGpz1kye-UkBAzFuPp3f_g%3D%3D')
      .subscribe((resp: any) => this.message = resp.text);

      console.log('get finished in app.components!');
  
  }
}