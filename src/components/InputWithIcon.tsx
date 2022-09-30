import { ReactNode, ChangeEvent, forwardRef } from 'react'

type Props = {
    value: string;
    onChange: (value: string) => void;
    icon: ReactNode;
}

const InputWithIcon = forwardRef<HTMLInputElement, Props>((
  { value, onChange, icon }, ref
) => {
  const onHandleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    onChange(target.value)
  }

  return (
    <div className=''>
      {icon}
      <input
        ref={ref}
        className=''
        value={value}
        placeholder='type'
        onChange={onHandleInput}
      />
    </div>
  )
})

export default InputWithIcon
