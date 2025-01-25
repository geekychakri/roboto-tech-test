export const gridProductCount = (length: number) => {
  if (length > 6) {
    return "lg:grid-cols-6";
  } else {
    return `lg:grid-cols-${length}`;
  }
};
