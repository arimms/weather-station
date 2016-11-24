import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { NavComponent }  from './navbar/nav.component';
//--------Station----------------//
import { StationItemComponent } from './stations/station-item.component';
import { StationListComponent } from './stations/station-list.component';
import { StationSelectComponent } from './stations/station-select.component';
import { StationService }  from './stations/station.service';



@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    FormsModule,
     ],
  declarations: [ 
    AppComponent,
    NavComponent,
    StationItemComponent,
    StationListComponent,
    StationSelectComponent
  
   ],
  bootstrap:    [ AppComponent ],
  providers: [ StationService ]

})
export class AppModule { }
