import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M12.39 2.44L14.6 4.65l-2.21 2.21L10.18 4.65l2.21-2.21m0 19.12l2.21-2.21-2.21-2.21-2.21 2.21 2.21 2.21M2.44 12.39L4.65 14.6l2.21-2.21L4.65 10.18l-2.21 2.21m19.12 0l-2.21-2.21-2.21 2.21 2.21 2.21 2.21-2.21M12 5.86L16.14 10H7.86L12 5.86m0 12.28L7.86 14h8.28L12 18.14m-5.86-6.14L10 7.86v8.28L5.86 12m12.28 0L14 16.14V7.86L18.14 12z" />
    </svg>
  );
}
