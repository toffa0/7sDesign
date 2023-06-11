import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'



const DetailedView = ({cardData})=>{
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
 
  useEffect(() => {
    const fetchData = async () => {
      setData(cardData.cardDataProject);
      console.log(data)
    };
    fetchData();
  });

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
//   const currentData = [0,1,2,3,4];
  const currentData = data.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [currentDate, setCurrentDate] = useState('');
useEffect(() => {

  const interval = setInterval(() => {
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
    hours + ':' + min + ':' + sec
    );
  }, 1000);

},[] );
  return (
<div>
    <div className='disc-card-cont2 fl-gap25'>
    <div className='fl-col PMC jst-SB'>
        <div className='w-101'>
        <button>Eliminate</button>
        </div>
            
            <Image src="greycircle.svg" width={78.65} height={78.65} alt="" />
            <p>Designer name</p>
            <span>Local Time: {currentDate}</span>
            <div className='fl ali-cen gap3'>
            <input type="checkbox"/>
            <label>Select for final round</label>
            </div>
            
        </div>
        <div className='fl gap19'>
      {currentData.map((item) => (
            <div key={item.id} className='disc-card3 ' id=''><a href='#'>
                {console.log(item)}
                <div className='fl jst-SB cc'>
                <p>#34</p>
                <button>Decline</button>
                </div>
                
                <Image src={item.img} id='ds-img2' alt="" width={400} height={400}/>

             
             
             </a>
            </div>
      ))}
      </div>
    </div>
    {/* <div className="pagenumb">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePageClick(index + 1)}>
            {index + 1}
          </button>
        ))}
    </div> */}
</div>
  );
}
export default DetailedView;