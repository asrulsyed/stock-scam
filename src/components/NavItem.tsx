interface props {
  text: string;
  isActive: boolean;
}

const NavItem = ({text, isActive}: props) => {
  return (
    <p className={`${isActive ? 'border-color1': 'border-transparent'} 
    border-b-4 hover:border-color1 font-bold text-xl py-2 px-2 text-center
    transition-all duration-300 ease-in-out`}>
      {text}
    </p>
  )
}

export default NavItem