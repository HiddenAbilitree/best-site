/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as BlogPostidImport } from './routes/blog/$postid'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const ProjectsIndexLazyImport = createFileRoute('/projects/')()
const BlogIndexLazyImport = createFileRoute('/blog/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ProjectsIndexLazyRoute = ProjectsIndexLazyImport.update({
  id: '/projects/',
  path: '/projects/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/projects/index.lazy').then((d) => d.Route),
)

const BlogIndexLazyRoute = BlogIndexLazyImport.update({
  id: '/blog/',
  path: '/blog/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/blog/index.lazy').then((d) => d.Route))

const BlogPostidRoute = BlogPostidImport.update({
  id: '/blog/$postid',
  path: '/blog/$postid',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/blog/$postid': {
      id: '/blog/$postid'
      path: '/blog/$postid'
      fullPath: '/blog/$postid'
      preLoaderRoute: typeof BlogPostidImport
      parentRoute: typeof rootRoute
    }
    '/blog/': {
      id: '/blog/'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/projects/': {
      id: '/projects/'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/blog/$postid': typeof BlogPostidRoute
  '/blog': typeof BlogIndexLazyRoute
  '/projects': typeof ProjectsIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/blog/$postid': typeof BlogPostidRoute
  '/blog': typeof BlogIndexLazyRoute
  '/projects': typeof ProjectsIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/blog/$postid': typeof BlogPostidRoute
  '/blog/': typeof BlogIndexLazyRoute
  '/projects/': typeof ProjectsIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/blog/$postid' | '/blog' | '/projects'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/blog/$postid' | '/blog' | '/projects'
  id: '__root__' | '/' | '/blog/$postid' | '/blog/' | '/projects/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  BlogPostidRoute: typeof BlogPostidRoute
  BlogIndexLazyRoute: typeof BlogIndexLazyRoute
  ProjectsIndexLazyRoute: typeof ProjectsIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  BlogPostidRoute: BlogPostidRoute,
  BlogIndexLazyRoute: BlogIndexLazyRoute,
  ProjectsIndexLazyRoute: ProjectsIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/blog/$postid",
        "/blog/",
        "/projects/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/blog/$postid": {
      "filePath": "blog/$postid.tsx"
    },
    "/blog/": {
      "filePath": "blog/index.lazy.tsx"
    },
    "/projects/": {
      "filePath": "projects/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
