import {
  Version,
  Color,
  Rims,
  Upholstery,
  Equipment,
  Accessories,
  Summary,
} from './components/Placeholders';

export default [
  {
    path: '/version',
    transition: 'select',
    name: 'Version',
    Component: Version,
  },
  { path: '/color', transition: 'next', name: 'Couleur', Component: Color },
  { path: '/rims', transition: 'next', name: 'Jantes', Component: Rims },
  {
    path: '/upholstery',
    transition: 'next',
    name: 'Sellerie',
    Component: Upholstery,
  },
  {
    path: '/equipment',
    transition: 'next',
    name: 'Equipements',
    Component: Equipment,
  },
  {
    path: '/accessories',
    transition: 'next',
    name: 'Accessoires',
    Component: Accessories,
  },
  {
    path: '/summary',
    transition: 'submit',
    name: 'Récapitulatif',
    Component: Summary,
  },
  {
    path: '/summary',
    transition: 'reset',
    name: 'reset',
    Component: Summary,
  },
  {
    path: '/summary',
    transition: 'up',
    name: 'up',
    Component: Summary,
  },
  {
    path: '/summary',
    transition: 'down',
    name: 'down',
    Component: Summary,
  },
  {
    path: '/summary',
    transition: 'confirm',
    name: 'confirm',
    Component: Summary,
  },
  {
    path: '/summary',
    transition: 'cancel',
    name: 'cancel',
    Component: Summary,
  },
];
