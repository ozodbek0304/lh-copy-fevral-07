export const filterParams = (params) => {
  const myObject = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== "") {
      myObject[key] = value;
    }
  });

  return myObject;
};
