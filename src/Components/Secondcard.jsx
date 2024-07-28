import { useRef, useState } from "react";
import { usePDF } from "react-to-pdf";
import html2canvas from 'html2canvas';

function Card() {
  const { toPDF, targetRef } = usePDF({ filename: "card.pdf" });

  const [fName, setFname] = useState("Mehul");
  const [LName, setLname] = useState("Chauhan");
  const [title, setTname] = useState("Designer");
  const [about, setAbout] = useState(
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam, odit illum voluptatem distinctio labore pariatur dolorum corrupti dolorem voluptatum ullam quas,cupiditate, fugiat officiis!"
  );
  const [email, setEmail] = useState("mustan@example.com");
  const [num, setNumber] = useState("9875634589");
  const [nimage, setImage] = useState(
    "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const firstnameInput = useRef(null);
  const lastnameInput = useRef(null);
  const aboutInfoInput = useRef(null);
  const titleInput = useRef(null);
  const emailInput = useRef(null);
  const numberInput = useRef(null);

  const handleImageDownload = () =>{ 
    const element = document.getElementById('print');
    html2canvas(element).then(canvas => {
        const data = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = data;
        link.download = 'card-image.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  })
}

  const handleImage = (event) => {
    const file = event.target.files[0]
    if(file) {
      const imageUrl = URL.createObjectURL(file)
      setImage(imageUrl)
    }
  }
  const handleInput = () => {
   
    const fNameValue = firstnameInput.current.value;
    const LNameValue = lastnameInput.current.value;
    const titleValue = titleInput.current.value;
    const aboutValue = aboutInfoInput.current.value;
    const emailValue = emailInput.current.value;
    const numberValue = numberInput.current.value;

    setFname(fNameValue);
    setLname(LNameValue);
    setTname(titleValue);
    setAbout(aboutValue);
    setEmail(emailValue);
    setNumber(numberValue);
  };
  return (
    <>
      <div className="mainContainer flex flex-wrap items-center justify-around p-8 w-full h-full">
        <div className="editing-side shadow-md rounded-md p-3 m-2 w-[45rem] bg-gray-200 border-blue-700 h-auto">
          <div className="edit-area">
            <div className="heading">
              <h1 className="font-extrabold text-[20px]">Edit Card Details</h1>
            </div>

            <hr className="mb-2 border-gray-400" />
            <div className="inputsResume mt-5">
              <div className="firstRow flex justify-between mb-2">
                <input
                  type="text"
                  ref={firstnameInput}
                  onChange={handleInput}
                  className="p-1 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  ref={lastnameInput}
                  onChange={handleInput}
                  className="px-2 py-2 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black"
                  placeholder="Last Name"
                />
              </div>
              <textarea
                name=""
                ref={aboutInfoInput}
                onChange={handleInput}
                className="w-[43.5rem] h-[30vh] p-1 bg-white border-2 focus:outline-none placeholder:text-gray-500 resize-none border-gray-400 rounded-[5px] text-black"
                placeholder="About Yourself"
                id=""
              ></textarea>
              <div className="firstRow flex justify-between mb-2">
                <input
                  type="text"
                  ref={titleInput}
                  onChange={handleInput}
                  className="p-1 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black"
                  placeholder="Your Title"
                />
                <input
                  type="file"
                  placeholder="Your Image"
                  // ref={imageInput}
                  onChange={handleImage}
                  className="p-1 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black"
                />
              </div>
              <div className="firstRow flex justify-between mb-2">
                <input
                  type="email"
                  ref={emailInput}
                  onChange={handleInput}
                  className="p-1 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black"
                  placeholder="Email Address"
                />
                <input
                  type="number"
                  ref={numberInput}
                  onChange={handleInput}
                  className="px-2 py-2 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black"
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="review-side rounded-md flex flex-col items-center p-5 justify-center shadow-md w-[40rem] m-2 bg-[#A076E5] h-auto">
          <div className="Heading self-start">
            <h2 className="font-bold text-[20px] mb-3">Card Preview</h2>
          </div>
          <div ref={targetRef} id="print" className=" font-newsans card-layout w-[38rem]">
            <div className=" bg-black text-white flex justify-evenly p-2 shadow-lg rounded-lg overflow-hidden">
              <div className="partLeft mr-5 w-[40%]">
                <img className="rounded-[5%] my-5" src={nimage} alt="" />
              </div>
              <div className="partRight w-[60%]">
                <div className="rightFirstRow my-5 mx-2">
                  <h2 className="font-bold text-[22px]">
                    {fName} {LName}
                  </h2>
                  <p className="text-[17px] text-teal-400">{title}</p>
                </div>
                <div className="rightFirstRow mx-2 flex justify-between">
                  <div className="firstCol mr-3 ">
                    <h2 className="font-bold">Phone Number</h2>
                    <p className="text-teal-400">{num}</p>
                  </div>
                  <div className="firstCol mr-3">
                    <h2 className="font-bold">Email Address</h2>
                    <p className="text-teal-400">{email}</p>
                  </div>
                </div>
                <div className="rightFirstRow my-5 mx-2">
                  <p className="text-wrap text-justify">{about}</p>
                </div>
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
  );
}

export default Card;
