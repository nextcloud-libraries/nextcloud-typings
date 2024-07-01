/*!
 * SPDX-FileCopyrightText: 2019-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

type Dictionary<T> = { [index: string]: T }

interface Vue2RouteMeta extends Record<string | number | symbol, unknown> {}

interface Vue2Route {
	path: string
	name?: string | null
	hash: string
	query: Dictionary<string | (string | null)[]>
	params: Dictionary<string>
	fullPath: string
	matched: unknown[]
	redirectedFrom?: string
	meta?: Vue2RouteMeta
}

export interface FilesRouter {
	/**
	 * Trigger a route change on the files app
	 *
	 * @param path the url path, eg: '/trashbin?dir=/Deleted'
	 * @param replace replace the current history (default false)
	 * @see https://v3.router.vuejs.org/guide/essentials/navigation.html
	 */
	goTo(path: string, replace?: boolean): Promise<Vue2Route>

	/**
	 * Trigger a route change on the files App
	 *
	 * @param name the route name
	 * @param params the route parameters
	 * @param query the url query parameters
	 * @param replace replace the current history
	 * @see https://v3.router.vuejs.org/guide/essentials/navigation.html
	 */
	goToRoute(
		name?: string,
		params?: Record<string, string>,
		query?: Record<string, string | (string | null)[] | null | undefined>,
		replace?: boolean,
	): Promise<Vue2Route>
}

interface ContentsWithRoot {
	/**
	 * `@nextcloud/files` Folder
	 */
	folder: Record<string, unknown>
	/**
	 * `@nextcloud/files` Node[]
	 */
	contents: Record<string, unknown>[]
}

interface FilesNavigationView<Column> {
	/** Unique view ID */
	id: string
	/** Translated view name */
	name: string
	/** The view icon as an inline svg */
	icon: string
	/** The view order */
	order: number
	/** This view column(s). Name and actions are by default always included */
	columns?: Column[]
	/** The empty view element to render your empty content into */
	emptyView?: (div: HTMLDivElement) => void
	/** The parent unique ID */
	parent?: string
	/** This view is sticky (sent at the bottom) */
	sticky?: boolean
	/** This view has children and is expanded or not */
	expanded?: boolean

	/** Translated accessible description of the view */
	caption?: string

	/** Translated title of the empty view */
	emptyTitle?: string
	/** Translated description of the empty view */
	emptyCaption?: string

	/**
	 * Method return the content of the  provided path
	 * This ideally should be a cancellable promise.
	 * promise.cancel(reason) will be called when the directory
	 * change and the promise is not resolved yet.
	 * You _must_ also return the current directory
	 * information alongside with its content.
	 */
	getContents: (path: string) => Promise<ContentsWithRoot>

	/**
	 * Custom params to give to the router on click
	 * If defined, will be treated as a dummy view and
	 * will just redirect and not fetch unknown contents.
	 */
	params?: Record<string, string>

	/**
	 * Will be used as default if the user
	 * haven't customized their sorting column
	 */
	defaultSortKey?: string
}

interface FilesNavigationColumn {
	/** Unique column ID */
	id: string

	/** Translated column title */
	title: string

	/**
	 * The content of the cell. The element will be appended within
	 * `node` parameter is of type `@nextcloud/files` Node
	 */
	render: (
		node: Record<string, unknown>,
		view: FilesNavigationView<this>,
	) => HTMLElement

	/**
	 * Function used to sort Nodes between them
	 * Parameters are of type `@nextcloud/files` Node
	 */
	sort?: (nodeA: Record<string, unknown>, nodeB: Record<string, unknown>) => number
	/**
	 * Custom summary of the column to display at the end of the list.
	 * Will not be displayed if  nothing is provided
	 * `node` parameter is of type `@nextcloud/files` Node
	 */
	summary?: (
		node: Record<string, unknown>[],
		view: FilesNavigationView<this>,
	) => string
}

interface FilesNavigation<View = FilesNavigationView<FilesNavigationColumn>> {
	/**
	 * Register a new navigation view
	 */
	register: (view: View) => void

	/**
	 * Remove a registered view
	 */
	remove: (id: string) => void

	/**
	 * Set the currently active view
	 */
	setActive: (view: View | null) => void

	/**
	 * Current active view
	 */
	active: View | null

	/**
	 * All registered views
	 */
	views: View[]
}

export interface Files {
	/**
	 * @since 27.0.0
	 */
	Router: FilesRouter
	/**
	 * @since 28.0.0
	 */
	Navigation: FilesNavigation
}
