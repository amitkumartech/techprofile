// highlight.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(text: string, searchTerms: string[], highlightColor: string = 'yellow'): SafeHtml {
    if (!searchTerms || searchTerms.length === 0 || !text) {
      return text;
    }

    const regex = new RegExp(`\\b(${searchTerms.join('|')})\\b`, 'gi');
    const highlightedText = text.replace(regex, `<span class="highlighted" style="background-color: ${highlightColor}; color: #003d6b;;">$1</span>`);
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
}
