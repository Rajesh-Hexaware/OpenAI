import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementComponent } from './element.component';

const routes: Routes = [
  { path: '', redirectTo: 'sweetalerts', pathMatch: 'full' },

  {
    path: '',
    component: ElementComponent,
    children: [
      {
        path: 'sweet-alerts',
        loadChildren: () =>
          import('./sweetalerts/sweetalerts.module').then(
            (m) => m.SweetalertsModule
          ),
      },
      {
        path: 'tooltip',
        loadChildren: () =>
          import('./tooltip/tooltip.module').then((m) => m.TooltipModule),
      },
      {
        path: 'popover',
        loadChildren: () =>
          import('./popover/popover.module').then((m) => m.PopoverModule),
      },
      {
        path: 'ribbon',
        loadChildren: () =>
          import('./ribbon/ribbon.module').then((m) => m.RibbonModule),
      },
      {
        path: 'clipboard',
        loadChildren: () =>
          import('./clipboard/clipboard.module').then((m) => m.ClipboardModule),
      },
      {
        path: 'drag-drop',
        loadChildren: () =>
          import('./drag-drop/drag-drop.module').then((m) => m.DragDropModule),
      },
      {
        path: 'range-slider',
        loadChildren: () =>
          import('./rangeslider/rangeslider.module').then(
            (m) => m.RangesliderModule
          ),
      },
      {
        path: 'rating',
        loadChildren: () =>
          import('./rating/rating.module').then((m) => m.RatingModule),
      },
      {
        path: 'toaster',
        loadChildren: () =>
          import('./toastr/toastr.module').then((m) => m.ToastrModules),
      },
      {
        path: 'text-editor',
        loadChildren: () =>
          import('./text-editor/text-editor.module').then(
            (m) => m.TextEditorModule
          ),
      },
      {
        path: 'counter',
        loadChildren: () =>
          import('./counter/counter.module').then((m) => m.CounterModule),
      },
      {
        path: 'scrollbar',
        loadChildren: () =>
          import('./scrollbar/scrollbar.module').then((m) => m.ScrollbarModule),
      },
      {
        path: 'spinner',
        loadChildren: () =>
          import('./spinner/spinner.module').then((m) => m.SpinnerModule),
      },
      {
        path: 'notification',
        loadChildren: () =>
          import('./notification/notification.module').then(
            (m) => m.NotificationModule
          ),
      },
      {
        path: 'lightbox',
        loadChildren: () =>
          import('./lightbox/lightbox.module').then((m) => m.LightboxModule), 
      },
      {
        path: 'sticky-note',
        loadChildren: () =>
          import('./stickynote/stickynote.module').then(
            (m) => m.StickynoteModule
          ),
      },
      {
        path: 'timeline',
        loadChildren: () =>
          import('./timeline/timeline.module').then((m) => m.TimelineModule),
      },
      {
        path: 'form-wizard',
        loadChildren: () =>
          import('./form-wizard/form-wizard.module').then(
            (m) => m.FormWizardModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementRoutingModule {}
