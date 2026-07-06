export const SITE_ORIGIN = "https://ai-frame-fix-server.vercel.app";

export const APP_DISPLAY_NAME = "AI Video Frame Extract";

export const IOS_APP_STORE_WEB =
  "https://apps.apple.com/app/id6757664175";

export const PLAY_STORE_WEB =
  "https://play.google.com/store/apps/details?id=com.smartcompany.aiFrameFix";

export const IOS_APP_STORE_ITMS =
  "itms-apps://apps.apple.com/app/id6757664175";

export const PLAY_STORE_MARKET =
  "market://details?id=com.smartcompany.aiFrameFix";

type Platform = "ios" | "android" | "other";

export function detectPlatformFromUa(userAgent: string): Platform {
  const ua = userAgent.toLowerCase();
  if (ua.includes("android")) {
    return "android";
  }
  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) {
    return "ios";
  }
  return "other";
}

export function pickStoreUrl(userAgent: string): string {
  return detectPlatformFromUa(userAgent) === "android"
    ? PLAY_STORE_WEB
    : IOS_APP_STORE_WEB;
}
