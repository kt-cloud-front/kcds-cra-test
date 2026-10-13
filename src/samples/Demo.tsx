import type { JSX, ReactNode } from 'react'

/** 샘플 한 덩어리: 제목 + 변경 요약 + 실제 렌더 영역 */
export function Demo({
  title,
  note,
  children,
}: {
  title: string
  note?: string
  children: ReactNode
}): JSX.Element {
  return (
    <section className="mb-kcds-xl">
      <h2 className="text-kcds-text-primary text-14 font-semibold">{title}</h2>
      {note && <p className="text-kcds-text-tertiary mb-kcds-sm text-12">{note}</p>}
      <div className="mt-kcds-sm flex flex-wrap items-start gap-kcds-md">{children}</div>
    </section>
  )
}
