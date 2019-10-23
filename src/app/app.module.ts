import { MessagingComponent } from './messaging/messaging.component';
import { ListingABusinessComponent } from './listing-abusiness/listing-abusiness.component';
import { MenubarComponent } from './menubar/menubar.component';
import { AlllistingtableComponent } from './alllistingtable/alllistingtable.component';
import { WishlistorgtreeComponent } from './wishlistorgtree/wishlistorgtree.component';
import { FaqstreeComponent } from './faqstree/faqstree.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainnavComponent } from './mainnav/mainnav.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { NewsfeeddashboardComponent } from './newsfeeddashboard/newsfeeddashboard.component';
import { HowtodashboardComponent } from './howtodashboard/howtodashboard.component';
import { PortfoliodashboardComponent } from './portfoliodashboard/portfoliodashboard.component';
import { CatalogdashboardComponent } from './catalogdashboard/catalogdashboard.component';
import { HistorydashboardComponent } from './historydashboard/historydashboard.component';
import { UserpagedashboardComponent } from './userpagedashboard/userpagedashboard.component';
import { AboutusdashboardComponent } from './aboutusdashboard/aboutusdashboard.component';
import { ContactusdashboardComponent } from './contactusdashboard/contactusdashboard.component';
import { PagenotfoundtreeComponent } from './pagenotfoundtree/pagenotfoundtree.component';
import { TandcstreeComponent } from './tandcstree/tandcstree.component';
import { PortanalysistreeComponent } from './portanalysistree/portanalysistree.component';
import { UpcominglistingsdashboardComponent } from './upcominglistingsdashboard/upcominglistingsdashboard.component';
import { NewlistingtableComponent } from './newlistingtable/newlistingtable.component';


@NgModule({
  declarations: [
    AppComponent,
    MainnavComponent,
    MaindashboardComponent,
    MaindashboardComponent,
    NewsfeeddashboardComponent,
    HowtodashboardComponent,
    PortfoliodashboardComponent,
    CatalogdashboardComponent,
    HistorydashboardComponent,
    UserpagedashboardComponent,
    AboutusdashboardComponent,
    ContactusdashboardComponent,
    PagenotfoundtreeComponent,
    FaqstreeComponent,
    WishlistorgtreeComponent,
    TandcstreeComponent,
    PortanalysistreeComponent,
    UpcominglistingsdashboardComponent,
    NewlistingtableComponent,
    AlllistingtableComponent,
    MenubarComponent,
    ListingABusinessComponent,
    MessagingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
