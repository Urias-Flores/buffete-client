import { useEffect, useState } from 'react';

function useLocalDate() {
  const [localDate, setLocalDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const adjustedDate = new Date(currentDate.getTime() - currentDate.getTimezoneOffset() * 60000);
    const formattedDate = adjustedDate.toISOString().split('T')[0];
    setLocalDate(formattedDate);
  }, []);

  return localDate;
}

export default useLocalDate;