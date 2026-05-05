import { Injectable } from '@angular/core';
import * as domtoimage from 'dom-to-image';
import { Platform } from '@ionic/angular';
// import { Printer } from '@awesome-cordova-plugins/printer/ngx'; // só se for usar no mobile

@Injectable()
export class PrintProvider {
  constructor(private platform: Platform) {}

  print(componentName: string) {
    const node = document.getElementById(componentName);

    domtoimage.toPng(node).then((dataUrl) => {
      if (this.platform.is('cordova') && !this.platform.is('desktop')) {
        // Aqui iria o código com Printer no mobile
        console.log('Aqui chamaria o plugin de impressão do mobile');
      } else {
        // Navegador (browser)
        const popup = window.open('', '_blank', 'width=600,height=800');
        popup.document.open();
        popup.document.write(`
          <html>
            <head>
              <style>
                @media print {
                  @page { size: A6 portrait; margin: 0; }
                  body { margin: 0; }
                  img { width: 100%; height: auto; }
                }
              </style>
            </head>
            <body>
              <img src="${dataUrl}">
            </body>
          </html>
        `);
        popup.document.close();
        popup.focus();
        setTimeout(() => {
          popup.print();
          popup.close();
        }, 1000);
      }
    }).catch((error) => {
      console.error('Erro ao gerar imagem para impressão:', error);
    });
  }
}
