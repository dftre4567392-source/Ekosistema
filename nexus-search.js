export function normalize(value) {
  return String(value).toLocaleLowerCase('ru-RU').trim().replace(/\s+/g, ' ')
}
export function filterEntries(items, query) {
  const words = normalize(query).split(' ').filter(Boolean)
  if (!words.length) return items
  return items.filter(item => {
    const haystack = normalize([item.title, item.desc, item.detail, item.skills, ...(item.tags || [])].filter(Boolean).join(' '))
    return words.every(word => haystack.includes(word))
  })
}
