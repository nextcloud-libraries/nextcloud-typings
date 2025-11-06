/*!
 * SPDX-FileCopyrightText: 2019-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

type Nullable<T> = null | T

declare enum Permission {
	None = 0,
	Create = 4,
	Read = 1,
	Update = 2,
	Delete = 8,
	Share = 16,
	All = 31,
}

export interface FileInfo {
	id: Nullable<number>
	name: Nullable<string>
	/**
	 * Absolute path of the containing directory
	 */
	path: Nullable<string>
	mimetype: Nullable<string>
	/**
	 * URL which overrides the mime type icon
	 */
	icon: Nullable<string>
	permissions: Nullable<Permission>
	mtime: Nullable<number>
	etag: Nullable<string>
	mountType: Nullable<'external-root' | 'shared' | 'shared-root'>
	hasPreview: boolean
	sharePermissions: Nullable<Permission>
	quotaAvailableBytes: number
}

type FilePickerFilter = (entry: FileInfo) => boolean

interface FilePickerOptions {
	allowDirectoryChooser: boolean
	filter: FilePickerFilter
}

export interface FilePicker {
	FILEPICKER_TYPE_CHOOSE: number
	FILEPICKER_TYPE_MOVE: number
	FILEPICKER_TYPE_COPY: number
	FILEPICKER_TYPE_COPY_MOVE: number

	filepicker(
		title: string,
		callback: (nodes: string | string[], type: number) => void,
		multiselect?: boolean,
		mimeTypeFilter?: Array<string>,
		modal?: boolean,
		type?: number,
		path?: string,
		options?: FilePickerOptions,
	): void
}
