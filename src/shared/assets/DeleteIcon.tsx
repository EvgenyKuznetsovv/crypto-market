import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";

const DeleteIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    fill={"none"}
    height={33}
    role={"img"}
    viewBox={"0 0 33 33"}
    width={33}
    {...props}>
    <g
      clipPath={"url(#a)"}
      stroke={"currentColor"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeWidth={2}>
      <path
        d={
          "M5.5 9.625h22M13.75 15.125v8.25M19.25 15.125v8.25M6.875 9.625l1.375 16.5a2.75 2.75 0 0 0 2.75 2.75h11a2.75 2.75 0 0 0 2.75-2.75l1.375-16.5M12.375 9.625V5.5a1.375 1.375 0 0 1 1.375-1.375h5.5A1.375 1.375 0 0 1 20.625 5.5v4.125"
        }
      />
    </g>
    <defs>
      <clipPath id={"a"}>
        <path d={"M0 0h33v33H0z"} fill={"currentColor"} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DeleteIcon);
const Memo = memo(ForwardRef);

export default Memo;