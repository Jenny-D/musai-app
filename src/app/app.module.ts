import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFieldComponent } from './search-field/search-field.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArtistComparisonComponent } from './artist-comparison/artist-comparison.component';
import { HomeComponent } from './home/home.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFieldComponent,
    NavigationComponent,
    ArtistComparisonComponent,
    HomeComponent,
    ArtistDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatTableModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: ':countryName', component: HomeComponent},
      {path: 'feature/artist-comparison', component: ArtistComparisonComponent},
      {path: 'artist/:artistName', component: ArtistDetailsComponent}
    ]),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
