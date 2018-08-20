(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addbook/addbook.component.css":
/*!***********************************************!*\
  !*** ./src/app/addbook/addbook.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#success_message{ display: none;}\r\n"

/***/ }),

/***/ "./src/app/addbook/addbook.component.html":
/*!************************************************!*\
  !*** ./src/app/addbook/addbook.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <form class=\"well form-horizontal\" method=\"post\" name=\"myForm\" id=\"contact_form\" enctype=\"application/x-www-form-urlencoded\">\r\n<fieldset>\r\n\r\n<!-- Form Name -->\r\n<legend><h2><b>ADD BOOK</b></h2></legend><br>\r\n\r\n<!-- Text input-->\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\">Name</label>\r\n  <div class=\"col-md-4 inputGroupContainer\">\r\n  <div class=\"input-group\">\r\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n  <input  name=\"name\" placeholder=\"Name\" class=\"form-control\"  type=\"text\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n  <div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\">Book Condition</label>\r\n    <div class=\"col-md-4 selectContainer\">\r\n    <div class=\"input-group\">\r\n        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list\"></i></span>\r\n    <select name=\"condition\" class=\"form-control selectpicker\">\r\n      <option value=\"\">Select your book's condition</option>\r\n      <option>New</option>\r\n      <option>Almost New</option>\r\n      <option >Slight Damage</option>\r\n      <option >Worn</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\">Author</label>\r\n  <div class=\"col-md-4 inputGroupContainer\">\r\n  <div class=\"input-group\">\r\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n  <input  name=\"author\" placeholder=\"author\" class=\"form-control\"  type=\"text\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" >Price</label>\r\n    <div class=\"col-md-4 inputGroupContainer\">\r\n    <div class=\"input-group\">\r\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n  <input name=\"price\"  class=\"form-control\"  type=\"text\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n\r\n\r\n\r\n<!-- Image input -->\r\n<!-- <div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\">Image</label>\r\n  <div class=\"col-md-4 inputGroupContainer\">\r\n  <div class=\"input-group\">\r\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n  <input name=\"image\" type=\"file\" accept=\"image/jpeg, image/png \" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<!-- Success message -->\r\n<div class=\"alert alert-success\" role=\"alert\" id=\"success_message\">Success <i class=\"glyphicon glyphicon-thumbs-up\"></i> Success!.</div>\r\n\r\n<!-- Button -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\"></label>\r\n  <div class=\"col-md-4\"><br>\r\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"submit()\">SUBMIT <span class=\"glyphicon glyphicon-send\"></span></button>\r\n  </div>\r\n</div>\r\n\r\n</fieldset>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/addbook/addbook.component.ts":
/*!**********************************************!*\
  !*** ./src/app/addbook/addbook.component.ts ***!
  \**********************************************/
/*! exports provided: AddbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbookComponent", function() { return AddbookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddbookComponent = /** @class */ (function () {
    function AddbookComponent(auth, dataservice, router) {
        this.auth = auth;
        this.dataservice = dataservice;
        this.router = router;
    }
    AddbookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.forms = document.getElementById('contact_form');
        this.currentuser = this.dataservice.getcurrentuser().subscribe(function (result) {
            _this.currentuser = result;
        });
        this.elem = document.getElementById('success_message');
    };
    AddbookComponent.prototype.submit = function () {
        var _this = this;
        var form = this.forms;
        var name = form["name"].value;
        var author = form["author"].value;
        var condition = form["condition"].value;
        var price = +form["price"].value;
        var seller = this.currentuser[0].name;
        var userid = this.currentuser[0].id;
        if (this.validate()) {
            this.elem.style.display = "block";
            this.auth.addBooks({ 'name': name,
                'author': author,
                'condition': condition,
                'price': price,
                'seller': seller,
                'userid': userid
            }).subscribe(function (data) {
                if (data) {
                    if (!confirm('Want to add more ?'))
                        _this.router.navigate(['main']);
                    else {
                        _this.elem.parentNode.parentNode.reset();
                        _this.elem.style.display = "none";
                    }
                }
                else
                    alert("Something went wrong....");
            });
        }
    };
    AddbookComponent.prototype.validate = function () {
        //let errors=this.errors;
        var form = this.forms;
        var name = form["name"].value;
        var author = form["author"].value;
        var condition = form["condition"].value;
        var price = +form["price"].value;
        // let image=form["image"].value;
        //console.log(form['image']);
        if (name == "") {
            alert("Name must be filled out");
            return false;
        }
        if (author == "") {
            alert("Author name must be filled out");
            return false;
        }
        if (condition == "") {
            alert("Condition must be selected");
            return false;
        }
        if (price == NaN || price <= 0) {
            alert("Invalid price");
            return false;
        }
        // if(image==""){
        //   alert("Please select an image");
        //   return false;
        // }
        return true;
    };
    AddbookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addbook',
            template: __webpack_require__(/*! ./addbook.component.html */ "./src/app/addbook/addbook.component.html"),
            styles: [__webpack_require__(/*! ./addbook.component.css */ "./src/app/addbook/addbook.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddbookComponent);
    return AddbookComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-3\"><button class=\"btn btn-primary mx-4 my-1 \" (click)=\"logout()\">Logout</button>\r\n  <button class=\"btn btn-danger mx-4  my-1\" routerLink=\"main\">Home</button>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        this.auth.setlogin(false);
        this.auth.logOut().subscribe(function (result) { alert("logged out"); });
        this.router.navigate(['main']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _login_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.guard */ "./src/app/login.guard.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _addbook_addbook_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./addbook/addbook.component */ "./src/app/addbook/addbook.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
    },
    {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'auth',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
    },
    {
        path: 'addbook',
        component: _addbook_addbook_component__WEBPACK_IMPORTED_MODULE_13__["AddbookComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'wishlist',
        component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_15__["WishlistComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'details/:id',
        component: _book_book_component__WEBPACK_IMPORTED_MODULE_14__["BookComponent"]
    },
    {
        path: 'message',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_16__["MessageComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _addbook_addbook_component__WEBPACK_IMPORTED_MODULE_13__["AddbookComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_14__["BookComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_15__["WishlistComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_16__["MessageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (this.auth.isLoggedin) {
            return true;
        }
        else {
            return this.auth.getloginstatus().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
                if (result)
                    return true;
                else {
                    _this.router.navigate(['auth']);
                    return false;
                }
            }));
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // private loggedinstatus=JSON.parse(sessionStorage.getItem('loginstatus') || 'false');
        this.loggedinstatus = false;
    }
    AuthService.prototype.registerUser = function (formdata) {
        console.log(formdata);
        return this.http.post('/api/users', formdata);
    };
    AuthService.prototype.addBooks = function (bookdata) {
        return this.http.post('/api/listings', bookdata);
    };
    AuthService.prototype.setlogin = function (status) {
        this.loggedinstatus = status;
        // sessionStorage.setItem('loginstatus',status);
    };
    Object.defineProperty(AuthService.prototype, "isLoggedin", {
        get: function () {
            // return (this.loggedinstatus || JSON.parse(sessionStorage.getItem('loginstatus')));
            return this.loggedinstatus;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getloginstatus = function () {
        return this.http.get('api/isLoggedin');
    };
    AuthService.prototype.logOut = function () {
        return this.http.get('api/logout');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <h1 class=\"col align-middle\">Authentication</h1>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n  <div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email:</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\" >\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"pwd\">Password:</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" >\r\n  </div>\r\n  <button class=\" col btn btn-default\" (click)=\"login()\">Login</button>\r\n  <button class=\" col btn btn-info\" routerLink=\"../register\">Register</button>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = /** @class */ (function () {
    function AuthComponent(auth, dataservice, router) {
        this.auth = auth;
        this.dataservice = dataservice;
        this.router = router;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.email = document.getElementById('email');
        this.pass = document.getElementById('pwd');
    };
    AuthComponent.prototype.login = function () {
        var _this = this;
        this.auth.registerUser({ "status": 0,
            "item": {
                "email": this.email.value,
                "password": this.pass.value,
            } }).subscribe(function (data) {
            if (data[0] == false)
                alert("Wrong Password or  Email");
            else {
                _this.auth.setlogin(true);
                _this.router.navigate(['main']);
            }
        });
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h2>Details</h2>\r\n<ul style=\"list-style-type:none;\" id=\"{{element.id}}\">\r\n      <li class=\"col m-2 p-4 bg-light shadow-lg \">\r\n\r\n        <img src=\"../assets/images/books.jpg\" class=\"col-6 m-12 p-12 row-6 rounded float-center img-fluid\" >\r\n\r\n        <strong>Book Name : </strong>{{element.name}}<br>\r\n        <strong>Price : </strong> Rs. {{element.price}}<br>\r\n        <strong>Author : </strong>{{element.author}}<br>\r\n        <strong>Condition : </strong>{{element.condition}}<br>\r\n        <strong>Seller : </strong>{{element.seller}}\r\n\r\n        <div class=\"col\">\r\n          <button class=\" col-4 btn btn-primary m-2 p-2\" (click)=\"buy($event)\">Buy</button>\r\n          <button class=\"col-4 btn btn-danger m-2 p-2\" (click)=\"addToWishlist($event)\">Add To Wishlist</button>\r\n        </div>\r\n\r\n       </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookComponent = /** @class */ (function () {
    function BookComponent(dataservice, route, router) {
        var _this = this;
        this.dataservice = dataservice;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) { return _this.element = params.id; });
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getDataDetails(this.element).subscribe(function (result) {
            _this.element = result[0];
            _this.dataservice.getcurrentuser().subscribe(function (user) { _this.currentuser = user; });
        });
    };
    BookComponent.prototype.buy = function (event) {
        var _this = this;
        if (this.currentuser) {
            var id = event.currentTarget.parentNode.parentNode.parentNode.id;
            this.dataservice.addToCart({ productid: id, userid: this.currentuser[0].id }).subscribe(function (result) {
                if (result) {
                    alert("Item added to Cart");
                    _this.router.navigate(['cart']);
                }
                else {
                    alert("Something went wrong");
                }
            });
        }
        else {
            this.router.navigate(['auth']);
        }
    };
    BookComponent.prototype.addToWishlist = function (event) {
        var _this = this;
        if (this.currentuser) {
            var id = event.currentTarget.parentNode.parentNode.parentNode.id;
            this.dataservice.addToWishlist({ productid: id, userid: this.currentuser[0].id }).subscribe(function (result) {
                if (result) {
                    alert("Item added to Wishlist");
                    _this.router.navigate(['wishlist']);
                }
                else {
                    alert("Something went wrong");
                }
            });
        }
        else {
            this.router.navigate(['auth']);
        }
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* #checksum{display: none;} */\r\n"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <h1 class=\"col align-middle\">Cart</h1>\r\n    <div class=\"col\"><button class=\"btn btn-info m-2\" (click)=\"emptyCart()\">Clear Cart</button> </div>\r\n  </div>\r\n  <div class=\"\">\r\n\r\n\r\n    <div class=\"row   m-4 \" id=\"cart-item-list\">\r\n<ul style=\"list-style-type:none;\">\r\n      <li class=\"col m-2 p-4 bg-light shadow-lg \" *ngFor=\"let cartelement of Cart\" id=\"{{cartelement.id}}\" >\r\n\r\n        <img src=\"../assets/images/books.jpg\" class=\"col-4 rounded float-center img-thumbnail img-fluid\" >\r\n         <a routerLink=\"../details/{{cartelement.id}}\"><strong>{{cartelement.name}}</strong></a>\r\n         <div class=\"col-4 m-2\">\r\n           Rs. {{cartelement.price.toLocaleString()}}\r\n         </div>\r\n\r\n\r\n       </li>\r\n</ul>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"card col shadow-lg text-right rounded m-2 p-2\" >\r\n           <p> The total amount is : Rs. {{amount || 0}} /-</p>\r\n    </div>\r\n    <button class=\"btn btn-info rounded m-3 p-2\" (click)=\"checkout()\">Checkout</button>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
        this.amount = 0;
        this.pid = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getcurrentuser().subscribe(function (user) {
            _this.userid = user[0].id;
            _this.dataservice.getCart(_this.userid).subscribe(function (product) {
                _this.productid = product;
                for (var _i = 0, _a = _this.productid; _i < _a.length; _i++) {
                    product = _a[_i];
                    _this.pid.push(product.productid);
                }
                if (_this.pid.length != 0) {
                    _this.dataservice.getDataofId(_this.pid).subscribe(function (result) {
                        _this.Cart = result;
                        _this.amount = 0;
                        for (var _i = 0, _a = _this.Cart; _i < _a.length; _i++) {
                            var elem = _a[_i];
                            _this.amount += +elem.price;
                        }
                    });
                }
            });
        });
    };
    CartComponent.prototype.emptyCart = function () {
        var _this = this;
        this.dataservice.deleteCart(this.userid).subscribe(function (res) {
            if (res) {
                alert("cart empty");
                _this.router.navigate(['main']);
            }
        });
        this.Cart = [];
    };
    CartComponent.prototype.checkout = function () {
        var _this = this;
        this.amount = 0;
        alert("Items buying.....");
        for (var _i = 0, _a = this.Cart; _i < _a.length; _i++) {
            var elem = _a[_i];
            var message = "Book " + elem.name + " of price : " + elem.price + " /- is requested by the user";
            var sender = this.userid;
            var userid = elem.userId;
            this.dataservice.addToMessage({
                'sender': +sender,
                'product': message,
                'userid': +userid
            }).subscribe(function (result) {
                if (result)
                    alert("Owner is notified....");
                else
                    alert("Error notifying the owner...");
            });
        }
        this.dataservice.deleteCart(this.userid).subscribe(function (res) {
            if (res) {
                alert("Success");
                _this.router.navigate(['main']);
            }
        });
        this.Cart = [];
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function () {
        return this.http.get('/api/listings');
    };
    DataService.prototype.getcurrentuser = function () {
        return this.http.get('api/currentuser');
    };
    DataService.prototype.getDataDetails = function (id) {
        return this.http.get('/api/listings/' + id);
    };
    DataService.prototype.getDataofId = function (userids) {
        return this.http.post('/api/listings/var', userids);
    };
    DataService.prototype.getCart = function (userid) {
        return this.http.get('api/cart/' + userid);
    };
    DataService.prototype.getWishlist = function (userid) {
        return this.http.get('api/wishlist/' + userid);
    };
    DataService.prototype.deleteCart = function (userid) {
        return this.http.get('api/cart/delete/' + userid);
    };
    DataService.prototype.deleteWishlist = function (userid) {
        return this.http.get('api/wishlist/delete/' + userid);
    };
    DataService.prototype.addToCart = function (data) {
        return this.http.post('api/cart', data);
    };
    DataService.prototype.addToWishlist = function (data) {
        return this.http.post('api/wishlist', data);
    };
    DataService.prototype.addToMessage = function (data) {
        return this.http.post('api/message', data);
    };
    DataService.prototype.getMessage = function () {
        return this.http.get('api/message');
    };
    DataService.prototype.deleteMessages = function () {
        return this.http.get('api/message/delete');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/login.guard.ts":
/*!********************************!*\
  !*** ./src/app/login.guard.ts ***!
  \********************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginGuard = /** @class */ (function () {
    function LoginGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (this.auth.isLoggedin) {
            this.router.navigate(['register']);
            return false;
        }
        else {
            return this.auth.getloginstatus().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
                if (!result)
                    return true;
                else {
                    _this.router.navigate(['register']);
                    return false;
                }
            }));
        }
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"><button class=\"btn btn-danger\" routerLink=\"../auth\">Login/Register</button></div>\r\n    <div class=\"col\"><a routerLink=\"../cart\"><button class=\"btn btn-danger\">Cart</button></a> </div>\r\n    <h1 class=\"col align-middle\">Books</h1>\r\n    <div class=\"col\"><a routerLink=\"../addbook\"><button class=\"btn btn-default\">Sell your books!</button></a> </div>\r\n    <div class=\"col\"><a routerLink=\"../wishlist\"><button class=\"btn btn-primary\">Wishlist</button></a> </div>\r\n    <div class=\"col\"><a routerLink=\"../message\"><i class=\"fas fa-bell\"></i></a> </div>\r\n  </div>\r\n  <div class=\"\">\r\n<!-- <ul style=\"list-style-type:none;padding:0;margin:0;\"> -->\r\n<!-- <ul> -->\r\n\r\n<!-- <li *ngFor=\"let person of people | orderBy : ['-lastName', 'age']\">{{person.firstName}} {{person.lastName}}, {{person.age}}</li> -->\r\n    <div class=\"row   m-4 \" id=\"item-list\" >\r\n      <!-- <div *ngFor=\"let item of Products\"> -->\r\n      <div class=\"col-4 card m-4 p-4 text-center bg-info shadow-lg\" *ngFor=\"let item of Products\" id=\"{{item.id}}\">\r\n        <a routerLink=\"../details/{{item.id}}\"> <strong><h3> {{item.name}} </h3> </strong> </a>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col m-3 p-3\">\r\n            <img src=\"../assets/images/books.jpg\" class=\"  col rounded float-center img-thumbnail img-fluid\" alt=\"\">\r\n            <span class=\"col m-1 \">Rs. {{item.price.toLocaleString()}}</span>\r\n\r\n          </div>\r\n          <div class=\"col\">\r\n            <button class=\" col btn btn-primary m-2 p-2\" (click)=\"buy($event)\">Buy</button>\r\n            <button class=\"col btn btn-danger m-2 p-2\" (click)=\"addToWishlist($event)\">Add To Wishlist</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- </div> -->\r\n    <!-- </ul> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = /** @class */ (function () {
    function MainComponent(dataservice, auth, router) {
        this.dataservice = dataservice;
        this.auth = auth;
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getData().subscribe(function (data) { _this.Products = data; });
        this.dataservice.getcurrentuser().subscribe(function (user) { _this.currentuser = user; });
    };
    MainComponent.prototype.buy = function (event) {
        var _this = this;
        if (this.currentuser) {
            var id = event.currentTarget.parentNode.parentNode.parentNode.id;
            this.dataservice.addToCart({ productid: id, userid: this.currentuser[0].id }).subscribe(function (result) {
                if (result) {
                    alert("Item added to Cart");
                    _this.router.navigate(['cart']);
                }
                else {
                    alert("Item already in cart");
                }
            });
        }
        else {
            this.router.navigate(['auth']);
        }
    };
    MainComponent.prototype.addToWishlist = function (event) {
        var _this = this;
        if (this.currentuser) {
            var id = event.currentTarget.parentNode.parentNode.parentNode.id;
            this.dataservice.addToWishlist({ productid: id, userid: this.currentuser[0].id }).subscribe(function (result) {
                if (result) {
                    alert("Item added to Wishlist");
                    _this.router.navigate(['wishlist']);
                }
                else {
                    alert("Something went wrong");
                }
            });
        }
        else {
            this.router.navigate(['auth']);
        }
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  ul {\r\n  list-style-type: none;\r\n  background: white;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n ul li {\r\n  background: gray;\r\n  border-radius: 8px;\r\n  padding: 20px;\r\n  margin-bottom: 8px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n  <h1 class=\"col align-middle\">Messages</h1>\r\n  <div class=\"col\"><button class=\"btn btn-info m-2\" (click)=\"emptyMessage()\">Clear Message</button> </div>\r\n</div>\r\n\r\n<ul>\r\n  <li *ngFor=\"let message of Messages\">\r\n    {{ message.sender }}\r\n\r\n    <p>{{ message.product }} at {{message.createdAt.toLocaleString()}}</p> \r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = /** @class */ (function () {
    // currentuser;
    function MessageComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.dataservice.getcurrentuser().subscribe( user => {this.currentuser =user[0].id});
        this.dataservice.getMessage().subscribe(function (result) {
            _this.Messages = result;
            if (result) {
                _this.Messages.sort(function (a, b) {
                    return (b.createdAt > a.createdAt);
                });
            }
            else {
                alert("Messages Empty");
            }
        });
    };
    MessageComponent.prototype.emptyMessage = function () {
        var _this = this;
        this.dataservice.deleteMessages().subscribe(function (result) {
            if (result) {
                alert('Messages cleared');
                _this.router.navigate(['main']);
            }
        });
        this.Messages = [];
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#success_message{ display: none;}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <form class=\"well form-horizontal\" method=\"post\" name=\"myForm\" id=\"contact_form\" enctype=\"application/x-www-form-urlencoded\">\r\n<fieldset>\r\n\r\n<!-- Form Name -->\r\n<legend><h2><b>Register</b></h2></legend><br>\r\n\r\n<!-- Text input-->\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\">Name</label>\r\n  <div class=\"col-md-4 inputGroupContainer\">\r\n  <div class=\"input-group\">\r\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n  <input  name=\"name\" placeholder=\"Name\" class=\"form-control\"  type=\"text\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- Text input-->\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\">Username</label>\r\n  <div class=\"col-md-4 inputGroupContainer\">\r\n  <div class=\"input-group\">\r\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n  <input  name=\"user_name\" placeholder=\"Username\" class=\"form-control\"  type=\"text\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" >Password</label>\r\n    <div class=\"col-md-4 inputGroupContainer\">\r\n    <div class=\"input-group\">\r\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n  <input name=\"user_password\" placeholder=\"Password\" class=\"form-control\"  type=\"password\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" >Confirm Password</label>\r\n    <div class=\"col-md-4 inputGroupContainer\">\r\n    <div class=\"input-group\">\r\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n  <input name=\"confirm_password\" placeholder=\"Confirm Password\" class=\"form-control\"  type=\"password\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n       <div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\">E-Mail</label>\r\n    <div class=\"col-md-4 inputGroupContainer\">\r\n    <div class=\"input-group\">\r\n        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\r\n  <input name=\"email\" placeholder=\"E-Mail Address\" class=\"form-control\"  type=\"text\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- textinput -->\r\n<div class=\"form-group\">\r\n<label class=\"col-md-4 control-label\">College</label>\r\n<div class=\"col-md-4 inputGroupContainer\">\r\n<div class=\"input-group\">\r\n <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\r\n<input name=\"college\" placeholder=\"college\" class=\"form-control\"  type=\"text\">\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\">Contact No.</label>\r\n    <div class=\"col-md-4 inputGroupContainer\">\r\n    <div class=\"input-group\">\r\n        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span>\r\n  <input name=\"contact_no\" placeholder=\"(989)\" class=\"form-control\" type=\"text\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Select Basic -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\">Address</label>\r\n  <div class=\"col-md-4 inputGroupContainer\">\r\n  <div class=\"input-group\">\r\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n  <textarea name=\"address\" rows=\"5\" cols=\"80\" class=\"form-control\" placeholder=\" New Delhi\" ></textarea>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Image input -->\r\n<!-- <div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\">Image</label>\r\n  <div class=\"col-md-4 inputGroupContainer\">\r\n  <div class=\"input-group\">\r\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n  <input name=\"image\" type=\"file\" accept=\"image/jpeg, image/png \" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<!-- Success message -->\r\n<div class=\"alert alert-success\" role=\"alert\" id=\"success_message\">Success <i class=\"glyphicon glyphicon-thumbs-up\"></i> Success!.</div>\r\n\r\n<!-- Button -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\"></label>\r\n  <div class=\"col-md-4\"><br>\r\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"submit()\">SUBMIT <span class=\"glyphicon glyphicon-send\"></span></button>\r\n  </div>\r\n</div>\r\n\r\n</fieldset>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.forms = document.getElementById('contact_form');
        this.elem = document.getElementById('success_message');
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        var form = this.forms;
        var name = form["name"].value;
        var user_name = form["user_name"].value;
        var user_password = form["user_password"].value;
        var confirm_password = form["confirm_password"].value;
        var email = form["email"].value;
        var contact_no = form["contact_no"].value;
        var address = form["address"].value;
        var college = form["college"].value;
        // let image=form["image"].value;
        if (this.formvalidate()) {
            this.auth.registerUser({
                'status': 2,
                'item': {
                    'email': email
                }
            }).subscribe(function (data) {
                if (data[0])
                    alert('email already exits');
                else {
                    _this.elem.style.display = "block";
                    _this.auth.registerUser({ 'status': 1,
                        'item': { 'name': name,
                            'user_name': user_name,
                            'user_password': user_password,
                            'email': email,
                            'contact': contact_no,
                            'address': address,
                            'college': college }
                    }).subscribe(function (data) {
                        _this.router.navigate(['main']);
                    });
                }
            });
        }
        else {
            this.elem.parentNode.parentNode.reset();
        }
    };
    RegisterComponent.prototype.formvalidate = function () {
        //let errors=this.errors;
        var form = this.forms;
        var name = form["name"].value;
        var user_name = form["user_name"].value;
        var user_password = form["user_password"].value;
        var confirm_password = form["confirm_password"].value;
        var email = form["email"].value;
        var contact_no = form["contact_no"].value;
        var address = form["address"].value;
        var college = form["address"].value;
        // let image=form["image"].value;
        //console.log(form['image']);
        if (name == "") {
            alert("Name must be filled out");
            return false;
        }
        if (user_name == "") {
            alert("Username must be filled out");
            return false;
        }
        if (user_password == "") {
            alert("Password must be filled out");
            return false;
        }
        if (user_password !== confirm_password) {
            alert("Password do not match");
            return false;
        }
        if (email == "") {
            alert("Email must be filled out");
            return false;
        }
        // if(email)
        if (contact_no == "") {
            alert("Contact no. must be filled out");
            return false;
        }
        if (+contact_no == NaN) {
            alert("Contact no. must be a number");
            return false;
        }
        if (address == "") {
            alert("Address must be filled out");
            return false;
        }
        if (college == "") {
            alert("College must be filled out");
            return false;
        }
        // if(image==""){
        //   alert("Please select an image");
        //   return false;
        // }
        return true;
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    \r\n    <h1 class=\"col align-middle\">Wishlist</h1>\r\n    <div class=\"col\"><button class=\"btn btn-info m-2\" (click)=\"emptyWishlist()\">Clear Wishlist</button> </div>\r\n  </div>\r\n  <div class=\"\">\r\n\r\n\r\n    <div class=\"row   m-4 \" id=\"cart-item-list\">\r\n<ul style=\"list-style-type:none;\">\r\n      <li class=\"col m-2 p-4 bg-light shadow-lg \" *ngFor=\"let element of Wishlist\" id=\"{{element.id}}\">\r\n\r\n        <img src=\"../assets/images/books.jpg\" class=\"col-4 rounded float-center img-thumbnail img-fluid\" >\r\n         <a routerLink=\"../details/{{element.id}}\"><strong>{{element.name}}</strong></a>\r\n         <div class=\"col-4 m-2\">\r\n           Rs. {{element.price.toLocaleString()}}\r\n         </div>\r\n         <!-- <button class=\"col-4 align-left\"type=\"button\" (click)=\"clearsingle($event)\">Remove</button> -->\r\n         <button class=\" col-4 btn btn-primary m-2 p-2\" (click)=\"buy($event)\">Buy</button>\r\n\r\n       </li>\r\n</ul>\r\n\r\n\r\n\r\n </div>\r\n</div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getcurrentuser().subscribe(function (user) {
            _this.currentuser = user[0].id;
            _this.dataservice.getWishlist(_this.currentuser).subscribe(function (product) {
                _this.products = product;
                var pid = [];
                for (var _i = 0, _a = _this.products; _i < _a.length; _i++) {
                    product = _a[_i];
                    pid.push(product.productid);
                }
                if (pid.length != 0) {
                    _this.dataservice.getDataofId(pid).subscribe(function (result) {
                        _this.Wishlist = result;
                    });
                }
            });
        });
    };
    WishlistComponent.prototype.emptyWishlist = function () {
        this.dataservice.deleteWishlist(this.currentuser).subscribe(function (res) {
            if (res)
                alert("wishlist empty");
        });
        this.Wishlist = [];
    };
    WishlistComponent.prototype.buy = function (event) {
        var _this = this;
        if (this.currentuser) {
            var id = event.currentTarget.parentNode.id;
            this.dataservice.addToCart({ productid: id, userid: this.currentuser }).subscribe(function (result) {
                if (result) {
                    alert("Item added to Cart");
                    _this.router.navigate(['cart']);
                }
                else {
                    alert("Item already in Cart");
                }
            });
        }
        else {
            this.router.navigate(['auth']);
        }
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ohanna\Documents\workspace\New folder\Angular-ecommerce\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map