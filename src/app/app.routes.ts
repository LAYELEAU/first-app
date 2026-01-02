import { Routes } from '@angular/router';
import { DetailLogement } from './detail-logement/detail-logement';
import { LieuLogement } from './lieu-logement/lieu-logement';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'logement/:id', component: DetailLogement }
    
];
