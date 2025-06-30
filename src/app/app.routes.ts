import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'my-tasks', pathMatch: 'full' },
            {
                path: 'my-data',
                loadComponent: () => import('../app/components/layout/my-data/my-data.component').then(c => c.MyDataComponent),
            },
            {
                path: 'my-tasks',
                loadComponent: () => import('../app/components/layout/my-tasks/my-tasks.component').then(c => c.MyTasksComponent),
            },
            {
                path: 'my-devolutions',
                loadComponent: () => import('../app/components/layout/my-devolutions/my-devolutions.component').then(c => c.MyDevolutionsComponent),
            },
            {
                path: 'my-comunications',
                loadComponent: () => import('../app/components/layout/my-comunications/my-comunications.component').then(c => c.MyComunicationsComponent),
            },
            {
                path: 'my-best-friends',
                loadComponent: () => import('../app/components/layout/my-best-friends/my-best-friends.component').then(c => c.MyBestFriendsComponent),
            },
        ]
    },
    { path: '**', redirectTo: '' }
];
