export const tool={
  "id": "E129",
  "slug": "eng-miner-fatigue",
  "title": "마이너 누적 피로손상 계산기",
  "title_en": "Miner cumulative fatigue damage calculator",
  "category": "역학·재료",
  "category_en": "Mechanics and materials",
  "fields": [],
  "result_label": "선형 누적 피로손상 D",
  "result_label_en": "Linear cumulative fatigue damage D",
  "result_dimension": "ratio",
  "formula": "D = Σ nᵢ / Nᵢ",
  "purpose": "하중 구간별 실제 반복수와 해당 조건의 피로수명을 목록으로 입력하여 선형 누적 손상지수를 계산합니다.",
  "purpose_en": "Sum fatigue-damage fractions from an editable list of applied and allowable cycle counts.",
  "assumptions": "각 Nᵢ는 같은 재료·하중 크기·평균응력·환경에 대응하는 검증된 피로수명으로 사용자가 제공합니다. 선형 손상 합산은 하중 순서·상호작용을 무시하며 D=1은 이 모델의 명목 임계값입니다. 실제 파손 시점이나 안전성을 보증하지 않습니다. 1~100개 하중 구간을 입력할 수 있고 D>1도 그대로 표시합니다.",
  "assumptions_en": "Required: user-supplied fatigue lives Nᵢ appropriate to the material, load level, mean stress, and environment. Linear summation excludes load-sequence and interaction effects. D = 1 is the model’s nominal threshold and does not certify actual failure time or safety. The list supports 1 to 100 load blocks; D > 1 remains visible.",
  "sources": [
    {
      "label": "NASA — cumulative fatigue damage using Miner’s rule",
      "url": "https://ntrs.nasa.gov/api/citations/20230004376/downloads/20230004376.pdf"
    }
  ],
  "condition": "적합한 피로수명 입력과 선형 손상 모델의 한계를 확인했습니다.",
  "condition_en": "I confirm appropriate fatigue-life inputs and the limits of linear damage summation.",
  "groups": [
    {
      "key": "loads",
      "label": "하중 구간 목록",
      "label_en": "Load-block list",
      "fields": [
        {
          "key": "n",
          "label": "실제 반복수 nᵢ",
          "label_en": "Applied cycles nᵢ",
          "dimension": "turns",
          "example": 1000,
          "constraint": "nonnegative",
          "display_unit": "turn"
        },
        {
          "key": "total",
          "label": "해당 조건 피로수명 Nᵢ",
          "label_en": "Fatigue life at this condition Nᵢ",
          "dimension": "turns",
          "example": 10000,
          "constraint": "positive",
          "display_unit": "turn"
        }
      ],
      "examples": [
        {
          "n": 1000,
          "total": 10000
        },
        {
          "n": 2000,
          "total": 5000
        },
        {
          "n": 300,
          "total": 3000
        }
      ],
      "minRows": 1,
      "maxRows": 100
    }
  ],
  "site": "https://nanalab.kr/eng-miner-fatigue/",
  "repository": "https://github.com/NaNaCompany/eng-miner-fatigue",
  "output_unit": "1"
};
