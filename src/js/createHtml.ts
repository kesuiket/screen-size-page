import { ItemData } from './types'

export function createItemHtml (data: ItemData) {
  const container = document.createElement('div');
  container.className = 'row'
  data.isPopular ? container.dataset.popular = 'true' : null;
  data.isStandard ? container.dataset.standard = 'true' : null;
  container.innerHTML = `
    <div class="td type align-left">
      ${data.type}${data.fullname ? '<small>'+ data.fullname +'</small>' : '' }
    </div>
    <div class="td screen-in">
      ${data.in}<span class="unit">in</span>
    </div>
    <div class="td size-cm">
      ${data.cm.width}<span class="unit">cm</span><span class="separator">×</span>${data.cm.height}<span class="unit">cm</span>
    </div>
    <div class="td size-px">
      ${data.px.width}<span class="separator">×</span>${data.px.height}<span class="unit">px</span>
    </div>
    <div class="td aspect">
      ${data.aspect.map(item => item[0] + '<span class="separator">:</span>' + item[1]).join('<br>')}
    </div>
    <div class="td align-right">
      ${data.pixels.toLocaleString()}<span class="unit">px</span>
    </div>
    <div class="td note align-left">
      ${data.note ? String(data.note).trim() : ''}
    </div>
  `;
  return container;
}