import { React, useState } from 'react';

const languages = [
    { code: 'gb', name: 'English' },
    { code: 'id', name: 'Indonesian' },
    { code: 'jp', name: 'Japanese' },
    { code: 'de', name: 'German' },
    { code: 'fr', name: 'French' },
  ];

const countries = [
  { code: 'id', name: 'Indonesia' },
  { code: 'us', name: 'United States' },
  { code: 'jp', name: 'Japan' },
  { code: 'de', name: 'Germany' },
  { code: 'fr', name: 'France' },
];
  
const LanguageAndRegion = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [languageOpen, setLanguageIsOpen] = useState(false);
  
  const toggleLanguageDropdown = () => {
    setLanguageIsOpen(!languageOpen);
    if (!languageOpen) setCountryIsOpen(false);}
  
    const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    setLanguageIsOpen(false);
  };

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryOpen, setCountryIsOpen] = useState(false);

  const toggleCountryDropdown = () => {
    setCountryIsOpen(!countryOpen);
    if (!countryOpen) setLanguageIsOpen(false);}

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setCountryIsOpen(false);
  };
  
  return (
  <div className="flex flex-col font-poppins w-150 h-115 pt-3 pl-5">
    <h2 className="text-2xl font-semibold mb-4">Language & Region</h2>

    {/* Language */}
    <div className="flex justify-between">
      <div
      className={`
        font-poppins
        mt-5
        flex
        flex-col
        gap-1.5
      `}>
        <h2
        className={`
          text-[15px]
        `}>
          Language Selector
        </h2>

        <p
        className={`
          text-[10px]
        `}>
          Select your preferred language, this will affect interface text
        </p>
      </div>

      <div 
      className={`
      mt-5
      `}>

        {/* Dropdown Button */}
        <button
        onClick={toggleLanguageDropdown}
        className={`
          w-34
          h-7
          py-2
          px-4
          bg-white 
          border 
          border-[#B2B2B2]
          rounded-sm
          flex 
          items-center 
          justify-between
        `}>
          {selectedLanguage ? (
            <div 
            className={`
              flex 
              items-center 
              space-x-2.5
            `}>
              <img
              src={`https://flagcdn.com/w40/${selectedLanguage.code}.png`}
              alt={selectedLanguage.name}
              className="w-5 h-3.5 object-cover"/>

              <span className="text-[10px]">{selectedLanguage.name}</span>
            </div>
            
            ) : (
            <span className="text-[10px]">Select Language</span>
            )}
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
                />
              </svg>
        </button>
          
        {/* Dropdown List */}
        
          <ul 
          className={`
            absolute 
            w-34 
            bg-white 
            border 
            border-gray-300 
            rounded-sm 
            mt-2 
            shadow-lg 
            z-10
            transition-all 
            duration-300 
            ease-in-out 
            transform
            origin-top
            ${languageOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
          `}>
            {languages.map((language) => (
              <li
              key={language.code}
              onClick={() => handleSelectLanguage(language)}
              className="cursor-pointer px-3 py-3 hover:bg-gray-200 flex items-center space-x-2.5"
              >
                <img
                src={`https://flagcdn.com/w40/${language.code}.png`}
                alt={language.name}
                className="w-5 h-3.5 object-cover"
                />
                
                <span className="text-[12px]">{language.name}</span>
                
              </li>))}
          </ul>
        </div>
    </div>

    <div className="flex justify-between">
      {/* Region */}
      <div className="font-poppins mt-5 flex flex-col gap-1.5">
        <h2
        className={`
          text-[15px]
        `}>
          Region
        </h2>

        <p
        className={`  
          text-[10px]
        `}>
          Your selected region determines currency, date format, and some localization features.
        </p>
      </div>

      <div className="mt-7">
        {/* Dropdown Button */}
        <button
        onClick={toggleCountryDropdown}
        className={`
          w-34
          h-7
          py-2
          px-4
          bg-white 
          border 
          border-[#B2B2B2]
          rounded-sm
          flex 
          items-center 
          justify-between
        `}>
          {selectedCountry ? (
            <div className={`
              flex 
              items-center 
              space-x-2.5
            `}>
              <img
                src={`https://flagcdn.com/w40/${selectedCountry.code}.png`}
                alt={selectedCountry.name}
                className="w-5 h-3.5 object-cover"
              />

              <span className="text-[10px]">{selectedCountry.name}</span>
            </div>
          ) : (
            <span className="text-[10px]">Select a country</span>
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown List */}
        
          <ul 
          className={`
            absolute 
            w-34 
            bg-white 
            border 
            border-gray-300 
            rounded-sm 
            mt-2 
            shadow-lg 
            z-10
            transition-all 
            duration-300 
            ease-in-out
            transform
            origin-top
            ${countryOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
          `}>
            {countries.map((country) => (
              <li
              key={country.code}
              onClick={() => handleSelectCountry(country)}
              className="cursor-pointer px-3 py-3 hover:bg-gray-200 flex items-center space-x-2.5"
              >
                <img
                src={`https://flagcdn.com/w40/${country.code}.png`}
                alt={country.name}
                className="w-5 h-3.5 object-cover"
                />
    
                <span className="text-[12px]">{country.name}</span>
              </li>))}
          </ul>
      </div>   
    </div>
  </div>
  );
  };
  
  export default LanguageAndRegion;
  