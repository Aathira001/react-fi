import React, { forwardRef } from 'react';
const Gitlab = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  const formattedSize = formatSize(size);
    return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={formattedSize}
      height={formattedSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
    </svg>
  );
});
Gitlab.displayName = 'Gitlab';
export default Gitlab;
