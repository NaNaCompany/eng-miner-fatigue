# 마이너 누적 피로손상 계산기

하중 구간별 실제 반복수와 해당 조건의 피로수명을 목록으로 입력하여 선형 누적 손상지수를 계산합니다.

- ID: E129
- App: https://nanalab.kr/eng-miner-fatigue/
- Repository: https://github.com/NaNaCompany/eng-miner-fatigue
- Formula: D = Σ nᵢ / Nᵢ

## Model and data

각 Nᵢ는 같은 재료·하중 크기·평균응력·환경에 대응하는 검증된 피로수명으로 사용자가 제공합니다. 선형 손상 합산은 하중 순서·상호작용을 무시하며 D=1은 이 모델의 명목 임계값입니다. 실제 파손 시점이나 안전성을 보증하지 않습니다. 1~100개 하중 구간을 입력할 수 있고 D>1도 그대로 표시합니다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
