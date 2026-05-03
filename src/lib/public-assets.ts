export const PUBLIC_ASSET_BASE_PATH = process.env.NODE_ENV === "production" ? "/clip2flip_web" : "";

// Utility function to handle asset paths for GitHub Pages deployment
export function publicAsset(path: string) {
  return `${PUBLIC_ASSET_BASE_PATH}${path}`;
}
