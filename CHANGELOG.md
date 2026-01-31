# CHANGELOG

> Package changelog.

<section class="release" id="v0.3.0">

## 0.3.0 (2026-01-31)

<section class="features">

### Features

-   [`17e89e8`](https://github.com/stdlib-js/stdlib/commit/17e89e85928ef1e38ad554975c62ea96c15c6c04) - generate loops for mostly safe casts
-   [`a360f04`](https://github.com/stdlib-js/stdlib/commit/a360f048dde8429a3ffcc60d36abe9ad33038c73) - add boolean dtype support to `ndarray/base/unary` [(#2587)](https://github.com/stdlib-js/stdlib/pull/2587)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`97fb507`](https://github.com/stdlib-js/stdlib/commit/97fb507addda8bf32be3a3f376d387e528672149) - handle mostly safe casts and refactor loop generation
-   [`4795826`](https://github.com/stdlib-js/stdlib/commit/47958261521f7d00ccd325cb978e55af39b9cbe0) - check for row-major value
-   [`92bf1a1`](https://github.com/stdlib-js/stdlib/commit/92bf1a12b2398ec5823eb3094bdc89f88d9876a7) - use resolved order when computing loop variables
-   [`1473377`](https://github.com/stdlib-js/stdlib/commit/1473377ac4faecd7ff1448fb7972d851c3e8b2a8) - use computed order
-   [`e689326`](https://github.com/stdlib-js/stdlib/commit/e68932672651e213b4cf6500100d7055b794ba82) - use correct stride
-   [`1375823`](https://github.com/stdlib-js/stdlib/commit/1375823f58c93aeac8c687147f40e78d52adec04) - use computed order and fix strides in examples
-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`e2c03c0`](https://github.com/stdlib-js/stdlib/commit/e2c03c048787bde4a01ed8b6968ea6437e9e652a) - **docs:** improve doctests for complex number instances in `ndarray/base/unary` [(#8999)](https://github.com/stdlib-js/stdlib/pull/8999) _(by Aryan kumar, Athan Reines)_
-   [`97fb507`](https://github.com/stdlib-js/stdlib/commit/97fb507addda8bf32be3a3f376d387e528672149) - **fix:** handle mostly safe casts and refactor loop generation _(by Athan Reines)_
-   [`3304071`](https://github.com/stdlib-js/stdlib/commit/33040719d3718582bd866243ced74fb7f5b67a7c) - **test:** provide missing argument _(by Athan Reines)_
-   [`a3e7978`](https://github.com/stdlib-js/stdlib/commit/a3e79786217bf1c9a84875203251af82cc93a222) - **docs:** update markup _(by Athan Reines)_
-   [`905019c`](https://github.com/stdlib-js/stdlib/commit/905019c024611308865950e3d1dd51c642176e82) - **docs:** fix grammar in function descriptions _(by Philipp Burckhardt)_
-   [`17e89e8`](https://github.com/stdlib-js/stdlib/commit/17e89e85928ef1e38ad554975c62ea96c15c6c04) - **feat:** generate loops for mostly safe casts _(by Athan Reines)_
-   [`4795826`](https://github.com/stdlib-js/stdlib/commit/47958261521f7d00ccd325cb978e55af39b9cbe0) - **fix:** check for row-major value _(by Athan Reines)_
-   [`1d2c4e2`](https://github.com/stdlib-js/stdlib/commit/1d2c4e2ef621e2304c5d855c4c8b6ed2f9e9e1ad) - **refactor:** avoid duplicate computation _(by Athan Reines)_
-   [`92bf1a1`](https://github.com/stdlib-js/stdlib/commit/92bf1a12b2398ec5823eb3094bdc89f88d9876a7) - **fix:** use resolved order when computing loop variables _(by Athan Reines)_
-   [`3dd8cb3`](https://github.com/stdlib-js/stdlib/commit/3dd8cb379ea22c4a92d610d146cdd662d3187e27) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`1473377`](https://github.com/stdlib-js/stdlib/commit/1473377ac4faecd7ff1448fb7972d851c3e8b2a8) - **fix:** use computed order _(by Athan Reines)_
-   [`d3289c3`](https://github.com/stdlib-js/stdlib/commit/d3289c3af88a698ed39ee5234c525cfec98c56f5) - **test:** use `zfill` rather than `gfill` to improve performance _(by Athan Reines)_
-   [`b96a6a2`](https://github.com/stdlib-js/stdlib/commit/b96a6a258f9c560073e252b9969095a12723074e) - **test:** add missing tests to `ndarray/base/unary` [(#5821)](https://github.com/stdlib-js/stdlib/pull/5821) _(by Muhammad Haris)_
-   [`ad7c705`](https://github.com/stdlib-js/stdlib/commit/ad7c7056b95d52aac386e81209fbcd7fe8eac81f) - **refactor:** format error message _(by Athan Reines)_
-   [`3938b26`](https://github.com/stdlib-js/stdlib/commit/3938b265e603116448c89fcaa58df70e79d40f59) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`d38fd36`](https://github.com/stdlib-js/stdlib/commit/d38fd36fcf6ac58240b13abe41ceb3046f36a8b2) - **style:** resolve lint errors _(by Athan Reines)_
-   [`e689326`](https://github.com/stdlib-js/stdlib/commit/e68932672651e213b4cf6500100d7055b794ba82) - **fix:** use correct stride _(by Athan Reines)_
-   [`10a14b5`](https://github.com/stdlib-js/stdlib/commit/10a14b576aa39aba24959261860788f82efdcd26) - **docs:** fix description _(by Athan Reines)_
-   [`abf0407`](https://github.com/stdlib-js/stdlib/commit/abf040787f6598438b0100a729a8331b7f80f62f) - **chore:** resolve lint errors in TS files _(by Philipp Burckhardt)_
-   [`1375823`](https://github.com/stdlib-js/stdlib/commit/1375823f58c93aeac8c687147f40e78d52adec04) - **fix:** use computed order and fix strides in examples _(by Athan Reines)_
-   [`5fe7f2e`](https://github.com/stdlib-js/stdlib/commit/5fe7f2e437b3bf7ff82db46944d8f928c7fc4090) - **style:** remove backticks _(by Athan Reines)_
-   [`dab89ca`](https://github.com/stdlib-js/stdlib/commit/dab89ca7cb89b404eef61ae48cfb84afec543222) - **style:** remove backticks _(by Athan Reines)_
-   [`8d4c46b`](https://github.com/stdlib-js/stdlib/commit/8d4c46b10ca912401e0ff0caa37a17cd3c443c2f) - **refactor:** update paths _(by Athan Reines)_
-   [`18b3c79`](https://github.com/stdlib-js/stdlib/commit/18b3c79c5035c7082618b7379cd6576e64393a96) - **refactor:** update paths _(by Athan Reines)_
-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`a360f04`](https://github.com/stdlib-js/stdlib/commit/a360f048dde8429a3ffcc60d36abe9ad33038c73) - **feat:** add boolean dtype support to `ndarray/base/unary` [(#2587)](https://github.com/stdlib-js/stdlib/pull/2587) _(by Jaysukh Makvana)_
-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - **fix:** update include paths _(by Athan Reines)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 6 people contributed to this release. Thank you to the following contributors:

-   Aryan kumar
-   Athan Reines
-   Gururaj Gurram
-   Jaysukh Makvana
-   Muhammad Haris
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-25)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-15)

<section class="features">

### Features

-   [`c28a16e`](https://github.com/stdlib-js/stdlib/commit/c28a16e50e84bc0fb8dd16b644f83b60248fe3b7) - add `ndarray/base/assign`

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`8c8e3d1`](https://github.com/stdlib-js/stdlib/commit/8c8e3d15f6698c81c75fc94fa10a7e2b9fb8b5d9) - **docs:** update links _(by Athan Reines)_
-   [`5ec7c84`](https://github.com/stdlib-js/stdlib/commit/5ec7c84218508cd2c188764951042c838167bc8f) - **chore:** add TODO _(by Athan Reines)_
-   [`c28a16e`](https://github.com/stdlib-js/stdlib/commit/c28a16e50e84bc0fb8dd16b644f83b60248fe3b7) - **feat:** add `ndarray/base/assign` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`23b99ac`](https://github.com/stdlib-js/stdlib/commit/23b99acc256b4c9034347ed42ba21f202caedda8) - resolve C lint errors
-   [`64a7e92`](https://github.com/stdlib-js/stdlib/commit/64a7e9272da47f0b0a7afd8a5f4d5be613cbfb8d) - add missing variable declaration

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`23b99ac`](https://github.com/stdlib-js/stdlib/commit/23b99acc256b4c9034347ed42ba21f202caedda8) - **fix:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`f290865`](https://github.com/stdlib-js/stdlib/commit/f29086561a2be3125ceac5a4f98b81b30065bf67) - **style:** add missing space _(by Athan Reines)_
-   [`c503012`](https://github.com/stdlib-js/stdlib/commit/c50301205c0ef890c7c446a930faa922db444b97) - **style:** fix indentation _(by Athan Reines)_
-   [`7974538`](https://github.com/stdlib-js/stdlib/commit/79745389154e682f111d371a13870f54cabe6297) - **docs:** fix example requires _(by Athan Reines)_
-   [`9936867`](https://github.com/stdlib-js/stdlib/commit/99368675b7c86eb3c858cb578575bca34250b4c7) - **refactor:** add shebang to script _(by Athan Reines)_
-   [`1982cd2`](https://github.com/stdlib-js/stdlib/commit/1982cd225f5970145499c1746ce04e6f5b5fa064) - **docs:** fix variable name _(by Athan Reines)_
-   [`64a7e92`](https://github.com/stdlib-js/stdlib/commit/64a7e9272da47f0b0a7afd8a5f4d5be613cbfb8d) - **fix:** add missing variable declaration _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-23)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

