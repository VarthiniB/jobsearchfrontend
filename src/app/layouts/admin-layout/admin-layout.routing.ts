import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
//import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { AddJobComponent } from '../../pages/addJob/addJob.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'app/dashboard',      component: DashboardComponent },
    { path: 'app/user',           component: UserComponent },
    { path: 'app/table',          component: TableComponent },
    { path: 'app/typography',     component: TypographyComponent },
    { path: 'app/icons',          component: IconsComponent },
    { path: 'app/addnetwork',           component: MapsComponent },
    { path: 'app/notifications',  component: NotificationsComponent },
    { path: 'app/addjob',        component: AddJobComponent }
    
];
