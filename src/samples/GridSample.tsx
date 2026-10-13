import { useState, type JSX } from 'react'
import { defineColumn, type SGridColumn } from '@kt-cloud-front/data-grid/core'
import { SGrid } from '@kt-cloud-front/data-grid/grid'
import { SStatus } from '@kt-cloud-front/ui-react'
import { SPageArea, SPageBar, SPageBody, SPageMain } from '@kt-cloud-front/ui-react/page'

interface Server {
  id: string
  name: string
  flavor: { vcpu: number; memory: number }
  status: 'running' | 'pending' | 'error'
  monthlyCost: number
}

const initialServers: Server[] = [
  { id: 'srv-01', name: 'web-server-01', flavor: { vcpu: 1, memory: 1 }, status: 'running', monthlyCost: 12000 },
  { id: 'srv-02', name: 'web-server-02', flavor: { vcpu: 2, memory: 4 }, status: 'pending', monthlyCost: 38000 },
  { id: 'srv-03', name: 'db-server-01', flavor: { vcpu: 4, memory: 8 }, status: 'error', monthlyCost: 96000 },
]

const columns: SGridColumn<Server>[] = [
  { accessorKey: 'name', header: '서버 이름', minWidth: 200, meta: { enableSorting: true } },
  // 1.2.0: defineColumn — accessorFn 의 반환 타입이 cell 의 getValue() 까지 추론된다
  defineColumn({
    accessorFn: (row: Server) => `${row.flavor.vcpu}vCPU / ${row.flavor.memory}GB`,
    id: 'flavor',
    header: '서버 스펙 (defineColumn)',
    minWidth: 180,
    cell: ({ getValue }) => getValue().toUpperCase(),
  }),
  // 1.2.0: meta.align — 헤더 라벨과 셀 콘텐츠를 함께 정렬
  {
    accessorKey: 'status',
    header: '상태 (center)',
    minWidth: 140,
    meta: { align: 'center' },
    cell: ({ row }) => <SStatus status={row.original.status} label={row.original.status} />,
  },
  {
    accessorKey: 'monthlyCost',
    header: '월 요금 (right)',
    minWidth: 140,
    meta: { align: 'right', enableSorting: true },
    cell: ({ row }) => `${row.original.monthlyCost.toLocaleString()}원`,
  },
]

/** 목록형 화면: SPageBody fill 로 스크롤 주인을 SGrid 에 넘긴다 */
export function GridSample(): JSX.Element {
  const [servers, setServers] = useState(initialServers)

  return (
    <SPageArea variant="full">
      <SPageMain>
        <SPageBar divider>Data Grid — meta.align · defineColumn</SPageBar>
        <SPageBody fill fluid>
          <SGrid
            data={servers}
            columns={columns}
            getRowId={(row) => row.id}
            toolbar={{
              enableSearch: true,
              searchPlaceholder: '아이디, 이름 검색',
              enableReload: true,
              onReload: () => setServers([...initialServers]),
              enableExcel: true,
              excelFileName: 'Server',
            }}
            emptyStateName="서버"
            errorStateName="서버"
          />
        </SPageBody>
      </SPageMain>
    </SPageArea>
  )
}
