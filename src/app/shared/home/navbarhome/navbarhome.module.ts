import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarhomeComponent } from './navbarhome.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ RouterModule, CommonModule,FormsModule ],
    declarations: [ NavbarhomeComponent ],
    exports: [ NavbarhomeComponent ]
})

export class NavBarHomeModule {}