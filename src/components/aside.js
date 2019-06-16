import React from 'react'
import AdSense from 'react-adsense';

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

const Aside = () => (
    <aside>
      <AdSense.Google
        client='ca-pub-7292810486004926'
        slot='7806394673'
      />
    </aside>
)

export default Aside


