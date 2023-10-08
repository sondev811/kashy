import { ILocation, INavbar } from "@interfaces/index"
import { ChangeEventValue } from "google-map-react"

export const scrollDirection = {
  down: 'down',
  up: 'up',
}

export const navbarName = {
  home: 'home',
  aboutUs: 'about us',
  blog: 'blog',
  contactUs: 'contact us',
  notFound: 'error 404'
}

export const navbar:INavbar[] = [
  {
    link: '/',
    name: navbarName.home,
    title: 'Kashy Australia | Find an Honest Mechanic'
  },
  {
    link: '/about-us',
    name: navbarName.aboutUs,
    title: 'About Us | Kashy'
  },
  {
    link: '/blog',
    name: navbarName.blog,
    title: 'Blog | Kashy'
  },
  {
    link: '/contact-us',
    name: navbarName.contactUs,
    title: 'Contact Us | Kashy'
  }
]

export const locationDefault = {
  center: { lat: -27.468520, lng: 153.024534 },
  zoom: 13
}

export const locations: ILocation[] = [
  { lat: -27.468520, lng: 153.024534, name: 'Kashy Brisbane' },
  { lat: -27.480333, lng: 153.012397, name: 'Kashy West End' },
  { lat: -27.457996, lng: 152.99953, name: 'Kashy Paddington' },
  { lat: -27.482406, lng: 152.983549, name: 'Kashy Toowong' },
  { lat: -27.447629, lng: 153.043158, name: 'Kashy Newstead' },
  { lat: -27.431232, lng: 153.042852, name: 'Kashy Albion' },
  { lat: -27.426431, lng: 153.016007, name: 'Kashy Grange' },
  { lat: -27.399440, lng: 153.059152, name: 'Kashy Nundah' },
  { lat: -27.494477, lng: 153.059211, name: 'Kashy Coorparoo' },
  { lat: -27.535680, lng: 153.067233, name: 'Kashy Mount Gravatt' },
  { lat: -27.520361, lng: 153.112029, name: 'Kashy Carindale' },
  { lat: -27.484407, lng: 153.096764, name: 'Kashy Carina' },
  { lat: -27.475792, lng: 153.128687, name: 'Kashy Tingalpa' }
];

