import DeviseToggler from "./DeviseToggler";
import TsenaFilter from "./TsenaFilter";

export default function Header() {
  return (
    <div className="flex items-center justify-center md:justify-between flex-col md:flex-row">
        <TsenaFilter/>
        <DeviseToggler/>
    </div>
  )
}
