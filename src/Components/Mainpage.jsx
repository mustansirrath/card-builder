import { Link } from "react-router-dom";
function Mainpage() {
  return (
    <>
      <div className="mainContainer p-4 w-full h-auto flex-wrap flex items-center">
        <div className="cards">
          <div className="heading mb-5">
            <h1 className="font-bold text-[25px]">Find Your Perfect Card</h1>
          </div>
          <div className="cardsContainer border border-gray-200 flex flex-wrap justify-center">
            <div className="card-one border border-gray-300 flex flex-col justify-between m-3 p-2 rounded-[5px]">
              <Link 
              to='card1'>
                <img
                  className="w-[30rem] cursor-pointer rounded-[5px] hover:scale-[1.02] transition-all"
                  src="https://previews.dropbox.com/p/thumb/ACWek-49_XsbvQfhYSSvF-dMVRLQNGxgiKRYmPZptL6-CX3-P2YIrc6KRrM6-QR3cKoCiFBFbghzjkfIMuBKVkI7E48sPrwKes6M629vSAwhHeao70N0lRSHgm0w60VpZhoHGd2yNchOky7MGleNoPzU2tBX6bM8sihAWqlsAC-mY2KVQ-hEvk7ok_sWJc3yL8VBe12jjPVrS51ShmXVpVTNBoWG5j1qeiisEfTVSFyK7Iemv20jTbtqWLO-F6z_mGWlpUtUZKvshZKn8AWMmhqsyyVrXrPNL2nbRWwZyOUwj26JrYa5WJOtk7u-egXwxxCuYFllHz5QJRgTle2QKg6rtKGsPmKOb2qjRHr8GZHq_X3XpTskGUp0_hzcNp1qFDI/p.png"
                  alt=""
                />
              </Link>
              <div>
              <Link to='card1'> <h2 className="font-bold my-3">
                Modern minimalist black color business card design
              </h2></Link>
              <Link 
              to='card1'> <button className="bg-[#007AFF] px-3 py-2 text-[14px] rounded-[5px] text-white font-semibold">Edit Card</button></Link>
              </div>
            </div>
            <div className="card-one border border-gray-300 m-3 p-2 flex flex-col justify-between rounded-[5px]">
              <Link 
              to='card2'>
              <img
                className="w-[30rem] cursor-pointer rounded-[5px] hover:scale-[1.02] transition-all"
                src="https://previews.dropbox.com/p/thumb/ACUqZi2pvjmpr1ggz6CQXVem_itXlGbTcufBAmPtBX0MyATb_uJ578fmxWltUZuzCPLLSnJG68Biol4vg408Xy-a7z4d3Kyei5N2rAiaGWsTmfzgjzajoM-DazjP--93WtjsehRn9TvQnd_fWxPlWfiL5uKxUqfWkMg8_czDY_tLf02xZqE1pNwv8T1rBI3FuWNtsHVuYzMnx_SNdLOxKsHlGFJIEnPmL6C5CKANG5a5B1MzszaHJB4i5rP--Fx6jby7nloupTQ9pKtL3tooU98HwdkvwFcvHH2QzaLN9Otd-lpzWmIQFB2J2KY0IDQGURRsEJK-ORPkPodDeCPshxBypnJ6vjbNf15D-oC8BNTkRg/p.png  "
                alt=""
              />
              </Link>
              <div>
              <Link to='card2'><h2 className="font-bold my-3">
                Simple yet minimalistic business card design
              </h2></Link>
              <Link 
              to='card2'> <button className="bg-[#007AFF] px-3 py-2 text-[14px] rounded-[5px] text-white font-semibold">Edit Card</button> </Link>
              </div>
            </div>
            <div className="card-one border border-gray-300 m-3 p-2 flex flex-col justify-between rounded-[5px]">
              <Link 
              to='card3'>
              <img
                className="w-[30rem] cursor-pointer rounded-[5px] hover:scale-[1.02] transition-all"
                src="https://previews.dropbox.com/p/thumb/ACX2Qlq7u4b8eUN9u6EEaKrSjfdvZqjgoRQ7qD9xkDd6WZuHnqou_8ruUUXPxahIg1in9qc952IOO-ocG4OhkI_4kp2Iq2EdsEZGA2Pv9O68vQyq6sW4L-kccYONoGHupQLv3Jb4cokx6gk8_lrtbnpSQI3Ig-7zq20abl_2nzh4dO3ZFT1C5k0vcrm-_9gzIz3NAqlLgHMKlypET5wWVJjep-EHbgdRw43tWncllEtcuOLpIjc58Z9M1Emi1W6Jb1gMWpl1BdhiqudL_WXSxn2cKd8yLl7VpruLPh9k9Pd9xCxweYA1Odh1wTNnlq_o18ZUe7GtKlWH0YLCXEbVd-5K/p.png"
                alt=""
              />
              </Link>
              <div>
              <Link to='card3'><h2 className="font-bold my-3">
                Professional Modern Blue Business Card Design
              </h2></Link>
              <Link 
              to='card3'> <button className="bg-[#007AFF] px-3 py-2 text-[14px] rounded-[5px] text-white font-semibold">Edit Card</button> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
