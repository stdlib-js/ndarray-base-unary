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

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

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

Each provided ndarray should be an `object` with the following properties:

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
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var ndarray2array = require( '@stdlib/ndarray-base-to-array' );
var unary = require( '@stdlib/ndarray-base-unary' );

function scale( x ) {
    return x * 10;
}

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

unary( [ x, y ], scale );
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

-   **d**: `float64` (double-precision floating-point number).
-   **f**: `float32` (single-precision floating-point number).
-   **c**: `complex64` (single-precision floating-point complex number).
-   **z**: `complex128` (double-precision floating-point complex number).
-   **s**: `int8` (signed 8-bit integer).
-   **b**: `uint8` (unsigned 8-bit integer).
-   **k**: `int16` (signed 16-bit integer).
-   **t**: `uint16` (unsigned 16-bit integer).
-   **i**: `int32` (signed 32-bit integer).
-   **u**: `uint32` (unsigned 32-bit integer).
-   **l**: `int64` (signed 64-bit integer).
-   **v**: `uint64` (unsigned 64-bit integer).
-   **x**: `boolean`.

Function name suffix naming convention:

```text
stdlib_ndarray_<input_data_type>_<output_data_type>[_as_<callback_arg_data_type>_<callback_return_data_type>]
```

For example,

```c
void stdlib_ndarray_d_d(...) {...}
```

is a function which accepts one double-precision floating-point input ndarray and one double-precision floating-point output ndarray. In other words, the suffix encodes the function type signature.

To support callbacks whose input arguments and/or return values are of a different data type than the input and/or output ndarray data types, the naming convention supports appending an `as` suffix. For example,

```c
void stdlib_ndarray_f_f_as_d_d(...) {...}
```

is a function which accepts one single-precision floating-point input ndarray and one single-precision floating-point output ndarray. However, the callback accepts and returns double-precision floating-point numbers. Accordingly, the input and output values need to be cast using the following conversion sequence

```c
// Convert each input array element to double-precision:
double dxi = (double)fx[ i ];

// Evaluate the callback:
double dyi = f( dxi );

// Convert the callback return value to single-precision:
fy[ i ] = (float)dyi;
```

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/ndarray/base/unary.h"
```

<!-- NOTE: keep the following in alphabetical order -->

* * *

FIXME: add docs for the loop interfaces

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
// FIXME: add example
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray/dispatch`][@stdlib/ndarray/dispatch]</span><span class="delimiter">: </span><span class="description">create an ndarray function interface which performs multiple dispatch.</span>

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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-unary/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-unary/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-unary/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base-unary/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-unary/main/LICENSE

<!-- <related-links> -->

[@stdlib/ndarray/dispatch]: https://github.com/stdlib-js/ndarray-dispatch

<!-- </related-links> -->

</section>

<!-- /.links -->
