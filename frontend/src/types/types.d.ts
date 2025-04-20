interface Paragraph {
  children: [{ text: string; type: string; bold: boolean }];
}

interface Review {
  id: number;
  documentId: string;
  title: string;
  rating: number;
  body: [Paragraph];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiRestApiAllResponse<T> {
  data: [T];
}

interface StrapiRestApiOneResponse<T> {
  data: T;
  meta: object;
}
