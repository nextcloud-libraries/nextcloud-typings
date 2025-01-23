/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */	
declare namespace Nextcloud.v31 {

	interface OC extends Nextcloud.v30.OC {
		// Nothing changed
	}

	interface FilesApp {
		readonly reload: () => Promise<void>
	}

	interface OCP extends Omit<Nextcloud.v30.OCP, 'Files'> {
		Files: {
			App: FilesApp
			Router: Nextcloud.v28.FilesRouter
			Navigation: Nextcloud.v28.FilesNavigation
		}
	}

	interface WindowWithGlobals extends Nextcloud.v30.WindowWithGlobals {
		// Nothing changed
	}
}
