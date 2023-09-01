import Header from "./Components/Header";
import LeftPanel from "./Components/LeftPanel";
import RightPanel from "./Components/RightPanel";

export default function App() {
  return (
    <div className="grid h-screen App grid-rows-[auto,1fr]">
      <Header />
      <div className="grid divide-x  divide-[#1c1c1c] > * + * App grid-cols-[1fr,4fr]">

        <LeftPanel />
        <RightPanel />


      </div>
    </div>
  )
}