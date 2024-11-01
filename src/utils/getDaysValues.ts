export const getDaysValues = (data: any[]) => {
  return data.map(
    (i) =>
      `${i.date.toLocaleString("en-EN", {
        month: "long",
      })} ${i.date.getDate()}`
  );
};
