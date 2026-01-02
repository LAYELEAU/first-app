import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LieuLogement } from '../lieu-logement/lieu-logement';
import { LieuLogement as LieuLogementInterface} from '../lieu-logement';


@Component({
  selector: 'app-home',
  imports: [CommonModule, LieuLogement],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  logements: LieuLogementInterface[] = [
    {
      id: 1,
      photo: '/asset/logement1.png',
      titre: 'Villa de luxe avec piscine',
      lieu: 'Côte d\'Ivoire, Abidjan',
      description: 'Une magnifique villa avec piscine privée, jardin et vue sur la mer.',
      wifi: true,
      parking: true,
      climatisation: true,
      piscine: true,
    },
    {
      id: 2,
      photo: '/asset/logement2.png',
      titre: 'Appartement moderne en centre-ville',
      lieu: 'France, Paris',
      description: 'Un appartement moderne situé au cœur de Paris, proche des attractions principales.',
      wifi: true,
      parking: false,
      climatisation: true,
      piscine: false,
    },
    {
      id: 3,
      photo: '/asset/logement3.png',
      titre: 'Chalet confortable à la montagne',
      lieu: 'Suisse, Alpes',
      description: 'Un chalet chaleureux avec cheminée, idéal pour les vacances d\'hiver.',
      wifi: false,
      parking: true,
      climatisation: false,
      piscine: false,
    },
    {
      id: 4,
      photo: '/asset/logement4.png',
      titre: 'Maison de campagne charmante',
      lieu: 'Italie, Toscane',
      description: 'Une maison de campagne pittoresque entourée de vignobles et de collines.',
      wifi: true,
      parking: true,
      climatisation: false,
      piscine: true,
    },
    {
      id: 5,
      photo: '/asset/logement5.png',
      titre: 'Studio cosy près de la plage',
      lieu: 'Espagne, Barcelone',
      description: 'Un studio confortable à quelques pas de la plage et des restaurants locaux.',
      wifi: true,
      parking: false,
      climatisation: true,
      piscine: false,
    },
    {
      id: 6,
      photo: '/asset/logement6.png',
      titre: 'Penthouse de luxe avec vue panoramique',
      lieu: 'Émirats arabes unis, Dubaï',
      description: 'Un penthouse somptueux offrant une vue imprenable sur la ville et la mer.',
      wifi: true,
      parking: true,
      climatisation: true,
      piscine: true,
    },
    {
      id: 7,
      photo: '/asset/logement7.png',
      titre: 'Bungalow exotique en bord de mer',
      lieu: 'Thaïlande, Phuket',
      description: 'Un bungalow idyllique situé directement sur la plage avec accès à la mer.',
      wifi: false,
      parking: true,
      climatisation: true,
      piscine: false,
    },
    {
      id: 8,
      photo: '/asset/logement8.png',
      titre: 'Loft artistique en centre-ville',
      lieu: 'États-Unis, New York',
      description: 'Un loft spacieux avec une décoration artistique unique, situé dans un quartier animé.',
      wifi: true,
      parking: false,
      climatisation: true,
      piscine: false,
    },
    {
      id: 9,
      photo: '/asset/logement9.png',
      titre: 'Villa écologique au cœur de la nature',
      lieu: 'Costa Rica, Manuel Antonio',
      description: 'Une villa respectueuse de l\'environnement entourée de forêt tropicale et de faune sauvage.',
      wifi: true,
      parking: true,
      climatisation: false,
      piscine: true,
    }

    // Ajoutez plus de logements si nécessaire
  ];

}
