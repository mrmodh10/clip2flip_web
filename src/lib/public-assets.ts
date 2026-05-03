export const PUBLIC_ASSET_BASE_PATH = process.env.NODE_ENV === "production" ? "/clip2flip_web" : "";

export function publicAsset(path: string) {
  return `${PUBLIC_ASSET_BASE_PATH}${path}`;
}
