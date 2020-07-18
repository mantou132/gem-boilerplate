import { html, GemElement, customElement, refobject, RefObject } from '@mantou/gem';

import '@mantou/gem/elements/route';
import '@mantou/gem/elements/title';
import 'src/elements/nav';
import routes from 'src/routes';
import { renderLyricsWithCanvas } from 'src/canvas';
import icon from 'src/logo.svg';

interface Line {
  startTime: number | null;
  text: string;
}
export type Lyric = Line[];
const lyric: Lyric = [
  {
    startTime: null,
    text: '',
  },
  {
    startTime: null,
    text: '',
  },
  {
    startTime: null,
    text: '',
  },
  {
    startTime: 3.82,
    text: ' ',
  },
  {
    startTime: 4.22,
    text: '晨起时，沙沙声，掉落出，一地的露水',
  },
  {
    startTime: 11.82,
    text: '落魄人，接几滴，问滋味，喃喃里滚烫眼泪',
  },
  {
    startTime: 19.47,
    text: ' ',
  },
  {
    startTime: 20.01,
    text: '七九河开，浪荡了雨水',
  },
  {
    startTime: 23.95,
    text: '俯仰看，你勾一笔眼眉',
  },
  {
    startTime: 27.75,
    text: '我摇心绪，只口是心非',
  },
  {
    startTime: 31.66,
    text: '等闲怎敢，率性而为',
  },
  {
    startTime: 49.39,
    text: ' ',
  },
  {
    startTime: 50.65,
    text: '那时沧海，隐隐怪罪，添几寸尘灰',
  },
  {
    startTime: 57.86,
    text: '那时埋名，你在江北，偏我困篱围',
  },
  {
    startTime: 65.09,
    text: ' ',
  },
  {
    startTime: 65.84,
    text: '二月里，树木催，声声念，总事与愿违',
  },
  {
    startTime: 73.17,
    text: '你走后，这人间每一处，竟再无草长莺飞',
  },
  {
    startTime: 114.28999999999999,
    text: ' ',
  },
  {
    startTime: 114.67,
    text: '八九雁来，料峭挂冬尾',
  },
  {
    startTime: 118.05,
    text: '俯仰看，你勾一笔眼眉',
  },
  {
    startTime: 121.88,
    text: '我在身侧，仍口是心非',
  },
  {
    startTime: 125.74,
    text: '斯人不归，怎敢说醉',
  },
  {
    startTime: 128.57,
    text: ' ',
  },
  {
    startTime: 128.91,
    text: '那时沧海，隐隐怪罪，添几寸尘灰',
  },
  {
    startTime: 136.59,
    text: '那时埋名，你在江北，偏我困篱围',
  },
  {
    startTime: 143.62,
    text: ' ',
  },
  {
    startTime: 144.52,
    text: '二月里，树木催，声声念，总事与愿违',
  },
  {
    startTime: 152.03,
    text: '你走后，这人间每一处，竟再无草长莺飞',
  },
  {
    startTime: 181.99,
    text: '混音：殇小谨',
  },
  {
    startTime: 182.99,
    text: '古筝：拖三个月才营业的不良少女・紫格',
  },
  {
    startTime: 183.99,
    text: '二胡：没有感情的复读机・二胡妹',
  },
  {
    startTime: null,
    text: '',
  },
  {
    startTime: null,
    text: '',
  },
  {
    startTime: 186.99,
    text: '文案：偏生梓归',
  },
  {
    startTime: 187.99,
    text: '封面设计：睢亦',
  },
  {
    startTime: 188.99,
    text: '视频剪辑：大琴剪剪',
  },
  {
    startTime: null,
    text: '',
  },
  {
    startTime: null,
    text: '',
  },
  {
    startTime: 191.99,
    text: '出品：音阙诗听',
  },
];
@customElement('app-root')
export class App extends GemElement {
  @refobject canvas: RefObject<HTMLCanvasElement>;
  @refobject img: RefObject<HTMLImageElement>;
  mounted() {
    const { element: canvas } = this.canvas;
    const { element: img } = this.img;
    if (!canvas || !img) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const render = (time: number) => {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      renderLyricsWithCanvas(ctx, lyric as any, ((time / 1000) % 200) * 2, { focusLineFontSize: 48 });
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }
  render() {
    return html`
      <style>
        app-nav {
          margin-top: 5em;
        }
      </style>
      <canvas width="640" height="640" style="width: 360px; margin: 10px;" ref="${this.canvas.ref}"></canvas>
      <img ref="${this.img.ref}" src="${icon}" />
      <app-nav></app-nav>
      <gem-route .routes=${routes}></gem-route>
    `;
  }
}
