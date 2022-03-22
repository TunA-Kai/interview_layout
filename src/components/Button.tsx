interface ButtonProps {
  text: string
}

function Button({ text }: ButtonProps) {
  return (
    <button className='w-full border-b border-[#5c5c5c] py-5 text-center text-[#aaa] hover:bg-[#5c5c5c] hover:text-white lg:pl-4 lg:text-left'>
      {text}
    </button>
  )
}

export default Button
