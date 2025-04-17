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
            'Railclock est une alternative à SNCF Connect, pensée pour offrir une expérience utilisateur simplifiée et plus fluide. Développée en groupe, l\'application permet de rechercher facilement des horaires de trains, consulter les correspondances, et organiser ses trajets grâce à une interface épurée, rapide et centrée sur l\'essentiel : trouver son train en quelques clics, sans superflu.',
        demoURL: '',
        repoURL: '',
        anim: 'fade-left',
    },
    {
        imgSrc: 'https://i.imgur.com/kAEvcEf.png',
        title: 'Crabank',
        skills: ['React', 'MUI', 'Csharp'],
        description:
            '',
        demoURL: '',
        repoURL: '',
        anim: 'fade-left',
    },
    {
        imgSrc: 'https://i.imgur.com/AFrUUli.png',
        title: 'Le Cube',
        skills: ['React', 'MUI'],
        description:
            '',
        anim: 'fade-left',
    },
    {
        imgSrc: 'https://i.imgur.com/SG5ppmG.png',
        title: 'Nitroterm',
        skills: ['React', 'Csharp', 'Tailwind'],
        description:
            '',
        anim: 'fade-up',
    },
    {
        imgSrc: 'https://i.imgur.com/65L510n.png',
        title: 'Hackaton',
        skills: ['HTML', 'CSS', 'JavaScript'],
        description:
            '',
        demoURL: '',
        repoURL: '',
        anim: 'fade-right',
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
};

export const getPortfolioData = portfolioData.map((item) => {
    return {
        ...item,
        skills: item.skills.map((skill) => skillIcons[skill]),
    };
});
