export const cutLongText = (text: string) => {
  if (text.length > 30) {
    const cutLength = text.length * 0.3;
    const leftPart = text.slice(0, cutLength);
    const rightPart = text.slice(text.length - cutLength, text.length);
    return `${leftPart}...${rightPart}`;
  }
  return text;
};
