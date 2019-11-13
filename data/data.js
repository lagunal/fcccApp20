import HomeMenu from '../models/HomeMenu';
import { Images }  from '../theme';

export const MENU = [
  new HomeMenu('c1', 'Acerca de Nosotros', 'ministries'),
  new HomeMenu('c2', 'Encuentranos', 'findUs'),
  new HomeMenu('c3', 'Calandario', 'calendar'),
  new HomeMenu('c4', 'Ofrendar', 'give'),
  new HomeMenu('c5', 'Pedir Oracion', 'prayerRequest'),
  new HomeMenu('c6', 'Galeria', 'iglesia')
];