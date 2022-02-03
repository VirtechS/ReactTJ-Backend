export class SearchPostDto {
  title?: string;
  body?: string;
  views?: 'DESC' | 'ASC';
  tag?: string;
  limit?: number;
  take?: number;
}
