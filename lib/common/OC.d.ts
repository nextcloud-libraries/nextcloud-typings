/// <reference types="jquery" />

declare namespace Nextcloud.Common {

    type Nullable<T> = null | T

    interface CurrentUser {
        uid: string | false,
        displayName: string | null,
    }

    interface UrlOptions {
        escape: boolean
    }

    interface Dialogs {
        FILEPICKER_TYPE_CHOOSE: number;
        FILEPICKER_TYPE_MOVE: number;
        FILEPICKER_TYPE_COPY: number;
        FILEPICKER_TYPE_COPY_MOVE: number;

        filepicker(
            title: string,
            callback: Function,
            multiselect?: boolean,
            mimeTypeFilter?: Array<string>,
            modal?: boolean,
            type?: number,
            path?: string): void;
    }

    interface TranslationOptions {
        escape?: boolean
    }
    interface L10n {
        translate(app: string, text: string, vars?: object, count?: number, options?: TranslationOptions): string;
        translatePlural(app: string, textSingular: string, textPlural: string, count: number, vars?: object, options?: TranslationOptions): string;
    }

    interface NotificationOptions {
        isHtml?: boolean,
        timeout?: number,
        type?: string,
    }
    interface Notifications {
        show(text: string, options?: NotificationOptions): JQuery;
        showTemporary(text: string, options?: NotificationOptions): JQuery;
    }

    interface PasswordConfirmationOptions {
        title?: string
        text?: string
        confirm?: string
        label?: string
        error?: string
    }
    interface PasswordConfirmation {
        requiresPasswordConfirmation(): boolean
        requirePasswordConfirmation(callback?: () => void, options?: PasswordConfirmationOptions, rejectCallback?: () => void): void
    }

    interface Files {
        FileInfo: FileInfo
    }

    enum Permission {
        None = 0,
        Create = 4,
        Read = 1,
        Update = 2,
        Delete = 8,
        Share = 16,
        All = 31,
    }

    interface FileInfo {
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
     }

    interface OC {
        appswebroots: any
        config: any
        coreApps: any

        requestToken: string

        getCurrentUser(): CurrentUser;
        isUserAdmin(): boolean;

        getRootPath(): string;
        linkTo(app: string, file: string): string;
        linkToRemoteBase(service: string): string;
        linkToRemote(service: string): string;
        linkToOCS(service: string, version: number): string;

        generateUrl(url: string, params?: object, options?: UrlOptions): string;
        filePath(app: string, type: string, file: string): string;
        imagePath(app: string, file: string): string;
        encodePath(path: string): string;

        getLocale(): string;
        getLanguage(): string;
        getCanonicalLocale(): string;

        dialogs: Dialogs;
        L10N: L10n;
        Notifications: Notifications;
        PasswordConfirmation: PasswordConfirmation;
        Files: Files;

        webroot: string
    }

    interface InitialState {
        loadState<T>(appId: string, key: string): T
    }

    interface OCP {
        InitialState: InitialState
    }

    interface humanFileSize {
        (size: number, skipSmallSizes: boolean): string;
    }

    interface DayMonthConstants {
        firstDay: number
        dayNames: string[]
        dayNamesShort: string[]
        dayNamesMin: string[]
        monthNames: string[]
        monthNamesShort: string[]
    }
}
