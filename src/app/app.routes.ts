import { Routes } from '@angular/router';
import { MangoCorpComponent } from './pages/mango-corp/mango-corp.component';
import { GiveThanksComponent } from './pages/give-thanks/give-thanks.component';
import { MelonUniversityComponent } from './pages/melon-university/melon-university.component';
import { HomeComponent } from './pages/home/home.component';
import { FailedShareComponent } from './pages/failed-share/failed-share.component';
import { ApplicantsComponent } from './pages/applicants/applicants.component';
import { mangoTitleResolver } from './common/mango-title.resolver';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "Home"
  },
  {
    path: 'corp',
    component: MangoCorpComponent,
    title: "Mango Corp",
    resolve: {
      customTitle: mangoTitleResolver
    },
  },
  {
    path: 'mango',
    component: MangoCorpComponent,
    title: "Mango Corp",
    resolve: {
      customTitle: mangoTitleResolver
    },
  },
  {
    path: 'university',
    component: MelonUniversityComponent,
    title: "Melon University"
  },
  {
    path: 'melon',
    component: MelonUniversityComponent,
    title: "Melon University"
  },
  {
    path: 'congrats',
    component: GiveThanksComponent,
    title: "Congratulations",
    resolve: {
      customTitle: mangoTitleResolver
    },
  },
  {
    path: 'failed-share',
    component: FailedShareComponent,
    title: "Failed sharing",
    resolve: {
      customTitle: mangoTitleResolver
    },
  },
  {
    path: 'applicants',
    component: ApplicantsComponent,
    title: "Applicants",
    resolve: {
      customTitle: mangoTitleResolver
    },
  },
  {
    path: 'oauth2/cb/vpToken',
    redirectTo: 'congrats',
  },
];
