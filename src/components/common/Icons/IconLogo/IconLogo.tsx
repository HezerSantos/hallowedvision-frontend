import logo from "./logo.png";
import logo4xx from "./logo_4xx.png";
import logo5xx from "./logo_5xx.png";
import logo401 from "./logo401.png";

interface IconLogoProps {
  logoKey?: LogoKeys;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  aspectRatio?: string;
}

type LogoKeys = "401" | "4XX" | "BASE" | "500";
const LOGOS = new Map<LogoKeys, string>([
  ["BASE", logo],
  ["401", logo401],
  ["4XX", logo4xx],
  ["500", logo5xx],
]);

const IconLogo = ({
  logoKey = "BASE",
  width = 124,
  height,
  borderRadius,
  aspectRatio = "auto",
}: IconLogoProps) => {
  return (
    <img
      src={LOGOS.get(logoKey)}
      alt="Logo"
      style={{
        borderRadius,
        width,
        height: height ?? (aspectRatio !== "auto" ? "auto" : undefined),
        aspectRatio,
      }}
    />
  );
};

export default IconLogo;
