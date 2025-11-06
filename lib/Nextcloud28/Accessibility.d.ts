/*!
 * SPDX-FileCopyrightText: 2019-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * @since 25.0.0
 */
export interface Accessibility {
	/** Whether the user opted-out of shortcuts so that they should not be registered */
	disableKeyboardShortcuts(): boolean
}
