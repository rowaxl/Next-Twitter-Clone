import NextLink, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface ILinkProps extends LinkProps {
  className: string
  activeClassName?: string
  inactiveClassName?: string
  children: Function
}

export interface LinkChildrenProp {
  isActive: boolean
}

const Link = ({
  href,
  activeClassName,
  inactiveClassName,
  className,
  children,
  ...resProps
}: ILinkProps) => {
  const router = useRouter()
  let isActive = router.pathname === href

  const currentClassName = `${className} ${ isActive ? activeClassName : inactiveClassName }`

  return (
    <NextLink href={href} {...resProps}>
      <a className={currentClassName} href="">
        {children({ isActive })}
      </a>
    </NextLink>
  )
}

export default Link