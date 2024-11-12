export const getDaysValues = (data: any[]) => {
  return data.map(
    (i) =>
      `${new Date(i.updated_at).toLocaleString("en-EN", {
        month: "long",
      })} ${new Date(i.updated_at).getDate()}`
  );
};
