import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HouseRepository } from './repository/house-repository';
import { HouseRepositoryDummyImpl } from './repository/house-repository-dummy-impl.service';
import { HouseComponent } from './components/house/house.component';
import { HouseinfosComponent } from './components/houseinfos/houseinfos.component';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
  HouseComponent,
  HouseinfosComponent
  
  ],
  providers: [{
    provide: HouseRepository,
    useClass: HouseRepositoryDummyImpl,
  }],
})
export class HomePageModule {}
