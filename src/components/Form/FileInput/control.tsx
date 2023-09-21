import { ComponentProps, FC } from 'react'

type IControlProps = ComponentProps<'input'>

export const Control: FC<IControlProps> = (props) => {
  return <input type="file" className="sr-only" {...props} />
}
