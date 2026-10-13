import type { JSX } from 'react'
import { SPageArea, SPageBar, SPageBody, SPageMain } from '@kt-cloud-front/ui-react/page'
import {
  SBox,
  SCenter,
  SContainer,
  SFlex,
  SGrid,
  SHStack,
  SVStack,
} from '@kt-cloud-front/ui-react/primitives'
import { Demo } from './Demo'

function Cell({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <SBox className="bg-kcds-bg-accent-blue-subtler text-kcds-text-primary text-12 rounded-kcds-4 p-kcds-sm">
      {children}
    </SBox>
  )
}

/** 레이아웃 킷: 이 화면 자체가 SShell + SPage* 로 짜여 있고, 본문은 primitives 로 배치한다 */
export function LayoutSample(): JSX.Element {
  return (
    <SPageArea variant="full">
      <SPageMain>
        <SPageBar divider>레이아웃 킷 — shell · page · primitives</SPageBar>
        <SPageBody fluid>
          <Demo
            title="shell / page"
            note="지금 보고 있는 프레임이 SShell(Header·Lnb·Body·Footer) 이고, 이 카드가 SPageArea > SPageMain > SPageBar(divider) + SPageBody 입니다."
          >
            <Cell>상단 막대는 고정, 본문(SPageBody)만 스크롤됩니다</Cell>
          </Demo>

          <Demo title="SVStack / SHStack" note="gap 은 KCDS 간격 토큰 이름으로 지정">
            <SVStack gap="xs" className="w-[200px]">
              <Cell>VStack 1</Cell>
              <Cell>VStack 2</Cell>
              <Cell>VStack 3</Cell>
            </SVStack>
            <SHStack gap="md" align="center">
              <Cell>HStack 1</Cell>
              <Cell>HStack 2</Cell>
              <Cell>HStack 3</Cell>
            </SHStack>
          </Demo>

          <Demo title="SFlex" note="justify='between' · wrap">
            <SFlex justify="between" align="center" gap="sm" wrap="wrap" className="w-full">
              <Cell>왼쪽</Cell>
              <Cell>가운데</Cell>
              <Cell>오른쪽</Cell>
            </SFlex>
          </Demo>

          <Demo title="SGrid (primitives)" note="columns={4} gap='sm'">
            <SGrid columns={4} gap="sm" className="w-full">
              {Array.from({ length: 8 }, (_, i) => (
                <Cell key={i}>Grid {i + 1}</Cell>
              ))}
            </SGrid>
          </Demo>

          <Demo title="SCenter / SContainer" note="SContainer maxW={480} 안에서 SCenter 로 가운데 정렬">
            <SContainer maxW={480} className="bg-kcds-bg-accent-neutral-subtler w-full">
              <SCenter className="h-[96px]">
                <Cell>Center</Cell>
              </SCenter>
            </SContainer>
          </Demo>
        </SPageBody>
      </SPageMain>
    </SPageArea>
  )
}
