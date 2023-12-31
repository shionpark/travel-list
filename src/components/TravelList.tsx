import React from 'react';
import { useRecoilValue } from 'recoil';
import { countrySelector } from '@/atoms';
import { TravelListByCategory } from '@/components';

const TravelList = ({ category }: { category: string }) => {
  const countriesByCategory = useRecoilValue(countrySelector(category));
  return (
    <>
      <h2>{category}</h2>
      {countriesByCategory.map((country) => (
        <TravelListByCategory key={country.id} {...country} />
      ))}
    </>
  );
};

export default TravelList;
