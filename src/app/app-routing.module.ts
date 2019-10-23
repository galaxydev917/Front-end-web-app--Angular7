import { UpcominglistingsdashboardComponent } from './upcominglistingsdashboard/upcominglistingsdashboard.component';
import { WishlistorgtreeComponent } from './wishlistorgtree/wishlistorgtree.component';
import { FaqstreeComponent } from './faqstree/faqstree.component';
import { PagenotfoundtreeComponent } from './pagenotfoundtree/pagenotfoundtree.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusdashboardComponent } from './aboutusdashboard/aboutusdashboard.component';
import { ContactusdashboardComponent } from './contactusdashboard/contactusdashboard.component';
import { CatalogdashboardComponent } from './catalogdashboard/catalogdashboard.component';
import { UserpagedashboardComponent } from './userpagedashboard/userpagedashboard.component';
import { NewsfeeddashboardComponent } from './newsfeeddashboard/newsfeeddashboard.component';
import { PortfoliodashboardComponent } from './portfoliodashboard/portfoliodashboard.component';
import { HistorydashboardComponent } from './historydashboard/historydashboard.component';
import { HowtodashboardComponent } from './howtodashboard/howtodashboard.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { TandcstreeComponent } from './tandcstree/tandcstree.component';
import { ListingABusinessComponent } from './listing-abusiness/listing-abusiness.component';
import { MessagingComponent } from './messaging/messaging.component';

const routes: Routes = [
    { path: '', component: MaindashboardComponent},
    { path: 'newsfeed', component: NewsfeeddashboardComponent},
    { path: 'howtopage', component: HowtodashboardComponent},
    { path: 'portfolio', component: PortfoliodashboardComponent},
    { path: 'catalogue', component: CatalogdashboardComponent},
    { path: 'history', component: HistorydashboardComponent},
    { path: 'wishlist', component: WishlistorgtreeComponent},
    { path: 'userpage', component: UserpagedashboardComponent},
    { path: 'FAQs', component: FaqstreeComponent},
    { path: 'aboutus', component: AboutusdashboardComponent},
    { path: 'contactus', component: ContactusdashboardComponent},
    { path: 'termsandconditions', component: TandcstreeComponent},
    { path: 'upcominglistings', component: UpcominglistingsdashboardComponent},
    { path: 'listingABusinessComponent', component: ListingABusinessComponent},
    { path: 'messaging', component: MessagingComponent},
    { path: '**', component: PagenotfoundtreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
