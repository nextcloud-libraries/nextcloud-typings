declare namespace Nextcloud.v24 {

    type FilePickerFilter = (entry: Nextcloud.v19.FileInfo) => boolean

    interface FilePickerOptions extends Nextcloud.v17.FilePickerOptions {
        filter: FilePickerFilter
    }

    type OC = Nextcloud.v23.OC & {
        dialogs: {
            filepicker(
                title: string,
                callback: Function,
                multiselect?: boolean,
                mimeTypeFilter?: Array<string>,
                modal?: boolean,
                type?: number,
                path?: string,
                options?: FilePickerOptions,
            ): void
        }
    }

    interface OCP extends Nextcloud.v23.OCP {

    }

    interface WindowWithGlobals extends Nextcloud.Common.DayMonthConstants, Window {

    }
}
