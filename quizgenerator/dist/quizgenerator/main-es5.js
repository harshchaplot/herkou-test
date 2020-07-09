function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["fform"];

    function AdminComponent_mat_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branch_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", branch_r5.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r5.viewValue, " ");
      }
    }

    function AdminComponent_mat_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branch_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", branch_r6.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r6.viewValue, " ");
      }
    }

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(location, route, fb, examschedule, baseURL) {
        _classCallCheck(this, AdminComponent);

        this.location = location;
        this.route = route;
        this.fb = fb;
        this.examschedule = examschedule;
        this.baseURL = baseURL;
        this.branchs = [{
          value: 'CSE',
          viewValue: 'CSE'
        }, {
          value: 'pizza-1',
          viewValue: 'Pizza'
        }, {
          value: 'tacos-2',
          viewValue: 'Tacos'
        }];
        this.sem = [{
          value: 1,
          viewValue: 1
        }, {
          value: 2,
          viewValue: 2
        }, {
          value: 3,
          viewValue: 3
        }];
        this.formErrors = {
          'Subject': '',
          'Brach': ''
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
          }
        };
        this.createForm();
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createForm",
        value: function createForm() {
          var _this = this;

          this.examForm = this.fb.group({
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            time: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            date: Date(),
            branch: [''],
            semester: ['']
          });
          this.examForm.valueChanges.subscribe(function (data) {
            return _this.onValueChanged(data);
          });
          this.onValueChanged(); // (re)set validation messages now
        }
      }, {
        key: "onValueChanged",
        value: function onValueChanged(data) {
          if (!this.examForm) {
            return;
          }

          var form = this.examForm;

          for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
              // clear previous error message (if any)
              this.formErrors[field] = '';
              var control = form.get(field);

              if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];

                for (var key in control.errors) {
                  if (control.errors.hasOwnProperty(key)) {
                    this.formErrors[field] += messages[key] + ' ';
                  }
                }
              }
            }
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this.examData = this.examForm.value;
          console.log(this.examData);
          this.examschedule.scheduleExam(this.examData).subscribe(function (exam) {
            _this2.examData = exam;
          });
          this.examForm.reset();
          this.examFormDirectives.resetForm({});
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('BaseURL'));
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      viewQuery: function AdminComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.examFormDirectives = _t.first);
        }
      },
      decls: 35,
      vars: 7,
      consts: [["novalidate", "", 3, "formGroup", "ngSubmit"], ["fform", "ngForm"], ["matInput", "", "formControlName", "subject", "placeholder", "Enter Subject name", "type", "text", "required", ""], ["input", ""], ["align", "end"], ["formControlName", "branch"], ["required", "", 3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "semester"], ["matInput", "", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "time", "placeholder", "Enter Time With AM OR PM", "type", "time", "required", ""], ["type", "submit", "mat-button", "", 1, "background-primary", "text-floral-white", 3, "disabled"], ["required", "", 3, "value"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

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
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['BaseURL']
          }]
        }];
      }, {
        examFormDirectives: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fform']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing/app-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/app-routing/app-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./routes */
    "./src/app/app-routing/routes.ts");

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing/routes.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing/routes.ts ***!
    \***************************************/

  /*! exports provided: routes */

  /***/
  function srcAppAppRoutingRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _exam_exam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../exam/exam.component */
    "./src/app/exam/exam.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _result_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../result/result.component */
    "./src/app/result/result.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _attempt_attempt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../attempt/attempt.component */
    "./src/app/attempt/attempt.component.ts"); // import { ContactComponent } from '../contact/contact.component';


    var routes = [{
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, {
      path: 'admin',
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"]
    }, {
      path: 'exam',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
      component: _exam_exam_component__WEBPACK_IMPORTED_MODULE_2__["ExamComponent"]
    }, {
      path: 'result',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
      component: _result_result_component__WEBPACK_IMPORTED_MODULE_4__["ResultComponent"]
    }, {
      path: 'exam/:id',
      component: _attempt_attempt_component__WEBPACK_IMPORTED_MODULE_7__["AttemptComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_component_header_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header-component/header-component.component */
    "./src/app/header-component/header-component.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'quizgenerator';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing/app-routing.module */
    "./src/app/app-routing/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _services_signin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/signin.service */
    "./src/app/services/signin.service.ts");
    /* harmony import */


    var _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _shared_baseurl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/baseurl */
    "./src/app/shared/baseurl.ts");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_58__);
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./services/auth.interceptor */
    "./src/app/services/auth.interceptor.ts");
    /* harmony import */


    var _header_component_header_component_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! ./header-component/header-component.component */
    "./src/app/header-component/header-component.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _exam_exam_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! ./exam/exam.component */
    "./src/app/exam/exam.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! angular-epic-spinners */
    "./node_modules/angular-epic-spinners/__ivy_ngcc__/fesm2015/angular-epic-spinners.js");
    /* harmony import */


    var _result_result_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
    /*! ./result/result.component */
    "./src/app/result/result.component.ts");
    /* harmony import */


    var _staff_staff_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
    /*! ./staff/staff.component */
    "./src/app/staff/staff.component.ts");
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
    /*! primeng/confirmdialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-confirmdialog.js");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
    /* harmony import */


    var primeng_progressbar__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
    /*! primeng/progressbar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressbar.js");
    /* harmony import */


    var primeng_password__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
    /*! primeng/password */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-password.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
    /* harmony import */


    var _attempt_attempt_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
    /*! ./attempt/attempt.component */
    "./src/app/attempt/attempt.component.ts");
    /* harmony import */


    var primeng_dataview__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
    /*! primeng/dataview */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
    /* harmony import */


    var primeng_panel__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
    /*! primeng/panel */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
    /*! primeng/tabview */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabview.js");
    /* harmony import */


    var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
    /*! primeng/fullcalendar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-fullcalendar.js");
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
    /*! primeng/calendar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js");
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
    /*! primeng/checkbox */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-codehighlighter.js");
    /* harmony import */


    var primeng_sidebar__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
    /*! primeng/sidebar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js");
    /* harmony import */


    var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
    /*! primeng/togglebutton */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-togglebutton.js");
    /* harmony import */


    var angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(
    /*! angular-disable-browser-back-button */
    "./node_modules/angular-disable-browser-back-button/__ivy_ngcc__/fesm2015/angular-disable-browser-back-button.js");
    /* harmony import */


    var primeng_message__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(
    /*! primeng/message */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-message.js");
    /* harmony import */


    var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(
    /*! angular-2-local-storage */
    "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js"); // Components
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

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_signin_service__WEBPACK_IMPORTED_MODULE_6__["SigninService"],, _angular_common__WEBPACK_IMPORTED_MODULE_65__["DatePipe"], _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_7__["ProcessHTTPMsgService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], {
        provide: 'BaseURL',
        useValue: _shared_baseurl__WEBPACK_IMPORTED_MODULE_9__["baseURL"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
        useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_61__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
        useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_61__["UnauthorizedInterceptor"],
        multi: true
      }],
      imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_32__["ClipboardModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__["DragDropModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_36__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_37__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_38__["CdkTreeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__["MatBottomSheetModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_40__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_42__["MatDatepickerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_43__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__["MatExpansionModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_45__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_46__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_47__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_48__["MatProgressBarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__["MatRadioModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_50__["MatSidenavModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_51__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_52__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_53__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_54__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_55__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_56__["MatTreeModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_69__["ConfirmDialogModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_70__["MessagesModule"], primeng_password__WEBPACK_IMPORTED_MODULE_72__["PasswordModule"], primeng_card__WEBPACK_IMPORTED_MODULE_73__["CardModule"], primeng_table__WEBPACK_IMPORTED_MODULE_57__["TableModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["HalfCircleSpinnerModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_71__["ProgressBarModule"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_87__["ToggleButtonModule"], angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_88__["BackButtonDisableModule"].forRoot({
        preserveScrollPosition: true
      }), primeng_messages__WEBPACK_IMPORTED_MODULE_70__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_89__["MessageModule"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_90__["LocalStorageModule"].forRoot({
        prefix: 'my-app',
        storageType: 'localStorage'
      }), primeng_calendar__WEBPACK_IMPORTED_MODULE_83__["CalendarModule"], primeng_dataview__WEBPACK_IMPORTED_MODULE_75__["DataViewModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_76__["PanelModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_77__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_78__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_79__["DialogModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_80__["DropdownModule"], primeng_table__WEBPACK_IMPORTED_MODULE_57__["TableModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_81__["TabViewModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_82__["FullCalendarModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_83__["CalendarModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_84__["CheckboxModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_85__["CodeHighlighterModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_86__["SidebarModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__["MatBadgeModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatLineModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["SemipolarSpinnerModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["AtomSpinnerModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["SpringSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_59__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_60__["HomeComponent"], _header_component_header_component_component__WEBPACK_IMPORTED_MODULE_62__["HeaderComponentComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_63__["AdminComponent"], _exam_exam_component__WEBPACK_IMPORTED_MODULE_64__["ExamComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_67__["ResultComponent"], _staff_staff_component__WEBPACK_IMPORTED_MODULE_68__["StaffComponent"], _attempt_attempt_component__WEBPACK_IMPORTED_MODULE_74__["AttemptComponent"]],
        imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_32__["ClipboardModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__["DragDropModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_36__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_37__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_38__["CdkTreeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__["MatBottomSheetModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_40__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_42__["MatDatepickerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_43__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__["MatExpansionModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_45__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_46__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_47__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_48__["MatProgressBarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__["MatRadioModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_50__["MatSidenavModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_51__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_52__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_53__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_54__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_55__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_56__["MatTreeModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_69__["ConfirmDialogModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_70__["MessagesModule"], primeng_password__WEBPACK_IMPORTED_MODULE_72__["PasswordModule"], primeng_card__WEBPACK_IMPORTED_MODULE_73__["CardModule"], primeng_table__WEBPACK_IMPORTED_MODULE_57__["TableModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["HalfCircleSpinnerModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_71__["ProgressBarModule"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_87__["ToggleButtonModule"], angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_88__["BackButtonDisableModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_70__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_89__["MessageModule"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_90__["LocalStorageModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_83__["CalendarModule"], primeng_dataview__WEBPACK_IMPORTED_MODULE_75__["DataViewModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_76__["PanelModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_77__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_78__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_79__["DialogModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_80__["DropdownModule"], primeng_table__WEBPACK_IMPORTED_MODULE_57__["TableModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_81__["TabViewModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_82__["FullCalendarModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_83__["CalendarModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_84__["CheckboxModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_85__["CodeHighlighterModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_86__["SidebarModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__["MatBadgeModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatLineModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["SemipolarSpinnerModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["AtomSpinnerModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["SpringSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_59__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_60__["HomeComponent"], _header_component_header_component_component__WEBPACK_IMPORTED_MODULE_62__["HeaderComponentComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_63__["AdminComponent"], _exam_exam_component__WEBPACK_IMPORTED_MODULE_64__["ExamComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_67__["ResultComponent"], _staff_staff_component__WEBPACK_IMPORTED_MODULE_68__["StaffComponent"], _attempt_attempt_component__WEBPACK_IMPORTED_MODULE_74__["AttemptComponent"]],
          imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_32__["ClipboardModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__["DragDropModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_36__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_37__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_38__["CdkTreeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__["MatBottomSheetModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_40__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_42__["MatDatepickerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_43__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__["MatExpansionModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_45__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_46__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_47__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_48__["MatProgressBarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__["MatRadioModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_50__["MatSidenavModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_51__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_52__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_53__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_54__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_55__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_56__["MatTreeModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_69__["ConfirmDialogModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_70__["MessagesModule"], primeng_password__WEBPACK_IMPORTED_MODULE_72__["PasswordModule"], primeng_card__WEBPACK_IMPORTED_MODULE_73__["CardModule"], primeng_table__WEBPACK_IMPORTED_MODULE_57__["TableModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["HalfCircleSpinnerModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_71__["ProgressBarModule"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_87__["ToggleButtonModule"], angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_88__["BackButtonDisableModule"].forRoot({
            preserveScrollPosition: true
          }), primeng_messages__WEBPACK_IMPORTED_MODULE_70__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_89__["MessageModule"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_90__["LocalStorageModule"].forRoot({
            prefix: 'my-app',
            storageType: 'localStorage'
          }), primeng_calendar__WEBPACK_IMPORTED_MODULE_83__["CalendarModule"], primeng_dataview__WEBPACK_IMPORTED_MODULE_75__["DataViewModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_76__["PanelModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_77__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_78__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_79__["DialogModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_80__["DropdownModule"], primeng_table__WEBPACK_IMPORTED_MODULE_57__["TableModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_81__["TabViewModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_82__["FullCalendarModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_83__["CalendarModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_84__["CheckboxModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_85__["CodeHighlighterModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_86__["SidebarModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__["MatBadgeModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatLineModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["SemipolarSpinnerModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["AtomSpinnerModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_66__["SpringSpinnerModule"]],
          providers: [_services_signin_service__WEBPACK_IMPORTED_MODULE_6__["SigninService"],, _angular_common__WEBPACK_IMPORTED_MODULE_65__["DatePipe"], _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_7__["ProcessHTTPMsgService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], {
            provide: 'BaseURL',
            useValue: _shared_baseurl__WEBPACK_IMPORTED_MODULE_9__["baseURL"]
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_61__["AuthInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_61__["UnauthorizedInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/attempt/attempt.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/attempt/attempt.component.ts ***!
    \**********************************************/

  /*! exports provided: AttemptComponent */

  /***/
  function srcAppAttemptAttemptComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttemptComponent", function () {
      return AttemptComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_attempt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/attempt.service */
    "./src/app/services/attempt.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");

    function AttemptComponent_table_1_tr_24_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var a_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.value[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.value[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.value[2]);
      }
    }

    function AttemptComponent_table_1_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var i_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2["user"]["username"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, i_r2["subject"]["date"]), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r2["marks"], "/", i_r2["subject"]["marks"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 7, i_r2["attempt"]));
      }
    }

    function AttemptComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Attempt for this Exam\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AttemptComponent = /*#__PURE__*/function () {
      function AttemptComponent(route, attemptservice) {
        _classCallCheck(this, AttemptComponent);

        this.route = route;
        this.attemptservice = attemptservice;
        this.attempts = [];
      }

      _createClass(AttemptComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            return _this3.attemptservice.getAttempts(params['id']);
          })).subscribe(function (resp) {
            console.log(resp);
            _this3.attempts = resp;
          }, function (errmess) {
            console.log(errmess);
            _this3.errMess = [];

            _this3.errMess.push({
              severity: 'error',
              summary: 'Error:',
              detail: 'You Have Not Verified Your Email Address'
            });

            console.log(_this3.errMess);
          });
        }
      }]);

      return AttemptComponent;
    }();

    AttemptComponent.ɵfac = function AttemptComponent_Factory(t) {
      return new (t || AttemptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_attempt_service__WEBPACK_IMPORTED_MODULE_3__["AttemptService"]));
    };

    AttemptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AttemptComponent,
      selectors: [["app-attempt"]],
      decls: 4,
      vars: 3,
      consts: [["class", "table table-hover table-striped", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value", "valueChange"], [1, "table", "table-hover", "table-striped"], [1, "card-text"], [4, "ngFor", "ngForOf"]],
      template: function AttemptComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttemptComponent_table_1_Template, 26, 9, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AttemptComponent_div_2_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-messages", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AttemptComponent_Template_p_messages_valueChange_3_listener($event) {
            return ctx.errMess = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attempts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attempts.length == 0 && !ctx.errMess);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.errMess);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], primeng_messages__WEBPACK_IMPORTED_MODULE_5__["Messages"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F0dGVtcHQvYXR0ZW1wdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttemptComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-attempt',
          templateUrl: './attempt.component.html',
          styleUrls: ['./attempt.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_attempt_service__WEBPACK_IMPORTED_MODULE_3__["AttemptService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/exam/exam.component.ts":
  /*!****************************************!*\
    !*** ./src/app/exam/exam.component.ts ***!
    \****************************************/

  /*! exports provided: ExamComponent */

  /***/
  function srcAppExamExamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamComponent", function () {
      return ExamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _services_exam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/exam.service */
    "./src/app/services/exam.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-2-local-storage */
    "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/confirmdialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-confirmdialog.js");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var primeng_progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/progressbar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressbar.js");
    /* harmony import */


    var primeng_dataview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/dataview */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
    /* harmony import */


    var primeng_panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/panel */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
    /* harmony import */


    var primeng_sidebar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/sidebar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js"); // import { AuthService } from './auth.service';


    function ExamComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.quecount);
      }
    }

    function ExamComponent_div_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NaN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExamComponent_div_0_p_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.questionnumber);
      }
    }

    function ExamComponent_div_0_p_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NaN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExamComponent_div_0_ng_container_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Attempted");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ExamComponent_div_0_ng_container_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selected Answer is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.selectedanswer);
      }
    }

    function ExamComponent_div_0_ng_container_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Previously selectedOption Was : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.last);
      }
    }

    function ExamComponent_div_0_div_21_a_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_a_2_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r27.setClickedRow(i_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r23 = ctx_r30.index;
        var num_r22 = ctx_r30.$implicit;

        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("select", i_r23 == ctx_r24.selectedItem);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num_r22[0]);
      }
    }

    function ExamComponent_div_0_div_21_a_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_a_2_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r31.setClickedRow(i_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var num_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("select", ctx_r25.answers[num_r22[0]]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num_r22[0]);
      }
    }

    function ExamComponent_div_0_div_21_a_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_a_2_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r35.setClickedRow(i_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var num_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("select", ctx_r26.questionflag[num_r22[0]]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num_r22[0]);
      }
    }

    function ExamComponent_div_0_div_21_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r39.test();
        })("click", function ExamComponent_div_0_div_21_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var num_r22 = ctx.$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r41.hasPrevNext(num_r22[0], "l");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExamComponent_div_0_div_21_a_2_div_1_Template, 3, 3, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamComponent_div_0_div_21_a_2_div_2_Template, 3, 3, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExamComponent_div_0_div_21_a_2_div_3_Template, 3, 3, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var num_r22 = ctx.$implicit;

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.answers[num_r22[0]] && !ctx_r19.questionflag[num_r22[0]]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.answers[num_r22[0]]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.questionflag[num_r22[0]] && !ctx_r19.answers[num_r22[0]]);
      }
    }

    function ExamComponent_div_0_div_21_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "abbr", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_div_4_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r42.flagquestion();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r20.answers[ctx_r20.questionnumber]);
      }
    }

    function ExamComponent_div_0_div_21_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "abbr", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_div_5_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r44.removeflag();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExamComponent_div_0_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamComponent_div_0_div_21_a_2_Template, 4, 3, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExamComponent_div_0_div_21_div_4_Template, 4, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExamComponent_div_0_div_21_div_5_Template, 4, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "abbr", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r46.flagandremoveattempt();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_21_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r48.confirm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleColor", ctx_r17.mycolor)("matRippleRadius", ctx_r17.radius);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.items);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.questionflag[ctx_r17.questionnumber]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.questionflag[ctx_r17.questionnumber]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r17.answers[ctx_r17.questionnumber]);
      }
    }

    function ExamComponent_div_0_div_22_label_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pick your answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExamComponent_div_0_div_22_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExamComponent_div_0_div_22_div_7_Template_mat_radio_button_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var season_r54 = ctx.$implicit;

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r56.savetemp(season_r54);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var season_r54 = ctx.$implicit;

        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("checked", season_r54 == ctx_r50.last);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", season_r54)("disabled", ctx_r50.testing[ctx_r50.questionnumber])("checked", season_r54 == ctx_r50.last);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", season_r54, " ");
      }
    }

    function ExamComponent_div_0_div_22_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_22_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r58.test();
        })("click", function ExamComponent_div_0_div_22_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r60.hasPrevNext(ctx_r60.prev, "p");
        })("click", function ExamComponent_div_0_div_22_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r61.setClickedRow(ctx_r61.questionnumber - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("select", ctx_r51.questionnumber - 1 == ctx_r51.selectedItem);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r51.questionnumber == 1)("disabled", ctx_r51.testing[ctx_r51.prev]);
      }
    }

    function ExamComponent_div_0_div_22_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_22_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r62.test();
        })("click", function ExamComponent_div_0_div_22_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r64.hasPrevNext(ctx_r64.next, "n");
        })("click", function ExamComponent_div_0_div_22_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r65.setClickedRow(ctx_r65.questionnumber - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("select", ctx_r52.questionnumber - 1 == ctx_r52.selectedItem);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r52.questionnumber == ctx_r52.quecount)("disabled", ctx_r52.testing[ctx_r52.next]);
      }
    }

    function ExamComponent_div_0_div_22_p_progressBar_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-progressBar", 3);
      }

      if (rf & 2) {
        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r53.objectKeys(ctx_r53.answers).length * ctx_r53.quecount);
      }
    }

    function ExamComponent_div_0_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Question: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-group", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExamComponent_div_0_div_22_Template_mat_radio_group_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r66.selectedanswer = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExamComponent_div_0_div_22_label_6_Template, 3, 0, "label", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExamComponent_div_0_div_22_div_7_Template, 3, 6, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExamComponent_div_0_div_22_button_8_Template, 2, 4, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExamComponent_div_0_div_22_button_9_Template, 2, 4, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_0_div_22_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r68.confirm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExamComponent_div_0_div_22_p_progressBar_12_Template, 1, 1, "p-progressBar", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

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
      }
    }

    function ExamComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
      }
    }

    function ExamComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_1_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r69.searchQuestions();
        })("click", function ExamComponent_div_1_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r71.startTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm You Want To Start Exam");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExamComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_2_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.setFlag();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.subject);
      }
    }

    function ExamComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No scheduled exam");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExamComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_4_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.searchTests();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search Exams");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExamComponent_p_dataView_8_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_p_dataView_8_ng_template_7_Template_button_click_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var car_r79 = ctx.$implicit;

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r80.selectCar($event, car_r79);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var car_r79 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r79.subject);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, car_r79.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r79.time);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r79.marks);
      }
    }

    var _c0 = function _c0() {
      return {
        "text-align": "center"
      };
    };

    function ExamComponent_p_dataView_8_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_p_dataView_8_ng_template_8_Template_button_click_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

          var car_r82 = ctx.$implicit;

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r83.selectCar($event, car_r82);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var car_r82 = ctx.$implicit;

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
      }
    }

    function ExamComponent_p_dataView_8_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.tempExam);
      }
    }

    function ExamComponent_p_dialog_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_p_dialog_9_div_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r87.setFlag();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r85.selectedCar.subject, " - ", ctx_r85.selectedCar.marks, "");
      }
    }

    function ExamComponent_p_dialog_9_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r86.msg);
      }
    }

    var _c1 = function _c1() {
      return {
        width: "225px"
      };
    };

    var _c2 = function _c2() {
      return {
        padding: "2em",
        textAlign: "center"
      };
    };

    function ExamComponent_p_dialog_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dialog", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function ExamComponent_p_dialog_9_Template_p_dialog_visibleChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.displayDialog = $event;
        })("onAfterHide", function ExamComponent_p_dialog_9_Template_p_dialog_onAfterHide_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r91.onDialogHide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExamComponent_p_dialog_9_div_1_Template, 4, 2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamComponent_p_dialog_9_div_2_Template, 2, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx_r6.displayDialog)("minY", 70)("modal", true)("contentStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.selectedCar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.msg);
      }
    }

    function ExamComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_div_10_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r92["continue"]();
        })("click", function ExamComponent_div_10_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r94.startTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r7.msg, " ");
      }
    }

    function ExamComponent_p_sidebar_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-sidebar", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function ExamComponent_p_sidebar_11_Template_p_sidebar_visibleChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r95.visibleSidebar5 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirmation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_p_sidebar_11_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r97.searchQuestions();
        })("click", function ExamComponent_p_sidebar_11_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r98.startTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_p_sidebar_11_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r99.visibleSidebar5 = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx_r8.visibleSidebar5)("fullScreen", true)("baseZIndex", 10000);
      }
    }

    function ExamComponent_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r100.visibleSidebar5 = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ExamComponent = /*#__PURE__*/function () {
      function ExamComponent(examservice, confirmationService, authService, fb, router, adminservice, datePipe, _localStorageService) {
        _classCallCheck(this, ExamComponent);

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
        this["final"] = {};
        this.attemptedFlag = false; // msgs:any;

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

      _createClass(ExamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          // console.log(this._localStorageService.getStorageType())
          var date = new Date();
          console.log(this.datePipe.transform(date, "yyyy-MM-dd"));
          this.authService.loadUserCredentials();
          this.subscription = this.authService.getUsername().subscribe(function (name) {
            _this4.username = name;
          });
          this.subscription1 = this.authService.getBranch().subscribe(function (name) {
            _this4.branch = name;
          });
          this.subscription2 = this.authService.getSemester().subscribe(function (name) {
            _this4.semester = name;
          });
          this.subscription3 = this.authService.getId().subscribe(function (id) {
            _this4.id = id;
          });
        }
      }, {
        key: "confirm",
        value: function confirm() {
          var _this5 = this;

          this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: function accept() {
              console.log(_this5.answerArray);
              console.log(_this5.answers);

              for (var i = 1; i < _this5.answers.length; i++) {
                _this5.answer = [];

                if (_this5.answers[i] == _this5.answerArray[i]) {
                  _this5.marks += 1;

                  _this5.answer.push(_this5.answers[i]);

                  _this5.answer.push('True');

                  _this5.answer.push(_this5.answerArray[i]);

                  _this5["final"][_this5.items[i - 1][1]] = _this5.answer;
                } else {
                  if (_this5.answers[i] != null) {
                    _this5.answer.push(_this5.answers[i]);
                  } else {
                    _this5.answer.push('NA');
                  }

                  _this5.answer.push('False');

                  _this5.answer.push(_this5.answerArray[i]);

                  _this5["final"][_this5.items[i - 1][1]] = _this5.answer;
                }
              }

              console.log(_this5["final"]); // this.final['subject'] = (this.subject)

              _this5.examservice.sendAttempted(_this5["final"], _this5.examId, _this5.marks).subscribe(function (resp) {
                console.log(resp);
              });

              clearInterval(_this5.interval);
              console.log(_this5.marks);

              _this5.examservice.sendResult(_this5.branch, _this5.semester, _this5.marks, _this5.subject, _this5.examId).subscribe(function (name) {
                console.log('Result Entered successfully', name);
              }, function (error) {
                console.log(error);
                _this5.errMess = error;
                console.log(_this5.errMess);
              });

              _this5.examservice.setfinalFlag({
                subject: _this5.subject,
                subjectId: _this5.examId,
                completionFlag: true
              }).subscribe(function (resp) {
                console.log(resp);
              });

              _this5.router.navigate(['/home']);
            },
            reject: function reject() {
              _this5.msgs = [{
                severity: 'info',
                summary: 'Rejected',
                detail: 'You have rejected'
              }];
            }
          });
        }
      }, {
        key: "searchQuestions",
        value: function searchQuestions() {
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
            this.answerArray[i + 1] = 'NA'; // this.answers[i+1] = null
          }

          console.log(this.answerArray);
          console.log(this.answers);

          while (this.arr.length < this.exammarks) {
            var r = Math.floor(Math.random() * 14);
            if (this.arr.indexOf(r) === -1) this.arr.push(r);
            this.quecount = this.arr.length;
          }

          for (var i = 0; i < this.quecount; i++) {
            this.mapping[i + 1] = this.arr[i];
          } // this.mapping[this.quecount+1] = 11
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
          this.selectedItem = this.questionnumber - 1;
        }
      }, {
        key: "hasPrevNext",
        value: function hasPrevNext(id, message) {
          // console.log(this.selectedanswer);
          this.seasons = []; // this.answerArray=[];

          this.selectedanswer = null;
          if (message == "n") this.questionnumber += 1;
          if (message == "p") this.questionnumber -= 1;
          if (message == "l") this.questionnumber = parseInt(id);
          this.getQuestion(id);
          var ObjectLength = Object.keys(this.mapping).length;
          this.currentindex = id - 1;
          this.prev = (ObjectLength + this.currentindex - 1) % ObjectLength + 1;
          this.next = (ObjectLength + this.currentindex + 1) % ObjectLength + 1;
        }
      }, {
        key: "getQuestion",
        value: function getQuestion(key) {
          var _this6 = this;

          this.last = 0;
          console.log(this.mapping); // this.examservice.getQuestionbyid(this.branch,this.semester,this.mapping[key])

          this.examservice.getQuestionbyid(this.subject, this.mapping[key]).subscribe(function (question) {
            _this6.question = question;
            console.log(_this6.question);
            _this6.seasons = [question.option1, question.option2, question.option3, question.option4]; //  this.answerArray=[question.option1.ans, question.option2.ans, question.option3.ans, question.option4.ans];
            //  console.log(this.answerArray);

            console.log(_this6.seasons);

            _this6.shuffle(_this6.seasons);

            _this6.answerArray[_this6.questionnumber] = _this6.question.ans;
            console.log(_this6.answerArray);

            if (_this6.answers != []) {
              _this6.last = _this6.answers[_this6.questionnumber];
            }
          });
        }
      }, {
        key: "shuffle",
        value: function shuffle(array) {
          array.sort(function () {
            return Math.random() - 0.5;
          });
        }
      }, {
        key: "test",
        value: function test() {
          if (this.answers[this.questionnumber]) {
            this.testing[this.questionnumber] = true;
            console.log(this.testing);
          }
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this7 = this;

          var timeLeft = this.timeLeft;
          var minleft = this.minute;
          this.interval = setInterval(function () {
            if (_this7.timeLeft < 10 && _this7.timeLeft > 1) {
              _this7.timeLeft--;

              var a = ('0' + _this7.timeLeft).slice(-2);

              _this7.timeLeft = parseInt(a); // console.log(a,this.timeLeft);
            } else if (_this7.timeLeft > 0) {
              _this7.timeLeft--;
            } else if (_this7.minute > 0) {
              _this7.minute--;
              _this7.timeLeft = timeLeft;
            } else {
              console.log('Your answers');
              console.log(_this7.answers);
              clearInterval(_this7.interval);

              _this7.confirm();
            }
          }, 1000);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this8 = this;

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
              this["final"][this.items[i - 1][1]] = this.answer;
            } else {
              if (this.answers[i] != null) {
                this.answer.push(this.answers[i]);
              } else {
                this.answer.push('NA');
              }

              this.answer.push('False');
              this.answer.push(this.answerArray[i]);
              this["final"][this.items[i - 1][1]] = this.answer;
            }
          }

          console.log(this["final"]); // this.final['subject'] = (this.subject)

          this.examservice.sendAttempted(this["final"], this.examId, this.marks).subscribe(function (resp) {
            console.log(resp);
          });
          clearInterval(this.interval);
          console.log(this.marks);
          this.examservice.sendResult(this.branch, this.semester, this.marks, this.subject, this.examId).subscribe(function (name) {
            console.log('Result Entered successfully', name);
          }, function (error) {
            console.log(error);
            _this8.errMess = error;
            console.log(_this8.errMess);
          });
          this.router.navigate(['/home']);
        }
      }, {
        key: "savetemp",
        value: function savetemp(season) {
          this.answers[this.questionnumber] = season;
          console.log(this.answers);
          console.log(this.answerArray);
          this.last = null;
          console.log(this._localStorageService.keys()); // var temp = []
          // temp.push(season)
          // temp.push(this.answerArray[this.questionnumber])

          this._localStorageService.set(this.mapping[this.questionnumber].toString(), [season, this.answerArray[this.questionnumber]]); // this._localStorageService.set('test'+this.mapping[this.questionnumber],this.answerArray[this.questionnumber])
          // this._localStorageService.set(this.)


          console.log(this.mapping[this.questionnumber], this._localStorageService.get(this.mapping[this.questionnumber].toString())); // console.log(this._localStorageService.get('test'+this.mapping[this.questionnumber].toString()));
        }
      }, {
        key: "searchTests",
        value: function searchTests() {
          var _this9 = this;

          this.exammarks = 0;
          console.log('inside');
          console.log(this.semester);
          var date2 = this.datePipe.transform(this.today, "dd");
          console.log(date2);
          this.adminservice.searchExam(this.branch, this.semester).subscribe(function (tests) {
            console.log(tests);
            _this9.exams = tests.exams[0];
            console.log(_this9.exams);

            _this9.tempExam.push(_this9.exams);

            _this9.exammarks = _this9.exams.marks;
            _this9.minute = _this9.exams.duration - 1;
            _this9.examId = _this9.exams['_id'];
            console.log(_this9.examId); // this.today = this.exams.date

            var date1 = _this9.datePipe.transform(_this9.exams.date, "dd");

            var time1 = _this9.exams.time;

            var date2 = _this9.datePipe.transform(_this9.today, "dd");

            var time2 = _this9.datePipe.transform(_this9.today, "HH:mm");

            console.log(date1, date2, time1, time2);

            if (time1 <= time2) {
              _this9.subject = _this9.exams.subject;
              _this9.flag = true;
            }
          });
        }
      }, {
        key: "flagquestion",
        value: function flagquestion() {
          this.questionflag[this.questionnumber] = true;
          console.log(this.questionflag); // this._localStorageService.set('test',null)
          // var test = this._localStorageService.get('test')
          // console.log(test);
          // this._localStorageService.set('test',1)
          // var test = this._localStorageService.get('test')
          // console.log(test);
        }
      }, {
        key: "removeflag",
        value: function removeflag() {
          this.questionflag[this.questionnumber] = false;
          console.log(this.questionflag);
        }
      }, {
        key: "flagandremoveattempt",
        value: function flagandremoveattempt() {
          delete this.answers[this.questionnumber];
          this.questionflag[this.questionnumber] = true;
        } //   getVal() {
        // 	  return this.quecount
        //   }

      }, {
        key: "setFlag",
        value: function setFlag() {
          var _this10 = this;

          this.msg = null; //   var temp2 = 0;

          this.examservice.getUser(this.id).subscribe(function (resp) {
            console.log(resp['user'][0]['attempted']);
            var temp = resp['user'][0]['attempted'];

            for (var i = 0; i < temp.length; i++) {
              console.log(temp[i]); //   if(temp[i]['subjectId']==this.examId) {
              // 	  this.attemptedFlag = true
              // 	  break
              //   }

              if (temp[i]['subjectId'] == _this10.examId && temp[i]['flag'] && !temp[i]['completionFlag']) {
                _this10.halfcomplete = true; //   this.attemptedFlag = false

                break;
              } else if (temp[i]['subjectId'] == _this10.examId && temp[i]['flag'] && temp[i]['completionFlag']) {
                _this10.attemptedFlag = true; //   this.halfcomplete = false

                break;
              }
            }

            if (_this10.attemptedFlag) {
              _this10.msg = 'Already attempted';
              _this10.attemptedFlag = false;
            } else if (!_this10.attemptedFlag && !_this10.halfcomplete) {
              _this10.attemptedFlag = true;

              _this10.examservice.setFlag({
                subject: _this10.subject,
                subjectId: _this10.examId,
                flag: true
              }).subscribe(function (resp) {
                console.log(resp);
              });
            }

            if (_this10.halfcomplete) {
              _this10.msg = 'want to continue Your Exam';
              console.log(_this10.msg); // this.halfcomplete = false
            }
          });
        }
      }, {
        key: "selectCar",
        value: function selectCar(event, car) {
          this.selectedCar = car;
          this.displayDialog = true;
          event.preventDefault();
        }
      }, {
        key: "onDialogHide",
        value: function onDialogHide() {
          this.selectedCar = null;
        }
      }, {
        key: "continue",
        value: function _continue() {
          this.mapping = {};
          this.items = [];
          this.marks = 0;
          this.answerArray = [];
          this.answers = [];

          var temp = this._localStorageService.keys();

          console.log(temp); // this.items.sort(function(a, b) {
          // return a[0] - b[0];
          // });

          for (var i = 0; i < temp.length; i++) {
            if (this._localStorageService.get(temp[i])) {
              var temp1 = this._localStorageService.get(temp[i]);

              console.log(temp1[0]);
              this.answers[i + 1] = this._localStorageService.get(temp[i])[0];
              this.answerArray[i + 1] = this._localStorageService.get(temp[i])[1];
            } else {
              this.answerArray[i + 1] = 'NA';
            } // this.answerArray[i+1] = this._localStorageService.get('test'+temp[i])


            if (this.answers[i + 1]) {
              this.testing[i + 1] = true;
            }

            this.mapping[i + 1] = temp[i];
          }

          console.log(this.answers, this.answerArray);

          for (var question in this.mapping) {
            this.items.push([question, this.mapping[question]]); // console.log(this.mapping[question]);
            // this._localStorageService.set(this.mapping[question],null)
          }

          this.quecount = this.items.length; // console.log(this._localStorageService.keys());
          // this.items.sort(function(a, b) {
          // 	return a[0] - b[0];
          // });

          console.log(this.items, this.mapping, this.answers);
          this.flag1 = true;
          this.questionnumber = 1;
          this.hasPrevNext(this.questionnumber, "");
          this.selectedItem = this.questionnumber - 1;
        }
      }]);

      return ExamComponent;
    }();

    ExamComponent.ɵfac = function ExamComponent_Factory(t) {
      return new (t || ExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exam_service__WEBPACK_IMPORTED_MODULE_2__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"]));
    };

    ExamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExamComponent,
      selectors: [["app-exam"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]])],
      decls: 13,
      vars: 11,
      consts: [[4, "ngIf"], ["header", "Confirmation", "icon", "pi pi-exclamation-triangle"], [1, "popup"], [3, "value"], [3, "value", 4, "ngIf"], ["header", "Exam Details", "showEffect", "fade", 3, "visible", "minY", "modal", "style", "contentStyle", "visibleChange", "onAfterHide", 4, "ngIf"], [3, "visible", "fullScreen", "baseZIndex", "visibleChange", 4, "ngIf"], ["pButton", "", "type", "button", "label", "Confirmation Button", 3, "click", 4, "ngIf"], [1, "totalquestion", "mat-elevation-z4"], [1, "totalquestion1"], [1, "questionnumber", "mat-elevation-z4"], [1, "questionnumber1"], [1, "attempted", "mat-elevation-z4"], [1, "attempted1"], [1, "selectedAnswer"], ["class", "panel", "matRipple", "", 3, "matRippleColor", "matRippleRadius", 4, "ngIf"], ["class", "outercoverquestion ", 4, "ngIf"], ["matRipple", "", 1, "panel", 3, "matRippleColor", "matRippleRadius"], ["class", "disabled", 3, "click", 4, "ngFor", "ngForOf"], ["class", "button1 ", 4, "ngIf"], [1, "button1"], ["title", "Remove Attempt and Flag Question"], ["mat-button", "", 1, "mat-elevation-z4", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-eraser", "fa-lg"], ["type", "text", "pButton", "", "icon", "pi pi-check", "label", "Complete Exam", 3, "click"], [1, "disabled", 3, "click"], ["class", "currentbutton mat-elevation-z8", 3, "select", "click", 4, "ngIf"], ["class", "attemptedbutton mat-elevation-z8", 3, "select", "click", 4, "ngIf"], ["class", "flagquestions mat-elevation-z8", 3, "select", "click", 4, "ngIf"], [1, "currentbutton", "mat-elevation-z8", 3, "click"], [1, "attemptedbutton", "mat-elevation-z8", 3, "click"], [1, "flagquestions", "mat-elevation-z8", 3, "click"], ["title", "Mark Question for Review"], ["aria-hidden", "true", 1, "fa", "fa-flag-o", "fa-lg"], ["title", "Remove Flag from Question"], ["mat-button", "", 1, "mat-elevation-z4", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-flag", "fa-lg"], [1, "outercoverquestion"], [1, "question"], [1, "example-radio-group", 3, "ngModel", "disabled", "ngModelChange"], ["class", "example-radio-button", 4, "ngFor", "ngForOf"], ["class", "prevbutton ", "mat-button", "", 3, "disabled", "select", "click", 4, "ngIf"], ["class", "nextbutton ", "mat-button", "", 3, "disabled", "select", "click", 4, "ngIf"], [1, "button2"], [1, "example-radio-button"], [3, "value", "disabled", "checked", "change"], ["mat-button", "", 1, "prevbutton", 3, "disabled", "click"], ["mat-button", "", 1, "nextbutton", 3, "disabled", "click"], ["mat-button", "", 1, "button", 3, "click"], ["mat-button", "", 3, "click"], ["dv", ""], [1, "ui-helper-clearfix"], [1, "p-grid"], [1, "p-col-6", "p-md-4", 2, "text-align", "right"], ["pTemplate", "listItem"], ["pTemplate", "gridItem"], [1, "p-col-12"], [1, "car-details"], ["pButton", "", "type", "button", "label", "Set Flags", 3, "click"], [1, "p-col-12", "p-sm-3", 2, "padding", ".5em"], [3, "header"], [1, "car-detail"], ["pButton", "", "type", "button", "label", "Start Exam", 2, "margin-top", "0", 3, "click"], ["header", "Exam Details", "showEffect", "fade", 3, "visible", "minY", "modal", "contentStyle", "visibleChange", "onAfterHide"], ["pButton", "", "type", "button", "label", "Click Here", 2, "margin-left", "10px", 3, "click"], [3, "visible", "fullScreen", "baseZIndex", "visibleChange"], [2, "font-weight", "normal", "text-align", "center"], ["pButton", "", "type", "button", "label", "Confirm", 1, "ui-button-success", 2, "left", "43%", 3, "click"], ["pButton", "", "type", "button", "label", "Cancel", 1, "ui-button-secondary", 2, "left", "44%", 3, "click"], ["pButton", "", "type", "button", "label", "Confirmation Button", 3, "click"]],
      template: function ExamComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialog"], primeng_messages__WEBPACK_IMPORTED_MODULE_10__["Messages"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressBar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatAnchor"], primeng_dataview__WEBPACK_IMPORTED_MODULE_16__["DataView"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["Header"], primeng_dataview__WEBPACK_IMPORTED_MODULE_16__["DataViewLayoutOptions"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeTemplate"], primeng_panel__WEBPACK_IMPORTED_MODULE_17__["Panel"], primeng_dialog__WEBPACK_IMPORTED_MODULE_18__["Dialog"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_19__["Sidebar"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
      styles: ["body[_ngcontent-%COMP%] {\n  background-color: lightslategray;\n}\n\n.totalquestion[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 135px;\n  height: 90px;\n  border: 1px black;\n  margin-left: 100px;\n  margin-top: 30px;\n  background-color: #3d9eff;\n  border-radius: 2%;\n  text-align: center;\n  padding-top: 15px;\n  font-size: 40px;\n}\n\n.totalquestion1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 135px;\n  height: 90px;\n  border: 1px black;\n  margin-left: 235px;\n  margin-top: 30px;\n  background-color: white;\n  border-radius: 2%;\n  padding-left: 10px;\n  padding-top: 10px;\n  font-family: \"Times New Roman\";\n}\n\n.questionnumber[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 135px;\n  height: 90px;\n  border: 1px black;\n  margin-left: 400px;\n  margin-top: 30px;\n  background-color: #d15959;\n  border-radius: 2%;\n  padding-top: 15px;\n  padding-right: 8px;\n  font-size: 40px;\n  text-align: center;\n}\n\n.questionnumber1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 135px;\n  height: 90px;\n  border: 1px black;\n  margin-left: 535px;\n  margin-top: 30px;\n  background-color: white;\n  border-radius: 2%;\n  padding-left: 10px;\n  padding-top: 10px;\n  font-family: \"Times New Roman\";\n}\n\n.attempted[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 135px;\n  height: 90px;\n  border: 1px black;\n  margin-left: 700px;\n  margin-top: 30px;\n  background-color: #6de4b4;\n  border-radius: 2%;\n  padding-left: 10px;\n  padding-top: 10px;\n  font-size: 40px;\n}\n\n.attempted1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 135px;\n  height: 90px;\n  border: 1px black;\n  margin-left: 835px;\n  margin-top: 30px;\n  background-color: white;\n  border-radius: 2%;\n  padding-left: 10px;\n  padding-top: 10px;\n  font-family: \"Times New Roman\";\n}\n\n.selectedAnswer[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 270px;\n  height: 90px;\n  border: 1px black;\n  margin-left: 1000px;\n  margin-top: 30px;\n  background-color: #FFCC66;\n  border-radius: 2%;\n  padding-left: 10px;\n  padding-top: 10px;\n  word-wrap: break-word;\n  overflow: auto;\n  font-family: \"Times New Roman\";\n}\n\n.panel[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  height: 300px;\n  width: 27%;\n  border: 5px black;\n  overflow: auto;\n  margin-top: 150px;\n  margin-left: 100px;\n  background-color: white;\n  border-radius: 2%;\n}\n\n.currentbutton[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  background-color: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 2%;\n  margin-left: 8px;\n  margin-top: 8px;\n}\n\n.currentbutton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\n.currentbutton.select[_ngcontent-%COMP%] {\n  background-color: #e9dc24;\n}\n\n.attemptedbutton[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  border-radius: 2%;\n  background-color: white;\n  width: 40px;\n  height: 40px;\n  margin-left: 8px;\n  margin-top: 8px;\n}\n\n.attemptedbutton.select[_ngcontent-%COMP%] {\n  background-color: #6de4b4;\n  pointer-events: none;\n  cursor: default;\n}\n\n.attemptedbutton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\n.flagquestions[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  border-radius: 2%;\n  background-color: white;\n  width: 40px;\n  height: 40px;\n  margin-left: 8px;\n  margin-top: 8px;\n}\n\n.flagquestions.select[_ngcontent-%COMP%] {\n  background-color: #d15959;\n}\n\n.flagquestions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\n.outercoverquestion[_ngcontent-%COMP%] {\n  margin-left: 550px;\n  margin-top: 150px;\n  position: absolute;\n  border-radius: 2%;\n  width: 60%;\n  height: auto !important;\n}\n\n.question[_ngcontent-%COMP%] {\n  background-color: #3d9eff;\n  word-wrap: break-word;\n  margin: 8px;\n  padding: 10px;\n}\n\n.button[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  margin-left: 10px;\n}\n\n.example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 8px;\n  padding: 10px;\n}\n\n.example-radio-button[_ngcontent-%COMP%] {\n  padding: 10px;\n  white-space: normal;\n  text-align: justify;\n}\n\n.example-radio-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n.example-radio-button.checked[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.prevbutton[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n\n.nextbutton[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n\n.example-ripple-container[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-align: center;\n  width: 100px;\n  height: 100px;\n  line-height: 100px;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\n\n.example-ripple-checkbox[_ngcontent-%COMP%] {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field[_ngcontent-%COMP%] {\n  margin: 0 12px 0 0;\n}\n\n.button1[_ngcontent-%COMP%] {\n  display: inline;\n  padding-left: 15px;\n  padding-top: 15px;\n  border: 1px black;\n}\n\n.button2[_ngcontent-%COMP%] {\n  display: inline;\n  padding-left: 70%;\n  padding-top: 10px;\n  border: 1px black;\n}\n\n.popup[_ngcontent-%COMP%] {\n  top: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbS9FOlxcSW1wb3J0YW50XFxMb2NrZXJcXGRldGFpbHNcXE1jcS1nZW5lcmF0b3JcXEdhYmJhclxccXVpemdlbmVyYXRvci9zcmNcXGFwcFxcZXhhbVxcZXhhbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhhbS9leGFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFQTtFQUNFLGdDQUFBO0FDaEVGOztBRG1FQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7QUNsRUY7O0FEb0VBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNqRUY7O0FEb0VBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDbEVGOztBRG9FQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDakVGOztBRG9FQTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNsRUY7O0FEb0VBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNqRUY7O0FEb0VBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUNqRUY7O0FEb0VBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNqRUY7O0FEb0VBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2xFRjs7QURxRUE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNsRUY7O0FEcUVBO0VBQ0UseUJBQUE7QUNsRUY7O0FEc0VBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3BFRjs7QUR1RUE7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ3BFRjs7QUR5RUE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUN0RUY7O0FEeUVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3ZFRjs7QUQwRUE7RUFDRSx5QkFBQTtBQ3ZFRjs7QUQyRUE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUN4RUY7O0FEMEVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUN4RUY7O0FEOEVBO0VBRUUseUJBQUE7RUFFQSxxQkFBQTtFQUtBLFdBQUE7RUFJQSxhQUFBO0FDcEZGOztBRHdGQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNyRkY7O0FEd0ZBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDckZKOztBRHdGRTtFQVlBLGFBQUE7RUFVQSxtQkFBQTtFQUNBLG1CQUFBO0FDekdGOztBRDZHRTtFQUNFLHFCQUFBO0FDMUdKOztBRDZHRTtFQUNFLGlCQUFBO0FDMUdKOztBRDhHRTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDM0dGOztBRCtHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDNUdGOztBRGdIQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUVBLHVCQUFBO0VBQ0Esd0NBQUE7QUNoSEY7O0FEbUhBLDBDQUFBOztBQUNBO0VBQ0Usc0JBQUE7QUNoSEY7O0FEbUhBO0VBQ0Usa0JBQUE7QUNoSEY7O0FEbUhBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ2hIRjs7QURtSEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDaEhGOztBRGtIQTtFQUNFLFFBQUE7QUMvR0YiLCJmaWxlIjoic3JjL2FwcC9leGFtL2V4YW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAub3B0aW9ucyB7XHJcbiAgXHJcbi8vICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7ICBcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyAuYW5zIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyAgIFxyXG4vLyAgIFxyXG5cclxuLy8gICBcclxuXHJcbi8vIC8vIC55ZWxsb3cge1xyXG4vLyAvLyAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuLy8gLy8gICB3aWR0aDogMHB4O1xyXG4vLyAvLyAgIGhlaWdodDogMHB4O1xyXG4vLyAvLyAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuLy8gLy8gICBwYWRkaW5nLXRvcDogMjBweDtcclxuLy8gLy8gfVxyXG4vLyAub3V0bGV0IHtcclxuLy8gICBtYXJnaW4tbGVmdDogNDAwcHg7XHJcbi8vICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4vLyAgIHdpZHRoOiA3MCU7XHJcbi8vICAgaGVpZ2h0OiBkZWZhdWx0O1xyXG4vLyAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLmFiYyB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuYWJjZCB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiA0MDBweDtcclxuLy8gICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuYnV0dG9uIHtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4vLyAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyAuc3Bpbm5lciB7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuLy8gICBtYXJnaW4tdG9wOiAzMCU7XHJcbi8vIH1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG59XHJcblxyXG4udG90YWxxdWVzdGlvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEzNXB4O1xyXG4gIGhlaWdodDogOTBweDtcclxuICBib3JkZXI6IDFweCAgYmxhY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkOWVmZjtcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG5cclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLnRvdGFscXVlc3Rpb24xe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTM1cHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGJvcmRlcjogMXB4ICBibGFjaztcclxuICBtYXJnaW4tbGVmdDogMjM1cHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xyXG59XHJcblxyXG4ucXVlc3Rpb25udW1iZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMzVweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYm9yZGVyOiAxcHggIGJsYWNrO1xyXG4gIG1hcmdpbi1sZWZ0OiA0MDBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTU5NTk7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiA0M3B4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5xdWVzdGlvbm51bWJlcjF7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMzVweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYm9yZGVyOiAxcHggIGJsYWNrO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MzVweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XHJcbn1cclxuXHJcbi5hdHRlbXB0ZWQge1xyXG4gIFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTM1cHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGJvcmRlcjogMXB4ICBibGFjaztcclxuICBtYXJnaW4tbGVmdDogNzAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmRlNGI0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLmF0dGVtcHRlZDEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTM1cHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGJvcmRlcjogMXB4IGJsYWNrO1xyXG4gIG1hcmdpbi1sZWZ0OiA4MzVweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XHJcbn1cclxuXHJcbi5zZWxlY3RlZEFuc3dlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyNzBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYm9yZGVyOiAxcHggYmxhY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMDBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNDNjY7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XHJcbn1cclxuXHJcbi5wYW5lbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAyNyU7XHJcbiAgYm9yZGVyOiA1cHggYmxhY2s7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4OyAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbn1cclxuXHJcbi5jdXJyZW50YnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDsgICBcclxufVxyXG5cclxuLmN1cnJlbnRidXR0b24gcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXHJcbn1cclxuXHJcbi5jdXJyZW50YnV0dG9uLnNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZGMyNDtcclxuICAvLyB6b29tOiAxMjAlO1xyXG59XHJcblxyXG4uYXR0ZW1wdGVkYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcblxyXG4uYXR0ZW1wdGVkYnV0dG9uLnNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZkZTRiNDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgLy8gem9vbTogMTIwJTtcclxuIFxyXG59XHJcblxyXG4uYXR0ZW1wdGVkYnV0dG9uIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogLTUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxyXG59XHJcblxyXG4uZmxhZ3F1ZXN0aW9ucyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5mbGFncXVlc3Rpb25zLnNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZDE1OTU5O1xyXG4gIC8vIHpvb206IDEyMCU7XHJcbiBcclxufVxyXG4uZmxhZ3F1ZXN0aW9ucyBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IC01MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSl9XHJcblxyXG4ub3V0ZXJjb3ZlcnF1ZXN0aW9uIHtcclxuICBtYXJnaW4tbGVmdDogNTUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgLy8gaGVpZ2h0OiBkZWZhdWx0O1xyXG4gIFxyXG4gIC8vIG92ZXJmbG93OiBhdXRvOyAgXHJcbn1cclxuXHJcbi5xdWVzdGlvbiB7XHJcbiAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkOWVmZjtcclxuICAvLyBib3JkZXItcmFkaXVzOiAyJTtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgLy8gaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDVweDtcclxuICAvLyBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIC8vIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDE1cHggOHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4gIFxyXG4gIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XHJcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIHdpZHRoOiAyNzBweDtcclxuICAvLyBoZWlnaHQ6IDkwcHg7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDEwMDBweDtcclxuICAvLyBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAvLyBib3JkZXItcmFkaXVzOiAyJTtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgLy8gcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgLy8gcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8vIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAvLyBkaXNwbGF5OiBmbGV4IDtcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICAvLyBtYXJnaW46IDVweDtcclxuICAvLyB3aWR0aDogOTAlO1xyXG4gIC8vIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIC8vIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAvLyBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHAge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtcmFkaW8tYnV0dG9uLmNoZWNrZWQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5wcmV2YnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ubmV4dGJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmV4YW1wbGUtcmlwcGxlLWNvbnRhaW5lciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG5cclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiogU3R5bGVzIHRvIG1ha2UgdGhlIGRlbW8gbG9vayBiZXR0ZXIuICovXHJcbi5leGFtcGxlLXJpcHBsZS1jaGVja2JveCB7XHJcbiAgbWFyZ2luOiA2cHggMTJweCA2cHggMDtcclxufVxyXG5cclxuLmV4YW1wbGUtcmlwcGxlLWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogMCAxMnB4IDAgMDtcclxufVxyXG5cclxuLmJ1dHRvbjEge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgYm9yZGVyOiAxcHggYmxhY2s7XHJcbn1cclxuXHJcbi5idXR0b24yIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiA3MCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggYmxhY2s7XHJcbn1cclxuLnBvcHVwIHtcclxuICB0b3A6OTAlO1xyXG59XHJcbiIsImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcbn1cblxuLnRvdGFscXVlc3Rpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMzVweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXI6IDFweCBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q5ZWZmO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4udG90YWxxdWVzdGlvbjEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMzVweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXI6IDFweCBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDIzNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMiU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xufVxuXG4ucXVlc3Rpb25udW1iZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMzVweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXI6IDFweCBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE1OTU5O1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5xdWVzdGlvbm51bWJlcjEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMzVweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXI6IDFweCBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDUzNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMiU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xufVxuXG4uYXR0ZW1wdGVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTM1cHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyOiAxcHggYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiA3MDBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZkZTRiNDtcbiAgYm9yZGVyLXJhZGl1czogMiU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmF0dGVtcHRlZDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMzVweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXI6IDFweCBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDgzNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMiU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xufVxuXG4uc2VsZWN0ZWRBbnN3ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNzBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXI6IDFweCBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDEwMDBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0M2NjtcbiAgYm9yZGVyLXJhZGl1czogMiU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xufVxuXG4ucGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDI3JTtcbiAgYm9yZGVyOiA1cHggYmxhY2s7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMiU7XG59XG5cbi5jdXJyZW50YnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uY3VycmVudGJ1dHRvbiBwIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5jdXJyZW50YnV0dG9uLnNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWRjMjQ7XG59XG5cbi5hdHRlbXB0ZWRidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMiU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5hdHRlbXB0ZWRidXR0b24uc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZkZTRiNDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmF0dGVtcHRlZGJ1dHRvbiBwIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5mbGFncXVlc3Rpb25zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uZmxhZ3F1ZXN0aW9ucy5zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE1OTU5O1xufVxuXG4uZmxhZ3F1ZXN0aW9ucyBwIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5vdXRlcmNvdmVycXVlc3Rpb24ge1xuICBtYXJnaW4tbGVmdDogNTUwcHg7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDIlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnF1ZXN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkOWVmZjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBtYXJnaW46IDhweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTVweCA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5leGFtcGxlLXJhZGlvLWJ1dHRvbiBwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uZXhhbXBsZS1yYWRpby1idXR0b24uY2hlY2tlZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJldmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5uZXh0YnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmV4YW1wbGUtcmlwcGxlLWNvbnRhaW5lciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKiBTdHlsZXMgdG8gbWFrZSB0aGUgZGVtbyBsb29rIGJldHRlci4gKi9cbi5leGFtcGxlLXJpcHBsZS1jaGVja2JveCB7XG4gIG1hcmdpbjogNnB4IDEycHggNnB4IDA7XG59XG5cbi5leGFtcGxlLXJpcHBsZS1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAwIDEycHggMCAwO1xufVxuXG4uYnV0dG9uMSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgYm9yZGVyOiAxcHggYmxhY2s7XG59XG5cbi5idXR0b24yIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nLWxlZnQ6IDcwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IGJsYWNrO1xufVxuXG4ucG9wdXAge1xuICB0b3A6IDkwJTtcbn0iXX0= */", ".filter-container[_ngcontent-%COMP%] {\n            text-align: center;\n        }\n        .car-details[_ngcontent-%COMP%] {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 2em;\n            border-bottom: 1px solid #d9dad9;\n        }\n        .car-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n            display: flex;\n            align-items: center;\n        }\n        .car-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n            margin-right: 14px;\n        }\n        .car-detail[_ngcontent-%COMP%] {\n            padding: 0 1em 1em 1em;\n            border-bottom: 1px solid #d9dad9;\n            margin: 1em;\n        }\n        .ui-panel-content[_ngcontent-%COMP%] {\n            padding: 1em;\n        }\n        .dark-theme   [_nghost-%COMP%]     .car-details, .dark-theme   [_nghost-%COMP%]     .car-detail {\n            border-bottom: 1px solid #191919;\n        }\n        \n        @media (max-width: 1024px) {\n            .car-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n                 width: 75px;\n            }\n            .filter-container[_ngcontent-%COMP%] {\n                text-align: left;\n            }\n        }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-exam',
          templateUrl: './exam.component.html',
          styleUrls: ['./exam.component.scss'],
          providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]],
          styles: ["      \n        .filter-container {\n            text-align: center;\n        }\n        .car-details {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 2em;\n            border-bottom: 1px solid #d9dad9;\n        }\n        .car-details > div {\n            display: flex;\n            align-items: center;\n        }\n        .car-details > div img {\n            margin-right: 14px;\n        }\n        .car-detail {\n            padding: 0 1em 1em 1em;\n            border-bottom: 1px solid #d9dad9;\n            margin: 1em;\n        }\n        .ui-panel-content {\n            padding: 1em;\n        }\n        .dark-theme :host ::ng-deep .car-details,\n        .dark-theme :host ::ng-deep .car-detail {\n            border-bottom: 1px solid #191919;\n        }\n        \n        @media (max-width: 1024px) {\n            .car-details img {\n                 width: 75px;\n            }\n            .filter-container {\n                text-align: left;\n            }\n        }\n    "]
        }]
      }], function () {
        return [{
          type: _services_exam_service__WEBPACK_IMPORTED_MODULE_2__["ExamService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]
        }, {
          type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header-component/header-component.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/header-component/header-component.component.ts ***!
    \****************************************************************/

  /*! exports provided: HeaderComponentComponent */

  /***/
  function srcAppHeaderComponentHeaderComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponentComponent", function () {
      return HeaderComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_signin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/signin.service */
    "./src/app/services/signin.service.ts");
    /* harmony import */


    var _services_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var angular_epic_spinners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-epic-spinners */
    "./node_modules/angular-epic-spinners/__ivy_ngcc__/fesm2015/angular-epic-spinners.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponentComponent_a_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponentComponent_a_9_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.gologin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponentComponent_a_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponentComponent_a_10_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.logOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponentComponent_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx_r2.username, "");
      }
    }

    var HeaderComponentComponent = /*#__PURE__*/function () {
      function HeaderComponentComponent(authService, router, singupservice, fb, adminservices) {
        _classCallCheck(this, HeaderComponentComponent);

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

      _createClass(HeaderComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          fetch('https://jsonip.com', {
            mode: 'cors'
          }).then(function (resp) {
            return resp.json();
          }).then(function (ip) {
            _this11.ipAddress = ip.ip;
            console.log(_this11.ipAddress); // return ip.ip
          });
          this.authService.loadUserCredentials();
          this.subscription = this.authService.getUsername().subscribe(function (name) {
            console.log(name);
            _this11.username = name;
          });
          this.subscription1 = this.authService.getBranch().subscribe(function (name) {
            console.log(name);
            _this11.branch = name;
          }); // this.subscription2 = this.authService.getSemester()
          //     .subscribe(name => { console.log(name); this.semester = name; });

          this.searchForm = this.searchForm = this.fb.group({
            searchquery: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "gologin",
        value: function gologin() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          console.log(this.username);
          this.singupservice.out(this.ipAddress, this.username).subscribe(function (res) {
            console.log(res);
          });
          this.username = undefined; // console.log('hoil');

          console.log(this.username);
          this.authService.logOut();
          this.router.navigate(['/home']);
        }
      }, {
        key: "getuser",
        value: function getuser() {
          var _this12 = this;

          this.singupservice.getusers().subscribe(function (res) {
            _this12.res = res;
            _this12.res1 = res.users;
            console.log(_this12.res1);
          });
        }
      }]);

      return HeaderComponentComponent;
    }();

    HeaderComponentComponent.ɵfac = function HeaderComponentComponent_Factory(t) {
      return new (t || HeaderComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_signin_service__WEBPACK_IMPORTED_MODULE_4__["SigninService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]));
    };

    HeaderComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponentComponent,
      selectors: [["app-header-component"]],
      decls: 12,
      vars: 6,
      consts: [[1, "Toolbar"], [3, "animationDuration", "size", "color"], ["routerLink", "/home", "routerLinkActive", "active", "mat-button", "", 1, "buttons", "mat-elevation-z4"], ["routerLink", "/exam", "routerLinkActive", "active", "mat-button", "", 1, "buttons", "mat-elevation-z4"], ["routerLink", "/result", "routerLinkActive", "active", "mat-button", "", 1, "buttons", "mat-elevation-z4"], [1, "flex-spacer"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 4, "ngIf"], ["mat-button", "", 3, "click"], [1, "fa", "fa-sign-in", "fa-lg"], ["mat-button", ""]],
      template: function HeaderComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animationDuration", 1000)("size", 60)("color", "#ff1d5e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]],
      styles: [".jumbotron[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #9575CD;\n  color: floralwhite;\n  min-height: 150px;\n}\n\n.active[_ngcontent-%COMP%] {\n  background: #9bd5ff;\n  zoom: 110%;\n}\n\n.flex-spacer[_ngcontent-%COMP%] {\n  margin-left: 60%;\n}\n\n.Toolbar[_ngcontent-%COMP%] {\n  background-color: transparent;\n  margin-top: 5px;\n  color: black;\n  padding-top: 5px;\n  height: 90px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: table-cell;\n  margin-left: 20px;\n  padding: 0 auto;\n  width: auto;\n}\n\n.buttons[_ngcontent-%COMP%]:hover {\n  zoom: 110%;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLWNvbXBvbmVudC9FOlxcSW1wb3J0YW50XFxMb2NrZXJcXGRldGFpbHNcXE1jcS1nZW5lcmF0b3JcXEdhYmJhclxccXVpemdlbmVyYXRvci9zcmNcXGFwcFxcaGVhZGVyLWNvbXBvbmVudFxcaGVhZGVyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyLWNvbXBvbmVudC9oZWFkZXItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBSkksZ0JBQUE7RUFDQSxrQkFBQTtFQUtBLG1CQVplO0VBYWYsa0JBQUE7RUFDQSxpQkFBQTtBQ1hKOztBRGNBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0FDWEo7O0FEY0E7RUFDSSxnQkFBQTtBQ1hKOztBRGNBO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1hKOztBRGNBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxXQUFBO0FDWko7O0FEY0U7RUFDRSxVQUFBO0VBQ0EscUJBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1jb21wb25lbnQvaGVhZGVyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kbHQtZ3JheTogI2RkZDtcclxuJGJhY2tncm91bmQtZGFyazogIzUxMkRBODtcclxuJGJhY2tncm91bmQtbGlnaHQ6ICM5NTc1Q0Q7XHJcbiRiYWNrZ3JvdW5kLXBhbGU6ICNEMUM0RTk7XHJcbiRiYWNrZ3JvdW5kLW1vcmVkYXJrOiAjNDUyN0EwO1xyXG4kYmFja2dyb3VuZC10b29sYmFyOiBibGFjaztcclxuXHJcbkBtaXhpbiB6ZXJvLW1hcmdpbigkcGFkLXVwLWRvd24sICRwYWQtbGVmdC1yaWdodCkge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBhZGRpbmc6ICRwYWQtdXAtZG93biAkcGFkLWxlZnQtcmlnaHQ7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gICAgQGluY2x1ZGUgemVyby1tYXJnaW4oNzBweCwzMHB4KTtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWxpZ2h0IDtcclxuICAgIGNvbG9yOmZsb3JhbHdoaXRlO1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzliZDVmZjtcclxuICAgIHpvb206IDExMCU7XHJcbn1cclxuXHJcbi5mbGV4LXNwYWNlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xyXG59XHJcblxyXG4uVG9vbGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGhlaWdodDogOTBweDtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMCBhdXRvO1xyXG4gICAgLy8gaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIC5idXR0b25zOmhvdmVyIHtcclxuICAgIHpvb206IDExMCU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gICIsIi5qdW1ib3Ryb24ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwYWRkaW5nOiA3MHB4IDMwcHg7XG4gIGJhY2tncm91bmQ6ICM5NTc1Q0Q7XG4gIGNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgbWluLWhlaWdodDogMTUwcHg7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjOWJkNWZmO1xuICB6b29tOiAxMTAlO1xufVxuXG4uZmxleC1zcGFjZXIge1xuICBtYXJnaW4tbGVmdDogNjAlO1xufVxuXG4uVG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nOiAwIGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uYnV0dG9uczpob3ZlciB7XG4gIHpvb206IDExMCU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header-component',
          templateUrl: './header-component.component.html',
          styleUrls: ['./header-component.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_signin_service__WEBPACK_IMPORTED_MODULE_4__["SigninService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/home.service */
    "./src/app/services/home.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var angular_epic_spinners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-epic-spinners */
    "./node_modules/angular-epic-spinners/__ivy_ngcc__/fesm2015/angular-epic-spinners.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_dataview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/dataview */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var primeng_panel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/panel */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");

    function HomeComponent_div_7_p_table_1_ng_template_1_th_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r12.header, " ");
      }
    }

    function HomeComponent_div_7_p_table_1_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_7_p_table_1_ng_template_1_th_2_Template, 2, 1, "th", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r10);
      }
    }

    function HomeComponent_div_7_p_table_1_ng_template_2_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r17 = ctx.$implicit;

        var rowData_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r13[col_r17.field], " ");
      }
    }

    function HomeComponent_div_7_p_table_1_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_7_p_table_1_ng_template_2_td_4_Template, 2, 1, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r13 = ctx.$implicit;
        var expanded_r14 = ctx.expanded;
        var columns_r15 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pRowToggler", rowData_r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", expanded_r14 ? "pi pi-chevron-down" : "pi pi-chevron-right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r15);
      }
    }

    function HomeComponent_div_7_p_table_1_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_7_p_table_1_ng_template_3_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var rowData_r19 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r21.Notify(rowData_r19._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r19 = ctx.$implicit;
        var columns_r20 = ctx.columns;

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
      }
    }

    function HomeComponent_div_7_p_table_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_7_p_table_1_ng_template_1_Template, 3, 1, "ng-template", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_7_p_table_1_ng_template_2_Template, 5, 3, "ng-template", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_7_p_table_1_ng_template_3_Template, 28, 8, "ng-template", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r5.cols)("value", ctx_r5.exam)("scrollable", true)("virtualScroll", true)("virtualRowHeight", 34);
      }
    }

    function HomeComponent_div_7_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Scheduled Exams Within 2 days");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_7_p_table_1_Template, 4, 5, "p-table", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_7_div_2_Template, 2, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.exam.length != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.exam.length == 0);
      }
    }

    function HomeComponent_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_23_Template_button_click_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var car_r23 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.selectCar($event, car_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var car_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r23.subject);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, car_r23.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r23.time);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r23.marks);
      }
    }

    var _c0 = function _c0() {
      return {
        "text-align": "center"
      };
    };

    function HomeComponent_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-panel", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_24_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var car_r26 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.selectCar($event, car_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var car_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", car_r26._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", car_r26.subject, " - ", car_r26.time, "");
      }
    }

    var _c1 = function _c1(a1) {
      return ["/exam", a1];
    };

    function HomeComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r4.selectedCar.subject, " - ", ctx_r4.selectedCar.marks, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r4.selectedCar._id));
      }
    }

    var _c2 = function _c2() {
      return ["/exam"];
    };

    var _c3 = function _c3() {
      return {
        width: "225px"
      };
    };

    var _c4 = function _c4() {
      return {
        padding: "2em",
        textAlign: "center"
      };
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(authService, router, homeservice, datePipe) {
        _classCallCheck(this, HomeComponent);

        this.authService = authService;
        this.router = router;
        this.homeservice = homeservice;
        this.datePipe = datePipe;
        this.exam = [];
        this.events = {};
        this.temp = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.authService.loadUserCredentials();
          this.subscription = this.authService.getUsername().subscribe(function (name) {
            _this13.username = name;
            console.log(name);
          });
          this.subscription1 = this.authService.getBranch().subscribe(function (name) {
            _this13.branch = name;
            console.log(_this13.branch);
          });
          this.subscription2 = this.authService.getSemester().subscribe(function (name) {
            _this13.semester = name;
            console.log(name);
          });
          this.interval = setInterval(function () {
            _this13.getexam();

            clearInterval(_this13.interval);
          }, 2000); // this.getexam()
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
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "getexam",
        value: function getexam() {
          var _this14 = this;

          this.exam = [];
          this.cols = null;
          console.log(this.branch);
          this.homeservice.getExam(this.branch, this.semester).subscribe(function (resp) {
            console.log(resp['exams']);
            _this14.allexams = resp['exams'];
            var temp = resp['exams'];

            for (var i = 0; i < resp['exams'].length; i++) {
              console.log(temp[i]);

              var date1 = _this14.datePipe.transform(temp[i].date, "dd");

              console.log(date1);

              var date2 = _this14.datePipe.transform(Date.now(), "dd");

              console.log(date2);

              if (date2 <= date1 && parseInt(date1) - parseInt(date2) < 2) {
                _this14.exam.push(temp[i]);
              }
            }

            console.log(_this14.exam);
            _this14.cols = [{
              field: 'subject',
              header: 'Subject'
            }];
            _this14.colsforall = [{
              field: 'subject',
              header: 'Subject'
            }, {
              field: 'time',
              header: 'Time'
            }, {
              field: 'date',
              header: 'Date'
            }, {
              field: 'marks',
              header: 'Marks'
            }, {
              field: '_id',
              header: 'Exam-Id'
            }];
          });
        }
      }, {
        key: "selectCar",
        value: function selectCar(event, car) {
          this.selectedCar = car;
          this.displayDialog = true;
          event.preventDefault();
        } // onSortChange(event) {
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

      }, {
        key: "onDialogHide",
        value: function onDialogHide() {
          this.selectedCar = null;
        }
      }, {
        key: "Notify",
        value: function Notify(id) {
          this.homeservice.NotifyExam({
            subject: id
          }).subscribe(function (resp) {
            console.log(resp);
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 27,
      vars: 19,
      consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-4"], ["header", "Scheduled Exams", "subheader", "Within 2 days", "styleClass", "ui-card-shadow", 1, "mat-elevation-z4"], ["mat-raised-button", "", 1, "refreshbutton", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh"], [4, "ngIf"], [3, "hidden"], [3, "animationDuration", "size", "color"], ["pButton", "", "type", "button", "label", "Go To Exam Page", "icon", "pi pi-check", 2, "margin-right", ".25em", 3, "routerLink"], [1, "col-md-8"], ["paginatorPosition", "both", "filterBy", "subject", 3, "value", "paginator", "rows"], ["dv", ""], [1, "ui-helper-clearfix"], [1, "p-grid"], [1, "p-col-6", "p-md-4", "filter-container"], [2, "position", "relative"], ["type", "search", "pInputText", "", "placeholder", "Search by subject", 3, "input"], [1, "p-col-6", "p-md-4", 2, "text-align", "right"], ["pTemplate", "listItem"], ["pTemplate", "gridItem"], ["header", "Exam Details", "showEffect", "fade", 3, "visible", "minY", "modal", "contentStyle", "visibleChange", "onAfterHide"], ["dataKey", "subject", "scrollHeight", "150px", 3, "columns", "value", "scrollable", "virtualScroll", "virtualRowHeight", 4, "ngIf"], ["dataKey", "subject", "scrollHeight", "150px", 3, "columns", "value", "scrollable", "virtualScroll", "virtualRowHeight"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], [2, "width", "3em"], [4, "ngFor", "ngForOf"], ["href", "#", 3, "pRowToggler"], [3, "ngClass"], [1, "p-grid", "-fluid", 2, "font-size", "16px", "padding", "20px"], [1, "p-col-12", "p-md-9"], [1, "p-col-12"], ["pButton", "", "type", "button", "label", "Notify", "icon", "pi pi-check", 2, "margin-right", ".25em", 3, "click"], [1, "car-details"], ["pButton", "", "type", "button", "icon", "pi pi-search", 3, "click"], [1, "p-col-12", "p-sm-3", 2, "padding", ".5em"], [3, "header"], [1, "car-detail"], ["pButton", "", "type", "button", "icon", "pi pi-search", 2, "margin-top", "0", 3, "click"], ["pButton", "", "type", "button", "label", "Click Here", 2, "margin-left", "10px", 3, "routerLink"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() {
            return ctx.getexam();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HomeComponent_Template_input_input_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            return _r1.filter($event.target.value);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function HomeComponent_Template_p_dialog_visibleChange_25_listener($event) {
            return ctx.displayDialog = $event;
          })("onAfterHide", function HomeComponent_Template_p_dialog_onAfterHide_25_listener() {
            return ctx.onDialogHide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_div_26_Template, 4, 5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [primeng_card__WEBPACK_IMPORTED_MODULE_6__["Card"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_8__["ɵh"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["Footer"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], primeng_dataview__WEBPACK_IMPORTED_MODULE_11__["DataView"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["Header"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputText"], primeng_dataview__WEBPACK_IMPORTED_MODULE_11__["DataViewLayoutOptions"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["PrimeTemplate"], primeng_dialog__WEBPACK_IMPORTED_MODULE_13__["Dialog"], primeng_table__WEBPACK_IMPORTED_MODULE_14__["Table"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], primeng_table__WEBPACK_IMPORTED_MODULE_14__["RowToggler"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultClassDirective"], primeng_panel__WEBPACK_IMPORTED_MODULE_16__["Panel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".refreshbutton[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.examcard[_ngcontent-%COMP%] {\n  width: 360px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcSW1wb3J0YW50XFxMb2NrZXJcXGRldGFpbHNcXE1jcS1nZW5lcmF0b3JcXEdhYmJhclxccXVpemdlbmVyYXRvci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVmcmVzaGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiMwODEwM2Q7XHJcbn1cclxuXHJcbi5leGFtY2FyZCB7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuXHJcbn0iLCIucmVmcmVzaGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmV4YW1jYXJkIHtcbiAgd2lkdGg6IDM2MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */", ".filter-container[_ngcontent-%COMP%] {\n            text-align: center;\n        }\n        .car-details[_ngcontent-%COMP%] {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 2em;\n            border-bottom: 1px solid #d9dad9;\n        }\n        .car-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n            display: flex;\n            align-items: center;\n        }\n        .car-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n            margin-right: 14px;\n        }\n        .car-detail[_ngcontent-%COMP%] {\n            padding: 0 1em 1em 1em;\n            border-bottom: 1px solid #d9dad9;\n            margin: 1em;\n        }\n        .ui-panel-content[_ngcontent-%COMP%] {\n            padding: 1em;\n        }\n        .dark-theme   [_nghost-%COMP%]     .car-details, .dark-theme   [_nghost-%COMP%]     .car-detail {\n            border-bottom: 1px solid #191919;\n        }\n        \n        @media (max-width: 1024px) {\n            .car-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n                 width: 75px;\n            }\n            .filter-container[_ngcontent-%COMP%] {\n                text-align: left;\n            }\n        }"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rowExpansionTrigger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(-10%)',
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(0)',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rowExpansionTrigger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(-10%)',
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(0)',
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])],
          styles: ["      \n        .filter-container {\n            text-align: center;\n        }\n        .car-details {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 2em;\n            border-bottom: 1px solid #d9dad9;\n        }\n        .car-details > div {\n            display: flex;\n            align-items: center;\n        }\n        .car-details > div img {\n            margin-right: 14px;\n        }\n        .car-detail {\n            padding: 0 1em 1em 1em;\n            border-bottom: 1px solid #d9dad9;\n            margin: 1em;\n        }\n        .ui-panel-content {\n            padding: 1em;\n        }\n        .dark-theme :host ::ng-deep .car-details,\n        .dark-theme :host ::ng-deep .car-detail {\n            border-bottom: 1px solid #191919;\n        }\n        \n        @media (max-width: 1024px) {\n            .car-details img {\n                 width: 75px;\n            }\n            .filter-container {\n                text-align: left;\n            }\n        }\n    "]
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/general.service */
    "./src/app/services/general.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your Email ");
      }
    }

    function LoginComponent_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out the details");
      }
    }

    function LoginComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Kindly please check your Email-Id and Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, router, ip, authService, route) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.router = router;
        this.ip = ip;
        this.authService = authService;
        this.route = route;
        this.temp = null;
        this.errMess = null;
        this["return"] = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          // this.getIP();
          this.route.queryParams.subscribe(function (params) {
            return _this15["return"] = params['return'] || '/home';
          });
          fetch('https://jsonip.com', {
            mode: 'cors'
          }).then(function (resp) {
            return resp.json();
          }).then(function (ip) {
            _this15.ipAddress = ip.ip;
            console.log(_this15.ipAddress); // return ip.ip
          });
          this.firstFormGroup = this.fb.group({
            emailid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]]
          });
          this.secondFormGroup = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]]
          });
          this.authService.loadUserCredentials();
          this.subscription = this.authService.getUsername().subscribe(function (name) {
            _this15.username = name;
            console.log(_this15.username);
          });
        } // getIP()  
        // {  
        //   this.ipAddress=this.ip.getIPAddress()  
        //     console.log('ipaddress' , this.ipAddress);
        //   };  

      }, {
        key: "onSubmitFirst",
        value: function onSubmitFirst() {
          this.onsubmitsignupvalues = this.firstFormGroup.value;
          this.onsubmitsignupvalues.username = this.onsubmitsignupvalues.emailid.slice(0, 8);
          delete this.onsubmitsignupvalues.emailid;
          console.log(this.onsubmitsignupvalues);
        }
      }, {
        key: "onSubmitSecond",
        value: function onSubmitSecond() {
          var _this16 = this;

          this.temp = this.secondFormGroup.value;
          Object.assign(this.onsubmitsignupvalues, this.temp);
          console.log(this.onsubmitsignupvalues); // console.log(this.username);

          this.authService.checkanotherlogin(this.onsubmitsignupvalues).subscribe(function (data) {
            console.log(data);

            if (data.length == 0) {
              _this16.authService.checkanotherIP(_this16.ipAddress).subscribe(function (data) {
                console.log(data);

                if (data.length == 0) {
                  _this16.authService.logIn(_this16.onsubmitsignupvalues, _this16.ipAddress).subscribe(function (data) {
                    // console.log('inside');        
                    console.log(data);
                    console.log(_this16.errMess); // this.router.navigate(['/home']);

                    _this16.router.navigateByUrl(_this16["return"]);
                  }, function (error) {
                    console.log(error);
                    _this16.errMess = error;
                    console.log(_this16.errMess);
                  });
                } else {
                  console.log('Same System cannot be use twice in one exam');
                }
              });
            } else {
              console.log('Same User can\'t login at same time');
            }
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.onsubmitsignupvalues = null;
          this.temp = null;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 27,
      vars: 7,
      consts: [["labelPosition", "bottom"], ["stepper", ""], [3, "stepControl"], [3, "formGroup", "ngSubmit"], ["matStepLabel", "", "matStepperIcon", "done"], ["matInput", "", "placeholder", "Enter Email-Id", "formControlName", "emailid", "type", "text", "required", ""], ["mat-button", "", "matStepperNext", "", 3, "disabled"], ["matStepLabel", ""], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "Enter Password", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], [4, "ngIf"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-horizontal-stepper", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmitFirst();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_13_listener() {
            return ctx.onSubmitSecond();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.reset();
          })("click", function LoginComponent_Template_button_click_24_listener() {
            return ctx.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 5, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperIcon"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperPrevious"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/result/result.component.ts":
  /*!********************************************!*\
    !*** ./src/app/result/result.component.ts ***!
    \********************************************/

  /*! exports provided: ResultComponent */

  /***/
  function srcAppResultResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultComponent", function () {
      return ResultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/result.service */
    "./src/app/services/result.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ResultComponent_tbody_22_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r4.key);
      }
    }

    function ResultComponent_tbody_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultComponent_tbody_22_tr_1_Template, 3, 1, "tr", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, i_r2));
      }
    }

    function ResultComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Attempt for this given Exam");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ResultComponent = /*#__PURE__*/function () {
      function ResultComponent(authService, resultservice) {
        _classCallCheck(this, ResultComponent);

        this.authService = authService;
        this.resultservice = resultservice;
        this.subjects = [];
        this.temp = {};
        this.items = [];
      }

      _createClass(ResultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.authService.loadUserCredentials();
          this.subscription = this.authService.getUsername().subscribe(function (name) {
            _this17.username = name;
            console.log(name);
          });
          this.subscription1 = this.authService.getBranch().subscribe(function (name) {
            _this17.branch = name;
            console.log(_this17.branch);
          });
          this.subscription2 = this.authService.getSemester().subscribe(function (name) {
            _this17.semester = name;
            console.log(name);
          });
          this.subscription3 = this.authService.getId().subscribe(function (name) {
            _this17.id = name;
            console.log(name);
          });
          this.resultservice.getUser().subscribe(function (user) {
            console.log(user);
            _this17.UserbyId = user['user'];
            console.log(_this17.UserbyId);

            for (var i = 0; i < _this17.UserbyId.attempted.length; i++) {
              _this17.temp[_this17.UserbyId.attempted[i].subject] = _this17.UserbyId.attempted[i].subjectId;

              _this17.subjects.push(_this17.temp); // this.subjects.push(this.UserbyId.attempted[i].subjectId)

            }

            _this17.subjects = _toConsumableArray(new Set(_this17.subjects));
            console.log(_this17.subjects);
          });
        }
      }, {
        key: "getAttempts",
        value: function getAttempts(subject) {
          var _this18 = this;

          this.items = [];
          this.attempts = []; // console.log(this.exams.length);
          // for (var i=0;i<this.exams.length;i++) {
          // console.log(this.exams[i]);
          // if(this.exams[i]['subject']==subject) {
          // this.id = this.exams[i]['_id']
          // break
          // }
          // }

          console.log(this.id);
          this.resultservice.getAttempts(subject, this.id).subscribe(function (resp) {
            console.log(resp);
            var id = resp[0]['_id'];
            console.log(id);
            _this18.attempts = resp; // this.attempt=resp[0]['attempt']
            // for (var question in this.attempt) {
            // this.items.push([question, this.attempt[question]]);
            // }
            // this.items.sort(function(a, b) {
            // return a[0] - b[0];
            // });
          });
        }
      }]);

      return ResultComponent;
    }();

    ResultComponent.ɵfac = function ResultComponent_Factory(t) {
      return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_result_service__WEBPACK_IMPORTED_MODULE_2__["ResultService"]));
    };

    ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultComponent,
      selectors: [["app-result"]],
      decls: 25,
      vars: 5,
      consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "header"], [1, "title"], [1, "title", "category"], [1, "entry"], [1, "card-text"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [4, "ngIf"]],
      template: function ResultComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-result',
          templateUrl: './result.component.html',
          styleUrls: ['./result.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services_result_service__WEBPACK_IMPORTED_MODULE_2__["ResultService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/admin.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/admin.service.ts ***!
    \*******************************************/

  /*! exports provided: AdminService */

  /***/
  function srcAppServicesAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/baseurl */
    "./src/app/shared/baseurl.ts");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var AdminService = /*#__PURE__*/function () {
      function AdminService(http, processHTTPMsgService) {
        _classCallCheck(this, AdminService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
      }

      _createClass(AdminService, [{
        key: "scheduleExam",
        value: function scheduleExam(exam) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'admin/', exam, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));
        }
      }, {
        key: "searchExam",
        value: function searchExam(branch, sem) {
          console.log(branch);
          console.log(sem); // console.log(date);

          this.config = {
            params: {
              branch: branch,
              sem: sem
            }
          };
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'admin/exam', this.config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "getstaff",
        value: function getstaff() {
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'admin/getStaff').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "verfied",
        value: function verfied(id, update) {
          console.log(id);
          var httpOptions = {
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
          return this.http.put(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'admin/getStaff', this.config, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }]);

      return AdminService;
    }();

    AdminService.ɵfac = function AdminService_Factory(t) {
      return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]));
    };

    AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminService,
      factory: AdminService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/attempt.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/attempt.service.ts ***!
    \*********************************************/

  /*! exports provided: AttemptService */

  /***/
  function srcAppServicesAttemptServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttemptService", function () {
      return AttemptService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/baseurl */
    "./src/app/shared/baseurl.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var AttemptService = /*#__PURE__*/function () {
      function AttemptService(http, processHTTPMsgService) {
        _classCallCheck(this, AttemptService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
      }

      _createClass(AttemptService, [{
        key: "getAttempts",
        value: function getAttempts(id) {
          // var config = {
          // params: {
          // subject:subject
          // }
          // }
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + 'test/attempt/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }]);

      return AttemptService;
    }();

    AttemptService.ɵfac = function AttemptService_Factory(t) {
      return new (t || AttemptService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]));
    };

    AttemptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AttemptService,
      factory: AttemptService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttemptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts"); // import { Injectable } from '@angular/core';


    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(router, authService) {
        _classCallCheck(this, AuthGuardService);

        this.router = router;
        this.authService = authService;
      } // state: RouterState = this.router.routerState;
      // snapshot: RouterStateSnapshot = this.state.snapshot;
      // root: ActivatedRouteSnapshot = this.snapshot.root;
      // child = this.root.firstChild;
      // id: Observable<string> = child.params.map(p => p.id);


      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          // Check to see if a user has a valid token
          if (this.authService.isLoggedIn()) {
            // If they do, return true and allow the user to load app
            return true;
          } // If not, they redirect them to the login page


          this.router.navigate(['/login'], {
            queryParams: {
              "return": state.url
            }
          });
          return false;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.interceptor.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/auth.interceptor.ts ***!
    \**********************************************/

  /*! exports provided: AuthInterceptor, UnauthorizedInterceptor */

  /***/
  function srcAppServicesAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnauthorizedInterceptor", function () {
      return UnauthorizedInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(inj) {
        _classCallCheck(this, AuthInterceptor);

        this.inj = inj;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authService = this.inj.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]); // Get the auth header from the service.

          var authToken = authService.getToken();
          console.log("Interceptor: " + authToken); // Clone the request to add the new header.

          var authReq = req.clone({
            headers: req.headers.set('Authorization', 'bearer ' + authToken)
          }); // Pass on the cloned request instead of the original request.

          console.log('working');
          return next.handle(authReq);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();

    var UnauthorizedInterceptor = /*#__PURE__*/function () {
      function UnauthorizedInterceptor(inj) {
        _classCallCheck(this, UnauthorizedInterceptor);

        this.inj = inj;
      }

      _createClass(UnauthorizedInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authService = this.inj.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
          var authToken = authService.getToken();
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {// do nothing
          }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
              if (err.status === 401 && authToken) {
                console.log('Unauthorized Interceptor: ', err);
                authService.checkJWTtoken();
              }
            }
          }));
        }
      }]);

      return UnauthorizedInterceptor;
    }();

    UnauthorizedInterceptor.ɵfac = function UnauthorizedInterceptor_Factory(t) {
      return new (t || UnauthorizedInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    UnauthorizedInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UnauthorizedInterceptor,
      factory: UnauthorizedInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnauthorizedInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/baseurl */
    "./src/app/shared/baseurl.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, processHTTPMsgService) {
        _classCallCheck(this, AuthService);

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

      _createClass(AuthService, [{
        key: "checkJWTtoken",
        value: function checkJWTtoken() {
          var _this19 = this;

          this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/checkJWTtoken').subscribe(function (res) {
            console.log('JWT Token Valid: ', res);

            _this19.sendUsername(res.user.username);

            _this19.sendBranch(res.user.branch);

            _this19.sendSem(res.user.semester);

            _this19.sendId(res.user._id);
          }, function (err) {
            console.log('JWT Token invalid: ', err);

            _this19.destroyUserCredentials();
          });
        }
      }, {
        key: "sendId",
        value: function sendId(id) {
          this.id.next(id);
        }
      }, {
        key: "sendUsername",
        value: function sendUsername(name) {
          this.username.next(name);
        }
      }, {
        key: "sendBranch",
        value: function sendBranch(branch) {
          this.branch.next(branch);
        }
      }, {
        key: "sendSem",
        value: function sendSem(sem) {
          this.semester.next(sem);
        }
      }, {
        key: "clearUsername",
        value: function clearUsername() {
          this.username.next(undefined);
          this.branch.next(undefined);
          this.semester.next(undefined);
        }
      }, {
        key: "loadUserCredentials",
        value: function loadUserCredentials() {
          var credentials = JSON.parse(localStorage.getItem(this.tokenKey));
          console.log('loadUserCredentials ', credentials);

          if (credentials && credentials.username !== undefined) {
            this.useCredentials(credentials);

            if (this.authToken) {
              this.checkJWTtoken();
            }
          }
        }
      }, {
        key: "storeUserCredentials",
        value: function storeUserCredentials(credentials) {
          console.log('storeUserCredentials ', credentials);
          localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
          this.useCredentials(credentials);
        }
      }, {
        key: "useCredentials",
        value: function useCredentials(credentials) {
          this.isAuthenticated = true;
          this.sendUsername(credentials.username);
          this.authToken = credentials.token;
        }
      }, {
        key: "destroyUserCredentials",
        value: function destroyUserCredentials() {
          this.authToken = undefined;
          this.clearUsername();
          this.isAuthenticated = false;
          localStorage.removeItem(this.tokenKey);
        }
      }, {
        key: "signUp",
        value: function signUp() {}
      }, {
        key: "checkanotherlogin",
        value: function checkanotherlogin(username) {
          this.config = {
            params: {
              'username': username.username
            }
          };
          console.log(username);
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/activeuser', this.config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "checkanotherIP",
        value: function checkanotherIP(ip) {
          this.config = {
            params: {
              'ip': ip
            }
          };
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/ip', this.config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "logIn",
        value: function logIn(user, ip) {
          var _this20 = this;

          return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/login', {
            'username': user.username,
            'password': user.password,
            'ip': ip
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            _this20.storeUserCredentials({
              username: user.username,
              token: res.token,
              branch: user.branch,
              semester: user.semester
            });

            return {
              'success': true,
              'username': user.username,
              'branch': user.branch,
              'semester': user.semester
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return _this20.processHTTPMsgService.handleError(error);
          }));
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.destroyUserCredentials();
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.isAuthenticated;
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          return this.username.asObservable();
        }
      }, {
        key: "getBranch",
        value: function getBranch() {
          return this.branch.asObservable();
        }
      }, {
        key: "getSemester",
        value: function getSemester() {
          return this.semester.asObservable();
        }
      }, {
        key: "getId",
        value: function getId() {
          return this.id.asObservable();
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.authToken;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/exam.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/exam.service.ts ***!
    \******************************************/

  /*! exports provided: ExamService */

  /***/
  function srcAppServicesExamServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamService", function () {
      return ExamService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/baseurl */
    "./src/app/shared/baseurl.ts");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var ExamService = /*#__PURE__*/function () {
      function ExamService(http, processHTTPMsgService) {
        _classCallCheck(this, ExamService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
      }

      _createClass(ExamService, [{
        key: "getQuestions",
        value: function getQuestions() {
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'test/getquestion').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "getQuestionbyid",
        value: function getQuestionbyid(subject, id) {
          console.log(id); // console.log(branch);
          // console.log(semester);

          this.config = {
            params: {
              id: id,
              subject: subject
            }
          };
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'test/exams/', this.config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "sendResult",
        value: function sendResult(branch, semester, marks, subject, subjectId) {
          this.config = {}; // console.log(marks);
          // console.log(branch);
          // console.log(semester);

          var httpOptions = {
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
            subjectId: subjectId // }

          };
          return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'test/result', this.config, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));
        }
      }, {
        key: "getResult",
        value: function getResult(branch, semester) {
          this.config = {
            params: {
              branch: branch,
              semester: semester
            }
          };
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'test/result', this.config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "sendAttempted",
        value: function sendAttempted(attempt, subject, marks) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          console.log(subject);
          var config = {
            // params : {
            attempt: attempt,
            subject: subject,
            marks: marks // }

          };
          return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'test/attempt/' + subject, config, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));
        }
      }, {
        key: "setFlag",
        value: function setFlag(attempt) {
          console.log(attempt);
          return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/setFlag', attempt).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "setfinalFlag",
        value: function setfinalFlag(attempt) {
          console.log(attempt);
          return this.http.put(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/setFlag/' + attempt.subjectId, attempt).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }]);

      return ExamService;
    }();

    ExamService.ɵfac = function ExamService_Factory(t) {
      return new (t || ExamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]));
    };

    ExamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ExamService,
      factory: ExamService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/general.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/general.service.ts ***!
    \*********************************************/

  /*! exports provided: GeneralService */

  /***/
  function srcAppServicesGeneralServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralService", function () {
      return GeneralService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var GeneralService = /*#__PURE__*/function () {
      function GeneralService(http, processHTTPMsgService) {
        _classCallCheck(this, GeneralService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
      } // searchservice(): Observable<any> {


      _createClass(GeneralService, [{
        key: "getIPAddress",
        value: function getIPAddress() {
          // return this.http.get('');  
          fetch('https://jsonip.com', {
            mode: 'cors'
          }).then(function (resp) {
            return resp.json();
          }).then(function (ip) {
            console.log(ip.ip);
            return ip.ip;
          });
        }
      }]);

      return GeneralService;
    }();

    GeneralService.ɵfac = function GeneralService_Factory(t) {
      return new (t || GeneralService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__["ProcessHTTPMsgService"]));
    };

    GeneralService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GeneralService,
      factory: GeneralService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__["ProcessHTTPMsgService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/home.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/home.service.ts ***!
    \******************************************/

  /*! exports provided: HomeService */

  /***/
  function srcAppServicesHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/baseurl */
    "./src/app/shared/baseurl.ts");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var HomeService = /*#__PURE__*/function () {
      function HomeService(http, processHTTPMsgService) {
        _classCallCheck(this, HomeService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
      }

      _createClass(HomeService, [{
        key: "getExam",
        value: function getExam(branch, semester) {
          console.log(branch);
          var config = {
            params: {
              branch: branch,
              semester: semester
            }
          };
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'admin/examall', config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "NotifyExam",
        value: function NotifyExam(config) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'test/notify', config, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError)); // .pipe(delay(2000));
        }
      }]);

      return HomeService;
    }();

    HomeService.ɵfac = function HomeService_Factory(t) {
      return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]));
    };

    HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HomeService,
      factory: HomeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/process-httpmsg.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/process-httpmsg.service.ts ***!
    \*****************************************************/

  /*! exports provided: ProcessHTTPMsgService */

  /***/
  function srcAppServicesProcessHttpmsgServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcessHTTPMsgService", function () {
      return ProcessHTTPMsgService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ProcessHTTPMsgService = /*#__PURE__*/function () {
      function ProcessHTTPMsgService() {
        _classCallCheck(this, ProcessHTTPMsgService);
      }

      _createClass(ProcessHTTPMsgService, [{
        key: "handleError",
        value: function handleError(error) {
          var errMsg;

          if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message;
          } else {
            errMsg = "".concat(error.status, " - ").concat(error.statusText || '', " ").concat(error.error);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
        }
      }]);

      return ProcessHTTPMsgService;
    }();

    ProcessHTTPMsgService.ɵfac = function ProcessHTTPMsgService_Factory(t) {
      return new (t || ProcessHTTPMsgService)();
    };

    ProcessHTTPMsgService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProcessHTTPMsgService,
      factory: ProcessHTTPMsgService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessHTTPMsgService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/result.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/result.service.ts ***!
    \********************************************/

  /*! exports provided: ResultService */

  /***/
  function srcAppServicesResultServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultService", function () {
      return ResultService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/baseurl */
    "./src/app/shared/baseurl.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var ResultService = /*#__PURE__*/function () {
      function ResultService(http, processHTTPMsgService) {
        _classCallCheck(this, ResultService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
      }

      _createClass(ResultService, [{
        key: "getUser",
        value: function getUser() {
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + 'users/byId').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "getAttempts",
        value: function getAttempts(subject, id) {
          var config = {
            params: {
              id: id,
              subject: subject
            }
          };
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + 'test/attempt', config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }]);

      return ResultService;
    }();

    ResultService.ɵfac = function ResultService_Factory(t) {
      return new (t || ResultService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]));
    };

    ResultService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ResultService,
      factory: ResultService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/signin.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/signin.service.ts ***!
    \********************************************/

  /*! exports provided: SigninService */

  /***/
  function srcAppServicesSigninServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninService", function () {
      return SigninService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/baseurl */
    "./src/app/shared/baseurl.ts");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts"); // import { Observable } from 'rxjs';


    var SigninService = /*#__PURE__*/function () {
      function SigninService(http, processHTTPMsgService) {
        _classCallCheck(this, SigninService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
      }

      _createClass(SigninService, [{
        key: "signupPost",
        value: function signupPost(creaditial) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/signup', creaditial, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));
        }
      }, {
        key: "signupStaff",
        value: function signupStaff(creaditial) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/staffsignup', creaditial, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));
        }
      }, {
        key: "getusers",
        value: function getusers() {
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));
        }
      }, {
        key: "out",
        value: function out(ip, username) {
          this.config = {
            params: {
              'ip': ip,
              'username': username
            }
          };
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'users/logout', this.config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));
        }
      }]);

      return SigninService;
    }();

    SigninService.ɵfac = function SigninService_Factory(t) {
      return new (t || SigninService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]));
    };

    SigninService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SigninService,
      factory: SigninService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/baseurl.ts":
  /*!***********************************!*\
    !*** ./src/app/shared/baseurl.ts ***!
    \***********************************/

  /*! exports provided: baseURL */

  /***/
  function srcAppSharedBaseurlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "baseURL", function () {
      return baseURL;
    });

    var baseURL = 'http://localhost:3000/';
    /***/
  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_signin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/signin.service */
    "./src/app/services/signin.service.ts");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_password__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/password */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-password.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function SignupComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your name and Email ");
      }
    }

    function SignupComponent_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out the details");
      }
    }

    function SignupComponent_mat_option_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branch_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", branch_r12.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r12.viewValue, " ");
      }
    }

    function SignupComponent_mat_option_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branch_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", branch_r13.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r13.viewValue, " ");
      }
    }

    function SignupComponent_ng_template_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Enter password and re-enter password");
      }
    }

    function SignupComponent_button_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r11.thirdFormGroup.invalid);
      }
    }

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(fb, messageService, router, signupservice, baseURL) {
        _classCallCheck(this, SignupComponent);

        this.fb = fb;
        this.messageService = messageService;
        this.router = router;
        this.signupservice = signupservice;
        this.baseURL = baseURL;
        this.branchs = [{
          value: 'CSE',
          viewValue: 'CSE'
        }, {
          value: 'pizza-1',
          viewValue: 'Pizza'
        }, {
          value: 'tacos-2',
          viewValue: 'Tacos'
        }];
        this.sem = [{
          value: 1,
          viewValue: 1
        }, {
          value: 2,
          viewValue: 2
        }, {
          value: 3,
          viewValue: 3
        }];
        this.temp = null;
        this.msgs = []; // this.createForm();
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.firstFormGroup = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            emailid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]]
          });
          this.secondFormGroup = this.fb.group({
            branch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            semester: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            contactno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
          this.thirdFormGroup = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            renterpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            staff: Boolean
          });
        }
      }, {
        key: "onSubmitFirst",
        value: function onSubmitFirst() {
          this.onsubmitsignupvalues = this.firstFormGroup.value;
          console.log(this.onsubmitsignupvalues);
        }
      }, {
        key: "onSubmitSecond",
        value: function onSubmitSecond() {
          this.temp = this.secondFormGroup.value;
          Object.assign(this.onsubmitsignupvalues, this.temp);
          console.log(this.onsubmitsignupvalues);
        }
      }, {
        key: "onSubmitThird",
        value: function onSubmitThird() {
          var _this21 = this;

          this.temp = this.thirdFormGroup.value;
          Object.assign(this.onsubmitsignupvalues, this.temp);
          delete this.onsubmitsignupvalues.renterpassword;

          if (this.onsubmitsignupvalues.staff) {
            this.onsubmitsignupvalues.username = this.onsubmitsignupvalues.emailid;
            this.onsubmitsignupvalues.admin = false;
            this.onsubmitsignupvalues.student = false;
            this.onsubmitsignupvalues.staff = false;
            console.log(this.onsubmitsignupvalues);
            this.signupservice.signupStaff(this.onsubmitsignupvalues).subscribe(function (staff) {
              console.log('abcd');
              console.log(staff);
              _this21.returnmessage = staff;

              if (_this21.returnmessage.err == "A staff with the given username is already registered") {
                _this21.router.navigate(['/']);
              } else {
                _this21.router.navigate(['/login']);
              }
            }, function (errmess) {
              _this21.returnmessage = null;
              _this21.errMess = errmess;
            });
          } else {
            this.onsubmitsignupvalues.username = this.onsubmitsignupvalues.emailid.slice(0, 8);
            this.onsubmitsignupvalues.admin = false;
            this.onsubmitsignupvalues.student = true;
            this.onsubmitsignupvalues.staff = false;
            console.log(this.onsubmitsignupvalues);
            this.signupservice.signupPost(this.onsubmitsignupvalues).subscribe(function (dish) {
              console.log('abcd');
              console.log(dish);
              _this21.returnmessage = dish;

              if (_this21.returnmessage.err == "A user with the given username is already registered") {
                _this21.router.navigate(['/']);
              } else {
                _this21.msgs = [];

                _this21.msgs.push({
                  severity: 'success',
                  summary: 'Success Message',
                  detail: dish['status'] + ' ' + dish['msg']
                });

                _this21.router.navigate(['/signup']);

                _this21.firstFormGroup.reset();

                _this21.secondFormGroup.reset();

                _this21.thirdFormGroup.reset(); // this.examFormDirectives.resetForm({
                // });

              }
            }, function (errmess) {
              _this21.returnmessage = null;
              _this21.errMess = errmess;
              _this21.msgs = []; // console.log(errmess);

              _this21.msgs.push({
                severity: 'error',
                summary: 'Error:',
                detail: 'Enter Valid Email Address'
              });
            });
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          this.onsubmitsignupvalues = null;
          this.temp = null;
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_signin_service__WEBPACK_IMPORTED_MODULE_4__["SigninService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('BaseURL'));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])],
      decls: 88,
      vars: 17,
      consts: [["labelPosition", "bottom"], ["stepper", ""], [3, "stepControl"], [3, "formGroup", "ngSubmit"], ["matStepLabel", "", "matStepperIcon", "done"], ["hintLabel", "Max 15 characters", "appearance", "fill"], ["matInput", "", "maxlength", "15", "placeholder", "Enter First name", "formControlName", "firstname", "type", "text", "required", ""], ["input", ""], ["align", "end"], ["matInput", "", "maxlength", "15", "placeholder", "Enter Last name", "formControlName", "lastname", "required", ""], ["input1", ""], ["matInput", "", "placeholder", "Enter Email Address", "formControlName", "emailid", "pattern", "(^.+.+.+.+.+\\b(nirmauni.ac.in)\\b)", "required", ""], ["mat-button", "", "matStepperNext", "", 3, "disabled"], ["matStepLabel", ""], ["formControlName", "branch"], ["required", "", 3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "semester"], ["hintLabel", "10 digits only"], ["matInput", "", "minlength", "10", "maxlength", "10", "formControlName", "contactno", "placeholder", "Enter Mobile number", "pattern", "[6-9][0-9]*", "required", ""], ["input2", ""], ["mat-button", "", "matStepperPrevious", ""], ["hintLabel", "Minimimun length 8 digits"], ["matInput", "", "pPassword", "", "ui-password-info", "", "name", "password", "minlength", "8", "type", "password", "formControlName", "password", "placeholder", "Enter Password", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "required", ""], ["password", ""], ["matInput", "", "minlength", "8", "type", "password", "formControlName", "renterpassword", "placeholder", "Re-Enter Password", 3, "pattern"], ["input4", ""], ["mat-button", "", "matStepperNext", "", 3, "disabled", 4, "ngIf"], ["mat-button", "", 3, "click"], ["formControlName", "staff"], [3, "value", "valueChange"], ["required", "", 3, "value"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-horizontal-stepper", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmitFirst();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_27_listener() {
            return ctx.onSubmitSecond();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_52_listener() {
            return ctx.onSubmitThird();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_69_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.reset();
          })("click", function SignupComponent_Template_button_click_69_listener() {
            return ctx.reset();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SignupComponent_Template_p_messages_valueChange_87_listener($event) {
            return ctx.msgs = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);

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
        }
      },
      directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperIcon"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperNext"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperPrevious"], primeng_password__WEBPACK_IMPORTED_MODULE_11__["Password"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], primeng_messages__WEBPACK_IMPORTED_MODULE_13__["Messages"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
      styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0U6XFxJbXBvcnRhbnRcXExvY2tlclxcZGV0YWlsc1xcTWNxLWdlbmVyYXRvclxcR2FiYmFyXFxxdWl6Z2VuZXJhdG9yL3NyY1xcYXBwXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gICIsIi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */", "[_nghost-%COMP%]     button {\n            margin-right: .25em;\n        }\n\n        [_nghost-%COMP%]     .ui-message, [_nghost-%COMP%]     .ui-inputtext {\n            margin-right: .25em;\n        }\n\n        [_nghost-%COMP%]     .custom-message, [_nghost-%COMP%]     img  {\n            align-self: center;\n            font-size: 16px;\n            margin-left: .5em;\n        }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.scss'],
          providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
          styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n        }\n\n        :host ::ng-deep .ui-message,\n        :host ::ng-deep .ui-inputtext {\n            margin-right: .25em;\n        }\n\n        :host ::ng-deep .custom-message,\n        :host ::ng-deep img  {\n            align-self: center;\n            font-size: 16px;\n            margin-left: .5em;\n        }\n    "]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_signin_service__WEBPACK_IMPORTED_MODULE_4__["SigninService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['BaseURL']
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/staff/staff.component.ts":
  /*!******************************************!*\
    !*** ./src/app/staff/staff.component.ts ***!
    \******************************************/

  /*! exports provided: StaffComponent */

  /***/
  function srcAppStaffStaffComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffComponent", function () {
      return StaffComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // import { NavbarComponent } from '../../shared/navbar/navbar.component';


    var StaffComponent = /*#__PURE__*/function () {
      function StaffComponent(location, router) {
        _classCallCheck(this, StaffComponent);

        this.location = location;
        this.router = router;
        this.yScrollStack = [];
      }

      _createClass(StaffComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          console.log(this.router);
          var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

          if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
          } else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
          }

          var elemMainPanel = document.querySelector('.main-panel');
          var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
          this.location.subscribe(function (ev) {
            _this22.lastPoppedUrl = ev.url;
          });
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              if (event.url != _this22.lastPoppedUrl) _this22.yScrollStack.push(window.scrollY);
            } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              if (event.url == _this22.lastPoppedUrl) {
                _this22.lastPoppedUrl = undefined;
                window.scrollTo(0, _this22.yScrollStack.pop());
              } else window.scrollTo(0, 0);
            }
          });
          this._router = this.router.events.filter(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
          });

          if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {// let ps = new PerfectScrollbar(elemMainPanel);
            // ps = new PerfectScrollbar(elemSidebar);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.runOnRouteChange();
        }
      }, {
        key: "isMap",
        value: function isMap(path) {
          var titlee = this.location.prepareExternalUrl(this.location.path());
          titlee = titlee.slice(1);

          if (path == titlee) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "runOnRouteChange",
        value: function runOnRouteChange() {
          if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel'); // const ps = new PerfectScrollbar(elemMainPanel);
            // ps.update();
          }
        }
      }, {
        key: "isMac",
        value: function isMac() {
          var bool = false;

          if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
          }

          return bool;
        }
      }]);

      return StaffComponent;
    }();

    StaffComponent.ɵfac = function StaffComponent_Factory(t) {
      return new (t || StaffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    StaffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StaffComponent,
      selectors: [["app-staff"]],
      decls: 3,
      vars: 0,
      template: function StaffComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "staff works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmL3N0YWZmLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaffComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-staff',
          templateUrl: './staff.component.html',
          styleUrls: ['./staff.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Important\Locker\details\Mcq-generator\Gabbar\quizgenerator\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map