import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: '', redirectTo: 'productlist', pathMatch: 'full' },
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'product-list',
        loadChildren: () =>
          import('./productlist/productlist.module').then(
            (m) => m.ProductlistModule
          ),
      },
      {
        path: 'add-product',
        loadChildren: () =>
          import('./addproduct/addproduct.module').then(
            (m) => m.AddproductModule
          ),
      },
      {
        path: 'category-list',
        loadChildren: () =>
          import('./categorylist/categorylist.module').then(
            (m) => m.CategorylistModule
          ),
      },
      {
        path: 'add-category',
        loadChildren: () =>
          import('./addcategory/addcategory.module').then(
            (m) => m.AddcategoryModule
          ),
      },

      {
        path: 'sub-category-list',
        loadChildren: () =>
          import('./subcategorylist/subcategorylist.module').then(
            (m) => m.SubcategorylistModule
          ),
      },
      {
        path: 'sub-add-category',
        loadChildren: () =>
          import('./subaddcategory/subaddcategory.module').then(
            (m) => m.SubaddcategoryModule
          ),
      },
      {
        path: 'add-brand',
        loadChildren: () =>
          import('./addbrand/addbrand.module').then((m) => m.AddbrandModule),
      },
      {
        path: 'import-product',
        loadChildren: () =>
          import('./importproduct/importproduct.module').then(
            (m) => m.ImportproductModule
          ),
      },
      {
        path: 'barcode',
        loadChildren: () =>
          import('./barcode/barcode.module').then((m) => m.BarcodeModule),
      },
      {
        path: 'edit-product',
        loadChildren: () =>
          import('./editproduct/editproduct.module').then(
            (m) => m.EditproductModule
          ),
      },
      {
        path: 'edit-category',
        loadChildren: () =>
          import('./editcategory/editcategory.module').then(
            (m) => m.EditcategoryModule
          ),
      },
      {
        path: 'edit-subcategory',
        loadChildren: () =>
          import('./editsubcategory/editsubcategory.module').then(
            (m) => m.EditsubcategoryModule
          ),
      },
      {
        path: 'edit-brand',
        loadChildren: () =>
          import('./editbrand/editbrand.module').then((m) => m.EditbrandModule),
      },
      {
        path: 'product-details',
        loadChildren: () =>
          import('./product-details/product-details.module').then(
            (m) => m.ProductDetailsModule
          ),
      },
      {
        path: 'brand-list',
        loadChildren: () =>
          import('./brandlist/brandlist.module').then((m) => m.BrandlistModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
