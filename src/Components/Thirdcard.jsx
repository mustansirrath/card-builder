import { useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { usePDF } from "react-to-pdf";
import html2canvas from "html2canvas";

function Card() {
  const { toPDF, targetRef } = usePDF({ filename: "card.pdf" });
  const [list, setList] = useState({
    firstName: "Alex",
    lastname: "Morgan",
    title: "Freelance Photographer",
    address: "96th Rte Victor, New York(NY)",
    email: "alexiscool@gmail.com",
    number: "(910) 326-7275",
    fimage: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  })

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const titleRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const numberRef = useRef(null);

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setList((prevData) => ({ ...prevData, fimage: imageUrl }));
    }
  };

  const handleImageDownload = () => {
    const element = document.getElementById("print");
    html2canvas(element).then((canvas) => {
      const data = canvas.toDataURL("image/jpg");
      const link = document.createElement("a");
      link.href = data;
      link.download = "card-image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const handleChange = (field, ref) => {
    setList((prevData) => ({
      ...prevData,
      [field]: ref.current.value,
    }));
  }
  return (
    <>
      <div className="mainContainer flex justify-around p-8 w-full h-full">
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
                  ref={firstNameRef}
                  onChange={() => handleChange("firstName", firstNameRef)}
                  className="p-1 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  ref={lastNameRef}
                  onChange={() => handleChange("lastname", lastNameRef)}
                  className="px-2 py-2 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black"
                  placeholder="Last Name"
                />
              </div>
              <div className="firstRow flex justify-between mb-2">
                <input
                  type="text"
                  ref={titleRef}
                  onChange={() => handleChange("title", titleRef)}
                  className="p-1 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black"
                  placeholder="Your Title"
                />
                <input
                  type="file"
                  placeholder="Your Image"
                  onChange={handleImage}
                  className="p-1 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black"
                />
              </div>
              <div className="firstRow flex justify-between mb-2">
                <input
                  type="email"
                  ref={emailRef}
                  onChange={() => handleChange("email", emailRef)}
                  className="p-1 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black"
                  placeholder="Email Address"
                />
                <input
                  type="number"
                  ref={numberRef}
                  onChange={() => handleChange("number", numberRef)}
                  className="px-2 py-2 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black"
                  placeholder="Phone Number"
                />
              </div>
              <div className="firstRow flex justify-between mb-2">
                <input
                  type="address"
                  ref={addressRef}
                  onChange={() => handleChange("address", addressRef)}
                  className="p-1 bg-white border-2 focus:outline-none w-[21rem] placeholder:text-gray-500 border-gray-400 rounded-[5px]  text-black"
                  placeholder="Address"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="review-side rounded-md flex flex-col items-center justify-center shadow-md w-[40rem] m-2 bg-[#A076E5] h-[60vh]">
          <div ref={targetRef}  className="card-layout w-[35rem]">
            <div id="print" className=" bg-[#E3DFDC] flex shadow-lg rounded-lg overflow-hidden">
              <div className="rightSide">
                <div className="logo">
                  <img className="w-[17rem]" src={list.fimage} alt="" />
                </div>
              </div>
              <div className="leftSide flex justify-around flex-col items-center w-[60%] bg-[#112058]">
                <div className="firstRowHeading text-center text-white">
                  <h1 className="font-bold text-[20px]">{list.firstName} {list.lastname}</h1>
                  <h1>{list.title}</h1>
                </div>
                <div className="firstRowHeading text-white">
                  <div className="innerRow flex">
                  {/* <FontAwesomeIcon icon={faLocationDot} className="mr-3" /> */}
                    <p className="my-1">{list.address}</p>
                  </div>
                  <div className="innerRow flex items-center">
                  {/* <FontAwesomeIcon icon={faEnvelope} className="mr-3"/> */}
                    <p className="my-1">{list.email}</p>
                  </div>
                  <div className="innerRow flex items-center">
                  {/* <FontAwesomeIcon icon={faPhoneVolume} className="mr-3" /> */}
                    <p className="my-1">{list.number}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="buttons mt-4">
            <button
              className="bg-[#007AFF] px-5 mr-4 py-2 rounded-[5px] text-white font-semibold"
              onClick={() => toPDF()}
            >
              Export
            </button>
            <button
              className="bg-[#007AFF] px-5 py-2 rounded-[5px] text-white font-semibold"
              onClick={handleImageDownload}
            >
              Share As Image
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
