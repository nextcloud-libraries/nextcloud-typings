/*!
 * SPDX-FileCopyrightText: 2019-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

interface TranslationOptions {
	escape?: boolean
}
export interface L10n {
	translate(
		app: string,
		text: string,
		vars?: object,
		count?: number,
		options?: TranslationOptions,
	): string
	translatePlural(
		app: string,
		textSingular: string,
		textPlural: string,
		count: number,
		vars?: object,
		options?: TranslationOptions,
	): string
}
