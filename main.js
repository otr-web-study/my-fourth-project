(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t,n,r,o){var i=t.data,u=t.currentUserId,a=t.cardSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=i._id,this._name=i.name,this._link=i.link,this._ownerId=i.owner._id,this._likes=i.likes,this._cardSelector=a,this._currentUserId=u,this._handleCardClick=n,this._handleLikeButtonClick=r,this._handleDeleteButtonClick=o}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"onLikeButtonClick",value:function(t){this._likes=t,this._renderLike()}},{key:"onDeleteButtonClick",value:function(){this._element.remove(),this._element=null}},{key:"_renderLike",value:function(){this.isLiked()?this._likeButton.classList.add("card__like-button_active"):this._likeButton.classList.remove("card__like-button_active"),this._elementLikesCount.textContent=this._likes.length}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._handleLikeButtonClick(t)})),this._deleteButton.addEventListener("click",(function(){t._handleDeleteButtonClick(t)})),this._image.addEventListener("click",(function(){t._handleCardClick({name:t._name,link:t._link})}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".card__image"),this._likeButton=this._element.querySelector(".card__like-button"),this._deleteButton=this._element.querySelector(".card__delete-button"),this._elementLikesCount=this._element.querySelector(".card__like-count"),this._setEventListeners(),this._element.querySelector(".card__title").textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._renderLike(),this._ownerId!==this._currentUserId&&this._deleteButton.classList.add("card__delete-button_hidden"),this._element}},{key:"getId",value:function(){return this._id}},{key:"isLiked",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._currentUserId}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._validatedForm=n}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t,e){var n=this._validatedForm.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._validatedForm.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_disableSubmitButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this.toggleButtonState()}},{key:"_enableSubmitButton",value:function(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"enableValidation",value:function(){var t=this;this._inputList=Array.from(this._validatedForm.querySelectorAll(this._inputSelector)),this._submitButton=this._validatedForm.querySelector(this._submitButtonSelector),this.toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t.toggleButtonState()}))}))}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,n=[{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(t){var e=this;this.clear(),t.forEach((function(t){e.addItem(t)}))}},{key:"addItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this._renderer(t);e?this._container.prepend(n):this._container.append(n)}}],n&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),u=document.querySelector(".profile__edit-button"),a=document.querySelector(".profile__add-button"),c=document.querySelector(".profile__avatar-edit-button");function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=e,this._elementPopup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._closeButton=this._elementPopup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){this._elementPopup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._elementPopup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._elementPopup.addEventListener("mousedown",(function(e){e&&(e.target===t._elementPopup||e.target.classList.contains("popup__close-button"))&&t.close()}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=d(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},h.apply(this,arguments)}function d(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}function _(t,e){return _=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},_(t,e)}function y(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(r);if(o){var n=v(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return y(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._previewImage=e._elementPopup.querySelector(".popup-preview__image"),e._captionElement=e._elementPopup.querySelector(".popup-preview__caption"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.link,n=t.name;this._previewImage.src=e,this._previewImage.alt=n,this._captionElement.textContent=n,h(v(u.prototype),"open",this).call(this)}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(l);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=w(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},g.apply(this,arguments)}function w(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}function S(t,e){return S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},S(t,e)}function E(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return E(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t)).elementForm=n._elementPopup.querySelector(".popup-edit__form"),n._handleFormSubmit=e,n._inputList=n.elementForm.querySelectorAll(".popup-edit__input"),n._submitButton=n._elementPopup.querySelector(".popup-edit__button-save"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;g(C(u.prototype),"setEventListeners",this).call(this),this._elementPopup.addEventListener("submit",(function(e){e.preventDefault();var n=t._submitButton.textContent;t._submitButton.textContent="Сохранение...",t._handleFormSubmit(t._getInputValues()).then((function(){return t.close()})).finally((function(){t._submitButton.textContent=n}))}))}},{key:"close",value:function(){this.elementForm.reset(),g(C(u.prototype),"close",this).call(this)}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(l);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=B(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function B(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}function I(t,e){return I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},I(t,e)}function U(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return U(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t)).elementForm=n._elementPopup.querySelector(".popup-edit__form"),n._handleFormSubmit=e,n._submitButton=n._elementPopup.querySelector(".popup-edit__button-save"),n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;j(R(u.prototype),"setEventListeners",this).call(this),this._elementPopup.addEventListener("submit",(function(e){e.preventDefault();var n=t._submitButton.textContent;t._submitButton.textContent="Удаление...",t._handleFormSubmit(t._confirmOptions).then((function(){t.close()})).finally((function(){t._submitButton.textContent=n}))}))}},{key:"open",value:function(t){this._confirmOptions=t,j(R(u.prototype),"open",this).call(this)}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(l);function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var x=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._author=document.querySelector(e),this._bio=document.querySelector(n),this._avatar=document.querySelector(r),this._userId=void 0}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._author.textContent,about:this._bio.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t._id,o=t.avatar;this._author.textContent=e,this._bio.textContent=n,this._userId=r,this._avatar.src=o}},{key:"getUserId",value:function(){return this._userId}},{key:"getAvatar",value:function(){return this._avatar.src}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var F=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers,this._headersExt=Object.assign({},this._headers,{"Content-Type":"application/json"})}var e,n;return e=t,(n=[{key:"_handleResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"_fetchData",value:function(t,e){return fetch(t,e).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return this._fetchData("".concat(this._baseUrl,"/cards"),{headers:this._headers})}},{key:"getUserData",value:function(){return this._fetchData("".concat(this._baseUrl,"/users/me "),{headers:this._headers})}},{key:"updateUserData",value:function(t){return this._fetchData("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headersExt,body:JSON.stringify(t)})}},{key:"addNewCard",value:function(t){return this._fetchData("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headersExt,body:JSON.stringify(t)})}},{key:"deleteCard",value:function(t){return this._fetchData("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"likeCard",value:function(t){return this._fetchData("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers})}},{key:"unlikeCard",value:function(t){return this._fetchData("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"updateUserAvatar",value:function(t){return this._fetchData("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headersExt,body:JSON.stringify(t)})}},{key:"batchFetch",value:function(t){return Promise.all(t)}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"68bb178a-4eee-4a74-9e44-5d7e375169e1"}}),V=new x(".profile__author",".profile__bio",".profile__avatar"),N=new i((function(t){return new e({data:t,currentUserId:V.getUserId(),cardSelector:"#card-template"},(function(){H.open(t)}),(function(t){var e=t.getId(),n=function(e){t.onLikeButtonClick(e.likes)};t.isLiked()?F.unlikeCard(e).then(n).catch((function(t){console.log(t)})):F.likeCard(e).then(n).catch((function(t){console.log(t)}))}),(function(t){$.open({card:t})})).generateCard()}),".elements__list"),H=new b(".popup-preview");H.setEventListeners();var J=new O(".popup-edit_type_profile",(function(t){return F.updateUserData(t).then((function(t){return V.setUserInfo(t)})).catch((function(t){console.log(t)}))}));J.setEventListeners();var M=new O(".popup-edit_type_place",(function(t){return F.addNewCard(t).then((function(t){return N.addItem(t,!0),!0})).catch((function(t){console.log(t)}))}));M.setEventListeners();var z=new O(".popup-edit_type_avatar",(function(t){return F.updateUserAvatar({avatar:t.link}).then((function(t){return V.setUserInfo(t)})).catch((function(t){console.log(t)}))}));z.setEventListeners();var $=new q(".popup-edit_type_confirm",(function(t){var e=t.card;return F.deleteCard(e.getId()).then((function(){return e.onDeleteButtonClick()})).catch((function(t){console.log(t)}))}));$.setEventListeners();var G,K,Q={};u.addEventListener("click",(function(){Q[J.elementForm.getAttribute("name")].resetValidation(),J.setInputValues(V.getUserInfo()),J.open()})),a.addEventListener("click",(function(){Q[M.elementForm.getAttribute("name")].resetValidation(),M.open()})),c.addEventListener("click",(function(){Q[z.elementForm.getAttribute("name")].resetValidation(),z.open()})),K=(G={formSelector:".popup-edit__form",inputSelector:".popup-edit__input",submitButtonSelector:".popup-edit__button-save",inactiveButtonClass:"popup-edit__button-save_inactive",inputErrorClass:"popup-edit__input_type_error",errorClass:"popup-edit__error_active"}).formSelector,Array.from(document.querySelectorAll(K)).forEach((function(t){t.addEventListener("submit",(function(t){t.preventDefault()}));var e=new r(G,t);e.enableValidation();var n=t.getAttribute("name");Q[n]=e})),F.batchFetch([F.getInitialCards(),F.getUserData()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];V.setUserInfo(i),N.renderItems(o)})).catch((function(t){console.log(t)}))})();