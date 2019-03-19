import * as React from 'react'
import * as icons from './icons'
import './icon.scss'

export type Icons = typeof icons
export type IconName = keyof Icons
export type IconSize = 'small' | 'medium' | 'large'

interface IconProps {
  name: IconName
  size?: IconSize
}

/**
 * Icon
 */
const Icon: React.SFC<IconProps> = ({ name, size = 'small' }) => {
  const { viewBox, id } = icons[name]
  return (
    <span className={`icon icon--${size}`}>
      <svg viewBox={viewBox}>
        <use xlinkHref={`#${id}`} href={`#${id}`} />
      </svg>
    </span>
  )
}

export default Icon
