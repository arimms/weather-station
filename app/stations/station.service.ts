import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/rx';
import { StationItem }   from './station-item';
import { StationListItem }   from './station-list-item'; 
import { STATION_ITEMS } from './station.data';
 import { STATION_LIST_ITEMS } from './station-list';

@Injectable()
export class StationService {

    constructor(
        public http: Http
    ){}
    
    getStationItems(){
        return Promise.resolve(STATION_ITEMS);
    }

    addStationItem(stationItem: StationItem){
        STATION_ITEMS.push(stationItem);
    }

    removeStationItem(stationItem: StationItem){
        for(let x = 0;x < STATION_ITEMS.length; x++){
          if(STATION_ITEMS[x].name == stationItem.name ){
              STATION_ITEMS.splice( x, 1);
              }
        }
    }
    
    refreshStationItem(stationItem: StationItem){
        console.log(STATION_ITEMS.length);
        var index = STATION_ITEMS.indexOf(stationItem);
        let id = +stationItem.id
        this.selectStationData(id)
        .subscribe(
                data => {
                    let stationItem = new StationItem(data.results[0].id ,data.results[0].name, data.results[0].time, data.results[0].T, data.results[0].F, data.results[0].valid );
                    STATION_ITEMS[index] = stationItem;
                    console.log(data.results[0].id);
                }
            );
            

    }

    selectStationData(number: number): Observable<any>{
         return this.http.get('https://crossorigin.me/http://apis.is/weather/observations/is?stations='+number+'&time=1h')
         .map(response => response.json())
         .catch(error => {
            console.error(error);
            return Observable.throw(error.json())
        })
        
    }


}