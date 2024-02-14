import React,{ useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Homesectioncart from '../HomeCarol/Homesectioncart/Homesectioncart';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Homesectioncarosal = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev=()=>setActiveIndex(activeIndex - 1);
  const slideNext=()=>setActiveIndex(activeIndex + 1)

  const syncActiveIndex = ({ item }) => setActiveIndex(item)

  const items = data.slice(0,10).map((item) => <Homesectioncart product={item} />
  );

  return (
    <div className="border">
        <h2 className='text-2xl font-extrabold text-grey-800 py-5'>{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !==items.length-5 && 
        (  <Button
          
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}

            sx={{
              position: 'absolute',
              top: '8rem',
              right: '0rem',
              transform: 'translateX(50%) rotate(90deg)',
              bgcolor: 'white',
            }}
            aria-label="next"
          >
            <ArrowBackIosIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
          </Button>
       ) }
      { activeIndex!==0 && (<Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white"
            sx={{
            position: 'absolute',
            top: '8rem',
            left: '0rem',
            transform: 'translateX(-50%) rotate(-90deg)',
            bgcolor: 'white',
            }}
            aria-label="next"
        >
            <ArrowBackIosIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
        </Button>
        )}
      </div>
    </div>
  );
};

export default Homesectioncarosal;
