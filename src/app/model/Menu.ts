import MenuItem from './MenuItem';

interface Menu {
  id?: number;
  moduleId?: string;
  text: string;
  isDefault?: boolean;
  isCurrent?: boolean;
  link?: string;
  submenus?: MenuItem[];
}

export default Menu;
