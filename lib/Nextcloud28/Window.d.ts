/*!
 * SPDX-FileCopyrightText: 2019-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

interface DayMonthConstants {
	firstDay: number
	dayNames: string[]
	dayNamesShort: string[]
	dayNamesMin: string[]
	monthNames: string[]
	monthNamesShort: string[]
}

export interface WindowGlobals extends DayMonthConstants {}
