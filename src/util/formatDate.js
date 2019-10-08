import { parseISO, format } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

function formatDate(date) {
  return format(parseISO(date), "MMMM, do 'at' hh aaaa", {
    locale: enUS,
  });
}

export default formatDate;
