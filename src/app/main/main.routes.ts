import { DetailComponent } from './home/detail/detail.component';
import { HomeModule } from './home/home.module';
import { Routes } from '@angular/router';
import { IndexComponent } from './home/index/index.component';
export const modulesRoutes: Routes = [
  {
    path: '', component: IndexComponent},
    {path: 'detail/:id', component: DetailComponent}
    // children: [
    //   { path: '', component: IndexComponent },
    //   { path: 'homes', loadChildren: () => import('./homes/homes.module').then(m => m.HomesModule)},
    //   { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
    // ]
];
