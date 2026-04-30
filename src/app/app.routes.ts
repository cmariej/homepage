import { Routes } from '@angular/router';
import { Impressum } from './impressum/impressum';
import { MainPage } from './main-page/main-page';

export const routes: Routes = [
    { path: '', component: MainPage },
    { path: 'impressum', component: Impressum },
];