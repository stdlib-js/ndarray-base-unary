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

#ifndef STDLIB_NDARRAY_BASE_UNARY_U_D_AS_D_D_H
#define STDLIB_NDARRAY_BASE_UNARY_U_D_AS_D_D_H

#include "stdlib/ndarray/ctor.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to an unsigned 32-bit integer input ndarray and assigns results to elements in a double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a zero-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a zero-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_0d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a one-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a one-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_1d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a two-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a two-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_2d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a two-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a two-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_2d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a three-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a three-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_3d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a three-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a three-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_3d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a four-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a four-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_4d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a four-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a four-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_4d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a five-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a five-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_5d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a five-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a five-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_5d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a six-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a six-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_6d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a six-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a six-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_6d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a seven-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a seven-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_7d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a seven-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a seven-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_7d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to an eight-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in an eight-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_8d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to an eight-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in an eight-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_8d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a nine-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a nine-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_9d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a nine-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a nine-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_9d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a ten-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a ten-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_10d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to a ten-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in a ten-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_10d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning double-precision floating-point numbers to an n-dimensional unsigned 32-bit integer input ndarray and assigns results to elements in an n-dimensional double-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_u_d_as_d_d_nd( struct ndarray *arrays[], void *fcn );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_UNARY_U_D_AS_D_D_H
