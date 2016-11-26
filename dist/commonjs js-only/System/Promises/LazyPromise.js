"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
var Promise_1 = require("./Promise");
var defer_1 = require("../Threading/defer");
var ArgumentNullException_1 = require("../Exceptions/ArgumentNullException");
var extends_1 = require("../../extends");
// noinspection JSUnusedLocalSymbols
var __extends = extends_1.default;
var VOID0 = void 0;
/**
 * A promise that waits for the first then to trigger the resolver.
 */
var LazyPromise = (function (_super) {
    __extends(LazyPromise, _super);
    function LazyPromise(_resolver) {
        _super.call(this);
        this._resolver = _resolver;
        if (!_resolver)
            throw new ArgumentNullException_1.ArgumentNullException("resolver");
        this._resolvedCalled = true;
    }
    LazyPromise.prototype._onDispose = function () {
        _super.prototype._onDispose.call(this);
        this._resolver = VOID0;
    };
    LazyPromise.prototype._onThen = function () {
        var r = this._resolver;
        if (r) {
            this._resolver = VOID0;
            this._resolvedCalled = false;
            this.resolveUsing(r);
        }
    };
    LazyPromise.prototype.thenSynchronous = function (onFulfilled, onRejected) {
        this._onThen();
        return _super.prototype.thenSynchronous.call(this, onFulfilled, onRejected);
    };
    LazyPromise.prototype.thenThis = function (onFulfilled, onRejected) {
        this._onThen();
        return _super.prototype.thenThis.call(this, onFulfilled, onRejected);
    };
    // NOTE: For a LazyPromise we need to be careful not to trigger the resolve for delay.
    /**
     * Will yield for a number of milliseconds from the time called before continuing.
     * @param milliseconds
     * @returns A promise that yields to the current execution and executes after a minimum delay.
     */
    LazyPromise.prototype.delayFromNow = function (milliseconds) {
        var _this = this;
        if (milliseconds === void 0) { milliseconds = 0; }
        this.throwIfDisposed();
        // If this is already guaranteed to resolve, the go ahead and pass to the super.
        if (!this._resolver || this.isSettled)
            return _super.prototype.delayFromNow.call(this, milliseconds);
        /*
         * If not triggered yet, then we create a special promise
         * that only requests the resolution from the parent promise
         * if a 'then' is called to ensure the lazy pattern.
         */
        var pass;
        var timedOut = false;
        // Setup the timer.
        var timeout = defer_1.defer(function () {
            timedOut = true;
            // If the promise was requested already go ahead and pass the request on to the parent.
            if (pass)
                pass();
        }, milliseconds);
        return new LazyPromise(function (resolve, reject) {
            // A lazy promise only enters here if something called for a resolution.
            pass = function () {
                _this.thenThis(function (v) { return resolve(v); }, function (e) { return reject(e); });
                timeout.dispose();
                timeout = VOID0;
                pass = VOID0;
            };
            // If the timeout completed already go ahead and pass the request on to the parent.
            if (timedOut)
                pass();
            // Otherwise wait for the timeout to do it.
        });
    };
    /**
     * Will yield for a number of milliseconds from after this promise resolves.
     * If the promise is already resolved, the delay will start from now.
     * @param milliseconds
     * @returns A promise that yields to the current execution and executes after a delay.
     */
    LazyPromise.prototype.delayAfterResolve = function (milliseconds) {
        var _this = this;
        if (milliseconds === void 0) { milliseconds = 0; }
        this.throwIfDisposed();
        // If this is already guaranteed to resolve, the go ahead and pass to the super.
        if (!this._resolver || this.isSettled)
            return _super.prototype.delayAfterResolve.call(this, milliseconds);
        /*
         * If not triggered yet, then we create a special promise
         * that only requests the resolution from the parent promise
         * if a 'then' is called to ensure the lazy pattern.
         */
        var pass;
        // Setup the timer.
        var timeout;
        var finalize = function () {
            if (timeout) {
                timeout.dispose();
                timeout = VOID0;
            }
            // If the promise was requested already go ahead and pass the request on to the parent.
            if (pass)
                pass();
            finalize = VOID0;
        };
        {
            var detector = function () {
                if (finalize)
                    timeout = defer_1.defer(finalize, milliseconds);
            };
            // Calling super.thenThis does not trigger resolution.
            // This simply waits for resolution to happen.
            // Is effectively the timer by when resolution has occurred.
            _super.prototype.thenThis.call(this, detector, detector);
            //noinspection JSUnusedAssignment
            detector = null;
        }
        return new LazyPromise(function (resolve, reject) {
            // Because of the lazy nature of this promise, this could enter here at any time.
            if (_this.isPending) {
                _this.thenThis(function (v) { return defer_1.defer(function () { return resolve(v); }, milliseconds); }, function (e) { return defer_1.defer(function () { return reject(e); }, milliseconds); });
                finalize();
            }
            else {
                // We don't know when this resolved and could have happened anytime after calling this delay method.
                pass = function () {
                    _this.thenThis(function (v) { return resolve(v); }, function (e) { return reject(e); });
                };
                // Already finalized (aka resolved after a timeout)? Go now!
                if (!finalize)
                    pass();
            }
        });
    };
    return LazyPromise;
}(Promise_1.Promise));
exports.LazyPromise = LazyPromise;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LazyPromise;