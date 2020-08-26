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
    transition: 'down',
    name: 'Equipements',
    Component: Equipment,
  },
  {
    path: '/accessories',
    transition: 'up',
    name: 'Accessoires',
    Component: Accessories,
  },
  {
    path: '/summary',
    transition: 'reset',
    name: 'Récapitulatif',
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
