import A2 from '@A2/A2';
import A3 from '@A3/A3';
import MainLayout from 'layouts/MainLayout/MainLayout';
import { ComponentType } from 'react';

export type RouteType = {
    path: string;
    component: ComponentType<any>;
    layout?: ComponentType<any> | null | undefined;
};
let publicRoute: RouteType[] = [];
publicRoute = [
    {
        path: '/a2',
        component: A2,
        layout: MainLayout,
    },
    {
        path: '/a3',
        component: A3,
        layout: MainLayout,
    },
];

export { publicRoute };
