import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { CardModule } from 'primeng/card';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        PagesRoutingModule,
        CardModule
    ]
})
export class PagesModule { }
