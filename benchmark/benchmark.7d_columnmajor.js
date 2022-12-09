/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var randu = require( '@stdlib/random-base-randu' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var pow = require( '@stdlib/math-base-special-pow' );
var floor = require( '@stdlib/math-base-special-floor' );
var round = require( '@stdlib/math-base-special-round' );
var identity = require( '@stdlib/math-base-special-identity' );
var filledarray = require( '@stdlib/array-filled' );
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var pkg = require( './../package.json' ).name;
var unary = require( './../lib/7d.js' );


// VARIABLES //

var types = [ 'float64' ];
var order = 'column-major';


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - ndarray length
* @param {NonNegativeIntegerArray} shape - ndarray shape
* @param {string} xtype - input ndarray data type
* @param {string} ytype - output ndarray data type
* @returns {Function} benchmark function
*/
function createBenchmark( len, shape, xtype, ytype ) {
	var x;
	var y;
	var i;

	x = filledarray( 0.0, len, xtype );
	y = filledarray( 0.0, len, ytype );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = round( ( randu()*200.0 ) - 100.0 );
	}
	x = {
		'dtype': xtype,
		'data': x,
		'shape': shape,
		'strides': shape2strides( shape, order ),
		'offset': 0,
		'order': order
	};
	y = {
		'dtype': ytype,
		'data': y,
		'shape': shape,
		'strides': shape2strides( shape, order ),
		'offset': 0,
		'order': order
	};
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			unary( x, y, identity );
			if ( isnan( y.data[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( y.data[ i%len ] ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var sh;
	var t1;
	var t2;
	var f;
	var i;
	var j;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( j = 0; j < types.length; j++ ) {
		t1 = types[ j ];
		t2 = types[ j ];
		for ( i = min; i <= max; i++ ) {
			len = pow( 10, i );

			sh = [ len/2, 2, 1, 1, 1, 1, 1 ];
			f = createBenchmark( len, sh, t1, t2 );
			bench( pkg+':ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+order+',yorder='+order+',xtype='+t1+',ytype='+t2, f );

			sh = [ 1, 1, 1, 1, 1, 2, len/2 ];
			f = createBenchmark( len, sh, t1, t2 );
			bench( pkg+':ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+order+',yorder='+order+',xtype='+t1+',ytype='+t2, f );

			len = floor( pow( len, 1.0/7.0 ) );
			sh = [ len, len, len, len, len, len, len ];
			len *= pow( len, 6 );
			f = createBenchmark( len, sh, t1, t2 );
			bench( pkg+':ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+order+',yorder='+order+',xtype='+t1+',ytype='+t2, f );
		}
	}
}

main();