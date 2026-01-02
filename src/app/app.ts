import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CommonModule],
  template:`
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/asset/logo1.png" alt="">
     
    </header>
    <section class="content">
        <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ['./app.css']
})
export class App {
  title = 'homes';
}
