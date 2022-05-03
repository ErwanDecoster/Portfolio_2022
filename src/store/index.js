import { createStore } from 'vuex';

export default createStore({
  state: {
    realisation: [
      {
        id: 0,
        name: 'Covoit',
        pathName: 'covoit',
        type: 'Projet d\'etude',
        techno: [
          {
            name: 'Vue.js',
            color: '43B983',
          },
          {
            name: 'tailwindcss',
            color: '39BDF8',
          },
          {
            name: 'CSS',
            color: '0270BA',
          },
          {
            name: 'PHP',
            color: '777BB3',
          },
          {
            name: 'MYSQL',
            color: 'F29112',
          },
          {
            name: 'JS',
            color: 'EBD41C',
          },
        ],
        shortDesc: 'Web App de covoiturage',
        website: 'http://covoit.erwan-decoster.com/',
        githubLinks: [
          {
            linkName: 'Github Front',
            link: 'https://github.com/ErwanDecoster/Covoit',
          },
          {
            linkName: 'Github Back',
            link: 'https://github.com/ErwanDecoster/Covoit',
          },
        ],
        img: 'covoit',
        projectPartenaire: [
          {
            name: 'Tristan',
            link: 'https://boudra-tristan.fr/',
          },
        ],
        projectOrigine: 'Après avoir réfléchi sur ce que l’on voulait faire, nous avons opté pour la création d’une application se basant sur un modèle déjà existant qui est Blablacar. Notre application a l\'avantage d’être gratuite pour l\'ensemble des utilisateurs. Le but est de toucher une plus grande partie de la population en proposant un outil gratuit donc économique.',
        projectObjectif: 'Créer une application ayant une excellente accessibilité pour toutes les tranches d’âge de la population. Créer des fonctionnalités et une interface ergonomique. Avoir une application simple d’utilisation et gratuite.',
        projectDescription: 'Il s’agit d’un projet consistant à réaliser une Web App de covoiturage adapté au mobile et au PC. Le but: définir un point de départ et d\'arrivée et choisir les autres utilisateurs que l’on veut prendre sur notre passage ou inversement et trouver un conducteur pour aller la on l’on souhaite.',
        foncionalites: [
          {
            for: 'Conducteur',
            foncionalitesFor: [
              { name: 'Créer un voyage avec un point de départ et d’arrivée ainsi que l’heure de départ.' },
              { name: 'Modifier ses informations personnelles: nom, prénom, téléphone, mot de passe.' },
              { name: 'Visualiser les personnes acceptées dans son trajet, l\'endroit ou il doit le récupérer, les étapes intermédiaires.' },
              { name: 'Accepter ou refuser un utilisateur qui veut rejoindre son trajet.' },
              { name: 'Choisir le véhicule pour le voyage, ainsi que de la motorisation.' },
            ],
          },
          {
            for: 'Passager',
            foncionalitesFor: [
              { name: 'Rejoindre un voyage.' },
              { name: 'Voir l\'ensemble des voyages.' },
              { name: 'Voir toutes ces informations relatives à son compte : nom, prénom, téléphone.' },
              { name: 'Modifier ses informations personnelles : nom, prénom, téléphone, mot de passe.' },
              { name: 'Rechercher un conducteur pour son trajet, indiquer le point de départ et d’arrivée ainsi que l’horaire à laquel il part, et pouvoir visualiser les trajets ayant le même point d\'arrivée.' },
              { name: 'Programmer un départ.' },
            ],
          },
        ],
        maquetteImg: 'covoit_figma',
        maquetteWebsite: 'Figma',
        maquetteLink: 'https://www.figma.com/file/IlDMB37HhdRwhDEbAcXcsz/CoVoit?node-id=0%3A1',
        mcdImg: 'covoit_mcd',
        mcdLink: 'https://drive.google.com/file/d/1tF2mflGTWQEn79w0y5RnNB1jbtQe2cXW/view?usp=sharing',
        mldImg: 'covoit_mld',
        mldLink: 'https://docs.google.com/document/d/1hxqgAQpgOgpevZock19mC7AOKI81wT8NL780hwVDcWA/edit?usp=sharing',
        mpdImg: 'covoit_mpd',
        mpdLink: 'https://github.com/Tristan-Boudra/CovoitBackEnd/blob/main/BDD_Covoit.sql',
        comment: '',
      },
      {
        id: 1,
        name: 'Phoenix Vêtements et Protection - Site internet',
        pathName: 'phoenix_vetements_et_protection_site_internet',
        type: 'Projet professionnel',
        techno: [
          {
            name: 'Vue.js',
            color: '43B983',
          },
          {
            name: 'tailwindcss',
            color: '39BDF8',
          },
          {
            name: 'JS',
            color: 'EBD41C',
          },
        ],
        shortDesc: 'Site vitrine de l’entreprise Phoenix Vêtements et Protection',
        website: 'http://www.phoenix-vetements.com/',
        // github: '',
        // objectif: 'Refonte complete du site de l\'entreprise Phoenix Vêtements et Protection, creation d\'une maquette..',
        githubLinks: [
          {
            linkName: 'Github',
            link: 'https://github.com/ErwanDecoster/Covoit',
          },
        ],
        img: 'phoenix_vetements_et_protection_site_internet',
        // projectPartenaire: [
        //   {
        //     name: '',
        //     link: '',
        //   },
        // ],
        projectOrigine: 'L\'entreprise Phoenix vêtemenst et protection se developpe et son site internet actuel demande d\'etre maintenu à jour, son style graphique est depassé et l\'entreprise n\'a pas eu le temps de s\'en occuper.',
        projectObjectif: 'Mettre en place un nouveau site internet dans l\'air du temps et simple d\'utilisation pour l\'entreprise Phoenix Vêtements et Protection.',
        projectDescription: 'Le nouveau site internet deviendra un site vitrine mettant en avant ce que fait l\'emtreprise et permetant aux clients de joindre facilement Phoenix vêtements et protections via un formulaire de contact et differents liens de contact.',
        // foncionalites: [
        //   {
        //     for: 'Conducteur',
        //     foncionalitesFor: [
        //       { name: 'Créer un voyage avec un point de départ et d’arrivée ainsi que l’heure de départ.' },
        //       { name: 'Modifier ces informations personnelles: nom, prénom, téléphone, mot de passe.' },
        //       { name: 'Visualiser les personnes acceptées dans son trajet, où est-ce qu’il doit le récupérer, les étapes intermédiaire' },
        //       { name: 'Accepter ou refuser un utilisateur qui veut rejoindre son trajet.' },
        //       { name: 'Choix du véhicule pour le voyage, ainsi que de la motorisation.' },
        //     ],
        //   },
        // ],
        maquetteImg: 'phoenix_vetements_et_protection_site_internet_figma',
        maquetteWebsite: 'Figma',
        maquetteLink: 'https://www.figma.com/file/JkQdHhF8Tb9y4s9DAwhOYG/Stage-Phenix-vetement?node-id=115%3A114',
        // mcdImg: '',
        // mcdLink: '',
        // mldImg: '',
        // mldLink: '',
        // mpdImg: '',
        // mpdLink: '',
        comment: '',
      },
      {
        id: 2,
        name: 'WaterCollect - Dashboard',
        pathName: 'watercollect_dashboard',
        type: 'Projet prefesionnel',
        techno: [
          {
            name: 'HTML',
            color: 'E34E26',
          },
          {
            name: 'CSS',
            color: '0270BA',
          },
          {
            name: 'PHP',
            color: '777BB3',
          },
          {
            name: 'MYSQL',
            color: 'F29112',
          },
          {
            name: 'JS',
            color: 'EBD41C',
          },
        ],
        shortDesc: 'Création d’un dashboard avec une parti clientes et administrateurs.',
        // website: 'http://www.phoenix-vetements.com/',
        // githubLinks: [
        //   {
        //     linkName: 'Github',
        //     link: 'https://github.com/ErwanDecoster/Covoit',
        //   },
        // ],
        img: 'watercollect_dashboard',
        // projectPartenaire: [
        //   {
        //     name: '',
        //     link: '',
        //   },
        // ],
        projectOrigine: 'L\'entreprise WaterCollect a pour objectif de fournir à ses clients la possibilité de visualiser leurs données de consommation et d\'économie et ainsi créer davantage d\'engagement de leur part.',
        projectObjectif: 'Créer pour les futures clients une plate-forme de visualisation de leurs économies réalisées ainsi que le nombre d\'équipements installés et les équipements non installés ainsi que des proposition pour d\'autres équipements.',
        projectDescription: 'Le Dashboard doit comporter une partie Administrateurs et une partie Client, les clients pourront visualiser leurs données comme leurs consommations d\'eau, les économies d\'eau le nombre d\'équipements installés... et les administrateurs pourront modifier les données des clients et en ajouter des nouveaux.',
        foncionalites: [
          {
            for: 'Client',
            foncionalitesFor: [
              { name: 'Voir les équipements déjà installé.' },
              { name: 'Voir les recommandations en matière de nouvel équipement.' },
              { name: 'Voir des statistiques sur un graphe pour l\'eau consommée sur l\'année.' },
              { name: 'Voir des statistiques sur un graphe pour l\'eau économisée sur l\'année.' },
              { name: 'Voir la réduction des émissions de carbone grâce à l\'installation WaterCollect.' },
            ],
          },
          {
            for: 'Administrateur',
            foncionalitesFor: [
              { name: 'Voir la liste des clients.' },
              { name: 'Pouvoir ajouter de nouveaux clients.' },
              { name: 'Déterminer une couleur pour chaque  client qui adaptera la couleur des graphiques en fonction.' },
              { name: 'Possibilité de changer le mot de passe client.' },
              { name: 'Pouvoir ajouter par mois l\'eau consommée par le client.' },
              { name: 'Pouvoir ajouter par mois l\'eau économisée par le client.' },
              { name: 'Pouvoir ajouter un type d\'équipement et leur nombre.' },
            ],
          },
        ],
        maquetteImg: 'watercollect_dashboard_figma',
        maquetteWebsite: 'Figma',
        maquetteLink: 'https://www.figma.com/file/dwJfKIKWVihe0Hv3c4k5FX/WaterCollect-Dashboard',
        // mcdImg: '',
        // mcdLink: '',
        // mldImg: '',
        // mldLink: '',
        // mpdImg: '',
        // mpdLink: '',
        // comment: '',
      },
      {
        id: 3,
        name: 'WaterCollect - Simulateur',
        pathName: 'watercollect_simulateur',
        type: 'Projet prefesionnel',
        techno: [
          {
            name: 'WordPress',
            color: '003C56',
          },
          {
            name: 'HTML',
            color: 'E34E26',
          },
          {
            name: 'CSS',
            color: '0270BA',
          },
          {
            name: 'JS',
            color: 'EBD41C',
          },
        ],
        shortDesc: 'Ajout de diferents simulateurs d’économie d’eau au site Wordpresse existant.',
        website: 'http://www.phoenix-vetements.com/',
        // github: '',
        // objectif: 'Refonte complete du site de l\'entreprise Phoenix Vêtements et Protection, creation d\'une maquette..',
        // githubLinks: [
        //   {
        //     linkName: 'Github',
        //     link: 'https://github.com/ErwanDecoster/Covoit',
        //   },
        // ],
        img: 'watercollect_simulateur',
        // projectPartenaire: [
        //   {
        //     name: '',
        //     link: '',
        //   },
        // ],
        projectOrigine: 'L\'emtreprise WaterCollect voulant augmenter son engagement avec ses futurs clients, souhaiter leur permettre sur le site de visualiter les économies possibles grâce à leurs équipements.',
        projectObjectif: 'Mettre en place sur le site Wordpress un simulateur d\'économie d\'eau réalisable grâce à l\'installation des équipements WaterCollect.',
        projectDescription: 'Le simulateur doit permettre au client de visualiser combien de mètres cube d\'eau sont économisables par mois et par an le tout très facilement grâce à des Sliders pour définir certains paramètres.',
        foncionalites: [
          {
            for: 'Clients du site principal',
            foncionalitesFor: [
              { name: 'Définir le nombre de personnes dans le foyer.' },
              { name: 'Définir le prix de l\'eau au mettre cube' },
              { name: 'Définir s\'il y une machine à laver ou non dans le foyer.' },
              { name: 'Voir les économies par mois ou par année pour l\'eau consommée, l\'eau préservée et la somme d\'argent économisée' },
            ],
          },
          {
            for: 'Client de la campagne pour les campings ',
            foncionalitesFor: [
              { name: 'Définir le nombre de logements du camping' },
              { name: 'Définir le nombre de personnes par logement' },
              { name: 'Définir le nombre de mois d\'exploitation des logements' },
              { name: 'Définir le prix de l\'eau au mettre cube.' },
              { name: 'Voir la difference avec et sans les équipements WaterCollect pour le nombre de litres : par jour, par séjour, par saison pour un logement et par saison pour le nombre de logements du camping.' },
            ],
          },
        ],
        maquetteImg: 'watercollect_simulateur_figma',
        maquetteWebsite: 'Figma',
        maquetteLink: 'https://www.figma.com/file/obmVmdaFsRdahAhuJwnAo4/WaterCollect-Simulateur',
        // mcdImg: '',
        // mcdLink: '',
        // mldImg: '',
        // mldLink: '',
        // mpdImg: '',
        // mpdLink: '',
        // comment: '',
      },
      {
        id: 0,
        name: 'Covoit Admin',
        pathName: 'covoit_dmain',
        type: 'Projet d\'etude',
        techno: [
          {
            name: 'C#',
            color: '823184',
          },
          {
            name: 'WPF',
            color: '054A8A',
          },
          {
            name: 'MYSQL',
            color: 'F29112',
          },
        ],
        shortDesc: 'Application lourd de gestion de la base de données Covoit.',
        // website: '',
        githubLinks: [
          {
            linkName: 'Github',
            link: 'https://github.com/ErwanDecoster/CovoitAdmin',
          },
        ],
        img: 'covoit_admin',
        // projectPartenaire: [
        //   {
        //     name: 'Tristan',
        //     link: 'https://boudra-tristan.fr/',
        //   },
        // ],
        projectOrigine: 'Les utilisateurs du site Covoit pouvant éprouver des dificultés avec le site : mettre en place une plateforme de gestion de la base de données avait tout son sens.',
        projectObjectif: 'Créer une application téléchargeable permetant la gestion de la base de données Covoit. Avec un accès uniquement pour les administrateurs.',
        projectDescription: 'Il s’agit d’un projet consistant à réaliser une application en C# avec l’aide de WPF, permettant de changer toutes les informations de la base de données Covoit et permetant la mise en place d\'un support utilisateurs.',
        foncionalites: [
          {
            for: 'Administrateur',
            foncionalitesFor: [
              { name: 'Ajouter, supprimer les motorisations.' },
              { name: 'Réinitialiser les mots de passe.' },
              { name: 'Modifier le nom, prénom, téléphone des utilisateurs' },
              { name: 'Supprimer un compte.' },
              { name: 'Lister les utilisateurs, informations personnelles, véhicules.' },
            ],
          },
        ],
        maquetteImg: 'covoit_admin_figma',
        maquetteWebsite: 'Figma',
        maquetteLink: 'https://www.figma.com/file/hV8tFOXZ5o6TAeCFUg5ca2/Untitled?node-id=0%3A1',
        mcdImg: 'covoit_mcd',
        mcdLink: 'https://drive.google.com/file/d/1tF2mflGTWQEn79w0y5RnNB1jbtQe2cXW/view?usp=sharing',
        mldImg: 'covoit_mld',
        mldLink: 'https://docs.google.com/document/d/1hxqgAQpgOgpevZock19mC7AOKI81wT8NL780hwVDcWA/edit?usp=sharing',
        mpdImg: 'covoit_mpd',
        mpdLink: 'https://github.com/Tristan-Boudra/CovoitBackEnd/blob/main/BDD_Covoit.sql',
        comment: '',
      },
    ],
    parcourtProfesionnel: [
      {
        id: 0,
        companyName: 'Phoenix Vêtements et Protection',
        placementCity: 'Davezieux',
        placementZipCode: '07340',
        placementAdress: 'Rue des Frères Seguins',
        companyDesc: 'L\'entreprise Phoenix Vêtements et Protection fondé par Fabrice Atias est speciliser dans vente de vêtements et d\'equipements EPI.',
        localisationImgLink: '',
        localisationMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12341.399133235342!2d4.693240915796706!3d45.24934182126644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee55ab29a5ed411d!2sPhoenix%20V%C3%AAtements%20et%20Protection!5e0!3m2!1sen!2sfr!4v1648500343481!5m2!1sen!2sfr',
        missions:
        [
          {
            name: 'Creation du site vitrine de l\'entreprise.',
            desc: 'Le site de l\'entreprise ce faisant vieillissant et obsolète par son style graphique et sa conception même une refonte complète fut réalisé afin de convenir plus à ce que Phoenix vêtement et devenue aujourd\'hui et aux attentes des clients.',
            assosiedProjetPath: 'phoenix_vetements_et_protection_site_internet',
          },
          {
            name: 'Creation des sigiature de mail.',
            desc: 'L\'entreprise grandissant de plus en plus son image et son identité prennent de l\'importance et une uniformisation des signatures devenez de plus en plus nécessaire.',
            assosiedProjetPath: '',
          },
        ],
        path: 'phoenix_vetements_et_protection',
        role: 'Stagiaire',
        shortDesc: 'Refonte complète du site internet de l’entreprise, création des signatures de mail...',
        startDate: '01/01/2022',
        endDate: '02/01/2022',
      },
      {
        id: 1,
        companyName: 'WaterCollect',
        placementCity: 'Lyon - Villeurbanne',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: 'C\'est à Toulon que Thomas et Hendrix, alors étudiants en école d’ingénieurs, ont commencé à s’intéresser aux enjeux de préservation des ressources en eau.<br><br>« Nous pensons que le recyclage de l’eau est un enjeu clé du développement durable.<br><br>En effet, chaque jour de l’eau potable est gaspillée dans nos toilettes et c’est pour nous une aberration. »<br<br>>Pour y remédier ils ont fondé WaterCollect qui développe des solutions de recyclage des eaux grises domestiques.',
        localisationImgLink: '',
        localisationMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d536.4025433531451!2d4.871044997678743!3d45.78097000568698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd84a368148122bb8!2sWaterCollect!5e0!3m2!1sen!2sfr!4v1648502365468!5m2!1sen!2sfr',
        // missions:
        // [
        //   {
        //     name: '',
        //     desc: '',
        //     assosiedProjetPath: '',
        //   },
        // ],
        path: 'watercollect',
        role: 'Stagiaire',
        shortDesc: 'Création et intégration sur le site WordPresse de plusieurs simulateurs en HTML et JS et création d’un dashboard avec un côté administrateur et client accessible depuis un sous domaine du site.',
        startDate: '05/01/2021',
        endDate: '06/01/2021',
      },
      {
        id: 2,
        companyName: 'McDonald\'s',
        placementCity: 'Saint-Vallier',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.6918534431693!2d4.811151815547732!3d45.17308947909867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f540588d2d1fef%3A0xb18f4d1440666447!2sMcDonald&#39;s!5e0!3m2!1sen!2sfr!4v1649702021776!5m2!1sen!2sfr',
        // missions: [
        //   {
        //     name: '',
        //     desc: '',
        //     assosiedProjetPath: '',
        //   },
        // ],
        path: 'mcdonalds',
        role: 'Equipier polyvalent',
        shortDesc: 'Emploi étudiant.',
        startDate: '03/01/2021',
        endDate: '03/01/2022',
      },
      {
        id: 3,
        companyName: 'Eco Domino - Coworking des Canuts',
        placementCity: 'Lyon',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22265.416954966484!2d4.823974369601114!3d45.767640512749026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb1482d8e447%3A0x48ca2a4a155f6b4b!2sCoworking%20des%20Canuts!5e0!3m2!1sen!2sfr!4v1649701243016!5m2!1sen!2sfr',
        // missions: [
        //   {
        //     name: '',
        //     desc: '',
        //     assosiedProjetPath: '',
        //   },
        // ],
        path: 'eco_domino',
        role: 'Stagiaire',
        shortDesc: 'Création et utilisation d’un serveur domotique sur un raspberry utilisation de docker et Node Red pour créer des scénarios et lier les appareils de différentes marques.',
        startDate: '12/01/2019',
        endDate: '12/08/2019',
      },
      {
        id: 4,
        companyName: 'BBI informatique',
        placementCity: 'Saint-Vallier',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6735.5644003325415!2d4.890642886159351!3d45.19556182670142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x551e96eb9c65c324!2sBBI!5e0!3m2!1sen!2sfr!4v1649700678603!5m2!1sen!2sfr',
        // missions: [
        //   {
        //     name: '',
        //     desc: '',
        //     assosiedProjetPath: '',
        //   },
        // ],
        path: 'bbi_informatique',
        role: 'Stagiaire',
        shortDesc: 'Utilisation de Linux, dépannage, réparation de matériel informatique, communication avec la clientèle afin de comprendre leur demande.',
        startDate: '09/01/2019',
        endDate: '10/01/2019',
      },
      {
        id: 5,
        companyName: 'Farniente Plage',
        placementCity: 'Saintes-Maries-de-la-Mer',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.5219961731264!2d4.408199415491157!3d43.449698279128825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b661c502624bb1%3A0xa53ab224f047f165!2sFarniente%20Plage!5e0!3m2!1sen!2sfr!4v1649701357504!5m2!1sen!2sfr',
        // missions: [
        //   {
        //     name: '',
        //     desc: '',
        //     assosiedProjetPath: '',
        //   },
        // ],
        path: 'farniente_plage',
        role: 'Serveur en restauration',
        shortDesc: 'Service, relationnel avec clients, gestion de la salle.',
        startDate: '07/01/2019',
        endDate: '08/01/2019',
      },
      {
        id: 6,
        companyName: 'Mairie de Saint Désirat',
        placementCity: 'Saint-Désirat',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44946.20824701309!2d4.790156104277327!3d45.24500181477788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f515f54d3510ef%3A0xd253ef4c199af64c!2sMairie!5e0!3m2!1sen!2sfr!4v1649701418871!5m2!1sen!2sfr',
        // missions: [
        //   {
        //     name: '',
        //     desc: '',
        //     assosiedProjetPath: '',
        //   },
        // ],
        path: 'marie_de_saint_desirat',
        role: 'Stagiaire',
        shortDesc: 'Mise à jour du site internet, correction de bug, amélioration et optimisation de la barre de navigation et ajout d\'éléments.',
        startDate: '06/01/2019',
        endDate: '07/01/2019',
      },
      {
        id: 7,
        companyName: 'Societe dromoise de travaux SDT',
        placementCity: 'Secteur Annonay',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: '',
        // missions: [
        //   {
        //     name: '',
        //     desc: '',
        //     assosiedProjetPath: '',
        //   },
        // ],
        path: 'societe_dromoise_de_travaux_sdt',
        role: 'Stagiaire',
        shortDesc: 'Observation de l\'installation de réseaux fibre et ADSL, branchement de jartier dans les centraux Téléphoniques et compréhension de l\'infrastructure réseau d’une ville.',
        startDate: '09/01/2018',
        endDate: '12/01/2018',
      },
      {
        id: 8,
        companyName: 'Imagine Développement',
        placementCity: 'Vienne',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: 'Imagine Développement est une société implantée à Vienne (Isère) depuis 2006. Experte dans les domaines de l\'informatique et du web, elle s\'est spécialisée dans : Le développement de logiciels spécifiques métier, La conception de sites internet sur mesure, L’accompagnement autour des stratégies webmarketing',
        localisationImgLink: '',
        localisationMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.6223301778077!2d4.865332115559904!3d45.537805079101986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4de4e5c065b5f%3A0x9a0890a07ec004f8!2sImagine%20D%C3%A9veloppement!5e0!3m2!1sen!2sfr!4v1649701594353!5m2!1sen!2sfr',
        // missions: [
        //   {
        //     name: '',
        //     desc: '',
        //     assosiedProjetPath: '',
        //   },
        // ],
        path: 'imagine_developpement',
        role: 'Stagiaire',
        shortDesc: 'Création de serveurs Windows et Linux via une machine virtuelle, essai de mise en place de GPO (stratégie de Groupe),  Création de domaines sur serveur, installation de logiciels, Préparation de commandes des clients.',
        startDate: '05/01/2018',
        endDate: '06/01/2018',
      },
    ],
    parcourtEducatif: [
      {
        id: 0,
        companyName: 'Collège Privé Notre-Dame',
        diplome: 'Brevet des collèges',
        mension: 'Assez Bien',
        placementCity: 'Annonay',
        placementZipCode: '07100 ',
        placementAdress: '10 Rue Sauzéat',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: '',
        path: 'college_prive_notre_dame',
        role: 'Etudiant',
        shortDesc: '',
        startDate: '05/01/2018',
        endDate: '06/01/2018',
      },
      {
        id: 1,
        companyName: 'Lycée Professionnel Marc Seguin',
        diplome: 'BAC SN',
        mension: 'Assez Bien',
        placementCity: 'Annonay',
        placementZipCode: '07100 ',
        placementAdress: '1 Rte de Californie',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: '',
        path: 'lycee_professionnel_marc_seguin',
        role: 'Etudiant',
        shortDesc: '',
        startDate: '05/01/2018',
        endDate: '06/01/2018',
      },
      {
        id: 2,
        companyName: 'Institut Supérieur Saint-Denis',
        diplome: 'BTS SIO option SLAM',
        mension: '',
        placementCity: 'Annonay',
        placementZipCode: '07100 ',
        placementAdress: '',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: '',
        path: 'institut_superieur_saint_denis',
        role: 'Etudiant',
        shortDesc: '',
        startDate: '05/01/2018',
        endDate: '06/01/2018',
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
