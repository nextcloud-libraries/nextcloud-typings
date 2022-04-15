/// <reference types="jquery" />

declare namespace Nextcloud.v19 {

    type OC = Nextcloud.v18.OC & {
        Files: {
            FileInfo: {
                quotaAvailableBytes: number
            }
        }
    }

    interface OCP extends Nextcloud.v18.OCP {

    }

    interface WindowWithGlobals extends Nextcloud.Common.DayMonthConstants, Window {

    }

}
