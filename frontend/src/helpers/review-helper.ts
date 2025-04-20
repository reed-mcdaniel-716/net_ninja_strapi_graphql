export const formatReviewBody = (body: Paragraph[]): string => {
  let formattedContent = body
    .map((b) => {
      return b.children.map((child) => child.text).join(" ");
    })
    .join("\n");
  return formattedContent;
};

export const clipString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength - 3) + "...";
};
