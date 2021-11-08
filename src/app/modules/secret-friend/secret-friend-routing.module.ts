import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksComponent } from './components/links';
import { SelectNamesComponent } from './components/select-names';

const routes: Routes = [
  { path: '', component: SelectNamesComponent },
  { path: 'links', component: LinksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecretFriendRoutingModule {}
