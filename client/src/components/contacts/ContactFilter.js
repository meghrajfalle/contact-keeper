import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;

  const text = useRef('');

  const onChange = e => {
    if (text.current.value !== '') filterContacts(e.target.value);
    else clearFilter();
  };

  useEffect(() => {
    if (filtered === null) text.current.value = '';
  }, [filtered]);

  return (
    <div>
      <input
        type='text'
        ref={text}
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </div>
  );
};

export default ContactFilter;
