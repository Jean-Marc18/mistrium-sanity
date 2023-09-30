import { clients } from "../constants/images";

export const NavLinks = [
    { href: '/', key: 'home', text: 'home' },
    { href: '/about', key: 'about us', text: 'about us' },
    { href: '/products', key: 'products', text: 'products' },
    { href: '/services', key: 'Services', text: 'Services' },
    { href: '/', key: 'contact us', text: 'contact us' }
];

export const FooterLinks = [
    { href: '/about', key: 'About', text: 'About' },
    { href: '/products', key: 'Products', text: 'Products' },
    { href: '/services', key: 'Services', text: 'Services' },
    { href: '/', key: 'Contact', text: 'Contact' }
];

export const ClientsItems = [
    { name: 'stripe' , img: clients.stripe },
    { name: 'google' , img: clients.google },
    { name: 'deloitte' , img: clients.deloitte },
    { name: 'accenture' , img: clients.accenture },
    { name: 'ibm' , img: clients.ibm },
    { name: 'samsung' , img: clients.samsung },
];