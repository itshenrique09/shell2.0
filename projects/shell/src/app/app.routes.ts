import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './lib/component/home/home.component';

export const routes: Routes = [
    { path: "", redirectTo:"/home", pathMatch:"full"},
    {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
},
{
    path: 'colaborator',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
        loadRemoteModule('colaborator', './colaboratorModule').then((m) => m.ColaboratorMainModule),
},
{
    path: 'projeto',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
        loadRemoteModule('projeto', './Component').then((m) => m.ProjetoMainModule),
},
{
    path: 'Training',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
        loadRemoteModule('Training', './trainingModule').then((m) => m.TrainingMainModule),
},];
