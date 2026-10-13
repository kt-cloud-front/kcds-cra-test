import { useState, type JSX } from 'react'
import { SValidationMessage } from '@kt-cloud-front/ui-react/validation-message'
import {
  SDropzone,
  SDropzonePlaceholder,
  SFileDropTextarea,
  SFileItem,
  SFileItemName,
  SFileItemRemove,
  SFileItemSize,
  SFileList,
  SFilePicker,
  SFileUpload,
} from '@kt-cloud-front/ui-react/file-upload'
import { SPageArea, SPageBar, SPageBody, SPageMain } from '@kt-cloud-front/ui-react/page'
import { Demo } from './Demo'

/** 파일 업로드 세트: 서브패스(@kt-cloud-front/ui-react/file-upload)로만 import */
export function FileUploadSample(): JSX.Element {
  const [error, setError] = useState<string | null>(null)

  return (
    <SPageArea variant="full">
      <SPageMain>
        <SPageBar divider>파일 업로드 세트</SPageBar>
        <SPageBody fluid>
          <Demo
            title="SFileUpload + SFilePicker + SFileList"
            note="accept='.png,.jpg' multiple maxFiles={3} maxSize=2MB — 거부 사유는 SValidationMessage 로 표시"
          >
            <div className="w-full max-w-[560px]">
              <SFileUpload
                accept=".png,.jpg"
                multiple
                maxFiles={3}
                maxSize={2 * 1024 * 1024}
                onFilesAccepted={() => setError(null)}
                onFilesRejected={(rejections) => setError(rejections[0]?.message ?? null)}
              >
                <SFilePicker description="이미지를 .png, .jpg 형식으로 첨부해주세요." />
                <SFileList>
                  <SFileItem>
                    <SFileItemName />
                    <SFileItemSize />
                    <SFileItemRemove />
                  </SFileItem>
                </SFileList>
              </SFileUpload>
              {error && <SValidationMessage status="danger" message={error} />}
            </div>
          </Demo>

          <Demo title="SDropzone" note="interactive — 표면을 클릭하거나 파일을 끌어다 놓기">
            <div className="w-full max-w-[560px]">
              <SFileUpload multiple>
                <SDropzone interactive className="p-kcds-md">
                  <SDropzonePlaceholder>여기에 파일을 끌어다 놓으세요.</SDropzonePlaceholder>
                  <SFileList>
                    <SFileItem>
                      <SFileItemName />
                      <SFileItemSize />
                      <SFileItemRemove />
                    </SFileItem>
                  </SFileList>
                </SDropzone>
              </SFileUpload>
            </div>
          </Demo>

          <Demo title="SFileDropTextarea" note="값이 파일이거나 붙여넣은 텍스트일 때">
            <div className="w-full max-w-[560px]">
              <SFileDropTextarea />
            </div>
          </Demo>
        </SPageBody>
      </SPageMain>
    </SPageArea>
  )
}
