<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Unary

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a unary callback to elements in an input ndarray and assign results to elements in an output ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-base-unary
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var unary = require( '@stdlib/ndarray-base-unary' );
```

#### unary( arrays, fcn )

Applies a unary callback to elements in an input ndarray and assigns results to elements in an output ndarray.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

function scale( x ) {
    return x * 10.0;
}

// Create data buffers:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var ybuf = new Float64Array( 6 );

// Define the shape of the input and output arrays:
var shape = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 4, 4, 1 ];
var sy = [ 2, 2, 1 ];

// Define the index offsets:
var ox = 1;
var oy = 0;

// Create the input and output ndarray-like objects:
var x = {
    'dtype': 'float64',
    'data': xbuf,
    'shape': shape,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};
var y = {
    'dtype': 'float64',
    'data': ybuf,
    'shape': shape,
    'strides': sy,
    'offset': oy,
    'order': 'row-major'
};

// Apply the unary function:
unary( [ x, y ], scale );

console.log( y.data );
// => <Float64Array>[ 20.0, 30.0, 60.0, 70.0, 100.0, 110.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing one input ndarray and one output ndarray.
-   **fcn**: unary function to apply.

Each provided ndarray should be an object with the following properties:

-   **dtype**: data type.
-   **data**: data buffer.
-   **shape**: dimensions.
-   **strides**: stride lengths.
-   **offset**: index offset.
-   **order**: specifies whether an ndarray is row-major (C-style) or column major (Fortran-style).

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before applying a unary function in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array-filled' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var abs = require( '@stdlib/math-base-special-abs' );
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var ndarray2array = require( '@stdlib/ndarray-base-to-array' );
var unary = require( '@stdlib/ndarray-base-unary' );

var N = 10;
var x = {
    'dtype': 'generic',
    'data': filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) ),
    'shape': [ 5, 2 ],
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};
var y = {
    'dtype': 'generic',
    'data': filledarray( 0, N, 'generic' ),
    'shape': x.shape.slice(),
    'strides': shape2strides( x.shape, 'column-major' ),
    'offset': 0,
    'order': 'column-major'
};

unary( [ x, y ], abs );
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
console.log( ndarray2array( y.data, y.shape, y.strides, y.offset, y.order ) );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

Character codes for data types:

<!-- The following is auto-generated. Do not manually edit. See scripts/loops.js. -->

<!-- charcodes -->

-   **x**: `bool` (boolean).
-   **c**: `complex64` (single-precision floating-point complex number).
-   **z**: `complex128` (double-precision floating-point complex number).
-   **f**: `float32` (single-precision floating-point number).
-   **d**: `float64` (double-precision floating-point number).
-   **k**: `int16` (signed 16-bit integer).
-   **i**: `int32` (signed 32-bit integer).
-   **s**: `int8` (signed 8-bit integer).
-   **t**: `uint16` (unsigned 16-bit integer).
-   **u**: `uint32` (unsigned 32-bit integer).
-   **b**: `uint8` (unsigned 8-bit integer).

<!-- ./charcodes -->

Function name suffix naming convention:

```text
stdlib_ndarray_<input_data_type>_<output_data_type>[_as_<callback_arg_data_type>_<callback_return_data_type>]
```

For example,

<!-- run-disable -->

```c
void stdlib_ndarray_d_d(...) {...}
```

is a function which accepts one double-precision floating-point input ndarray and one double-precision floating-point output ndarray. In other words, the suffix encodes the function type signature.

To support callbacks whose input arguments and/or return values are of a different data type than the input and/or output ndarray data types, the naming convention supports appending an `as` suffix. For example,

<!-- run-disable -->

```c
void stdlib_ndarray_f_f_as_d_d(...) {...}
```

is a function which accepts one single-precision floating-point input ndarray and one single-precision floating-point output ndarray. However, the callback accepts and returns double-precision floating-point numbers. Accordingly, the input and output values need to be cast using the following conversion sequence

```c
// Convert each input array element to double-precision:
double in1 = (double)x[ i ];

// Evaluate the callback:
double out = f( in1 );

// Convert the callback return value to single-precision:
y[ i ] = (float)out;
```

When the input ndarray and the callback (i.e., the input argument and return value) share the same data type, the `as` suffix can be omitted. For example,

<!-- run-disable -->

```c
void stdlib_ndarray_f_d(...) {...}
```

is a function which accepts one single-precision floating-point input ndarray and one double-precision floating-point output ndarray. The callback is assumed to accept and return single-precision floating-point numbers. Accordingly, the input and output values are cast according to the following conversion sequence

<!-- run-disable -->

```c
// Retrieve each input array element as single-precision:
float in1 = (float)x[ i ];

// Evaluate the callback:
float out = f( in1 );

// Convert the callback return value to double-precision:
y[ i ] = (double)out;
```

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/ndarray/base/unary.h"
```

<!-- The following is auto-generated. Do not manually edit. See scripts/loops.js. -->

<!-- loops -->

#### stdlib_ndarray_b_b( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT8;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 2, 1 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint8_t fcn( const uint8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_b( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_b( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_b_as_u_u( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT8;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 2, 1 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint32_t fcn( const uint32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_b_as_u_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint32_t (*f)(uint32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_b_as_u_u( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint8_t fcn( const uint8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_c_as_b_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex64_t fcn( const uint8_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_c_as_b_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_c_as_b_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_c_as_c_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex64_t fcn( const stdlib_complex64_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_c_as_c_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)(stdlib_complex64_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_c_as_c_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_c_as_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_c_as_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_c_as_z_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint8_t fcn( const uint8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_d_as_b_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const uint8_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_d_as_b_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_d_as_b_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_d_as_d_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const double x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_d_as_d_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_d_as_d_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_f( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint8_t fcn( const uint8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_f_as_b_f( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static float fcn( const uint8_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_f_as_b_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_f_as_b_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_f_as_d_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const double x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_f_as_d_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_f_as_d_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_f_as_f_f( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static float fcn( const float x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_f_as_f_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)(float)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_f_as_f_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint8_t fcn( const uint8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_i_as_b_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const uint8_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_i_as_b_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_i_as_b_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_i_as_i_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_i_as_i_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_i_as_i_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_k( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint8_t fcn( const uint8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_k( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_k( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_k_as_b_k( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int16_t fcn( const uint8_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_k_as_b_k( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_k_as_b_k( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_k_as_i_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_k_as_i_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_k_as_i_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_k_as_k_k( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int16_t fcn( const int16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_k_as_k_k( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)(int16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_k_as_k_k( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_t( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint8_t fcn( const uint8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_t( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_t( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_t_as_b_t( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint16_t fcn( const uint8_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_t_as_b_t( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_t_as_b_t( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_t_as_t_t( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint16_t fcn( const uint16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_t_as_t_t( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)(uint16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_t_as_t_t( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_t_as_u_u( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint32_t fcn( const uint32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_t_as_u_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint32_t (*f)(uint32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_t_as_u_u( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_u( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint8_t fcn( const uint8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_u( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_u_as_b_u( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint32_t fcn( const uint8_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_u_as_b_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint32_t (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_u_as_b_u( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_u_as_u_u( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint32_t fcn( const uint32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_u_as_u_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint32_t (*f)(uint32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_u_as_u_u( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint8_t fcn( const uint8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_z_as_b_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const uint8_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_z_as_b_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(uint8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_z_as_b_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_b_z_as_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_b_z_as_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b_z_as_z_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_c_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex64_t fcn( const stdlib_complex64_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_c_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)(stdlib_complex64_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_c_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_c_c_as_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_c_c_as_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_c_c_as_z_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_c_f_as_c_f( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static float fcn( const stdlib_complex64_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_c_f_as_c_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)(stdlib_complex64_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_c_f_as_c_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_c_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex64_t fcn( const stdlib_complex64_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_c_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)(stdlib_complex64_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_c_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_c_z_as_c_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex64_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_c_z_as_c_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex64_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_c_z_as_c_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_c_z_as_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_c_z_as_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_c_z_as_z_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_d_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const double x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_d_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_d_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_d_i_as_d_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const double x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_d_i_as_d_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_d_i_as_d_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_d_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const double x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_d_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_d_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_d_z_as_d_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const double x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_d_z_as_d_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_d_z_as_d_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_d_z_as_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_d_z_as_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_d_z_as_z_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static float fcn( const float x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)(float)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_c_as_c_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex64_t fcn( const stdlib_complex64_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_c_as_c_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)(stdlib_complex64_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_c_as_c_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_c_as_f_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex64_t fcn( const float x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_c_as_f_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)(float)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_c_as_f_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_c_as_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_c_as_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_c_as_z_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static float fcn( const float x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)(float)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_d_as_d_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const double x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_d_as_d_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_d_as_d_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_d_as_f_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const float x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_d_as_f_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(float)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_d_as_f_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_f( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static float fcn( const float x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)(float)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_f_as_d_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const double x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_f_as_d_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_f_as_d_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_i_as_f_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const float x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_i_as_f_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(float)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_i_as_f_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static float fcn( const float x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)(float)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_z_as_f_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const float x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_z_as_f_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(float)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_z_as_f_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_z_as_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_z_as_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_z_as_z_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_i_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_i_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_i_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_i_d_as_d_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const double x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_i_d_as_d_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_i_d_as_d_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_i_d_as_i_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const int32_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_i_d_as_i_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_i_d_as_i_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_i_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_i_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_i_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_i_u( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_i_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_i_u( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_i_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_i_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_i_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_i_z_as_i_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const int32_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_i_z_as_i_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_i_z_as_i_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_i_z_as_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_i_z_as_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_i_z_as_z_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int16_t fcn( const int16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)(int16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_c_as_c_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex64_t fcn( const stdlib_complex64_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_c_as_c_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)(stdlib_complex64_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_c_as_c_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_c_as_k_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex64_t fcn( const int16_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_c_as_k_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)(int16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_c_as_k_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_c_as_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_c_as_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_c_as_z_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int16_t fcn( const int16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)(int16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_d_as_d_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const double x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_d_as_d_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_d_as_d_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_d_as_k_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const int16_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_d_as_k_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(int16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_d_as_k_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_f( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int16_t fcn( const int16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)(int16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_f_as_d_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const double x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_f_as_d_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_f_as_d_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_f_as_f_f( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static float fcn( const float x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_f_as_f_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)(float)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_f_as_f_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_f_as_k_f( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static float fcn( const int16_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_f_as_k_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)(int16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_f_as_k_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int16_t fcn( const int16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)(int16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_i_as_i_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_i_as_i_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_i_as_i_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_i_as_k_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int16_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_i_as_k_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_i_as_k_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_k( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int16_t fcn( const int16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_k( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)(int16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_k( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_k_as_i_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_k_as_i_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_k_as_i_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_t( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int16_t fcn( const int16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_t( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)(int16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_t( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_t_as_i_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_t_as_i_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_t_as_i_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_u( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int16_t fcn( const int16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)(int16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_u( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_u_as_i_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_u_as_i_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_u_as_i_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int16_t fcn( const int16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)(int16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_z_as_k_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const int16_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_z_as_k_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(int16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_z_as_k_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_z_as_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_z_as_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_z_as_z_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_b( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT8;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 2, 1 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int8_t fcn( const int8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_b( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_b( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int8_t fcn( const int8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_c_as_c_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex64_t fcn( const stdlib_complex64_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_c_as_c_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)(stdlib_complex64_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_c_as_c_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_c_as_s_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex64_t fcn( const int8_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_c_as_s_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_c_as_s_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_c_as_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_c_as_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_c_as_z_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int8_t fcn( const int8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_d_as_d_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const double x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_d_as_d_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_d_as_d_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_d_as_s_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const int8_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_d_as_s_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_d_as_s_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_f( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int8_t fcn( const int8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_f_as_d_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const double x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_f_as_d_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_f_as_d_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_f_as_f_f( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static float fcn( const float x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_f_as_f_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)(float)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_f_as_f_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_f_as_s_f( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static float fcn( const int8_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_f_as_s_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_f_as_s_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int8_t fcn( const int8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_i_as_i_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_i_as_i_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_i_as_i_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_i_as_s_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int8_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_i_as_s_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_i_as_s_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_k( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int8_t fcn( const int8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_k( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_k( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_k_as_i_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_k_as_i_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_k_as_i_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_k_as_k_k( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int16_t fcn( const int16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_k_as_k_k( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)(int16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_k_as_k_k( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_k_as_s_k( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int16_t fcn( const int8_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_k_as_s_k( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_k_as_s_k( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_s( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT8;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 2, 1 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int8_t fcn( const int8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_s( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_s( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_s_as_i_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT8;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 2, 1 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_s_as_i_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_s_as_i_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_t( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int8_t fcn( const int8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_t( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_t( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_t_as_i_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_t_as_i_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_t_as_i_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_u( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int8_t fcn( const int8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_u( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_u_as_i_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_u_as_i_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_u_as_i_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int8_t fcn( const int8_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_z_as_s_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const int8_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_z_as_s_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(int8_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_z_as_s_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s_z_as_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_s_z_as_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s_z_as_z_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint16_t fcn( const uint16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)(uint16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_c_as_c_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex64_t fcn( const stdlib_complex64_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_c_as_c_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)(stdlib_complex64_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_c_as_c_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_c_as_t_c( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex64_t fcn( const uint16_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_c_as_t_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)(uint16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_c_as_t_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_c_as_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_c_as_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_c_as_z_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint16_t fcn( const uint16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)(uint16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_d_as_d_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const double x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_d_as_d_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_d_as_d_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_d_as_t_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const uint16_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_d_as_t_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(uint16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_d_as_t_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_f( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint16_t fcn( const uint16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)(uint16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_f_as_d_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const double x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_f_as_d_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_f_as_d_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_f_as_f_f( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static float fcn( const float x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_f_as_f_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)(float)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_f_as_f_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_f_as_t_f( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static float fcn( const uint16_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_f_as_t_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)(uint16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_f_as_t_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint16_t fcn( const uint16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)(uint16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_i_as_i_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const int32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_i_as_i_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(int32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_i_as_i_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_i_as_t_i( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static int32_t fcn( const uint16_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_i_as_t_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)(uint16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_i_as_t_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_t( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint16_t fcn( const uint16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_t( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)(uint16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_t( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_t_as_u_u( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 4, 2 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint32_t fcn( const uint32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_t_as_u_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint32_t (*f)(uint32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_t_as_u_u( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_u( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint16_t fcn( const uint16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)(uint16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_u( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_u_as_t_u( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint32_t fcn( const uint16_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_u_as_t_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint32_t (*f)(uint16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_u_as_t_u( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_u_as_u_u( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint32_t fcn( const uint32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_u_as_u_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint32_t (*f)(uint32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_u_as_u_u( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint16_t fcn( const uint16_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)(uint16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_z_as_t_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const uint16_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_z_as_t_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(uint16_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_z_as_t_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_z_as_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_z_as_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_z_as_z_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_u_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint32_t fcn( const uint32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_u_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint32_t (*f)(uint32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_u_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_u_d_as_d_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const double x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_u_d_as_d_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(double)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_u_d_as_d_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_u_d_as_u_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const uint32_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_u_d_as_u_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(uint32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_u_d_as_u_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_u_u( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 8, 4 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint32_t fcn( const uint32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_u_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint32_t (*f)(uint32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_u_u( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_u_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static uint32_t fcn( const uint32_t x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_u_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint32_t (*f)(uint32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_u_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_u_z_as_u_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const uint32_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_u_z_as_u_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(uint32_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_u_z_as_u_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_u_z_as_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_u_z_as_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_u_z_as_z_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_x_x( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_BOOL;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 2, 1 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const bool x ) {
    return x;
}

// Apply the callback:
int8_t status = stdlib_ndarray_x_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(bool)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_x_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_z_d_as_z_d( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 32, 16 };
int64_t sy[] = { 16, 8 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static double fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_z_d_as_z_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_z_d_as_z_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_z_z( \*arrays\[], \*fcn )

Applies a unary callback to an input ndarray and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 32, 16 };
int64_t sy[] = { 32, 16 };

// Define the offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static stdlib_complex128_t fcn( const stdlib_complex128_t x ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_z_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)(stdlib_complex128_t)` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_z_z( struct ndarray *arrays[], void *fcn );
```

<!-- ./loops -->

<!-- macros -->

<!-- TODO: consider documenting macros -->

<!-- ./macros -->

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

* * *

<section class="examples">

### Examples

```c
#include "stdlib/ndarray/base/unary.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <inttypes.h>

static void print_ndarray_contents( const struct ndarray *x ) {
    int64_t i;
    int8_t s;
    double v;

    for ( i = 0; i < stdlib_ndarray_length( x ); i++ ) {
        s = stdlib_ndarray_iget_float64( x, i, &v );
        if ( s != 0 ) {
            fprintf( stderr, "Unable to resolve data element.\n" );
            exit( EXIT_FAILURE );
        }
        fprintf( stdout, "data[%"PRId64"] = %lf\n", i, v );
    }
}

static double scale( const double x ) {
    return x + 10.0;
}

int main( void ) {
    // Define the ndarray data type:
    enum STDLIB_NDARRAY_DTYPE dtype = STDLIB_NDARRAY_FLOAT64;

    // Create underlying byte arrays:
    uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
    uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

    // Define the number of dimensions:
    int64_t ndims = 3;

    // Define the array shapes:
    int64_t shape[] = { 2, 2, 2 };

    // Define the strides:
    int64_t sx[] = { 32, 16, 8 };
    int64_t sy[] = { 32, 16, 8 };

    // Define the offsets:
    int64_t ox = 0;
    int64_t oy = 0;

    // Define the array order:
    enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

    // Specify the index mode:
    enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

    // Specify the subscript index modes:
    int8_t submodes[] = { imode };
    int64_t nsubmodes = 1;

    // Create an input ndarray:
    struct ndarray *x = stdlib_ndarray_allocate( dtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
    if ( x == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( EXIT_FAILURE );
    }

    // Create an output ndarray:
    struct ndarray *y = stdlib_ndarray_allocate( dtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
    if ( y == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( EXIT_FAILURE );
    }

    // Define an array containing the ndarrays:
    struct ndarray *arrays[] = { x, y };

    // Apply the callback:
    int8_t status = stdlib_ndarray_d_d( arrays, (void *)scale );
    if ( status != 0 ) {
        fprintf( stderr, "Error during computation.\n" );
        exit( EXIT_FAILURE );
    }

    // Print the results:
    print_ndarray_contents( y );
    fprintf( stdout, "\n" );

    // Free allocated memory:
    stdlib_ndarray_free( x );
    stdlib_ndarray_free( y );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-dispatch`][@stdlib/ndarray/dispatch]</span><span class="delimiter">: </span><span class="description">create an ndarray function interface which performs multiple dispatch.</span>

</section>

<!-- /.related -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-unary.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-unary

[test-image]: https://github.com/stdlib-js/ndarray-base-unary/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-unary/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-unary/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-unary?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-unary.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-unary/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-unary/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-unary/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-unary/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-unary/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-unary/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-unary/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-unary/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-unary/main/LICENSE

<!-- <related-links> -->

[@stdlib/ndarray/dispatch]: https://github.com/stdlib-js/ndarray-dispatch

<!-- </related-links> -->

</section>

<!-- /.links -->
