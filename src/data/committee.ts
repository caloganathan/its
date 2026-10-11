import type { Lang } from '../site';

// Management Committee 2026–28. Order follows the list supplied by the Treasurer; names are
// shown as supplied in all languages (honorifics and role titles are localised).
export const TERM = '2026–28';

type Role = 'president' | 'secretary' | 'treasurer' | 'vp' | 'jsecretary' | 'jtreasurer' | 'tamilclass' | 'program' | 'cultural';

const MEMBERS: { role: Role; title: 'Mr.' | 'Mrs.'; name: string }[] = [
  { role: 'president', title: 'Mr.', name: 'Subramanian Elanchelvan' },
  { role: 'secretary', title: 'Mr.', name: 'Rajamani Saravanan' },
  { role: 'treasurer', title: 'Mr.', name: 'CA Loganathan Anandan' },
  { role: 'vp', title: 'Mrs.', name: 'Rajeswari Nagarajan' },
  { role: 'jsecretary', title: 'Mr.', name: 'Ramraj Damodaran' },
  { role: 'jtreasurer', title: 'Mr.', name: 'Sakthi Narayanan' },
  { role: 'tamilclass', title: 'Mr.', name: 'Vannagam Muthumani' },
  { role: 'program', title: 'Mr.', name: 'Arun Dhanarajan' },
  { role: 'cultural', title: 'Mrs.', name: 'Vishnupriya Vigneshkumar' },
];

const ROLE: Record<Lang, Record<Role, string>> = {
  en: { president: 'President', secretary: 'Secretary', treasurer: 'Treasurer', vp: 'Vice President', jsecretary: 'Joint Secretary', jtreasurer: 'Joint Treasurer', tamilclass: 'Tamil Class & Magazine Coordinator', program: 'Programme Coordinator', cultural: 'Cultural Coordinator' },
  id: { president: 'Ketua', secretary: 'Sekretaris', treasurer: 'Bendahara', vp: 'Wakil Ketua', jsecretary: 'Wakil Sekretaris', jtreasurer: 'Wakil Bendahara', tamilclass: 'Koordinator Kelas & Majalah Tamil', program: 'Koordinator Program', cultural: 'Koordinator Budaya' },
  ta: { president: 'தலைவர்', secretary: 'செயலாளர்', treasurer: 'பொருளாளர்', vp: 'துணைத் தலைவர்', jsecretary: 'இணைச் செயலாளர்', jtreasurer: 'இணைப் பொருளாளர்', tamilclass: 'தமிழ் வகுப்பு & இதழ் ஒருங்கிணைப்பாளர்', program: 'நிகழ்ச்சி ஒருங்கிணைப்பாளர்', cultural: 'பண்பாட்டு ஒருங்கிணைப்பாளர்' },
};
const HONORIFIC: Record<Lang, Record<'Mr.' | 'Mrs.', string>> = {
  en: { 'Mr.': 'Mr.', 'Mrs.': 'Mrs.' }, id: { 'Mr.': 'Bapak', 'Mrs.': 'Ibu' }, ta: { 'Mr.': 'திரு.', 'Mrs.': 'திருமதி.' },
};

export function getCommittee(lang: Lang) {
  return MEMBERS.map((m, i) => ({
    key: m.role, rank: i,
    role: ROLE[lang][m.role],
    name: m.name,
    display: `${HONORIFIC[lang][m.title]} ${m.name}`,
    initials: m.name.replace(/^CA /, '').split(' ').map((w) => w[0]).slice(0, 2).join(''),
    lead: i < 3,
  }));
}
