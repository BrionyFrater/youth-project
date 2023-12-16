export default function Header(){
  //bg-[#ffe1a0] good cream
    return(
        <nav className="bg-[#89d994] py-2 px- flex justify-between items-center" >
           <img src="/logo.png" className="w-[300px]"/>
           <ul className="flex gap-9 flex-wrap pr-32">

            <a href="#video">
              <li className="font-bold text-black hover:text-[#e9ff88] hover:cursor-pointer transition-all ease-in-out">Sign Helper</li>

            </a>

            <a href="#resources">
              <li className="font-bold text-black hover:text-[#e9ff88] hover:cursor-pointer transition-all ease-in-out">Resources</li>
            </a>

           
           </ul>


        </nav>
    )
}