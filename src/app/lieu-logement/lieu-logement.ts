import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LieuLogement as LieuLogementInterface } from '../lieu-logement';
import { RouterModule } from '@angular/router'; 
import { } from '@angular/common';
import { RouterLink} from '@angular/router';


@Component({
  selector: 'app-lieu-logement',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './lieu-logement.html',
  styleUrl: './lieu-logement.css',
})
export class LieuLogement {
  @Input() logement!: LieuLogementInterface;

}
