/// <reference types="jquery" />
/// <reference path="../common/OC.d.ts" />

declare namespace Nextcloud.v16 {

    interface OC extends Nextcloud.Common.OC {

    }

    function humanFileSize(size: Number, skipSmallSizes: boolean): string;

}
