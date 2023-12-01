export class routes {
  private static base: string = '';

  public static get baseUrl(): string {
    return this.base;
  }
  // auth routes
  public static get auth(): string {
    return this.baseUrl + '/auth';
  }
  public static get signIn(): string {
    return this.auth + '/signin';
  }
  public static get signUp(): string {
    return this.auth + '/signup';
  }
  public static get forgotPassword(): string {
    return this.auth + '/forgetpassword';
  }
  // auth routes *ends*

  // error pages routes

  public static get errorPages(): string {
    return this.baseUrl + '/errorpages';
  }
  public static get errorPage404(): string {
    return this.errorPages + '/error404';
  }
  public static get errorPage500(): string {
    return this.errorPages + '/error500';
  }
  // error pages routes *ends*

  // core pages routes

  public static get core(): string {
    return this.baseUrl;
  }
  public static get dashboard(): string {
    return this.core + '/dashboard';
  }
  public static get components(): string {
    return this.core + '/components';
  }
  public static get blankPage(): string {
    return this.core + '/blank-page';
  }
  public static get product(): string {
    return this.core + '/product';
  }
  public static get sales(): string {
    return this.core + '/sales';
  }
  public static get purchase(): string {
    return this.core + '/purchase';
  }
  public static get expense(): string {
    return this.core + '/expense';
  }
  public static get quotation(): string {
    return this.core + '/quotation';
  }
  public static get transfer(): string {
    return this.core + '/transfer';
  }

  public static get return(): string {
    return this.core + '/return';
  }
  public static get people(): string {
    return this.core + '/people';
  }
  public static get places(): string {
    return this.core + '/places';
  }
  public static get element(): string {
    return this.core + '/element';
  }
  public static get charts(): string {
    return this.core + '/charts';
  }
  public static get icons(): string {
    return this.core + '/icons';
  }
  public static get forms(): string {
    return this.core + '/forms';
  }
  public static get table(): string {
    return this.core + '/table';
  }
  public static get application(): string {
    return this.core + '/application';
  }
  public static get report(): string {
    return this.core + '/report';
  }
  public static get users(): string {
    return this.core + '/users';
  }
  public static get settings(): string {
    return this.core + '/settings';
  }
  public static get profile(): string {
    return this.core + '/profile';
  }
  public static get activities(): string {
    return this.core + '/activities';
  }
  // core pages routes *ends*

  // core pages child routes

  public static get productList(): string {
    return this.product + '/product-list';
  }
  public static get addProduct(): string {
    return this.product + '/add-product';
  }
  public static get categoryList(): string {
    return this.product + '/category-list';
  }
  public static get addCategory(): string {
    return this.product + '/add-category';
  }
  public static get subCategoryList(): string {
    return this.product + '/sub-category-list';
  }
  public static get addSubcategory(): string {
    return this.product + '/sub-add-category';
  }
  public static get addBrand(): string {
    return this.product + '/add-brand';
  }
  public static get importProduct(): string {
    return this.product + '/import-product';
  }
  public static get barcode(): string {
    return this.product + '/barcode';
  }
  public static get editProduct(): string {
    return this.product + '/edit-product';
  }
  public static get editCategory(): string {
    return this.product + '/edit-category';
  }
  public static get editSubCategory(): string {
    return this.product + '/edit-subcategory';
  }
  public static get editBrand(): string {
    return this.product + '/edit-brand';
  }
  public static get productDetails(): string {
    return this.product + '/product-details';
  }
  public static get brandList(): string {
    return this.product + '/brand-list';
  }
  public static get salesList(): string {
    return this.sales + '/sales-list';
  }
  public static get pos(): string {
    return this.sales + '/pos';
  }
  public static get salesReturnLists(): string {
    return this.sales + '/sales-return-lists';
  }
  public static get createSalesReturns(): string {
    return this.sales + '/create-sales-returns';
  }
  public static get addSales(): string {
    return this.sales + '/add-sales';
  }
  public static get editSalesReturns(): string {
    return this.sales + '/edit-sales-returns';
  }
  public static get editSales(): string {
    return this.sales + '/edit-sales';
  }
  public static get salesDetails(): string {
    return this.sales + '/sales-details';
  }

  public static get purchaseList(): string {
    return this.purchase + '/purchase-list';
  }
  public static get addPurchase(): string {
    return this.purchase + '/add-purchase';
  }
  public static get importPurchase(): string {
    return this.purchase + '/import-purchase';
  }
  public static get editPurchase(): string {
    return this.purchase + '/edit-purchase';
  }

  public static get expenseList(): string {
    return this.expense + '/expense-list';
  }
  public static get expenseCategory(): string {
    return this.expense + '/expense-category';
  }
  public static get createExpense(): string {
    return this.expense + '/create-expense';
  }
  public static get editExpense(): string {
    return this.expense + '/edit-expense';
  }
  public static get quotationList(): string {
    return this.quotation + '/quotation-list';
  }
  public static get addQuotation(): string {
    return this.quotation + '/add-quotation';
  }
  public static get editQuotation(): string {
    return this.quotation + '/edit-quotation';
  }

  public static get transferList(): string {
    return this.transfer + '/transfer-list';
  }
  public static get addTransfer(): string {
    return this.transfer + '/add-transfer';
  }
  public static get importTransfer(): string {
    return this.transfer + '/import-transfer';
  }
  public static get editTransfer(): string {
    return this.transfer + '/edit-transfer';
  }

  public static get salesReturnList(): string {
    return this.return + '/sales-return-list';
  }
  public static get createSalesReturn(): string {
    return this.return + '/create-sales-return';
  }
  public static get purchaseReturnList(): string {
    return this.return + '/purchase-return-list';
  }
  public static get createPurchaseReturn(): string {
    return this.return + '/create-purchase-return';
  }
  public static get editSalesReturn(): string {
    return this.return + '/edit-sales-return';
  }
  public static get editPurchaseReturn(): string {
    return this.return + '/edit-purchase-return';
  }

  public static get customerList(): string {
    return this.people + '/customer-list';
  }
  public static get addCustomer(): string {
    return this.people + '/add-customer';
  }
  public static get supplierList(): string {
    return this.people + '/supplier-list';
  }
  public static get addSupplier(): string {
    return this.people + '/add-supplier';
  }
  public static get userList(): string {
    return this.people + '/user-list';
  }
  public static get addUser(): string {
    return this.people + '/add-user';
  }
  public static get storeList(): string {
    return this.people + '/store-list';
  }
  public static get addStore(): string {
    return this.people + '/add-store';
  }
  public static get editCustomer(): string {
    return this.people + '/edit-customer';
  }
  public static get editSupplier(): string {
    return this.people + '/edit-supplier';
  }
  public static get editUser(): string {
    return this.people + '/edit-user';
  }
  public static get editStore(): string {
    return this.people + '/edit-store';
  }

  public static get newCountry(): string {
    return this.places + '/new-country';
  }
  public static get countriesList(): string {
    return this.places + '/countries-list';
  }
  public static get newState(): string {
    return this.places + '/new-state';
  }
  public static get stateList(): string {
    return this.places + '/state-list';
  }
  public static get editCountry(): string {
    return this.places + '/edit-country';
  }
  public static get editState(): string {
    return this.places + '/edit-state';
  }

  public static get sweetAlerts(): string {
    return this.element + '/sweet-alerts';
  }
  public static get tooltip(): string {
    return this.element + '/tooltip';
  }
  public static get popover(): string {
    return this.element + '/popover';
  }
  public static get ribbon(): string {
    return this.element + '/ribbon';
  }
  public static get clipboard(): string {
    return this.element + '/clipboard';
  }
  public static get dragDrop(): string {
    return this.element + '/drag-drop';
  }
  public static get rangeSlider(): string {
    return this.element + '/range-slider';
  }
  public static get rating(): string {
    return this.element + '/rating';
  }
  public static get toaster(): string {
    return this.element + '/toaster';
  }
  public static get textEditor(): string {
    return this.element + '/text-editor';
  }
  public static get counter(): string {
    return this.element + '/counter';
  }
  public static get scrollbar(): string {
    return this.element + '/scrollbar';
  }

  public static get spinner(): string {
    return this.element + '/spinner';
  }
  public static get notification(): string {
    return this.element + '/notification';
  }
  public static get lightbox(): string {
    return this.element + '/lightbox';
  }

  public static get stickyNote(): string {
    return this.element + '/sticky-note';
  }
  public static get timeline(): string {
    return this.element + '/timeline';
  }
  public static get formWizard(): string {
    return this.element + '/form-wizard';
  }

  public static get chartApex(): string {
    return this.charts + '/chart-apex';
  }
  public static get chartNg2(): string {
    return this.charts + '/chart-ng2';
  }
  public static get chartPrime(): string {
    return this.charts + '/prime-ng';
  }

  public static get iconFontAwesome(): string {
    return this.icons + '/icon-fontawesome';
  }

  public static get iconFeather(): string {
    return this.icons + '/icon-feather';
  }
  public static get iconIonic(): string {
    return this.icons + '/icon-ionic';
  }
  public static get iconMaterial(): string {
    return this.icons + '/icon-material';
  }
  public static get iconPe7(): string {
    return this.icons + '/icon-pe7';
  }
  public static get iconSimpleline(): string {
    return this.icons + '/icon-simpleline';
  }

  public static get iconWeather(): string {
    return this.icons + '/icon-weather';
  }
  public static get iconThemify(): string {
    return this.icons + '/icon-themify';
  }
  public static get iconTypicon(): string {
    return this.icons + '/icon-typicon';
  }
  public static get iconFlag(): string {
    return this.icons + '/icon-flag';
  }

  public static get formBasicInputs(): string {
    return this.forms + '/form-basic-inputs';
  }
  public static get formInputsGroups(): string {
    return this.forms + '/form-input-groups';
  }
  public static get formHorizontal(): string {
    return this.forms + '/form-horizontal';
  }
  public static get formVertical(): string {
    return this.forms + '/form-vertical';
  }
  public static get formMask(): string {
    return this.forms + '/form-mask';
  }
  public static get formValidation(): string {
    return this.forms + '/form-validation';
  }
  public static get formSelect(): string {
    return this.forms + '/form-select';
  }
  public static get formFileUpload(): string {
    return this.forms + '/form-file-upload';
  }
  public static get basicTable(): string {
    return this.table + '/tables-basic';
  }
  public static get dataTable(): string {
    return this.table + '/data-basic';
  }
  public static get chat(): string {
    return this.application + '/chat';
  }
  public static get calendar(): string {
    return this.application + '/calendar';
  }
  public static get email(): string {
    return this.application + '/email';
  }
  public static get purchaseOrderReport(): string {
    return this.report + '/purchase-order-report';
  }
  public static get inventoryReport(): string {
    return this.report + '/inventory-report';
  }
  public static get salesReport(): string {
    return this.report + '/sales-report';
  }
  public static get invoiceReport(): string {
    return this.report + '/invoice-report';
  }
  public static get purchaseReport(): string {
    return this.report + '/purchase-report';
  }
  public static get supplierReport(): string {
    return this.report + '/supplier-report';
  }
  public static get customerReport(): string {
    return this.report + '/customer-report';
  }
  public static get newUser(): string {
    return this.users + '/new-user';
  }
  public static get usersUserList(): string {
    return this.users + '/user-lists';
  }
  public static get editUsersUserList(): string {
    return this.users + '/new-user-edit';
  }
  public static get generalSettings(): string {
    return this.settings + '/general-settings';
  }
  public static get emailSettings(): string {
    return this.settings + '/email-settings';
  }
  public static get paymentSettings(): string {
    return this.settings + '/payment-settings';
  }
  public static get currencySettings(): string {
    return this.settings + '/currency-settings';
  }
  public static get groupSettings(): string {
    return this.settings + '/group-permissions';
  }
  public static get taxRates(): string {
    return this.settings + '/tax-rates';
  }
  public static get createPermission(): string {
    return this.settings + '/create-permission';
  }
  public static get editPermission(): string {
    return this.settings + '/edit-permission';
  }
  // core pages child routes *ends*
}
