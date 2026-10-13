import { useState, type JSX } from 'react'
import {
  SCalendar,
  SDatePicker,
  SDatePickerCalendar,
  SDatePickerCalendarTodayButton,
  SDateRangePicker,
  SDateRangePickerCalendar,
  SDateTimePicker,
  SDateTimePickerCalendar,
  SDateTimePickerFooter,
  SDateTimePickerTimeSelect,
  SDateTimeRangePicker,
  SDateTimeRangePickerCalendar,
  SDateTimeRangePickerFields,
  SDateTimeRangePickerQuickSelect,
  SPopover,
  SPopoverBody,
  SPopoverContent,
  SPopoverHeader,
  SPopoverTrigger,
  STimePicker,
  STimePickerTimeSelect,
  type DateRange,
  type DateTimeRange,
} from '@kt-cloud-front/ui-react'
import { SPageArea, SPageBar, SPageBody, SPageMain } from '@kt-cloud-front/ui-react/page'
import { SValidationMessage } from '@kt-cloud-front/ui-react/validation-message'
import { Demo } from './Demo'

/** 연구소(experimental)에서 정식 승격된 8종 */
export function PromotedSample(): JSX.Element {
  const [date, setDate] = useState<Date | undefined>()
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [dateTime, setDateTime] = useState<Date | undefined>()
  const [dateTimeRange, setDateTimeRange] = useState<DateTimeRange | undefined>()
  const [time, setTime] = useState('')

  return (
    <SPageArea variant="full">
      <SPageMain>
        <SPageBar divider>정식 승격 8종 — 캘린더 · 피커 · 팝오버 · 검증 메시지</SPageBar>
        <SPageBody fluid>
          <Demo title="SDatePicker / SDateRangePicker">
            <div className="w-[240px]">
              <SDatePicker value={date} onChange={setDate} showClearButton>
                <SDatePickerCalendar>
                  <SDatePickerCalendarTodayButton />
                </SDatePickerCalendar>
              </SDatePicker>
            </div>
            <div className="w-[280px]">
              <SDateRangePicker value={dateRange} onChange={setDateRange}>
                <SDateRangePickerCalendar />
              </SDateRangePicker>
            </div>
          </Demo>

          <Demo title="STimePicker / SDateTimePicker">
            <div className="w-[200px]">
              <STimePicker value={time} onChange={setTime}>
                <STimePickerTimeSelect />
              </STimePicker>
            </div>
            <div className="w-[280px]">
              <SDateTimePicker value={dateTime} onChange={setDateTime}>
                <SDateTimePickerCalendar />
                <SDateTimePickerTimeSelect />
                <SDateTimePickerFooter />
              </SDateTimePicker>
            </div>
          </Demo>

          <Demo title="SDateTimeRangePicker" note="빠른 선택 + 달력 + 시작·종료 필드 + 푸터">
            <div className="w-[400px]">
              <SDateTimeRangePicker value={dateTimeRange} onChange={setDateTimeRange}>
                <SDateTimeRangePickerQuickSelect />
                <SDateTimeRangePickerCalendar />
                <SDateTimeRangePickerFields />
                <SDateTimePickerFooter />
              </SDateTimeRangePicker>
            </div>
          </Demo>

          <Demo title="SCalendar" note="피커 없이 달력만">
            <SCalendar mode="single" selected={date} onSelect={(value) => value instanceof Date && setDate(value)} />
          </Demo>

          <Demo title="SPopover">
            <SPopover>
              <SPopoverTrigger>태그 3개</SPopoverTrigger>
              <SPopoverContent position="bottom-start">
                <SPopoverHeader>태그</SPopoverHeader>
                <SPopoverBody>web, api, batch</SPopoverBody>
              </SPopoverContent>
            </SPopover>
          </Demo>

          <Demo
            title="SValidationMessage"
            note="필드 밖에서도 쓰는 단독 컴포넌트 — status='neutral' 추가"
          >
            <SValidationMessage status="neutral" message="neutral: 영문·숫자 4~20자" />
            <SValidationMessage status="success" message="success: 사용할 수 있는 이름입니다." />
            <SValidationMessage status="warning" message="warning: 곧 만료됩니다." />
            <SValidationMessage status="danger" message="danger: 이미 사용 중인 이름입니다." />
          </Demo>
        </SPageBody>
      </SPageMain>
    </SPageArea>
  )
}
