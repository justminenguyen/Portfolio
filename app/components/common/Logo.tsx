import { LogoImage } from "~/assets/Icon";

export default function Logo({
  width,
  height,
  animate = false,
}: {
  width?: number;
  height?: number;
  animate?: boolean;
}) {
  return (
    <div className={`container-circle ${animate ? "animate" : ""}`}>
      <div className="logo">
        <LogoImage width={width} height={height} />
      </div>
      <div className="left-circle">
        <div className="circle-visible common-circle-visible"></div>
        <div className="circle">
          <div className="circle">{animate && <div className="dot"></div>}</div>
        </div>
      </div>

      <div className="right-circle">
        <div className="circle-visible common-circle-visible"></div>
        <div className="circle">{animate && <div className="dot"></div>}</div>
      </div>
    </div>
  );
}
