import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AngularFireAuthGuard] },
    { path: 'user-profile', component: UserProfileComponent, canActivate: [AngularFireAuthGuard] },
    { path: 'tables', component: TablesComponent, canActivate: [AngularFireAuthGuard] },
    { path: 'icons', component: IconsComponent, canActivate: [AngularFireAuthGuard] },
    { path: 'maps', component: MapsComponent, canActivate: [AngularFireAuthGuard] }
];
