import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseComponent } from './components/house/house.component';
import { HousedetailsComponent } from './components/housedetails/housedetails.component';

const routes: Routes = [
  {path: 'house' , component: HouseComponent},
  {path: 'details' , component: HousedetailsComponent},
  {path: '' , redirectTo: 'house', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
