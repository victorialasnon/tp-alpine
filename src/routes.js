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
    transition: 'version',
    name: 'Version',
    Component: Version,
  },
  { path: '/color', transition: 'color', name: 'Couleur', Component: Color },
  { path: '/rims', transition: 'rims', name: 'Jantes', Component: Rims },
  {
    path: '/upholstery',
    transition: 'upholstery',
    name: 'Sellerie',
    Component: Upholstery,
  },
  {
    path: '/equipment',
    transition: 'equipment',
    name: 'Equipements',
    Component: Equipment,
  },
  {
    path: '/accessories',
    transition: 'accessories',
    name: 'Accessoires',
    Component: Accessories,
  },
  {
    path: '/summary',
    transition: 'summary',
    name: 'Récapitulatif',
    Component: Summary,
  },
];
