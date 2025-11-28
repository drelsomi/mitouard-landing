import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  typedRoutes: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  async headers() {
    return [
      {
        source: "/assets/app-release.apk",
        headers: [
          { key: "Content-Type", value: "application/vnd.android.package-archive" },
          { key: "Content-Disposition", value: "attachment; filename=\"app-release.apk\"" },
        ],
      },
    ];
  },
};

export default nextConfig;
