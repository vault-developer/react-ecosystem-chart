export const charts = [
    {
        category: 'General Frameworks/Libraries',
        items: [
            {name: 'React.js', repo: 'facebook/react', reactOnly: true},
            {name: 'Next.js', repo: 'vercel/next.js', reactOnly: true},
            {name: 'Gatsby.js', repo: 'gatsbyjs/gatsby', reactOnly: true},
            {name: 'Remix', repo: 'remix-run/remix', reactOnly: true},
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
    {
        category: 'UI kit & components',
        items: [
            {name: 'Material-ui', repo: 'mui/material-ui', reactOnly: true},
            {name: 'Ant-design', repo: 'ant-design/ant-design', reactOnly: true},
            {name: 'Chakra-ui', repo: 'chakra-ui/chakra-ui', reactOnly: true},
            {name: 'Daisy-ui', repo: 'saadeghi/daisyui', reactOnly: false},
        ]
    },
    {
        category: 'Data fetching',
        items: [
            {name: 'Axios', repo: 'axios/axios', reactOnly: false},
            {name: 'TanStack', repo: 'TanStack/query', reactOnly: true},
            {name: 'Swr', repo: 'vercel/swr', reactOnly: true},
            {name: 'Apollo-client', repo: 'apollographql/apollo-client', reactOnly: false},
        ]
    },
    {
        category: 'Unit testing',
        items: [
            {name: 'Jest', repo: 'jestjs/jest', reactOnly: false},
            {name: 'Mocha', repo: 'mochajs/mocha', reactOnly: false},
            {name: 'Enzyme', repo: 'enzymejs/enzyme', reactOnly: true},
            {name: 'Testing library', repo: 'testing-library/react-testing-library', reactOnly: true},
            {name: 'Chai', repo: 'chaijs/chai', reactOnly: false},
        ]
    },
];