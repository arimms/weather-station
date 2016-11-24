import { Component }   from '@angular/core';
import { StationService } from './station.service';
import { StationItem }   from './station-item';
import { StationListItem }   from './station-list-item'; 
import { STATION_ITEMS } from './station.data';
import { STATION_LIST_ITEMS } from './station-list';

@Component({
    moduleId: module.id,
    selector: 'station-select',
    template: `
    <section>
        <div class="row">
            <select #selectSection (change)="chooseSection(selectSection.value)">
                <option *ngFor="let section of sectionList" value="{{section}}">{{section}}</option>
            </select>
            <select #selectedStation>
                <option *ngFor="let station of stationList" value="{{station.stationNumber}}">{{station.stationName}}</option>
            </select>
            <button class="btn btn-primary btn-sm" (click)="addStation(selectedStation.value)">Add Station</button>
        </div>
    </section>
    `
})
export class StationSelectComponent {
    
    constructor (
        private stationService: StationService
    ) {}
    
    sectionList: string[] = ["Höfuðborgarsvæðið","Faxaflói","Breiðafjörður"];
  
    stationRvkList: StationListItem[] = STATION_LIST_ITEMS[0];
    stationFaxList: StationListItem[] = STATION_LIST_ITEMS[1];
    stationList: StationListItem[] = this.stationRvkList;

    chooseSection(value: string){
        if(value == 'Höfuðborgarsvæðið'){
             this.stationList = this.stationRvkList;
        }
        if(value == 'Faxaflói'){
            this.stationList = this.stationFaxList;
        }
    }

    addStation(value: number){
         this.stationService.selectStationData(value)
         .subscribe(
                data => {
                    let stationItem = new StationItem(data.results[0].id ,data.results[0].name, data.results[0].time, data.results[0].T, data.results[0].F, data.results[0].valid );
                    this.stationService.addStationItem(stationItem);
                }
            );
    }

}