import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stores/reducers';
import { fetchCountryData } from '../stores/actions/countryDataActions'; // Ensure the correct path to your action

const CountryData: React.FC = () => {
  const dispatch = useDispatch();
  const countryData = useSelector((state: RootState) => state.country.data);
  const countryLoading = useSelector((state: RootState) => state.country.loading);
  const countryError = useSelector((state: RootState) => state.country.error);

  useEffect(() => {
    dispatch(fetchCountryData());
  }, [dispatch]);

    return(
        <div>
            <h2 className='text-2xl font-bold mb-4'>Country Data</h2>
            {countryLoading && <div>Loading.......</div>}
            {countryError && <div>Error: {countryError}</div>}
            {countryData && (
                <div>
                    {countryData.map((country: any) =>
                    <div key={country.name.common} className="mb-4 p-4 border rounded-lg">
                        <h3 className='text-xl font-bold'>{country.name.common}</h3>
                        <p>
                            <strong>Region: </strong> {country.region}
                        </p>
                        <p>
                            <strong>Currency: </strong> {country.currencies[0]}
                        </p>
                    </div>
                    
                    )}
                </div>
            )}
        </div>
    );

};

export default CountryData;