import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LieuLogement as LieuLogementInterface } from '../lieu-logement';
import { Logement } from '../logement';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-logement',
  imports: [CommonModule],
  templateUrl: './detail-logement.html',
  styleUrl: './detail-logement.css',
})
export class DetailLogement {

  route = inject(ActivatedRoute);
  private logementService = inject(Logement);
  logement?: LieuLogementInterface;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.logement = this.logementService.getLogementById(id);
  }

}
