/*!
 * SPDX-FileCopyrightText: 2019-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import type { Dialogs, Notifications, PasswordConfirmation } from './Dialogs.d.ts'
import type { Files } from './Files.d.ts'
import type { L10n } from './L10N.d.ts'
import type { Plugins } from './Plugin.d.ts'
import type { Util } from './Util.d.ts'

interface CurrentUser {
	uid: string | false
	displayName: string | null
}

interface UrlOptions {
	escape: boolean
}

export interface OC {
	appswebroots: string[] | false
	coreApps: string[]
	config: Record<string, unknown>
	debug: boolean
	requestToken: string
	menuSpeed: number
	webroot: string

	TAG_FAVORITE: string

	PERMISSION_NONE: 0
	PERMISSION_READ: 1
	PERMISSION_UPDATE: 2
	PERMISSION_CREATE: 4
	PERMISSION_DELETE: 8
	PERMISSION_SHARE: 16
	PERMISSION_ALL: 31

	getCurrentUser(): CurrentUser
	isUserAdmin(): boolean

	getRootPath(): string
	linkTo(app: string, file: string): string
	linkToRemoteBase(service: string): string
	linkToRemote(service: string): string
	linkToOCS(service: string, version: number): string

	generateUrl(url: string, params?: object, options?: UrlOptions): string
	filePath(app: string, type: string, file: string): string
	imagePath(app: string, file: string): string
	encodePath(path: string): string

	getLocale(): string
	getLanguage(): string
	getCanonicalLocale(): string

	Files: Files
	Plugins: Plugins
	Util: Util

	/**
	 * @deprecated Use `@nextcloud/dialogs` instead
	 */
	dialogs: Dialogs
	/**
	 * @deprecated Use `@nextcloud/l10n` instead
	 */
	L10N: L10n
	/**
	 * @deprecated Use `@nextcloud/dialogs` instead
	 */
	Notifications: Notifications
	/**
	 * @deprecated Use `@nextcloud/password-confirmation` instead
	 */
	PasswordConfirmation: PasswordConfirmation
}
