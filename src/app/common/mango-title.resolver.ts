import { ResolveFn } from '@angular/router';

export const mangoTitleResolver: ResolveFn<string> = (route, state) => {
  return "MANGO CORP";
};
