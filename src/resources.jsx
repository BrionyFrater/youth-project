import { div } from "@tensorflow/tfjs";

export default function Resources(){
    return(
        <div id="resources" className="flex gap-9 items-center justify-center p-10">

            <a href="https://www.nad.org/resources/american-sign-language/learning-american-sign-language/" >
            <div className="rounded-lg p-10 bg-black text-white hover:cursor-pointer hover:bg-blue-500">
                <p>Learn ASL</p>
            </div>
            </a>

            <a href="https://www.british-sign.co.uk/learn-online-british-sign-language-course/" >
            <div className="rounded-lg p-10 bg-black text-white hover:cursor-pointer hover:bg-blue-500">
                <p>Learn BSL</p>
            </div>
            </a>

        </div>
    )
}