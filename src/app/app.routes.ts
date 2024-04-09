import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Inicio',
        component: HomeComponent
    },
    {
        path: 'about',
        title: 'Acerca de mi',
        loadComponent: () => import('./components/about/about.component')
    },
    {
        path: 'skills',
        title: 'Habilidades',
        loadComponent: () => import('./components/skills/skills.component'),
    },
    {
        path: 'projects',
        title: 'Proyectos',
        loadComponent: () => import('./components/projects/projects.component')
    },
    {
        path: 'contact',
        title: 'Contacto',
        loadComponent: () => import('./components/contact/contact.component')
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
