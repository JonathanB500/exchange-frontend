export const getDaysValues = (data: any[]) => {
  console.log(data);
  return data.map(
    (i) =>
      `${new Date(i.updated_at).toLocaleString("en-EN", {
        month: "long",
      })} ${new Date(i.updated_at).getDate()}`
  );
};
