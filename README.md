# Hello

This repository contains a React application that attempts to use the `quietDeps` Sass option with esbuild-sass-plugin.

## Warnings

The Sass compiler logs warnings when it encounters deprecated syntax.

The `quietDeps` option exists to prevent these warnings when the syntax comes from an external source, such as an npm package.

## This React application

This React application depends on the carbon-components npm package, which contains deprecated Sass syntax.

Despite using `quietDeps`, warnings for dependencies remain.
How can these warnings be silenced?

The relevant files are

| File | Description |
| --- | --- |
| [build.mjs](build.mjs) | Invokes esbuild using esbuild-sass-plugin with `quietDeps` set. |
| [app.js](app.js) | Esbuild entry point.  Imports React and [app.scss](app.scss). |
| [app.scss](app.scss) | Imports Sass files from dependencies with deprecated syntax. |

## Example

This is a build run that shows the warnings for the dependency:

```
% npm run build

> esbuild-sass-plugin-repro@1.0.0 build
> node build.mjs

Deprecation Warning: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.

Recommendation: math.div($px, $carbon--base-font-size) or calc($px / $carbon--base-font-size)

More info and automated migrator: https://sass-lang.com/d/slash-div

   ╷
39 │   @return ($px / $carbon--base-font-size) * 1rem;
   │            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ╵
    node_modules/carbon-components/scss/globals/scss/vendor/@carbon/elements/scss/layout/_convert.scss 39:12     carbon--rem()
    node_modules/carbon-components/scss/globals/scss/vendor/@carbon/elements/scss/layout/_breakpoint.scss 16:23  @import
    node_modules/carbon-components/scss/globals/scss/vendor/@carbon/elements/scss/type/_styles.scss 24:9         @import
    node_modules/carbon-components/scss/globals/scss/_typography.scss 67:9                                       @import
    node_modules/carbon-components/scss/globals/scss/_css--body.scss 9:9                                         @import
    - 1:9                                                                                                        root stylesheet

Deprecation Warning: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.

Recommendation: math.div($width - (2 * $margin), $columns) or calc(($width - (2 * $margin)) / $columns)

More info and automated migrator: https://sass-lang.com/d/slash-div

   ╷
41 │     @return ($width - (2 * $margin)) / $columns;
   │             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ╵
    node_modules/carbon-components/scss/globals/scss/vendor/@carbon/elements/scss/layout/_key-height.scss 41:13  carbon--get-column-width()
    node_modules/carbon-components/scss/globals/scss/vendor/@carbon/elements/scss/layout/_key-height.scss 52:5   @import
    node_modules/carbon-components/scss/globals/scss/vendor/@carbon/elements/scss/layout/layout.scss 12:9        @import
    node_modules/carbon-components/scss/globals/scss/_layout.scss 9:9                                            @import
    node_modules/carbon-components/scss/globals/scss/_tooltip.scss 10:9                                          @import
    node_modules/carbon-components/scss/components/button/_button.scss 12:9                                      @import
    - 2:9                                                                                                        root stylesheet

Deprecation Warning: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.

Recommendation: math.div($px, $base-font-size) or calc($px / $base-font-size)

More info and automated migrator: https://sass-lang.com/d/slash-div

   ╷
44 │   @return ($px / $base-font-size) * 1rem;
   │            ^^^^^^^^^^^^^^^^^^^^^
   ╵
    node_modules/carbon-components/scss/globals/scss/_typography.scss 44:12                                          rem()
    node_modules/carbon-components/scss/components/button/_mixins.scss 19:14                                         button-base()
    node_modules/carbon-components/scss/components/button/_button.scss 22:5                                          button()
    node_modules/carbon-components/scss/components/button/_button.scss 538:3                                         @content
    node_modules/carbon-components/scss/globals/scss/vendor/@carbon/elements/scss/import-once/import-once.scss 23:5  exports()
    node_modules/carbon-components/scss/components/button/_button.scss 537:1                                         @import
    - 2:9                                                                                                            root stylesheet
```
