# wanted-pre-onboarding-challenge-fe-2

> 타입스크립트 습득을 위한 챌린지 (with JSDOC)

#### https://enzy-o0.github.io/wanted-pre-onboarding-challenge-fe-2/

```
npm run doc
```

1. 명령어 입력 후, docs/index.html이 생성 되었는지 확인하기
2. index.html 열면 JSDOC 완성~

### 원티드 프리온보딩 챌린지 10월 (CSR / SSR with Next.js)

#### Assignment) 개인 블로그에 아래 질문에 대한 포스팅을 하고 링크를 제출해주세요.

- 1. CSR(Client-side Rendering)이란 무엇이며, 그것의 장단점에 대하여 설명해주세요.
- 2. SPA(Single Page Application)로 구성된 웹 앱에서 SSR(Server-side Rendering)이 필요한 이유에 대하여 설명해주세요.
- 3. Next.js 프로젝트를 세팅한 뒤 yarn start 스크립트를 실행했을 때 실행되는 코드를 nextjs github 레포지토리에서 찾은 뒤, 해당 파일에 대한 간단한 설명을 첨부해주세요.
  - [https://nextjs.org/docs/getting-started](https://nextjs.org/docs/getting-started) (Next.js 세팅 가이드)
  - [https://github.com/vercel/next.js/](https://github.com/vercel/next.js/) (Next.js Github 레포지토리)

#### 과제 제출

- 수행하신 과제는 챌린지 시작 후 전달될 안내에 따라 링크로 제출해주시고, 학습 수준 파악 및 강의 진행을 위해 사용될 예정입니다.

#### 과제에 대한 답변

- 1.  CSR은 클라이언드 사이드 렌더링의 약자로, 말 그대로 처음에 필요한 파일을 모두 서버에서 내려받아서 표출되는 렌더링을 말합니다
  - 화면 모두 렌더링이 되기에 초기 렌더링이 느립니다
  - 그런 대신에 사용자 경험이 더 좋습니다 렌더링이 다되어서 반응이 빠르기 때문이죠
- 2.  SSR의 가장 큰 이점은 검색 엔진에 대한 노출이 아닌가 싶습니다 index.html이 비어있는 CSR에 비해 SSR은 해당 파일에 메타태그가 노출되기 때문이죠
  - 그러므로, SPA에서는 싱글페이지기 때문에 위의 이유가 맞다고 생각합니다
- 3. https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/default/pages/index.js -> view
  - https://github.com/vercel/next.js/blob/canary/packages/next/server/next-server.ts
    -> server open
    -> next start는 next build 없이 실행되지 않는다
    -> .next 폴더가 존재하지 않을때 에러를 뿜고, 에러 발생 지점을 타고 들어가보았다
    next는 node 서버 실행 위에 돌아가는 SSR 프레임워크로 이곳에서 server가 실행되어 위의 view가 실행된다
