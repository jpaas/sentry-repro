fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## Android

### android badge_icons

```sh
[bundle exec] fastlane android badge_icons
```

Adds badging to icon for non-production builds

### android pre_release_checks

```sh
[bundle exec] fastlane android pre_release_checks
```

Perform pre-release checks

### android release_build

```sh
[bundle exec] fastlane android release_build
```

Create a release build, without uploading

### android release_build_upload

```sh
[bundle exec] fastlane android release_build_upload
```

Create and release a build to Google Play for internal testing

----


## iOS

### ios pre_release_checks

```sh
[bundle exec] fastlane ios pre_release_checks
```

Perform pre-release checks

### ios release_build

```sh
[bundle exec] fastlane ios release_build
```

Create a release build, without uploading

### ios release_build_sentry

```sh
[bundle exec] fastlane ios release_build_sentry
```

Create release build (without uploading) and upload artifacts to Sentry

### ios upload_dsyms_to_sentry

```sh
[bundle exec] fastlane ios upload_dsyms_to_sentry
```

Upload any iOS dsyms laying about to Sentry

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
