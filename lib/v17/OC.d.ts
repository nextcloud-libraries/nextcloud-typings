/// <reference types="jquery" />

declare namespace Nextcloud.v17 {

    interface OC extends Nextcloud.Common.OC {

    }

    function humanFileSize(size: Number, skipSmallSizes: boolean): string;

}
