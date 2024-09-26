import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";

const SortDownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    fill={"none"}
    height={35}
    role={"img"}
    viewBox={"0 0 35 35"}
    width={35}
    {...props}>
    <path
      d={"m8.75 13.125 8.75 8.75 8.75-8.75"}
      stroke={"currentColor"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SortDownIcon);
const Memo = memo(ForwardRef);

export default Memo;
