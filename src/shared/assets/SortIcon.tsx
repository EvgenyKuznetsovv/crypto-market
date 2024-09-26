import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";

const SortIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    fill={"none"}
    height={44}
    role={"img"}
    viewBox={"0 0 44 44"}
    width={44}
    {...props}>
    <g
      clipPath={"url(#a)"}
      stroke={"currentColor"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeWidth={2.75}>
      <path d={"M14.667 16.5 22 9.167l7.333 7.333M29.333 27.5 22 34.833 14.667 27.5"} />
    </g>
    <defs>
      <clipPath id={"a"}>
        <path d={"M0 0h44v44H0z"} fill={"currentColor"} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SortIcon);
const Memo = memo(ForwardRef);

export default Memo;