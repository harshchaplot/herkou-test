(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");













const _c0 = ["fform"];
function AdminComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", branch_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r5.viewValue, " ");
} }
function AdminComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", branch_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r6.viewValue, " ");
} }
class AdminComponent {
    constructor(location, route, fb, examschedule, baseURL) {
        this.location = location;
        this.route = route;
        this.fb = fb;
        this.examschedule = examschedule;
        this.baseURL = baseURL;
        this.branchs = [
            { value: 'CSE', viewValue: 'CSE' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.sem = [
            { value: 1, viewValue: 1 },
            { value: 2, viewValue: 2 },
            { value: 3, viewValue: 3 }
        ];
        this.formErrors = {
            'Subject': '',
            'Brach': '',
        };
        this.validationMessages = {
            'Subject': {
                'required': 'First Name is required.',
                'minlength': 'First Name must be at least 2 characters long.',
                'maxlength': 'FirstName cannot be more than 25 characters long.'
            },
            'Branch': {
                'required': 'Comment is required.',
                'minlength': 'Comment must be at least 2 characters long.',
                'maxlength': 'Comment cannot be more than 25 characters long.'
            },
        };
        this.createForm();
    }
    ngOnInit() {
    }
    createForm() {
        this.examForm = this.fb.group({
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            time: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            date: Date(),
            branch: [''],
            semester: ['']
        });
        this.examForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }
    onValueChanged(data) {
        if (!this.examForm) {
            return;
        }
        const form = this.examForm;
        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    }
    onSubmit() {
        this.examData = this.examForm.value;
        console.log(this.examData);
        this.examschedule.scheduleExam(this.examData)
            .subscribe((exam) => { this.examData = exam; });
        this.examForm.reset();
        this.examFormDirectives.resetForm({});
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('BaseURL')); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], viewQuery: function AdminComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.examFormDirectives = _t.first);
    } }, decls: 35, vars: 7, consts: [["novalidate", "", 3, "formGroup", "ngSubmit"], ["fform", "ngForm"], ["matInput", "", "formControlName", "subject", "placeholder", "Enter Subject name", "type", "text", "required", ""], ["input", ""], ["align", "end"], ["formControlName", "branch"], ["required", "", 3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "semester"], ["matInput", "", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "time", "placeholder", "Enter Time With AM OR PM", "type", "time", "required", ""], ["type", "submit", "mat-button", "", 1, "background-primary", "text-floral-white", 3, "disabled"], ["required", "", 3, "value"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-hint", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminComponent_mat_option_13_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Semester");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AdminComponent_mat_option_19_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-datepicker-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-datepicker", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pick Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.examForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((_r1.value == null ? null : _r1.value.length) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branchs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.examForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['BaseURL']
            }] }]; }, { examFormDirectives: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fform']
        }] }); })();


/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");






class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _exam_exam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exam/exam.component */ "./src/app/exam/exam.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _attempt_attempt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../attempt/attempt.component */ "./src/app/attempt/attempt.component.ts");


// import { ContactComponent } from '../contact/contact.component';






const routes = [
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]], component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"] },
    { path: 'exam', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]], component: _exam_exam_component__WEBPACK_IMPORTED_MODULE_2__["ExamComponent"] },
    { path: 'result', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]], component: _result_result_component__WEBPACK_IMPORTED_MODULE_4__["ResultComponent"] },
    { path: 'exam/:id', component: _attempt_attempt_component__WEBPACK_IMPORTED_MODULE_7__["AttemptComponent"] },
];


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_component_header_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component/header-component.component */ "./src/app/header-component/header-component.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'quizgenerator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _services_signin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/signin.service */ "./src/app/services/signin.service.ts");
/* harmony import */ var _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./services/auth.interceptor */ "./src/app/services/auth.interceptor.ts");
/* harmony import */ var _header_component_header_component_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./header-component/header-component.component */ "./src/app/header-component/header-component.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _exam_exam_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./exam/exam.component */ "./src/app/exam/exam.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! angular-epic-spinners */ "./node_modules/angular-epic-spinners/__ivy_ngcc__/fesm2015/angular-epic-spinners.js");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./staff/staff.component */ "./src/app/staff/staff.component.ts");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-confirmdialog.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressbar.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-password.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
/* harmony import */ var _attempt_attempt_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./attempt/attempt.component */ "./src/app/attempt/attempt.component.ts");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! primeng/fullcalendar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-fullcalendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! primeng/codehighlighter */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-codehighlighter.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js");
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! primeng/togglebutton */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-togglebutton.js");
/* harmony import */ var angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! angular-disable-browser-back-button */ "./node_modules/angular-disable-browser-back-button/__ivy_ngcc__/fesm2015/angular-disable-browser-back-button.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-message.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
// Components






// Services



// Shared






































































// import {ConfirmationService} from 'primeng/api';
// import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
// import {MenuItem} from 'primeng/api';   




// import {DataViewDemo} from './dataviewdemo';
// import {DataViewDemoRoutingModule} from './dataviewdemo-routing.module';
// import {DataViewModule} from 'primeng/dataview';






// import {FullCalendarDemo} from './fullcalendardemo';
// import {FullCalendarDemoRoutingModule} from './fullcalendardemo-routing.module';

// import {DialogModule} from 'primeng/dialog';
// import {InputTextModule} from 'primeng/inputtext';


// import {ButtonModule} from 'primeng/button';
// import {TabViewModule} from 'primeng/tabview';




// import {MessagesModule} from 'primeng/messages';





// import {CalendarModule} from 'primeng/calendar';
Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_signin_service__WEBPACK_IMPORTED_MODULE_6__["SigninService"], ,
        _angular_common__WEBPACK_IMPORTED_MODULE_65__["DatePipe"],
        _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_7__["ProcessHTTPMsgService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        { provide: 'BaseURL', useValue: _shared_baseurl__WEBPACK_IMPORTED_MODULE_9__["baseURL"] },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_61__["AuthInterceptor"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_61__["UnauthorizedInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_32__["ClipboardModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__["DragDropModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_36__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_37__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_38__["CdkTreeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__["MatBottomSheetModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_40__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__["MatChipsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_42__["MatDatepickerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_43__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__["MatExpansionModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_45__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_46__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_47__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_48__["MatProgressBarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__["MatRadioModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_50__["MatSidenavModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_51__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_52__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_53__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_54__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_55__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_56__["MatTreeModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_69__["ConfirmDialogModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_70__["MessagesModule"], primeng_password__WEBPACK_IMPORTED_MODULE_72__["PasswordModule"], primeng_card__WEBPACK_IMPORTED_MODULE_73__["CardModule"], primeng_table__WEBPACK_IMPORTED_MODULE_57__["TableModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["HalfCircleSpinnerModule"],
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_71__["ProgressBarModule"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_87__["ToggleButtonModule"], angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_88__["BackButtonDisableModule"].forRoot({
                preserveScrollPosition: true
            }), primeng_messages__WEBPACK_IMPORTED_MODULE_70__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_89__["MessageModule"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_90__["LocalStorageModule"].forRoot({
                prefix: 'my-app',
                storageType: 'localStorage'
            }), primeng_calendar__WEBPACK_IMPORTED_MODULE_83__["CalendarModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_75__["DataViewModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_76__["PanelModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_77__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_78__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_79__["DialogModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_80__["DropdownModule"], primeng_table__WEBPACK_IMPORTED_MODULE_57__["TableModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_81__["TabViewModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_82__["FullCalendarModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_83__["CalendarModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_84__["CheckboxModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_85__["CodeHighlighterModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_86__["SidebarModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__["MatBadgeModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatLineModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["SemipolarSpinnerModule"],
            angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["AtomSpinnerModule"],
            angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["SpringSpinnerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_59__["LoginComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_60__["HomeComponent"],
        _header_component_header_component_component__WEBPACK_IMPORTED_MODULE_62__["HeaderComponentComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_63__["AdminComponent"],
        _exam_exam_component__WEBPACK_IMPORTED_MODULE_64__["ExamComponent"],
        _result_result_component__WEBPACK_IMPORTED_MODULE_67__["ResultComponent"],
        _staff_staff_component__WEBPACK_IMPORTED_MODULE_68__["StaffComponent"],
        _attempt_attempt_component__WEBPACK_IMPORTED_MODULE_74__["AttemptComponent"]], imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_32__["ClipboardModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__["DragDropModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_36__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_37__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_38__["CdkTreeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__["MatBottomSheetModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_40__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__["MatChipsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_42__["MatDatepickerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_43__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__["MatExpansionModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_45__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_46__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_47__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_48__["MatProgressBarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__["MatRadioModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_50__["MatSidenavModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_51__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_52__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_53__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_54__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_55__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_56__["MatTreeModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_69__["ConfirmDialogModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_70__["MessagesModule"], primeng_password__WEBPACK_IMPORTED_MODULE_72__["PasswordModule"], primeng_card__WEBPACK_IMPORTED_MODULE_73__["CardModule"], primeng_table__WEBPACK_IMPORTED_MODULE_57__["TableModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["HalfCircleSpinnerModule"],
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_71__["ProgressBarModule"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_87__["ToggleButtonModule"], angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_88__["BackButtonDisableModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_70__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_89__["MessageModule"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_90__["LocalStorageModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_83__["CalendarModule"],
        primeng_dataview__WEBPACK_IMPORTED_MODULE_75__["DataViewModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_76__["PanelModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_77__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_78__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_79__["DialogModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_80__["DropdownModule"], primeng_table__WEBPACK_IMPORTED_MODULE_57__["TableModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_81__["TabViewModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_82__["FullCalendarModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_83__["CalendarModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_84__["CheckboxModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_85__["CodeHighlighterModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_86__["SidebarModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__["MatBadgeModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatLineModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["SemipolarSpinnerModule"],
        angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["AtomSpinnerModule"],
        angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["SpringSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_59__["LoginComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_60__["HomeComponent"],
                    _header_component_header_component_component__WEBPACK_IMPORTED_MODULE_62__["HeaderComponentComponent"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_63__["AdminComponent"],
                    _exam_exam_component__WEBPACK_IMPORTED_MODULE_64__["ExamComponent"],
                    _result_result_component__WEBPACK_IMPORTED_MODULE_67__["ResultComponent"],
                    _staff_staff_component__WEBPACK_IMPORTED_MODULE_68__["StaffComponent"],
                    _attempt_attempt_component__WEBPACK_IMPORTED_MODULE_74__["AttemptComponent"],
                ],
                imports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_32__["ClipboardModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__["DragDropModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_36__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_37__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_38__["CdkTreeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__["MatBottomSheetModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_40__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__["MatChipsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_42__["MatDatepickerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_43__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__["MatExpansionModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_45__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_46__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_47__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_48__["MatProgressBarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__["MatRadioModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_50__["MatSidenavModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_51__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_52__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_53__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_54__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_55__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_56__["MatTreeModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_69__["ConfirmDialogModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_70__["MessagesModule"], primeng_password__WEBPACK_IMPORTED_MODULE_72__["PasswordModule"], primeng_card__WEBPACK_IMPORTED_MODULE_73__["CardModule"], primeng_table__WEBPACK_IMPORTED_MODULE_57__["TableModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["HalfCircleSpinnerModule"],
                    primeng_progressbar__WEBPACK_IMPORTED_MODULE_71__["ProgressBarModule"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_87__["ToggleButtonModule"], angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_88__["BackButtonDisableModule"].forRoot({
                        preserveScrollPosition: true
                    }), primeng_messages__WEBPACK_IMPORTED_MODULE_70__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_89__["MessageModule"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_90__["LocalStorageModule"].forRoot({
                        prefix: 'my-app',
                        storageType: 'localStorage'
                    }), primeng_calendar__WEBPACK_IMPORTED_MODULE_83__["CalendarModule"],
                    primeng_dataview__WEBPACK_IMPORTED_MODULE_75__["DataViewModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_76__["PanelModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_77__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_78__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_79__["DialogModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_80__["DropdownModule"], primeng_table__WEBPACK_IMPORTED_MODULE_57__["TableModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_81__["TabViewModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_82__["FullCalendarModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_83__["CalendarModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_84__["CheckboxModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_85__["CodeHighlighterModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_86__["SidebarModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__["MatBadgeModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatLineModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"],
                    _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["SemipolarSpinnerModule"],
                    angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["AtomSpinnerModule"],
                    angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["SpringSpinnerModule"],
                ],
                providers: [_services_signin_service__WEBPACK_IMPORTED_MODULE_6__["SigninService"], ,
                    _angular_common__WEBPACK_IMPORTED_MODULE_65__["DatePipe"],
                    _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_7__["ProcessHTTPMsgService"],
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                    { provide: 'BaseURL', useValue: _shared_baseurl__WEBPACK_IMPORTED_MODULE_9__["baseURL"] },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                        useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_61__["AuthInterceptor"],
                        multi: true
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                        useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_61__["UnauthorizedInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/attempt/attempt.component.ts":
/*!**********************************************!*\
  !*** ./src/app/attempt/attempt.component.ts ***!
  \**********************************************/
/*! exports provided: AttemptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttemptComponent", function() { return AttemptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_attempt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/attempt.service */ "./src/app/services/attempt.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");







function AttemptComponent_table_1_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.value[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.value[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.value[2]);
} }
function AttemptComponent_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Marks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Question Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Answer Attempted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AttemptComponent_table_1_tr_24_Template, 9, 4, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2["user"]["username"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, i_r2["subject"]["date"]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r2["marks"], "/", i_r2["subject"]["marks"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 7, i_r2["attempt"]));
} }
function AttemptComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Attempt for this Exam\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AttemptComponent {
    constructor(route, attemptservice) {
        this.route = route;
        this.attemptservice = attemptservice;
        this.attempts = [];
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => { return this.attemptservice.getAttempts(params['id']); }))
            .subscribe((resp) => {
            console.log(resp);
            this.attempts = resp;
        }, errmess => {
            console.log(errmess);
            this.errMess = [];
            this.errMess.push({ severity: 'error', summary: 'Error:', detail: 'You Have Not Verified Your Email Address' });
            console.log(this.errMess);
        });
    }
}
AttemptComponent.ɵfac = function AttemptComponent_Factory(t) { return new (t || AttemptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_attempt_service__WEBPACK_IMPORTED_MODULE_3__["AttemptService"])); };
AttemptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttemptComponent, selectors: [["app-attempt"]], decls: 4, vars: 3, consts: [["class", "table table-hover table-striped", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value", "valueChange"], [1, "table", "table-hover", "table-striped"], [1, "card-text"], [4, "ngFor", "ngForOf"]], template: function AttemptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttemptComponent_table_1_Template, 26, 9, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AttemptComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-messages", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AttemptComponent_Template_p_messages_valueChange_3_listener($event) { return ctx.errMess = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attempts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attempts.length == 0 && !ctx.errMess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.errMess);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], primeng_messages__WEBPACK_IMPORTED_MODULE_5__["Messages"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F0dGVtcHQvYXR0ZW1wdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttemptComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attempt',
                templateUrl: './attempt.component.html',
                styleUrls: ['./attempt.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_attempt_service__WEBPACK_IMPORTED_MODULE_3__["AttemptService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/exam/exam.component.ts":
/*!****************************************!*\
  !*** ./src/app/exam/exam.component.ts ***!
  \****************************************/
/*! exports provided: ExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamComponent", function() { return ExamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/exam.service */ "./src/app/services/exam.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-confirmdialog.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressbar.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js");

// import { AuthService } from './auth.service';





















function ExamComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.quecount);
} }
function ExamComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NaN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamComponent_div_0_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.questionnumber);
} }
function ExamComponent_div_0_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NaN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamComponent_div_0_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Attempted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ExamComponent_div_0_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selected Answer is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.selectedanswer);
} }
function ExamComponent_div_0_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Previously selectedOption Was : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.last);
} }
function ExamComponent_div_0_div_21_a_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_a_2_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r27.setClickedRow(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r23 = ctx_r30.index;
    const num_r22 = ctx_r30.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("select", i_r23 == ctx_r24.selectedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num_r22[0]);
} }
function ExamComponent_div_0_div_21_a_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_a_2_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r31.setClickedRow(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("select", ctx_r25.answers[num_r22[0]]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num_r22[0]);
} }
function ExamComponent_div_0_div_21_a_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_a_2_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r35.setClickedRow(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("select", ctx_r26.questionflag[num_r22[0]]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num_r22[0]);
} }
function ExamComponent_div_0_div_21_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r39.test(); })("click", function ExamComponent_div_0_div_21_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const num_r22 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r41.hasPrevNext(num_r22[0], "l"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExamComponent_div_0_div_21_a_2_div_1_Template, 3, 3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamComponent_div_0_div_21_a_2_div_2_Template, 3, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExamComponent_div_0_div_21_a_2_div_3_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r22 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.answers[num_r22[0]] && !ctx_r19.questionflag[num_r22[0]]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.answers[num_r22[0]]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.questionflag[num_r22[0]] && !ctx_r19.answers[num_r22[0]]);
} }
function ExamComponent_div_0_div_21_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "abbr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_div_4_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r42.flagquestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r20.answers[ctx_r20.questionnumber]);
} }
function ExamComponent_div_0_div_21_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "abbr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_div_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r44.removeflag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamComponent_div_0_div_21_a_2_Template, 4, 3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExamComponent_div_0_div_21_div_4_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExamComponent_div_0_div_21_div_5_Template, 4, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "abbr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.flagandremoveattempt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleColor", ctx_r17.mycolor)("matRippleRadius", ctx_r17.radius);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.questionflag[ctx_r17.questionnumber]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.questionflag[ctx_r17.questionnumber]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r17.answers[ctx_r17.questionnumber]);
} }
function ExamComponent_div_0_div_22_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pick your answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamComponent_div_0_div_22_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExamComponent_div_0_div_22_div_7_Template_mat_radio_button_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const season_r54 = ctx.$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r56.savetemp(season_r54); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const season_r54 = ctx.$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("checked", season_r54 == ctx_r50.last);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", season_r54)("disabled", ctx_r50.testing[ctx_r50.questionnumber])("checked", season_r54 == ctx_r50.last);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", season_r54, " ");
} }
function ExamComponent_div_0_div_22_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_22_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r58.test(); })("click", function ExamComponent_div_0_div_22_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r60.hasPrevNext(ctx_r60.prev, "p"); })("click", function ExamComponent_div_0_div_22_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r61.setClickedRow(ctx_r61.questionnumber - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("select", ctx_r51.questionnumber - 1 == ctx_r51.selectedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r51.questionnumber == 1)("disabled", ctx_r51.testing[ctx_r51.prev]);
} }
function ExamComponent_div_0_div_22_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_22_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r62.test(); })("click", function ExamComponent_div_0_div_22_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r64.hasPrevNext(ctx_r64.next, "n"); })("click", function ExamComponent_div_0_div_22_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r65.setClickedRow(ctx_r65.questionnumber - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("select", ctx_r52.questionnumber - 1 == ctx_r52.selectedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r52.questionnumber == ctx_r52.quecount)("disabled", ctx_r52.testing[ctx_r52.next]);
} }
function ExamComponent_div_0_div_22_p_progressBar_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-progressBar", 3);
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r53.objectKeys(ctx_r53.answers).length * ctx_r53.quecount);
} }
function ExamComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Question: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-group", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExamComponent_div_0_div_22_Template_mat_radio_group_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r66.selectedanswer = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExamComponent_div_0_div_22_label_6_Template, 3, 0, "label", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExamComponent_div_0_div_22_div_7_Template, 3, 6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExamComponent_div_0_div_22_button_8_Template, 2, 4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExamComponent_div_0_div_22_button_9_Template, 2, 4, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_22_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r68.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExamComponent_div_0_div_22_p_progressBar_12_Template, 1, 1, "p-progressBar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.question.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.selectedanswer)("disabled", ctx_r18.questionflag[ctx_r18.questionnumber]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.seasons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.questionnumber >= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.questionnumber >= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.question);
} }
function ExamComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamComponent_div_0_div_2_Template, 3, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExamComponent_div_0_div_3_Template, 3, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Total Number of Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExamComponent_div_0_p_7_Template, 3, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExamComponent_div_0_p_8_Template, 3, 0, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Current Question Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Clock Timer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ExamComponent_div_0_ng_container_18_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ExamComponent_div_0_ng_container_19_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ExamComponent_div_0_ng_container_20_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ExamComponent_div_0_div_21_Template, 12, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ExamComponent_div_0_div_22_Template, 13, 8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.quecount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.quecount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.questionnumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.questionnumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.minute, ":", ctx_r0.timeLeft, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.selectedanswer && !ctx_r0.last);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedanswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.last);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.questionnumber >= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.question);
} }
function ExamComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.searchQuestions(); })("click", function ExamComponent_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.startTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm You Want To Start Exam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.setFlag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.subject);
} }
function ExamComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No scheduled exam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.searchTests(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search Exams");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamComponent_p_dataView_8_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Subject: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Marks: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_p_dataView_8_ng_template_7_Template_button_click_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const car_r79 = ctx.$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r80.selectCar($event, car_r79); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const car_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r79.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, car_r79.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r79.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r79.marks);
} }
const _c0 = function () { return { "text-align": "center" }; };
function ExamComponent_p_dataView_8_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-panel", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Subject: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Marks: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_p_dataView_8_ng_template_8_Template_button_click_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const car_r82 = ctx.$implicit; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r83.selectCar($event, car_r82); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const car_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", car_r82._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r82.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, car_r82.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r82.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r82.marks);
} }
function ExamComponent_p_dataView_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dataView", 3, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-dataViewLayoutOptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExamComponent_p_dataView_8_ng_template_7_Template, 22, 6, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExamComponent_p_dataView_8_ng_template_8_Template, 20, 10, "ng-template", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.tempExam);
} }
function ExamComponent_p_dialog_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_p_dialog_9_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r87.setFlag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r85.selectedCar.subject, " - ", ctx_r85.selectedCar.marks, "");
} }
function ExamComponent_p_dialog_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r86.msg);
} }
const _c1 = function () { return { width: "225px" }; };
const _c2 = function () { return { padding: "2em", textAlign: "center" }; };
function ExamComponent_p_dialog_9_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dialog", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function ExamComponent_p_dialog_9_Template_p_dialog_visibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.displayDialog = $event; })("onAfterHide", function ExamComponent_p_dialog_9_Template_p_dialog_onAfterHide_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.onDialogHide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExamComponent_p_dialog_9_div_1_Template, 4, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamComponent_p_dialog_9_div_2_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx_r6.displayDialog)("minY", 70)("modal", true)("contentStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.selectedCar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.msg);
} }
function ExamComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_10_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.continue(); })("click", function ExamComponent_div_10_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.startTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r7.msg, " ");
} }
function ExamComponent_p_sidebar_11_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-sidebar", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function ExamComponent_p_sidebar_11_Template_p_sidebar_visibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.visibleSidebar5 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_p_sidebar_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.searchQuestions(); })("click", function ExamComponent_p_sidebar_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.startTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_p_sidebar_11_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.visibleSidebar5 = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx_r8.visibleSidebar5)("fullScreen", true)("baseZIndex", 10000);
} }
function ExamComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.visibleSidebar5 = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ExamComponent {
    constructor(examservice, confirmationService, authService, fb, router, adminservice, datePipe, _localStorageService) {
        this.examservice = examservice;
        this.confirmationService = confirmationService;
        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.datePipe = datePipe;
        this._localStorageService = _localStorageService;
        this.message = 'Hola Mundo!';
        this.temp = [];
        this.answer = [];
        this.temp1 = {};
        this.items = [];
        this.temp3 = [];
        this.mapping = {};
        this.branch = undefined;
        this.semester = undefined;
        this.username = undefined;
        this.questionnumber = null;
        this.answerArray = [];
        this.answers = [];
        this.timeLeft = 60;
        this.today = Date.now();
        this.flag = false;
        this.flag1 = false;
        this.questionflag = {};
        this.objectKeys = Object.keys;
        this.mycolor = 'red';
        this.radius = 3;
        this.final = {};
        this.attemptedFlag = false;
        // msgs:any;
        this.msgs = [];
        this.testing = {};
        this.tempExam = [];
        this.halfcomplete = false;
        this.setClickedRow = function (index) {
            if (index != "empty") {
                this.selectedItem = index;
                this.selectedRow[index] = this.answers;
            }
        };
    }
    ngOnInit() {
        // console.log(this._localStorageService.getStorageType())
        var date = new Date();
        console.log(this.datePipe.transform(date, "yyyy-MM-dd"));
        this.authService.loadUserCredentials();
        this.subscription = this.authService.getUsername()
            .subscribe(name => { this.username = name; });
        this.subscription1 = this.authService.getBranch()
            .subscribe(name => { this.branch = name; });
        this.subscription2 = this.authService.getSemester()
            .subscribe(name => { this.semester = name; });
        this.subscription3 = this.authService.getId()
            .subscribe(id => { this.id = id; });
    }
    confirm() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                console.log(this.answerArray);
                console.log(this.answers);
                for (var i = 1; i < this.answers.length; i++) {
                    this.answer = [];
                    if (this.answers[i] == this.answerArray[i]) {
                        this.marks += 1;
                        this.answer.push(this.answers[i]);
                        this.answer.push('True');
                        this.answer.push(this.answerArray[i]);
                        this.final[this.items[i - 1][1]] = this.answer;
                    }
                    else {
                        if (this.answers[i] != null) {
                            this.answer.push(this.answers[i]);
                        }
                        else {
                            this.answer.push('NA');
                        }
                        this.answer.push('False');
                        this.answer.push(this.answerArray[i]);
                        this.final[this.items[i - 1][1]] = this.answer;
                    }
                }
                console.log(this.final);
                // this.final['subject'] = (this.subject)
                this.examservice.sendAttempted(this.final, this.examId, this.marks)
                    .subscribe((resp) => {
                    console.log(resp);
                });
                clearInterval(this.interval);
                console.log(this.marks);
                this.examservice.sendResult(this.branch, this.semester, this.marks, this.subject, this.examId)
                    .subscribe((name) => { console.log('Result Entered successfully', name); }, error => {
                    console.log(error);
                    this.errMess = error;
                    console.log(this.errMess);
                });
                this.examservice.setfinalFlag({ subject: this.subject, subjectId: this.examId, completionFlag: true })
                    .subscribe((resp) => {
                    console.log(resp);
                });
                this.router.navigate(['/home']);
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
    searchQuestions() {
        this.marks = 0;
        this.selectedRow = [];
        this.seasons = [];
        this.answerArray = [];
        this.answers = [];
        this.temp3 = [];
        this.questionnumber = 0;
        this.question = null;
        this.arr = [];
        this.flag1 = true;
        for (var i = 0; i < this.exammarks; i++) {
            this.answerArray[i + 1] = 'NA';
            // this.answers[i+1] = null
        }
        console.log(this.answerArray);
        console.log(this.answers);
        while (this.arr.length < this.exammarks) {
            var r = Math.floor(Math.random() * 14);
            if (this.arr.indexOf(r) === -1)
                this.arr.push(r);
            this.quecount = this.arr.length;
        }
        for (var i = 0; i < this.quecount; i++) {
            this.mapping[i + 1] = this.arr[i];
        }
        // this.mapping[this.quecount+1] = 11
        // this.mapping[this.quecount+11] = 22
        console.log(this.mapping);
        this._localStorageService.clearAll();
        for (var question in this.mapping) {
            this.items.push([question, this.mapping[question]]);
            console.log(this.mapping[question]);
            this._localStorageService.set(this.mapping[question].toString(), null);
        }
        console.log(this._localStorageService.keys());
        this.items.sort(function (a, b) {
            return a[0] - b[0];
        });
        console.log(this.items);
        console.log(this.items[0]);
        this.questionnumber += 1;
        this.hasPrevNext(this.questionnumber, "");
        this.selectedItem = (this.questionnumber - 1);
    }
    hasPrevNext(id, message) {
        // console.log(this.selectedanswer);
        this.seasons = [];
        // this.answerArray=[];
        this.selectedanswer = null;
        if (message == "n")
            this.questionnumber += 1;
        if (message == "p")
            this.questionnumber -= 1;
        if (message == "l")
            this.questionnumber = parseInt(id);
        this.getQuestion(id);
        const ObjectLength = Object.keys(this.mapping).length;
        this.currentindex = id - 1;
        this.prev = (ObjectLength + this.currentindex - 1) % ObjectLength + 1;
        this.next = (ObjectLength + this.currentindex + 1) % ObjectLength + 1;
    }
    getQuestion(key) {
        this.last = 0;
        console.log(this.mapping);
        // this.examservice.getQuestionbyid(this.branch,this.semester,this.mapping[key])
        this.examservice.getQuestionbyid(this.subject, this.mapping[key])
            .subscribe((question) => {
            this.question = question;
            console.log(this.question);
            this.seasons = [question.option1, question.option2, question.option3, question.option4];
            //  this.answerArray=[question.option1.ans, question.option2.ans, question.option3.ans, question.option4.ans];
            //  console.log(this.answerArray);
            console.log(this.seasons);
            this.shuffle(this.seasons);
            this.answerArray[this.questionnumber] = this.question.ans;
            console.log(this.answerArray);
            if (this.answers != []) {
                this.last = this.answers[this.questionnumber];
            }
        });
    }
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    test() {
        if (this.answers[this.questionnumber]) {
            this.testing[this.questionnumber] = true;
            console.log(this.testing);
        }
    }
    startTimer() {
        var timeLeft = this.timeLeft;
        var minleft = this.minute;
        this.interval = setInterval(() => {
            if (this.timeLeft < 10 && this.timeLeft > 1) {
                this.timeLeft--;
                var a = ('0' + this.timeLeft).slice(-2);
                this.timeLeft = parseInt(a);
                // console.log(a,this.timeLeft);
            }
            else if (this.timeLeft > 0) {
                this.timeLeft--;
            }
            else if (this.minute > 0) {
                this.minute--;
                this.timeLeft = timeLeft;
            }
            else {
                console.log('Your answers');
                console.log(this.answers);
                clearInterval(this.interval);
                this.confirm();
            }
        }, 1000);
    }
    submit() {
        // for (var t=1;t<this.answers.length;t++) {
        // 	// var temp = this.items[t][1]
        // 	this.final[this.items[t-1][1]] = this.answers[t]
        // 	// console.log(this.items[i]);
        // 	// console.log(this.answers[i]);
        // 	// console.log(i);
        // }
        // console.log(this.answers[1]);
        // console.log(this.items[0][1]);
        console.log(this.answerArray);
        console.log(this.answers);
        for (var i = 1; i < this.answers.length; i++) {
            this.answer = [];
            if (this.answers[i] == this.answerArray[i]) {
                this.marks += 1;
                this.answer.push(this.answers[i]);
                this.answer.push('True');
                this.answer.push(this.answerArray[i]);
                this.final[this.items[i - 1][1]] = this.answer;
            }
            else {
                if (this.answers[i] != null) {
                    this.answer.push(this.answers[i]);
                }
                else {
                    this.answer.push('NA');
                }
                this.answer.push('False');
                this.answer.push(this.answerArray[i]);
                this.final[this.items[i - 1][1]] = this.answer;
            }
        }
        console.log(this.final);
        // this.final['subject'] = (this.subject)
        this.examservice.sendAttempted(this.final, this.examId, this.marks)
            .subscribe((resp) => {
            console.log(resp);
        });
        clearInterval(this.interval);
        console.log(this.marks);
        this.examservice.sendResult(this.branch, this.semester, this.marks, this.subject, this.examId)
            .subscribe((name) => { console.log('Result Entered successfully', name); }, error => {
            console.log(error);
            this.errMess = error;
            console.log(this.errMess);
        });
        this.router.navigate(['/home']);
    }
    savetemp(season) {
        this.answers[this.questionnumber] = season;
        console.log(this.answers);
        console.log(this.answerArray);
        this.last = null;
        console.log(this._localStorageService.keys());
        // var temp = []
        // temp.push(season)
        // temp.push(this.answerArray[this.questionnumber])
        this._localStorageService.set(this.mapping[this.questionnumber].toString(), [season, this.answerArray[this.questionnumber]]);
        // this._localStorageService.set('test'+this.mapping[this.questionnumber],this.answerArray[this.questionnumber])
        // this._localStorageService.set(this.)
        console.log(this.mapping[this.questionnumber], this._localStorageService.get(this.mapping[this.questionnumber].toString()));
        // console.log(this._localStorageService.get('test'+this.mapping[this.questionnumber].toString()));
    }
    searchTests() {
        this.exammarks = 0;
        console.log('inside');
        console.log(this.semester);
        var date2 = this.datePipe.transform(this.today, "dd");
        console.log(date2);
        this.adminservice.searchExam(this.branch, this.semester)
            .subscribe((tests) => {
            console.log(tests);
            this.exams = tests.exams[0];
            console.log(this.exams);
            this.tempExam.push(this.exams);
            this.exammarks = this.exams.marks;
            this.minute = this.exams.duration - 1;
            this.examId = this.exams['_id'];
            console.log(this.examId);
            // this.today = this.exams.date
            var date1 = this.datePipe.transform(this.exams.date, "dd");
            var time1 = this.exams.time;
            var date2 = this.datePipe.transform(this.today, "dd");
            var time2 = this.datePipe.transform(this.today, "HH:mm");
            console.log(date1, date2, time1, time2);
            if (time1 <= time2) {
                this.subject = this.exams.subject;
                this.flag = true;
            }
        });
    }
    flagquestion() {
        this.questionflag[this.questionnumber] = true;
        console.log(this.questionflag);
        // this._localStorageService.set('test',null)
        // var test = this._localStorageService.get('test')
        // console.log(test);
        // this._localStorageService.set('test',1)
        // var test = this._localStorageService.get('test')
        // console.log(test);
    }
    removeflag() {
        this.questionflag[this.questionnumber] = false;
        console.log(this.questionflag);
    }
    flagandremoveattempt() {
        delete this.answers[this.questionnumber];
        this.questionflag[this.questionnumber] = true;
    }
    //   getVal() {
    // 	  return this.quecount
    //   }
    setFlag() {
        this.msg = null;
        //   var temp2 = 0;
        this.examservice.getUser(this.id)
            .subscribe((resp) => {
            console.log(resp['user'][0]['attempted']);
            var temp = resp['user'][0]['attempted'];
            for (var i = 0; i < temp.length; i++) {
                console.log(temp[i]);
                //   if(temp[i]['subjectId']==this.examId) {
                // 	  this.attemptedFlag = true
                // 	  break
                //   }
                if (temp[i]['subjectId'] == this.examId && temp[i]['flag'] && !temp[i]['completionFlag']) {
                    this.halfcomplete = true;
                    //   this.attemptedFlag = false
                    break;
                }
                else if (temp[i]['subjectId'] == this.examId && temp[i]['flag'] && temp[i]['completionFlag']) {
                    this.attemptedFlag = true;
                    //   this.halfcomplete = false
                    break;
                }
            }
            if (this.attemptedFlag) {
                this.msg = ('Already attempted');
                this.attemptedFlag = false;
            }
            else if (!this.attemptedFlag && !this.halfcomplete) {
                this.attemptedFlag = true;
                this.examservice.setFlag({ subject: this.subject, subjectId: this.examId, flag: true })
                    .subscribe((resp) => {
                    console.log(resp);
                });
            }
            if (this.halfcomplete) {
                this.msg = ('want to continue Your Exam');
                console.log(this.msg);
                // this.halfcomplete = false
            }
        });
    }
    selectCar(event, car) {
        this.selectedCar = car;
        this.displayDialog = true;
        event.preventDefault();
    }
    onDialogHide() {
        this.selectedCar = null;
    }
    continue() {
        this.mapping = {};
        this.items = [];
        this.marks = 0;
        this.answerArray = [];
        this.answers = [];
        var temp = this._localStorageService.keys();
        console.log(temp);
        // this.items.sort(function(a, b) {
        // return a[0] - b[0];
        // });
        for (var i = 0; i < temp.length; i++) {
            if (this._localStorageService.get(temp[i])) {
                var temp1 = this._localStorageService.get(temp[i]);
                console.log(temp1[0]);
                this.answers[i + 1] = this._localStorageService.get(temp[i])[0];
                this.answerArray[i + 1] = this._localStorageService.get(temp[i])[1];
            }
            else {
                this.answerArray[i + 1] = 'NA';
            }
            // this.answerArray[i+1] = this._localStorageService.get('test'+temp[i])
            if (this.answers[i + 1]) {
                this.testing[i + 1] = true;
            }
            this.mapping[i + 1] = temp[i];
        }
        console.log(this.answers, this.answerArray);
        for (var question in this.mapping) {
            this.items.push([question, this.mapping[question]]);
            // console.log(this.mapping[question]);
            // this._localStorageService.set(this.mapping[question],null)
        }
        this.quecount = this.items.length;
        // console.log(this._localStorageService.keys());
        // this.items.sort(function(a, b) {
        // 	return a[0] - b[0];
        // });
        console.log(this.items, this.mapping, this.answers);
        this.flag1 = true;
        this.questionnumber = 1;
        this.hasPrevNext(this.questionnumber, "");
        this.selectedItem = (this.questionnumber - 1);
    }
}
ExamComponent.ɵfac = function ExamComponent_Factory(t) { return new (t || ExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exam_service__WEBPACK_IMPORTED_MODULE_2__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"])); };
ExamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamComponent, selectors: [["app-exam"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]])], decls: 13, vars: 11, consts: [[4, "ngIf"], ["header", "Confirmation", "icon", "pi pi-exclamation-triangle"], [1, "popup"], [3, "value"], [3, "value", 4, "ngIf"], ["header", "Exam Details", "showEffect", "fade", 3, "visible", "minY", "modal", "style", "contentStyle", "visibleChange", "onAfterHide", 4, "ngIf"], [3, "visible", "fullScreen", "baseZIndex", "visibleChange", 4, "ngIf"], ["pButton", "", "type", "button", "label", "Confirmation Button", 3, "click", 4, "ngIf"], [1, "totalquestion", "mat-elevation-z4"], [1, "totalquestion1"], [1, "questionnumber", "mat-elevation-z4"], [1, "questionnumber1"], [1, "attempted", "mat-elevation-z4"], [1, "attempted1"], [1, "selectedAnswer"], ["class", "panel", "matRipple", "", 3, "matRippleColor", "matRippleRadius", 4, "ngIf"], ["class", "outercoverquestion ", 4, "ngIf"], ["matRipple", "", 1, "panel", 3, "matRippleColor", "matRippleRadius"], ["class", "disabled", 3, "click", 4, "ngFor", "ngForOf"], ["class", "button1 ", 4, "ngIf"], [1, "button1"], ["title", "Remove Attempt and Flag Question"], ["mat-button", "", 1, "mat-elevation-z4", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-eraser", "fa-lg"], ["type", "text", "pButton", "", "icon", "pi pi-check", "label", "Complete Exam", 3, "click"], [1, "disabled", 3, "click"], ["class", "currentbutton mat-elevation-z8", 3, "select", "click", 4, "ngIf"], ["class", "attemptedbutton mat-elevation-z8", 3, "select", "click", 4, "ngIf"], ["class", "flagquestions mat-elevation-z8", 3, "select", "click", 4, "ngIf"], [1, "currentbutton", "mat-elevation-z8", 3, "click"], [1, "attemptedbutton", "mat-elevation-z8", 3, "click"], [1, "flagquestions", "mat-elevation-z8", 3, "click"], ["title", "Mark Question for Review"], ["aria-hidden", "true", 1, "fa", "fa-flag-o", "fa-lg"], ["title", "Remove Flag from Question"], ["mat-button", "", 1, "mat-elevation-z4", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-flag", "fa-lg"], [1, "outercoverquestion"], [1, "question"], [1, "example-radio-group", 3, "ngModel", "disabled", "ngModelChange"], ["class", "example-radio-button", 4, "ngFor", "ngForOf"], ["class", "prevbutton ", "mat-button", "", 3, "disabled", "select", "click", 4, "ngIf"], ["class", "nextbutton ", "mat-button", "", 3, "disabled", "select", "click", 4, "ngIf"], [1, "button2"], [1, "example-radio-button"], [3, "value", "disabled", "checked", "change"], ["mat-button", "", 1, "prevbutton", 3, "disabled", "click"], ["mat-button", "", 1, "nextbutton", 3, "disabled", "click"], ["mat-button", "", 1, "button", 3, "click"], ["mat-button", "", 3, "click"], ["dv", ""], [1, "ui-helper-clearfix"], [1, "p-grid"], [1, "p-col-6", "p-md-4", 2, "text-align", "right"], ["pTemplate", "listItem"], ["pTemplate", "gridItem"], [1, "p-col-12"], [1, "car-details"], ["pButton", "", "type", "button", "label", "Set Flags", 3, "click"], [1, "p-col-12", "p-sm-3", 2, "padding", ".5em"], [3, "header"], [1, "car-detail"], ["pButton", "", "type", "button", "label", "Start Exam", 2, "margin-top", "0", 3, "click"], ["header", "Exam Details", "showEffect", "fade", 3, "visible", "minY", "modal", "contentStyle", "visibleChange", "onAfterHide"], ["pButton", "", "type", "button", "label", "Click Here", 2, "margin-left", "10px", 3, "click"], [3, "visible", "fullScreen", "baseZIndex", "visibleChange"], [2, "font-weight", "normal", "text-align", "center"], ["pButton", "", "type", "button", "label", "Confirm", 1, "ui-button-success", 2, "left", "43%", 3, "click"], ["pButton", "", "type", "button", "label", "Cancel", 1, "ui-button-secondary", 2, "left", "44%", 3, "click"], ["pButton", "", "type", "button", "label", "Confirmation Button", 3, "click"]], template: function ExamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExamComponent_div_0_Template, 23, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExamComponent_div_1_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamComponent_div_2_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExamComponent_div_3_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExamComponent_div_4_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p-confirmDialog", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p-messages", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExamComponent_p_dataView_8_Template, 9, 1, "p-dataView", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExamComponent_p_dialog_9_Template, 3, 10, "p-dialog", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExamComponent_div_10_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExamComponent_p_sidebar_11_Template, 5, 3, "p-sidebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExamComponent_button_12_Template, 1, 0, "button", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attemptedFlag && !ctx.halfcomplete && ctx.flag && !ctx.flag1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.attemptedFlag && !ctx.halfcomplete && ctx.flag && !ctx.flag1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.msgs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.halfcomplete && !ctx.attemptedFlag && ctx.flag && !ctx.flag1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.halfcomplete && !ctx.attemptedFlag && ctx.flag && !ctx.flag1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.msg && ctx.halfcomplete && !ctx.attemptedFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flag1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.halfcomplete && ctx.attemptedFlag && ctx.flag && !ctx.flag1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialog"], primeng_messages__WEBPACK_IMPORTED_MODULE_10__["Messages"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressBar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatAnchor"], primeng_dataview__WEBPACK_IMPORTED_MODULE_16__["DataView"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["Header"], primeng_dataview__WEBPACK_IMPORTED_MODULE_16__["DataViewLayoutOptions"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeTemplate"], primeng_panel__WEBPACK_IMPORTED_MODULE_17__["Panel"], primeng_dialog__WEBPACK_IMPORTED_MODULE_18__["Dialog"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_19__["Sidebar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: lightslategray;\n}\n\n.totalquestion[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 135px;\n  height: 90px;\n  border: 1px black;\n  margin-left: 100px;\n  margin-top: 30px;\n  background-color: #3d9eff;\n  border-radius: 2%;\n  text-align: center;\n  padding-top: 15px;\n  font-size: 40px;\n}\n\n.totalquestion1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 135px;\n  height: 90px;\n  border: 1px black;\n  margin-left: 235px;\n  margin-top: 30px;\n  background-color: white;\n  border-radius: 2%;\n  padding-left: 10px;\n  padding-top: 10px;\n  font-family: \"Times New Roman\";\n}\n\n.questionnumber[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 135px;\n  height: 90px;\n  border: 1px black;\n  margin-left: 400px;\n  margin-top: 30px;\n  background-color: #d15959;\n  border-radius: 2%;\n  padding-top: 15px;\n  padding-right: 8px;\n  font-size: 40px;\n  text-align: center;\n}\n\n.questionnumber1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 135px;\n  height: 90px;\n  border: 1px black;\n  margin-left: 535px;\n  margin-top: 30px;\n  background-color: white;\n  border-radius: 2%;\n  padding-left: 10px;\n  padding-top: 10px;\n  font-family: \"Times New Roman\";\n}\n\n.attempted[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 135px;\n  height: 90px;\n  border: 1px black;\n  margin-left: 700px;\n  margin-top: 30px;\n  background-color: #6de4b4;\n  border-radius: 2%;\n  padding-left: 10px;\n  padding-top: 10px;\n  font-size: 40px;\n}\n\n.attempted1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 135px;\n  height: 90px;\n  border: 1px black;\n  margin-left: 835px;\n  margin-top: 30px;\n  background-color: white;\n  border-radius: 2%;\n  padding-left: 10px;\n  padding-top: 10px;\n  font-family: \"Times New Roman\";\n}\n\n.selectedAnswer[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 270px;\n  height: 90px;\n  border: 1px black;\n  margin-left: 1000px;\n  margin-top: 30px;\n  background-color: #FFCC66;\n  border-radius: 2%;\n  padding-left: 10px;\n  padding-top: 10px;\n  word-wrap: break-word;\n  overflow: auto;\n  font-family: \"Times New Roman\";\n}\n\n.panel[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  height: 300px;\n  width: 27%;\n  border: 5px black;\n  overflow: auto;\n  margin-top: 150px;\n  margin-left: 100px;\n  background-color: white;\n  border-radius: 2%;\n}\n\n.currentbutton[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  background-color: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 2%;\n  margin-left: 8px;\n  margin-top: 8px;\n}\n\n.currentbutton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\n.currentbutton.select[_ngcontent-%COMP%] {\n  background-color: #e9dc24;\n}\n\n.attemptedbutton[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  border-radius: 2%;\n  background-color: white;\n  width: 40px;\n  height: 40px;\n  margin-left: 8px;\n  margin-top: 8px;\n}\n\n.attemptedbutton.select[_ngcontent-%COMP%] {\n  background-color: #6de4b4;\n  pointer-events: none;\n  cursor: default;\n}\n\n.attemptedbutton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\n.flagquestions[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  border-radius: 2%;\n  background-color: white;\n  width: 40px;\n  height: 40px;\n  margin-left: 8px;\n  margin-top: 8px;\n}\n\n.flagquestions.select[_ngcontent-%COMP%] {\n  background-color: #d15959;\n}\n\n.flagquestions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\n.outercoverquestion[_ngcontent-%COMP%] {\n  margin-left: 550px;\n  margin-top: 150px;\n  position: absolute;\n  border-radius: 2%;\n  width: 60%;\n  height: auto !important;\n}\n\n.question[_ngcontent-%COMP%] {\n  background-color: #3d9eff;\n  word-wrap: break-word;\n  margin: 8px;\n  padding: 10px;\n}\n\n.button[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  margin-left: 10px;\n}\n\n.example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 8px;\n  padding: 10px;\n}\n\n.example-radio-button[_ngcontent-%COMP%] {\n  padding: 10px;\n  white-space: normal;\n  text-align: justify;\n}\n\n.example-radio-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n.example-radio-button.checked[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.prevbutton[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n\n.nextbutton[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n\n.example-ripple-container[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-align: center;\n  width: 100px;\n  height: 100px;\n  line-height: 100px;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\n\n.example-ripple-checkbox[_ngcontent-%COMP%] {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field[_ngcontent-%COMP%] {\n  margin: 0 12px 0 0;\n}\n\n.button1[_ngcontent-%COMP%] {\n  display: inline;\n  padding-left: 15px;\n  padding-top: 15px;\n  border: 1px black;\n}\n\n.button2[_ngcontent-%COMP%] {\n  display: inline;\n  padding-left: 70%;\n  padding-top: 10px;\n  border: 1px black;\n}\n\n.popup[_ngcontent-%COMP%] {\n  top: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbS9FOlxcSW1wb3J0YW50XFxMb2NrZXJcXGRldGFpbHNcXGhlcmtvdS10ZXN0XFxxdWl6Z2VuZXJhdG9yL3NyY1xcYXBwXFxleGFtXFxleGFtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leGFtL2V4YW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVBO0VBQ0UsZ0NBQUE7QUNoRUY7O0FEbUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtBQ2xFRjs7QURvRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ2pFRjs7QURvRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNsRUY7O0FEb0VBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNqRUY7O0FEb0VBO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2xFRjs7QURvRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ2pFRjs7QURvRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQ2pFRjs7QURvRUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ2pFRjs7QURvRUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDbEVGOztBRHFFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQ2xFRjs7QURxRUE7RUFDRSx5QkFBQTtBQ2xFRjs7QURzRUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDcEVGOztBRHVFQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDcEVGOztBRHlFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQ3RFRjs7QUR5RUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDdkVGOztBRDBFQTtFQUNFLHlCQUFBO0FDdkVGOztBRDJFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQ3hFRjs7QUQwRUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ3hFRjs7QUQ4RUE7RUFFRSx5QkFBQTtFQUVBLHFCQUFBO0VBS0EsV0FBQTtFQUlBLGFBQUE7QUNwRkY7O0FEd0ZBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ3JGRjs7QUR3RkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNyRko7O0FEd0ZFO0VBWUEsYUFBQTtFQVVBLG1CQUFBO0VBQ0EsbUJBQUE7QUN6R0Y7O0FENkdFO0VBQ0UscUJBQUE7QUMxR0o7O0FENkdFO0VBQ0UsaUJBQUE7QUMxR0o7O0FEOEdFO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUMzR0Y7O0FEK0dBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUM1R0Y7O0FEZ0hBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBRUEsdUJBQUE7RUFDQSx3Q0FBQTtBQ2hIRjs7QURtSEEsMENBQUE7O0FBQ0E7RUFDRSxzQkFBQTtBQ2hIRjs7QURtSEE7RUFDRSxrQkFBQTtBQ2hIRjs7QURtSEE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDaEhGOztBRG1IQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNoSEY7O0FEa0hBO0VBQ0UsUUFBQTtBQy9HRiIsImZpbGUiOiJzcmMvYXBwL2V4YW0vZXhhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5vcHRpb25zIHtcclxuICBcclxuLy8gICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgIFxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIC5hbnMge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vICAgXHJcbi8vICAgXHJcblxyXG4vLyAgIFxyXG5cclxuLy8gLy8gLnllbGxvdyB7XHJcbi8vIC8vICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4vLyAvLyAgIHdpZHRoOiAwcHg7XHJcbi8vIC8vICAgaGVpZ2h0OiAwcHg7XHJcbi8vIC8vICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4vLyAvLyAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4vLyAvLyB9XHJcbi8vIC5vdXRsZXQge1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiA0MDBweDtcclxuLy8gICBtYXJnaW4tdG9wOiAxMDBweDtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbi8vICAgd2lkdGg6IDcwJTtcclxuLy8gICBoZWlnaHQ6IGRlZmF1bHQ7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuYWJjIHtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgbWFyZ2luLXRvcDogMTBweDtcclxuLy8gICBtYXJnaW4tbGVmdDogNDAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5hYmNkIHtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xyXG4vLyAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5idXR0b24ge1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICBtYXJnaW4tbGVmdDogMzAwcHg7XHJcbi8vICAgbWFyZ2luLXRvcDogNTBweDtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIC5zcGlubmVyIHtcclxuLy8gICBtYXJnaW4tbGVmdDogNTAlO1xyXG4vLyAgIG1hcmdpbi10b3A6IDMwJTtcclxuLy8gfVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XHJcbn1cclxuXHJcbi50b3RhbHF1ZXN0aW9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTM1cHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGJvcmRlcjogMXB4ICBibGFjaztcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q5ZWZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogNDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG4udG90YWxxdWVzdGlvbjF7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMzVweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYm9yZGVyOiAxcHggIGJsYWNrO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMzVweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XHJcbn1cclxuXHJcbi5xdWVzdGlvbm51bWJlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEzNXB4O1xyXG4gIGhlaWdodDogOTBweDtcclxuICBib3JkZXI6IDFweCAgYmxhY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxNTk1OTtcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDQzcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnF1ZXN0aW9ubnVtYmVyMXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEzNXB4O1xyXG4gIGhlaWdodDogOTBweDtcclxuICBib3JkZXI6IDFweCAgYmxhY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDUzNXB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJztcclxufVxyXG5cclxuLmF0dGVtcHRlZCB7XHJcbiAgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMzVweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYm9yZGVyOiAxcHggIGJsYWNrO1xyXG4gIG1hcmdpbi1sZWZ0OiA3MDBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZGU0YjQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG4uYXR0ZW1wdGVkMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMzVweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYm9yZGVyOiAxcHggYmxhY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDgzNXB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJztcclxufVxyXG5cclxuLnNlbGVjdGVkQW5zd2VyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDI3MHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxuICBib3JkZXI6IDFweCBibGFjaztcclxuICBtYXJnaW4tbGVmdDogMTAwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0M2NjtcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJztcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDI3JTtcclxuICBib3JkZXI6IDVweCBibGFjaztcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7ICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxufVxyXG5cclxuLmN1cnJlbnRidXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4OyAgIFxyXG59XHJcblxyXG4uY3VycmVudGJ1dHRvbiBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IC01MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcclxufVxyXG5cclxuLmN1cnJlbnRidXR0b24uc2VsZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlkYzI0O1xyXG4gIC8vIHpvb206IDEyMCU7XHJcbn1cclxuXHJcbi5hdHRlbXB0ZWRidXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIH1cclxuXHJcbi5hdHRlbXB0ZWRidXR0b24uc2VsZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmRlNGI0O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICAvLyB6b29tOiAxMjAlO1xyXG4gXHJcbn1cclxuXHJcbi5hdHRlbXB0ZWRidXR0b24gcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXHJcbn1cclxuXHJcbi5mbGFncXVlc3Rpb25zIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLmZsYWdxdWVzdGlvbnMuc2VsZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNkMTU5NTk7XHJcbiAgLy8gem9vbTogMTIwJTtcclxuIFxyXG59XHJcbi5mbGFncXVlc3Rpb25zIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogLTUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKX1cclxuXHJcbi5vdXRlcmNvdmVycXVlc3Rpb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1NTBweDtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAvLyBoZWlnaHQ6IGRlZmF1bHQ7XHJcbiAgXHJcbiAgLy8gb3ZlcmZsb3c6IGF1dG87ICBcclxufVxyXG5cclxuLnF1ZXN0aW9uIHtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q5ZWZmO1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAvLyBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAvLyBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIC8vIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW46IDhweDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgLy8gcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgLy8gcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIFxyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1yYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMTVweCA4cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiAgXHJcbiAgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gd2lkdGg6IDI3MHB4O1xyXG4gIC8vIGhlaWdodDogOTBweDtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAvLyBtYXJnaW4tbGVmdDogMTAwMHB4O1xyXG4gIC8vIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAvLyBwYWRkaW5nLXRvcDogMTBweDtcclxuICAvLyBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLy8gd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC8vIGRpc3BsYXk6IGZsZXggO1xyXG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gIC8vIG1hcmdpbjogNXB4O1xyXG4gIC8vIHdpZHRoOiA5MCU7XHJcbiAgLy8gaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgLy8gd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIC8vIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1yYWRpby1idXR0b24gcCB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1yYWRpby1idXR0b24uY2hlY2tlZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLnByZXZidXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5uZXh0YnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZXhhbXBsZS1yaXBwbGUtY29udGFpbmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBsaW5lLWhlaWdodDogMTAwcHg7XHJcblxyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qKiBTdHlsZXMgdG8gbWFrZSB0aGUgZGVtbyBsb29rIGJldHRlci4gKi9cclxuLmV4YW1wbGUtcmlwcGxlLWNoZWNrYm94IHtcclxuICBtYXJnaW46IDZweCAxMnB4IDZweCAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1yaXBwbGUtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAwIDEycHggMCAwO1xyXG59XHJcblxyXG4uYnV0dG9uMSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBib3JkZXI6IDFweCBibGFjaztcclxufVxyXG5cclxuLmJ1dHRvbjIge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwYWRkaW5nLWxlZnQ6IDcwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBib3JkZXI6IDFweCBibGFjaztcclxufVxyXG4ucG9wdXAge1xyXG4gIHRvcDo5MCU7XHJcbn1cclxuIiwiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xufVxuXG4udG90YWxxdWVzdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEzNXB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlcjogMXB4IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDllZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi50b3RhbHF1ZXN0aW9uMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEzNXB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlcjogMXB4IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogMjM1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG59XG5cbi5xdWVzdGlvbm51bWJlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEzNXB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlcjogMXB4IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTU5NTk7XG4gIGJvcmRlci1yYWRpdXM6IDIlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnF1ZXN0aW9ubnVtYmVyMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEzNXB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlcjogMXB4IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogNTM1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG59XG5cbi5hdHRlbXB0ZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMzVweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXI6IDFweCBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDcwMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmRlNGI0O1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uYXR0ZW1wdGVkMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEzNXB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlcjogMXB4IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogODM1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG59XG5cbi5zZWxlY3RlZEFuc3dlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI3MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlcjogMXB4IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogMTAwMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQzY2O1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG59XG5cbi5wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMjclO1xuICBib3JkZXI6IDVweCBibGFjaztcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbn1cblxuLmN1cnJlbnRidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIlO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5jdXJyZW50YnV0dG9uIHAge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmN1cnJlbnRidXR0b24uc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZGMyNDtcbn1cblxuLmF0dGVtcHRlZGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmF0dGVtcHRlZGJ1dHRvbi5zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmRlNGI0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uYXR0ZW1wdGVkYnV0dG9uIHAge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmZsYWdxdWVzdGlvbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMiU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5mbGFncXVlc3Rpb25zLnNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTU5NTk7XG59XG5cbi5mbGFncXVlc3Rpb25zIHAge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLm91dGVyY292ZXJxdWVzdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1NTBweDtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMiU7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ucXVlc3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q5ZWZmO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG1hcmdpbjogOHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxNXB4IDhweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5leGFtcGxlLXJhZGlvLWJ1dHRvbi5jaGVja2VkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcmV2YnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm5leHRidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1yaXBwbGUtY29udGFpbmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyoqIFN0eWxlcyB0byBtYWtlIHRoZSBkZW1vIGxvb2sgYmV0dGVyLiAqL1xuLmV4YW1wbGUtcmlwcGxlLWNoZWNrYm94IHtcbiAgbWFyZ2luOiA2cHggMTJweCA2cHggMDtcbn1cblxuLmV4YW1wbGUtcmlwcGxlLWZvcm0tZmllbGQge1xuICBtYXJnaW46IDAgMTJweCAwIDA7XG59XG5cbi5idXR0b24xIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBib3JkZXI6IDFweCBibGFjaztcbn1cblxuLmJ1dHRvbjIge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmctbGVmdDogNzAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggYmxhY2s7XG59XG5cbi5wb3B1cCB7XG4gIHRvcDogOTAlO1xufSJdfQ== */", ".filter-container[_ngcontent-%COMP%] {\n            text-align: center;\n        }\n        .car-details[_ngcontent-%COMP%] {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 2em;\n            border-bottom: 1px solid #d9dad9;\n        }\n        .car-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n            display: flex;\n            align-items: center;\n        }\n        .car-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n            margin-right: 14px;\n        }\n        .car-detail[_ngcontent-%COMP%] {\n            padding: 0 1em 1em 1em;\n            border-bottom: 1px solid #d9dad9;\n            margin: 1em;\n        }\n        .ui-panel-content[_ngcontent-%COMP%] {\n            padding: 1em;\n        }\n        .dark-theme   [_nghost-%COMP%]     .car-details, .dark-theme   [_nghost-%COMP%]     .car-detail {\n            border-bottom: 1px solid #191919;\n        }\n        \n        @media (max-width: 1024px) {\n            .car-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n                 width: 75px;\n            }\n            .filter-container[_ngcontent-%COMP%] {\n                text-align: left;\n            }\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam',
                templateUrl: './exam.component.html',
                styleUrls: ['./exam.component.scss'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]],
                styles: [`      
        .filter-container {
            text-align: center;
        }
        .car-details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2em;
            border-bottom: 1px solid #d9dad9;
        }
        .car-details > div {
            display: flex;
            align-items: center;
        }
        .car-details > div img {
            margin-right: 14px;
        }
        .car-detail {
            padding: 0 1em 1em 1em;
            border-bottom: 1px solid #d9dad9;
            margin: 1em;
        }
        .ui-panel-content {
            padding: 1em;
        }
        .dark-theme :host ::ng-deep .car-details,
        .dark-theme :host ::ng-deep .car-detail {
            border-bottom: 1px solid #191919;
        }
        
        @media (max-width: 1024px) {
            .car-details img {
                 width: 75px;
            }
            .filter-container {
                text-align: left;
            }
        }
    `]
            }]
    }], function () { return [{ type: _services_exam_service__WEBPACK_IMPORTED_MODULE_2__["ExamService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }, { type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/header-component/header-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/header-component/header-component.component.ts ***!
  \****************************************************************/
/*! exports provided: HeaderComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentComponent", function() { return HeaderComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_signin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/signin.service */ "./src/app/services/signin.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var angular_epic_spinners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-epic-spinners */ "./node_modules/angular-epic-spinners/__ivy_ngcc__/fesm2015/angular-epic-spinners.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function HeaderComponentComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponentComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.gologin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponentComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponentComponent_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponentComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx_r2.username, "");
} }
class HeaderComponentComponent {
    constructor(authService, router, singupservice, fb, adminservices) {
        this.authService = authService;
        this.router = router;
        this.singupservice = singupservice;
        this.fb = fb;
        this.adminservices = adminservices;
        this.username = undefined;
        this.branch = undefined;
        this.semester = undefined;
        this.exams = null;
    }
    ngOnInit() {
        fetch('https://jsonip.com', { mode: 'cors' })
            .then((resp) => resp.json())
            .then((ip) => {
            this.ipAddress = ip.ip;
            console.log(this.ipAddress);
            // return ip.ip
        });
        this.authService.loadUserCredentials();
        this.subscription = this.authService.getUsername()
            .subscribe(name => { console.log(name); this.username = name; });
        this.subscription1 = this.authService.getBranch()
            .subscribe(name => { console.log(name); this.branch = name; });
        // this.subscription2 = this.authService.getSemester()
        //     .subscribe(name => { console.log(name); this.semester = name; });
        this.searchForm = this.searchForm = this.fb.group({
            searchquery: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    gologin() {
        this.router.navigate(['/login']);
    }
    logOut() {
        console.log(this.username);
        this.singupservice.out(this.ipAddress, this.username)
            .subscribe((res) => {
            console.log(res);
        });
        this.username = undefined;
        // console.log('hoil');
        console.log(this.username);
        this.authService.logOut();
        this.router.navigate(['/home']);
    }
    getuser() {
        this.singupservice.getusers()
            .subscribe(res => {
            this.res = res;
            this.res1 = res.users;
            console.log(this.res1);
        });
    }
}
HeaderComponentComponent.ɵfac = function HeaderComponentComponent_Factory(t) { return new (t || HeaderComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_signin_service__WEBPACK_IMPORTED_MODULE_4__["SigninService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"])); };
HeaderComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponentComponent, selectors: [["app-header-component"]], decls: 12, vars: 6, consts: [[1, "Toolbar"], [3, "animationDuration", "size", "color"], ["routerLink", "/home", "routerLinkActive", "active", "mat-button", "", 1, "buttons", "mat-elevation-z4"], ["routerLink", "/exam", "routerLinkActive", "active", "mat-button", "", 1, "buttons", "mat-elevation-z4"], ["routerLink", "/result", "routerLinkActive", "active", "mat-button", "", 1, "buttons", "mat-elevation-z4"], [1, "flex-spacer"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 4, "ngIf"], ["mat-button", "", 3, "click"], [1, "fa", "fa-sign-in", "fa-lg"], ["mat-button", ""]], template: function HeaderComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-atom-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Exam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Result ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponentComponent_a_9_Template, 3, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponentComponent_a_10_Template, 3, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponentComponent_a_11_Template, 2, 1, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animationDuration", 1000)("size", 60)("color", "#ff1d5e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]], styles: [".jumbotron[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #9575CD;\n  color: floralwhite;\n  min-height: 150px;\n}\n\n.active[_ngcontent-%COMP%] {\n  background: #9bd5ff;\n  zoom: 110%;\n}\n\n.flex-spacer[_ngcontent-%COMP%] {\n  margin-left: 60%;\n}\n\n.Toolbar[_ngcontent-%COMP%] {\n  background-color: transparent;\n  margin-top: 5px;\n  color: black;\n  padding-top: 5px;\n  height: 90px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: table-cell;\n  margin-left: 20px;\n  padding: 0 auto;\n  width: auto;\n}\n\n.buttons[_ngcontent-%COMP%]:hover {\n  zoom: 110%;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLWNvbXBvbmVudC9FOlxcSW1wb3J0YW50XFxMb2NrZXJcXGRldGFpbHNcXGhlcmtvdS10ZXN0XFxxdWl6Z2VuZXJhdG9yL3NyY1xcYXBwXFxoZWFkZXItY29tcG9uZW50XFxoZWFkZXItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXItY29tcG9uZW50L2hlYWRlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFKSSxnQkFBQTtFQUNBLGtCQUFBO0VBS0EsbUJBWmU7RUFhZixrQkFBQTtFQUNBLGlCQUFBO0FDWEo7O0FEY0E7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUNYSjs7QURjQTtFQUNJLGdCQUFBO0FDWEo7O0FEY0E7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDWEo7O0FEY0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLFdBQUE7QUNaSjs7QURjRTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyLWNvbXBvbmVudC9oZWFkZXItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiRsdC1ncmF5OiAjZGRkO1xyXG4kYmFja2dyb3VuZC1kYXJrOiAjNTEyREE4O1xyXG4kYmFja2dyb3VuZC1saWdodDogIzk1NzVDRDtcclxuJGJhY2tncm91bmQtcGFsZTogI0QxQzRFOTtcclxuJGJhY2tncm91bmQtbW9yZWRhcms6ICM0NTI3QTA7XHJcbiRiYWNrZ3JvdW5kLXRvb2xiYXI6IGJsYWNrO1xyXG5cclxuQG1peGluIHplcm8tbWFyZ2luKCRwYWQtdXAtZG93biwgJHBhZC1sZWZ0LXJpZ2h0KSB7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogJHBhZC11cC1kb3duICRwYWQtbGVmdC1yaWdodDtcclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgICBAaW5jbHVkZSB6ZXJvLW1hcmdpbig3MHB4LDMwcHgpO1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtbGlnaHQgO1xyXG4gICAgY29sb3I6ZmxvcmFsd2hpdGU7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOWJkNWZmO1xyXG4gICAgem9vbTogMTEwJTtcclxufVxyXG5cclxuLmZsZXgtc3BhY2VyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XHJcbn1cclxuXHJcbi5Ub29sYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwIGF1dG87XHJcbiAgICAvLyBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbiAgLmJ1dHRvbnM6aG92ZXIge1xyXG4gICAgem9vbTogMTEwJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgIiwiLmp1bWJvdHJvbiB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBhZGRpbmc6IDcwcHggMzBweDtcbiAgYmFja2dyb3VuZDogIzk1NzVDRDtcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM5YmQ1ZmY7XG4gIHpvb206IDExMCU7XG59XG5cbi5mbGV4LXNwYWNlciB7XG4gIG1hcmdpbi1sZWZ0OiA2MCU7XG59XG5cbi5Ub29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmc6IDAgYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5idXR0b25zOmhvdmVyIHtcbiAgem9vbTogMTEwJTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-component',
                templateUrl: './header-component.component.html',
                styleUrls: ['./header-component.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_signin_service__WEBPACK_IMPORTED_MODULE_4__["SigninService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var angular_epic_spinners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-epic-spinners */ "./node_modules/angular-epic-spinners/__ivy_ngcc__/fesm2015/angular-epic-spinners.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");


















function HomeComponent_div_7_p_table_1_ng_template_1_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r12.header, " ");
} }
function HomeComponent_div_7_p_table_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_7_p_table_1_ng_template_1_th_2_Template, 2, 1, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columns_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r10);
} }
function HomeComponent_div_7_p_table_1_ng_template_2_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r17 = ctx.$implicit;
    const rowData_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r13[col_r17.field], " ");
} }
function HomeComponent_div_7_p_table_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_7_p_table_1_ng_template_2_td_4_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r13 = ctx.$implicit;
    const expanded_r14 = ctx.expanded;
    const columns_r15 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pRowToggler", rowData_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", expanded_r14 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r15);
} }
function HomeComponent_div_7_p_table_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Subject:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Semester:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Branch:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_7_p_table_1_ng_template_3_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const rowData_r19 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.Notify(rowData_r19._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r19 = ctx.$implicit;
    const columns_r20 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", columns_r20.length + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r19.subject, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, rowData_r19.date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r19.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r19.semester, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r19.branch, " ");
} }
function HomeComponent_div_7_p_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_7_p_table_1_ng_template_1_Template, 3, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_7_p_table_1_ng_template_2_Template, 5, 3, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_7_p_table_1_ng_template_3_Template, 28, 8, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r5.cols)("value", ctx_r5.exam)("scrollable", true)("virtualScroll", true)("virtualRowHeight", 34);
} }
function HomeComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Scheduled Exams Within 2 days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_7_p_table_1_Template, 4, 5, "p-table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_7_div_2_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.exam.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.exam.length == 0);
} }
function HomeComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Subject: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Marks: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_23_Template_button_click_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const car_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.selectCar($event, car_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const car_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r23.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, car_r23.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r23.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r23.marks);
} }
const _c0 = function () { return { "text-align": "center" }; };
function HomeComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-panel", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_24_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const car_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.selectCar($event, car_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const car_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", car_r26._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", car_r26.subject, " - ", car_r26.time, "");
} }
const _c1 = function (a1) { return ["/exam", a1]; };
function HomeComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r4.selectedCar.subject, " - ", ctx_r4.selectedCar.marks, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r4.selectedCar._id));
} }
const _c2 = function () { return ["/exam"]; };
const _c3 = function () { return { width: "225px" }; };
const _c4 = function () { return { padding: "2em", textAlign: "center" }; };
class HomeComponent {
    constructor(authService, router, homeservice, datePipe) {
        this.authService = authService;
        this.router = router;
        this.homeservice = homeservice;
        this.datePipe = datePipe;
        this.exam = [];
        this.events = {};
        this.temp = [];
    }
    ngOnInit() {
        this.authService.loadUserCredentials();
        this.subscription = this.authService.getUsername()
            .subscribe(name => { this.username = name; console.log(name); });
        this.subscription1 = this.authService.getBranch()
            .subscribe(name => { this.branch = name; console.log(this.branch); });
        this.subscription2 = this.authService.getSemester()
            .subscribe(name => { this.semester = name; console.log(name); });
        this.interval = setInterval(() => {
            this.getexam();
            clearInterval(this.interval);
        }, 2000);
        // this.getexam()
        // setTimeout(this.getexam,4000)
        // var interval = setInterval(() => {
        //   for (var i=0;i<this.allexams.length;i++) {
        //     this.temp.push(this.allexams[i])
        //   }
        //   this.events['data'] = this.temp
        //   console.log(this.events);
        // //   this.options = {
        // //     plugins:[ dayGridPlugin, timeGridPlugin, interactionPlugin ],
        // //     // defaultDate: '2017-02-01',
        // //     header: {
        // //         left: 'prev,next',
        // //         center: 'title',
        // //         right: 'dayGridMonth,timeGridWeek,timeGridDay'
        // //     },
        // //     editable: true
        // // };
        //   clearInterval(interval)
        //   },4000)
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getexam() {
        this.exam = [];
        this.cols = null;
        console.log(this.branch);
        this.homeservice.getExam(this.branch, this.semester)
            .subscribe((resp) => {
            console.log(resp['exams']);
            this.allexams = resp['exams'];
            var temp = resp['exams'];
            for (var i = 0; i < resp['exams'].length; i++) {
                console.log(temp[i]);
                var date1 = this.datePipe.transform(temp[i].date, "dd");
                console.log(date1);
                var date2 = this.datePipe.transform(Date.now(), "dd");
                console.log(date2);
                if (date2 <= date1 && parseInt(date1) - parseInt(date2) < 2) {
                    this.exam.push(temp[i]);
                }
            }
            console.log(this.exam);
            this.cols = [
                { field: 'subject', header: 'Subject' }
            ];
            this.colsforall = [
                { field: 'subject', header: 'Subject' },
                { field: 'time', header: 'Time' },
                { field: 'date', header: 'Date' },
                { field: 'marks', header: 'Marks' },
                { field: '_id', header: 'Exam-Id' }
            ];
        });
    }
    selectCar(event, car) {
        this.selectedCar = car;
        this.displayDialog = true;
        event.preventDefault();
    }
    // onSortChange(event) {
    //     let value = event.value;
    //     if (value.indexOf('!') === 0) {
    //         this.sortOrder = -1;
    //         this.sortField = value.substring(1, value.length);
    //     }
    //     else {
    //         this.sortOrder = 1;
    //         this.sortField = value;
    //     }
    // }
    onDialogHide() {
        this.selectedCar = null;
    }
    Notify(id) {
        this.homeservice.NotifyExam({ subject: id })
            .subscribe((resp) => {
            console.log(resp);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 27, vars: 19, consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-4"], ["header", "Scheduled Exams", "subheader", "Within 2 days", "styleClass", "ui-card-shadow", 1, "mat-elevation-z4"], ["mat-raised-button", "", 1, "refreshbutton", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh"], [4, "ngIf"], [3, "hidden"], [3, "animationDuration", "size", "color"], ["pButton", "", "type", "button", "label", "Go To Exam Page", "icon", "pi pi-check", 2, "margin-right", ".25em", 3, "routerLink"], [1, "col-md-8"], ["paginatorPosition", "both", "filterBy", "subject", 3, "value", "paginator", "rows"], ["dv", ""], [1, "ui-helper-clearfix"], [1, "p-grid"], [1, "p-col-6", "p-md-4", "filter-container"], [2, "position", "relative"], ["type", "search", "pInputText", "", "placeholder", "Search by subject", 3, "input"], [1, "p-col-6", "p-md-4", 2, "text-align", "right"], ["pTemplate", "listItem"], ["pTemplate", "gridItem"], ["header", "Exam Details", "showEffect", "fade", 3, "visible", "minY", "modal", "contentStyle", "visibleChange", "onAfterHide"], ["dataKey", "subject", "scrollHeight", "150px", 3, "columns", "value", "scrollable", "virtualScroll", "virtualRowHeight", 4, "ngIf"], ["dataKey", "subject", "scrollHeight", "150px", 3, "columns", "value", "scrollable", "virtualScroll", "virtualRowHeight"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], [2, "width", "3em"], [4, "ngFor", "ngForOf"], ["href", "#", 3, "pRowToggler"], [3, "ngClass"], [1, "p-grid", "-fluid", 2, "font-size", "16px", "padding", "20px"], [1, "p-col-12", "p-md-9"], [1, "p-col-12"], ["pButton", "", "type", "button", "label", "Notify", "icon", "pi pi-check", 2, "margin-right", ".25em", 3, "click"], [1, "car-details"], ["pButton", "", "type", "button", "icon", "pi pi-search", 3, "click"], [1, "p-col-12", "p-sm-3", 2, "padding", ".5em"], [3, "header"], [1, "car-detail"], ["pButton", "", "type", "button", "icon", "pi pi-search", 2, "margin-top", "0", 3, "click"], ["pButton", "", "type", "button", "label", "Click Here", 2, "margin-left", "10px", 3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() { return ctx.getexam(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-half-circle-spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-dataView", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HomeComponent_Template_input_input_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return _r1.filter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "p-dataViewLayoutOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_ng_template_23_Template, 22, 6, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_ng_template_24_Template, 5, 6, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p-dialog", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function HomeComponent_Template_p_dialog_visibleChange_25_listener($event) { return ctx.displayDialog = $event; })("onAfterHide", function HomeComponent_Template_p_dialog_onAfterHide_25_listener() { return ctx.onDialogHide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_div_26_Template, 4, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exam && ctx.cols);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.exam && ctx.cols);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animationDuration", 1000)("size", 60)("color", "#ff1d5e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.allexams)("paginator", true)("rows", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.displayDialog)("minY", 70)("modal", true)("contentStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCar);
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_6__["Card"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_8__["ɵh"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["Footer"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], primeng_dataview__WEBPACK_IMPORTED_MODULE_11__["DataView"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["Header"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputText"], primeng_dataview__WEBPACK_IMPORTED_MODULE_11__["DataViewLayoutOptions"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["PrimeTemplate"], primeng_dialog__WEBPACK_IMPORTED_MODULE_13__["Dialog"], primeng_table__WEBPACK_IMPORTED_MODULE_14__["Table"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], primeng_table__WEBPACK_IMPORTED_MODULE_14__["RowToggler"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultClassDirective"], primeng_panel__WEBPACK_IMPORTED_MODULE_16__["Panel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".refreshbutton[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.examcard[_ngcontent-%COMP%] {\n  width: 360px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcSW1wb3J0YW50XFxMb2NrZXJcXGRldGFpbHNcXGhlcmtvdS10ZXN0XFxxdWl6Z2VuZXJhdG9yL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FER0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWZyZXNoYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IzA4MTAzZDtcclxufVxyXG5cclxuLmV4YW1jYXJkIHtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cclxufSIsIi5yZWZyZXNoYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uZXhhbWNhcmQge1xuICB3aWR0aDogMzYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSJdfQ== */", ".filter-container[_ngcontent-%COMP%] {\n            text-align: center;\n        }\n        .car-details[_ngcontent-%COMP%] {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 2em;\n            border-bottom: 1px solid #d9dad9;\n        }\n        .car-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n            display: flex;\n            align-items: center;\n        }\n        .car-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n            margin-right: 14px;\n        }\n        .car-detail[_ngcontent-%COMP%] {\n            padding: 0 1em 1em 1em;\n            border-bottom: 1px solid #d9dad9;\n            margin: 1em;\n        }\n        .ui-panel-content[_ngcontent-%COMP%] {\n            padding: 1em;\n        }\n        .dark-theme   [_nghost-%COMP%]     .car-details, .dark-theme   [_nghost-%COMP%]     .car-detail {\n            border-bottom: 1px solid #191919;\n        }\n        \n        @media (max-width: 1024px) {\n            .car-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n                 width: 75px;\n            }\n            .filter-container[_ngcontent-%COMP%] {\n                text-align: left;\n            }\n        }"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rowExpansionTrigger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    transform: 'translateX(-10%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    transform: 'translateX(0)',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rowExpansionTrigger', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(-10%)',
                            opacity: 0
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(0)',
                            opacity: 1
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                    ])
                ],
                styles: [`      
        .filter-container {
            text-align: center;
        }
        .car-details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2em;
            border-bottom: 1px solid #d9dad9;
        }
        .car-details > div {
            display: flex;
            align-items: center;
        }
        .car-details > div img {
            margin-right: 14px;
        }
        .car-detail {
            padding: 0 1em 1em 1em;
            border-bottom: 1px solid #d9dad9;
            margin: 1em;
        }
        .ui-panel-content {
            padding: 1em;
        }
        .dark-theme :host ::ng-deep .car-details,
        .dark-theme :host ::ng-deep .car-detail {
            border-bottom: 1px solid #191919;
        }
        
        @media (max-width: 1024px) {
            .car-details img {
                 width: 75px;
            }
            .filter-container {
                text-align: left;
            }
        }
    `]
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function LoginComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your Email ");
} }
function LoginComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out the details");
} }
function LoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Kindly please check your Email-Id and Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(fb, router, ip, authService, route) {
        this.fb = fb;
        this.router = router;
        this.ip = ip;
        this.authService = authService;
        this.route = route;
        this.temp = null;
        this.errMess = null;
        this.return = '';
    }
    ngOnInit() {
        // this.getIP();
        this.route.queryParams
            .subscribe(params => this.return = params['return'] || '/home');
        fetch('https://jsonip.com', { mode: 'cors' })
            .then((resp) => resp.json())
            .then((ip) => {
            this.ipAddress = ip.ip;
            console.log(this.ipAddress);
            // return ip.ip
        });
        this.firstFormGroup = this.fb.group({
            emailid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]]
        });
        this.secondFormGroup = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]]
        });
        this.authService.loadUserCredentials();
        this.subscription = this.authService.getUsername()
            .subscribe(name => { this.username = name; console.log(this.username); });
    }
    // getIP()  
    // {  
    //   this.ipAddress=this.ip.getIPAddress()  
    //     console.log('ipaddress' , this.ipAddress);
    //   };  
    onSubmitFirst() {
        this.onsubmitsignupvalues = this.firstFormGroup.value;
        this.onsubmitsignupvalues.username = this.onsubmitsignupvalues.emailid.slice(0, 8);
        delete this.onsubmitsignupvalues.emailid;
        console.log(this.onsubmitsignupvalues);
    }
    onSubmitSecond() {
        this.temp = (this.secondFormGroup.value);
        Object.assign(this.onsubmitsignupvalues, this.temp);
        console.log(this.onsubmitsignupvalues);
        // console.log(this.username);
        this.authService.checkanotherlogin(this.onsubmitsignupvalues)
            .subscribe(data => {
            console.log(data);
            if (data.length == 0) {
                this.authService.checkanotherIP(this.ipAddress)
                    .subscribe(data => {
                    console.log(data);
                    if (data.length == 0) {
                        this.authService.logIn(this.onsubmitsignupvalues, this.ipAddress)
                            .subscribe(data => {
                            // console.log('inside');        
                            console.log(data);
                            console.log(this.errMess);
                            // this.router.navigate(['/home']);
                            this.router.navigateByUrl(this.return);
                        }, error => {
                            console.log(error);
                            this.errMess = error;
                            console.log(this.errMess);
                        });
                    }
                    else {
                        console.log('Same System cannot be use twice in one exam');
                    }
                });
            }
            else {
                console.log('Same User can\'t login at same time');
            }
        });
    }
    reset() {
        this.onsubmitsignupvalues = null;
        this.temp = null;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 7, consts: [["labelPosition", "bottom"], ["stepper", ""], [3, "stepControl"], [3, "formGroup", "ngSubmit"], ["matStepLabel", "", "matStepperIcon", "done"], ["matInput", "", "placeholder", "Enter Email-Id", "formControlName", "emailid", "type", "text", "required", ""], ["mat-button", "", "matStepperNext", "", 3, "disabled"], ["matStepLabel", ""], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "Enter Password", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-horizontal-stepper", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmitFirst(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_ng_template_4_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email-Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_13_listener() { return ctx.onSubmitSecond(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_ng_template_14_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.reset(); })("click", function LoginComponent_Template_button_click_24_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 5, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.firstFormGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.secondFormGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errMess);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperIcon"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperPrevious"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/result.service */ "./src/app/services/result.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ResultComponent_tbody_22_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r4.key);
} }
function ResultComponent_tbody_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultComponent_tbody_22_tr_1_Template, 3, 1, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, i_r2));
} }
function ResultComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Attempt for this given Exam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ResultComponent {
    constructor(authService, resultservice) {
        this.authService = authService;
        this.resultservice = resultservice;
        this.subjects = [];
        this.temp = {};
        this.items = [];
    }
    ngOnInit() {
        this.authService.loadUserCredentials();
        this.subscription = this.authService.getUsername()
            .subscribe(name => { this.username = name; console.log(name); });
        this.subscription1 = this.authService.getBranch()
            .subscribe(name => { this.branch = name; console.log(this.branch); });
        this.subscription2 = this.authService.getSemester()
            .subscribe(name => { this.semester = name; console.log(name); });
        this.subscription3 = this.authService.getId()
            .subscribe(name => { this.id = name; console.log(name); });
        this.resultservice.getUser()
            .subscribe((user) => {
            console.log(user);
            this.UserbyId = user['user'];
            console.log(this.UserbyId);
            for (var i = 0; i < this.UserbyId.attempted.length; i++) {
                this.temp[this.UserbyId.attempted[i].subject] = this.UserbyId.attempted[i].subjectId;
                this.subjects.push(this.temp);
                // this.subjects.push(this.UserbyId.attempted[i].subjectId)
            }
            this.subjects = [...new Set(this.subjects)];
            console.log(this.subjects);
        });
    }
    getAttempts(subject) {
        this.items = [];
        this.attempts = [];
        // console.log(this.exams.length);
        // for (var i=0;i<this.exams.length;i++) {
        // console.log(this.exams[i]);
        // if(this.exams[i]['subject']==subject) {
        // this.id = this.exams[i]['_id']
        // break
        // }
        // }
        console.log(this.id);
        this.resultservice.getAttempts(subject, this.id)
            .subscribe((resp) => {
            console.log(resp);
            var id = resp[0]['_id'];
            console.log(id);
            this.attempts = resp;
            // this.attempt=resp[0]['attempt']
            // for (var question in this.attempt) {
            // this.items.push([question, this.attempt[question]]);
            // }
            // this.items.sort(function(a, b) {
            // return a[0] - b[0];
            // });
        });
    }
}
ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_result_service__WEBPACK_IMPORTED_MODULE_2__["ResultService"])); };
ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultComponent, selectors: [["app-result"]], decls: 25, vars: 5, consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "header"], [1, "title"], [1, "title", "category"], [1, "entry"], [1, "card-text"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function ResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Details Of Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Exams Attempted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ResultComponent_tbody_22_Template, 3, 3, "tbody", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ResultComponent_div_24_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Semester - ", ctx.semester, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Branch - ", ctx.branch, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.attempts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-result',
                templateUrl: './result.component.html',
                styleUrls: ['./result.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_result_service__WEBPACK_IMPORTED_MODULE_2__["ResultService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");







class AdminService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    scheduleExam(exam) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'admin/', exam, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));
    }
    searchExam(branch, sem) {
        console.log(branch);
        console.log(sem);
        // console.log(date);
        this.config = {
            params: { branch: branch,
                sem: sem,
            }
        };
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'admin/exam', this.config)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    getstaff() {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'admin/getStaff')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    verfied(id, update) {
        console.log(id);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.config = {
            params: {
                id: id,
                update: update
            }
        };
        return this.http.put(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'admin/getStaff', this.config, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/attempt.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/attempt.service.ts ***!
  \*********************************************/
/*! exports provided: AttemptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttemptService", function() { return AttemptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");






class AttemptService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    getAttempts(id) {
        // var config = {
        // params: {
        // subject:subject
        // }
        // }
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + 'test/attempt/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
}
AttemptService.ɵfac = function AttemptService_Factory(t) { return new (t || AttemptService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"])); };
AttemptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AttemptService, factory: AttemptService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttemptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
// import { Injectable } from '@angular/core';




class AuthGuardService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    // state: RouterState = this.router.routerState;
    // snapshot: RouterStateSnapshot = this.state.snapshot;
    // root: ActivatedRouteSnapshot = this.snapshot.root;
    // child = this.root.firstChild;
    // id: Observable<string> = child.params.map(p => p.id);
    canActivate(route, state) {
        // Check to see if a user has a valid token
        if (this.authService.isLoggedIn()) {
            // If they do, return true and allow the user to load app
            return true;
        }
        // If not, they redirect them to the login page
        this.router.navigate(['/login'], {
            queryParams: {
                return: state.url
            }
        });
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor, UnauthorizedInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedInterceptor", function() { return UnauthorizedInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class AuthInterceptor {
    constructor(inj) {
        this.inj = inj;
    }
    intercept(req, next) {
        const authService = this.inj.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        // Get the auth header from the service.
        const authToken = authService.getToken();
        console.log("Interceptor: " + authToken);
        // Clone the request to add the new header.
        const authReq = req.clone({ headers: req.headers.set('Authorization', 'bearer ' + authToken) });
        // Pass on the cloned request instead of the original request.
        console.log('working');
        return next.handle(authReq);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();
class UnauthorizedInterceptor {
    constructor(inj) {
        this.inj = inj;
    }
    intercept(req, next) {
        const authService = this.inj.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        const authToken = authService.getToken();
        return next
            .handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            // do nothing
        }, (err) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.status === 401 && authToken) {
                    console.log('Unauthorized Interceptor: ', err);
                    authService.checkJWTtoken();
                }
            }
        }));
    }
}
UnauthorizedInterceptor.ɵfac = function UnauthorizedInterceptor_Factory(t) { return new (t || UnauthorizedInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
UnauthorizedInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UnauthorizedInterceptor, factory: UnauthorizedInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnauthorizedInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");







class AuthService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.tokenKey = 'JWT';
        this.isAuthenticated = false;
        this.id = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.username = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.branch = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.semester = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.authToken = undefined;
    }
    checkJWTtoken() {
        this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/checkJWTtoken')
            .subscribe(res => {
            console.log('JWT Token Valid: ', res);
            this.sendUsername(res.user.username);
            this.sendBranch(res.user.branch);
            this.sendSem(res.user.semester);
            this.sendId(res.user._id);
        }, err => {
            console.log('JWT Token invalid: ', err);
            this.destroyUserCredentials();
        });
    }
    sendId(id) {
        this.id.next(id);
    }
    sendUsername(name) {
        this.username.next(name);
    }
    sendBranch(branch) {
        this.branch.next(branch);
    }
    sendSem(sem) {
        this.semester.next(sem);
    }
    clearUsername() {
        this.username.next(undefined);
        this.branch.next(undefined);
        this.semester.next(undefined);
    }
    loadUserCredentials() {
        const credentials = JSON.parse(localStorage.getItem(this.tokenKey));
        console.log('loadUserCredentials ', credentials);
        if (credentials && credentials.username !== undefined) {
            this.useCredentials(credentials);
            if (this.authToken) {
                this.checkJWTtoken();
            }
        }
    }
    storeUserCredentials(credentials) {
        console.log('storeUserCredentials ', credentials);
        localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
        this.useCredentials(credentials);
    }
    useCredentials(credentials) {
        this.isAuthenticated = true;
        this.sendUsername(credentials.username);
        this.authToken = credentials.token;
    }
    destroyUserCredentials() {
        this.authToken = undefined;
        this.clearUsername();
        this.isAuthenticated = false;
        localStorage.removeItem(this.tokenKey);
    }
    signUp() {
    }
    checkanotherlogin(username) {
        this.config = {
            params: {
                'username': username.username
            }
        };
        console.log(username);
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/activeuser', this.config)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    }
    checkanotherIP(ip) {
        this.config = {
            params: {
                'ip': ip,
            }
        };
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/ip', this.config)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    }
    logIn(user, ip) {
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/login', { 'username': user.username, 'password': user.password, 'ip': ip })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            this.storeUserCredentials({ username: user.username, token: res.token, branch: user.branch, semester: user.semester });
            return { 'success': true, 'username': user.username, 'branch': user.branch, 'semester': user.semester };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => this.processHTTPMsgService.handleError(error)));
    }
    logOut() {
        this.destroyUserCredentials();
    }
    isLoggedIn() {
        return this.isAuthenticated;
    }
    getUsername() {
        return this.username.asObservable();
    }
    getBranch() {
        return this.branch.asObservable();
    }
    getSemester() {
        return this.semester.asObservable();
    }
    getId() {
        return this.id.asObservable();
    }
    getToken() {
        return this.authToken;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/exam.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/exam.service.ts ***!
  \******************************************/
/*! exports provided: ExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamService", function() { return ExamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");







class ExamService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    getQuestions() {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'test/getquestion')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    getQuestionbyid(subject, id) {
        console.log(id);
        // console.log(branch);
        // console.log(semester);
        this.config = {
            params: {
                id: id,
                subject: subject
            }
        };
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'test/exams/', this.config)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    sendResult(branch, semester, marks, subject, subjectId) {
        this.config = {};
        // console.log(marks);
        // console.log(branch);
        // console.log(semester);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.config = {
            // params : {
            branch: branch,
            semester: semester,
            marks: marks,
            subject: subject,
            subjectId: subjectId
            // }
        };
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'test/result', this.config, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));
    }
    getResult(branch, semester) {
        this.config = {
            params: {
                branch: branch,
                semester: semester,
            }
        };
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'test/result', this.config)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    sendAttempted(attempt, subject, marks) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(subject);
        var config = {
            // params : {
            attempt: attempt,
            subject: subject,
            marks: marks
            // }
        };
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'test/attempt/' + subject, config, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));
    }
    setFlag(attempt) {
        console.log(attempt);
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/setFlag', attempt)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    setfinalFlag(attempt) {
        console.log(attempt);
        return this.http.put(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/setFlag/' + attempt.subjectId, attempt)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    getUser(id) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
}
ExamService.ɵfac = function ExamService_Factory(t) { return new (t || ExamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"])); };
ExamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExamService, factory: ExamService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/general.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/general.service.ts ***!
  \*********************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");




class GeneralService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    // searchservice(): Observable<any> {
    getIPAddress() {
        // return this.http.get('');  
        fetch('https://jsonip.com', { mode: 'cors' })
            .then((resp) => resp.json())
            .then((ip) => {
            console.log(ip.ip);
            return ip.ip;
        });
    }
}
GeneralService.ɵfac = function GeneralService_Factory(t) { return new (t || GeneralService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__["ProcessHTTPMsgService"])); };
GeneralService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralService, factory: GeneralService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__["ProcessHTTPMsgService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/home.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");







class HomeService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    getExam(branch, semester) {
        console.log(branch);
        var config = {
            params: {
                branch: branch,
                semester: semester
            }
        };
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'admin/examall', config)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    NotifyExam(config) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'test/notify', config, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        // .pipe(delay(2000));
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"])); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/process-httpmsg.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/process-httpmsg.service.ts ***!
  \*****************************************************/
/*! exports provided: ProcessHTTPMsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessHTTPMsgService", function() { return ProcessHTTPMsgService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ProcessHTTPMsgService {
    constructor() { }
    handleError(error) {
        let errMsg;
        if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message;
        }
        else {
            errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
    }
}
ProcessHTTPMsgService.ɵfac = function ProcessHTTPMsgService_Factory(t) { return new (t || ProcessHTTPMsgService)(); };
ProcessHTTPMsgService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProcessHTTPMsgService, factory: ProcessHTTPMsgService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessHTTPMsgService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/result.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/result.service.ts ***!
  \********************************************/
/*! exports provided: ResultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultService", function() { return ResultService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");






class ResultService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    getUser() {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + 'users/byId')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    getAttempts(subject, id) {
        var config = {
            params: {
                id: id,
                subject: subject
            }
        };
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + 'test/attempt', config)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
}
ResultService.ɵfac = function ResultService_Factory(t) { return new (t || ResultService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"])); };
ResultService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResultService, factory: ResultService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/signin.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/signin.service.ts ***!
  \********************************************/
/*! exports provided: SigninService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninService", function() { return SigninService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");

// import { Observable } from 'rxjs';






class SigninService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    signupPost(creaditial) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/signup', creaditial, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));
    }
    signupStaff(creaditial) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/staffsignup', creaditial, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));
    }
    getusers() {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));
    }
    out(ip, username) {
        this.config = {
            params: {
                'ip': ip,
                'username': username
            }
        };
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/logout', this.config)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));
    }
}
SigninService.ɵfac = function SigninService_Factory(t) { return new (t || SigninService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"])); };
SigninService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SigninService, factory: SigninService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/baseurl.ts":
/*!***********************************!*\
  !*** ./src/app/shared/baseurl.ts ***!
  \***********************************/
/*! exports provided: baseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
const baseURL = 'http://localhost:3000/';


/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_signin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/signin.service */ "./src/app/services/signin.service.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-password.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


















function SignupComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your name and Email ");
} }
function SignupComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out the details");
} }
function SignupComponent_mat_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", branch_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r12.viewValue, " ");
} }
function SignupComponent_mat_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", branch_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r13.viewValue, " ");
} }
function SignupComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Enter password and re-enter password");
} }
function SignupComponent_button_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r11.thirdFormGroup.invalid);
} }
class SignupComponent {
    constructor(fb, messageService, router, signupservice, baseURL) {
        this.fb = fb;
        this.messageService = messageService;
        this.router = router;
        this.signupservice = signupservice;
        this.baseURL = baseURL;
        this.branchs = [
            { value: 'CSE', viewValue: 'CSE' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.sem = [
            { value: 1, viewValue: 1 },
            { value: 2, viewValue: 2 },
            { value: 3, viewValue: 3 }
        ];
        this.temp = null;
        this.msgs = [];
        // this.createForm();
    }
    ngOnInit() {
        this.firstFormGroup = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            emailid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]]
        });
        this.secondFormGroup = this.fb.group({
            branch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            semester: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            contactno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.thirdFormGroup = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            renterpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            staff: Boolean
        });
    }
    onSubmitFirst() {
        this.onsubmitsignupvalues = this.firstFormGroup.value;
        console.log(this.onsubmitsignupvalues);
    }
    onSubmitSecond() {
        this.temp = (this.secondFormGroup.value);
        Object.assign(this.onsubmitsignupvalues, this.temp);
        console.log(this.onsubmitsignupvalues);
    }
    onSubmitThird() {
        this.temp = this.thirdFormGroup.value;
        Object.assign(this.onsubmitsignupvalues, this.temp);
        delete this.onsubmitsignupvalues.renterpassword;
        if (this.onsubmitsignupvalues.staff) {
            this.onsubmitsignupvalues.username = this.onsubmitsignupvalues.emailid;
            this.onsubmitsignupvalues.admin = false;
            this.onsubmitsignupvalues.student = false;
            this.onsubmitsignupvalues.staff = false;
            console.log(this.onsubmitsignupvalues);
            this.signupservice.signupStaff(this.onsubmitsignupvalues)
                .subscribe(staff => {
                console.log('abcd');
                console.log(staff);
                this.returnmessage = staff;
                if (this.returnmessage.err == "A staff with the given username is already registered") {
                    this.router.navigate(['/']);
                }
                else {
                    this.router.navigate(['/login']);
                }
            }, errmess => { this.returnmessage = null; this.errMess = errmess; });
        }
        else {
            this.onsubmitsignupvalues.username = this.onsubmitsignupvalues.emailid.slice(0, 8);
            this.onsubmitsignupvalues.admin = false;
            this.onsubmitsignupvalues.student = true;
            this.onsubmitsignupvalues.staff = false;
            console.log(this.onsubmitsignupvalues);
            this.signupservice.signupPost(this.onsubmitsignupvalues)
                .subscribe(dish => {
                console.log('abcd');
                console.log(dish);
                this.returnmessage = dish;
                if (this.returnmessage.err == "A user with the given username is already registered") {
                    this.router.navigate(['/']);
                }
                else {
                    this.msgs = [];
                    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: dish['status'] + ' ' + dish['msg'] });
                    this.router.navigate(['/signup']);
                    this.firstFormGroup.reset();
                    this.secondFormGroup.reset();
                    this.thirdFormGroup.reset();
                    // this.examFormDirectives.resetForm({
                    // });
                }
            }, errmess => {
                this.returnmessage = null;
                this.errMess = errmess;
                this.msgs = [];
                // console.log(errmess);
                this.msgs.push({ severity: 'error', summary: 'Error:', detail: 'Enter Valid Email Address' });
            });
        }
    }
    reset() {
        this.onsubmitsignupvalues = null;
        this.temp = null;
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_signin_service__WEBPACK_IMPORTED_MODULE_4__["SigninService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('BaseURL')); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])], decls: 88, vars: 17, consts: [["labelPosition", "bottom"], ["stepper", ""], [3, "stepControl"], [3, "formGroup", "ngSubmit"], ["matStepLabel", "", "matStepperIcon", "done"], ["hintLabel", "Max 15 characters", "appearance", "fill"], ["matInput", "", "maxlength", "15", "placeholder", "Enter First name", "formControlName", "firstname", "type", "text", "required", ""], ["input", ""], ["align", "end"], ["matInput", "", "maxlength", "15", "placeholder", "Enter Last name", "formControlName", "lastname", "required", ""], ["input1", ""], ["matInput", "", "placeholder", "Enter Email Address", "formControlName", "emailid", "pattern", "(^.+.+.+.+.+\\b(nirmauni.ac.in)\\b)", "required", ""], ["mat-button", "", "matStepperNext", "", 3, "disabled"], ["matStepLabel", ""], ["formControlName", "branch"], ["required", "", 3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "semester"], ["hintLabel", "10 digits only"], ["matInput", "", "minlength", "10", "maxlength", "10", "formControlName", "contactno", "placeholder", "Enter Mobile number", "pattern", "[6-9][0-9]*", "required", ""], ["input2", ""], ["mat-button", "", "matStepperPrevious", ""], ["hintLabel", "Minimimun length 8 digits"], ["matInput", "", "pPassword", "", "ui-password-info", "", "name", "password", "minlength", "8", "type", "password", "formControlName", "password", "placeholder", "Enter Password", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "required", ""], ["password", ""], ["matInput", "", "minlength", "8", "type", "password", "formControlName", "renterpassword", "placeholder", "Re-Enter Password", 3, "pattern"], ["input4", ""], ["mat-button", "", "matStepperNext", "", 3, "disabled", 4, "ngIf"], ["mat-button", "", 3, "click"], ["formControlName", "staff"], [3, "value", "valueChange"], ["required", "", 3, "value"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-horizontal-stepper", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmitFirst(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignupComponent_ng_template_4_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email-Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_27_listener() { return ctx.onSubmitSecond(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SignupComponent_ng_template_28_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SignupComponent_mat_option_33_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Semester");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SignupComponent_mat_option_38_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Mobile-No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_52_listener() { return ctx.onSubmitThird(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, SignupComponent_ng_template_53_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Re-Enter Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, SignupComponent_button_68_Template, 2, 1, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.reset(); })("click", function SignupComponent_Template_button_click_69_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-slide-toggle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Staff-Member? Please slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Some important instuctions: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "If two password doesn't match then next button will remain disappered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "pattern must be follow as given below");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Minimimun Length of password is 8.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Password must contain one Uppercase, one integer and one lowercase characters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " --> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " --> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p-messages", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SignupComponent_Template_p_messages_valueChange_87_listener($event) { return ctx.msgs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r2.value == null ? null : _r2.value.length) || 0, "/15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r3.value == null ? null : _r3.value.length) || 0, "/15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.firstFormGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branchs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branchs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r7.value == null ? null : _r7.value.length) || 0, "/10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.secondFormGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", _r9.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.thirdFormGroup.value.password, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.temp && ctx.onsubmitsignupvalues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.msgs);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperIcon"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperNext"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperPrevious"], primeng_password__WEBPACK_IMPORTED_MODULE_11__["Password"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], primeng_messages__WEBPACK_IMPORTED_MODULE_13__["Messages"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0U6XFxJbXBvcnRhbnRcXExvY2tlclxcZGV0YWlsc1xcaGVya291LXRlc3RcXHF1aXpnZW5lcmF0b3Ivc3JjXFxhcHBcXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgIiwiLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */", "[_nghost-%COMP%]     button {\n            margin-right: .25em;\n        }\n\n        [_nghost-%COMP%]     .ui-message, [_nghost-%COMP%]     .ui-inputtext {\n            margin-right: .25em;\n        }\n\n        [_nghost-%COMP%]     .custom-message, [_nghost-%COMP%]     img  {\n            align-self: center;\n            font-size: 16px;\n            margin-left: .5em;\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
                styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }

        :host ::ng-deep .ui-message,
        :host ::ng-deep .ui-inputtext {
            margin-right: .25em;
        }

        :host ::ng-deep .custom-message,
        :host ::ng-deep img  {
            align-self: center;
            font-size: 16px;
            margin-left: .5em;
        }
    `]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_signin_service__WEBPACK_IMPORTED_MODULE_4__["SigninService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['BaseURL']
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/staff/staff.component.ts":
/*!******************************************!*\
  !*** ./src/app/staff/staff.component.ts ***!
  \******************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


// import { NavbarComponent } from '../../shared/navbar/navbar.component';




class StaffComponent {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    ngOnInit() {
        console.log(this.router);
        const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        const elemMainPanel = document.querySelector('.main-panel');
        const elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe((ev) => {
            this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (event.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]).subscribe((event) => {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            // let ps = new PerfectScrollbar(elemMainPanel);
            // ps = new PerfectScrollbar(elemSidebar);
        }
    }
    ngAfterViewInit() {
        this.runOnRouteChange();
    }
    isMap(path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    }
    runOnRouteChange() {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemMainPanel = document.querySelector('.main-panel');
            // const ps = new PerfectScrollbar(elemMainPanel);
            // ps.update();
        }
    }
    isMac() {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
StaffComponent.ɵfac = function StaffComponent_Factory(t) { return new (t || StaffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StaffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StaffComponent, selectors: [["app-staff"]], decls: 3, vars: 0, template: function StaffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "staff works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmL3N0YWZmLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaffComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-staff',
                templateUrl: './staff.component.html',
                styleUrls: ['./staff.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Important\Locker\details\herkou-test\quizgenerator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map