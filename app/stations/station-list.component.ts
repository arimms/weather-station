import { Component, OnInit } from '@angular/core';
import { StationItem } from './station-item';
import { STATION_ITEMS } from './station.data';

@Component({
    moduleId: module.id,
    selector: 'station-list',
    template: `
        <div>
            <station-item *ngFor="let station of stationItems" [stationItem]="station"></station-item>
        </div>
    `
})
export class StationListComponent implements OnInit {

    stationItems: StationItem[];
    ngOnInit(){
        this.stationItems = STATION_ITEMS;
    }
}