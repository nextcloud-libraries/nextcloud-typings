# @nextcloud/typings

[![NPM package](https://img.shields.io/npm/v/@nextcloud/typings?style=for-the-badge)](https://www.npmjs.com/package/@nextcloud/typings)
[![License](https://img.shields.io/npm/l/@nextcloud/typings?color=green&style=for-the-badge)](https://github.com/nextcloud/nextcloud-typings/blob/master/LICENSE)
[![Open issues](https://img.shields.io/github/issues-raw/nextcloud/nextcloud-typings?style=for-the-badge)](https://github.com/nextcloud/nextcloud-typings/issues)

<!--
 - SPDX-FileCopyrightText: 2019-2024 Nextcloud GmbH and Nextcloud contributors
 - SPDX-License-Identifier: GPL-3.0-or-later
-->

Versioned typings for the (internal) JavaScript APIs of Nextcloud used in higher level packages.

## Installation

```sh
npm i -S @nextcloud/typings
```

The typings have to be in the `dependencies` section, not `devDependencies`. See https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#dependencies for details.

## Usage

You can use this package to verify your API usage is compatible with a range of Nextcloud versions

```ts
import type { Nextcloud28, Nextcloud29 } from '@nextcloud/typings'

declare var OC: Nextcloud28.OC | Nextcloud29.OC

OC.L10N.translate('app', 'text')
```

The TypeScript compiler will translate the code above to `OC.L10N.translate("app", "text");` and throws an error if any of the Nextcloud versions in use for the [union type](https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types) do not exist on all interfaces.

It is also possible to import always the latest version using:

```ts
import type { NextcloudLatest } from '@nextcloud/typings'

declare var OCP: NextcloudLatest.OCP
```

When used in modules it is needed to access globals using the window interface,
to extend it for using e.g. `OCP` you can use:

```ts
import type { NextcloudLatest } from '@nextcloud/typings'

declare global {
	interface Window {
		OCP: NextcloudLatest.OCP
	}
}
```
