interface Paragraph {
  children: [{ text: string; type: string; bold: boolean }];
}
interface Category {
  documentId: string;
  name: string;
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
  categories?: Category[];
}

interface StrapiRestApiAllResponse<T> {
  data: [T];
}

interface StrapiRestApiOneResponse<T> {
  data: T;
  meta: object;
}
