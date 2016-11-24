import { Component, Input } from '@angular/core';
import { StationItem } from './station-item';
import { StationService } from './station.service';

@Component({
    moduleId: module.id,
    selector: 'station-item',
    template: `
            <div class="col-lg-4 col-md-4 col-md-6 col-sm-6">
                 <div class="list-group-item">
                    <span class="btn-xs btn btn-success" (click)="refreshStation(stationItem); $event.stopPropagation()">Refresh</span>
                    <span class="btn-xs btn btn-danger pull-right" (click)="removeStation(stationItem); $event.stopPropagation()">x</span>
                    <h2>{{ stationItem.name }}</h2>kl: {{ stationItem.time | date:"HH:mm" }}<br>
                    <div *ngIf="stationItem.valid === '1' ">
                        Hiti : {{ stationItem.temp }}<br>
                        Vindhraði {{ stationItem.wind }} m/s
                    </div>
                    <div *ngIf="stationItem.valid === '0' ">
                        Gögn ekki aðgengileg<br>
                        í augnablikinu.
                    </div>
                </div>
            </div>
    `
})
export class StationItemComponent {
    constructor(
        private stationService: StationService
    ) { }

    @Input()  stationItem: StationItem;

    removeStation(stationItem: StationItem){
        this.stationService.removeStationItem(stationItem);
    }

    refreshStation(stationItem: StationItem){
        this.stationService.refreshStationItem(stationItem);
    }
    
}