(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wilbe\Wilberto\Projects\movieApp\front_end\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_app_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-store.service */ "7pZn");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HeaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_13_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(_router, _store, _auth) {
        this._router = _router;
        this._store = _store;
        this._auth = _auth;
    }
    ngOnInit() {
        this._store.user$.subscribe((user) => {
            // user.isAuthenticated = true;
            this.user = user;
        });
    }
    isLoggedIn() {
        return this._auth.isLoggedIn();
    }
    login() {
        this._router.navigate(['/login']);
    }
    signin() {
        this._router.navigate(['/signin']);
    }
    logout() {
        this._auth.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_store_service__WEBPACK_IMPORTED_MODULE_2__["AppStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], [1, "fas", "fa-film"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "sr-only"], ["class", "navbar-nav", 4, "ngIf", "ngIfElse"], ["userSettings", ""], ["role", "button", "routerLink", "/login", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["role", "button", "routerLink", "/sigin", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "row"], [1, "col"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], [1, "fas", "fa-user-circle"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " MovieApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_div_12_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_ng_template_13_Template, 9, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn())("ngIfElse", _r1);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownItem"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "3897":
/*!*********************************************************!*\
  !*** ./src/app/components/movie/edit/edit.component.ts ***!
  \*********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _helpers_languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/languages */ "t+0v");
/* harmony import */ var _helpers_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/countries */ "jVOA");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/movie.service */ "HGT+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");








function EditComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditComponent_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.flashMSG = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "alert-" + ctx_r0.flashMSG.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.flashMSG.msg, " ");
} }
function EditComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", language_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", language_r7.name, " ");
} }
function EditComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", country_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", country_r8.name, " ");
} }
function EditComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 29);
} }
class EditComponent {
    constructor(_movieService, _router, _route) {
        this._movieService = _movieService;
        this._router = _router;
        this._route = _route;
        this.languages = _helpers_languages__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.countries = _helpers_countries__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.flashMSG = null;
        this.errors = [];
        this.movie = {};
        this.originalMovie = {};
        this.isLoading = false;
    }
    ngOnInit() {
        const id = this._route.snapshot.params['id'];
        if (!id) {
            this.errors.push('Missing required parameter');
        }
        else {
            this._movieService.getMovieById(id).subscribe((movie) => {
                this.movie = movie;
                this.originalMovie = movie;
            }, (error) => {
                this.errors.push('There has been an error retreiving the movie from the database');
                console.log(error);
            });
        }
    }
    update(f) {
        if (f.valid) {
            //sending only changed values
            const data = this.filterChanges(f.value);
            data.id = this.movie.id;
            this.isLoading = true;
            this._movieService.updateMovie(data).subscribe((_) => {
                this.isLoading = true;
                this._router.navigate(['/home']);
            }, (error) => {
                this.isLoading = true;
                this.flashMSG = {
                    type: 'danger',
                    msg: 'There has been an error editing this movie.',
                };
                console.log(error);
            });
        }
    }
    filterChanges(currentMovie) {
        const obj = {};
        Object.keys(currentMovie).forEach((key) => {
            if (this.originalMovie[key] == currentMovie[key]) {
                obj[key] = currentMovie[key];
            }
        });
        return obj;
    }
    ngAfterViewInit() {
        const elem = (document.getElementById('released'));
        elem.value = moment__WEBPACK_IMPORTED_MODULE_2__(this.movie.released).format('YYYY-MM-DD');
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 45, vars: 14, consts: [[1, "container"], ["class", "alert alert-dismissible", 3, "ngClass", 4, "ngIf"], [3, "submit"], ["f", "ngForm"], [1, "mb-3"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "text", "ngModel", "", "id", "title", "name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "genre", 1, "form-label"], ["type", "text", "id", "genre", "name", "genre", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "director", 1, "form-label"], ["type", "text", "id", "director", "name", "director", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "cast", 1, "form-label"], ["type", "text", "id", "cast", "name", "cast", "placeholder", "Enter comma separated names", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "language", 1, "form-label"], ["id", "language", "name", "language", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "released", 1, "form-label"], ["type", "date", "id", "released", "name", "released", 1, "form-control"], ["for", "poster", 1, "form-label"], ["type", "url", "id", "poster", "name", "poster", "placeholder", "Enter Poster URL", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "country", 1, "form-label"], ["id", "country", "name", "country", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "plot", 1, "form-label"], ["id", "plot", "placeholder", "Write Plot", "name", "plot", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "alert", "alert-dismissible", 3, "ngClass"], ["data-dismiss", "alert", "aria-label", "close", 1, "close", 2, "cursor", "pointer", 3, "click"], [3, "value"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function EditComponent_Template_form_submit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3); return ctx.update(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_7_listener($event) { return ctx.movie.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_11_listener($event) { return ctx.movie.genre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Director(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_15_listener($event) { return ctx.movie.director = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Cast");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_19_listener($event) { return ctx.movie.cast = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_select_ngModelChange_23_listener($event) { return ctx.movie.language = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, EditComponent_option_24_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Released");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Poster");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_32_listener($event) { return ctx.movie.poster = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_select_ngModelChange_36_listener($event) { return ctx.movie.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, EditComponent_option_37_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Plot");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_textarea_ngModelChange_41_listener($event) { return ctx.movie.plot = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, EditComponent_span_43_Template, 1, 0, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.flashMSG);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.movie.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.movie.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.movie.director);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.movie.cast);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.movie.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.movie.poster);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.movie.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.movie.plot);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "7pZn":
/*!**************************************!*\
  !*** ./src/app/app-store.service.ts ***!
  \**************************************/
/*! exports provided: AppStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreService", function() { return AppStoreService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AppStoreService {
    constructor() {
        this._user = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({
            id: 0,
            name: 'Anonymous',
            role_id: 2,
            email: '',
            password: '',
        });
        this.user$ = this._user.asObservable();
    }
    setUser(user) {
        this._user.next(user);
    }
    getUser() {
        return this._user.getValue();
    }
}
AppStoreService.ɵfac = function AppStoreService_Factory(t) { return new (t || AppStoreService)(); };
AppStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppStoreService, factory: AppStoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiURL: 'http://localhost:3000',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "HGT+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../movie/movie.component */ "qO9b");







function HomeComponent_app_movie_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-movie", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removedMovie", function HomeComponent_app_movie_24_Template_app_movie_removedMovie_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.removeFromMovies($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("movie", movie_r2);
} }
class HomeComponent {
    constructor(_movieService) {
        this._movieService = _movieService;
        this.movies = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.getMovies('Home');
    }
    getMovies(searchTerm, filter = 'title') {
        if (searchTerm) {
            this.isLoading = true;
            this._movieService.getMoviesByNameFilter(searchTerm, filter).subscribe((movies) => {
                this.isLoading = false;
                this.movies = movies.map((m) => {
                    m.released = moment__WEBPACK_IMPORTED_MODULE_0__(m.released).format('YYYY-MM-DD');
                    return m;
                });
            }, (error) => {
                this.isLoading = false;
                console.log(error);
            });
        }
    }
    removeFromMovies(movie) {
        console.log({ movie });
        this.movies = this.movies.filter((m) => m.id !== movie.id);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 25, vars: 1, consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-12", "mb-2"], ["routerLink", "/movie/add", 1, "btn", "btn-primary", "float-right"], [1, "fas", "fa-plus"], [1, "col-xl-12", "filters"], [1, "row", 2, "width", "100%"], [1, "col-2", "col-xl-2", "col-lg-2", "col-md-12"], [1, "form-group"], ["name", "filters", "id", "filters", 1, "form-control"], ["value", "title"], ["value", "genre"], [1, "col-7", "col-xl-7", "col-lg-7", "col-md-12"], ["type", "text", "id", "search_field", "aria-label", "Search", "aria-describedby", "search_movie", 1, "form-control", 3, "keyup.enter"], ["searchMovie", ""], [1, "col-3", "col-xl-3", "col-lg-3", "col-md-12"], ["type", "button", "id", "search_movie", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-search"], [1, "row", "mt-3"], ["class", "card col-4 col-sm-4 col-md-4 col-lg-4 my-1 px-0", "role", "button", 3, "movie", "removedMovie", 4, "ngFor", "ngForOf"], ["role", "button", 1, "card", "col-4", "col-sm-4", "col-md-4", "col-lg-4", "my-1", "px-0", 3, "movie", "removedMovie"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Add Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function HomeComponent_Template_input_keyup_enter_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18); return ctx.getMovies(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18); return ctx.getMovies(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Seach ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HomeComponent_app_movie_24_Template, 1, 1, "app-movie", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.movies);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _movie_movie_component__WEBPACK_IMPORTED_MODULE_6__["MovieComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "HGT+":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class MovieService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getMoviesByNameFilter(searchTerm, filter = '') {
        return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL}/movie/all?searchTerm=${encodeURIComponent(searchTerm)}&filter=${filter}`);
    }
    getMovieById(id) {
        return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL}/movie/${id}`);
    }
    deleteMovie(id) {
        return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL + '/movie/delete?id=' + id);
    }
    updateMovie(data) {
        return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL + '/movie/update', data);
    }
    addMovie(data) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL + '/movie/add', data);
    }
}
MovieService.ɵfac = function MovieService_Factory(t) { return new (t || MovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MovieService, factory: MovieService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/movie.service */ "HGT+");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.title = 'movieApp';
        this.movies = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.getMovies('Home');
    }
    getMovies(searchTerm) {
        if (searchTerm) {
            this.isLoading = true;
            this.movieService.getMoviesByNameFilter(searchTerm).subscribe((res) => {
                this.isLoading = false;
                this.movies = res.Search;
            }, (error) => {
                this.isLoading = false;
                console.log(error);
            });
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["role", "main", 1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_app_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-store.service */ "7pZn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");






function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.flashMSG = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "alert-" + ctx_r0.flashMSG.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.flashMSG.msg, " ");
} }
function LoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The email can not be empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The password can not be empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(_auth, _router, _store) {
        this._auth = _auth;
        this._router = _router;
        this._store = _store;
        this.loginUserData = {};
        this.flashMSG = null;
    }
    ngOnInit() { }
    loginUser(f) {
        if (f.valid) {
            const user = {
                email: f.value.email,
                password: f.value.password,
            };
            this._auth.loginUser(user).subscribe((user) => {
                localStorage.setItem('token', user.token || '');
                this._router.navigate(['/home']);
                this._store.setUser(user);
            }, (error) => {
                this.flashMSG = {
                    type: 'danger',
                    msg: 'There has been an error authenticating this current credentials.',
                };
                console.log(error);
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_store_service__WEBPACK_IMPORTED_MODULE_3__["AppStoreService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 7, consts: [[1, "container", "mt-5"], ["class", "alert alert-dismissible", 3, "ngClass", 4, "ngIf"], [1, "row"], [1, "login-panel", "panel", "panel-default", "mx-auto"], [1, "panel-heading"], [1, "panel-title"], [1, "panel-body"], ["role", "form", 3, "submit"], ["f", "ngForm"], [1, "form-group"], ["placeholder", "E-mail", "name", "email", "type", "email", "autofocus", "", "id", "email", "ngModel", "", "required", "", 1, "form-control"], ["email", "ngModel"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["placeholder", "Password", "type", "password", "value", "", "id", "password", "ngModel", "", "name", "password", "required", "", 1, "form-control"], ["password", "ngModel"], [1, "btn", "btn-sm", "btn-success"], [1, "alert", "alert-dismissible", 3, "ngClass"], ["data-dismiss", "alert", "aria-label", "close", 1, "close", 2, "cursor", "pointer", 3, "click"], [1, "invalid-feedback", "d-block"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.loginUser(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flashMSG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r4.invalid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.touched);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Z/Mt":
/*!*********************************************************************!*\
  !*** ./src/app/components/movie/rate-movie/rate-movie.component.ts ***!
  \*********************************************************************/
/*! exports provided: RateMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateMovieComponent", function() { return RateMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["inputRate"];
class RateMovieComponent {
    constructor() {
        this.rates = [];
        this.currentRate = '';
    }
    ngOnInit() {
        this.rates = ['Terrible', 'Bad', 'Okay', 'Good', 'Great'];
    }
    ngAfterViewInit() {
        this.inputList.forEach((i) => {
            i.nativeElement.addEventListener('change', (e) => {
                const elem = e.target;
                this.currentRate = this.rates[Number(elem.value) - 1];
            });
        });
    }
}
RateMovieComponent.ɵfac = function RateMovieComponent_Factory(t) { return new (t || RateMovieComponent)(); };
RateMovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RateMovieComponent, selectors: [["app-rate-movie"]], viewQuery: function RateMovieComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputList = _t);
    } }, decls: 24, vars: 1, consts: [[1, "container"], [1, "rate"], ["type", "radio", "id", "star5", "name", "rate", "value", "5"], ["inputRate", ""], ["for", "star5", "title", "text"], ["type", "radio", "id", "star4", "name", "rate", "value", "4"], ["for", "star4", "title", "text"], ["type", "radio", "id", "star3", "name", "rate", "value", "3"], ["for", "star3", "title", "text"], ["type", "radio", "id", "star2", "name", "rate", "value", "2"], ["for", "star2", "title", "text"], ["type", "radio", "id", "star1", "name", "rate", "value", "1"], ["for", "star1", "title", "text"]], template: function RateMovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "5 stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "4 stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "3 stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "2 stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "1 star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentRate);
    } }, styles: [".rate[_ngcontent-%COMP%] {\r\n    float: left;\r\n    height: 46px;\r\n    padding: 0 10px;\r\n}\r\n.rate[_ngcontent-%COMP%]:not(:checked)    > input[_ngcontent-%COMP%] {\r\n    position:absolute;\r\n    top:-9999px;\r\n}\r\n.rate[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%] {\r\n    float:right;\r\n    width:1em;\r\n    overflow:hidden;\r\n    white-space:nowrap;\r\n    cursor:pointer;\r\n    font-size:30px;\r\n    color:#ccc;\r\n}\r\n.rate[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%]:before {\r\n    content: '\u2605 ';\r\n}\r\n.rate[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {\r\n    color: #ffc700;    \r\n}\r\n.rate[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%]:hover, .rate[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%] {\r\n    color: #deb217;  \r\n}\r\n.rate[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:hover, .rate[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%], .rate[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:hover, .rate[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%], .rate[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover    ~ input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {\r\n    color: #c59b08;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGUtbW92aWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksY0FBYztBQUNsQjtBQUNBOzs7OztJQUtJLGNBQWM7QUFDbEIiLCJmaWxlIjoicmF0ZS1tb3ZpZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhdGUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuLnJhdGU6bm90KDpjaGVja2VkKSA+IGlucHV0IHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOi05OTk5cHg7XHJcbn1cclxuLnJhdGU6bm90KDpjaGVja2VkKSA+IGxhYmVsIHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgd2lkdGg6MWVtO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuICAgIGNvbG9yOiNjY2M7XHJcbn1cclxuLnJhdGU6bm90KDpjaGVja2VkKSA+IGxhYmVsOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAn4piFICc7XHJcbn1cclxuLnJhdGUgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgY29sb3I6ICNmZmM3MDA7ICAgIFxyXG59XHJcbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlcixcclxuLnJhdGU6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyIH4gbGFiZWwge1xyXG4gICAgY29sb3I6ICNkZWIyMTc7ICBcclxufVxyXG4ucmF0ZSA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbDpob3ZlcixcclxuLnJhdGUgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIgfiBsYWJlbCxcclxuLnJhdGUgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIsXHJcbi5yYXRlID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyIH4gbGFiZWwsXHJcbi5yYXRlID4gbGFiZWw6aG92ZXIgfiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgY29sb3I6ICNjNTliMDg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _components_movie_details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/movie/details/details.component */ "wu3O");
/* harmony import */ var _components_movie_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/movie/edit/edit.component */ "3897");
/* harmony import */ var _components_movie_add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/movie/add/add.component */ "c3pd");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/movie/movie.component */ "qO9b");
/* harmony import */ var _components_movie_rate_movie_rate_movie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/movie/rate-movie/rate-movie.component */ "Z/Mt");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/comment/comment.component */ "fGHt");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/comments-list/comments-list.component */ "Zz7q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _components_movie_details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"],
        _components_movie_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"],
        _components_movie_add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"],
        _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_8__["MovieComponent"],
        _components_movie_rate_movie_rate_movie_component__WEBPACK_IMPORTED_MODULE_9__["RateMovieComponent"],
        _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_11__["CommentComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
        _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_15__["CommentsListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]] }); })();


/***/ }),

/***/ "Zz7q":
/*!*********************************************************************!*\
  !*** ./src/app/components/comments-list/comments-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: CommentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsListComponent", function() { return CommentsListComponent; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comment.service */ "mxDV");
/* harmony import */ var src_app_app_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-store.service */ "7pZn");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CommentsListComponent_div_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommentsListComponent_div_0_ng_container_14_Template_small_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.delete(comment_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommentsListComponent_div_0_ng_container_14_Template_small_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.edit(comment_r1.content); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CommentsListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CommentsListComponent_div_0_ng_container_14_Template, 7, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](comment_r1.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](comment_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.timeSince(comment_r1.updated_at), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.canManage(comment_r1.user_id));
} }
class CommentsListComponent {
    constructor(commentService, _store, _auth) {
        this.commentService = commentService;
        this._store = _store;
        this._auth = _auth;
        this.comments = [];
        this.user = {};
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this._store.user$.subscribe((u) => {
            this.user = u;
        }));
    }
    update(comment) {
        const data = { content: '' };
        this.commentService.updateComment(data).subscribe((_) => { }, (error) => {
            console.log(error);
        });
    }
    canManage(userID) {
        console.log(this.user.id === userID || this._auth.isAdmin());
        return this.user.id === userID || this._auth.isAdmin();
    }
    edit(content) { }
    delete(id) {
        if (confirm('Are you sure you want to delete this comment.')) {
            this.commentService.deleteComment(id).subscribe((_) => {
                this.comments = this.comments.filter((c) => c.id !== id);
            }, (error) => {
                console.log(error);
            });
        }
    }
    timeSince(date) {
        const seconds = moment__WEBPACK_IMPORTED_MODULE_0__().diff(moment__WEBPACK_IMPORTED_MODULE_0__(date), 'seconds');
        let interval = seconds / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + ' years ago';
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + ' months ago';
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + ' days ago';
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + ' hours ago';
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + ' minutes ago';
        }
        return Math.floor(seconds) + ' seconds ago';
    }
    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
CommentsListComponent.ɵfac = function CommentsListComponent_Factory(t) { return new (t || CommentsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_store_service__WEBPACK_IMPORTED_MODULE_3__["AppStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
CommentsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommentsListComponent, selectors: [["app-comments-list"]], inputs: { comments: "comments" }, decls: 1, vars: 1, consts: [["class", "card p-3", 4, "ngFor", "ngForOf"], [1, "card", "p-3"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "user", "d-flex", "flex-row", "align-items-center"], ["width", "30", 1, "d-inline", "rounded-circle", "mr-1", "bg-blue", 2, "border", "1px solid grey", "background-color", "grey", "color", "white"], [1, "far", "fa-user", "p-2"], [1, "font-weight-bold", "text-primary"], [1, "font-weight-bold", "ml-1"], [1, "action", "d-flex", "justify-content-between", "mt-2", "align-items-center"], [1, "reply", "px-4"], [4, "ngIf"], [1, "ml-1"], [1, "icons", "align-items-center"], [1, "fa", "fa-star", "text-warning"], [1, "fa", "fa-check-circle-o", "check-icon"], [3, "click"], [1, "dots", "ml-1"], [1, "ml-1", 3, "click"]], template: function CommentsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CommentsListComponent_div_0_Template, 20, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".card[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: 5px 6px 6px 2px #e9ecef;\r\n    border-radius: 4px\r\n}\r\n\r\n.dots[_ngcontent-%COMP%] {\r\n    height: 4px;\r\n    width: 4px;\r\n    margin-bottom: 2px;\r\n    background-color: #bbb;\r\n    border-radius: 50%;\r\n    display: inline-block\r\n}\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n    padding: 7px;\r\n    padding-right: 9px;\r\n    padding-left: 16px;\r\n    box-shadow: 5px 6px 6px 2px #e9ecef\r\n}\r\n\r\n.user-img[_ngcontent-%COMP%] {\r\n    margin-top: 4px\r\n}\r\n\r\n.check-icon[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    color: #c3bfbf;\r\n    top: 1px;\r\n    position: relative;\r\n    margin-left: 3px\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%] {\r\n    margin-top: 6px;\r\n    margin-left: -24px !important;\r\n    cursor: pointer\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none\r\n}\r\n\r\n.icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin-left: 8px\r\n}\r\n\r\n.reply[_ngcontent-%COMP%] {\r\n    margin-left: 12px\r\n}\r\n\r\n.reply[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #b7b4b4\r\n}\r\n\r\n.reply[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:hover {\r\n    color: green;\r\n    cursor: pointer\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkM7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaO0FBQ0oiLCJmaWxlIjoiY29tbWVudHMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgLyogYm9yZGVyOiBub25lOyAqL1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDZweCA2cHggMnB4ICNlOWVjZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHhcclxufVxyXG5cclxuLmRvdHMge1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDZweCA2cHggMnB4ICNlOWVjZWZcclxufVxyXG5cclxuLnVzZXItaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IDRweFxyXG59XHJcblxyXG4uY2hlY2staWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogI2MzYmZiZjtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweFxyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI0cHggIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lXHJcbn1cclxuXHJcbi5pY29ucyBpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHhcclxufVxyXG5cclxuLnJlcGx5IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4XHJcbn1cclxuXHJcbi5yZXBseSBzbWFsbCB7XHJcbiAgICBjb2xvcjogI2I3YjRiNFxyXG59XHJcblxyXG4ucmVwbHkgc21hbGw6aG92ZXIge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn0iXX0= */"] });


/***/ }),

/***/ "c3pd":
/*!*******************************************************!*\
  !*** ./src/app/components/movie/add/add.component.ts ***!
  \*******************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _helpers_languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/languages */ "t+0v");
/* harmony import */ var _helpers_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/countries */ "jVOA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/movie.service */ "HGT+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");







function AddComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddComponent_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.flashMSG = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "alert-" + ctx_r0.flashMSG.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.flashMSG.msg, " ");
} }
function AddComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", language_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", language_r6.name, " ");
} }
function AddComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", country_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", country_r7.name, " ");
} }
class AddComponent {
    constructor(_movieService, _router) {
        this._movieService = _movieService;
        this._router = _router;
        this.languages = _helpers_languages__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.countries = _helpers_countries__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.flashMSG = null;
    }
    ngOnInit() { }
    store(f) {
        if (f.valid) {
            console.log(f.value);
            this._movieService.addMovie(f.value).subscribe((_) => {
                this._router.navigate(['/home']);
            }, (error) => {
                this.flashMSG = {
                    type: 'danger',
                    msg: 'There has been an error adding the movie to the database.',
                };
                console.log(error);
            });
        }
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], decls: 44, vars: 3, consts: [[1, "container"], ["class", "alert alert-dismissible", 3, "ngClass", 4, "ngIf"], [3, "submit"], ["f", "ngForm"], [1, "mb-3"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "text", "ngModel", "", "id", "title", "name", "title", 1, "form-control"], ["for", "genre", 1, "form-label"], ["type", "text", "ngModel", "", "id", "genre", "name", "genre", 1, "form-control"], ["for", "director", 1, "form-label"], ["type", "text", "ngModel", "", "id", "director", "name", "director", 1, "form-control"], ["for", "cast", 1, "form-label"], ["type", "text", "id", "cast", "name", "cast", "ngModel", "", "placeholder", "Enter comma separated names", 1, "form-control"], ["for", "language", 1, "form-label"], ["id", "language", "name", "language", "ngModel", "", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "released", 1, "form-label"], ["type", "date", "ngModel", "", "id", "released", "name", "released", 1, "form-control"], ["for", "poster", 1, "form-label"], ["type", "url", "ngModel", "", "id", "poster", "name", "poster", "placeholder", "Enter Poster URL", 1, "form-control"], ["for", "country", 1, "form-label"], ["id", "country", "name", "country", "ngModel", "", 1, "form-control"], ["for", "plot", 1, "form-label"], ["id", "plot", "ngModel", "", "placeholder", "Write Plot", "name", "plot", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "alert", "alert-dismissible", 3, "ngClass"], ["data-dismiss", "alert", "aria-label", "close", 1, "close", 2, "cursor", "pointer", 3, "click"], [3, "value"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function AddComponent_Template_form_submit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); return ctx.store(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Director(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Cast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AddComponent_option_24_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Released");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Poster");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, AddComponent_option_37_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Plot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.flashMSG);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "fGHt":
/*!*********************************************************!*\
  !*** ./src/app/components/comment/comment.component.ts ***!
  \*********************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/comment.service */ "mxDV");
/* harmony import */ var src_app_app_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-store.service */ "7pZn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _movie_movie_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie/movie-events.service */ "zZmL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CommentComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The username can not be empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CommentComponent {
    constructor(_commentService, _store, _router, _movieEvents, _auth) {
        this._commentService = _commentService;
        this._store = _store;
        this._router = _router;
        this._movieEvents = _movieEvents;
        this._auth = _auth;
        this.commentContent = '';
        this.movie = {
            title: '',
            plot: '',
            cast: '',
            genre: '',
            released: '2021',
            language: '',
            director: '',
            id: 0,
            ratings: [0, 1, 2, 3, 4],
        };
    }
    ngOnInit() { }
    addComment(form) {
        const user = this._store.getUser();
        if (this._auth.isLoggedIn()) {
            if (form.valid) {
                const data = {
                    content: this.commentContent,
                    user_id: this._store.getUser().id,
                    movie_id: this.movie.id,
                };
                this._commentService.addComment(data).subscribe((comment) => {
                    this.commentContent = '';
                    this._movieEvents.actionAddComment(comment);
                }, (error) => {
                    console.log(error);
                });
            }
        }
        else {
            this._router.navigate(['/login']);
        }
    }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_store_service__WEBPACK_IMPORTED_MODULE_2__["AppStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movie_movie_events_service__WEBPACK_IMPORTED_MODULE_4__["MovieEventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], inputs: { movie: "movie" }, decls: 11, vars: 4, consts: [["action", "", "method", "post", 3, "submit"], ["f", "ngForm"], [1, "mb-3"], ["for", "validationTextarea", 1, "form-label"], ["id", "validationTextarea", "placeholder", "Write Comment", "name", "content", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["content", "ngModel"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["type", "submit", "name", "btn-submit", 1, "btn", "btn-primary"], [1, "invalid-feedback", "d-block"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CommentComponent_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.addComment(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommentComponent_Template_textarea_ngModelChange_5_listener($event) { return ctx.commentContent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CommentComponent_div_7_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.commentContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "jVOA":
/*!**************************************!*\
  !*** ./src/app/helpers/countries.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Indian Ocean Territory', code: 'IO' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX' },
    { name: 'Cocos (Keeling) Islands', code: 'CC' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    { name: 'Cook Islands', code: 'CK' },
    { name: 'Costa Rica', code: 'CR' },
    { name: "Cote D'Ivoire", code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK' },
    { name: 'Faroe Islands', code: 'FO' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'French Southern Territories', code: 'TF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
    { name: 'Holy See (Vatican City State)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: "Korea, Democratic People'S Republic of", code: 'KP' },
    { name: 'Korea, Republic of', code: 'KR' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: "Lao People'S Democratic Republic", code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia, Federated States of', code: 'FM' },
    { name: 'Moldova, Republic of', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Netherlands Antilles', code: 'AN' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Norfolk Island', code: 'NF' },
    { name: 'Northern Mariana Islands', code: 'MP' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestinian Territory, Occupied', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Pitcairn', code: 'PN' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reunion', code: 'RE' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russian Federation', code: 'RU' },
    { name: 'RWANDA', code: 'RW' },
    { name: 'Saint Helena', code: 'SH' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Pierre and Miquelon', code: 'PM' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia and Montenegro', code: 'CS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ' },
    { name: 'Swaziland', code: 'SZ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syrian Arab Republic', code: 'SY' },
    { name: 'Taiwan, Province of China', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania, United Republic of', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Turks and Caicos Islands', code: 'TC' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'United States Minor Outlying Islands', code: 'UM' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Viet Nam', code: 'VN' },
    { name: 'Virgin Islands, British', code: 'VG' },
    { name: 'Virgin Islands, U.S.', code: 'VI' },
    { name: 'Wallis and Futuna', code: 'WF' },
    { name: 'Western Sahara', code: 'EH' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' },
]);


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _app_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-store.service */ "7pZn");




class AuthService {
    constructor(_httpClient, _store) {
        this._httpClient = _httpClient;
        this._store = _store;
    }
    loginUser(user) {
        return this._httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL + '/login', user);
    }
    logout() {
        const defaultUser = {
            id: 0,
            name: 'Anonymous',
            role_id: 2,
            email: '',
            password: '',
        };
        this._store.setUser(defaultUser);
        localStorage.removeItem('token');
    }
    isAdmin() {
        return this._store.getUser().role_id === 1;
    }
    isLoggedIn() {
        return !!localStorage.getItem('token');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_store_service__WEBPACK_IMPORTED_MODULE_3__["AppStoreService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mxDV":
/*!*********************************************!*\
  !*** ./src/app/services/comment.service.ts ***!
  \*********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class CommentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllMovieComments(id) {
        return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL}/comment/all?movieID=${id}`);
    }
    deleteComment(id) {
        return this.httpClient.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL}/comment/delete?id=${id}`);
    }
    updateComment(data) {
        return this.httpClient.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL}/comment/update`, data);
    }
    addComment(data) {
        console.log({ data });
        return this.httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL}/comment/add`, data);
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CommentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qO9b":
/*!*****************************************************!*\
  !*** ./src/app/components/movie/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/movie.service */ "HGT+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "wu3O");






const _c0 = ["detail"];
function MovieComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 16);
} }
function MovieComponent_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 17);
} }
const _c1 = function (a1) { return ["/movie/edit", a1]; };
class MovieComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.movie = {
            title: '',
            plot: '',
            cast: '',
            genre: '',
            released: '2021',
            language: '',
            director: '',
            id: 0,
            ratings: [0, 1, 2, 3, 4],
        };
        this.isLoading = false;
        this.removedMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    delete(e, id) {
        e.stopPropagation();
        if (confirm('Are you sure you want to delete this movie?')) {
            this.isLoading = true;
            this.movieService.deleteMovie(id).subscribe((_) => {
                this.isLoading = false;
                this.removedMovie.emit(this.movie);
            }, (error) => {
                this.isLoading = false;
                console.log(error);
            });
        }
    }
    edit(e, id) {
        e.stopPropagation();
        console.log('edit', id);
    }
    calculateRating() {
        //calculating weightedAVG
        let total = 0;
        let weighted = 0;
        for (let i = 0; i < (this.movie.ratings || []).length; i++) {
            total += this.movie.ratings[i];
            weighted += (i + 1) * this.movie.ratings[i];
        }
        return total && weighted ? weighted / total : 0;
    }
}
MovieComponent.ɵfac = function MovieComponent_Factory(t) { return new (t || MovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"])); };
MovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieComponent, selectors: [["app-movie"]], viewQuery: function MovieComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.detail = _t.first);
    } }, inputs: { movie: "movie" }, outputs: { removedMovie: "removedMovie" }, decls: 23, vars: 10, consts: [[3, "click"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "rating", "float-end", 2, "text-align", "end"], [1, "card-title"], [1, "card-text"], [1, "text-muted"], [1, "far", "fa-calendar-alt"], [1, "actions", "btn-group"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fas", "fa-edit"], [1, "btn", "btn-danger", "ml-1", 3, "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "far fa-trash-alt", 4, "ngIf"], [3, "movie"], ["detail", ""], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "far", "fa-trash-alt"]], template: function MovieComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieComponent_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return _r2.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieComponent_Template_button_click_17_listener($event) { return ctx.delete($event, ctx.movie.id || 0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MovieComponent_span_18_Template, 1, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MovieComponent_i_19_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-details", 14, 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.movie.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.calculateRating(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.movie.released, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.movie.id || 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie", ctx.movie);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3ZpZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "t+0v":
/*!**************************************!*\
  !*** ./src/app/helpers/languages.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const languages = [
    { code: 'ab', name: 'Abkhazian' },
    { code: 'aa', name: 'Afar' },
    { code: 'af', name: 'Afrikaans' },
    { code: 'ak', name: 'Akan' },
    { code: 'sq', name: 'Albanian' },
    { code: 'am', name: 'Amharic' },
    { code: 'ar', name: 'Arabic' },
    { code: 'an', name: 'Aragonese' },
    { code: 'hy', name: 'Armenian' },
    { code: 'as', name: 'Assamese' },
    { code: 'av', name: 'Avaric' },
    { code: 'ae', name: 'Avestan' },
    { code: 'ay', name: 'Aymara' },
    { code: 'az', name: 'Azerbaijani' },
    { code: 'bm', name: 'Bambara' },
    { code: 'ba', name: 'Bashkir' },
    { code: 'eu', name: 'Basque' },
    { code: 'be', name: 'Belarusian' },
    { code: 'bn', name: 'Bengali' },
    { code: 'bh', name: 'Bihari languages' },
    { code: 'bi', name: 'Bislama' },
    { code: 'bs', name: 'Bosnian' },
    { code: 'br', name: 'Breton' },
    { code: 'bg', name: 'Bulgarian' },
    { code: 'my', name: 'Burmese' },
    { code: 'ca', name: 'Catalan, Valencian' },
    { code: 'km', name: 'Central Khmer' },
    { code: 'ch', name: 'Chamorro' },
    { code: 'ce', name: 'Chechen' },
    { code: 'ny', name: 'Chichewa, Chewa, Nyanja' },
    { code: 'zh', name: 'Chinese' },
    { code: 'cu', name: 'Church Slavonic, Old Bulgarian, Old Church Slavonic' },
    { code: 'cv', name: 'Chuvash' },
    { code: 'kw', name: 'Cornish' },
    { code: 'co', name: 'Corsican' },
    { code: 'cr', name: 'Cree' },
    { code: 'hr', name: 'Croatian' },
    { code: 'cs', name: 'Czech' },
    { code: 'da', name: 'Danish' },
    { code: 'dv', name: 'Divehi, Dhivehi, Maldivian' },
    { code: 'nl', name: 'Dutch, Flemish' },
    { code: 'dz', name: 'Dzongkha' },
    { code: 'en', name: 'English' },
    { code: 'eo', name: 'Esperanto' },
    { code: 'et', name: 'Estonian' },
    { code: 'ee', name: 'Ewe' },
    { code: 'fo', name: 'Faroese' },
    { code: 'fj', name: 'Fijian' },
    { code: 'fi', name: 'Finnish' },
    { code: 'fr', name: 'French' },
    { code: 'ff', name: 'Fulah' },
    { code: 'gd', name: 'Gaelic, Scottish Gaelic' },
    { code: 'gl', name: 'Galician' },
    { code: 'lg', name: 'Ganda' },
    { code: 'ka', name: 'Georgian' },
    { code: 'de', name: 'German' },
    { code: 'ki', name: 'Gikuyu, Kikuyu' },
    { code: 'el', name: 'Greek (Modern)' },
    { code: 'kl', name: 'Greenlandic, Kalaallisut' },
    { code: 'gn', name: 'Guarani' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'ht', name: 'Haitian, Haitian Creole' },
    { code: 'ha', name: 'Hausa' },
    { code: 'he', name: 'Hebrew' },
    { code: 'hz', name: 'Herero' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ho', name: 'Hiri Motu' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'is', name: 'Icelandic' },
    { code: 'io', name: 'Ido' },
    { code: 'ig', name: 'Igbo' },
    { code: 'id', name: 'Indonesian' },
    {
        code: 'ia',
        name: 'Interlingua (International Auxiliary Language Association)',
    },
    { code: 'ie', name: 'Interlingue' },
    { code: 'iu', name: 'Inuktitut' },
    { code: 'ik', name: 'Inupiaq' },
    { code: 'ga', name: 'Irish' },
    { code: 'it', name: 'Italian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'jv', name: 'Javanese' },
    { code: 'kn', name: 'Kannada' },
    { code: 'kr', name: 'Kanuri' },
    { code: 'ks', name: 'Kashmiri' },
    { code: 'kk', name: 'Kazakh' },
    { code: 'rw', name: 'Kinyarwanda' },
    { code: 'kv', name: 'Komi' },
    { code: 'kg', name: 'Kongo' },
    { code: 'ko', name: 'Korean' },
    { code: 'kj', name: 'Kwanyama, Kuanyama' },
    { code: 'ku', name: 'Kurdish' },
    { code: 'ky', name: 'Kyrgyz' },
    { code: 'lo', name: 'Lao' },
    { code: 'la', name: 'Latin' },
    { code: 'lv', name: 'Latvian' },
    { code: 'lb', name: 'Letzeburgesch, Luxembourgish' },
    { code: 'li', name: 'Limburgish, Limburgan, Limburger' },
    { code: 'ln', name: 'Lingala' },
    { code: 'lt', name: 'Lithuanian' },
    { code: 'lu', name: 'Luba-Katanga' },
    { code: 'mk', name: 'Macedonian' },
    { code: 'mg', name: 'Malagasy' },
    { code: 'ms', name: 'Malay' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'mt', name: 'Maltese' },
    { code: 'gv', name: 'Manx' },
    { code: 'mi', name: 'Maori' },
    { code: 'mr', name: 'Marathi' },
    { code: 'mh', name: 'Marshallese' },
    { code: 'ro', name: 'Moldovan, Moldavian, Romanian' },
    { code: 'mn', name: 'Mongolian' },
    { code: 'na', name: 'Nauru' },
    { code: 'nv', name: 'Navajo, Navaho' },
    { code: 'nd', name: 'Northern Ndebele' },
    { code: 'ng', name: 'Ndonga' },
    { code: 'ne', name: 'Nepali' },
    { code: 'se', name: 'Northern Sami' },
    { code: 'no', name: 'Norwegian' },
    { code: 'nb', name: 'Norwegian Bokmål' },
    { code: 'nn', name: 'Norwegian Nynorsk' },
    { code: 'ii', name: 'Nuosu, Sichuan Yi' },
    { code: 'oc', name: 'Occitan (post 1500)' },
    { code: 'oj', name: 'Ojibwa' },
    { code: 'or', name: 'Oriya' },
    { code: 'om', name: 'Oromo' },
    { code: 'os', name: 'Ossetian, Ossetic' },
    { code: 'pi', name: 'Pali' },
    { code: 'pa', name: 'Panjabi, Punjabi' },
    { code: 'ps', name: 'Pashto, Pushto' },
    { code: 'fa', name: 'Persian' },
    { code: 'pl', name: 'Polish' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'qu', name: 'Quechua' },
    { code: 'rm', name: 'Romansh' },
    { code: 'rn', name: 'Rundi' },
    { code: 'ru', name: 'Russian' },
    { code: 'sm', name: 'Samoan' },
    { code: 'sg', name: 'Sango' },
    { code: 'sa', name: 'Sanskrit' },
    { code: 'sc', name: 'Sardinian' },
    { code: 'sr', name: 'Serbian' },
    { code: 'sn', name: 'Shona' },
    { code: 'sd', name: 'Sindhi' },
    { code: 'si', name: 'Sinhala, Sinhalese' },
    { code: 'sk', name: 'Slovak' },
    { code: 'sl', name: 'Slovenian' },
    { code: 'so', name: 'Somali' },
    { code: 'st', name: 'Sotho, Southern' },
    { code: 'nr', name: 'South Ndebele' },
    { code: 'es', name: 'Spanish, Castilian' },
    { code: 'su', name: 'Sundanese' },
    { code: 'sw', name: 'Swahili' },
    { code: 'ss', name: 'Swati' },
    { code: 'sv', name: 'Swedish' },
    { code: 'tl', name: 'Tagalog' },
    { code: 'ty', name: 'Tahitian' },
    { code: 'tg', name: 'Tajik' },
    { code: 'ta', name: 'Tamil' },
    { code: 'tt', name: 'Tatar' },
    { code: 'te', name: 'Telugu' },
    { code: 'th', name: 'Thai' },
    { code: 'bo', name: 'Tibetan' },
    { code: 'ti', name: 'Tigrinya' },
    { code: 'to', name: 'Tonga (Tonga Islands)' },
    { code: 'ts', name: 'Tsonga' },
    { code: 'tn', name: 'Tswana' },
    { code: 'tr', name: 'Turkish' },
    { code: 'tk', name: 'Turkmen' },
    { code: 'tw', name: 'Twi' },
    { code: 'ug', name: 'Uighur, Uyghur' },
    { code: 'uk', name: 'Ukrainian' },
    { code: 'ur', name: 'Urdu' },
    { code: 'uz', name: 'Uzbek' },
    { code: 've', name: 'Venda' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'vo', name: 'Volap_k' },
    { code: 'wa', name: 'Walloon' },
    { code: 'cy', name: 'Welsh' },
    { code: 'fy', name: 'Western Frisian' },
    { code: 'wo', name: 'Wolof' },
    { code: 'xh', name: 'Xhosa' },
    { code: 'yi', name: 'Yiddish' },
    { code: 'yo', name: 'Yoruba' },
    { code: 'za', name: 'Zhuang, Chuang' },
    { code: 'zu', name: 'Zulu' },
];
/* harmony default export */ __webpack_exports__["default"] = (languages);


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    canActivate() {
        // if (this._auth.isLoggedIn() && this._auth.isAdmin()) {
        //   return true;
        // }
        // this._router.navigate(['/login']);
        // return false;
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_movie_add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/movie/add/add.component */ "c3pd");
/* harmony import */ var _components_movie_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/movie/edit/edit.component */ "3897");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'movie/edit/:id',
        component: _components_movie_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'movie/add',
        component: _components_movie_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wu3O":
/*!***************************************************************!*\
  !*** ./src/app/components/movie/details/details.component.ts ***!
  \***************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comment.service */ "mxDV");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/movie.service */ "HGT+");
/* harmony import */ var _movie_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie-events.service */ "zZmL");
/* harmony import */ var _rate_movie_rate_movie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rate-movie/rate-movie.component */ "Z/Mt");
/* harmony import */ var _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../comments-list/comments-list.component */ "Zz7q");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../comment/comment.component */ "fGHt");








const _c0 = ["content"];
function DetailsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_ng_template_0_Template_button_click_4_listener() { const modal_r2 = ctx.$implicit; return modal_r2.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-rate-movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-comments-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-comment", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_ng_template_0_Template_button_click_18_listener() { const modal_r2 = ctx.$implicit; return modal_r2.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.movie.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.movie.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.movie.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.movie.plot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comments", ctx_r1.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie", ctx_r1.movie);
} }
class DetailsComponent {
    constructor(_modalService, _commentService, _movieService, _movieEvents) {
        this._modalService = _modalService;
        this._commentService = _commentService;
        this._movieService = _movieService;
        this._movieEvents = _movieEvents;
        this.movie = {
            title: '',
            plot: '',
            cast: '',
            genre: '',
            released: '2021',
            language: '',
            director: '',
            id: 0,
            ratings: [0, 1, 2, 3, 4],
        };
        this.comments = [];
        this.subscriptions = [];
    }
    ngOnInit() {
        //listening to new comments and updating the comments array
        this.subscriptions.push(this._movieEvents
            .getActionAddCommentSubscription()
            .subscribe((comment) => {
            this.addComment(comment);
        }));
        console.log(this.movie.id);
        this._commentService.getAllMovieComments(Number(this.movie.id)).subscribe((comments) => {
            this.comments = comments;
        }, (error) => {
            console.log(error);
        });
    }
    closeModal() {
        document.querySelector('#close_modal').click();
    }
    openModal() {
        if (this.movie.id) {
            this._movieService.getMovieById(this.movie.id).subscribe((movie) => {
                this.movie = movie;
            }, (error) => {
                console.log(error);
            });
        }
        this._modalService.open(this.content, { size: 'xl' });
    }
    getAllComments() {
        this._commentService.getAllMovieComments(Number(this.movie.id)).subscribe((res) => {
            this.comments = res;
        }, (error) => {
            console.log(error);
        });
    }
    calculateRating() {
        //calculating weightedAVG
        let total = 0;
        let weighted = 0;
        for (let i = 0; i < (this.movie.ratings || []).length; i++) {
            total += this.movie.ratings[i];
            weighted += (i + 1) * this.movie.ratings[i];
        }
        return total && weighted ? weighted / total : 0;
    }
    addComment(comment) {
        this.comments.push(comment);
    }
    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movie_events_service__WEBPACK_IMPORTED_MODULE_4__["MovieEventsService"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], viewQuery: function DetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { movie: "movie" }, decls: 2, vars: 0, consts: [["content", ""], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], [1, "fas", "fa-file"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "float-left", "mr-2", 3, "src", "alt"], [1, "clearfix"], [1, "comments-container"], [3, "comments"], [3, "movie"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-times-circle"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailsComponent_ng_template_0_Template, 21, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_rate_movie_rate_movie_component__WEBPACK_IMPORTED_MODULE_5__["RateMovieComponent"], _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_6__["CommentsListComponent"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_7__["CommentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zZmL":
/*!**********************************************************!*\
  !*** ./src/app/components/movie/movie-events.service.ts ***!
  \**********************************************************/
/*! exports provided: MovieEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieEventsService", function() { return MovieEventsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MovieEventsService {
    constructor() {
        this._notification = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._actionAddComment = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getNotifications() {
        return this._notification.asObservable();
    }
    actionAddComment(comment) {
        this._actionAddComment.next(comment);
    }
    getActionAddCommentSubscription() {
        return this._actionAddComment.asObservable();
    }
}
MovieEventsService.ɵfac = function MovieEventsService_Factory(t) { return new (t || MovieEventsService)(); };
MovieEventsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MovieEventsService, factory: MovieEventsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map