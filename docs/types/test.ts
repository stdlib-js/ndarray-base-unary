/*
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

/// <reference types="@stdlib/types"/>

import { ndarray } from '@stdlib/types/ndarray';
import unary = require( './index' );

/**
* Mock function to create an ndarray-like object.
*
* @returns ndarray-like object
*/
function array(): ndarray {
	const obj: ndarray = {
		'byteLength': 80,
		'BYTES_PER_ELEMENT': 8,
		'data': new Float64Array( 10 ),
		'dtype': 'float64',
		'flags': {
			'ROW_MAJOR_CONTIGUOUS': true,
			'COLUMN_MAJOR_CONTIGUOUS': false
		},
		'length': 10,
		'ndims': 1,
		'offset': 0,
		'order': 'row-major',
		'shape': [ 10 ],
		'strides': [ 1 ],
		'get': (): number => 0,
		'set': (): ndarray => obj
	};
	return obj;
}

/**
* Evaluates the identity function.
*
* @param x - input value
* @returns input value
*/
function identity( x: number ): number {
	return x;
}


// TESTS //

// The function returns `undefined`...
{
	const x = array();
	const y = array();
	const arrays = [ x, y ];

	unary( arrays, identity ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing ndarray-like objects...
{
	unary( 5, identity ); // $ExpectError
	unary( true, identity ); // $ExpectError
	unary( false, identity ); // $ExpectError
	unary( null, identity ); // $ExpectError
	unary( undefined, identity ); // $ExpectError
	unary( {}, identity ); // $ExpectError
	unary( [ 1 ], identity ); // $ExpectError
	unary( ( x: number ): number => x, identity ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a unary function...
{
	const x = array();
	const y = array();
	const arrays = [ x, y ];

	unary( arrays, '10' ); // $ExpectError
	unary( arrays, 5 ); // $ExpectError
	unary( arrays, true ); // $ExpectError
	unary( arrays, false ); // $ExpectError
	unary( arrays, null ); // $ExpectError
	unary( arrays, undefined ); // $ExpectError
	unary( arrays, [] ); // $ExpectError
	unary( arrays, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = array();
	const y = array();
	const arrays = [ x, y ];

	unary(); // $ExpectError
	unary( arrays ); // $ExpectError
	unary( arrays, identity, 10 ); // $ExpectError
}
