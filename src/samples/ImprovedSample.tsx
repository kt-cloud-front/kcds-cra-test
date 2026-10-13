import { useState, type JSX } from 'react'
import {
  SCheckbox,
  SDropdownMenu,
  SDropdownMenuContent,
  SDropdownMenuItem,
  SDropdownMenuSeparator,
  SDropdownMenuTrigger,
  SDropdownMenuTriggerButton,
  SDropdownMenuTriggerPrefixSlot,
  SDropdownMenuTriggerSuffixSlot,
  SInlineNotification,
  SInlineNotificationClose,
  SInlineNotificationContent,
  SInlineNotificationDescription,
  SInlineNotificationTitle,
  SRadio,
  SRadioItem,
  SScrollArea,
  SSelect,
  SStatus,
  STabs,
  STabsContent,
  STabsList,
  STabsTrigger,
  STextButton,
  SUIIcon,
} from '@kt-cloud-front/ui-react'
import { SPageArea, SPageBar, SPageBody, SPageMain } from '@kt-cloud-front/ui-react/page'
import { Demo } from './Demo'

const zoneOptions = [
  { value: 'kr1', label: 'KR1 (서울)', keyword: 'seoul' },
  { value: 'kr2', label: 'KR2 (천안)', keyword: 'cheonan' },
  { value: 'kr3', label: 'KR3 (김해)', keyword: 'gimhae' },
]

/** 1.2.0 에서 옵션이 추가되거나 버그가 수정된 기존 컴포넌트 */
export function ImprovedSample(): JSX.Element {
  const [zone, setZone] = useState<string | string[]>('')

  return (
    <SPageArea variant="full">
      <SPageMain>
        <SPageBar divider>주요 개선 · 버그 수정</SPageBar>
        <SPageBody fluid>
          <Demo title="STabs" note="variant='filled' 추가 (constrained 는 deprecated)">
            <STabs defaultValue="a" className="w-[360px]">
              <STabsList variant="line">
                <STabsTrigger value="a">line A</STabsTrigger>
                <STabsTrigger value="b">line B</STabsTrigger>
              </STabsList>
              <STabsContent value="a">line 탭 A</STabsContent>
              <STabsContent value="b">line 탭 B</STabsContent>
            </STabs>
            <STabs defaultValue="a" className="w-[360px]">
              <STabsList variant="filled">
                <STabsTrigger value="a">filled A</STabsTrigger>
                <STabsTrigger value="b">filled B</STabsTrigger>
              </STabsList>
              <STabsContent value="a">filled 탭 A</STabsContent>
              <STabsContent value="b">filled 탭 B</STabsContent>
            </STabs>
          </Demo>

          <Demo
            title="SStatus"
            note="in-progress · pending · neutral 추가 (in-active → pending, ready → neutral)"
          >
            <SStatus status="running" label="running" />
            <SStatus status="in-progress" label="in-progress (신규)" />
            <SStatus status="pending" label="pending (신규)" />
            <SStatus status="neutral" label="neutral (신규)" />
            <SStatus status="complete" label="complete" />
            <SStatus status="error" label="error" />
            <SStatus status="in-active" label="in-active (deprecated)" />
            <SStatus status="ready" label="ready (deprecated)" />
          </Demo>

          <Demo title="SDropdownMenu" note="트리거 Prefix / Suffix 슬롯 추가">
            <SDropdownMenu>
              <SDropdownMenuTrigger asChild>
                <SDropdownMenuTriggerButton>
                  <SDropdownMenuTriggerPrefixSlot>
                    <SUIIcon icon="buildings" size="md" />
                  </SDropdownMenuTriggerPrefixSlot>
                  KT Cloud 조직
                  <SDropdownMenuTriggerSuffixSlot>
                    <SUIIcon icon="star" size="md" />
                  </SDropdownMenuTriggerSuffixSlot>
                </SDropdownMenuTriggerButton>
              </SDropdownMenuTrigger>
              <SDropdownMenuContent align="start">
                <SDropdownMenuItem>Profile</SDropdownMenuItem>
                <SDropdownMenuSeparator />
                <SDropdownMenuItem>Billing</SDropdownMenuItem>
              </SDropdownMenuContent>
            </SDropdownMenu>
          </Demo>

          <Demo
            title="SSelect"
            note="filterOption(영문 키워드 seoul·cheonan·gimhae 로도 검색) · locale.noData 에 노드 전달"
          >
            <div className="w-[280px]">
              <SSelect
                options={zoneOptions}
                value={zone}
                onChange={setZone}
                placeholder="존 선택"
                isSearchable
                filterOption={(option, query) =>
                  option.label.includes(query) || String(option.keyword).includes(query.toLowerCase())
                }
                locale={{
                  noData: (
                    <span>
                      결과 없음 — <b>seoul</b> 을 입력해 보세요
                    </span>
                  ),
                }}
              />
            </div>
            <div className="w-[280px]">
              <SSelect options={zoneOptions} status="danger" placeholder="status='danger' (aria-invalid)" />
            </div>
          </Demo>

          <Demo title="STextButton" note="appearance='static' 추가">
            <STextButton appearance="accent">accent</STextButton>
            <STextButton appearance="adaptive">adaptive</STextButton>
            <STextButton appearance="static">static (신규)</STextButton>
          </Demo>

          <Demo
            title="SCheckbox / SRadioGroup"
            note="id 없이도 라벨 연결 · 라디오 indicator 위치 수정 · status='danger' 시 aria-invalid"
          >
            <SCheckbox defaultChecked={false}>id 자동 생성 체크박스</SCheckbox>
            <SCheckbox defaultChecked={false} status="danger">danger 체크박스</SCheckbox>
            <SRadio defaultValue="a" orientation="horizontal">
              <SRadioItem value="a">옵션 A</SRadioItem>
              <SRadioItem value="b">옵션 B</SRadioItem>
            </SRadio>
            <SRadio defaultValue="a" orientation="horizontal" status="danger">
              <SRadioItem value="a">같은 값 A (다른 그룹)</SRadioItem>
              <SRadioItem value="b">같은 값 B</SRadioItem>
            </SRadio>
          </Demo>

          <Demo title="SScrollArea" note="KCDS 스크롤바 스펙(두께 4px, 트랙 투명) · maxHeight">
            <SScrollArea maxHeight={120} className="bg-kcds-bg-accent-neutral-subtler w-[280px]">
              <ul className="p-kcds-sm text-14">
                {Array.from({ length: 20 }, (_, i) => (
                  <li key={i}>10.0.0.{i + 1}</li>
                ))}
              </ul>
            </SScrollArea>
          </Demo>

          <Demo title="SInlineNotification" note="닫기 버튼이 없을 때 오른쪽 빈 여백 제거">
            <div className="flex w-full max-w-[560px] flex-col gap-kcds-sm">
              <SInlineNotification status="informational">
                <SInlineNotificationContent>
                  <SInlineNotificationTitle>닫기 버튼 없음</SInlineNotificationTitle>
                  <SInlineNotificationDescription>
                    오른쪽 끝까지 내용이 채워집니다.
                  </SInlineNotificationDescription>
                </SInlineNotificationContent>
              </SInlineNotification>
              <SInlineNotification status="warning">
                <SInlineNotificationContent>
                  <SInlineNotificationTitle>닫기 버튼 있음</SInlineNotificationTitle>
                  <SInlineNotificationDescription>비교용입니다.</SInlineNotificationDescription>
                </SInlineNotificationContent>
                <SInlineNotificationClose />
              </SInlineNotification>
            </div>
          </Demo>
        </SPageBody>
      </SPageMain>
    </SPageArea>
  )
}
