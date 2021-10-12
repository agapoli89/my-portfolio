export const tileData = {
    pl: [
        {   
            id: 1,
            url: 'about-me',
            title: 'Słowo o mnie',
            img: 'aboutme',
            delay: 0,
            content: {
                header: 'O mnie',
                par1: 'Miłośniczka psów, rowerów miejskich, kuchni roślinnej i\xa0górskich wędrówek.',
                par2: 'Mimo, że\xa0wykształcenie mam humanistyczne, coraz bardziej pochłania mnie programowanie. Potrafię spędzać godziny analizując i\xa0udoskonalając kod, co jak do tej pory sprawia mi olbrzymią frajdę :)',
                subtitle: 'Technologie i\xa0umiejętności',
            }
        },
        {
            id: 2,
            title: 'Dzień dobry! Fajnie, że\xa0jesteś :)',
            additionalClass: 'tile--withoutImg',
            additionalTextClass: 'tile__text--withoutImg',
            delay: 1,
        },
        {
            id: 3,
            url: 'my-projects',
            title: 'Moje prace',
            img: 'works',
            additionalClass: 'tile--outstanding',
            delay: .5,
            content: {
                moreCode: 'Trochę więcej',
                projects: [
                    {
                        title: 'Fundacja Pomocy Zwierzętom "Matuzalki" - w trakcjie realizacji',
                        linkToLive: 'https://agapoli89.github.io/Matuzalki/',
                        linkToCode: 'https://github.com/agapoli89/Matuzalki',
                        image: 'matuzalki',
                    },
                    {
                        title: 'Przewodnik miejski - wizytówka',
                        linkToLive: 'https://agapoli89.github.io/WroGuide-update/',
                        linkToCode: 'https://github.com/agapoli89/WroGuide-update',
                        image: 'guide',
                    },
                    {
                        title: 'Rehabilitacja psów - Cagnolino',
                        linkToLive: 'https://rehabilitacja-psow.wroclaw.pl/',
                        linkToCode: 'https://github.com/agapoli89/Fizjo-for-dogs',
                        image: 'cagnolino',
                    },
                    {
                        title: 'Lista zakupów',
                        linkToLive: 'https://agapoli89.github.io/Shopping-list/',
                        linkToCode: 'https://github.com/agapoli89/Shopping-list',
                        image: 'shoppinglist',
                    },
                    {
                        title: 'Lista "to-do"',
                        linkToLive: 'https://agapoli89.github.io/toDoList/',
                        linkToCode: 'https://github.com/agapoli89/toDoList',
                        image: 'todolist',
                    },
                    {
                        title: 'Baza ras psów',
                        linkToLive: 'https://agapoli89.github.io/The-breed-s-base/',
                        linkToCode: 'https://github.com/agapoli89/The-breed-s-base',
                        image: 'breeds',
                    }
                ]
            }
        },
        {
            id: 4,
            url: 'contact-me',
            title: 'Kontakt',
            img: 'phone',
            content: 'Znajdziesz mnie też na mediach społecznościowych:',
            delay: 0,
        },
    ],
    en: [
        {   
            id: 1,
            url: 'about-me',
            title: 'About me',
            img: 'aboutme',
            delay: 0,
            content: {
                header: 'About me',
                par1: 'Dogs, city bikes, plant-based cousine and\xa0hiking lover.',
                par2: "Though I\xa0always thought I\xa0have a\xa0humanist's soul I\xa0feel great in\xa0programming. I\xa0could spend hours analysing or\xa0improving code and\xa0I\xa0really enjoy\xa0it :)",
                subtitle: 'Technologies and skills',
            }
        },
        {
            id: 2,
            title: 'Hello! Nice to see You :)',
            additionalClass: 'tile--withoutImg',
            additionalTextClass: 'tile__text--withoutImg',
            delay: 1,
        },
        {
            id: 3,
            url: 'my-projects',
            title: 'My projects',
            img: 'works',
            additionalClass: 'tile--outstanding',
            delay: .5,
            content: {
                moreCode: 'A little more',
                projects: [
                    {
                        title: 'Fundation for animals "Matuzalki" - in progress',
                        linkToLive: 'https://agapoli89.github.io/Matuzalki/',
                        linkToCode: 'https://github.com/agapoli89/Matuzalki',
                        image: 'matuzalki',
                    },
                    {
                        title: 'City guide - business card website',
                        linkToLive: 'https://agapoli89.github.io/WroGuide-update/',
                        linkToCode: 'https://github.com/agapoli89/WroGuide-update',
                        image: 'guide',
                    },
                    {
                        title: 'Rehabilitation of the dogs - Cagnolino',
                        linkToLive: 'https://rehabilitacja-psow.wroclaw.pl/',
                        linkToCode: 'https://github.com/agapoli89/Fizjo-for-dogs',
                        image: 'cagnolino',
                    },
                    {
                        title: 'Shopping List',
                        linkToLive: 'https://agapoli89.github.io/Shopping-list/',
                        linkToCode: 'https://github.com/agapoli89/Shopping-list',
                        image: 'shoppinglist',
                    },
                    {
                        title: '"To-do" list',
                        linkToLive: 'https://agapoli89.github.io/toDoList/',
                        linkToCode: 'https://github.com/agapoli89/toDoList',
                        image: 'todolist',
                    },
                    {
                        title: "The dog breed's base",
                        linkToLive: 'https://agapoli89.github.io/The-breed-s-base/',
                        linkToCode: 'https://github.com/agapoli89/The-breed-s-base',
                        image: 'breeds',
                    }
                ]
            }
        },
        {
            id: 4,
            url: 'contact-me',
            title: 'Contact',
            img: 'phone',
            content: 'You can also find me on Social Media:',
            delay: 0,
        },
    ]
}