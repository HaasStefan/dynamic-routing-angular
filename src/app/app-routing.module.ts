import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { DayComponent } from './components/day/day.component';
import { HomeComponent } from './components/home/home.component';
import { NightComponent } from './components/night/night.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TopSecretComponent } from './components/top-secret/top-secret.component';

function getMillis(hours: number) {
  return hours * 60 * 60 * 100;
}

const standardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: () => {
        let routes: Routes = [];
        const currentTime = new Date().getTime();

        if (currentTime < getMillis(6) || currentTime > getMillis(18)) {
          routes.push({
            path: 'night',
            component: NightComponent
          });
        }
        else {
          routes.push({
            path: 'day',
            component: DayComponent
          });
        }

        if (Math.random() < 0.5) {
          routes.push({
            path: 'secret',
            component: TopSecretComponent
          });
        }

        return [
          ...routes,
          ...standardRoutes
        ];
      },
      multi: true
    }
  ]
})
export class AppRoutingModule { }
