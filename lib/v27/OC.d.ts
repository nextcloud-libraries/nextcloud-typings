import { Route } from "vue-router";

declare global {
    namespace Nextcloud.v27 {
        interface FilesRouter {
            /**
            * Trigger a route change on the files app
            * 
            * @param path the url path, eg: '/trashbin?dir=/Deleted'
            * @param replace replace the current history (default false)
            * @see https://router.vuejs.org/guide/essentials/navigation.html#navigate-to-a-different-location
            */
            goTo(path: string, replace?: boolean): Promise<Route>;
        
            /**
             * Trigger a route change on the files App
             *
             * @param name the route name
             * @param params the route parameters
             * @param query the url query parameters
             * @param replace replace the current history
             * @see https://router.vuejs.org/guide/essentials/navigation.html#navigate-to-a-different-location
             */
            goToRoute(
                name?: string,
                params?: Record<string, string>,
                query?: Record<string, string | (string | null)[] | null | undefined>,
                replace?: boolean,
            ): Promise<Route>;
        }

        interface OC extends Nextcloud.v26.OC {

        }

        interface OCP extends Nextcloud.v26.OCP {
            Files: {
                Router: FilesRouter
            }
        }

        interface WindowWithGlobals extends Nextcloud.Common.DayMonthConstants, Window {

        }
    }
}
