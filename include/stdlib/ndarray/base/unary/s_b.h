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

#ifndef STDLIB_NDARRAY_BASE_UNARY_S_B_H
#define STDLIB_NDARRAY_BASE_UNARY_S_B_H

#include "stdlib/ndarray/ctor.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in an unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a zero-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a zero-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_0d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a one-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a one-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_1d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a two-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a two-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_2d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a two-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a two-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_2d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a three-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a three-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_3d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a three-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a three-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_3d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a four-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a four-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_4d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a four-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a four-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_4d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a five-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a five-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_5d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a five-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a five-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_5d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a six-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a six-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_6d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a six-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a six-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_6d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a seven-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a seven-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_7d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a seven-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a seven-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_7d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to an eight-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in an eight-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_8d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to an eight-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in an eight-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_8d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a nine-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a nine-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_9d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a nine-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a nine-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_9d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a ten-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a ten-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_10d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to a ten-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in a ten-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_10d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 8-bit integers to an n-dimensional signed 8-bit integer input ndarray, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in an n-dimensional unsigned 8-bit integer output ndarray.
*/
int8_t stdlib_ndarray_s_b_nd( struct ndarray *arrays[], void *fcn );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_UNARY_S_B_H
