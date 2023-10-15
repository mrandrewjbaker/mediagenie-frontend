import { useEffect, useState } from 'react';
import { MaterialSymbol } from 'material-symbols';
import scss from './MIcon.module.scss';


interface MIconProps {
  iconStyle?: 'outlined' | 'rounded' | 'sharp';
  icon?: MaterialSymbol;
  className?: string;
}

export const MIcon: React.FC<MIconProps> = ({
  iconStyle,
  icon,
  className,
}) => {
  const [getMIconStyleClassName, setMIconStyleClassName] = useState<string>('')
  const [getMIconSymbolClassName, setMIconSymbolClassName] = useState<string>('')
  const [getMIconClassNames, setMIconClassNames] = useState<string[]>([]);

  useEffect(() => {
    const newIconStyle = iconStyle || 'outlined';

    if (!iconStyle) {
      console.warn(`MIcon: style prop is missing. Defaulting to outline`);
    }

    setMIconStyleClassName(`material-symbols-${newIconStyle}`)
  }, [iconStyle]);

  useEffect(() => {
    if (icon) {

    setMIconSymbolClassName(`material-symbols-${icon.toString()}`)

    }
  }, [icon]);

  useEffect(() => {
    const newClassNames: string[] = [];

    newClassNames.push(getMIconStyleClassName);
    newClassNames.push(getMIconSymbolClassName);
    
    const isSymbolAndStyleDefined = newClassNames.filter(className => className).length === 2;
    if (isSymbolAndStyleDefined && className) {
      newClassNames.push(className);
    }
    setMIconClassNames(newClassNames)
  }, [getMIconStyleClassName, getMIconSymbolClassName, className])

  return (
    <div className={scss.MIcon}>
      <span className={getMIconClassNames.join(' ')}>
        {icon?.toString()}
      </span>
    </div>
  )
}