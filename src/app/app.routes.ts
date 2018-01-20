import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { AboutComponent } from 'app/about';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  {
      path: 'todo-advanced-directive',
      loadChildren: 'app/todo-advanced-directive/todo.module#TodoAdvancedDirectiveModule',
      data: { title: 'Directives' } },
  {
    path: 'todo-advanced-errorhandling',
    loadChildren: 'app/todo-advanced-errorhandling/todo.module#TodoAdvancedErrorhandlingModule',
    data: { title: 'Errorhandling' }
  },
  {
    path: 'todo-advanced-generic-service',
    loadChildren: 'app/todo-advanced-generic-service/todo.module#TodoAdvancedGenericServiceModule',
    data: { title: 'Generic Service' }
  },
  {
    path: 'todo-advanced-forms-reactive',
    loadChildren: 'app/todo-advanced-forms-reactive/todo.module#TodoAdvancedFormsReactiveModule',
    data: { title: 'Reactive Forms' }
  },
  {
    path: 'todo-advanced-forms-template',
    loadChildren: 'app/todo-advanced-forms-template/todo.module#TodoAdvancedFormsTemplateModule',
    data: { title: 'Template Forms' }
  },
  {
    path: 'todo-advanced-pipe',
    loadChildren: 'app/todo-advanced-pipe/todo.module#TodoAdvancedPipeModule',
    data: { title: 'Pipes' }
  },
  {
    path: 'todo-advanced-routing',
    loadChildren: 'app/todo-advanced-routing/todo.module#TodoAdvancedRoutingModule',
    data: { title: 'Routing' }
  },
  {
    path: 'todo-advanced-templating',
    loadChildren: 'app/todo-advanced-templating/todo.module#TodoAdvancedTemplatingModule',
    data: { title: 'Advanced Templating' }
  },
  {
    path: 'todo-advanced-translate',
    loadChildren: 'app/todo-advanced-translate/todo.module#TodoAdvancedTranslateModule',
    data: { title: 'Translate' }
  },
  { path: 'todo-aot', loadChildren: 'app/todo-aot/todo.module#TodoAoTModule', data: { title: 'Todo AoT' } },
  {
    path: 'todo-single-component',
    loadChildren: 'app/todo-single-component/todo.module#TodoSingleComponentModule',
    data: { title: 'Todo Single Component' }
  },
  {
    path: 'todo-onpush',
    loadChildren: 'app/todo-onpush/todo.module#TodoOnPushModule',
    data: { title: 'Todo OnPush' }
  },
  { path: 'todo-mvc', loadChildren: 'app/todo-mvc/todo.module#TodoMvcModule', data: { title: 'Todo MVC' } },
  { path: 'todo-mvc-s', loadChildren: 'app/todo-mvc-s/todo.module#TodoMvcPlusServiceModule', data: { title: 'Todo MVC + S' } },
  { path: 'todo-flux', loadChildren: 'app/todo-flux/todo.module#TodoFluxModule', data: { title: 'Todo Flux' } },
  { path: 'todo-redux', loadChildren: 'app/todo-redux/todo.module#TodoReduxModule', data: { title: 'Todo Redux' } },
  { path: 'todo-rxjs-redux', loadChildren: 'app/todo-rxjs-redux/todo-rxjs.module#TodoRxjsReduxModule', data: { title: 'Todo Rxjs Redux' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: '**', component: NoContentComponent },
];
