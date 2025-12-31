import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LieuLogement } from '../lieu-logement/lieu-logement';

@Component({
  selector: 'app-home',
  imports: [CommonModule, LieuLogement],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
