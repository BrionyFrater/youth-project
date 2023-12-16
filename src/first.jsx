export default function First(){
    return(
        <div className="mb-32 flex justify-between items-center bg-[#ffffff] w-full h-[400px] pt-20 px-72 text-black">
            <div>

            <h1 className="text-5xl">Youre all
                <strong className="pl-2 text-[#89ea7c] font-extrabold">SignedUP</strong>
            </h1>

            <div className="max-w-md">
                <p className="whitespace-pre-line pt-10">
                    Welcome to SignedUP, where the beauty of sign language comes to life! 
                </p>

                <p className="pt-4">
                Unlock the world of communication through our dedicated platform designed for sign language learners. Whether you're a beginner taking your first steps into the world of signing or an experienced signer looking to enhance your skills, we're here to guide you on your journey.
                </p>
            </div>

            </div>

            <img src="/handup.jpg" className="w-[300px] rounded-lg"/>

        </div>
    )
}