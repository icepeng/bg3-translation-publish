import { css } from "../styled-system/css";
import { Divider, Flex, styled } from "../styled-system/jsx";
import "./App.css";
import { Checkbox } from "./ui/Checkbox";
import { Radio, RadioGroup } from "./ui/Radio";
import { Thumbnail } from "./ui/Thumbnail";

function App() {
  return (
    <>
      <styled.header
        padding={4}
        fontSize={16}
        fontWeight="semibold"
        borderBottom="1px solid"
        borderColor="gray.500"
      >
        발더스 게이트 3 한국어 패치 다운로드
      </styled.header>
      <styled.main padding={4} gap={10} maxW="1200px">
        <Flex flexDir="column" gap={2}>
          <styled.label
            fontSize={30}
            fontWeight="semibold"
            htmlFor="translation-selection"
          >
            권장 설정으로 다운로드
          </styled.label>
          <styled.text>
            일반적으로 가장 많이 사용되는 버전입니다.
            <br />
            손번역 + AI 번역, 본명조 폰트를 적용한 한글패치를 다운로드합니다.
          </styled.text>

          <styled.button>다운로드</styled.button>

          <Divider mt={4} mb={4} />
          <styled.label
            fontSize={30}
            fontWeight="semibold"
            htmlFor="translation-selection"
          >
            커스터마이징
          </styled.label>
          <styled.label
            fontSize={25}
            fontWeight="semibold"
            htmlFor="translation-selection"
          >
            번역 데이터
          </styled.label>
          <RadioGroup id="translation-selection" defaultValue="stablefluffy">
            <Radio value="human" label="손번역">
              팀 왈도에서 직접 번역한 데이터만 적용합니다.
              <br />
              번역되지 않은 문장은 영어로 출력됩니다.
            </Radio>
            <Radio value="stablefluffy" label="손번역 + StableFluffy AI번역">
              손번역 되지 않은 문장이 StableFluffy 제작 AI 모델을 통해 번역된
              한국어로 출력됩니다.
            </Radio>
            <Radio value="deepl" label="손번역 + DeepL 기계번역">
              손번역 되지 않은 문장이 DeepL 번역기를 통해 번역된 한국어로
              출력됩니다.
            </Radio>
          </RadioGroup>
          <Divider mt={4} mb={4} />
          <styled.label
            fontSize={25}
            fontWeight="semibold"
            htmlFor="font-selection"
          >
            폰트
          </styled.label>
          <RadioGroup
            id="font-selection"
            defaultValue="notoserif"
            required={true}
          >
            <Radio value="notoserif" label="본명조">
              <Thumbnail src="/본명조.png" />
            </Radio>
            <Radio value="hamlet" label="함렛체">
              <Thumbnail src="/함렛.png" />
            </Radio>
            <Radio value="ridibatang" label="리디바탕체">
              <Thumbnail src="/리디바탕.png" />
            </Radio>
          </RadioGroup>
          <Divider mt={4} mb={4} />
          <styled.label
            fontSize={25}
            fontWeight="semibold"
            htmlFor="font-selection"
          >
            추가 정보
          </styled.label>
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 4,
            })}
          >
            <Checkbox value="sourcetext" label="원문 병기">
              <Flex flexDir="column" gap={2}>
                <Thumbnail src="/원문병기.png" />
                기계번역이 적용된 대사에 영어 원문을 병기합니다.
              </Flex>
            </Checkbox>
            <Checkbox value="favor" label="호감도 증감">
              <Flex flexDir="column" gap={2}>
                <Thumbnail src="/호감도.png" />
                선택지에 호감도 증감을 표시합니다.
              </Flex>
            </Checkbox>
            <div />
          </div>
        </Flex>
      </styled.main>
    </>
  );
}

export default App;
