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
  if (month === "01") return `${day} Январь`;
  if (month === "02") return `${day} Февраль`;
  if (month === "03") return `${day} Март`;
  if (month === "04") return `${day} Апрель`;
  if (month === "05") return `${day} Май`;
  if (month === "06") return `${day} Июнь`;
  if (month === "07") return `${day} Июль`;
  if (month === "08") return `${day} Авгусг`;
  if (month === "09") return `${day} Сентябрь`;
  if (month === "10") return `${day} Октябрь`;
  if (month === "11") return `${day} Ноябрь`;
  if (month === "12") return `${day} Декабрь`;
}
