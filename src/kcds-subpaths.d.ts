/**
 * CRA(TypeScript 4.9, moduleResolution: node)는 package.json `exports` 서브패스의 타입을 찾지 못한다.
 * 런타임은 webpack 5 가 `exports` 를 해석하므로, 타입만 dist 경로로 연결한다.
 */
declare module '@kt-cloud-front/ui-react/shell' {
  export * from '@kt-cloud-front/ui-react/dist/components/layout/shell'
}
declare module '@kt-cloud-front/ui-react/page' {
  export * from '@kt-cloud-front/ui-react/dist/components/layout/page'
}
declare module '@kt-cloud-front/ui-react/primitives' {
  export * from '@kt-cloud-front/ui-react/dist/components/layout/primitives'
}
declare module '@kt-cloud-front/ui-react/drawer' {
  export * from '@kt-cloud-front/ui-react/dist/components/drawer'
}
declare module '@kt-cloud-front/ui-react/file-upload' {
  export * from '@kt-cloud-front/ui-react/dist/components/file-upload'
}
declare module '@kt-cloud-front/ui-react/create-wizard' {
  export * from '@kt-cloud-front/ui-react/dist/components/create-wizard'
}
declare module '@kt-cloud-front/ui-react/validation-message' {
  export * from '@kt-cloud-front/ui-react/dist/components/validation-message'
}
declare module '@kt-cloud-front/data-grid/core' {
  export * from '@kt-cloud-front/data-grid/dist/core'
}
declare module '@kt-cloud-front/data-grid/grid' {
  export * from '@kt-cloud-front/data-grid/dist/grid'
}
