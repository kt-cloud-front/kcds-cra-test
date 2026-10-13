import { useState, type JSX } from 'react'
import { SButton } from '@kt-cloud-front/ui-react'
import {
  SDrawer,
  SDrawerAction,
  SDrawerBody,
  SDrawerClose,
  SDrawerHeader,
  SDrawerTitle,
} from '@kt-cloud-front/ui-react/drawer'
import { SPageArea, SPageBar, SPageBody, SPageMain, SPageSide } from '@kt-cloud-front/ui-react/page'
import { Demo } from './Demo'

const servers = [
  { id: 'srv-01', name: 'web-server-01', spec: '1vCPU / 1GB' },
  { id: 'srv-02', name: 'web-server-02', spec: '2vCPU / 4GB' },
  { id: 'srv-03', name: 'db-server-01', spec: '4vCPU / 8GB' },
]

/** SDrawer: inline(SPageSide 자리 차지) / overlay(화면 위에 띄움) */
export function DrawerSample(): JSX.Element {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const selected = servers.find((server) => server.id === selectedId)

  return (
    <SPageArea variant="full" scroll="body">
      <SPageMain>
        <SPageBar divider>SDrawer — inline · overlay</SPageBar>
        <SPageBody fluid>
          <Demo
            title="mode='inline' (기본)"
            note="항목을 누르면 오른쪽 SPageSide 에 드로어가 붙고 목록이 그만큼 좁아집니다."
          >
            {servers.map((server) => (
              <SButton
                key={server.id}
                variant={server.id === selectedId ? 'primary' : 'secondary'}
                onClick={() => setSelectedId(server.id)}
              >
                {server.name}
              </SButton>
            ))}
          </Demo>

          <Demo title="mode='overlay'" note="position='right' size='medium' isBackdrop resizable">
            <SButton variant="tertiary" onClick={() => setIsOverlayOpen(true)}>
              오버레이 드로어 열기
            </SButton>
          </Demo>

          <SDrawer
            mode="overlay"
            position="right"
            size="medium"
            isBackdrop
            resizable
            open={isOverlayOpen}
            onOpenChange={setIsOverlayOpen}
          >
            <SDrawerHeader>
              <SDrawerTitle>오버레이 드로어</SDrawerTitle>
              <SDrawerAction>
                <SDrawerClose />
              </SDrawerAction>
            </SDrawerHeader>
            <SDrawerBody>
              본문 위에 포털로 뜹니다. 왼쪽 가장자리를 드래그해 폭을 조절할 수 있습니다.
            </SDrawerBody>
          </SDrawer>
        </SPageBody>
      </SPageMain>

      <SPageSide>
        <SDrawer
          open={!!selected}
          onOpenChange={(open) => !open && setSelectedId(null)}
          className="w-[360px]"
        >
          <SDrawerHeader>
            <SDrawerTitle>{selected?.name}</SDrawerTitle>
            <SDrawerAction>
              <SDrawerClose />
            </SDrawerAction>
          </SDrawerHeader>
          <SDrawerBody>
            <p>서버 ID: {selected?.id}</p>
            <p>스펙: {selected?.spec}</p>
            <p>SDrawerBody 기본 글자 스타일(14px / 20px)이 적용됩니다.</p>
          </SDrawerBody>
        </SDrawer>
      </SPageSide>
    </SPageArea>
  )
}
