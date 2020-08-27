import {
  Version,
  Color,
  Rims,
  Upholstery,
  Equipment,
  Accessories,
  Summary,
} from '../components/Placeholders';

export default [
  {
    path: '/version',
    event: 'reset',
    name: 'Version',
    Component: Version,
  },
  { path: '/color', event: 'color', name: 'Couleur', Component: Color },
  { path: '/rims', event: 'rims', name: 'Jantes', Component: Rims },
  {
    path: '/upholstery',
    event: 'upholstery',
    name: 'Sellerie',
    Component: Upholstery,
  },
  {
    path: '/equipment',
    event: 'equipment',
    name: 'Equipements',
    Component: Equipment,
  },
  {
    path: '/accessories',
    event: 'accessories',
    name: 'Accessoires',
    Component: Accessories,
  },
  {
    path: '/summary',
    event: 'submit',
    name: 'Récapitulatif',
    Component: Summary,
  },
];
