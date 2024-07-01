/*!
 * SPDX-FileCopyrightText: 2019-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import type { Accessibility } from './Accessibility.d.ts'
import type { InitialState } from './InitialState.d.ts'

export interface OCP {
	InitialState: InitialState
	/**
	 * @since 25.0.0
	 */
	Accessibility: Accessibility
}
