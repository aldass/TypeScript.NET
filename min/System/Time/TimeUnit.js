/*
 * @author electricessence / https://github.com/electricessence/
 * Originally based upon .NET source but with many additions and improvements.
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var TimeUnit;
(function (TimeUnit) {
    TimeUnit[TimeUnit["Ticks"] = 0] = "Ticks";
    TimeUnit[TimeUnit["Milliseconds"] = 1] = "Milliseconds";
    TimeUnit[TimeUnit["Seconds"] = 2] = "Seconds";
    TimeUnit[TimeUnit["Minutes"] = 3] = "Minutes";
    TimeUnit[TimeUnit["Hours"] = 4] = "Hours";
    TimeUnit[TimeUnit["Days"] = 5] = "Days";
})(TimeUnit || (TimeUnit = {}));
Object.freeze(TimeUnit);
module.exports = TimeUnit;