// @see https://airtable.com/developers/web
// @see https://www.note-pc.biz/trable/lcd/resolution-display-list.html
// @see https://crystage.com/content/resolution/
// @see https://en.wikipedia.org/wiki/List_of_common_resolutions

const YOUR_SECRET_API_TOKEN = 'keyNcyTZPSWDSm10h'

const fs = require('fs')
const beautify = require("json-beautify")
const Airtable = require('airtable');
const base = new Airtable({apiKey: YOUR_SECRET_API_TOKEN}).base('appoXt9IzudhG0uki');

let items = [];

base('Screen size data').select({
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  records.forEach(function(record) {
      console.log('Retrieved', record.get('Name'));
      items.push(createDto(record.fields, record))
  });

  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }

  fs.writeFileSync('./dist/data/index.json', beautify(items, null, 2, 100), 'utf8')
});



function createDto (fields) {
  const aspectRatios = fields['Aspect ratio'].map(item => item.split(':').map(x => Number(x)));
  const tags = fields['Tags'] || [];
  console.log(tags);

  return {
    type: fields.Name,
    fullname: fields.Fullname,
    in: fields.Inch,
    cm: {
      width: fields['Size.cm.width'],
      height: fields['Size.cm.height']
    },
    px: {
      width: fields['Size.px.width'],
      height: fields['Size.px.height']
    },
    aspect: aspectRatios,
    pixels: fields.Pixels,
    note: fields.Note || '',
    tags,
    isPopular: tags.includes('Popular'),
    isStandard: tags.includes('Standard')
  }
}