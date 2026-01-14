# AI Frame Fix Server

Next.js 기반 서버로 settings API를 제공합니다.

## 설치

```bash
npm install
```

## 개발 서버 실행

```bash
npm run dev
```

## 빌드

```bash
npm run build
npm start
```

## API

### GET /api/settings

광고 설정을 반환합니다.

응답 예시:
```json
{
  "ios_ad": "rewarded_ad",
  "android_ad": "rewarded_ad",
  "ios_ads": [{"initial_ad": 5}, {"rewarded_ad": 1}],
  "android_ads": [{"initial_ad": 5}, {"rewarded_ad": 1}],
  "ref": {
    "ios": {
      "rewarded_ad": "ca-app-pub-...",
      "initial_ad": "ca-app-pub-..."
    },
    "android": {
      "rewarded_ad": "ca-app-pub-...",
      "initial_ad": "ca-app-pub-..."
    }
  }
}
```

## 배포

Vercel에 배포하면 자동으로 API가 활성화됩니다.

# AIFrameFixServer
