import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { Landing } from '../pages/landing/landing';
import { SignIn } from '../pages/sign-in/sign-in';
import { SignUp } from '../pages/sign-up/sign-up';
import { Home } from '../pages/home/home';
import { ArView } from '../pages/ar-view/ar-view';
import { PlaceView } from 'src/pages/place-view/place-view';
import { PlaceNew } from 'src/pages/place-new/place-new';
import { TripView } from 'src/pages/trip-view/trip-view';
import { CategorieList } from 'src/pages/categorie-list/categorie-list';
import { PlaceList } from 'src/pages/place-list/place-list';
import { TripList } from 'src/pages/trip-list/trip-list';

import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';



const redirectUnauthorizedTologin =  () => redirectUnauthorizedTo(['sign-in']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: Landing,
    loadChildren: () => import('../pages/landing/landing.module').then(m => m.LandingModule),
    pathMatch: 'full',
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'sign-in',
    component: SignIn,
    loadChildren: () => import('../pages/sign-in/sign-in.module').then(m => m.SignInModule),
    ...canActivate(redirectLoggedInToHome)
  },

  {
    path: 'sign-up',
    component: SignUp,
    loadChildren: () => import('../pages/sign-up/sign-up.module').then(m => m.SignUpModule),
    ...canActivate(redirectLoggedInToHome)
  },

  {
    path: 'home',
    component: Home,
    loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule),
    ...canActivate(redirectUnauthorizedTologin)
  },

  {
    path: 'categorie-list',
    component: CategorieList,
    loadChildren: () => import('../pages/categorie-list/categorie-list.module').then(m => m.CategorieListModule),
    ...canActivate(redirectUnauthorizedTologin)
  },

  {
    path: 'place-list',
    component: PlaceList,
    loadChildren: () => import('../pages/place-list/place-list.module').then(m => m.PlaceListModule),
    ...canActivate(redirectUnauthorizedTologin)
  },

  {
    path: 'trip-list',
    component: TripList,
    loadChildren: () => import('../pages/trip-list/trip-list.module').then(m => m.TripListModule),
    ...canActivate(redirectUnauthorizedTologin)
  },

  {
    path: 'ar-view',
    component: ArView,
    loadChildren: () => import('../pages/ar-view/ar-view.module').then(m => m.ArViewModule),
    ...canActivate(redirectUnauthorizedTologin)
  },

  {
    path: 'place-view',
    component: PlaceView,
    loadChildren: () => import('../pages/place-view/place-view.module').then(m => m.PlaceViewModule),
    ...canActivate(redirectUnauthorizedTologin)
  },

  {
    path: 'place-new',
    component: PlaceNew,
    loadChildren: () => import('../pages/place-new/place-new.module').then(m => m.PlaceNewModule),
    ...canActivate(redirectUnauthorizedTologin)
  },

  {
    path: 'trip-view',
    component: TripView,
    loadChildren: () => import('../pages/trip-view/trip-view.module').then(m => m.TripViewModule),
    ...canActivate(redirectUnauthorizedTologin)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
