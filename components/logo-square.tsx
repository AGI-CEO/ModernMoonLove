import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx({
        'flex h-[80px] w-[80px] items-center justify-center rounded border': !size,
        'flex h-[20px] w-[20px] items-center justify-center rounded border': size === 'sm'
      })}
    >
      <LogoIcon className="object-contain" />
    </div>
  );
}
