import maison1 from '../images/Portfolio/facadeprincipale.png';
import maison2 from '../images/Portfolio/interieur2.png';
import maison3 from '../images/Portfolio/interieur.jpg';
import maison4 from '../images/Portfolio/imagefacebook.png';
import maison5 from '../images/Portfolio/imagefacebook1.png';
import maison6 from '../images/Portfolio/imageacebook2.png';
import maison7 from '../images/Portfolio/tranoanosy.jpg';
import maison8 from '../images/imageacebook.png';
import maison9 from '../images/imagefacebook.jpg';
import maison10 from '../images/imagefacebook1.jpg';
import maison11 from '../images/Portfolio/anosy.jpg';
import maison12 from '../images/imagefacebook2.jpg';
import plan from '../images/plan/plan.png';
import plan1 from '../images/plan/plan1.png';
import plan2 from '../images/plan/plan2.png';
import plan3 from '../images/plan/plan3.png';



export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'interior' | 'urban';
  excerpt: string;
  description: string;
  challenge: string;
  solution: string;
  mainImage: string;
  images: string[];
  client: string;
  date: string;
  location: string;
  tools: string[];
}

export const projectData: Project[] = [
  {
    id: 'modern-villa',
    title: 'Villa moderne',
    category: 'residential',
    excerpt: 'Conception d\'une villa moderne avec une attention particulière portée à la lumière naturelle et aux espaces ouverts.',
    description: 'Ce projet de villa contemporaine est conçu pour maximiser l\'entrée de lumière naturelle et créer une sensation d\'espace et de fluidité. La villa s\'articule autour d\'un patio central qui sert de point focal et permet à la lumière de pénétrer profondément dans les espaces de vie. Les matériaux utilisés, comme le béton apparent, le bois et le verre, créent un dialogue harmonieux entre chaleur et modernité.',
    challenge: 'Le terrain présentait une forte pente et était entouré de constructions existantes, limitant les possibilités d\'orientation. Le défi consistait à maximiser la lumière naturelle malgré ces contraintes, tout en préservant l\'intimité des occupants.',
    solution: 'La solution a été de concevoir un bâtiment en gradins qui suit la pente naturelle du terrain, permettant une intégration harmonieuse dans le site. Un système de cour intérieure et de doubles hauteurs favorise l\’apport de lumière naturelle jusqu\’au cœur du bâtiment. En façade, des brise-soleil orientables assurent à la fois l\’intimité des espaces et la diffusion de la lumière.',
    mainImage: maison1,
    images: [
      maison2,
      //maison12,
      maison3,
      maison4,
      maison5,
      maison6,
      plan,
      plan1,
      plan2,
      plan3
    ],
    client: 'Famille Ratovo',
    date: 'Novembre 2024',
    location: 'Imerimandroso, Ambatondrazaka, Toamasina',
    tools: ['AutoCAD','ArchiCAD', 'Lumion', 'Photoshop']
  },
  // {
  //   id: 'eco-office-building',
  //   title: 'Immeuble de Bureaux Écologique',
  //   category: 'commercial',
  //   excerpt: 'Un immeuble de bureaux basse consommation intégrant des principes de construction durable et de bien-être au travail.',
  //   description: 'Cet immeuble de bureaux de 5000m² a été conçu selon les principes de l\'architecture bioclimatique et vise une certification environnementale HQE Excellent. Le bâtiment dispose d\'une façade double-peau qui régule naturellement la température intérieure, de jardins suspendus et d\'un système de récupération des eaux de pluie. Les espaces de travail sont modulables et favorisent la collaboration et le bien-être des employés.',
  //   challenge: 'Concilier les exigences environnementales ambitieuses avec un budget contraint et des délais serrés. L\'enjeu était également d\'optimiser les espaces pour maximiser la capacité d\'accueil tout en garantissant des environnements de travail agréables et sains.',
  //   solution: 'Une approche intégrée a permis d\'identifier les solutions les plus efficientes en termes de coût/bénéfice environnemental. L\'utilisation de la modélisation BIM a facilité l\'optimisation du projet et la coordination entre les différents corps de métier. Des simulations thermiques dynamiques ont guidé les choix architecturaux pour atteindre la performance visée sans surcoûts excessifs.',
  //   mainImage: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   images: [
  //     'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     'https://images.pexels.com/photos/407237/pexels-photo-407237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     'https://images.pexels.com/photos/577697/pexels-photo-577697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   ],
  //   client: 'EcoWork SAS',
  //   date: '2023',
  //   location: 'Nantes, France',
  //   tools: ['Revit', 'Lumion', 'AutoCAD']
  // },
  {
    id: 'loft-apartment',
    title: 'Rénovation intérieure et extérieure',
    category: 'interior',
    excerpt: 'Rénovation intérieure et extérieure d\’une maison familiale alliant cachet existant et modernité fonctionnelle.',
    description: 'Ce projet de rénovation a transformé l\’intérieur et extérieur d\’une maison familiale en un espace de vie contemporain, chaleureux et lumineux. Les éléments d’origine tels que les poutres apparentes, les matériaux bruts et certaines ouvertures existantes ont été conservés et mis en valeur. L\’agencement intérieur a été repensé pour offrir un plan plus ouvert, optimisant circulation et lumière naturelle, tout en intégrant des solutions de rangement élégantes et discrètes.',
    challenge: 'L\’organisation initiale n\’était plus adaptée aux besoins actuels. Des contraintes techniques liées à l\’ancienneté du bâtiment, comme une isolation insuffisante et des hauteurs de plafond variables, ont nécessité une approche sur mesure. Il fallait également moderniser les installations sans altérer l\’âme de la maison.',
    solution: 'Une intervention ciblée a permis d\’améliorer le confort thermique et acoustique grâce à l\’intégration d\’isolants performants dans les murs et plafonds. Certaines cloisons ont été reconfigurées pour créer de nouveaux volumes sans alourdir l\’espace. Un chauffage au sol a été installé sur une dalle flottante, assurant un confort optimal sans compromettre l\’esthétique intérieure.',
    mainImage: maison7,
    images: [
      maison8,
      maison9,
      maison10,
      maison11
    ],
    client: 'M. et Mme Mamy',
    date: 'Decembre 2022',
    location: 'Anosy Avaratra, Antananarivo',
    tools: ['ArchiCAD', 'Lumion', 'Photoshop']
  },
  // {
  //   id: 'urban-square',
  //   title: 'Revitalisation Place Urbaine',
  //   category: 'urban',
  //   excerpt: 'Réaménagement d\'une place publique délaissée en un espace vivant et inclusif, favorisant les interactions sociales.',
  //   description: 'Ce projet de requalification urbaine a transformé une place sous-utilisée de 5000m² en un espace public dynamique et polyvalent. La conception intègre des zones d\'activités variées (marché, événements culturels, aire de jeux) et privilégie les mobilités douces. Une attention particulière a été portée à la végétalisation avec l\'introduction de plus de 50 arbres et de jardins de pluie pour la gestion des eaux pluviales.',
  //   challenge: 'La place, entourée de bâtiments historiques, était dominée par le stationnement automobile et manquait d\'identité. Les usages étaient conflictuels et les riverains attachés à leurs habitudes. Le défi consistait à proposer un nouvel aménagement qui satisfasse les différentes parties prenantes tout en améliorant la qualité urbaine et environnementale du site.',
  //   solution: 'Une démarche participative a été mise en place dès la phase de diagnostic, impliquant les habitants, commerçants et associations locales. Cette concertation a permis d\'identifier les besoins réels et d\'obtenir l\'adhésion au projet. La circulation a été repensée pour réduire la place de la voiture sans l\'éliminer complètement. Un phasage intelligent des travaux a permis de maintenir certaines activités pendant le chantier, facilitant la transition.',
  //   mainImage: 'https://images.pexels.com/photos/4046249/pexels-photo-4046249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   images: [
  //     'https://images.pexels.com/photos/4046249/pexels-photo-4046249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     'https://images.pexels.com/photos/763769/pexels-photo-763769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     'https://images.pexels.com/photos/634609/pexels-photo-634609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   ],
  //   client: 'Ville de Bordeaux',
  //   date: '2023',
  //   location: 'Bordeaux, France',
  //   tools: ['AutoCAD', 'SketchUp', 'Illustrator']
  // },
  {
    id: 'plan-2D',
    title: 'Plan 2D de la maison moderne Ambatondrazaka',
    category: 'residential',
    excerpt: 'Conception d\'un pavillon extensible en bois, utilisant des techniques de préfabrication innovantes.',
    description: 'Ce pavillon résidentiel de 120m² est construit entièrement en bois local selon un système modulaire innovant. La conception permet une évolution de l\'habitat dans le temps, avec la possibilité d\'ajouter ou de reconfigurer des modules selon l\'évolution des besoins familiaux. L\'architecture minimaliste met en valeur la beauté naturelle du matériau bois et s\'intègre harmonieusement dans son environnement naturel.',
    challenge: 'Développer un système constructif modulaire qui soit à la fois flexible, durable et économiquement viable. Le système devait permettre une construction rapide sur site tout en garantissant une excellente performance thermique et une esthétique soignée.',
    solution: 'Après plusieurs prototypes, un système de modules préfabriqués en atelier a été mis au point. Ces modules intègrent structure, isolation, réseaux et finitions, réduisant considérablement le temps de chantier. Les connections entre modules ont été spécialement conçues pour permettre un démontage et un réassemblage facile, dans une logique d\'économie circulaire. Le bois utilisé provient de forêts gérées durablement situées à moins de 100km du site.',
    mainImage: plan,
    images: [
      plan1,
      plan2,
      plan3
    ],
    client: 'Famille Petit',
    date: '2022',
    location: 'Annecy, France',
    tools: ['AutoCAD', 'ArchiCAD']
  }
//   {
//     id: 'cultural-center',
//     title: 'Centre Culturel Polyvalent',
//     category: 'commercial',
//     excerpt: 'Un espace culturel contemporain intégrant une médiathèque, des salles d\'exposition et un auditorium.',
//     description: 'Ce centre culturel de 3500m² regroupe plusieurs fonctions culturelles auparavant dispersées dans la ville. Le bâtiment s\'organise autour d\'un vaste atrium central qui distribue les différents espaces et sert de lieu d\'exposition temporaire. L\'architecture extérieure se caractérise par une enveloppe en métal perforé qui filtre la lumière et crée des jeux d\'ombre à l\'intérieur, évoquant un moucharabieh contemporain.',
//     challenge: 'Intégrer des fonctions aux exigences techniques très différentes (acoustique, éclairage, sécurité) dans un même bâtiment, tout en créant une unité architecturale. Le site, en bord de rivière, présentait des contraintes liées aux risques d\'inondation.',
//     solution: 'Les espaces ont été organisés selon leurs besoins techniques et leur niveau d\'accessibilité au public. L\'auditorium et les espaces techniques sont placés au cœur du bâtiment pour optimiser l\'isolation acoustique, tandis que la médiathèque et les espaces d\'exposition occupent le périmètre, bénéficiant de la lumière naturelle. Le bâtiment est surélevé par rapport au niveau du sol pour prévenir les risques d\'inondation, créant un parvis public animé.',
//     mainImage: 'https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     images: [
//       'https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       'https://images.pexels.com/photos/6899754/pexels-photo-6899754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       'https://images.pexels.com/photos/6899755/pexels-photo-6899755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     ],
//     client: 'Communauté d\'Agglomération',
//     date: '2022',
//     location: 'Montpellier, France',
//     tools: ['Revit', 'ArchiCAD', 'Lumion']
//   }
];