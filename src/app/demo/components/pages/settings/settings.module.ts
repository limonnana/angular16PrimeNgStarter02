import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { CardModule } from 'primeng/card';

@NgModule({
    imports: [
        CommonModule,
        SettingsRoutingModule,
        CardModule
    ],
    declarations: [SettingsComponent]
})
export class SettingsModule { }
