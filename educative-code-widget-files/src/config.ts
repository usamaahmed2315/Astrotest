export const seo = {
    title: 'Astro Blog - (Around max 60 characters)',
    description: 'A short description of the website, preferably between 70 and 150 characters.'
};

export const menu = [
    { name: 'Latest', url: '/latest' },
    { name: '1st Post', url: '/first-post' },
    { name: '2nd Post', url: '/second-post' },
];

export const author = {
    name: 'John Doe',
    role: 'Frontend developer',
    profile: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    about: 'Description about the author, including previous work experiences, studies, and projects. Anything that can establish credibility, experience, and expertise should be listed here to instill trustworthiness in the reader.',
    socials: [
        'https://educative.io',
        'https://twitter.com',
        'https://linkedin.com',
        'https://medium.com'
    ]
};

export const FAQs = [
    {
        question: 'FAQ Collapsed Question',
        answer: 'FAQ expanded answer. FAQs can be toggled on and off. The component can be configured to collapse other FAQs when an FAQ is expanded to provide more focus on the active element.'
    },
    {
        question: 'FAQ Expanded Question',
        answer: 'FAQ expanded answer. FAQs can be toggled on and off. The component can be configured to collapse other FAQs when an FAQ is expanded to provide more focus on the active element.',
        open: true
    },
    {
        question: 'FAQ Questions',
        answer: 'FAQ expanded answer. FAQs can be toggled on and off. The component can be configured to collapse other FAQs when an FAQ is expanded to provide more focus on the active element.'
    },
    {
        question: 'Are Collapsed',
        answer: 'FAQ expanded answer. FAQs can be toggled on and off. The component can be configured to collapse other FAQs when an FAQ is expanded to provide more focus on the active element.'
    },
    {
        question: 'By Default',
        answer: 'FAQ expanded answer. FAQs can be toggled on and off. The component can be configured to collapse other FAQs when an FAQ is expanded to provide more focus on the active element.'
    },
    {
        question: 'Except the One',
        answer: 'FAQ expanded answer. FAQs can be toggled on and off. The component can be configured to collapse other FAQs when an FAQ is expanded to provide more focus on the active element.'
    },
    {
        question: 'Marked with the \'Open\' State',
        answer: 'FAQ expanded answer. FAQs can be toggled on and off. The component can be configured to collapse other FAQs when an FAQ is expanded to provide more focus on the active element.'
    }
];
