import { SafeHtml } from "@angular/platform-browser";

export interface Note {
  id: string;
  title: string;
  content: SafeHtml;
  author: string;
  publishedAt: Date;
}
