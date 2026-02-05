import type { JSX } from 'react'
import './TestPage.css'

/**
 * KCDS Token 종합 테스트 페이지 (CSS 버전)
 *
 * 모든 시맨틱 토큰을 CSS 클래스로 적용하여 전체 동작을 검증합니다.
 */

/* ── 헬퍼 컴포넌트 ── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="tp-section">
      <h2 className="tp-section-title">{title}</h2>
      <div className="tp-section-body">{children}</div>
    </section>
  )
}

/* ── 메인 페이지 ── */

export default function TestPage(): JSX.Element {
  return (
    <div className="tp-page">
      <h1 className="tp-title">KCDS Token 종합 테스트 (CSS 버전)</h1>
      <p className="tp-subtitle">CSS 클래스를 사용하여 KCDS 디자인 토큰 동작을 검증합니다.</p>

      {/* ═══════════════════════════════════════════
          1. 텍스트 색상 - 기본 시맨틱
          ═══════════════════════════════════════════ */}
      <Section title="1. 텍스트 색상 (Text Color) - 기본 시맨틱">
        <div className="tp-col-5xs">
          <span className="tp-text-14 tp-color-primary">primary</span>
          <span className="tp-text-14 tp-color-secondary">secondary</span>
          <span className="tp-text-14 tp-color-tertiary">tertiary</span>
          <span className="tp-text-14 tp-color-disabled">disabled</span>
          <span className="tp-text-14 tp-color-selected">selected</span>
          <span className="tp-text-14 tp-color-inverse tp-bg-gray-800 tp-px-1">inverse</span>
          <span className="tp-text-14 tp-color-placeholder">placeholder</span>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          2. 텍스트 색상 - Status
          ═══════════════════════════════════════════ */}
      <Section title="2. 텍스트 색상 (Text Color) - Status">
        <div className="tp-col-5xs">
          <span className="tp-text-14 tp-color-status-positive">status-positive-default</span>
          <span className="tp-text-14 tp-color-status-negative">status-negative-default</span>
          <span className="tp-text-14 tp-color-status-warning">status-warning-default</span>
          <span className="tp-text-14 tp-color-status-informational">status-informational-default</span>
          <span className="tp-text-14 tp-color-status-discovery">status-discovery-default</span>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          3. 폰트 사이즈
          ═══════════════════════════════════════════ */}
      <Section title="3. 폰트 사이즈 (Font Size) - Primitive Token">
        <div className="tp-col-5xs">
          <span className="tp-text-10">text-10 = 10px</span>
          <span className="tp-text-12">text-12 = 12px</span>
          <span className="tp-text-14">text-14 = 14px</span>
          <span className="tp-text-16">text-16 = 16px</span>
          <span className="tp-text-18">text-18 = 18px</span>
          <span className="tp-text-20">text-20 = 20px</span>
          <span className="tp-text-24">text-24 = 24px</span>
          <span className="tp-text-28">text-28 = 28px</span>
          <span className="tp-text-32">text-32 = 32px</span>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          4. 배경색 - 기본 시맨틱
          ═══════════════════════════════════════════ */}
      <Section title="4. 배경색 (Background Color) - 기본 시맨틱">
        <div className="tp-col-5xs">
          <div className="tp-row-center-3xs">
            <div className="tp-swatch-32 tp-bg-default" />
            <span className="tp-text-14">bg-default</span>
          </div>
          <div className="tp-row-center-3xs">
            <div className="tp-swatch-32 tp-bg-base" />
            <span className="tp-text-14">bg-base</span>
          </div>
          <div className="tp-row-center-3xs">
            <div className="tp-swatch-32 tp-bg-subtle" />
            <span className="tp-text-14">bg-subtle</span>
          </div>
          <div className="tp-row-center-3xs">
            <div className="tp-swatch-32 tp-bg-selected" />
            <span className="tp-text-14">bg-selected</span>
          </div>
          <div className="tp-row-center-3xs">
            <div className="tp-swatch-32 tp-bg-hover" />
            <span className="tp-text-14">bg-hover</span>
          </div>
          <div className="tp-row-center-3xs">
            <div className="tp-swatch-32 tp-bg-inverse" />
            <span className="tp-text-14">bg-inverse</span>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          5. 배경색 - Status
          ═══════════════════════════════════════════ */}
      <Section title="5. 배경색 (Background Color) - Status">
        <div className="tp-row-3xs-wrap">
          {([
            ['positive', 'tp-bg-status-positive-default', 'tp-bg-status-positive-subtle'],
            ['negative', 'tp-bg-status-negative-default', 'tp-bg-status-negative-subtle'],
            ['warning', 'tp-bg-status-warning-default', 'tp-bg-status-warning-subtle'],
            ['informational', 'tp-bg-status-informational-default', 'tp-bg-status-informational-subtle'],
            ['discovery', 'tp-bg-status-discovery-default', 'tp-bg-status-discovery-subtle'],
            ['neutral', 'tp-bg-status-neutral-default', 'tp-bg-status-neutral-subtle'],
          ] as const).map(([name, defaultCls, subtleCls]) => (
            <div key={name} className="tp-col-center-5xs">
              <div className={`tp-swatch-32x64 ${defaultCls}`} />
              <div className={`tp-swatch-32x64 ${subtleCls}`} />
              <span className="tp-text-10">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          6. 보더 색상 - 기본 시맨틱
          ═══════════════════════════════════════════ */}
      <Section title="6. 보더 색상 (Border Color) - 기본 시맨틱">
        <div className="tp-col-5xs">
          <div className="tp-border-box tp-border-color-default">
            <span className="tp-text-14">border-default</span>
          </div>
          <div className="tp-border-box tp-border-color-subtle">
            <span className="tp-text-14">border-subtle</span>
          </div>
          <div className="tp-border-box tp-border-color-subtler">
            <span className="tp-text-14">border-subtler</span>
          </div>
          <div className="tp-border-box tp-border-color-bold">
            <span className="tp-text-14">border-bold</span>
          </div>
          <div className="tp-border-box tp-border-color-bolder">
            <span className="tp-text-14">border-bolder</span>
          </div>
          <div className="tp-border-box tp-border-color-selected">
            <span className="tp-text-14">border-selected</span>
          </div>
          <div className="tp-border-box tp-border-color-disabled">
            <span className="tp-text-14">border-disabled</span>
          </div>
          <div className="tp-border-box tp-border-color-hover">
            <span className="tp-text-14">border-hover</span>
          </div>
          <div className="tp-border-box tp-border-color-active">
            <span className="tp-text-14">border-active</span>
          </div>
          <div className="tp-border-box tp-border-color-inverse">
            <span className="tp-text-14">border-inverse</span>
          </div>
          <div className="tp-border-box tp-border-color-focus-ring">
            <span className="tp-text-14">border-focusRing</span>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          7. 보더 색상 - Status
          ═══════════════════════════════════════════ */}
      <Section title="7. 보더 색상 (Border Color) - Status">
        <div className="tp-col-5xs">
          <div className="tp-border-box tp-border-status-positive">
            <span className="tp-text-14">border-status-positive</span>
          </div>
          <div className="tp-border-box tp-border-status-negative">
            <span className="tp-text-14">border-status-negative</span>
          </div>
          <div className="tp-border-box tp-border-status-warning">
            <span className="tp-text-14">border-status-warning</span>
          </div>
          <div className="tp-border-box tp-border-status-informational">
            <span className="tp-text-14">border-status-informational</span>
          </div>
          <div className="tp-border-box tp-border-status-discovery">
            <span className="tp-text-14">border-status-discovery</span>
          </div>
          <div className="tp-border-box tp-border-status-neutral">
            <span className="tp-text-14">border-status-neutral</span>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          8. 스페이싱
          ═══════════════════════════════════════════ */}
      <Section title="8. 스페이싱 (Spacing) - Semantic Token">
        <div className="tp-col-5xs">
          {([
            ['5xs (2px)', 'tp-w-5xs'],
            ['4xs (2px)', 'tp-w-4xs'],
            ['3xs (4px)', 'tp-w-3xs'],
            ['2xs (6px)', 'tp-w-2xs'],
            ['xs (8px)', 'tp-w-xs'],
            ['sm (12px)', 'tp-w-sm'],
            ['md (16px)', 'tp-w-md'],
            ['lg (20px)', 'tp-w-lg'],
            ['xl (24px)', 'tp-w-xl'],
            ['2xl (32px)', 'tp-w-2xl'],
            ['3xl (40px)', 'tp-w-3xl'],
          ] as const).map(([name, cls]) => (
            <div key={name} className="tp-row-center-3xs">
              <div className={`tp-bar-16 ${cls}`} />
              <span className="tp-text-14">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          9. 보더 라디우스
          ═══════════════════════════════════════════ */}
      <Section title="9. 보더 라디우스 (Border Radius) - Semantic Token">
        <div className="tp-row-sm-wrap">
          <div className="tp-col-center-5xs">
            <div className="tp-swatch-48 tp-radius-sm" />
            <span className="tp-text-12">sm (2px)</span>
          </div>
          <div className="tp-col-center-5xs">
            <div className="tp-swatch-48 tp-radius-md" />
            <span className="tp-text-12">md (4px)</span>
          </div>
          <div className="tp-col-center-5xs">
            <div className="tp-swatch-48 tp-radius-lg" />
            <span className="tp-text-12">lg (8px)</span>
          </div>
          <div className="tp-col-center-5xs">
            <div className="tp-swatch-48 tp-radius-xl" />
            <span className="tp-text-12">xl (12px)</span>
          </div>
          <div className="tp-col-center-5xs">
            <div className="tp-swatch-48 tp-radius-full" />
            <span className="tp-text-12">full</span>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          10. 배경색 - Disabled
          ═══════════════════════════════════════════ */}
      <Section title="10. 배경색 (Background) - Disabled">
        <div className="tp-row-3xs">
          <div className="tp-col-center-5xs">
            <div className="tp-swatch-48x80 tp-bg-disabled-default" />
            <span className="tp-text-12">disabled-default</span>
          </div>
          <div className="tp-col-center-5xs">
            <div className="tp-swatch-48x80 tp-bg-disabled-bold" />
            <span className="tp-text-12">disabled-bold</span>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          11. 배경색 - Theme Accent
          ═══════════════════════════════════════════ */}
      <Section title="11. 배경색 (Background) - Theme Accent">
        <div className="tp-row-3xs-wrap">
          <div className="tp-col-center-5xs">
            <div className="tp-swatch-32x60 tp-bg-accent-subtlest" />
            <span className="tp-text-10">subtlest</span>
          </div>
          <div className="tp-col-center-5xs">
            <div className="tp-swatch-32x60 tp-bg-accent-subtler" />
            <span className="tp-text-10">subtler</span>
          </div>
          <div className="tp-col-center-5xs">
            <div className="tp-swatch-32x60 tp-bg-accent-subtle" />
            <span className="tp-text-10">subtle</span>
          </div>
          <div className="tp-col-center-5xs">
            <div className="tp-swatch-32x60 tp-bg-accent-default" />
            <span className="tp-text-10">default</span>
          </div>
          <div className="tp-col-center-5xs">
            <div className="tp-swatch-32x60 tp-bg-accent-bold" />
            <span className="tp-text-10">bold</span>
          </div>
          <div className="tp-col-center-5xs">
            <div className="tp-swatch-32x60 tp-bg-accent-bolder" />
            <span className="tp-text-10">bolder</span>
          </div>
          <div className="tp-col-center-5xs">
            <div className="tp-swatch-32x60 tp-bg-accent-boldest" />
            <span className="tp-text-10">boldest</span>
          </div>
        </div>
      </Section>
    </div>
  )
}
