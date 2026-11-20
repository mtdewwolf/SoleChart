/** Invented demo records. No actual patient information. */
export const safe=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const initials=p=>((p?.first||'?')[0]+(p?.last||'?')[0]).toUpperCase();
export const formatDate=d=>/^\d{4}-\d{2}-\d{2}$/.test(d)?new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):d;
export const getAppointmentsForDay=(appointments,day)=>appointments.filter(a=>a.date===day).sort((a,b)=>a.time.localeCompare(b.time));
export function seed(){return {version:1,patients:[
{id:'DEMO-001',first:'Jordan',last:'Sample',dob:'1985-04-12',phone:'555-0101',concern:'Left heel pain',allergies:'Not reviewed',medications:'Not reviewed',history:'Synthetic record only'},
{id:'DEMO-002',first:'Alex',last:'Example',dob:'1972-09-24',phone:'555-0102',concern:'Diabetic foot check',allergies:'Not reviewed',medications:'Not reviewed',history:'Synthetic record only'},
{id:'DEMO-003',first:'Taylor',last:'Practice',dob:'1994-01-16',phone:'555-0103',concern:'Ankle injury',allergies:'Not reviewed',medications:'Not reviewed',history:'Synthetic record only'},
{id:'DEMO-004',first:'Morgan',last:'Test',dob:'1959-06-03',phone:'555-0104',concern:'Orthotics adjustment',allergies:'Not reviewed',medications:'Not reviewed',history:'Synthetic record only'}],
appointments:[
{id:'A-1',patientId:'DEMO-001',date:'2026-11-20',time:'08:30',provider:'Dr. Emily Webb',reason:'Heel pain consultation',status:'Checked in'},
{id:'A-2',patientId:'DEMO-002',date:'2026-11-20',time:'09:15',provider:'Dr. Tucker Worthen',reason:'Diabetic foot exam',status:'Scheduled'},
{id:'A-3',patientId:'DEMO-003',date:'2026-11-20',time:'10:00',provider:'Dr. Evie Plummer',reason:'Ankle injury follow-up',status:'Scheduled'},
{id:'A-4',patientId:'DEMO-004',date:'2026-11-20',time:'11:30',provider:'Dr. Emily Webb',reason:'Orthotics adjustment',status:'Completed'}],
encounters:[{id:'E-1',patientId:'DEMO-001',date:'2026-11-20',provider:'Dr. Emily Webb',chiefComplaint:'Heel pain',laterality:'Left',pain:'5',subjective:'Synthetic complaint only',objective:'Not examined',assessment:'Not assessed',plan:'Demonstration only',status:'Draft'}],
intakes:[]};}