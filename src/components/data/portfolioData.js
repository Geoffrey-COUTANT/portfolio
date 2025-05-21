export const portfolioData = [
    {
        imgSrc: 'https://i.imgur.com/0kmoEjX.png',
        title: 'Astronomie',
        skills: ['React', 'Tailwind'],
        description:
            'Refonte complète du site du Club Astro Véga de la Lyre de Boisredon. Le site permet de découvrir l\'association,' +
            ' consulter le calendrier des réunions, explorer les galeries photo, accéder à des liens utiles liés à l’astronomie' +
            ' et à la météo, et contacter facilement le club pour une inscription ou des informations.',
        anim: 'fade-right',
    },
    {
        imgSrc: 'https://i.imgur.com/p3cmTS4.png',
        title: 'Railclock',
        skills: ['Typescript', 'React', 'CSS'],
        description:
            'Railclock est une alternative à SNCF Connect, pensée pour offrir une expérience utilisateur simplifiée et plus fluide. ' +
            'Développée en groupe, l\'application permet de rechercher facilement des horaires de trains, consulter les correspondances, ' +
            'et organiser ses trajets grâce à une interface épurée, rapide et centrée sur l\'essentiel : trouver son train en quelques clics,' +
            ' sans superflu.',
        demoURL: '',
        repoURL: '',
        anim: 'fade-left',
    },
    {
        imgSrc: 'https://i.imgur.com/kAEvcEf.png',
        title: 'Crabank',
        skills: ['React', 'MUI', 'Csharp'],
        description:
            'Crabank est une application web complète simulant les fonctionnalités d’une vraie banque en ligne. Elle permet aux utilisateurs ' +
            'de gérer leurs comptes, consulter leurs soldes, effectuer des virements, suivre leurs transactions et bien plus encore.' +
            ' L’objectif était de recréer une expérience bancaire fluide, sécurisée et accessible depuis n’importe quel navigateur, avec une interface' +
            ' moderne et intuitive.',
        demoURL: '',
        repoURL: '',
        anim: 'fade-left',
    },
    {
        imgSrc: 'https://i.imgur.com/AFrUUli.png',
        title: 'Le Cube',
        skills: ['React', 'MUI'],
        description:
            'Le Cube est un site web dédié à un serveur Minecraft, conçu pour offrir une expérience enrichie aux joueurs. Il permet de lier' +
            ' son compte Minecraft au site et d’accéder à un tableau de bord complet : statistiques détaillées (distance parcourue, morts, ' +
            'connexions, temps de jeu…), profil personnalisé, et une page “amis” pour voir qui est en ligne et sur quel mode de jeu. Une passerelle' +
            ' entre le jeu et le web pour suivre ses performances et sa communauté en temps réel.',
        anim: 'fade-left',
    },
    {
        imgSrc: '',
        title: 'ClimatRPG',
        skills: ['Python'],
        description:
            'EN COURS D’AJOUT.',
        demoURL: '',
        repoURL: '',
        anim: 'fade-right',
    },
    {
        imgSrc: 'https://i.imgur.com/SG5ppmG.png',
        title: 'Nitroterm',
        skills: ['React', 'Csharp', 'Tailwind'],
        description:
            'Nitroterm est un réseau social web inspiré de Twitter, pensé pour les passionnés de l’informatique et du développement. Chaque ' +
            'utilisateur peut créer un compte, publier des posts, réagir (like, dislike, commentaire, partage), et suivre d’autres profils pour' +
            ' enrichir son fil d’actualité. La plateforme permet aussi d’indiquer ses langages ou technologies préférées, créant ainsi un espace' +
            ' d’échange ciblé pour la communauté tech.',
        anim: 'fade-up',
    }
];

const skillIcons = {
    JavaScript: 'skill-icons:javascript',
    React: 'skill-icons:react-dark',
    Astro: 'skill-icons:astro',
    CSS: 'skill-icons:css',
    Sass: 'skill-icons:sass',
    StyledComponents: 'skill-icons:styledcomponents',
    Bootstrap: 'skill-icons:bootstrap',
    Tailwind: 'skill-icons:tailwindcss-dark',
    Csharp: 'skill-icons:cs',
    Typescript: 'skill-icons:typescript',
    MUI: 'skill-icons:materialui-dark',
    HTML: 'skill-icons:html',
    Python: 'skill-icons:python-dark',
};

export const getPortfolioData = portfolioData.map((item) => {
    return {
        ...item,
        skills: item.skills.map((skill) => skillIcons[skill]),
    };
});
