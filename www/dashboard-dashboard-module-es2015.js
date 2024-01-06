(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js":
/*!*********************************************************************!*\
  !*** ./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *             jsPDF AutoTable plugin v3.5.13
 *             
 *             Copyright (c) 2020 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable
 *             Licensed under the MIT License.
 *             http://opensource.org/licenses/mit-license
 *         
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js"); } catch(e) {} }()));
	else { var i, a; }
})(typeof this !== 'undefined' ? this : window, function(__WEBPACK_EXTERNAL_MODULE__16__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSpacing = exports.getFillStyle = exports.addTableBorder = exports.getStringWidth = void 0;
function getStringWidth(text, styles, doc) {
    doc.applyStyles(styles, true);
    var textArr = Array.isArray(text) ? text : [text];
    var widestLineWidth = textArr
        .map(function (text) { return doc.getTextWidth(text); })
        .reduce(function (a, b) { return Math.max(a, b); }, 0);
    return widestLineWidth;
}
exports.getStringWidth = getStringWidth;
function addTableBorder(doc, table, startPos, cursor) {
    var lineWidth = table.settings.tableLineWidth;
    var lineColor = table.settings.tableLineColor;
    doc.applyStyles({ lineWidth: lineWidth, lineColor: lineColor });
    var fillStyle = getFillStyle(lineWidth, false);
    if (fillStyle) {
        doc.rect(startPos.x, startPos.y, table.getWidth(doc.pageSize().width), cursor.y - startPos.y, fillStyle);
    }
}
exports.addTableBorder = addTableBorder;
function getFillStyle(lineWidth, fillColor) {
    var drawLine = lineWidth > 0;
    var drawBackground = fillColor || fillColor === 0;
    if (drawLine && drawBackground) {
        return 'DF'; // Fill then stroke
    }
    else if (drawLine) {
        return 'S'; // Only stroke (transparent background)
    }
    else if (drawBackground) {
        return 'F'; // Only fill, no stroke
    }
    else {
        return null;
    }
}
exports.getFillStyle = getFillStyle;
function parseSpacing(value, defaultValue) {
    var _a, _b, _c, _d;
    value = value || defaultValue;
    if (Array.isArray(value)) {
        if (value.length >= 4) {
            return {
                top: value[0],
                right: value[1],
                bottom: value[2],
                left: value[3],
            };
        }
        else if (value.length === 3) {
            return {
                top: value[0],
                right: value[1],
                bottom: value[2],
                left: value[1],
            };
        }
        else if (value.length === 2) {
            return {
                top: value[0],
                right: value[1],
                bottom: value[0],
                left: value[1],
            };
        }
        else if (value.length === 1) {
            value = value[0];
        }
        else {
            value = defaultValue;
        }
    }
    if (typeof value === 'object') {
        if (typeof value.vertical === 'number') {
            value.top = value.vertical;
            value.bottom = value.vertical;
        }
        if (typeof value.horizontal === 'number') {
            value.right = value.horizontal;
            value.left = value.horizontal;
        }
        return {
            left: (_a = value.left) !== null && _a !== void 0 ? _a : defaultValue,
            top: (_b = value.top) !== null && _b !== void 0 ? _b : defaultValue,
            right: (_c = value.right) !== null && _c !== void 0 ? _c : defaultValue,
            bottom: (_d = value.bottom) !== null && _d !== void 0 ? _d : defaultValue,
        };
    }
    if (typeof value !== 'number') {
        value = defaultValue;
    }
    return { top: value, right: value, bottom: value, left: value };
}
exports.parseSpacing = parseSpacing;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTheme = exports.defaultStyles = exports.HtmlRowInput = exports.FONT_ROW_RATIO = void 0;
/**
 * Ratio between font size and font height. The number comes from jspdf's source code
 */
exports.FONT_ROW_RATIO = 1.15;
var HtmlRowInput = /** @class */ (function (_super) {
    __extends(HtmlRowInput, _super);
    function HtmlRowInput(element) {
        var _this = _super.call(this) || this;
        _this._element = element;
        return _this;
    }
    return HtmlRowInput;
}(Array));
exports.HtmlRowInput = HtmlRowInput;
// Base style for all themes
function defaultStyles(scaleFactor) {
    return {
        font: 'helvetica',
        fontStyle: 'normal',
        overflow: 'linebreak',
        fillColor: false,
        textColor: 20,
        halign: 'left',
        valign: 'top',
        fontSize: 10,
        cellPadding: 5 / scaleFactor,
        lineColor: 200,
        lineWidth: 0,
        cellWidth: 'auto',
        minCellHeight: 0,
        minCellWidth: 0,
    };
}
exports.defaultStyles = defaultStyles;
function getTheme(name) {
    var themes = {
        striped: {
            table: { fillColor: 255, textColor: 80, fontStyle: 'normal' },
            head: { textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold' },
            body: {},
            foot: { textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold' },
            alternateRow: { fillColor: 245 },
        },
        grid: {
            table: {
                fillColor: 255,
                textColor: 80,
                fontStyle: 'normal',
                lineWidth: 0.1,
            },
            head: {
                textColor: 255,
                fillColor: [26, 188, 156],
                fontStyle: 'bold',
                lineWidth: 0,
            },
            body: {},
            foot: {
                textColor: 255,
                fillColor: [26, 188, 156],
                fontStyle: 'bold',
                lineWidth: 0,
            },
            alternateRow: {},
        },
        plain: {
            head: { fontStyle: 'bold' },
            foot: { fontStyle: 'bold' },
        },
    };
    return themes[name];
}
exports.getTheme = getTheme;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DocHandler = void 0;
var globalDefaults = {};
var DocHandler = /** @class */ (function () {
    function DocHandler(jsPDFDocument) {
        this.jsPDFDocument = jsPDFDocument;
        this.userStyles = {
            // Black for versions of jspdf without getTextColor
            textColor: jsPDFDocument.getTextColor
                ? this.jsPDFDocument.getTextColor()
                : 0,
            fontSize: jsPDFDocument.internal.getFontSize(),
            fontStyle: jsPDFDocument.internal.getFont().fontStyle,
            font: jsPDFDocument.internal.getFont().fontName,
        };
    }
    DocHandler.setDefaults = function (defaults, doc) {
        if (doc === void 0) { doc = null; }
        if (doc) {
            doc.__autoTableDocumentDefaults = defaults;
        }
        else {
            globalDefaults = defaults;
        }
    };
    DocHandler.unifyColor = function (c) {
        if (Array.isArray(c)) {
            return c;
        }
        else if (typeof c === 'number') {
            return [c, c, c];
        }
        else if (typeof c === 'string') {
            return [c];
        }
        else {
            return null;
        }
    };
    DocHandler.prototype.applyStyles = function (styles, fontOnly) {
        // Font style needs to be applied before font
        // https://github.com/simonbengtsson/jsPDF-AutoTable/issues/632
        var _a, _b, _c;
        if (fontOnly === void 0) { fontOnly = false; }
        if (styles.fontStyle)
            this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(styles.fontStyle);
        var _d = this.jsPDFDocument.internal.getFont(), fontStyle = _d.fontStyle, fontName = _d.fontName;
        if (styles.font)
            fontName = styles.font;
        if (styles.fontStyle) {
            fontStyle = styles.fontStyle;
            var availableFontStyles = this.getFontList()[fontName];
            if (availableFontStyles && availableFontStyles.indexOf(fontStyle) === -1) {
                // Common issue was that the default bold in headers
                // made custom fonts not work. For example:
                // https://github.com/simonbengtsson/jsPDF-AutoTable/issues/653
                this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(availableFontStyles[0]);
                fontStyle = availableFontStyles[0];
            }
        }
        this.jsPDFDocument.setFont(fontName, fontStyle);
        if (styles.fontSize)
            this.jsPDFDocument.setFontSize(styles.fontSize);
        if (fontOnly) {
            return; // Performance improvement
        }
        var color = DocHandler.unifyColor(styles.fillColor);
        if (color)
            (_a = this.jsPDFDocument).setFillColor.apply(_a, color);
        color = DocHandler.unifyColor(styles.textColor);
        if (color)
            (_b = this.jsPDFDocument).setTextColor.apply(_b, color);
        color = DocHandler.unifyColor(styles.lineColor);
        if (color)
            (_c = this.jsPDFDocument).setDrawColor.apply(_c, color);
        if (typeof styles.lineWidth === 'number') {
            this.jsPDFDocument.setLineWidth(styles.lineWidth);
        }
    };
    DocHandler.prototype.splitTextToSize = function (text, size, opts) {
        return this.jsPDFDocument.splitTextToSize(text, size, opts);
    };
    DocHandler.prototype.rect = function (x, y, width, height, fillStyle) {
        return this.jsPDFDocument.rect(x, y, width, height, fillStyle);
    };
    DocHandler.prototype.getLastAutoTable = function () {
        return this.jsPDFDocument.lastAutoTable || null;
    };
    DocHandler.prototype.getTextWidth = function (text) {
        return this.jsPDFDocument.getTextWidth(text);
    };
    DocHandler.prototype.getDocument = function () {
        return this.jsPDFDocument;
    };
    DocHandler.prototype.setPage = function (page) {
        this.jsPDFDocument.setPage(page);
    };
    DocHandler.prototype.addPage = function () {
        return this.jsPDFDocument.addPage();
    };
    DocHandler.prototype.getFontList = function () {
        return this.jsPDFDocument.getFontList();
    };
    DocHandler.prototype.getGlobalOptions = function () {
        return globalDefaults || {};
    };
    DocHandler.prototype.getDocumentOptions = function () {
        return this.jsPDFDocument.__autoTableDocumentDefaults || {};
    };
    DocHandler.prototype.pageSize = function () {
        var pageSize = this.jsPDFDocument.internal.pageSize;
        // JSPDF 1.4 uses get functions instead of properties on pageSize
        if (pageSize.width == null) {
            pageSize = {
                width: pageSize.getWidth(),
                height: pageSize.getHeight(),
            };
        }
        return pageSize;
    };
    DocHandler.prototype.scaleFactor = function () {
        return this.jsPDFDocument.internal.scaleFactor;
    };
    DocHandler.prototype.pageNumber = function () {
        var pageInfo = this.jsPDFDocument.internal.getCurrentPageInfo();
        if (!pageInfo) {
            // Only recent versions of jspdf has pageInfo
            return this.jsPDFDocument.internal.getNumberOfPages();
        }
        return pageInfo.pageNumber;
    };
    return DocHandler;
}());
exports.DocHandler = DocHandler;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */
Object.defineProperty(exports, "__esModule", { value: true });
exports.assign = void 0;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function assign(target, s, s1, s2, s3) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
        // eslint-disable-next-line prefer-rest-params
        var nextSource = arguments[index];
        if (nextSource != null) {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
exports.assign = assign;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHtml = void 0;
var cssParser_1 = __webpack_require__(12);
var config_1 = __webpack_require__(1);
function parseHtml(doc, input, window, includeHiddenHtml, useCss) {
    var _a, _b;
    if (includeHiddenHtml === void 0) { includeHiddenHtml = false; }
    if (useCss === void 0) { useCss = false; }
    var tableElement;
    if (typeof input === 'string') {
        tableElement = window.document.querySelector(input);
    }
    else {
        tableElement = input;
    }
    var supportedFonts = Object.keys(doc.getFontList());
    var scaleFactor = doc.scaleFactor();
    var head = [], body = [], foot = [];
    if (!tableElement) {
        console.error('Html table could not be found with input: ', input);
        return { head: head, body: body, foot: foot };
    }
    for (var i = 0; i < tableElement.rows.length; i++) {
        var element = tableElement.rows[i];
        var tagName = (_b = (_a = element === null || element === void 0 ? void 0 : element.parentElement) === null || _a === void 0 ? void 0 : _a.tagName) === null || _b === void 0 ? void 0 : _b.toLowerCase();
        var row = parseRowContent(supportedFonts, scaleFactor, window, element, includeHiddenHtml, useCss);
        if (!row)
            continue;
        if (tagName === 'thead') {
            head.push(row);
        }
        else if (tagName === 'tfoot') {
            foot.push(row);
        }
        else {
            // Add to body both if parent is tbody or table
            body.push(row);
        }
    }
    return { head: head, body: body, foot: foot };
}
exports.parseHtml = parseHtml;
function parseRowContent(supportedFonts, scaleFactor, window, row, includeHidden, useCss) {
    var resultRow = new config_1.HtmlRowInput(row);
    for (var i = 0; i < row.cells.length; i++) {
        var cell = row.cells[i];
        var style_1 = window.getComputedStyle(cell);
        if (includeHidden || style_1.display !== 'none') {
            var cellStyles = void 0;
            if (useCss) {
                cellStyles = cssParser_1.parseCss(supportedFonts, cell, scaleFactor, style_1, window);
            }
            resultRow.push({
                rowSpan: cell.rowSpan,
                colSpan: cell.colSpan,
                styles: cellStyles,
                _element: cell,
                content: parseCellContent(cell),
            });
        }
    }
    var style = window.getComputedStyle(row);
    if (resultRow.length > 0 && (includeHidden || style.display !== 'none')) {
        return resultRow;
    }
}
function parseCellContent(orgCell) {
    // Work on cloned node to make sure no changes are applied to html table
    var cell = orgCell.cloneNode(true);
    // Remove extra space and line breaks in markup to make it more similar to
    // what would be shown in html
    cell.innerHTML = cell.innerHTML.replace(/\n/g, '').replace(/ +/g, ' ');
    // Preserve <br> tags as line breaks in the pdf
    cell.innerHTML = cell.innerHTML
        .split('<br>')
        .map(function (part) { return part.trim(); })
        .join('\n');
    // innerText for ie
    return cell.innerText || cell.textContent || '';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Improved text function with halign and valign support
 * Inspiration from: http://stackoverflow.com/questions/28327510/align-text-right-using-jspdf/28433113#28433113
 */
function default_1(text, x, y, styles, doc) {
    styles = styles || {};
    var FONT_ROW_RATIO = 1.15;
    var k = doc.internal.scaleFactor;
    var fontSize = doc.internal.getFontSize() / k;
    var splitRegex = /\r\n|\r|\n/g;
    var splitText = '';
    var lineCount = 1;
    if (styles.valign === 'middle' ||
        styles.valign === 'bottom' ||
        styles.halign === 'center' ||
        styles.halign === 'right') {
        splitText = typeof text === 'string' ? text.split(splitRegex) : text;
        lineCount = splitText.length || 1;
    }
    // Align the top
    y += fontSize * (2 - FONT_ROW_RATIO);
    if (styles.valign === 'middle')
        y -= (lineCount / 2) * fontSize * FONT_ROW_RATIO;
    else if (styles.valign === 'bottom')
        y -= lineCount * fontSize * FONT_ROW_RATIO;
    if (styles.halign === 'center' || styles.halign === 'right') {
        var alignSize = fontSize;
        if (styles.halign === 'center')
            alignSize *= 0.5;
        if (splitText && lineCount >= 1) {
            for (var iLine = 0; iLine < splitText.length; iLine++) {
                doc.text(splitText[iLine], x - doc.getStringUnitWidth(splitText[iLine]) * alignSize, y);
                y += fontSize * FONT_ROW_RATIO;
            }
            return doc;
        }
        x -= doc.getStringUnitWidth(text) * alignSize;
    }
    if (styles.halign === 'justify') {
        doc.text(text, x, y, {
            maxWidth: styles.maxWidth || 100,
            align: 'justify',
        });
    }
    else {
        doc.text(text, x, y);
    }
    return doc;
}
exports.default = default_1;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInput = void 0;
var htmlParser_1 = __webpack_require__(4);
var polyfills_1 = __webpack_require__(3);
var common_1 = __webpack_require__(0);
var documentHandler_1 = __webpack_require__(2);
var inputValidator_1 = __webpack_require__(13);
function parseInput(d, current) {
    var doc = new documentHandler_1.DocHandler(d);
    var document = doc.getDocumentOptions();
    var global = doc.getGlobalOptions();
    inputValidator_1.default(doc, global, document, current);
    var options = polyfills_1.assign({}, global, document, current);
    var win;
    if (typeof window !== 'undefined') {
        win = window;
    }
    var styles = parseStyles(global, document, current);
    var hooks = parseHooks(global, document, current);
    var settings = parseSettings(doc, options);
    var content = parseContent(doc, options, win);
    return {
        id: current.tableId,
        content: content,
        hooks: hooks,
        styles: styles,
        settings: settings,
    };
}
exports.parseInput = parseInput;
function parseStyles(gInput, dInput, cInput) {
    var styleOptions = {
        styles: {},
        headStyles: {},
        bodyStyles: {},
        footStyles: {},
        alternateRowStyles: {},
        columnStyles: {},
    };
    var _loop_1 = function (prop) {
        if (prop === 'columnStyles') {
            var global_1 = gInput[prop];
            var document_1 = dInput[prop];
            var current = cInput[prop];
            styleOptions.columnStyles = polyfills_1.assign({}, global_1, document_1, current);
        }
        else {
            var allOptions = [gInput, dInput, cInput];
            var styles = allOptions.map(function (opts) { return opts[prop] || {}; });
            styleOptions[prop] = polyfills_1.assign({}, styles[0], styles[1], styles[2]);
        }
    };
    for (var _i = 0, _a = Object.keys(styleOptions); _i < _a.length; _i++) {
        var prop = _a[_i];
        _loop_1(prop);
    }
    return styleOptions;
}
function parseHooks(global, document, current) {
    var allOptions = [global, document, current];
    var result = {
        didParseCell: [],
        willDrawCell: [],
        didDrawCell: [],
        didDrawPage: [],
    };
    for (var _i = 0, allOptions_1 = allOptions; _i < allOptions_1.length; _i++) {
        var options = allOptions_1[_i];
        if (options.didParseCell)
            result.didParseCell.push(options.didParseCell);
        if (options.willDrawCell)
            result.willDrawCell.push(options.willDrawCell);
        if (options.didDrawCell)
            result.didDrawCell.push(options.didDrawCell);
        if (options.didDrawPage)
            result.didDrawPage.push(options.didDrawPage);
    }
    return result;
}
function parseSettings(doc, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var margin = common_1.parseSpacing(options.margin, 40 / doc.scaleFactor());
    var startY = (_a = getStartY(doc, options.startY)) !== null && _a !== void 0 ? _a : margin.top;
    var showFoot;
    if (options.showFoot === true) {
        showFoot = 'everyPage';
    }
    else if (options.showFoot === false) {
        showFoot = 'never';
    }
    else {
        showFoot = (_b = options.showFoot) !== null && _b !== void 0 ? _b : 'everyPage';
    }
    var showHead;
    if (options.showHead === true) {
        showHead = 'everyPage';
    }
    else if (options.showHead === false) {
        showHead = 'never';
    }
    else {
        showHead = (_c = options.showHead) !== null && _c !== void 0 ? _c : 'everyPage';
    }
    var useCss = (_d = options.useCss) !== null && _d !== void 0 ? _d : false;
    var theme = options.theme || (useCss ? 'plain' : 'striped');
    return {
        includeHiddenHtml: (_e = options.includeHiddenHtml) !== null && _e !== void 0 ? _e : false,
        useCss: useCss,
        theme: theme,
        startY: startY,
        margin: margin,
        pageBreak: (_f = options.pageBreak) !== null && _f !== void 0 ? _f : 'auto',
        rowPageBreak: (_g = options.rowPageBreak) !== null && _g !== void 0 ? _g : 'auto',
        tableWidth: (_h = options.tableWidth) !== null && _h !== void 0 ? _h : 'auto',
        showHead: showHead,
        showFoot: showFoot,
        tableLineWidth: (_j = options.tableLineWidth) !== null && _j !== void 0 ? _j : 0,
        tableLineColor: (_k = options.tableLineColor) !== null && _k !== void 0 ? _k : 200,
    };
}
function getStartY(doc, userStartY) {
    var previous = doc.getLastAutoTable();
    var sf = doc.scaleFactor();
    var currentPage = doc.pageNumber();
    var isSamePageAsPreviousTable = false;
    if (previous && previous.startPageNumber) {
        var endingPage = previous.startPageNumber + previous.pageNumber - 1;
        isSamePageAsPreviousTable = endingPage === currentPage;
    }
    if (typeof userStartY === 'number') {
        return userStartY;
    }
    else if (userStartY == null || userStartY === false) {
        if (isSamePageAsPreviousTable && (previous === null || previous === void 0 ? void 0 : previous.finalY) != null) {
            // Some users had issues with overlapping tables when they used multiple
            // tables without setting startY so setting it here to a sensible default.
            return previous.finalY + 20 / sf;
        }
    }
    return null;
}
function parseContent(doc, options, window) {
    var head = options.head || [];
    var body = options.body || [];
    var foot = options.foot || [];
    if (options.html) {
        var hidden = options.includeHiddenHtml;
        if (window) {
            var htmlContent = htmlParser_1.parseHtml(doc, options.html, window, hidden, options.useCss) || {};
            head = htmlContent.head || head;
            body = htmlContent.body || head;
            foot = htmlContent.foot || head;
        }
        else {
            console.error('Cannot parse html in non browser environment');
        }
    }
    var columns = options.columns || parseColumns(head, body, foot);
    return {
        columns: columns,
        head: head,
        body: body,
        foot: foot,
    };
}
function parseColumns(head, body, foot) {
    var firstRow = head[0] || body[0] || foot[0] || [];
    var result = [];
    Object.keys(firstRow)
        .filter(function (key) { return key !== '_element'; })
        .forEach(function (key) {
        var colSpan = 1;
        var input;
        if (Array.isArray(firstRow)) {
            input = firstRow[parseInt(key)];
        }
        else {
            input = firstRow[key];
        }
        if (typeof input === 'object' && !Array.isArray(input)) {
            colSpan = (input === null || input === void 0 ? void 0 : input.colSpan) || 1;
        }
        for (var i = 0; i < colSpan; i++) {
            var id = void 0;
            if (Array.isArray(firstRow)) {
                id = result.length;
            }
            else {
                id = key + (i > 0 ? "_" + i : '');
            }
            var rowResult = { dataKey: id };
            result.push(rowResult);
        }
    });
    return result;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.addPage = exports.drawTable = void 0;
var config_1 = __webpack_require__(1);
var common_1 = __webpack_require__(0);
var models_1 = __webpack_require__(8);
var documentHandler_1 = __webpack_require__(2);
var polyfills_1 = __webpack_require__(3);
var autoTableText_1 = __webpack_require__(5);
function drawTable(jsPDFDoc, table) {
    var settings = table.settings;
    var startY = settings.startY;
    var margin = settings.margin;
    var cursor = {
        x: margin.left,
        y: startY,
    };
    var sectionsHeight = table.getHeadHeight(table.columns) + table.getFootHeight(table.columns);
    var minTableBottomPos = startY + margin.bottom + sectionsHeight;
    if (settings.pageBreak === 'avoid') {
        var rows = table.allRows();
        var tableHeight = rows.reduce(function (acc, row) { return acc + row.height; }, 0);
        minTableBottomPos += tableHeight;
    }
    var doc = new documentHandler_1.DocHandler(jsPDFDoc);
    if (settings.pageBreak === 'always' ||
        (settings.startY != null && minTableBottomPos > doc.pageSize().height)) {
        nextPage(doc);
        cursor.y = margin.top;
    }
    var startPos = polyfills_1.assign({}, cursor);
    table.startPageNumber = doc.pageNumber();
    doc.applyStyles(doc.userStyles);
    if (settings.showHead === 'firstPage' || settings.showHead === 'everyPage') {
        table.head.forEach(function (row) { return printRow(doc, table, row, cursor); });
    }
    doc.applyStyles(doc.userStyles);
    table.body.forEach(function (row, index) {
        var isLastRow = index === table.body.length - 1;
        printFullRow(doc, table, row, isLastRow, startPos, cursor);
    });
    doc.applyStyles(doc.userStyles);
    if (settings.showFoot === 'lastPage' || settings.showFoot === 'everyPage') {
        table.foot.forEach(function (row) { return printRow(doc, table, row, cursor); });
    }
    common_1.addTableBorder(doc, table, startPos, cursor);
    table.callEndPageHooks(doc, cursor);
    table.finalY = cursor.y;
    jsPDFDoc.lastAutoTable = table;
    jsPDFDoc.previousAutoTable = table; // Deprecated
    if (jsPDFDoc.autoTable)
        jsPDFDoc.autoTable.previous = table; // Deprecated
    doc.applyStyles(doc.userStyles);
}
exports.drawTable = drawTable;
function getRemainingLineCount(cell, remainingPageSpace, doc) {
    var fontHeight = (cell.styles.fontSize / doc.scaleFactor()) * config_1.FONT_ROW_RATIO;
    var vPadding = cell.padding('vertical');
    var remainingLines = Math.floor((remainingPageSpace - vPadding) / fontHeight);
    return Math.max(0, remainingLines);
}
function modifyRowToFit(row, remainingPageSpace, table, doc) {
    var cells = {};
    row.spansMultiplePages = true;
    var rowHeight = 0;
    for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
        var column = _a[_i];
        var cell = row.cells[column.index];
        if (!cell)
            continue;
        if (!Array.isArray(cell.text)) {
            cell.text = [cell.text];
        }
        var remainderCell = new models_1.Cell(cell.raw, cell.styles, cell.section);
        remainderCell = polyfills_1.assign(remainderCell, cell);
        remainderCell.text = [];
        var remainingLineCount = getRemainingLineCount(cell, remainingPageSpace, doc);
        if (cell.text.length > remainingLineCount) {
            remainderCell.text = cell.text.splice(remainingLineCount, cell.text.length);
        }
        var scaleFactor = doc.scaleFactor();
        cell.contentHeight = cell.getContentHeight(scaleFactor);
        if (cell.contentHeight >= remainingPageSpace) {
            cell.contentHeight = remainingPageSpace;
            remainderCell.styles.minCellHeight -= remainingPageSpace;
        }
        if (cell.contentHeight > row.height) {
            row.height = cell.contentHeight;
        }
        remainderCell.contentHeight = remainderCell.getContentHeight(scaleFactor);
        if (remainderCell.contentHeight > rowHeight) {
            rowHeight = remainderCell.contentHeight;
        }
        cells[column.index] = remainderCell;
    }
    var remainderRow = new models_1.Row(row.raw, -1, row.section, cells, true);
    remainderRow.height = rowHeight;
    for (var _b = 0, _c = table.columns; _b < _c.length; _b++) {
        var column = _c[_b];
        var remainderCell = remainderRow.cells[column.index];
        if (remainderCell) {
            remainderCell.height = remainderRow.height;
        }
        var cell = row.cells[column.index];
        if (cell) {
            cell.height = row.height;
        }
    }
    return remainderRow;
}
function shouldPrintOnCurrentPage(doc, row, remainingPageSpace, table) {
    var pageHeight = doc.pageSize().height;
    var margin = table.settings.margin;
    var marginHeight = margin.top + margin.bottom;
    var maxRowHeight = pageHeight - marginHeight;
    if (row.section === 'body') {
        // Should also take into account that head and foot is not
        // on every page with some settings
        maxRowHeight -=
            table.getHeadHeight(table.columns) + table.getFootHeight(table.columns);
    }
    var minRowHeight = row.getMinimumRowHeight(table.columns, doc);
    var minRowFits = minRowHeight < remainingPageSpace;
    if (minRowHeight > maxRowHeight) {
        console.error("Will not be able to print row " + row.index + " correctly since it's minimum height is larger than page height");
        return true;
    }
    if (!minRowFits) {
        return false;
    }
    var rowHasRowSpanCell = row.hasRowSpan(table.columns);
    var rowHigherThanPage = row.getMaxCellHeight(table.columns) > maxRowHeight;
    if (rowHigherThanPage) {
        if (rowHasRowSpanCell) {
            console.error("The content of row " + row.index + " will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.");
        }
        return true;
    }
    if (rowHasRowSpanCell) {
        // Currently a new page is required whenever a rowspan row don't fit a page.
        return false;
    }
    if (table.settings.rowPageBreak === 'avoid') {
        return false;
    }
    // In all other cases print the row on current page
    return true;
}
function printFullRow(doc, table, row, isLastRow, startPos, cursor) {
    var remainingSpace = getRemainingPageSpace(doc, table, isLastRow, cursor);
    if (row.canEntireRowFit(remainingSpace, table.columns)) {
        printRow(doc, table, row, cursor);
    }
    else {
        if (shouldPrintOnCurrentPage(doc, row, remainingSpace, table)) {
            var remainderRow = modifyRowToFit(row, remainingSpace, table, doc);
            printRow(doc, table, row, cursor);
            addPage(doc, table, startPos, cursor);
            printFullRow(doc, table, remainderRow, isLastRow, startPos, cursor);
        }
        else {
            addPage(doc, table, startPos, cursor);
            printFullRow(doc, table, row, isLastRow, startPos, cursor);
        }
    }
}
function printRow(doc, table, row, cursor) {
    cursor.x = table.settings.margin.left;
    for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
        var column = _a[_i];
        var cell = row.cells[column.index];
        if (!cell) {
            cursor.x += column.width;
            continue;
        }
        doc.applyStyles(cell.styles);
        cell.x = cursor.x;
        cell.y = cursor.y;
        var result = table.callCellHooks(doc, table.hooks.willDrawCell, cell, row, column, cursor);
        if (result === false) {
            cursor.x += column.width;
            continue;
        }
        var cellStyles = cell.styles;
        var fillStyle = common_1.getFillStyle(cellStyles.lineWidth, cellStyles.fillColor);
        if (fillStyle) {
            doc.rect(cell.x, cursor.y, cell.width, cell.height, fillStyle);
        }
        var textPos = cell.getTextPos();
        autoTableText_1.default(cell.text, textPos.x, textPos.y, {
            halign: cell.styles.halign,
            valign: cell.styles.valign,
            maxWidth: Math.ceil(cell.width - cell.padding('left') - cell.padding('right')),
        }, doc.getDocument());
        table.callCellHooks(doc, table.hooks.didDrawCell, cell, row, column, cursor);
        cursor.x += column.width;
    }
    cursor.y += row.height;
}
function getRemainingPageSpace(doc, table, isLastRow, cursor) {
    var bottomContentHeight = table.settings.margin.bottom;
    var showFoot = table.settings.showFoot;
    if (showFoot === 'everyPage' || (showFoot === 'lastPage' && isLastRow)) {
        bottomContentHeight += table.getFootHeight(table.columns);
    }
    return doc.pageSize().height - cursor.y - bottomContentHeight;
}
function addPage(doc, table, startPos, cursor) {
    doc.applyStyles(doc.userStyles);
    if (table.settings.showFoot === 'everyPage') {
        table.foot.forEach(function (row) { return printRow(doc, table, row, cursor); });
    }
    // Add user content just before adding new page ensure it will
    // be drawn above other things on the page
    table.callEndPageHooks(doc, cursor);
    var margin = table.settings.margin;
    common_1.addTableBorder(doc, table, startPos, cursor);
    nextPage(doc);
    table.pageNumber++;
    table.pageCount++;
    cursor.x = margin.left;
    cursor.y = margin.top;
    if (table.settings.showHead === 'everyPage') {
        table.head.forEach(function (row) { return printRow(doc, table, row, cursor); });
    }
}
exports.addPage = addPage;
function nextPage(doc) {
    var current = doc.pageNumber();
    doc.setPage(current + 1);
    var newCurrent = doc.pageNumber();
    if (newCurrent === current) {
        doc.addPage();
    }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = exports.Cell = exports.Row = exports.Table = void 0;
var config_1 = __webpack_require__(1);
var HookData_1 = __webpack_require__(14);
var common_1 = __webpack_require__(0);
var Table = /** @class */ (function () {
    function Table(input, content) {
        this.pageNumber = 1;
        // Deprecated, use pageNumber instead
        // Not using getter since:
        // https://github.com/simonbengtsson/jsPDF-AutoTable/issues/596
        this.pageCount = 1;
        this.id = input.id;
        this.settings = input.settings;
        this.styles = input.styles;
        this.hooks = input.hooks;
        this.columns = content.columns;
        this.head = content.head;
        this.body = content.body;
        this.foot = content.foot;
    }
    Table.prototype.getHeadHeight = function (columns) {
        return this.head.reduce(function (acc, row) { return acc + row.getMaxCellHeight(columns); }, 0);
    };
    Table.prototype.getFootHeight = function (columns) {
        return this.foot.reduce(function (acc, row) { return acc + row.getMaxCellHeight(columns); }, 0);
    };
    Table.prototype.allRows = function () {
        return this.head.concat(this.body).concat(this.foot);
    };
    Table.prototype.callCellHooks = function (doc, handlers, cell, row, column, cursor) {
        for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
            var handler = handlers_1[_i];
            var data = new HookData_1.CellHookData(doc, this, cell, row, column, cursor);
            var result = handler(data) === false;
            // Make sure text is always string[] since user can assign string
            cell.text = Array.isArray(cell.text) ? cell.text : [cell.text];
            if (result) {
                return false;
            }
        }
        return true;
    };
    Table.prototype.callEndPageHooks = function (doc, cursor) {
        doc.applyStyles(doc.userStyles);
        for (var _i = 0, _a = this.hooks.didDrawPage; _i < _a.length; _i++) {
            var handler = _a[_i];
            handler(new HookData_1.HookData(doc, this, cursor));
        }
    };
    Table.prototype.getWidth = function (pageWidth) {
        if (typeof this.settings.tableWidth === 'number') {
            return this.settings.tableWidth;
        }
        else if (this.settings.tableWidth === 'wrap') {
            var wrappedWidth = this.columns.reduce(function (total, col) { return total + col.wrappedWidth; }, 0);
            return wrappedWidth;
        }
        else {
            var margin = this.settings.margin;
            return pageWidth - margin.left - margin.right;
        }
    };
    return Table;
}());
exports.Table = Table;
var Row = /** @class */ (function () {
    function Row(raw, index, section, cells, spansMultiplePages) {
        if (spansMultiplePages === void 0) { spansMultiplePages = false; }
        this.height = 0;
        this.raw = raw;
        if (raw instanceof config_1.HtmlRowInput) {
            this.raw = raw._element;
            this.element = raw._element;
        }
        this.index = index;
        this.section = section;
        this.cells = cells;
        this.spansMultiplePages = spansMultiplePages;
    }
    Row.prototype.getMaxCellHeight = function (columns) {
        var _this = this;
        return columns.reduce(function (acc, column) { var _a; return Math.max(acc, ((_a = _this.cells[column.index]) === null || _a === void 0 ? void 0 : _a.height) || 0); }, 0);
    };
    Row.prototype.hasRowSpan = function (columns) {
        var _this = this;
        return (columns.filter(function (column) {
            var cell = _this.cells[column.index];
            if (!cell)
                return false;
            return cell.rowSpan > 1;
        }).length > 0);
    };
    Row.prototype.canEntireRowFit = function (height, columns) {
        return this.getMaxCellHeight(columns) <= height;
    };
    Row.prototype.getMinimumRowHeight = function (columns, doc) {
        var _this = this;
        return columns.reduce(function (acc, column) {
            var cell = _this.cells[column.index];
            if (!cell)
                return 0;
            var fontHeight = (cell.styles.fontSize / doc.scaleFactor()) * config_1.FONT_ROW_RATIO;
            var vPadding = cell.padding('vertical');
            var oneRowHeight = vPadding + fontHeight;
            return oneRowHeight > acc ? oneRowHeight : acc;
        }, 0);
    };
    return Row;
}());
exports.Row = Row;
var Cell = /** @class */ (function () {
    function Cell(raw, styles, section) {
        var _a, _b;
        this.contentHeight = 0;
        this.contentWidth = 0;
        this.wrappedWidth = 0;
        this.minReadableWidth = 0;
        this.minWidth = 0;
        this.width = 0;
        this.height = 0;
        this.x = 0;
        this.y = 0;
        this.styles = styles;
        this.section = section;
        this.raw = raw;
        var content = raw;
        if (raw != null && typeof raw === 'object' && !Array.isArray(raw)) {
            this.rowSpan = raw.rowSpan || 1;
            this.colSpan = raw.colSpan || 1;
            content = (_b = (_a = raw.content) !== null && _a !== void 0 ? _a : raw.title) !== null && _b !== void 0 ? _b : raw;
            if (raw._element) {
                this.raw = raw._element;
            }
        }
        else {
            this.rowSpan = 1;
            this.colSpan = 1;
        }
        // Stringify 0 and false, but not undefined or null
        var text = content != null ? '' + content : '';
        var splitRegex = /\r\n|\r|\n/g;
        this.text = text.split(splitRegex);
    }
    Cell.prototype.getTextPos = function () {
        var y;
        if (this.styles.valign === 'top') {
            y = this.y + this.padding('top');
        }
        else if (this.styles.valign === 'bottom') {
            y = this.y + this.height - this.padding('bottom');
        }
        else {
            var netHeight = this.height - this.padding('vertical');
            y = this.y + netHeight / 2 + this.padding('top');
        }
        var x;
        if (this.styles.halign === 'right') {
            x = this.x + this.width - this.padding('right');
        }
        else if (this.styles.halign === 'center') {
            var netWidth = this.width - this.padding('horizontal');
            x = this.x + netWidth / 2 + this.padding('left');
        }
        else {
            x = this.x + this.padding('left');
        }
        return { x: x, y: y };
    };
    Cell.prototype.getContentHeight = function (scaleFactor) {
        var lineCount = Array.isArray(this.text) ? this.text.length : 1;
        var fontHeight = (this.styles.fontSize / scaleFactor) * config_1.FONT_ROW_RATIO;
        var height = lineCount * fontHeight + this.padding('vertical');
        return Math.max(height, this.styles.minCellHeight);
    };
    Cell.prototype.padding = function (name) {
        var padding = common_1.parseSpacing(this.styles.cellPadding, 0);
        if (name === 'vertical') {
            return padding.top + padding.bottom;
        }
        else if (name === 'horizontal') {
            return padding.left + padding.right;
        }
        else {
            return padding[name];
        }
    };
    return Cell;
}());
exports.Cell = Cell;
var Column = /** @class */ (function () {
    function Column(dataKey, raw, index) {
        this.wrappedWidth = 0;
        this.minReadableWidth = 0;
        this.minWidth = 0;
        this.width = 0;
        this.dataKey = dataKey;
        this.raw = raw;
        this.index = index;
    }
    Column.prototype.getMaxCustomCellWidth = function (table) {
        var max = 0;
        for (var _i = 0, _a = table.allRows(); _i < _a.length; _i++) {
            var row = _a[_i];
            var cell = row.cells[this.index];
            if (cell && typeof cell.styles.cellWidth === 'number') {
                max = Math.max(max, cell.styles.cellWidth);
            }
        }
        return max;
    };
    return Column;
}());
exports.Column = Column;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = void 0;
var documentHandler_1 = __webpack_require__(2);
var models_1 = __webpack_require__(8);
var widthCalculator_1 = __webpack_require__(15);
var config_1 = __webpack_require__(1);
var polyfills_1 = __webpack_require__(3);
function createTable(jsPDFDoc, input) {
    var doc = new documentHandler_1.DocHandler(jsPDFDoc);
    var content = parseContent(input, doc.scaleFactor());
    var table = new models_1.Table(input, content);
    widthCalculator_1.calculateWidths(doc, table);
    doc.applyStyles(doc.userStyles);
    return table;
}
exports.createTable = createTable;
function parseContent(input, sf) {
    var content = input.content;
    var columns = createColumns(content.columns);
    // If no head or foot is set, try generating it with content from columns
    if (content.head.length === 0) {
        var sectionRow = generateSectionRow(columns, 'head');
        if (sectionRow)
            content.head.push(sectionRow);
    }
    if (content.foot.length === 0) {
        var sectionRow = generateSectionRow(columns, 'foot');
        if (sectionRow)
            content.foot.push(sectionRow);
    }
    var theme = input.settings.theme;
    var styles = input.styles;
    return {
        columns: columns,
        head: parseSection('head', content.head, columns, styles, theme, sf),
        body: parseSection('body', content.body, columns, styles, theme, sf),
        foot: parseSection('foot', content.foot, columns, styles, theme, sf),
    };
}
function parseSection(sectionName, sectionRows, columns, styleProps, theme, scaleFactor) {
    var rowSpansLeftForColumn = {};
    var result = sectionRows.map(function (rawRow, rowIndex) {
        var skippedRowForRowSpans = 0;
        var cells = {};
        var colSpansAdded = 0;
        var columnSpansLeft = 0;
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var column = columns_1[_i];
            if (rowSpansLeftForColumn[column.index] == null ||
                rowSpansLeftForColumn[column.index].left === 0) {
                if (columnSpansLeft === 0) {
                    var rawCell = void 0;
                    if (Array.isArray(rawRow)) {
                        rawCell =
                            rawRow[column.index - colSpansAdded - skippedRowForRowSpans];
                    }
                    else {
                        rawCell = rawRow[column.dataKey];
                    }
                    var cellInputStyles = {};
                    if (typeof rawCell === 'object' && !Array.isArray(rawCell)) {
                        cellInputStyles = (rawCell === null || rawCell === void 0 ? void 0 : rawCell.styles) || {};
                    }
                    var styles = cellStyles(sectionName, column, rowIndex, theme, styleProps, scaleFactor, cellInputStyles);
                    var cell = new models_1.Cell(rawCell, styles, sectionName);
                    // dataKey is not used internally no more but keep for
                    // backwards compat in hooks
                    cells[column.dataKey] = cell;
                    cells[column.index] = cell;
                    columnSpansLeft = cell.colSpan - 1;
                    rowSpansLeftForColumn[column.index] = {
                        left: cell.rowSpan - 1,
                        times: columnSpansLeft,
                    };
                }
                else {
                    columnSpansLeft--;
                    colSpansAdded++;
                }
            }
            else {
                rowSpansLeftForColumn[column.index].left--;
                columnSpansLeft = rowSpansLeftForColumn[column.index].times;
                skippedRowForRowSpans++;
            }
        }
        return new models_1.Row(rawRow, rowIndex, sectionName, cells);
    });
    return result;
}
function generateSectionRow(columns, section) {
    var sectionRow = {};
    columns.forEach(function (col) {
        if (col.raw != null) {
            var title = getSectionTitle(section, col.raw);
            if (title != null)
                sectionRow[col.dataKey] = title;
        }
    });
    return Object.keys(sectionRow).length > 0 ? sectionRow : null;
}
function getSectionTitle(section, column) {
    if (section === 'head') {
        if (typeof column === 'object') {
            return column.header || column.title || null;
        }
        else if (typeof column === 'string' || typeof column === 'number') {
            return column;
        }
    }
    else if (section === 'foot' && typeof column === 'object') {
        return column.footer;
    }
    return null;
}
function createColumns(columns) {
    return columns.map(function (input, index) {
        var _a, _b;
        var key;
        if (typeof input === 'object') {
            key = (_b = (_a = input.dataKey) !== null && _a !== void 0 ? _a : input.key) !== null && _b !== void 0 ? _b : index;
        }
        else {
            key = index;
        }
        return new models_1.Column(key, input, index);
    });
}
function cellStyles(sectionName, column, rowIndex, themeName, styles, scaleFactor, cellInputStyles) {
    var theme = config_1.getTheme(themeName);
    var sectionStyles;
    if (sectionName === 'head') {
        sectionStyles = styles.headStyles;
    }
    else if (sectionName === 'body') {
        sectionStyles = styles.bodyStyles;
    }
    else if (sectionName === 'foot') {
        sectionStyles = styles.footStyles;
    }
    var otherStyles = polyfills_1.assign({}, theme.table, theme[sectionName], styles.styles, sectionStyles);
    var columnStyles = styles.columnStyles[column.dataKey] ||
        styles.columnStyles[column.index] ||
        {};
    var colStyles = sectionName === 'body' ? columnStyles : {};
    var rowStyles = sectionName === 'body' && rowIndex % 2 === 0
        ? polyfills_1.assign({}, theme.alternateRow, styles.alternateRowStyles)
        : {};
    var defaultStyle = config_1.defaultStyles(scaleFactor);
    var themeStyles = polyfills_1.assign({}, defaultStyle, otherStyles, rowStyles, colStyles);
    return polyfills_1.assign(themeStyles, cellInputStyles);
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.__drawTable = exports.__createTable = exports.applyPlugin = void 0;
var applyPlugin_1 = __webpack_require__(11);
var inputParser_1 = __webpack_require__(6);
var tableDrawer_1 = __webpack_require__(7);
var tableCalculator_1 = __webpack_require__(9);
// export { applyPlugin } didn't export applyPlugin
// to index.d.ts for some reason
function applyPlugin(jsPDF) {
    applyPlugin_1.default(jsPDF);
}
exports.applyPlugin = applyPlugin;
function autoTable(d, options) {
    var input = inputParser_1.parseInput(d, options);
    var table = tableCalculator_1.createTable(d, input);
    tableDrawer_1.drawTable(d, table);
}
exports.default = autoTable;
// Experimental export
function __createTable(d, options) {
    var input = inputParser_1.parseInput(d, options);
    return tableCalculator_1.createTable(d, input);
}
exports.__createTable = __createTable;
function __drawTable(d, table) {
    tableDrawer_1.drawTable(d, table);
}
exports.__drawTable = __drawTable;
try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    var jsPDF = __webpack_require__(16);
    // Webpack imported jspdf instead of jsPDF for some reason 
    // while it seemed to work everywhere else.
    if (jsPDF.jsPDF)
        jsPDF = jsPDF.jsPDF;
    applyPlugin(jsPDF);
}
catch (error) {
    // Importing jspdf in nodejs environments does not work as of jspdf
    // 1.5.3 so we need to silence potential errors to support using for example
    // the nodejs jspdf dist files with the exported applyPlugin
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var htmlParser_1 = __webpack_require__(4);
var autoTableText_1 = __webpack_require__(5);
var documentHandler_1 = __webpack_require__(2);
var inputParser_1 = __webpack_require__(6);
var tableDrawer_1 = __webpack_require__(7);
var tableCalculator_1 = __webpack_require__(9);
function default_1(jsPDF) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jsPDF.API.autoTable = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var options;
        if (args.length === 1) {
            options = args[0];
        }
        else {
            console.error('Use of deprecated autoTable initiation');
            options = args[2] || {};
            options.columns = args[0];
            options.body = args[1];
        }
        var input = inputParser_1.parseInput(this, options);
        var table = tableCalculator_1.createTable(this, input);
        tableDrawer_1.drawTable(this, table);
        return this;
    };
    // Assign false to enable `doc.lastAutoTable.finalY || 40` sugar
    jsPDF.API.lastAutoTable = false;
    jsPDF.API.previousAutoTable = false; // deprecated in v3
    jsPDF.API.autoTable.previous = false; // deprecated in v3
    jsPDF.API.autoTableText = function (text, x, y, styles) {
        autoTableText_1.default(text, x, y, styles, this);
    };
    jsPDF.API.autoTableSetDefaults = function (defaults) {
        documentHandler_1.DocHandler.setDefaults(defaults, this);
        return this;
    };
    jsPDF.autoTableSetDefaults = function (defaults, doc) {
        documentHandler_1.DocHandler.setDefaults(defaults, doc);
    };
    jsPDF.API.autoTableHtmlToJson = function (tableElem, includeHiddenElements) {
        if (includeHiddenElements === void 0) { includeHiddenElements = false; }
        if (typeof window === 'undefined') {
            console.error('Cannot run autoTableHtmlToJson in non browser environment');
            return null;
        }
        var doc = new documentHandler_1.DocHandler(this);
        var _a = htmlParser_1.parseHtml(doc, tableElem, window, includeHiddenElements, false), head = _a.head, body = _a.body;
        var columns = head[0].map(function (c) { return c.content; });
        return { columns: columns, rows: body, data: body };
    };
    /**
     * @deprecated
     */
    jsPDF.API.autoTableEndPosY = function () {
        console.error('Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.');
        var prev = this.lastAutoTable;
        if (prev && prev.finalY) {
            return prev.finalY;
        }
        else {
            return 0;
        }
    };
    /**
     * @deprecated
     */
    jsPDF.API.autoTableAddPageContent = function (hook) {
        console.error('Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead.');
        if (!jsPDF.API.autoTable.globalDefaults) {
            jsPDF.API.autoTable.globalDefaults = {};
        }
        jsPDF.API.autoTable.globalDefaults.addPageContent = hook;
        return this;
    };
    /**
     * @deprecated
     */
    jsPDF.API.autoTableAddPage = function () {
        console.error('Use of deprecated function: autoTableAddPage. Use doc.addPage()');
        this.addPage();
        return this;
    };
}
exports.default = default_1;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCss = void 0;
// Limitations
// - No support for border spacing
// - No support for transparency
var common_1 = __webpack_require__(0);
function parseCss(supportedFonts, element, scaleFactor, style, window) {
    var result = {};
    var pxScaleFactor = 96 / 72;
    var color = parseColor(element, function (elem) {
        return window.getComputedStyle(elem)['backgroundColor'];
    });
    if (color != null)
        result.fillColor = color;
    color = parseColor(element, function (elem) {
        return window.getComputedStyle(elem)['color'];
    });
    if (color != null)
        result.textColor = color;
    color = parseColor(element, function (elem) {
        return window.getComputedStyle(elem)['borderTopColor'];
    });
    if (color != null)
        result.lineColor = color;
    var padding = parsePadding(style, scaleFactor);
    if (padding)
        result.cellPadding = padding;
    // style.borderWidth only works in chrome (borderTopWidth etc works in firefox and ie as well)
    var bw = parseInt(style.borderTopWidth || '');
    bw = bw / pxScaleFactor / scaleFactor;
    if (bw)
        result.lineWidth = bw;
    var accepted = ['left', 'right', 'center', 'justify'];
    if (accepted.indexOf(style.textAlign) !== -1) {
        result.halign = style.textAlign;
    }
    accepted = ['middle', 'bottom', 'top'];
    if (accepted.indexOf(style.verticalAlign) !== -1) {
        result.valign = style.verticalAlign;
    }
    var res = parseInt(style.fontSize || '');
    if (!isNaN(res))
        result.fontSize = res / pxScaleFactor;
    var fontStyle = parseFontStyle(style);
    if (fontStyle)
        result.fontStyle = fontStyle;
    var font = (style.fontFamily || '').toLowerCase();
    if (supportedFonts.indexOf(font) !== -1) {
        result.font = font;
    }
    return result;
}
exports.parseCss = parseCss;
function parseFontStyle(style) {
    var res = '';
    if (style.fontWeight === 'bold' ||
        style.fontWeight === 'bolder' ||
        parseInt(style.fontWeight) >= 700) {
        res = 'bold';
    }
    if (style.fontStyle === 'italic' || style.fontStyle === 'oblique') {
        res += 'italic';
    }
    return res;
}
function parseColor(element, styleGetter) {
    var cssColor = realColor(element, styleGetter);
    if (!cssColor)
        return null;
    var rgba = cssColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);
    if (!rgba || !Array.isArray(rgba)) {
        return null;
    }
    var color = [
        parseInt(rgba[1]),
        parseInt(rgba[2]),
        parseInt(rgba[3]),
    ];
    var alpha = parseInt(rgba[4]);
    if (alpha === 0 || isNaN(color[0]) || isNaN(color[1]) || isNaN(color[2])) {
        return null;
    }
    return color;
}
function realColor(elem, styleGetter) {
    var bg = styleGetter(elem);
    if (bg === 'rgba(0, 0, 0, 0)' ||
        bg === 'transparent' ||
        bg === 'initial' ||
        bg === 'inherit') {
        if (elem.parentElement == null) {
            return null;
        }
        return realColor(elem.parentElement, styleGetter);
    }
    else {
        return bg;
    }
}
function parsePadding(style, scaleFactor) {
    var val = [
        style.paddingTop,
        style.paddingRight,
        style.paddingBottom,
        style.paddingLeft,
    ];
    var pxScaleFactor = 96 / (72 / scaleFactor);
    var linePadding = (parseInt(style.lineHeight) - parseInt(style.fontSize)) / scaleFactor / 2;
    var inputPadding = val.map(function (n) {
        return parseInt(n) / pxScaleFactor;
    });
    var padding = common_1.parseSpacing(inputPadding, 0);
    if (linePadding > padding.top) {
        padding.top = linePadding;
    }
    if (linePadding > padding.bottom) {
        padding.bottom = linePadding;
    }
    return padding;
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(doc, global, document, current) {
    var _loop_1 = function (options) {
        if (options && typeof options !== 'object') {
            console.error('The options parameter should be of type object, is: ' + typeof options);
        }
        if (typeof options.extendWidth !== 'undefined') {
            options.tableWidth = options.extendWidth ? 'auto' : 'wrap';
            console.error('Use of deprecated option: extendWidth, use tableWidth instead.');
        }
        if (typeof options.margins !== 'undefined') {
            if (typeof options.margin === 'undefined')
                options.margin = options.margins;
            console.error('Use of deprecated option: margins, use margin instead.');
        }
        if (options.startY && typeof options.startY !== 'number') {
            console.error('Invalid value for startY option', options.startY);
            delete options.startY;
        }
        if (!options.didDrawPage &&
            (options.afterPageContent ||
                options.beforePageContent ||
                options.afterPageAdd)) {
            console.error('The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead');
            options.didDrawPage = function (data) {
                doc.applyStyles(doc.userStyles);
                if (options.beforePageContent)
                    options.beforePageContent(data);
                doc.applyStyles(doc.userStyles);
                if (options.afterPageContent)
                    options.afterPageContent(data);
                doc.applyStyles(doc.userStyles);
                if (options.afterPageAdd && data.pageNumber > 1) {
                    ;
                    data.afterPageAdd(data);
                }
                doc.applyStyles(doc.userStyles);
            };
        }
        ;
        [
            'createdHeaderCell',
            'drawHeaderRow',
            'drawRow',
            'drawHeaderCell',
        ].forEach(function (name) {
            if (options[name]) {
                console.error("The \"" + name + "\" hook has changed in version 3.0, check the changelog for how to migrate.");
            }
        });
        [
            ['showFoot', 'showFooter'],
            ['showHead', 'showHeader'],
            ['didDrawPage', 'addPageContent'],
            ['didParseCell', 'createdCell'],
            ['headStyles', 'headerStyles'],
        ].forEach(function (_a) {
            var current = _a[0], deprecated = _a[1];
            if (options[deprecated]) {
                console.error("Use of deprecated option " + deprecated + ". Use " + current + " instead");
                options[current] = options[deprecated];
            }
        });
        [
            ['padding', 'cellPadding'],
            ['lineHeight', 'rowHeight'],
            'fontSize',
            'overflow',
        ].forEach(function (o) {
            var deprecatedOption = typeof o === 'string' ? o : o[0];
            var style = typeof o === 'string' ? o : o[1];
            if (typeof options[deprecatedOption] !== 'undefined') {
                if (typeof options.styles[style] === 'undefined') {
                    options.styles[style] = options[deprecatedOption];
                }
                console.error('Use of deprecated option: ' +
                    deprecatedOption +
                    ', use the style ' +
                    style +
                    ' instead.');
            }
        });
        for (var _i = 0, _a = [
            'styles',
            'bodyStyles',
            'headStyles',
            'footStyles',
        ]; _i < _a.length; _i++) {
            var styleProp = _a[_i];
            checkStyles(options[styleProp] || {});
        }
        var columnStyles = options['columnStyles'] || {};
        for (var _b = 0, _c = Object.keys(columnStyles); _b < _c.length; _b++) {
            var key = _c[_b];
            checkStyles(columnStyles[key] || {});
        }
    };
    for (var _i = 0, _a = [global, document, current]; _i < _a.length; _i++) {
        var options = _a[_i];
        _loop_1(options);
    }
}
exports.default = default_1;
function checkStyles(styles) {
    if (styles.rowHeight) {
        console.error('Use of deprecated style rowHeight. It is renamed to minCellHeight.');
        if (!styles.minCellHeight) {
            styles.minCellHeight = styles.rowHeight;
        }
    }
    else if (styles.columnWidth) {
        console.error('Use of deprecated style columnWidth. It is renamed to cellWidth.');
        if (!styles.cellWidth) {
            styles.cellWidth = styles.columnWidth;
        }
    }
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellHookData = exports.HookData = void 0;
var HookData = /** @class */ (function () {
    function HookData(doc, table, cursor) {
        this.table = table;
        this.pageNumber = table.pageNumber;
        this.pageCount = this.pageNumber;
        this.settings = table.settings;
        this.cursor = cursor;
        this.doc = doc.getDocument();
    }
    return HookData;
}());
exports.HookData = HookData;
var CellHookData = /** @class */ (function (_super) {
    __extends(CellHookData, _super);
    function CellHookData(doc, table, cell, row, column, cursor) {
        var _this = _super.call(this, doc, table, cursor) || this;
        _this.cell = cell;
        _this.row = row;
        _this.column = column;
        _this.section = row.section;
        return _this;
    }
    return CellHookData;
}(HookData));
exports.CellHookData = CellHookData;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ellipsize = exports.resizeColumns = exports.calculateWidths = void 0;
var common_1 = __webpack_require__(0);
/**
 * Calculate the column widths
 */
function calculateWidths(doc, table) {
    calculate(doc, table);
    var resizableColumns = [];
    var initialTableWidth = 0;
    table.columns.forEach(function (column) {
        var customWidth = column.getMaxCustomCellWidth(table);
        if (customWidth) {
            // final column width
            column.width = customWidth;
        }
        else {
            // initial column width (will be resized)
            column.width = column.wrappedWidth;
            resizableColumns.push(column);
        }
        initialTableWidth += column.width;
    });
    // width difference that needs to be distributed
    var resizeWidth = table.getWidth(doc.pageSize().width) - initialTableWidth;
    // first resize attempt: with respect to minReadableWidth and minWidth
    if (resizeWidth) {
        resizeWidth = resizeColumns(resizableColumns, resizeWidth, function (column) {
            return Math.max(column.minReadableWidth, column.minWidth);
        });
    }
    // second resize attempt: ignore minReadableWidth but respect minWidth
    if (resizeWidth) {
        resizeWidth = resizeColumns(resizableColumns, resizeWidth, function (column) { return column.minWidth; });
    }
    resizeWidth = Math.abs(resizeWidth);
    if (resizeWidth > 0.1 / doc.scaleFactor()) {
        // Table can't get smaller due to custom-width or minWidth restrictions
        // We can't really do much here. Up to user to for example
        // reduce font size, increase page size or remove custom cell widths
        // to allow more columns to be reduced in size
        resizeWidth = resizeWidth < 1 ? resizeWidth : Math.round(resizeWidth);
        console.error("Of the table content, " + resizeWidth + " units width could not fit page");
    }
    applyColSpans(table);
    fitContent(table, doc);
    applyRowSpans(table);
}
exports.calculateWidths = calculateWidths;
function calculate(doc, table) {
    var sf = doc.scaleFactor();
    table.allRows().forEach(function (row) {
        for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            var cell = row.cells[column.index];
            if (!cell)
                continue;
            var hooks = table.hooks.didParseCell;
            table.callCellHooks(doc, hooks, cell, row, column, null);
            var padding = cell.padding('horizontal');
            cell.contentWidth = common_1.getStringWidth(cell.text, cell.styles, doc) + padding;
            var longestWordWidth = common_1.getStringWidth(cell.text.join(' ').split(/\s+/), cell.styles, doc);
            cell.minReadableWidth = longestWordWidth + cell.padding('horizontal');
            if (typeof cell.styles.cellWidth === 'number') {
                cell.minWidth = cell.styles.cellWidth;
                cell.wrappedWidth = cell.styles.cellWidth;
            }
            else if (cell.styles.cellWidth === 'wrap') {
                cell.minWidth = cell.contentWidth;
                cell.wrappedWidth = cell.contentWidth;
            }
            else {
                // auto
                var defaultMinWidth = 10 / sf;
                cell.minWidth = cell.styles.minCellWidth || defaultMinWidth;
                cell.wrappedWidth = cell.contentWidth;
                if (cell.minWidth > cell.wrappedWidth) {
                    cell.wrappedWidth = cell.minWidth;
                }
            }
        }
    });
    table.allRows().forEach(function (row) {
        for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            var cell = row.cells[column.index];
            // For now we ignore the minWidth and wrappedWidth of colspan cells when calculating colspan widths.
            // Could probably be improved upon however.
            if (cell && cell.colSpan === 1) {
                column.wrappedWidth = Math.max(column.wrappedWidth, cell.wrappedWidth);
                column.minWidth = Math.max(column.minWidth, cell.minWidth);
                column.minReadableWidth = Math.max(column.minReadableWidth, cell.minReadableWidth);
            }
            else {
                // Respect cellWidth set in columnStyles even if there is no cells for this column
                // or if the column only have colspan cells. Since the width of colspan cells
                // does not affect the width of columns, setting columnStyles cellWidth enables the
                // user to at least do it manually.
                // Note that this is not perfect for now since for example row and table styles are
                // not accounted for
                var columnStyles = table.styles.columnStyles[column.dataKey] ||
                    table.styles.columnStyles[column.index] ||
                    {};
                var cellWidth = columnStyles.cellWidth || columnStyles.minCellWidth;
                if (cellWidth && typeof cellWidth === 'number') {
                    column.minWidth = cellWidth;
                    column.wrappedWidth = cellWidth;
                }
            }
            if (cell) {
                // Make sure all columns get at least min width even though width calculations are not based on them
                if (cell.colSpan > 1 && !column.minWidth) {
                    column.minWidth = cell.minWidth;
                }
                if (cell.colSpan > 1 && !column.wrappedWidth) {
                    column.wrappedWidth = cell.minWidth;
                }
            }
        }
    });
}
/**
 * Distribute resizeWidth on passed resizable columns
 */
function resizeColumns(columns, resizeWidth, getMinWidth) {
    var initialResizeWidth = resizeWidth;
    var sumWrappedWidth = columns.reduce(function (acc, column) { return acc + column.wrappedWidth; }, 0);
    for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        var ratio = column.wrappedWidth / sumWrappedWidth;
        var suggestedChange = initialResizeWidth * ratio;
        var suggestedWidth = column.width + suggestedChange;
        var minWidth = getMinWidth(column);
        var newWidth = suggestedWidth < minWidth ? minWidth : suggestedWidth;
        resizeWidth -= newWidth - column.width;
        column.width = newWidth;
    }
    resizeWidth = Math.round(resizeWidth * 1e10) / 1e10;
    // Run the resizer again if there's remaining width needs
    // to be distributed and there're columns that can be resized
    if (resizeWidth) {
        var resizableColumns = columns.filter(function (column) {
            return resizeWidth < 0
                ? column.width > getMinWidth(column) // check if column can shrink
                : true; // check if column can grow
        });
        if (resizableColumns.length) {
            resizeWidth = resizeColumns(resizableColumns, resizeWidth, getMinWidth);
        }
    }
    return resizeWidth;
}
exports.resizeColumns = resizeColumns;
function applyRowSpans(table) {
    var rowSpanCells = {};
    var colRowSpansLeft = 1;
    var all = table.allRows();
    for (var rowIndex = 0; rowIndex < all.length; rowIndex++) {
        var row = all[rowIndex];
        for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            var data = rowSpanCells[column.index];
            if (colRowSpansLeft > 1) {
                colRowSpansLeft--;
                delete row.cells[column.index];
            }
            else if (data) {
                data.cell.height += row.height;
                colRowSpansLeft = data.cell.colSpan;
                delete row.cells[column.index];
                data.left--;
                if (data.left <= 1) {
                    delete rowSpanCells[column.index];
                }
            }
            else {
                var cell = row.cells[column.index];
                if (!cell) {
                    continue;
                }
                cell.height = row.height;
                if (cell.rowSpan > 1) {
                    var remaining = all.length - rowIndex;
                    var left = cell.rowSpan > remaining ? remaining : cell.rowSpan;
                    rowSpanCells[column.index] = { cell: cell, left: left, row: row };
                }
            }
        }
    }
}
function applyColSpans(table) {
    var all = table.allRows();
    for (var rowIndex = 0; rowIndex < all.length; rowIndex++) {
        var row = all[rowIndex];
        var colSpanCell = null;
        var combinedColSpanWidth = 0;
        var colSpansLeft = 0;
        for (var columnIndex = 0; columnIndex < table.columns.length; columnIndex++) {
            var column = table.columns[columnIndex];
            // Width and colspan
            colSpansLeft -= 1;
            if (colSpansLeft > 1 && table.columns[columnIndex + 1]) {
                combinedColSpanWidth += column.width;
                delete row.cells[column.index];
            }
            else if (colSpanCell) {
                var cell = colSpanCell;
                delete row.cells[column.index];
                colSpanCell = null;
                cell.width = column.width + combinedColSpanWidth;
            }
            else {
                var cell = row.cells[column.index];
                if (!cell)
                    continue;
                colSpansLeft = cell.colSpan;
                combinedColSpanWidth = 0;
                if (cell.colSpan > 1) {
                    colSpanCell = cell;
                    combinedColSpanWidth += column.width;
                    continue;
                }
                cell.width = column.width + combinedColSpanWidth;
            }
        }
    }
}
function fitContent(table, doc) {
    var rowSpanHeight = { count: 0, height: 0 };
    for (var _i = 0, _a = table.allRows(); _i < _a.length; _i++) {
        var row = _a[_i];
        for (var _b = 0, _c = table.columns; _b < _c.length; _b++) {
            var column = _c[_b];
            var cell = row.cells[column.index];
            if (!cell)
                continue;
            doc.applyStyles(cell.styles, true);
            var textSpace = cell.width - cell.padding('horizontal');
            if (cell.styles.overflow === 'linebreak') {
                // Add one pt to textSpace to fix rounding error
                cell.text = doc.splitTextToSize(cell.text, textSpace + 1 / doc.scaleFactor(), { fontSize: cell.styles.fontSize });
            }
            else if (cell.styles.overflow === 'ellipsize') {
                cell.text = ellipsize(cell.text, textSpace, cell.styles, doc, '...');
            }
            else if (cell.styles.overflow === 'hidden') {
                cell.text = ellipsize(cell.text, textSpace, cell.styles, doc, '');
            }
            else if (typeof cell.styles.overflow === 'function') {
                cell.text = cell.styles.overflow(cell.text, textSpace);
            }
            cell.contentHeight = cell.getContentHeight(doc.scaleFactor());
            var realContentHeight = cell.contentHeight / cell.rowSpan;
            if (cell.rowSpan > 1 &&
                rowSpanHeight.count * rowSpanHeight.height <
                    realContentHeight * cell.rowSpan) {
                rowSpanHeight = { height: realContentHeight, count: cell.rowSpan };
            }
            else if (rowSpanHeight && rowSpanHeight.count > 0) {
                if (rowSpanHeight.height > realContentHeight) {
                    realContentHeight = rowSpanHeight.height;
                }
            }
            if (realContentHeight > row.height) {
                row.height = realContentHeight;
            }
        }
        rowSpanHeight.count--;
    }
}
function ellipsize(text, width, styles, doc, overflow) {
    return text.map(function (str) { return ellipsizeStr(str, width, styles, doc, overflow); });
}
exports.ellipsize = ellipsize;
function ellipsizeStr(text, width, styles, doc, overflow) {
    var precision = 10000 * doc.scaleFactor();
    width = Math.ceil(width * precision) / precision;
    if (width >= common_1.getStringWidth(text, styles, doc)) {
        return text;
    }
    while (width < common_1.getStringWidth(text + overflow, styles, doc)) {
        if (text.length <= 1) {
            break;
        }
        text = text.substring(0, text.length - 1);
    }
    return text.trim() + overflow;
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE__16__ === 'undefined') {var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE__16__;

/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  *ngIf=\"myPlatform == 'desktop'\">\n  <ion-toolbar>\n    <ion-row >\n      <ion-col size = 12>\n        <ion-title>Users</ion-title>\n      </ion-col>\n      <!-- <ion-col (click)=\"generatePdf()\" class=\"downloadPdf\" size = 1>\n        <ion-icon name =\"print\"></ion-icon>\n        <ion-label >PDF</ion-label>\n      </ion-col> -->\n    </ion-row>  \n  </ion-toolbar>\n</ion-header>\n<ion-header *ngIf=\"myPlatform != 'desktop'\">\n  <ion-toolbar>\n    <ion-row> \n      <ion-menu-button></ion-menu-button> <ion-col size=8 id='title' style=\"align-self: center;\">Users</ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<app-super-admin  *ngIf=\"page !='Dealer'\"  (refresh)='getLoginUserList()'    [userRole]=\"page\" [memberList]=\"member\"></app-super-admin>\n<app-manufacturer *ngIf=\"page =='manufacturer'\"></app-manufacturer>\n<app-dealer *ngIf=\"page =='Dealer'\" [userRole]=\"page\" [memberList]=\"member\"></app-dealer>\n</ion-content>\n<!-- <app-super-admin  *ngIf=\"page !='Dealer' || != 'User'\" [userRole]=\"page\" [memberList]=\"member\"></app-super-admin>\n<app-manufacturer *ngIf=\"page =='manufacturer'\"></app-manufacturer>\n<app-dealer *ngIf=\"page =='Dealer' || == 'User'\" [userRole]=\"page\" [memberList]=\"member\"></app-dealer> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-pdf/test-pdf.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test-pdf/test-pdf.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div>\n    <ion-button (click)= \"clickToDownload()\"></ion-button>\n  </div>\n  <div id=\"pdf\">\n    <img style=\"position:absolute;top:0.44in;left:0.44in;width:8.41in;height:11.41in ; display:none;\"\n      src=\"https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_2.png\" />\n    <div style=\"position:absolute;top:0.88in;left:2.32in;width:3.94in;line-height:0.33in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:15pt;font-family:Arial;color:#000000\">AVERY DENNISON (INDIA)\n        PVT LTD</span><span style=\"font-style:normal;font-weight:bold;font-size:15pt;font-family:Arial;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:1.15in;left:2.19in;width:4.17in;line-height:0.16in;\">\n      <DIV style=\"position:relative; left:0.50in;\"><span\n          style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Arial;color:#000000\">VECHICLE CONSPICUITY\n          ONLINE MIS CERTIFICATE</span><span\n          style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Arial;color:#000000\"> </span><br /></DIV>\n      <span style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Arial;color:#000000\">COMPLIANCE TO\n        AUTOMOTIVE INDUSTRY STANDARD -089,090&amp;037</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Arial;color:#000000\"> </span><br />\n    </div>\n    <img style=\"position:absolute;top:0.65in;left:6.49in;width:2.36in;height:0.83in\"\n      src=\"https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_1.png\" />\n    <img style=\"position:absolute;top:11.17in;left:0.62in;width:1.54in;height:0.01in\"\n      src=\"https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_3.png\" />\n    <div style=\"position:absolute;top:11.18in;left:0.62in;width:1.57in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">Authorized\n        Dealer Signature</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <img style=\"position:absolute;top:11.17in;left:7.08in;width:1.07in;height:0.01in\"\n      src=\"https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_4.png\" />\n    <div style=\"position:absolute;top:11.18in;left:7.07in;width:1.11in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">Customer\n        Signature</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:2.19in;left:0.62in;width:2.89in;line-height:0.21in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000\">The\n        Regional Transport Office</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000\">\n      </span><br /><span\n        style=\"font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000\">TN58\n        MADURAI (SOUTH) RTO(TN-58)</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:2.19in;left:6.07in;width:2.69in;line-height:0.21in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000\">Certificate\n        NO :</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:11pt;font-family:Times New Roman;color:#000000\">\n        AVERYRRT0050193</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:11pt;font-family:Times New Roman;color:#000000\">\n      </span><br />\n      <DIV style=\"position:relative; left:0.87in;\"><span\n          style=\"font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000\">Fitment\n          Date : 14-09-2020</span><span\n          style=\"font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000\">\n        </span><br /></DIV>\n    </div>\n    <img style=\"position:absolute;top:2.60in;left:0.56in;width:8.16in;height:1.01in\"\n      src=\"https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_5.png\" />\n    <div style=\"position:absolute;top:2.61in;left:0.62in;width:1.22in;line-height:0.26in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000\">Vehicle\n        Details</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:2.91in;left:1.51in;width:1.64in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Registration\n        No : </span><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">TN58BA0095</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:2.91in;left:5.80in;width:1.19in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Registration\n        Year:</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">2018</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:3.14in;left:1.38in;width:1.91in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Chassis No\n        : </span><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">MAT483173JYH21081</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:3.14in;left:5.37in;width:2.06in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Engine NO :\n      </span><span style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">1\n        4CRAIL10HRYSC4575</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:3.37in;left:1.38in;width:1.90in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Vehicle\n        Make: TATA MOTORS LTD</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:3.37in;left:5.12in;width:2.56in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Vehicle\n        Model : TATA SUPER ACE MINT BS IV</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:2.00in;left:0.62in;width:0.31in;line-height:0.22in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000\">TO:</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:3.64in;left:0.62in;width:1.82in;line-height:0.26in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000\">Vehicle\n        Owner Details</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:3.64in;left:4.69in;width:2.85in;line-height:0.26in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000\">Manufacture\n        &amp; Distributor Details</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:3.94in;left:0.62in;width:2.20in;line-height:0.16in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Company\n        Name/Owner Name : SUDHA V</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Contact\n        Number : 7667334949</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:3.94in;left:4.69in;width:3.72in;line-height:0.16in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Manufacturer\n        Name : AVERY DENNISON (INDIA)PRIVATE LIMITED</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Distributor\n        Name : Bolster Solutions</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:4.32in;left:0.62in;width:1.94in;line-height:0.16in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">Owner Address\n        / Register Address :</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br />\n      <DIV style=\"position:relative; left:0.05in;\"><span\n          style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">NO 16,\n          FUND OFFICE COLONY,</span><span\n          style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n        </span><br /></DIV>\n      <DIV style=\"position:relative; left:0.05in;\"><span\n          style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">MADURAI -\n          625 003,</span><span\n          style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n        </span><br /></DIV>\n    </div>\n    <div style=\"position:absolute;top:4.32in;left:4.69in;width:1.64in;line-height:0.16in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">MFG\n        Address:</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br />\n      <DIV style=\"position:relative; left:0.05in;\"><span\n          style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Narshingpur\n          Industrial Area</span><span\n          style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n        </span><br /></DIV>\n      <DIV style=\"position:relative; left:0.05in;\"><span\n          style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Six\n          Kilometer Stone</span><span\n          style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n        </span><br /></DIV>\n      <DIV style=\"position:relative; left:0.05in;\"><span\n          style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Delhi\n          Jaipur Highway,Gurgaon</span><span\n          style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n        </span><br /></DIV>\n      <DIV style=\"position:relative; left:0.05in;\"><span\n          style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Delhi /\n          India.</span><span\n          style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n        </span><br /></DIV>\n    </div>\n    <div style=\"position:absolute;top:4.32in;left:6.76in;width:1.14in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">Distributor\n        Address:</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:4.61in;left:6.81in;width:1.52in;line-height:0.16in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">No 15/5A,\n        Vishahan Enclave,</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Gandhi\n        Nagar Colony,</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Erode-638009,</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:5.45in;left:0.62in;width:1.63in;line-height:0.18in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000\">Conspicuity\n        Tapes 20MM</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000\">\n      </span><br /><span\n        style=\"font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000\">Fitment\n        Details</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:5.45in;left:2.71in;width:1.80in;line-height:0.20in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000\">Rear Marking\n        Plates Details</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:5.45in;left:5.96in;width:1.17in;line-height:0.20in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000\">Certificate\n        Details</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:5.86in;left:0.62in;width:1.31in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">20MM - RED\n        : 1.20 Mtrs</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:5.86in;left:2.71in;width:3.07in;line-height:0.16in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Class 3 :\n        Red Retro Reflective and Yellow Retro Reflective -</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Alternative\n        Strips</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:5.86in;left:5.96in;width:2.35in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Type\n        Approved Number: A95224 &amp;E13 104R</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:6.25in;left:0.62in;width:1.39in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">20MM WHITE\n        : 1.20 Mtrs</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:6.25in;left:2.71in;width:2.81in;line-height:0.16in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Class 4 :\n        Red Retro Reflective border and Yellow Retro</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Reflective\n        Centre</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:6.25in;left:5.96in;width:2.22in;line-height:0.16in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">COP Number\n        :</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">SHL/16/2019-2020/3000008304/COP/3099</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:6.63in;left:0.62in;width:1.63in;line-height:0.18in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000\">Conspicuity\n        Tapes 50MM</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000\">\n      </span><br /><span\n        style=\"font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000\">Fitment\n        Details</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:6.63in;left:2.71in;width:1.64in;line-height:0.20in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000\">80MM Circular\n        Reflector</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:6.63in;left:5.96in;width:2.66in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Test Report\n        Number :SHL/16/2007-2008/2528/1584</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:7.04in;left:0.62in;width:1.25in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">50MM-RED :\n        0.00 Mtrs</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:7.04in;left:2.71in;width:2.09in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">80MM Red\n        Circular Reflector : 0.00 Nos</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:7.04in;left:5.96in;width:2.37in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">REAR MARK\n        :SHL/16/2016-2017/9203/1186</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:7.27in;left:0.62in;width:1.40in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">50MM-WHITE\n        : 0.00 Mtrs</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:7.27in;left:2.71in;width:2.20in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">80MM White\n        Circular Reflector : 0.00 Nos</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:7.27in;left:5.96in;width:2.68in;line-height:0.16in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Certified\n        By : The Automotive Research Association</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">of India\n        (ARAI)</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:7.50in;left:0.62in;width:1.53in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">50MM-YELLOW\n        : 1.80 Mtrs</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:7.50in;left:2.71in;width:2.25in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">80MM Yellow\n        Circular Reflector : 0.00 Nos</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:7.78in;left:0.62in;width:3.68in;line-height:0.16in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">The Maximun\n        Retail Price for the products specified in this Certificate is</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Rs.510\n        only.</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:7.78in;left:4.70in;width:3.84in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">20mm: Rs.\n        30/feet | 50mm: Rs.46/feet | C3: Rs.650/piece | C4: Rs.750/piece</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:8.16in;left:0.62in;width:0.87in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">Fitment\n        Images</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:8.39in;left:0.62in;width:0.30in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Front</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:8.39in;left:2.66in;width:0.29in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Back</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:8.39in;left:4.70in;width:0.36in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Side-1</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:8.39in;left:6.73in;width:0.36in;line-height:0.17in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">Side-2</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <img style=\"position:absolute;top:8.62in;left:0.62in;width:1.56in;height:1.35in\"\n      src=\"https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_2.png\" />\n    <img style=\"position:absolute;top:8.62in;left:2.66in;width:1.56in;height:1.35in\"\n      src=\"https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_3.png\" />\n    <img style=\"position:absolute;top:8.62in;left:4.70in;width:1.56in;height:1.35in\"\n      src=\"https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_4.png\" />\n    <img style=\"position:absolute;top:8.62in;left:6.73in;width:1.56in;height:1.35in\"\n      src=\"https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_5.png\" />\n    <div style=\"position:absolute;top:10.05in;left:0.62in;width:5.94in;line-height:0.13in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000\">This is to\n        certify that we have authorised Distributor / Dealer for the sale AIS-089,090,&amp;037 Compliant AVERY Brand\n        Retro reflective Tapes</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:6pt;font-family:Times New Roman;color:#000000\">\n      </span><br /><span\n        style=\"font-style:normal;font-weight:normal;font-size:6pt;font-family:Times New Roman;color:#000000\">Supplied by\n        us as per CMVR 104-1989</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:10.46in;left:6.79in;width:1.84in;line-height:0.14in;\"><span\n        style=\"font-style:normal;font-weight:bold;font-size:7pt;font-family:Times New Roman;color:#000000\">Authorized\n        Distributor Seal &amp; Signature</span><span\n        style=\"font-style:normal;font-weight:bold;font-size:7pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <div style=\"position:absolute;top:10.35in;left:0.62in;width:6.00in;line-height:0.13in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000\">We hereby\n        certify that we have supplied/installed ICAT/ARAI Approved Retro Reflective Tapes as per CMRV rule 104 specified\n        under CMVR</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000\">\n      </span><br /><span\n        style=\"font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000\">GSR 784\n        (E)</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000\">\n      </span><br /></div>\n    <img style=\"position:absolute;top:1.90in;left:3.64in;width:2.10in;height:0.01in\"\n      src=\"https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_6.png\" />\n    <img style=\"position:absolute;top:2.32in;left:3.64in;width:2.10in;height:0.01in\"\n      src=\"https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_7.png\" />\n    <img style=\"position:absolute;top:1.90in;left:5.74in;width:0.01in;height:0.44in\"\n      src=\"https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_8.png\" />\n    <img style=\"position:absolute;top:1.90in;left:3.64in;width:0.01in;height:0.44in\"\n      src=\"https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_9.png\" />\n    <div style=\"position:absolute;top:1.96in;left:4.00in;width:1.44in;line-height:0.22in;\"><span\n        style=\"font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#181818\">Paste\n        Hologram here</span><span\n        style=\"font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#181818\">\n      </span><br /></div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared-module/shared.module */ "./src/app/shared-module/shared.module.ts");
/* harmony import */ var _test_pdf_test_pdf_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../test-pdf/test-pdf.page */ "./src/app/test-pdf/test-pdf.page.ts");
/* harmony import */ var _dealer_dealer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dealer/dealer.component */ "./src/app/dashboard/dealer/dealer.component.ts");











let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"], _test_pdf_test_pdf_page__WEBPACK_IMPORTED_MODULE_8__["TestPDFPage"]],
        exports: [_dealer_dealer_component__WEBPACK_IMPORTED_MODULE_9__["DealerComponent"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".downloadPdf {\n  align-self: center;\n  text-align: center;\n  /* font-size: 15px; */\n  color: black;\n  background: #d8d8d8;\n  border-radius: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG93bmxvYWRQZGZ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBmb250LXNpemU6IDE1cHg7ICovXG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQ6ICNkOGQ4ZDg7XG4gICAgYm9yZGVyLXJhZGl1czogMTlweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");









let DashboardPage = class DashboardPage {
    constructor(menuController, ajaxService, storage, commonService, platform) {
        this.menuController = menuController;
        this.ajaxService = ajaxService;
        this.storage = storage;
        this.commonService = commonService;
        this.platform = platform;
        this.page = "";
        this.member = [];
        this.pdfTitle = [];
        this.pdfData = [];
    }
    ionViewWillEnter() {
        this.getLoginUserList();
        this.loginReStore();
    }
    generatePdf() {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["jsPDF"]();
        doc.setFontSize(18);
        doc.text(this.page, 11, 8);
        doc.setFontSize(11);
        doc.setTextColor(100);
        doc.autoTable({
            head: [this.pdfTitle],
            body: this.pdfData,
            theme: 'grid',
            didDrawCell: data => {
            }
        });
        // // Open PDF document in new tab
        doc.output('dataurlnewwindow');
    }
    loginReStore() {
        this.storage.get("login").then(body => {
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/authentic/user";
            this.ajaxService.ajaxPostWithBody(url, body)
                .subscribe(res => {
                // console.table(res)
                if (res != null && res != "") {
                    let messagingServiceData = res;
                    this.storage.set("loginRes", JSON.stringify(res)).then(res => {
                        if (this.commonService.isLoading)
                            this.commonService.dismissLoader();
                        this.commonService.updateLoginInfo(messagingServiceData);
                    });
                }
            });
        });
    }
    getLoginUserList() {
        this.storage.get('loginRes').then((result) => {
            result = JSON.parse(result);
            this.page = result["role"]["roleName"];
            let body = result;
            if (this.page != "Dealer" && this.page != "RTO") {
                let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/dashboard/user/list";
                this.commonService.presentLoader();
                this.ajaxService.ajaxPostWithBody(url, body)
                    .subscribe(res => {
                    // console.log(res)
                    // res.forEach(element => {
                    // });
                    this.member = res;
                    this.storage.set("dashboardResult", JSON.stringify(res)).then(res => {
                        this.commonService.dismissLoader();
                    });
                    this.pdfTitle = ["User ID", "Role", "Name", "Email", "Address", "Contact"];
                    for (let i = 0; i < this.member.length; i++) {
                        this.pdfData.push([res[i].userId, res[i].role.roleName, res[i].name, res[i].email, res[i]['addressLine'] + ',' + res[i]['city'] + ',' + res[i]['state'] + ',' + res[i]['pincode'], res[i].mobile1]);
                    }
                });
            }
            else {
                let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/dashboard/certificate/list";
                this.commonService.presentLoader();
                this.ajaxService.ajaxPostWithBody(url, body)
                    .subscribe(res => {
                    // console.log(res)
                    this.member = res;
                    this.commonService.dismissLoader();
                    this.storage.set("dashboardResult", JSON.stringify(res)).then(res => {
                    });
                    this.pdfTitle = ["Certificate id", "Registration no", "Name", "Vehicle Type", "Vehicle Modal", "Rto status"];
                    for (let i = 0; i < this.member.length; i++) {
                        this.pdfData.push([res[i].certificateId, res[i].registrationNumber, res[i].ownerName, res[i].vehicleMake, res[i].vehicleModel, res[i].rtoStatus]);
                    }
                });
            }
        });
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        // this.menuController.enable(true)
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_7__["AjaxService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonServices"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")).default]
    })
], DashboardPage);



/***/ }),

/***/ "./src/app/test-pdf/test-pdf.page.scss":
/*!*********************************************!*\
  !*** ./src/app/test-pdf/test-pdf.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtcGRmL3Rlc3QtcGRmLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/test-pdf/test-pdf.page.ts":
/*!*******************************************!*\
  !*** ./src/app/test-pdf/test-pdf.page.ts ***!
  \*******************************************/
/*! exports provided: TestPDFPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPDFPage", function() { return TestPDFPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);




let TestPDFPage = class TestPDFPage {
    printDiv(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
    clickToDownload() {
        var divContents = document.getElementById("pdf").innerHTML;
        var printWindow = window.open('', '', 'height=1000,width=900');
        printWindow.document.write('<html><head><title>Vehicle Safty</title>');
        printWindow.document.write('</head><body >');
        printWindow.document.write('<div id="pdf">\n' +
            '    <img style="position:absolute;top:0.44in;left:0.44in;width:8.41in;height:11.41in"\n' +
            '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_2.png" />\n' +
            '    <div style="position:absolute;top:0.88in;left:2.32in;width:3.94in;line-height:0.33in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:15pt;font-family:Arial;color:#000000">AVERY DENNISON (INDIA)\n' +
            '        PVT LTD</span><span style="font-style:normal;font-weight:bold;font-size:15pt;font-family:Arial;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:1.15in;left:2.19in;width:4.17in;line-height:0.16in;">\n' +
            '      <DIV style="position:relative; left:0.50in;"><span\n' +
            '          style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Arial;color:#000000">VECHICLE CONSPICUITY\n' +
            '          ONLINE MIS CERTIFICATE</span><span\n' +
            '          style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Arial;color:#000000"> </span><br /></DIV>\n' +
            '      <span style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Arial;color:#000000">COMPLIANCE TO\n' +
            '        AUTOMOTIVE INDUSTRY STANDARD -089,090&amp;037</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Arial;color:#000000"> </span><br />\n' +
            '    </div>\n' +
            '    <img style="position:absolute;top:0.65in;left:6.49in;width:2.36in;height:0.83in"\n' +
            '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_1.png" />\n' +
            '    <img style="position:absolute;top:11.17in;left:0.62in;width:1.54in;height:0.01in"\n' +
            '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_3.png" />\n' +
            '    <div style="position:absolute;top:11.18in;left:0.62in;width:1.57in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">Authorized\n' +
            '        Dealer Signature</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <img style="position:absolute;top:11.17in;left:7.08in;width:1.07in;height:0.01in"\n' +
            '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_4.png" />\n' +
            '    <div style="position:absolute;top:11.18in;left:7.07in;width:1.11in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">Customer\n' +
            '        Signature</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:2.19in;left:0.62in;width:2.89in;line-height:0.21in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">The\n' +
            '        Regional Transport Office</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">TN58\n' +
            '        MADURAI (SOUTH) RTO(TN-58)</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:2.19in;left:6.07in;width:2.69in;line-height:0.21in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">Certificate\n' +
            '        NO :</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:11pt;font-family:Times New Roman;color:#000000">\n' +
            '        AVERYRRT0050193</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:11pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br />\n' +
            '      <DIV style="position:relative; left:0.87in;"><span\n' +
            '          style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">Fitment\n' +
            '          Date : 14-09-2020</span><span\n' +
            '          style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">\n' +
            '        </span><br /></DIV>\n' +
            '    </div>\n' +
            '    <img style="position:absolute;top:2.60in;left:0.56in;width:8.16in;height:1.01in"\n' +
            '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_5.png" />\n' +
            '    <div style="position:absolute;top:2.61in;left:0.62in;width:1.22in;line-height:0.26in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000">Vehicle\n' +
            '        Details</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:2.91in;left:1.51in;width:1.64in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Registration\n' +
            '        No : </span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">TN58BA0095</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:2.91in;left:5.80in;width:1.19in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Registration\n' +
            '        Year:</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">2018</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:3.14in;left:1.38in;width:1.91in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Chassis No\n' +
            '        : </span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">MAT483173JYH21081</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:3.14in;left:5.37in;width:2.06in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Engine NO :\n' +
            '      </span><span style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">1\n' +
            '        4CRAIL10HRYSC4575</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:3.37in;left:1.38in;width:1.90in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Vehicle\n' +
            '        Make: TATA MOTORS LTD</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:3.37in;left:5.12in;width:2.56in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Vehicle\n' +
            '        Model : TATA SUPER ACE MINT BS IV</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:2.00in;left:0.62in;width:0.31in;line-height:0.22in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">TO:</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:3.64in;left:0.62in;width:1.82in;line-height:0.26in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000">Vehicle\n' +
            '        Owner Details</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:3.64in;left:4.69in;width:2.85in;line-height:0.26in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000">Manufacture\n' +
            '        &amp; Distributor Details</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:3.94in;left:0.62in;width:2.20in;line-height:0.16in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Company\n' +
            '        Name/Owner Name : SUDHA V</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Contact\n' +
            '        Number : 7667334949</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:3.94in;left:4.69in;width:3.72in;line-height:0.16in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Manufacturer\n' +
            '        Name : AVERY DENNISON (INDIA)PRIVATE LIMITED</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Distributor\n' +
            '        Name : Bolster Solutions</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:4.32in;left:0.62in;width:1.94in;line-height:0.16in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">Owner Address\n' +
            '        / Register Address :</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br />\n' +
            '      <DIV style="position:relative; left:0.05in;"><span\n' +
            '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">NO 16,\n' +
            '          FUND OFFICE COLONY,</span><span\n' +
            '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '        </span><br /></DIV>\n' +
            '      <DIV style="position:relative; left:0.05in;"><span\n' +
            '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">MADURAI -\n' +
            '          625 003,</span><span\n' +
            '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '        </span><br /></DIV>\n' +
            '    </div>\n' +
            '    <div style="position:absolute;top:4.32in;left:4.69in;width:1.64in;line-height:0.16in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">MFG\n' +
            '        Address:</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br />\n' +
            '      <DIV style="position:relative; left:0.05in;"><span\n' +
            '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Narshingpur\n' +
            '          Industrial Area</span><span\n' +
            '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '        </span><br /></DIV>\n' +
            '      <DIV style="position:relative; left:0.05in;"><span\n' +
            '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Six\n' +
            '          Kilometer Stone</span><span\n' +
            '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '        </span><br /></DIV>\n' +
            '      <DIV style="position:relative; left:0.05in;"><span\n' +
            '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Delhi\n' +
            '          Jaipur Highway,Gurgaon</span><span\n' +
            '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '        </span><br /></DIV>\n' +
            '      <DIV style="position:relative; left:0.05in;"><span\n' +
            '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Delhi /\n' +
            '          India.</span><span\n' +
            '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '        </span><br /></DIV>\n' +
            '    </div>\n' +
            '    <div style="position:absolute;top:4.32in;left:6.76in;width:1.14in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">Distributor\n' +
            '        Address:</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:4.61in;left:6.81in;width:1.52in;line-height:0.16in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">No 15/5A,\n' +
            '        Vishahan Enclave,</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Gandhi\n' +
            '        Nagar Colony,</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Erode-638009,</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:5.45in;left:0.62in;width:1.63in;line-height:0.18in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">Conspicuity\n' +
            '        Tapes 20MM</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">Fitment\n' +
            '        Details</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:5.45in;left:2.71in;width:1.80in;line-height:0.20in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">Rear Marking\n' +
            '        Plates Details</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:5.45in;left:5.96in;width:1.17in;line-height:0.20in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">Certificate\n' +
            '        Details</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:5.86in;left:0.62in;width:1.31in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">20MM - RED\n' +
            '        : 1.20 Mtrs</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:5.86in;left:2.71in;width:3.07in;line-height:0.16in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Class 3 :\n' +
            '        Red Retro Reflective and Yellow Retro Reflective -</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Alternative\n' +
            '        Strips</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:5.86in;left:5.96in;width:2.35in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Type\n' +
            '        Approved Number: A95224 &amp;E13 104R</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:6.25in;left:0.62in;width:1.39in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">20MM WHITE\n' +
            '        : 1.20 Mtrs</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:6.25in;left:2.71in;width:2.81in;line-height:0.16in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Class 4 :\n' +
            '        Red Retro Reflective border and Yellow Retro</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Reflective\n' +
            '        Centre</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:6.25in;left:5.96in;width:2.22in;line-height:0.16in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">COP Number\n' +
            '        :</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">SHL/16/2019-2020/3000008304/COP/3099</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:6.63in;left:0.62in;width:1.63in;line-height:0.18in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">Conspicuity\n' +
            '        Tapes 50MM</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">Fitment\n' +
            '        Details</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:6.63in;left:2.71in;width:1.64in;line-height:0.20in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">80MM Circular\n' +
            '        Reflector</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:6.63in;left:5.96in;width:2.66in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Test Report\n' +
            '        Number :SHL/16/2007-2008/2528/1584</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:7.04in;left:0.62in;width:1.25in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">50MM-RED :\n' +
            '        0.00 Mtrs</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:7.04in;left:2.71in;width:2.09in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">80MM Red\n' +
            '        Circular Reflector : 0.00 Nos</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:7.04in;left:5.96in;width:2.37in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">REAR MARK\n' +
            '        :SHL/16/2016-2017/9203/1186</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:7.27in;left:0.62in;width:1.40in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">50MM-WHITE\n' +
            '        : 0.00 Mtrs</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:7.27in;left:2.71in;width:2.20in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">80MM White\n' +
            '        Circular Reflector : 0.00 Nos</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:7.27in;left:5.96in;width:2.68in;line-height:0.16in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Certified\n' +
            '        By : The Automotive Research Association</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">of India\n' +
            '        (ARAI)</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:7.50in;left:0.62in;width:1.53in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">50MM-YELLOW\n' +
            '        : 1.80 Mtrs</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:7.50in;left:2.71in;width:2.25in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">80MM Yellow\n' +
            '        Circular Reflector : 0.00 Nos</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:7.78in;left:0.62in;width:3.68in;line-height:0.16in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">The Maximun\n' +
            '        Retail Price for the products specified in this Certificate is</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Rs.510\n' +
            '        only.</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:7.78in;left:4.70in;width:3.84in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">20mm: Rs.\n' +
            '        30/feet | 50mm: Rs.46/feet | C3: Rs.650/piece | C4: Rs.750/piece</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:8.16in;left:0.62in;width:0.87in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">Fitment\n' +
            '        Images</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:8.39in;left:0.62in;width:0.30in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Front</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:8.39in;left:2.66in;width:0.29in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Back</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:8.39in;left:4.70in;width:0.36in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Side-1</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:8.39in;left:6.73in;width:0.36in;line-height:0.17in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Side-2</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <img style="position:absolute;top:8.62in;left:0.62in;width:1.56in;height:1.35in"\n' +
            '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_2.png" />\n' +
            '    <img style="position:absolute;top:8.62in;left:2.66in;width:1.56in;height:1.35in"\n' +
            '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_3.png" />\n' +
            '    <img style="position:absolute;top:8.62in;left:4.70in;width:1.56in;height:1.35in"\n' +
            '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_4.png" />\n' +
            '    <img style="position:absolute;top:8.62in;left:6.73in;width:1.56in;height:1.35in"\n' +
            '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_5.png" />\n' +
            '    <div style="position:absolute;top:10.05in;left:0.62in;width:5.94in;line-height:0.13in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000">This is to\n' +
            '        certify that we have authorised Distributor / Dealer for the sale AIS-089,090,&amp;037 Compliant AVERY Brand\n' +
            '        Retro reflective Tapes</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:6pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:6pt;font-family:Times New Roman;color:#000000">Supplied by\n' +
            '        us as per CMVR 104-1989</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:10.46in;left:6.79in;width:1.84in;line-height:0.14in;"><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:7pt;font-family:Times New Roman;color:#000000">Authorized\n' +
            '        Distributor Seal &amp; Signature</span><span\n' +
            '        style="font-style:normal;font-weight:bold;font-size:7pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <div style="position:absolute;top:10.35in;left:0.62in;width:6.00in;line-height:0.13in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000">We hereby\n' +
            '        certify that we have supplied/installed ICAT/ARAI Approved Retro Reflective Tapes as per CMRV rule 104 specified\n' +
            '        under CMVR</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000">GSR 784\n' +
            '        (E)</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000">\n' +
            '      </span><br /></div>\n' +
            '    <img style="position:absolute;top:1.90in;left:3.64in;width:2.10in;height:0.01in"\n' +
            '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_6.png" />\n' +
            '    <img style="position:absolute;top:2.32in;left:3.64in;width:2.10in;height:0.01in"\n' +
            '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_7.png" />\n' +
            '    <img style="position:absolute;top:1.90in;left:5.74in;width:0.01in;height:0.44in"\n' +
            '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_8.png" />\n' +
            '    <img style="position:absolute;top:1.90in;left:3.64in;width:0.01in;height:0.44in"\n' +
            '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_9.png" />\n' +
            '    <div style="position:absolute;top:1.96in;left:4.00in;width:1.44in;line-height:0.22in;"><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#181818">Paste\n' +
            '        Hologram here</span><span\n' +
            '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#181818">\n' +
            '      </span><br /></div>\n' +
            '  </div>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
    captureScreen() {
        var data = document.getElementById('contentToConvert');
        html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(data).then(canvas => {
            // Few necessary setting options  
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            const contentDataURL = canvas.toDataURL('image/png');
            let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]('p', 'mm', 'a4'); // A4 size page of PDF  
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('MYPdf.pdf'); // Generated PDF   
        });
        // let html = document.getElementById('capture')
        // html2canvas(html,{allowTaint: true, useCORS: true}).then((canvas)=>{
        //   console.log(canvas)
        //   var doc = new jspdf.jsPDF();
        //   let imageData = canvas.toDataURL('image/png')
        //   let imageHeight = canvas.height*280/canvas.width
        //   doc.addImage(imageData,0,0,208,500)
        //   doc.output('dataurl')
        // })
        // var doc = new jsPDF();
        // doc.setFontSize(18);
        // doc.text('My PDF Table', 11, 8);
        // doc.setFontSize(11);
        // doc.setTextColor(100);
        // (doc as any).autoTable({
        //   head:[['ID', 'Country', 'Rank', 'Capital']],
        //   body: [
        //     [1, 'Finland', 7.632, 'Helsinki'],
        //     [2, 'Norway', 7.594, 'Oslo'],
        //     [3, 'Denmark', 7.555, 'Copenhagen'],
        //     [4, 'Iceland', 7.495, 'Reykjavík'],
        //     [5, 'Switzerland', 7.487, 'Bern'],
        //     [9, 'Sweden', 7.314, 'Stockholm'],
        //     [73, 'Belarus', 5.483, 'Minsk'],
        //   ],
        //   theme: 'plain',
        //   didDrawCell: data => {
        //     console.log(data.column.index)
        //   }
        // })
        // // Open PDF document in new tab
        // doc.output('dataurlnewwindow')
        // // Download PDF document  
        // doc.save('table.pdf');
        // //   html2canvas(document.body).then(canvas => {
        // //     document.body.appendChild(canvas)
        // // });
        //   var element = this.content.nativeElement;
        // var opt = {
        //   margin: 1,
        //   filename: 'myfile.pdf',
        //   image: { type: 'jpeg', quality: 0.98 },
        //   html2canvas: { },
        //   jsPDF: { orientation: 'landscape' }
        // };
        //   // New Promise-based usage:
        //   html2pdf().from("<h1 style='font-size:100px'>hello</h1>").set(opt).save()
        //   // Old monolithic-style usage:
        //   // html2pdf(element, opt);
        //     let doc: any = new jsPDF();
        //     // let specialElementHandlers = {
        //     //   '#editor': function (element, renderer) {
        //     //     return true;
        //     //   }
        //     // };
        //     let content = this.content.nativeElement;
        //     doc.html(content.innerHTML, {
        //       callback: function (pdf) {
        //         // pdf.save('test.pdf');////
        //       }
        //     });
        // doc.output('dataurlnewwindow')
        // doc.save('test.pdf');
        // let doc = new jsPDF(); doc.text(20, 20, 'Hello world'); doc.save('Test.pdf');///
    }
    ngOnInIt() {
    }
};
TestPDFPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['content',] }]
};
TestPDFPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-pdf',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./test-pdf.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-pdf/test-pdf.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./test-pdf.page.scss */ "./src/app/test-pdf/test-pdf.page.scss")).default]
    })
], TestPDFPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map