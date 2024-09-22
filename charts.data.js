export const charts = [
    {
        category: 'General Frameworks/Libraries',
        items: [
            {name: 'React.js', repo: 'facebook/react', reactOnly: true},
            {name: 'Next.js', repo: 'vercel/next.js', reactOnly: true},
            {name: 'Gatsby.js', repo: 'gatsbyjs/gatsby', reactOnly: true},
            {name: 'Redwood', repo: 'redwoodjs/redwood', reactOnly: true},
        ]
    },
    {
        category: 'Global State Management',
        items: [
            {name: 'Redux', repo: 'reduxjs/redux', reactOnly: false},
            {name: 'Zustand', repo: 'pmndrs/zustand', reactOnly: true},
            {name: 'Mobx', repo: 'mobxjs/mobx', reactOnly: false},
            {name: 'Jotai', repo: 'pmndrs/jotai', reactOnly: true},
        ]
    },
    {
        category: 'CSS utility frameworks',
        items: [
            {name: 'Tailwindcss', repo: 'tailwindlabs/tailwindcss', reactOnly: false},
            {name: 'Styled-components', repo: 'styled-components/styled-components', reactOnly: true},
            {name: 'Emotion', repo: 'emotion-js/emotion', reactOnly: true},
            {name: 'Unocss', repo: 'unocss/unocss', reactOnly: false},
        ]
    },
];