import { useRef, useState } from "react"
import { usePDF } from 'react-to-pdf';
import html2canvas from 'html2canvas';


function Card() { 
  const { toPDF, targetRef } = usePDF({filename: 'card.pdf'});

  const [fName, setFname] = useState('Rahul')
  const [LName, setLname] = useState('Sheth')
  const [title, setTname] = useState('3D Animator')
  const [company, setCname] = useState('XYZ Company')
  const [email, setEmail] = useState('rahuk@example.com')
  const [num, setNumber] = useState('123 456-7890')
  const [website, setWebsite] = useState('https://www.rahulsheth.com')
  const [instagram, setInstagram] = useState('instagram.com/rahulsheth')
  const [facebook, setFacebook] = useState('facebook.com/rahulsheth')
  const [twitter, setTwitter] = useState('twitter.com/rahulsheth')
  const [linkedin, setLinkedin] = useState('linkedin.com/rahulsheth')

  const firstnameInput = useRef(null)
  const lastnameInput = useRef(null)
  const titleInput = useRef(null)
  const companyInput = useRef(null)
  const emailInput = useRef(null)
  const numberInput = useRef(null)
  const websiteInput = useRef(null)
  const instaInput = useRef(null)
  const fbInput = useRef(null)
  const twitterInput = useRef(null)
  const linkedinInput = useRef(null)

  const handleInput = () =>{
    const fNameValue = firstnameInput.current.value
    const LNameValue = lastnameInput.current.value
    const titleValue = titleInput.current.value
    const companyValue = companyInput.current.value
    const emailValue = emailInput.current.value
    const numberValue = numberInput.current.value
    const websiteValue = websiteInput.current.value
    const instaValue = instaInput.current.value
    const fbValue = fbInput.current.value
    const twitterValue = twitterInput.current.value
    const linkedinValue = linkedinInput.current.value

    setFname(fNameValue)
    setLname(LNameValue)
    setTname(titleValue)
    setCname(companyValue)
    setEmail(emailValue)
    setNumber(numberValue)
    setWebsite(websiteValue)
    setInstagram(instaValue)
    setFacebook(fbValue)
    setTwitter(twitterValue)
    setLinkedin(linkedinValue)
  }

  const handleImageDownload = () =>{ 
    const element = document.getElementById('print');
    html2canvas(element).then(canvas => {
        const data = canvas.toDataURL('image/jpg');
        const link = document.createElement('a');
        link.href = data;
        link.download = 'card-image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  })
}
  return (
    <>
      <div className="mainContainer flex justify-around p-8 w-full h-full">
        <div className="editing-side shadow-md rounded-md p-3 m-2 w-[45rem] bg-gray-200 border-blue-700 h-auto">
            <div className="edit-area">
            <div className="heading">
                <h1 className="font-extrabold">Edit Card Details</h1>
            </div>

            <hr className="mb-2 border-gray-400" />
            <div className="inputsResume mt-5">
            <div className="firstRow flex justify-between mb-2">
                <input type="text" ref={firstnameInput} onChange={handleInput} className="p-1 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black" placeholder="First Name" />
                <input type="text" ref={lastnameInput} onChange={handleInput} className="px-2 py-2 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black" placeholder="Last Name" />
              </div>
            <div className="firstRow flex justify-between mb-2">
                <input type="text" ref={titleInput} onChange={handleInput}  className="p-1 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black" placeholder="Your Title" />
                <input type="text" ref={companyInput} onChange={handleInput} className="px-2 py-2 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black" placeholder="Company Name" />
              </div>
            <div className="firstRow flex justify-between mb-2">
                <input type="email" ref={emailInput} onChange={handleInput} className="p-1 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black" placeholder="Email Address" />
                <input type="number" ref={numberInput} onChange={handleInput} className="px-2 py-2 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black" placeholder="Phone Number" />
              </div>
            <div className="firstRow flex justify-between mb-2">
                <input type="text" ref={websiteInput} onChange={handleInput} className="p-1 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black" placeholder="Website Link" />
              </div>
              <div className="socialinks mt-4">
                <div className="heading">
                <h1 className="font-extrabold">Social Links</h1> 
                </div>
                <hr className="mb-3 border-gray-300" />
            <div className="firstRow flex justify-between mb-2">
                <input type="text" className="p-1 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black" ref={instaInput} onChange={handleInput} placeholder="Instagram Profile" />
                <input type="text" className="px-2 py-2 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black" ref={fbInput} onChange={handleInput} placeholder="Facebook Profile" />
              </div>
            <div className="firstRow flex justify-between mb-2">
                <input type="text" className="p-1 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black" ref={twitterInput} onChange={handleInput} placeholder="Twitter Profile" />
                <input type="text" className="px-2 py-2 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black" ref={linkedinInput} onChange={handleInput} placeholder="Linkedin Profile" />
              </div>
              </div>
            </div>
            </div>
        </div>
        <div className="review-side rounded-md flex flex-col items-center justify-center shadow-md w-[40rem] m-2 bg-[#A076E5] h-[60vh]">
            <div ref={targetRef} id="print" className="card-layout w-[35rem]">
            <div className=" bg-white p-2 shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gray-800 rounded-[5px] p-4">
                <h2 className="text-white text-2xl font-bold">{fName} {LName}</h2>
                <p className="text-gray-300">{title} {company}</p>
            </div>
            <div className="p-4 ">
                <p className="text-gray-700"><span className="font-bold">Email</span>: {email}</p>
                <p className="text-gray-700"><span className="font-bold">Phone</span>: {num}</p>
                <a href={website} target="_blank"><p className="text-gray-700"><span className="font-bold">Website</span>: {website}</p></a>
            </div>
            <hr className="border-gray-700"/>
            <div className="p-4 ">
                <p className="text-gray-700"><span className="font-bold">Instagram</span>: {instagram}</p>
                <p className="text-gray-700"><span className="font-bold">Facebook</span>: {facebook}</p>
                <p className="text-gray-700"><span className="font-bold">Twitter</span>: {twitter}</p>
                <p className="text-gray-700"><span className="font-bold">Linkedin</span>: {linkedin}</p>
            </div>
        </div>
            </div>

            <div className="buttons mt-4">
              <button className="bg-[#007AFF] px-5 mr-4 py-2 rounded-[5px] text-white font-semibold" onClick={() => toPDF()}>Export</button>
              <button className="bg-[#007AFF] px-5 py-2 rounded-[5px] text-white font-semibold" onClick={handleImageDownload}>Share As Image</button>
            </div>
        </div>

      </div>
        
    </>
  )
}

export default Card
