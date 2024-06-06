import { CanActivateFn } from '@angular/router';

export const exploraGuard: CanActivateFn = (route, state) => {
  return true;
};
