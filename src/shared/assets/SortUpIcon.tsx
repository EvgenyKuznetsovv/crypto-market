import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";

const SortUpIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    fill={"none"}
    height={44}
    role={"img"}
    viewBox={"0 0 44 44"}
    width={44}
    {...props}>
    <g clipPath={"url(#a)"}>
      <path
        d={"m11 27.5 11-11 11 11"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={2.75}
      />
    </g>
    <defs>
      <clipPath id={"a"}>
        <path d={"M0 0h44v44H0z"} fill={"currentColor"} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SortUpIcon);
const Memo = memo(ForwardRef);

export default Memo;
