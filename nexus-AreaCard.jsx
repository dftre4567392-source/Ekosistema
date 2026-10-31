export default function AreaCard({area,index,expanded,onToggle}) {
  return <article className={'area-card '+(expanded ? 'is-open' : '')}>
    <div className="card-top"><span className="area-icon" aria-hidden="true">{area.icon}</span><span className="card-index">{String(index+1).padStart(2,'0')}</span></div>
    <h3>{area.title}</h3><p>{area.desc}</p>
    <div className="tags">{area.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    {expanded && <p className="detail-text" id={'area-'+area.id}>{area.detail}</p>}
    <button className="card-more" type="button" aria-expanded={expanded} aria-controls={'area-'+area.id} onClick={onToggle}>{expanded?'Свернуть':'Подробнее'} <span aria-hidden="true">{expanded?'−':'↗'}</span></button>
  </article>
}
