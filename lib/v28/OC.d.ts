declare namespace Nextcloud.v28 {

	interface OC extends Omit<Nextcloud.v27.OC, 'appSettings'|'addScript'|'addStyle'> {
		/**
		 * 'appSettings', 'addScript', and 'addStyle' were removed in Nextcloud 28
		 */
	}

	interface OCP extends Nextcloud.v27.OCP {
	}

	interface WindowWithGlobals extends Nextcloud.v27.WindowWithGlobals {

	}
}
