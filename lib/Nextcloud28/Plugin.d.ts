/*!
 * SPDX-FileCopyrightText: 2019-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

interface Plugin {
	name: string
	attach?(targetObject: object, options?: Record<string, unknown>): void
	detach?(targetObject: object, options?: Record<string, unknown>): void
}

export interface Plugins {
	/**
	 * Register plugin
	 *
	 * @param targetName app name / class name to hook into
	 * @param plugin plugin
	 */
	register(targetName: string, plugin: Plugin): void

	/**
	 * Returns all plugin registered to the given target
	 * name / app name / class name.
	 *
	 * @param targetName app name / class name to hook into
	 * @return array of plugins
	 */
	getPlugins(targetName: string): Array<Plugin>

	/**
	 * Call attach() on all plugins registered to the given target name.
	 *
	 * @param targetName app name / class name
	 * @param targetObject to be extended
	 * @param options
	 */
	attach(
		targetName: string,
		targetObject: object,
		options?: Record<string, unknown>,
	): void

	/**
	 * Call detach() on all plugins registered to the given target name.
	 *
	 * @param targetName app name / class name
	 * @param targetObject to be extended
	 * @param options
	 */
	detach(
		targetName: string,
		targetObject: object,
		options?: Record<string, unknown>,
	): void
}
