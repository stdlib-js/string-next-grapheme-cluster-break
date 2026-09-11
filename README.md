<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# nextGraphemeClusterBreak

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the next extended grapheme cluster break in a string after a specified position.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->





<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->



<!-- Package usage examples. -->



<!-- Section for describing a command-line interface. -->



<section class="cli">



<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/string-next-grapheme-cluster-break-cli
```

</section>
<!-- CLI usage documentation. -->


<section class="usage">

## Usage

```text
Usage: next-grapheme-cluster-break [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --from index          Starting search position in string. Default: 0.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

## Examples

```bash
$ next-grapheme-cluster-break --from=1 अनुच्छेद
3
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'अनुच्छेद' | next-grapheme-cluster-break --from=1
3
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

## See Also

-   <span class="package-name">[`@stdlib/string-next-grapheme-cluster-break`][@stdlib/string-next-grapheme-cluster-break]</span><span class="delimiter">: </span><span class="description">return the next extended grapheme cluster break in a string after a specified position.</span>
-   <span class="package-name">[`@stdlib/string-num-grapheme-clusters`][@stdlib/string/num-grapheme-clusters]</span><span class="delimiter">: </span><span class="description">return the number of grapheme clusters in a string.</span>
-   <span class="package-name">[`@stdlib/string-prev-grapheme-cluster-break`][@stdlib/string/prev-grapheme-cluster-break]</span><span class="delimiter">: </span><span class="description">return the previous extended grapheme cluster break in a string before a specified position.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-next-grapheme-cluster-break-cli.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-next-grapheme-cluster-break-cli

[test-image]: https://github.com/stdlib-js/string-next-grapheme-cluster-break/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-next-grapheme-cluster-break/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-next-grapheme-cluster-break/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-next-grapheme-cluster-break?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-next-grapheme-cluster-break.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-next-grapheme-cluster-break/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-next-grapheme-cluster-break#cli
[cli-url]: https://github.com/stdlib-js/string-next-grapheme-cluster-break/tree/cli
[@stdlib/string-next-grapheme-cluster-break]: https://github.com/stdlib-js/string-next-grapheme-cluster-break/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-next-grapheme-cluster-break/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-next-grapheme-cluster-break/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-next-grapheme-cluster-break/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-next-grapheme-cluster-break/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-next-grapheme-cluster-break/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-next-grapheme-cluster-break/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-next-grapheme-cluster-break/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-next-grapheme-cluster-break/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[utf-16]: https://en.wikipedia.org/wiki/UTF-16

<!-- <related-links> -->

[@stdlib/string/num-grapheme-clusters]: https://github.com/stdlib-js/string-num-grapheme-clusters

[@stdlib/string/prev-grapheme-cluster-break]: https://github.com/stdlib-js/string-prev-grapheme-cluster-break

<!-- </related-links> -->

</section>

<!-- /.links -->
