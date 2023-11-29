import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <LogoIcon
      className={clsx({
        'h-[40px] w-[40px] rounded border': !size,
        'h-[20px] w-[20px] rounded border': size === 'sm'
      })}
    />
  );
}
