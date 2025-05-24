import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appInlineSvg]',
  standalone: false
})

export class InlineSvgDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  async ngAfterViewInit() {
    const imgElement = this.el.nativeElement as HTMLImageElement;
    const imgURL = imgElement.src;
    const imgID = imgElement.id;
    const imgClass = imgElement.className;

    try {
      const response = await fetch(imgURL);
      const text = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, 'image/svg+xml');
      const svg = xmlDoc.querySelector('svg');

      if (svg) {
        if (imgID) svg.id = imgID;
        if (imgClass) svg.setAttribute('class', `${imgClass} replaced-svg`);
        svg.removeAttribute('xmlns:a');

        const importedSvg = document.importNode(svg, true);
        const parent = this.renderer.parentNode(imgElement);
        this.renderer.removeChild(parent, imgElement);
        this.renderer.appendChild(parent, importedSvg);
      }
    } catch (err) {
      console.error('Error loading inline SVG:', err);
    }
  }
}
