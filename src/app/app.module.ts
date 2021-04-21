import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./login/login.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { CustomersComponent } from "./customers/customers.component";
import { AccountBalanceComponent } from "./account-balance/account-balance.component";
import { FullLayoutComponent } from "./layout/full-layout/full-layout.component";
import { FormsModule } from "@angular/forms";
import { CreateWebuserComponent } from "./create-webuser/create-webuser.component";
import { MiniStatementComponent } from "./mini-statement/mini-statement.component";

import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { Ng2OrderModule } from 'ng2-order-pipe'
import { NgxPaginationModule } from 'ngx-pagination'

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    TransactionsComponent,
    CustomersComponent,
    AccountBalanceComponent,
    FullLayoutComponent,
    CreateWebuserComponent,
    MiniStatementComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
