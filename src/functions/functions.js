export function formatDate(date) {
  const fullDate = date;
  const year = fullDate.slice(0, 4);
  const month = fullDate.slice(5, 7);
  const day = fullDate.slice(-2);
  const newformatedDate = `${day}.${month}.${year}`;
  return newformatedDate;
}

export function convertMonths(date) {
  const formatedDate = formatDate(date);
  const day = formatedDate.slice(0, 2);
  const month = formatedDate.slice(3, 5);
  const year = formatedDate.slice(-4);
  if (month === "01") return `${day} Январь ${year}`;
  if (month === "02") return `${day} Февраль ${year}`;
  if (month === "03") return `${day} Март ${year}`;
  if (month === "04") return `${day} Апрель ${year}`;
  if (month === "05") return `${day} Май ${year}`;
  if (month === "06") return `${day} Июнь ${year}`;
  if (month === "07") return `${day} Июль ${year}`;
  if (month === "08") return `${day} Авгусг ${year}`;
  if (month === "09") return `${day} Сентябрь ${year}`;
  if (month === "10") return `${day} Октябрь ${year}`;
  if (month === "11") return `${day} Ноябрь ${year}`;
  if (month === "12") return `${day} Декабрь ${year}`;
}
