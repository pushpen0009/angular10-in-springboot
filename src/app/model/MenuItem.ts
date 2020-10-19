interface MenuItem {
  id?: number;
  moduleId?: string;
  text: string;
  link?: string;
  isDefault?: boolean;
  isCurrent?: boolean;
  children?: MenuItem[];
}

export default MenuItem;
