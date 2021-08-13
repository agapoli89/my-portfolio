export const tileData = {
    en: [
        {   
            id: 1,
            url: 'about-me',
            title: 'Słowo o mnie',
            img: 'aboutme',
            delay: 0,
            content: {
                header: 'O mnie',
                par1: 'Miłośniczka psów, rowerów miejskich, kuchni roślinnej i górskich wędrówek.',
                par2: 'Mimo, że wykształcenie mam humanistyczne, coraz bardziej pochłania mnie programowanie. Potrafię spędzać godziny analizując i udoskonalając kod, co jak do tej pory sprawia mi olbrzymią frajdę :)',
                subtitle: 'Technologie i umiejętności',
            }
        },
        {
            id: 2,
            title: 'Dzień dobry! Fajnie, że jesteś :)',
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
                        title: 'Przewodnik miejski - wizytówka',
                        linkToLive: 'https://agapoli89.github.io/WroGuide-update/',
                        linkToCode: 'https://github.com/agapoli89/WroGuide-update',
                        image: 'guide',
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
    pl: [
        {   
            id: 1,
            url: 'about-me',
            title: 'About me',
            img: 'aboutme',
            delay: 0,
            content: {
                header: 'About me',
                par1: 'Dogs, city bikes, plant-based cousine and hiking lover.',
                par2: "Though I always thought I have a humanist's soul I feel great in programming. I could spend hours analysing or improving code and I really enjoy it :)",
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
                        title: 'City guide - business card website',
                        linkToLive: 'https://agapoli89.github.io/WroGuide-update/',
                        linkToCode: 'https://github.com/agapoli89/WroGuide-update',
                        image: 'guide',
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