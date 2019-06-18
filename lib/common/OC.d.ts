/// <reference types="jquery" />

declare namespace Nextcloud.Common {

    interface CurrentUser {
        uid: string | false,
        displayName: string | null,
    }

    interface UrlOptions {
        escape: boolean
    }

    interface Dialogs {
        FILEPICKER_TYPE_CHOOSE: Number;
        FILEPICKER_TYPE_MOVE: Number;
        FILEPICKER_TYPE_COPY: Number;
        FILEPICKER_TYPE_COPY_MOVE: Number;

        filepicker(
            title: string,
            callback: Function,
            multiselect: boolean,
            mimeTypeFilter: Array<string>,
            modal: boolean,
            type: Number): void;
    }

    interface TranslationOptions {
        escaped?: boolean
    }
    interface L10n {
        translate(app: string, text: string, vars?: Object, count?: Number, options?: TranslationOptions): string;
        translatePlural(app: string, textSingular: string, textPlural: string, count: Number, vars?: Object, options?: TranslationOptions): string;
    }

    interface NotificationOptions {
        isHtml?: boolean,
        timeout?: Number,
        type?: string,
    }
    interface Notifications {
        show(text: string, options?: NotificationOptions): JQuery;
        showTemporary(text: string, options?: NotificationOptions): JQuery;
    }

    interface OC {
        appswebroots: any
        config: any
        coreApps: any

        requestToken: string

        getCurrentUser(): CurrentUser;

        getRootPath(): string;
        linkTo(app: string, file: string): string;
        linkToRemoteBase(service: string): string;
        linkToRemote(service: string): string;
        linkToOCS(service: string, version: Number): string;

        generateUrl(url: string, params?: Object, options?: UrlOptions): string;
        filePath(app: string, type: string, file: string): string;
        imagePath(app: string, file: string): string;
        encodePath(path: string): string;

        getLocale(): string;

        dialogs: Dialogs;
        L10N: L10n;
        Notifications: Notifications;

        webroot: string
    }

    function humanFileSize(size: Number, skipSmallSizes: boolean): string;

}
