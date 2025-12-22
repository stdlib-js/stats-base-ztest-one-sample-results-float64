/** @license Apache-2.0 */

'use strict';

/**
* Create a one-sample Z-test double-precision floating-point results object.
*
* @module @stdlib/stats-base-ztest-one-sample-results-float64
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var Results = require( '@stdlib/stats-base-ztest-one-sample-results-float64' );
*
* var results = new Results();
* // returns <Results>
*
* results.alternative = 'two-sided';
* results.alpha = 0.05;
* results.nullValue = 0.0;
* results.pValue = 0.3374;
* results.statistic = 0.9592;
* results.sd = 0.4535;
* results.ci = new Float64Array( [ -0.0316, 0.0923 ] );
* results.rejected = false;
*
* var str = results.toString();
* // returns <string>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
