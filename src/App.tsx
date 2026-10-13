import { useState, type JSX } from 'react'
import { SShell, SShellBody, SShellFooter, SShellHeader, SShellLnb } from '@kt-cloud-front/ui-react/shell'
import { DrawerSample } from './samples/DrawerSample'
import { FileUploadSample } from './samples/FileUploadSample'
import { GridSample } from './samples/GridSample'
import { ImprovedSample } from './samples/ImprovedSample'
import { LayoutSample } from './samples/LayoutSample'
import { PromotedSample } from './samples/PromotedSample'
import { TokenSample } from './samples/TokenSample'
import { WizardSample } from './samples/WizardSample'

/**
 * KCDS 패키지 1.2.0 설치 테스트 페이지
 *
 * 1.2.0 CHANGELOG 의 신규·개선 컴포넌트를 묶음별로 띄워 import / 렌더링 / 동작을 확인합니다.
 * 화면 골격 자체를 1.2.0 레이아웃 킷(SShell + SPage*)으로 구성합니다.
 */

const SAMPLES = [
  { key: 'layout', label: '레이아웃 킷', tag: '신규', Component: LayoutSample },
  { key: 'drawer', label: 'SDrawer', tag: '신규', Component: DrawerSample },
  { key: 'file-upload', label: '파일 업로드', tag: '신규', Component: FileUploadSample },
  { key: 'wizard', label: 'SCreateWizard', tag: '신규', Component: WizardSample },
  { key: 'promoted', label: '정식 승격 8종', tag: '승격', Component: PromotedSample },
  { key: 'improved', label: '개선 · 버그 수정', tag: '개선', Component: ImprovedSample },
  { key: 'grid', label: 'Data Grid', tag: '개선', Component: GridSample },
  { key: 'token', label: '토큰 테스트', tag: '기존', Component: TokenSample },
] as const

type SampleKey = (typeof SAMPLES)[number]['key']

export default function App(): JSX.Element {
  const [activeKey, setActiveKey] = useState<SampleKey>('layout')
  const ActiveSample = SAMPLES.find((sample) => sample.key === activeKey)!.Component

  return (
    <SShell className="h-screen">
      <SShellHeader>
        <div className="text-kcds-text-primary px-kcds-md py-kcds-sm text-14 font-bold">
          KCDS 패키지 1.2.0 설치 테스트
        </div>
      </SShellHeader>

      <SShellLnb>
        <ul className="w-[200px] p-kcds-xs">
          {SAMPLES.map((sample) => (
            <li key={sample.key}>
              <button
                type="button"
                aria-current={sample.key === activeKey ? 'page' : undefined}
                onClick={() => setActiveKey(sample.key)}
                className={`text-14 rounded-kcds-4 px-kcds-sm py-kcds-xs flex w-full items-center justify-between text-left ${
                  sample.key === activeKey
                    ? 'bg-kcds-bg-accent-blue-subtler text-kcds-text-primary font-semibold'
                    : 'text-kcds-text-secondary'
                }`}
              >
                {sample.label}
                <span className="text-kcds-text-tertiary text-12">{sample.tag}</span>
              </button>
            </li>
          ))}
        </ul>
      </SShellLnb>

      <SShellBody>
        <ActiveSample />
      </SShellBody>

      <SShellFooter>
        <div className="text-kcds-text-tertiary px-kcds-md py-kcds-2xs text-12">
          @kt-cloud-front/ui-react · ui-core-react · ui-style · ui-style-react · ui-react-grid · data-grid @ 1.2.0
        </div>
      </SShellFooter>
    </SShell>
  )
}
