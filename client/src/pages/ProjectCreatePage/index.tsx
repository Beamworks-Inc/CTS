import React from "react";
export interface FormComponent{
    type: string;
    name: string;
    value: string[];
    currentValue: string | null;
}
/**
 * 사용자는 새로운 Selector를 만들 수 있다.
 * ex.
 * 1. + 버튼 클릭
 * 2. Selector 종류 입력
 * 3. Selector 이름 입력
 * 4. Selector 생성 (FormComponent[] 생성)
 * @constructor
 */
function FormatSelector() {
    return null;
}

/**
 * zip 파일 구조
 * 리뷰를 위해서는 다음 두 가지의 이미지가 필요하다.
 * 1. 리뷰 대상 이미지 =: original
 * 2. 리포트 또는 추가 정보를 가진 이미지 =: report
 * 데이터 업로더에서는 original.zip, report.zip 두 개의 파일을 받는다.
 * 각 압축 파일 구조는 다음과 같아야 한다.
 * original.zip
 *  - original1
 *      - original1_1.jpg
 *      - original1_2.jpg
 *      - original1_3.jpg
*       - ...
 *  - original2
 *      - original2_1.jpg
 *      - original2_2.jpg
 *      - original2_3.jpg
 *      - ...
 *  - ...
 *
 * report.zip
 *  - report1
 *      - report1_1.jpg
 *      - report1_2.jpg
 *      - report1_3.jpg
 *      - ...
 *  - report2
 *      - report2_1.jpg
 *      - report2_2.jpg
 *      - report2_3.jpg
 *      - ...
 *  - ...
 *
 *  original과 report의 파일 갯수는 반드시 같아야 한다.
 * @constructor
 */
function DataUploader() {
    return (<div>
        <input type="file" accept=".zip"/>
        <input type="file" accept=".zip"/>
    </div>);
}

const ProjectCreatePage = () => {
    const onProjectNameTextChange = () => {

    }
    const onProjectDescriptionTextChange = () => {

    }
    const onProjectCreateButtonClick = () => {

    }


    return (
        <div>
            <DataUploader/>
            <FormatSelector/>
            <Button onClick={onProjectCreateButtonClick}>프로젝트 생성</Button>
        </div>
    )
}
export default ProjectCreatePage;