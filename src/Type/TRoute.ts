import {CacheRouteProps} from "react-router-cache-route";

export interface YRoute{
  path: string,
  name: string,
  component: any,
  // children?: YRoute[],
  children?: boolean,
  when?: 'forward' | 'back' | 'always' | ((props: CacheRouteProps) => boolean)
}

export type YGetRoute = (
  routes: YRoute[],
  base?: string
) => JSX.Element[]