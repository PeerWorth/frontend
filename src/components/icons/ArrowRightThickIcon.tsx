import { FC } from 'react';

interface ArrowRightThickIconProps {
  color?: string;
}

const ArrowRightThickIcon: FC<ArrowRightThickIconProps> = ({
  color = '#141415',
}) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M21.4193 11.0807C21.9269 11.5884 21.9269 12.4115 21.4193 12.9192L14.4193 19.9192C13.9116 20.4269 13.0885 20.4269 12.5808 19.9192C12.0731 19.4115 12.0731 18.5884 12.5808 18.0807L17.3616 13.3H3.5001C2.78213 13.3 2.2001 12.7179 2.2001 12C2.2001 11.282 2.78213 10.7 3.5001 10.7H17.3616L12.5808 5.91919C12.0731 5.41151 12.0731 4.58839 12.5808 4.08071C13.0885 3.57303 13.9116 3.57303 14.4193 4.08071L21.4193 11.0807Z'
        fill={color}
      />
    </svg>
  );
};

export default ArrowRightThickIcon;
