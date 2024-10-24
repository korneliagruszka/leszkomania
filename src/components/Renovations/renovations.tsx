import React from 'react';
import './renovations.scss';
import BeforeTableTop from '../../assets/renovation_table_top_before.jpg';
import AfterTableTop from '../../assets/renovation_table_top_done.jpg';
import BeforeTableDetails from '../../assets/renovation_table_detals.jpg';
import AfterTableDetails from '../../assets/renovation_table_details_done.jpg';
import BeforeTableLegs from '../../assets/renovation_table.jpg';
import AfterTableLegs from '../../assets/renovation_table_done.jpg';

const Renovations: React.FC = () => {
  const renovations = [
    {
      before: BeforeTableTop,
      after: AfterTableTop,
      description: 'Blat stolika'
    },
    {
      before: BeforeTableDetails,
      after: AfterTableDetails,
      description: 'Detale stolika'
    },
    {
      before: BeforeTableLegs,
      after: AfterTableLegs,
      description: 'Nogi stolika'
    },
    
  ];

  return (
    <div className='renovations_container'>
      <h2 className='renovations_header'>Renowacje</h2>
      <div className='renovations_text'>
        <p>
          W tej sekcji znajdziesz wykonane przeze mnie renowacje różnych przedmiotów. Jeśli posiadasz coś starego i chcesz mu nadać nowy wygląd wykonuje takie usługi na zamówienie. Moje dotychczasowe renowacje:
        </p>
      </div>
      <div className='renovations_gallery'>
        {renovations.map((renovation, index) => (
          <div key={index} className='renovation_item'>
            <div className='renovation_images'>
              <div className='before'>
              <p className='caption'>Przed</p>
                <img src={renovation.before} alt='Przed renowacją' />
                
              </div>
              <div className='after'>
              <p className='caption'>Po</p>
                <img src={renovation.after} alt='Po renowacji' />
                
              </div>
            </div>
            <p className='renovation_description'>{renovation.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Renovations;
