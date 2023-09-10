import { test } from "@bg3-waldo/core";
import { Flex, styled } from "../styled-system/jsx";
import "./App.css";
import { Radio, RadioGroup } from "./ui/Radio";

function App() {
  const value = test();

  return (
    <>
      <styled.header
        padding={4}
        fontSize={16}
        fontWeight="semibold"
        borderBottom="1px solid"
        borderColor="gray.500"
      >
        Baldurs Gate 3
      </styled.header>
      <styled.main padding={4} maxW="1200px">
        <Flex flexDir="column" gap={2}>
          <styled.label
            fontSize={16}
            fontWeight="semibold"
            htmlFor="machine-translation"
          >
            기계번역
          </styled.label>
          <RadioGroup id="machine-translation">
            <Radio
              value="none"
              label="미포함"
              description="손번역 되지 않은 문장이 영어 원문으로 출력됩니다."
            />
            <Radio
              value="deepl"
              label="DeepL 기계번역"
              description="손번역 되지 않은 문장이 DeepL API를 통해 번역된 한국어로 출력됩니다."
            />
            <Radio
              value="stablefluffy"
              label="StableFluffy AI번역"
              description="손번역 되지 않은 문장이 StableFluffy 개인 제작 AI 모델을 통해 번역된 한국어로 출력됩니다."
            />
          </RadioGroup>
        </Flex>
      </styled.main>
    </>
  );
}

export default App;
