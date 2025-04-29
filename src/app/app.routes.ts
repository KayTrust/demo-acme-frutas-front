import { Routes } from '@angular/router';
import { MangoCorpComponent } from './pages/mango-corp/mango-corp.component';
import { GiveThanksComponent } from './pages/give-thanks/give-thanks.component';
import { MelonUniversityComponent } from './pages/melon-university/melon-university.component';
import { HomeComponent } from './pages/home/home.component';
import { FailedShareComponent } from './pages/failed-share/failed-share.component';
import { ApplicantsComponent } from './pages/applicants/applicants.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "Home"
  },
  {
    path: 'corp',
    component: MangoCorpComponent,
    title: "Mango Corp"
  },
  {
    path: 'mango',
    component: MangoCorpComponent,
    title: "Mango Corp"
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
    title: "Congratulations"
  },
  {
    path: 'failed-share',
    component: FailedShareComponent,
    title: "Failed sharing"
  },
  {
    path: 'applicants',
    component: ApplicantsComponent,
    title: "Applicants"
  },
  {
    path: 'oauth2/cb/vpToken',
    redirectTo: 'congrats',
  },
];
