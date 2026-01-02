import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LieuLogement as LieuLogementInterface } from '../lieu-logement';


@Component({
  selector: 'app-lieu-logement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lieu-logement.html',
  styleUrl: './lieu-logement.css',
})
export class LieuLogement {
  @Input() logement!: LieuLogementInterface;

}
