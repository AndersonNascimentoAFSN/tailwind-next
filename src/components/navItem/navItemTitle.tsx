interface NavItemTitleProps {
  title: string
}

export function NavItemTitle({ title }: NavItemTitleProps) {
  return (
    <span className="font-medium text-zinc-700 group-hover:text-violet-500">
      {title}
    </span>
  )
}
