/*!
 * SPDX-FileCopyrightText: 2019-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import type jQuery from 'jquery'
import type { FilePicker } from './FilePicker.d.ts'

interface NotificationOptions {
	isHtml?: boolean
	timeout?: number
	type?: string
}

export interface Notifications {
	show(text: string, options?: NotificationOptions): typeof jQuery
	showTemporary(text: string, options?: NotificationOptions): typeof jQuery
}

interface PasswordConfirmationOptions {
	title?: string
	text?: string
	confirm?: string
	label?: string
	error?: string
}

export interface PasswordConfirmation {
	requiresPasswordConfirmation(): boolean
	requirePasswordConfirmation(
		callback?: () => void,
		options?: PasswordConfirmationOptions,
		rejectCallback?: () => void,
	): void
}

export interface Dialogs extends FilePicker {}
