(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lit'), require('lit/decorators.js')) :
    typeof define === 'function' && define.amd ? define(['exports', 'lit', 'lit/decorators.js'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global[""] = global[""] || {}, global[""]["/dist/index"] = global[""]["/dist/index"] || {}, global[""]["/dist/index"].umd = global[""]["/dist/index"].umd || {}, global[""]["/dist/index"].umd.js = {}), global.lit, global.decorators_js));
})(this, (function (exports, lit, decorators_js) { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    // customElements.define()
    // https://lit.dev/docs/components/decorators/
    // https://lit.dev/docs/components/properties/
    exports.MyElement = class MyElement extends lit.LitElement {
        constructor() {
            super(...arguments);
            this.version = '0.0.1';
        }
        render() {
            return lit.html `
      <p>Welcome to the Lit tutorial!</p>
      <p>This version is <mark>v${this.version}</mark>.</p>
    `;
        }
    };
    __decorate([
        decorators_js.property(),
        __metadata("design:type", Object)
    ], exports.MyElement.prototype, "version", void 0);
    exports.MyElement = __decorate([
        decorators_js.customElement('my-element')
    ], exports.MyElement);

    Object.defineProperty(exports, '__esModule', { value: true });

}));
