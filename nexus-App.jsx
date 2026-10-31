import {useMemo,useState} from 'react'
import AreaCard from './nexus-AreaCard.jsx'
import RoleRow from './nexus-RoleRow.jsx'
import {areas,roles,companies} from './nexus-content.js'
import {filterEntries} from './nexus-search.js'

const nav = [{label:'Обзор',id:'home'},{label:'Направления IT',id:'areas'},{label:'Профессии',id:'jobs'},{label:'Компании',id:'companies'},{label:'О проекте',id:'about'}]
function Header(){
  const [active,setActive]=useState('home')
  return <header className="topbar"><a className="brand" href="#home" onClick={()=>setActive('home')}><span className="brand-mark">N</span><span>NEXUS<span className="brand-light"> / IT</span></span></a>
    <nav aria-label="Основное меню">{nav.map(n=><a key={n.id} className={'nav-link '+(active===n.id?'selected':'')} href={'#'+n.id} onClick={()=>setActive(n.id)}>{n.label}</a>)}</nav>
    <a className="top-cta" href="#areas">Изучить IT <span aria-hidden="true">↗</span></a>
  </header>
}
function SectionHeading({index,label,title,emphasis,description}){
  return <div className="section-heading"><div><div className="eyebrow">{index} / {label}</div><h2>{title} <em>{emphasis}</em></h2></div><p>{description}</p></div>
}
function App(){
  const [query,setQuery]=useState('')
  const [expandedArea,setExpandedArea]=useState(null)
  const [expandedRole,setExpandedRole]=useState(null)
  const filteredAreas=useMemo(()=>filterEntries(areas,query),[query])
  const filteredRoles=useMemo(()=>filterEntries(roles,query),[query])
  return <div className="site-shell"><Header/><main>
    <section className="hero" id="home"><div className="hero-copy"><div className="eyebrow"><span className="pulse"/> ЦИФРОВАЯ ЭКОСИСТЕМА / ПУТЕВОДИТЕЛЬ</div>
      <h1>Мир технологий<br/><em>в одной системе.</em></h1>
      <p className="hero-text">NEXUS / IT — интерактивное знакомство с технологиями, бизнесом и людьми, которые создают цифровой мир. Начните с интересного направления или изучите профессии.</p>
      <div className="hero-actions"><a className="button-primary" href="#areas">Исследовать направления <span aria-hidden="true">→</span></a><a className="text-link" href="#jobs">Смотреть профессии</a></div>
      <div className="hero-stats"><div><strong>07</strong><span>направлений</span></div><div><strong>07</strong><span>профессий</span></div><div><strong>06</strong><span>компаний</span></div></div>
    </div><div className="hero-visual" aria-label="Схема связи направлений IT"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="core"><span>IT</span><small>ECOSYSTEM</small></div>
      <div className="node node-a"><b>AI</b><span>Интеллект</span></div><div className="node node-b"><b>{'</>'}</b><span>Разработка</span></div><div className="node node-c"><b>☁</b><span>Облако</span></div><div className="node node-d"><b>▣</b><span>Безопасность</span></div><div className="visual-caption">ТЕХНОЛОГИИ СВЯЗАНЫ МЕЖДУ СОБОЙ</div>
    </div></section>
    <div className="ticker" aria-hidden="true"><span>TECHNOLOGY</span><i>✳</i><span>BUSINESS</span><i>✳</i><span>INNOVATION</span><i>✳</i><span>DATA</span><i>✳</i><span>FUTURE</span></div>
    <section className="section" id="areas"><SectionHeading index="01" label="НАПРАВЛЕНИЯ" title="Из чего состоит" emphasis="IT-индустрия" description="Семь разных областей: от программирования до облачной инфраструктуры и работы с данными."/>
      <div className="search-panel"><label htmlFor="global-search">Поиск по направлениям и профессиям</label><div className="search-wrap"><span aria-hidden="true">⌕</span><input id="global-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Например: React, аналитик, безопасность…"/>{query&&<button className="clear-search" type="button" onClick={()=>setQuery('')}>Очистить</button>}</div><p className="search-count" aria-live="polite">Найдено: направлений — {filteredAreas.length}, профессий — {filteredRoles.length}</p></div>
      <div className="area-grid">{filteredAreas.map(area=><AreaCard key={area.id} area={area} index={areas.indexOf(area)} expanded={expandedArea===area.id} onToggle={()=>setExpandedArea(x=>x===area.id?null:area.id)}/>)}</div>
      {!filteredAreas.length&&<div className="empty">По запросу нет направлений. Попробуйте другую формулировку или <button onClick={()=>setQuery('')} type="button">сбросьте поиск</button>.</div>}
    </section>
    <section className="dark-band" id="jobs"><div className="section dark-inner"><SectionHeading index="02" label="ПРОФЕССИИ" title="Кто создаёт" emphasis="цифровой мир" description="Роли, задачи и инструменты специалистов. Поиск выше действует и для этого раздела."/>
      <div className="jobs-grid">{filteredRoles.map(role=><RoleRow key={role.id} role={role} index={roles.indexOf(role)} expanded={expandedRole===role.id} onToggle={()=>setExpandedRole(x=>x===role.id?null:role.id)}/>)}</div>
      {!filteredRoles.length&&<div className="empty jobs-empty">По этому запросу профессии не найдены. <button type="button" onClick={()=>setQuery('')}>Показать все профессии</button></div>}
    </div></section>
    <section className="section" id="companies"><SectionHeading index="03" label="КОМПАНИИ" title="Игроки" emphasis="цифрового рынка" description="Примеры известных компаний и направлений их деятельности. Это не рейтинг и не реклама."/>
      <div className="company-grid">{companies.map((company,i)=><article className="company-card" key={company.name}><div className="company-top"><span className="company-no">{String(i+1).padStart(2,'0')} / COMPANY</span><span className="company-icon" aria-hidden="true">{company.initial}</span></div><h3>{company.name}</h3><p>{company.type}</p><div className="company-products">{company.products}</div></article>)}</div>
    </section>
    <section className="section about-section" id="about"><div className="about-box"><div><div className="eyebrow">04 / О ПРОЕКТЕ</div><h2>Разобраться в IT <em>проще, чем кажется.</em></h2></div><div><p>NEXUS / IT создан как учебный информационный портал. Здесь можно узнать об основных направлениях индустрии, посмотреть задачи специалистов и познакомиться с примерами компаний.</p><p>Используйте поиск, открывайте подробности карточек и сравнивайте роли, чтобы понять, что вам интересно.</p><p className="disclaimer">Сведения обзорные, не являются рекомендацией по трудоустройству. Списки и описания — примеры для обучения.</p></div></div></section>
  </main><footer><a className="brand" href="#home"><span className="brand-mark">N</span><span>NEXUS<span className="brand-light"> / IT</span></span></a><span>Демонстрационный проект на React · 2026</span><a href="#home">Наверх ↑</a></footer></div>
}
export default App
