import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>{{message}}</div>`,
})
export class AppComponent implements OnInit {
  message = '';

  constructor(private http: HttpClient) { console.log('Hello World!'); }
  async ngOnInit() { await this.loadData(); console.log('get finished in app.components!'); }
  async loadData() { try { 
    const resp: any = await this.http.get('https://pokerleagueproj.azurewebsites.net/api/users?code=c_yUI2yu9enkqu-5SaiSUKZlZWTH-nVlPGpz1kye-UkBAzFuPp3f_g%3D%3D').toPromise(); 
    this.message = resp.text; } catch (error) { console.error('Error fetching data', error); } }
}