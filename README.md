# KCDS CRA 테스트

KT Cloud Design System(KCDS) 컴포넌트를 Create React App 환경에서 테스트하기 위한 프로젝트입니다.

## 설치

```bash
pnpm install
```

## 실행

### 개발 서버 실행

```bash
pnpm start
```

[http://localhost:3000](http://localhost:3000)에서 앱을 확인할 수 있습니다.

### 프로덕션 빌드

```bash
pnpm build
```

`build` 폴더에 최적화된 프로덕션 빌드가 생성됩니다.

### 테스트

```bash
pnpm test
```

## KCDS 패키지

이 프로젝트에서 사용하는 KCDS 패키지 (`public/kcds/` 의 1.2.0 tgz 로 설치):

- `@kt-cloud-front/data-grid` - 데이터 그리드
- `@kt-cloud-front/ui-core-react` - 코어 React 컴포넌트
- `@kt-cloud-front/ui-react` - UI React 컴포넌트
- `@kt-cloud-front/ui-react-grid` - 그리드 컴포넌트
- `@kt-cloud-front/ui-style` - 스타일 시스템
- `@kt-cloud-front/ui-style-react` - React 스타일 컴포넌트

## 구조

- `src/App.tsx` - 레이아웃 킷(`SShell`)으로 짠 테스트 화면 골격과 샘플 메뉴
- `src/samples/` - 메뉴 항목별 샘플 (1.2.0 신규·개선 컴포넌트, 토큰 테스트)
- `src/kcds.css` - Tailwind v4 입력 파일. `pnpm kcds:css` 가 `public/kcds.generated.css` 로 컴파일하며 `start`·`build` 앞에 자동 실행됩니다.
- `src/kcds-subpaths.d.ts` - `exports` 서브패스 타입 연결 (`moduleResolution: node` 대응)
