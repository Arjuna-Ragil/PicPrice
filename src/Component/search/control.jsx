import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import refreshIcon from '../../assets/search/refresh-ccw.svg'
import changeIcon from '../../assets/search/image.svg'
import historyIcon from '../../assets/search/search.svg'

const Control = ({setRetryTrigger, imageChange, previewChange, retryCheck}) => {

  const [goToHistory, setGoToHistory] = useState(false)
  const [searchIconRotate, setSearchIconRotate] = useState(false)
  const [historyIconBounce, setHistoryIconBounce] = useState(false)
  const [changeIconAnim, setChangeIconAnim] = useState(false)

  const handleRetry = () => {
    if (!retryCheck) return alert("input image first")

    setRetryTrigger(prev => prev + 1);
  }

  async function fileChange(event) {
    const fileUpload = event.target.files[0]

    if (!fileUpload) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result.split(',')[1];
      
      const file = {
        type: fileUpload.type,
        file: base64Data,
        imageURL: URL.createObjectURL(fileUpload)
      }
      imageChange(file)
      previewChange(file.imageURL)

    }
    reader.readAsDataURL(fileUpload);
  }

  if (goToHistory) {
    return <Navigate to={'/history'} replace/>
  }

  return (
    <>
        <div className={`
            flex
            flex-col
            rounded-2xl
            lg:h-110
            h-40
            items-center
            justify-evenly
            bg-container
            dark:bg-container-dark
            border-black
            border-2
            lg:p-7
            p-3
        `}>
            <h3 className={`
                font-poppins
                font-medium
                2xl:text-4xl
                xl:text-3xl
                lg:text-2xl
                md:text-xl
                dark:text-white
            `}>
              Controls
            </h3>
            
            <div className='flex flex-row lg:flex-col items-center w-full h-full justify-evenly gap-3'>
            <button onClick={handleRetry} className={`
              w-full
              p-5
              rounded-2xl
              bg-refresh-btn
              font-poppins
              hover:scale-105
              active:bg-refresh-btn-hover
              transition-all
              duration-300  
              
            `}
            onMouseEnter={() => setSearchIconRotate(true)}
            onMouseLeave={() => setSearchIconRotate(false)}
            >
              <div className='flex flex-row w-full items-center justify-center xl:gap-11 lg:gap-5 gap-4'>
                <img src={refreshIcon} alt='refresh' className={`transition-all duration-300 ${searchIconRotate ? 'rotate-180' : ''}`}/>
                <p className='font-poppins 2xl:text-2xl xl:text-xl lg:text-base md:text-sm text-xs max-sm:hidden'>Retry Search</p>
              </div>
            </button>
            
            <label className={`
                w-full
                p-5
                rounded-2xl
                bg-change-btn
                font-poppins
                hover:scale-105
                active:bg-change-btn-hover
                transition-all
                duration-300  
            `}
            onMouseEnter={() => setChangeIconAnim(true)}
            onMouseLeave={() => setChangeIconAnim(false)}
            >
              <div className='flex flex-row w-full items-center justify-center gap-5'>
                <img src={changeIcon} alt='change image' className={`transition-all duration-300 ${changeIconAnim ? 'animate-pulse' : ''}`}/>
                <p className='font-poppins 2xl:text-2xl xl:text-xl lg:text-base md:text-sm text-xs max-sm:hidden'>Change Image</p>
              </div>
              <input
                type='file'
                accept='.jpg, .jpeg, .png'
                onChange={fileChange}
                className={`
                  hidden
                `}
              />
            </label>

            <button onClick={() => setGoToHistory(true) } className={`
                w-full
                p-5
                rounded-2xl
                bg-history-btn
                font-poppins
                hover:scale-105
                active:bg-history-btn-hover
                transition-all
                duration-300  
              `}
              onMouseEnter={() => setHistoryIconBounce(true)}
              onMouseLeave={() => setHistoryIconBounce(false)}
              >
              <div className='flex flex-row w-full items-center justify-center gap-6'>
                <img src={historyIcon} alt='Go to history' className={`transition-all duration-300 ${historyIconBounce ? 'animate-bounce' : ''}`}/>
                <p className='font-poppins 2xl:text-2xl xl:text-xl lg:text-base md:text-sm text-xs max-sm:hidden'>Search History</p>
              </div>
            </button>
            </div>
        </div>
    </>
  )
}

export default Control