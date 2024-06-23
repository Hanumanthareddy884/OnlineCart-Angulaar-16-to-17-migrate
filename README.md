# Angular 16 to 17 Migrate standalone , remove ng module
Angular 16 ecommerce clone
```
git clone -b master https://github.com/nourelnaby4/OnlineCart
```

# Command
Run a command
`ng update`
 Check this u know the updates

`ng update @angular/cli@17`

After running this cmd u get a error that dependency first update ng prime
`npm uninstall primeng --force`

after install
`npm install primeng --force`

Then we update Angular CLI
`ng update @angular/cli@17`

`ng update @angular/core@17`

`ng update ngx-toastr`

Angular 17 is a standalone,changed to control flow and remove the ng module
`ng g @angular/core:control-flow`
 Follow this flow

? Which path in your project should be migrated? .
? Should the migration reformat your templates? Yes

Control flow is changed

`ng g @angular/core:standalone`

? Choose the type of migration: Convert all components, directives and pipes to standalone
? Which path in your project should be migrated? .

Except App component all are standalone u can check in others components.ts file

`ng g @angular/core:standalone`

? Choose the type of migration: Remove unnecessary NgModule classes
? Which path in your project should be migrated? .

`ng g @angular/core:standalone`
? Choose the type of migration: Bootstrap the application using standalone APIs
? Which path in your project should be migrated? .

app component is standalone and app module is deleted


app-routing.module.ts file change to app-route
remove this code in app-routing.module.ts
 @NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


and just change the
 const routes: Routes = [
  to
export const routes: Routes = [


Import routes in main.ts file and add provideRouter(routes)

