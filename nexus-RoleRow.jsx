export default function RoleRow({role,index,expanded,onToggle}) {
  return <article className="job-row">
    <span className="job-num">{String(index+1).padStart(2,'0')}</span>
    <div><h3>{role.title}</h3><p>{role.desc}</p>{expanded&&<p className="role-detail" id={'role-'+role.id}>{role.detail}</p>}
      <button type="button" className="role-more" aria-expanded={expanded} aria-controls={'role-'+role.id} onClick={onToggle}>{expanded?'Скрыть задачи −':'Что делает специалист ↗'}</button>
    </div>
    <span className="job-skills">{role.skills}</span>
  </article>
}
