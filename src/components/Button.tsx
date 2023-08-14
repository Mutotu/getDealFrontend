import { IButton } from "../interfaces"


const Button = ({ buttonName1, buttonName2, type, onClick }: IButton) => {

  return <div className="buttons-log">
    <button type={type}>{buttonName1}</button>
    <button onClick={onClick}>{buttonName2}</button>
  </div>
}

export default Button