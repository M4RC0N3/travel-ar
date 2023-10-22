import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { Landing } from '../pages/landing/landing';
import { SignIn } from '../pages/sign-in/sign-in';
import { SignUp } from '../pages/sign-up/sign-up';

import { PlaceView } from 'src/pages/place-view/place-view';
import { PlaceNew } from 'src/pages/place-new/place-new';
import { TripView } from 'src/pages/trip-view/trip-view';


import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
import { TabNavigation } from 'src/components/tab-navigation/tab-navigation';



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
    path: 'place-view/:id',
    component: PlaceView,
    loadChildren: () => import('../pages/place-view/place-view.module').then(m => m.PlaceViewModule),
    ...canActivate(redirectUnauthorizedTologin)
  },

  {
    path: 'place-new/:id',
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
  {
    path: '',
    component:TabNavigation,
    ...canActivate(redirectUnauthorizedTologin),
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'categorie-list',
        loadChildren: () => import('../pages/categorie-list/categorie-list.module').then(m => m.CategorieListModule)
      },
      {
        path: 'place-list',
        loadChildren: () => import('../pages/place-list/place-list.module').then(m => m.PlaceListModule)
      },
      {
        path: 'trip-list',
        loadChildren: () => import('../pages/trip-list/trip-list.module').then(m => m.TripListModule)
      },
      {
        path: 'ar-view',
        loadChildren: () => import('../pages/ar-view/ar-view.module').then(m => m.ArViewModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
