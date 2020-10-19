export default interface SnackBarModel {
  type?: 'info' | 'success' | 'danger' | 'warning';
  message: string;
  actionBtnLabel?: string;
  posX?: 'start' | 'center' | 'end' | 'left' | 'right';
  posY?: 'top' | 'bottom';
  duration?: number;
}
