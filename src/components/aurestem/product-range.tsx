import type { ReactNode } from 'react';
import produce1 from '@/assets/brochure/produce-1.jpg';
import produce2 from '@/assets/brochure/produce-2.jpg';
import produce3 from '@/assets/brochure/produce-3.jpg';
import produce4 from '@/assets/brochure/produce-4.jpg';
import freshcut1 from '@/assets/brochure/freshcut-1.jpg';
import freshcut2 from '@/assets/brochure/freshcut-2.jpg';
import freshcut3 from '@/assets/brochure/freshcut-3.jpg';
import freshcut4 from '@/assets/brochure/freshcut-4.jpg';
import frozen1 from '@/assets/brochure/frozen-1.jpg';
import frozen2 from '@/assets/brochure/frozen-2.jpg';
import frozen3 from '@/assets/brochure/frozen-3.jpg';
import meat1 from '@/assets/brochure/meat-1.jpg';
import meat2 from '@/assets/brochure/meat-2.jpg';
import milk from '@/assets/brochure/milk.jpg';
import bakeryPouches from '@/assets/brochure/bakery-pouches.jpg';
import bread1 from '@/assets/brochure/bread-1.jpg';
import bread2 from '@/assets/brochure/bread-2.jpg';
import essentialsRolls from '@/assets/brochure/essentials-rolls.jpg';
import rice1 from '@/assets/brochure/essentials-rice-1.jpg';
import rice2 from '@/assets/brochure/essentials-rice-2.jpg';

// Text is split into [words, highlighted] pieces so headings keep the brochure's yellow/white split.
type Seg = [string, boolean?];
type Photo = [string, string];
const Y = true;

function T({ segs }: { segs: Seg[] }) { return <>{segs.map(([t, y], i) => y ? <span key={i} className="bro-y">{t}</span> : <span key={i}>{t}</span>)}</>; }
function Points({ items }: { items: string[] }) { return <ul className="bro-points">{items.map(x => <li key={x}>{x}</li>)}</ul>; }
function Partner({ children }: { children: ReactNode }) { return <p className="bro-partner"><span className="bro-y">Aurestem X PeelOn</span> - {children}</p>; }
function Photos({ items, cols, className = '' }: { items: Photo[]; cols: number; className?: string }) { return <div className={`bro-photos ${className}`} style={{ ['--cols' as string]: cols }}>{items.map(([src, alt]) => <img key={src} src={src} alt={alt} loading="lazy" />)}</div>; }

function Block({ title, children, side, wide = false }: { title: Seg[]; children: ReactNode; side?: ReactNode; wide?: boolean }) {
  return <article className={`bro-block ${side ? 'bro-has-side' : ''} ${wide ? 'bro-wide-side' : ''}`}><div><h3 className="bro-title"><T segs={title} /></h3>{children}</div>{side && <div className="bro-side">{side}</div>}</article>;
}

export function ProductRange() {
  return <section className="bro" aria-labelledby="bro-heading"><div className="bro-inner">
    <h2 id="bro-heading" className="bro-eyebrow">PRODUCT RANGE · <span className="bro-y">AURESTEM X PEELON</span></h2>
    <div className="bro-cols">
      <div className="bro-col">
        <Block title={[['Compostable packaging for', Y], [' global fresh produce supply chains']]}>
          <p className="bro-pill">Less waste. More freshness</p>
          <p className="bro-intro">Compostable Packaging Solutions<br />for Fresh Produce Exports<br />Helping maintain freshness from harvest to destination.</p>
          <Points items={['Compatible with existing operations', 'Reduced Moisture Loss', 'Reduced Condensation', 'Export Ready']} />
          <p className="bro-apps">Bananas | Grapes | Pomegranates | Leafy Greens | Citrus | Exotics</p>
          <Partner>Sustainable Packaging<br />for Fresh Produce</Partner>
          <Photos cols={4} className="bro-photos-row" items={[[produce1, 'Cherry tomatoes in a compostable carton liner'], [produce2, 'Asparagus bundles in a compostable carton liner'], [produce3, 'Produce sealed in a transparent compostable liner'], [produce4, 'Broccoli heads in a compostable carton liner']]} />
          <p className="bro-caption">Transparent. Compostable. Proven.</p>
        </Block>
        <div className="bro-pair">
          <Block title={[['Crystal clear. Compostable sustainable.', Y]]}>
            <p className="bro-sub">Next-Generation Retail Packaging for Fresh Produce</p>
            <Points items={['Premium Shelf Appeal', 'Maintains Produce Freshness', 'Reduced Fogging & Condensation', 'Easy Integration with Existing Packing Lines']} />
            <p className="bro-apps">Fresh Produce | Fruits | Vegetables</p>
            <p className="bro-partner bro-partner-lg"><span className="bro-y">Aurestem X PeelOn</span> -<br />Sustainable Packaging<br />for a Better Tomorrow</p>
          </Block>
          <Block title={[['The '], ['future', Y], [' of milk packaging']]}>
            <Photos cols={1} className="bro-photos-single" items={[[milk, 'Printed compostable milk pouch']]} />
          </Block>
        </div>
        <Block title={[['Soft. Fresh sustainable']]} side={<Photos cols={1} items={[[bakeryPouches, 'Printed compostable pouches for rambutan, bananas and broccoli']]} />}>
          <p className="bro-sub">Next-Generation Compostable<br />Packaging for Bakery Products</p>
          <Points items={['Helps Maintain Freshness & Texture', 'Sustainable Alternative to Conventional Packaging']} />
          <p className="bro-tag"><T segs={[['Packaging', Y], [' That']]} /><br /><T segs={[['Protects', Y], [' What Matters Most']]} /></p>
        </Block>
        <Block title={[['Soft. Fresh sustainable']]} side={<Photos cols={2} items={[[bread1, 'Bread loaves in printed compostable bags'], [bread2, 'Sliced bread in transparent compostable bags']]} />} wide>
          <p className="bro-sub">Next-Generation Compostable<br />Packaging for Bakery Products</p>
          <Points items={['Helps Maintain Freshness & Texture', 'Sustainable Alternative to Conventional Packaging']} />
        </Block>
      </div>
      <div className="bro-col">
        <Block title={[['Keeping '], ['fresh-cut', Y], [' produce '], ['fresher', Y], [' for '], ['longer', Y]]} side={<Photos cols={2} items={[[freshcut1, 'Cut cucumber in a compostable pack'], [freshcut2, 'Cut green beans in a compostable pack'], [freshcut3, 'Sliced carrots in a compostable pack'], [freshcut4, 'Broccoli florets in a compostable pack']]} />}>
          <p className="bro-sub">Innovative Packaging for<br /><T segs={[['Fresh-Cut', Y], [' Fruits & Vegetables']]} /></p>
          <p className="bro-intro">Compostable Packaging Solutions<br />for Fresh Produce Exports<br />Helping maintain freshness from harvest to destination.</p>
          <Points items={['Helps Maintain Freshness at Ambient Conditions', 'Supports Shelf-Life Extension', 'Reduces Food Waste', 'Sustainable Packaging Alternative']} />
        </Block>
        <Block title={[['Compostable', Y], [' packaging for frozen foods']]} side={<><Photos cols={3} items={[[frozen1, 'Frozen peas in a compostable pack'], [frozen2, 'Frozen sweetcorn in a compostable pack'], [frozen3, 'Frozen mixed vegetables in a compostable pack']]} /><p className="bro-side-apps"><span className="bro-y">Applications:</span> Frozen Vegetables • Ready-to-Cook Foods</p></>}>
          <p className="bro-sub">Designed for Performance in<br />Frozen Storage & Distribution</p>
          <Points items={['Suitable for Frozen Storage Conditions', 'Sustainable Alternative to Conventional Plastic Packaging']} />
          <Partner>Sustainable Packaging for the Future</Partner>
        </Block>
        <Block title={[['Smart packaging for '], ['meat', Y]]} side={<Photos cols={2} items={[[meat1, 'Meat in a transparent compostable bag'], [meat2, 'Chicken in a transparent compostable bag']]} />}>
          <p className="bro-sub">Designed to Support Product Quality from Processing to Consumption</p>
          <Points items={['Suitable for Cold Chain Operations', 'Compostable Packaging Solution']} />
          <p className="bro-tag">Building a More Sustainable<br />Future for Food Packaging</p>
        </Block>
        <Block title={[['Compostable', Y], [' packaging for everyday essentials']]} side={<Photos cols={3} className="bro-photos-essentials" items={[[essentialsRolls, 'Rolls of compostable grocery bags'], [rice1, 'Printed compostable rice bag, front'], [rice2, 'Printed compostable rice bag, back']]} />} wide>
          <p className="bro-sub">Sustainable Solutions for Retail,<br />Grocery & Food Packaging</p>
          <Points items={['Compostable Alternative to Conventional Plastics', 'Strong, Durable & Consumer-Friendly', 'Designed for Modern Retail & Supply Chains', 'Supporting a More Sustainable Future']} />
        </Block>
        <div className="bro-uses">
          <h4>Applications</h4>
          <dl>{[['Rice & Grain Packaging', 'Helping maintain product quality during storage and transportation'], ['Retail Packaging', 'Premium packaging designed for product visibility and consumer convenience'], ['Grocery Rolls', 'Reliable packaging solutions for supermarkets and retail stores']].map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}</dl>
        </div>
      </div>
    </div>
    <div className="bro-industrial">
      <h3 className="bro-banner">Industrial Packaging</h3>
      <div className="bro-industrial-grid">{industrial.map(([name, text]) => <article key={name}><h4 className="bro-tagbox">{name}</h4><p>{text}</p></article>)}</div>
    </div>
    <div className="bro-certs" aria-label="Certifications and compliance">
      {certs.map(([mark, text]) => <div key={mark} className="bro-cert"><span className="bro-cert-mark">{mark}</span><p>{text}</p></div>)}
    </div>
  </div></section>;
}

const industrial: [string, string][] = [
  ['Automobile - PeelON - AM', 'Strong, transparent compostable packaging designed for safe storage and transport of automotive components.'],
  ['Apparel - PeelON - AP', 'Eco-friendly transparent garment bags that combine product visibility with sustainable packaging solutions'],
];

const certs: [string, string][] = [
  ['EU', 'meets the latest food contact regulations as per EU directive no. 10/2011 (Ref. 2002/72/EEC) & its amendments (Eu) no. 2018/213.'],
  ['FDA', 'meets latest food contact regulations as per FDA-21 CFR 177.1520.'],
  ['OK compost HOME · TÜV AUSTRIA', 'Certified for industrial and home compostability standards, ensuring safe biodegradation.'],
  ['PROP 65 COMPLIANT', 'Does not contain any chemicals from California Prop. 65 list of harmful chemicals.'],
  ['BPA FREE', 'Does not contain Bisphenol A (BPA) that is unsafe for the food.'],
  ['BPI COMPOSTABLE', 'meets global compostability standards, verified for complete environmental safety.'],
];
