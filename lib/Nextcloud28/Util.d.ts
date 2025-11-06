/*!
 * SPDX-FileCopyrightText: 2019-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

interface UtilHistory {
	/**
	 * Push the current URL parameters to the history stack
	 * and change the visible URL.
	 *
	 * @param params to append to the URL
	 * @param url URL to be used, otherwise the current URL will be used, using the params as query string
	 */
	pushState(params: Record<string, string> | string, url?: string): void

	/**
	 * Replace the current URL parameters on the history stack
	 * and change the visible URL.
	 *
	 * @param {object | string} params to append to the URL
	 * @param url URL to be used
	 */
	replaceState(params: Record<string, string> | string, url: string): void

	/**
	 * Add a popstate handler
	 *
	 * @param handler The handler
	 */
	addOnPopStateHandler(handler: (params: Record<string, unknown>) => void): void

	/**
	 * Parse the query/search part of the URL.
	 *
	 * @return map of parameters
	 */
	parseUrlQuery(): Record<string, string>
}

export interface Util {
	History: UtilHistory

	/**
	 * Make a human file size (2048 to 2 kB)
	 * @param size File size in bytes
	 * @return A human readable file size
	 */
	humanFileSize(size: number, skipSmallSizes: boolean): string

	/**
	 * Returns a file size in bytes from a humanly readable string
	 * Like 2kB to 2048.
	 *
	 * @param  string file size in human readable format
	 * @return Number of bytes or Null if string could not be parsed
	 */
	computerFileSize(string: string): null | number

	formatDate(timestamp: string, format: string): string

	/**
	 * Human readable difference from now
	 */
	relativeModifiedDate(timestamp: string): string

	/**
	 * Returns the width of a generic browser scrollbar
	 *
	 * @return width of scrollbar
	 */
	getScrollBarWidth(): number

	/**
	 * Remove the time component from a given date
	 *
	 * @param date Given date
	 * @return {Date} Date with stripped time
	 */
	stripTime(date: Date): Date

	/**
	 * Compare two strings to provide a natural sort
	 * @param a first string to compare
	 * @param b second string to compare
	 * @return negative if b comes before a, positive if a comes before b
	 * or 0 if the strings are identical
	 */
	naturalSortCompare(a: string, b: string): number

	/**
	 * Calls the callback in a given interval until it returns true
	 * @param callback The callback function
	 * @param interval in milliseconds
	 */
	waitFor(callback: () => boolean, interval: number): void

	/**
	 * Checks if a cookie with the given name is present and is set to the provided value.
	 * @param name name of the cookie
	 * @param value value of the cookie
	 * @return true if the cookie with the given name has the given value
	 */
	isCookieSetToValue(name: string, value: string): boolean
}
