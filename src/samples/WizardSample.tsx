import { useState, type JSX } from 'react'
import { SRadio, SRadioItem, STextInput, STextInputField } from '@kt-cloud-front/ui-react'
import {
  SCreateWizard,
  SCreateWizardFooter,
  SCreateWizardSide,
  SCreateWizardStep,
  useSCreateWizard,
  useSCreateWizardStepValidator,
} from '@kt-cloud-front/ui-react/create-wizard'
import { SPageArea, SPageBar, SPageBody, SPageMain } from '@kt-cloud-front/ui-react/page'
import { SValidationMessage } from '@kt-cloud-front/ui-react/validation-message'

interface ServerForm {
  name: string
  spec: string
}

const INITIAL: ServerForm = { name: '', spec: '1x1' }

function BasicStep(): JSX.Element {
  const { wizardData, setWizardData } = useSCreateWizard<ServerForm>()
  const [isInvalid, setIsInvalid] = useState(false)

  // 다음으로 넘어가기 전에 이 스텝을 검증한다
  useSCreateWizardStepValidator(() => {
    const isValid = wizardData.name.trim().length > 0
    setIsInvalid(!isValid)
    return isValid
  })

  return (
    <div className="max-w-[400px]">
      <p className="text-kcds-text-secondary mb-kcds-2xs text-14">서버 이름</p>
      <STextInput status={isInvalid ? 'danger' : 'normal'}>
        <STextInputField
          placeholder="서버 이름을 입력하세요"
          value={wizardData.name}
          onChange={(event) => setWizardData((prev) => ({ ...prev, name: event.target.value }))}
        />
      </STextInput>
      {isInvalid && <SValidationMessage status="danger" message="서버 이름은 필수입니다." />}
    </div>
  )
}

function SpecStep(): JSX.Element {
  const { wizardData, setWizardData } = useSCreateWizard<ServerForm>()

  return (
    <SRadio
      value={wizardData.spec}
      onValueChange={(spec) => setWizardData((prev) => ({ ...prev, spec }))}
    >
      <SRadioItem value="1x1">1vCPU / 1GB</SRadioItem>
      <SRadioItem value="2x4">2vCPU / 4GB</SRadioItem>
      <SRadioItem value="4x8">4vCPU / 8GB</SRadioItem>
    </SRadio>
  )
}

function Summary({ field }: { field: keyof ServerForm }): JSX.Element {
  const { wizardData } = useSCreateWizard<ServerForm>()
  return <p className="text-kcds-text-secondary text-14">{wizardData[field] || '-'}</p>
}

/** SCreateWizard(experimental): SPageBody fill fluid flush 안에 채운다 */
export function WizardSample(): JSX.Element {
  const [submitted, setSubmitted] = useState<ServerForm | null>(null)

  return (
    <SPageArea variant="full">
      <SPageMain>
        <SPageBar divider>
          SCreateWizard (experimental)
          {submitted && ` — 제출됨: ${submitted.name} / ${submitted.spec}`}
        </SPageBar>
        <SPageBody fill fluid flush>
          <SCreateWizard<ServerForm>
            initialData={INITIAL}
            onSubmit={async (data) => {
              await new Promise((resolve) => setTimeout(resolve, 800))
              setSubmitted(data)
            }}
            onCancel={() => setSubmitted(null)}
          >
            <SCreateWizardStep title="기본 정보" summary={<Summary field="name" />}>
              <BasicStep />
            </SCreateWizardStep>
            <SCreateWizardStep title="스펙" summary={<Summary field="spec" />}>
              <SpecStep />
            </SCreateWizardStep>
            <SCreateWizardStep title="검토">
              <p className="text-kcds-text-secondary text-14">
                오른쪽 생성 정보를 확인한 뒤 생성을 누르세요.
              </p>
            </SCreateWizardStep>
            <SCreateWizardSide title="생성/설정 정보" />
            <SCreateWizardFooter submitLabel="생성" />
          </SCreateWizard>
        </SPageBody>
      </SPageMain>
    </SPageArea>
  )
}
