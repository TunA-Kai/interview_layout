import Button from './Button'

interface SidebarProps {
  additionalStyles: string
}

function Sidebar({ additionalStyles }: SidebarProps) {
  return (
    <nav className={`bg-[#191718] ${additionalStyles}`}>
      <Button text='Home' />
      <Button text='Services' />
      <Button text='News' />
      <Button text='Blog' />
      <Button text='Contact' />
    </nav>
  )
}

export default Sidebar
