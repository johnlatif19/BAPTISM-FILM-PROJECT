const STORAGE_KEY = 'evano_baptism_project_v1';

const SCENES = [
  {
    id: 'scene1',
    num: '01',
    title: 'INTRO – EVANO',
    desc: 'ظهور اسم EVANO على خلفية سوداء مع Cinematic Impact',
    tasks: ['خلفية سوداء', 'ظهور اسم EVANO', 'Keyframes على النص', 'Zoom In تدريجي', 'Cinematic Impact']
  },
  {
    id: 'scene2',
    num: '02',
    title: 'CHURCH ENTRANCE',
    desc: 'مدخل الكاتدرائية ولقطة الساعة مع Mask Transition',
    tasks: ['لقطة مدخل الكاتدرائية', 'لقطة الساعة', 'Mask على الساعة', 'Keyframes للـ Mask', 'الانتقال من الساعة إلى الملابس']
  },
  {
    id: 'scene3',
    num: '03',
    title: 'BABY OUTFIT',
    desc: 'تصوير ملابس الطفل مع Slow Motion',
    tasks: ['تصوير الملابس', 'Close-up للتفاصيل', 'Slow Motion', 'انتقال سينمائي للمعمودية']
  },
  {
    id: 'scene4',
    num: '04',
    title: 'BAPTISM CEREMONY',
    desc: 'المشهد الأساسي مع Multi-camera Editing',
    tasks: ['الكاميرا الرئيسية', 'زوايا إضافية بالموبايلات', 'تنظيم اللقطات حسب الزاوية', 'Multi-camera Editing', 'اختيار أفضل اللقطات', 'Slow Motion عند الحاجة', 'الحفاظ على الصوت الطبيعي', 'احترام الطقس']
  },
  {
    id: 'scene5',
    num: '05',
    title: 'AFTER BAPTISM',
    desc: 'لقطات الطفل بعد المعمودية',
    tasks: ['تصوير الطفل بعد المعمودية', 'لحظة ارتداء الملابس', 'Close-up للوجه', 'Close-up للتفاصيل']
  },
  {
    id: 'scene6',
    num: '06',
    title: 'FAMILY PHOTOS',
    desc: 'صور العائلة مع Mask Transitions',
    tasks: ['إدخال صور الطفل والعائلة', 'Mask Transition', 'Zoom In / Out', 'Keyframes على الصور']
  },
  {
    id: 'scene7',
    num: '07',
    title: 'FINAL TITLE',
    desc: 'العنوان النهائي مع التأثيرات الختامية',
    tasks: ['Zoom Out', 'ظهور التاريخ 21/11/2026', 'كتابة BAPTISM DAY', 'سقوط النص على الأرض', 'Camera Shake خفيف', 'Cinematic Impact', 'Final Fade Out']
  }
];

const SOUND_GROUPS = [
  {
    id: 'intro',
    title: 'INTRO',
    items: [
      { id: 's1', name: 'Cinematic Ambient', scene: 'INTRO' },
      { id: 's2', name: 'Soft Piano', scene: 'INTRO' },
      { id: 's3', name: 'Cinematic Impact', scene: 'INTRO' },
      { id: 's4', name: 'Soft Whoosh', scene: 'INTRO' }
    ]
  },
  {
    id: 'clock',
    title: 'CLOCK',
    items: [
      { id: 's5', name: 'Clock Tick', scene: 'CHURCH ENTRANCE' },
      { id: 's6', name: 'Reverse Whoosh', scene: 'CHURCH ENTRANCE' },
      { id: 's7', name: 'Transition Whoosh', scene: 'CHURCH ENTRANCE' }
    ]
  },
  {
    id: 'outfit',
    title: 'BABY OUTFIT',
    items: [
      { id: 's8', name: 'Soft Fabric Rustle', scene: 'BABY OUTFIT' },
      { id: 's9', name: 'Emotional Piano', scene: 'BABY OUTFIT' },
      { id: 's10', name: 'Gentle Strings', scene: 'BABY OUTFIT' },
      { id: 's11', name: 'Cinematic Rise', scene: 'BABY OUTFIT' }
    ]
  },
  {
    id: 'baptism',
    title: 'BAPTISM',
    items: [
      { id: 's12', name: 'Natural Church Ambience', scene: 'BAPTISM' },
      { id: 's13', name: 'Original Audio', scene: 'BAPTISM' },
      { id: 's14', name: 'Church Hymns', scene: 'BAPTISM' },
      { id: 's15', name: 'Gentle Orchestral Background', scene: 'BAPTISM' }
    ]
  },
  {
    id: 'family',
    title: 'FAMILY',
    items: [
      { id: 's16', name: 'Emotional Piano', scene: 'FAMILY' },
      { id: 's17', name: 'Warm Strings', scene: 'FAMILY' },
      { id: 's18', name: 'Soft Transitions', scene: 'FAMILY' }
    ]
  },
  {
    id: 'final',
    title: 'FINAL TITLE',
    items: [
      { id: 's19', name: 'Deep Cinematic Boom', scene: 'FINAL TITLE' },
      { id: 's20', name: 'Ground Impact', scene: 'FINAL TITLE' },
      { id: 's21', name: 'Camera Shake Sound', scene: 'FINAL TITLE' },
      { id: 's22', name: 'Soft Bell', scene: 'FINAL TITLE' },
      { id: 's23', name: 'Fade Out', scene: 'FINAL TITLE' }
    ]
  }
];

const SOFTWARE = [
  {
    id: 'premiere',
    name: 'Adobe Premiere Pro',
    icon: 'fa-solid fa-clapperboard',
    role: 'مونتاج الفيديو الأساسي',
    tasks: [
      { id: 'pr1', label: 'ترتيب اللقطات' },
      { id: 'pr2', label: 'مونتاج الفيديو الأساسي' },
      { id: 'pr3', label: 'Multi-camera Editing' },
      { id: 'pr4', label: 'Audio Mixing' },
      { id: 'pr5', label: 'Color Correction' },
      { id: 'pr6', label: 'Final Export' }
    ]
  },
  {
    id: 'aftereffects',
    name: 'Adobe After Effects',
    icon: 'fa-solid fa-wand-magic-sparkles',
    role: 'المؤثرات والانتقالات',
    tasks: [
      { id: 'ae1', label: 'Masking' },
      { id: 'ae2', label: 'Keyframes' },
      { id: 'ae3', label: 'Clock Mask Transition' },
      { id: 'ae4', label: 'Text Animation' },
      { id: 'ae5', label: 'Camera Shake' },
      { id: 'ae6', label: 'Cinematic Transitions' }
    ]
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    icon: 'fa-solid fa-image',
    role: 'تصميم العناوين والصور',
    tasks: [
      { id: 'ps1', label: 'تصميم اسم EVANO' },
      { id: 'ps2', label: 'تصميم العناوين' },
      { id: 'ps3', label: 'تجهيز الصور' },
      { id: 'ps4', label: 'تصميم الخلفيات' }
    ]
  },
  {
    id: 'topaz',
    name: 'Topaz Video AI',
    icon: 'fa-solid fa-wand-sparkles',
    role: 'تحسين الجودة',
    tasks: [
      { id: 'tz1', label: 'تحسين جودة الفيديو' },
      { id: 'tz2', label: 'تقليل Noise' },
      { id: 'tz3', label: 'تحسين اللقطات الضعيفة' }
    ]
  },
  {
    id: 'capcut',
    name: 'CapCut Mobile / Desktop',
    icon: 'fa-solid fa-mobile-screen',
    role: 'تجارب سريعة',
    tasks: [
      { id: 'cc1', label: 'تجارب سريعة' },
      { id: 'cc2', label: 'مراجعة أفكار الانتقالات' },
      { id: 'cc3', label: 'تعديلات بسيطة' }
    ]
  },
  {
    id: 'picsart',
    name: 'Picsart',
    icon: 'fa-solid fa-palette',
    role: 'تعديلات الصور السريعة',
    tasks: [
      { id: 'pic1', label: 'تعديلات الصور السريعة' }
    ]
  }
];

const SHOOT_GROUPS = [
  {
    id: 'prep',
    title: 'PREPARATION',
    items: [
      { id: 'sp1', name: 'شحن الموبايل الأساسي' },
      { id: 'sp2', name: 'مساحة تخزين كافية' },
      { id: 'sp3', name: 'تنظيف العدسات' },
      { id: 'sp4', name: 'تجهيز الموبايلات الإضافية' },
      { id: 'sp5', name: 'إعدادات 1080p / 30fps' },
      { id: 'sp6', name: 'التصوير الأفقي 16:9' },
      { id: 'sp7', name: 'مكان آمن لحفظ الملفات' },
      { id: 'sp8', name: 'موافقة الأسرة وتعليمات الكنيسة' }
    ]
  },
  {
    id: 'shots',
    title: 'SHOT LIST',
    items: [
      { id: 'sh1', name: 'واجهة الكاتدرائية' },
      { id: 'sh2', name: 'مدخل الكنيسة' },
      { id: 'sh3', name: 'لقطة الساعة' },
      { id: 'sh4', name: 'لقطة ملابس الطفل' },
      { id: 'sh5', name: 'تفاصيل الملابس' },
      { id: 'sh6', name: 'لقطات الطفل قبل المعمودية' },
      { id: 'sh7', name: 'لقطات المعمودية المسموح بها' },
      { id: 'sh8', name: 'لقطات العائلة' },
      { id: 'sh9', name: 'لقطات الطفل بعد المعمودية' },
      { id: 'sh10', name: 'صور جماعية' },
      { id: 'sh11', name: 'لقطات ختامية' }
    ]
  }
];

const REVIEW_ITEMS = [
  { id: 'rv1', text: 'اكتمال جميع المشاهد' },
  { id: 'rv2', text: 'مراجعة الصوت' },
  { id: 'rv3', text: 'مراجعة الألوان' },
  { id: 'rv4', text: 'مراجعة الانتقالات' },
  { id: 'rv5', text: 'التأكد من عدم وجود لقطات ناقصة' },
  { id: 'rv6', text: 'تصدير النسخة النهائية بجودة 1080p' }
];

const SECTION_TITLES = {
  dashboard: 'لوحة التحكم',
  editing: 'المونتاج',
  sound: 'الساوند ديزاين',
  software: 'البرامج',
  shooting: 'التصوير',
  notes: 'ملاحظات سريعة',
  review: 'المراجعة النهائية'
};

let state = loadState();

function defaultState() {
  return {
    scenes: {},
    sounds: {},
    software: {},
    softwareNotes: {},
    shooting: {},
    notes: [],
    review: {}
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return { ...defaultState(), ...parsed };
  } catch (e) {
    return defaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2200);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderEditing() {
  const wrap = document.getElementById('editingTimeline');
  wrap.innerHTML = '';

  SCENES.forEach(scene => {
    const s = state.scenes[scene.id] || { done: false, status: 'not-started', notes: '', file: '' };
    const card = document.createElement('div');
    card.className = 'scene-card' + (s.done ? ' done' : '');
    card.dataset.sceneId = scene.id;

    const statusClass = s.status === 'done' ? 'done-status' : s.status === 'in-progress' ? 'in-progress' : '';

    card.innerHTML = `
      <div class="scene-head">
        <div class="scene-num">${scene.num}</div>
        <div class="scene-title-block">
          <h3>${escapeHtml(scene.title)}</h3>
          <p>${escapeHtml(scene.desc)}</p>
        </div>
        <div class="scene-actions">
          <select class="status-select ${statusClass}" data-scene-status="${scene.id}">
            <option value="not-started" ${s.status === 'not-started' ? 'selected' : ''}>لم يبدأ</option>
            <option value="in-progress" ${s.status === 'in-progress' ? 'selected' : ''}>قيد التنفيذ</option>
            <option value="done" ${s.status === 'done' ? 'selected' : ''}>مكتمل</option>
          </select>
          <button class="scene-check ${s.done ? 'checked' : ''}" data-scene-check="${scene.id}">
            <i class="fa-solid fa-check"></i>
          </button>
        </div>
      </div>
      <div class="scene-body">
        <div class="scene-field full">
          <label>ملاحظات</label>
          <textarea data-scene-notes="${scene.id}" placeholder="أضف ملاحظاتك هنا...">${escapeHtml(s.notes || '')}</textarea>
        </div>
        <div class="scene-field full">
          <label>رابط / اسم ملف الفيديو</label>
          <input type="text" data-scene-file="${scene.id}" placeholder="مثال: intro_v1.mp4" value="${escapeHtml(s.file || '')}">
        </div>
        <div class="scene-tasks">
          ${scene.tasks.map(t => `<span class="scene-task-tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>
    `;
    wrap.appendChild(card);
  });
}

function renderSound() {
  const wrap = document.getElementById('soundLibrary');
  wrap.innerHTML = '';

  SOUND_GROUPS.forEach(group => {
    const g = document.createElement('div');
    g.className = 'sound-group';
    g.innerHTML = `
      <div class="sound-group-head">
        <h3>${escapeHtml(group.title)}</h3>
        <span>${group.items.length} صوت</span>
      </div>
      <div class="sound-items">
        ${group.items.map(item => {
          const s = state.sounds[item.id] || { done: false, volume: '', file: '', license: '' };
          return `
            <div class="sound-item ${s.done ? 'checked-row' : ''}" data-sound-id="${item.id}">
              <button class="scene-check ${s.done ? 'checked' : ''}" data-sound-check="${item.id}">
                <i class="fa-solid fa-check"></i>
              </button>
              <div>
                <div class="sound-name">${escapeHtml(item.name)}</div>
                <div class="sound-scene">${escapeHtml(item.scene)}</div>
              </div>
              <input type="text" data-sound-volume="${item.id}" placeholder="مستوى الصوت (dB)" value="${escapeHtml(s.volume || '')}">
              <input type="text" data-sound-file="${item.id}" placeholder="اسم / رابط الملف" value="${escapeHtml(s.file || '')}">
              <input type="text" class="license-input" data-sound-license="${item.id}" placeholder="حالة الترخيص" value="${escapeHtml(s.license || '')}">
            </div>
          `;
        }).join('')}
      </div>
    `;
    wrap.appendChild(g);
  });
}

function renderSoftware() {
  const wrap = document.getElementById('softwareGrid');
  wrap.innerHTML = '';

  SOFTWARE.forEach(sw => {
    const s = state.software[sw.id] || {};
    const note = state.softwareNotes[sw.id] || '';
    const card = document.createElement('div');
    card.className = 'software-card';
    card.innerHTML = `
      <div class="software-head">
        <div class="software-icon"><i class="${sw.icon}"></i></div>
        <div class="software-head-info">
          <h3>${escapeHtml(sw.name)}</h3>
          <span>${escapeHtml(sw.role)}</span>
        </div>
      </div>
      <div class="software-tasks">
        ${sw.tasks.map(t => `
          <div class="task-row ${s[t.id] ? 'completed' : ''}" data-software-task="${sw.id}" data-task-id="${t.id}">
            <div class="task-check"><i class="fa-solid fa-check"></i></div>
            <span class="task-label">${escapeHtml(t.label)}</span>
          </div>
        `).join('')}
      </div>
      <textarea class="software-note" data-software-note="${sw.id}" placeholder="ملاحظات...">${escapeHtml(note)}</textarea>
    `;
    wrap.appendChild(card);
  });
}

function renderShooting() {
  const wrap = document.getElementById('shootingContent');
  wrap.innerHTML = '';

  SHOOT_GROUPS.forEach(group => {
    const g = document.createElement('div');
    g.className = 'shoot-group';
    const isShots = group.id === 'shots';
    g.innerHTML = `
      <div class="shoot-group-head">
        <h3>${escapeHtml(group.title)}</h3>
        <span>${group.items.length} عنصر</span>
      </div>
      <div class="shoot-items">
        ${group.items.map(item => {
          const s = state.shooting[item.id] || { done: false, angle: '', device: '', notes: '', status: 'not-started' };
          return `
            <div class="shoot-item ${s.done ? 'checked-row' : ''}" data-shoot-id="${item.id}">
              <button class="scene-check ${s.done ? 'checked' : ''}" data-shoot-check="${item.id}">
                <i class="fa-solid fa-check"></i>
              </button>
              <div class="shoot-name">${escapeHtml(item.name)}</div>
              ${isShots ? `
                <input type="text" data-shoot-angle="${item.id}" placeholder="زاوية التصوير" value="${escapeHtml(s.angle || '')}">
                <input type="text" data-shoot-device="${item.id}" placeholder="الجهاز" value="${escapeHtml(s.device || '')}">
                <input type="text" data-shoot-notes="${item.id}" placeholder="ملاحظات" value="${escapeHtml(s.notes || '')}">
                <select data-shoot-status="${item.id}">
                  <option value="not-started" ${s.status === 'not-started' ? 'selected' : ''}>لم يبدأ</option>
                  <option value="in-progress" ${s.status === 'in-progress' ? 'selected' : ''}>قيد التنفيذ</option>
                  <option value="done" ${s.status === 'done' ? 'selected' : ''}>مكتمل</option>
                </select>
              ` : `
                <input type="text" data-shoot-notes="${item.id}" placeholder="ملاحظات" value="${escapeHtml(s.notes || '')}" style="grid-column: span 4;">
              `}
            </div>
          `;
        }).join('')}
      </div>
    `;
    wrap.appendChild(g);
  });
}

function renderNotes() {
  const wrap = document.getElementById('notesList');
  if (!state.notes.length) {
    wrap.innerHTML = `<div class="empty-state"><i class="fa-solid fa-note-sticky"></i>لا توجد ملاحظات بعد — أضف فكرتك الأولى</div>`;
    return;
  }
  wrap.innerHTML = state.notes.map((n, i) => `
    <div class="note-item">
      <span class="note-text">${escapeHtml(n.text)}</span>
      <span class="note-date">${escapeHtml(n.date || '')}</span>
      <button class="note-del" data-note-del="${i}"><i class="fa-solid fa-trash"></i></button>
    </div>
  `).join('');
}

function renderReview() {
  const wrap = document.getElementById('reviewList');
  wrap.innerHTML = REVIEW_ITEMS.map(r => `
    <div class="review-item ${state.review[r.id] ? 'completed' : ''}" data-review-id="${r.id}">
      <div class="review-check"><i class="fa-solid fa-check"></i></div>
      <span class="review-text">${escapeHtml(r.text)}</span>
    </div>
  `).join('');
}

function countTasks(obj) {
  let total = 0, done = 0;
  Object.values(obj).forEach(v => {
    if (v && typeof v === 'object') {
      if ('done' in v) { total++; if (v.done) done++; }
      else { Object.values(v).forEach(val => { if (val === true) { total++; done++; } }); }
    }
  });
  return { total, done };
}

function computeStats() {
  let total = 0, done = 0;

  Object.keys(state.scenes).forEach(k => { total++; if (state.scenes[k].done) done++; });
  SCENES.forEach(sc => { if (!state.scenes[sc.id]) total++; });

  SOUND_GROUPS.forEach(g => g.items.forEach(it => {
    total++;
    if (state.sounds[it.id] && state.sounds[it.id].done) done++;
  }));

  SOFTWARE.forEach(sw => sw.tasks.forEach(t => {
    total++;
    if (state.software[sw.id] && state.software[sw.id][t.id]) done++;
  }));

  SHOOT_GROUPS.forEach(g => g.items.forEach(it => {
    total++;
    if (state.shooting[it.id] && state.shooting[it.id].done) done++;
  }));

  REVIEW_ITEMS.forEach(r => {
    total++;
    if (state.review[r.id]) done++;
  });

  const percent = total ? Math.round((done / total) * 100) : 0;
  return { total, done, remaining: total - done, percent };
}

function computeSectionProgress(section) {
  let total = 0, done = 0;

  if (section === 'editing') {
    SCENES.forEach(sc => { total++; if (state.scenes[sc.id] && state.scenes[sc.id].done) done++; });
  } else if (section === 'sound') {
    SOUND_GROUPS.forEach(g => g.items.forEach(it => { total++; if (state.sounds[it.id] && state.sounds[it.id].done) done++; }));
  } else if (section === 'software') {
    SOFTWARE.forEach(sw => sw.tasks.forEach(t => { total++; if (state.software[sw.id] && state.software[sw.id][t.id]) done++; }));
  } else if (section === 'shooting') {
    SHOOT_GROUPS.forEach(g => g.items.forEach(it => { total++; if (state.shooting[it.id] && state.shooting[it.id].done) done++; }));
  } else if (section === 'review') {
    REVIEW_ITEMS.forEach(r => { total++; if (state.review[r.id]) done++; });
  }

  return { total, done, percent: total ? Math.round((done / total) * 100) : 0 };
}

function renderDashboard() {
  const stats = computeStats();
  document.getElementById('overallPercent').textContent = stats.percent + '%';
  document.getElementById('completedCount').textContent = stats.done;
  document.getElementById('remainingCount').textContent = stats.remaining;
  document.getElementById('progressText').textContent = stats.percent + '%';
  document.getElementById('progressFill').style.width = stats.percent + '%';

  const sections = [
    { id: 'editing', label: 'المونتاج', icon: 'fa-solid fa-film' },
    { id: 'sound', label: 'الساوند', icon: 'fa-solid fa-music' },
    { id: 'software', label: 'البرامج', icon: 'fa-solid fa-laptop-code' },
    { id: 'shooting', label: 'التصوير', icon: 'fa-solid fa-camera-retro' },
    { id: 'review', label: 'المراجعة', icon: 'fa-solid fa-clipboard-check' }
  ];

  const grid = document.getElementById('overviewGrid');
  grid.innerHTML = sections.map(sec => {
    const p = computeSectionProgress(sec.id);
    return `
      <div class="overview-item" data-goto="${sec.id}">
        <h4><i class="${sec.icon}"></i> ${sec.label}</h4>
        <div class="overview-bar"><div class="overview-bar-fill" style="width:${p.percent}%"></div></div>
        <div class="overview-meta">${p.done} / ${p.total} — ${p.percent}%</div>
      </div>
    `;
  }).join('');
}

function renderAll() {
  renderEditing();
  renderSound();
  renderSoftware();
  renderShooting();
  renderNotes();
  renderReview();
  renderDashboard();
}

function getOrCreate(obj, key, defaults) {
  if (!obj[key]) obj[key] = { ...defaults };
  return obj[key];
}

document.addEventListener('click', function(e) {
  const sceneCheck = e.target.closest('[data-scene-check]');
  if (sceneCheck) {
    const id = sceneCheck.dataset.sceneCheck;
    const s = getOrCreate(state.scenes, id, { done: false, status: 'not-started', notes: '', file: '' });
    s.done = !s.done;
    if (s.done) s.status = 'done';
    else if (s.status === 'done') s.status = 'not-started';
    saveState();
    renderEditing();
    renderDashboard();
    showToast(s.done ? 'تم إكمال المشهد' : 'تم إلغاء الإكمال');
    return;
  }

  const soundCheck = e.target.closest('[data-sound-check]');
  if (soundCheck) {
    const id = soundCheck.dataset.soundCheck;
    const s = getOrCreate(state.sounds, id, { done: false, volume: '', file: '', license: '' });
    s.done = !s.done;
    saveState();
    renderSound();
    renderDashboard();
    return;
  }

  const shootCheck = e.target.closest('[data-shoot-check]');
  if (shootCheck) {
    const id = shootCheck.dataset.shootCheck;
    const s = getOrCreate(state.shooting, id, { done: false, angle: '', device: '', notes: '', status: 'not-started' });
    s.done = !s.done;
    if (s.done) s.status = 'done';
    saveState();
    renderShooting();
    renderDashboard();
    return;
  }

  const swTask = e.target.closest('[data-software-task]');
  if (swTask) {
    const swId = swTask.dataset.softwareTask;
    const taskId = swTask.dataset.taskId;
    if (!state.software[swId]) state.software[swId] = {};
    state.software[swId][taskId] = !state.software[swId][taskId];
    saveState();
    renderSoftware();
    renderDashboard();
    return;
  }

  const reviewItem = e.target.closest('[data-review-id]');
  if (reviewItem) {
    const id = reviewItem.dataset.reviewId;
    state.review[id] = !state.review[id];
    saveState();
    renderReview();
    renderDashboard();
    return;
  }

  const noteDel = e.target.closest('[data-note-del]');
  if (noteDel) {
    const i = parseInt(noteDel.dataset.noteDel, 10);
    state.notes.splice(i, 1);
    saveState();
    renderNotes();
    return;
  }

  const goto = e.target.closest('[data-goto]');
  if (goto) {
    const target = goto.dataset.goto;
    switchSection(target);
    return;
  }
});

document.addEventListener('change', function(e) {
  const statusSel = e.target.closest('[data-scene-status]');
  if (statusSel) {
    const id = statusSel.dataset.sceneStatus;
    const s = getOrCreate(state.scenes, id, { done: false, status: 'not-started', notes: '', file: '' });
    s.status = statusSel.value;
    if (statusSel.value === 'done') s.done = true;
    else s.done = false;
    saveState();
    renderEditing();
    renderDashboard();
    return;
  }

  const shootStatus = e.target.closest('[data-shoot-status]');
  if (shootStatus) {
    const id = shootStatus.dataset.shootStatus;
    const s = getOrCreate(state.shooting, id, { done: false, angle: '', device: '', notes: '', status: 'not-started' });
    s.status = shootStatus.value;
    if (shootStatus.value === 'done') s.done = true;
    else s.done = false;
    saveState();
    renderShooting();
    renderDashboard();
    return;
  }
});

document.addEventListener('input', function(e) {
  const t = e.target;

  if (t.matches('[data-scene-notes]')) {
    const id = t.dataset.sceneNotes;
    const s = getOrCreate(state.scenes, id, { done: false, status: 'not-started', notes: '', file: '' });
    s.notes = t.value;
    saveState();
    return;
  }
  if (t.matches('[data-scene-file]')) {
    const id = t.dataset.sceneFile;
    const s = getOrCreate(state.scenes, id, { done: false, status: 'not-started', notes: '', file: '' });
    s.file = t.value;
    saveState();
    return;
  }
  if (t.matches('[data-sound-volume]')) {
    const id = t.dataset.soundVolume;
    const s = getOrCreate(state.sounds, id, { done: false, volume: '', file: '', license: '' });
    s.volume = t.value;
    saveState();
    return;
  }
  if (t.matches('[data-sound-file]')) {
    const id = t.dataset.soundFile;
    const s = getOrCreate(state.sounds, id, { done: false, volume: '', file: '', license: '' });
    s.file = t.value;
    saveState();
    return;
  }
  if (t.matches('[data-sound-license]')) {
    const id = t.dataset.soundLicense;
    const s = getOrCreate(state.sounds, id, { done: false, volume: '', file: '', license: '' });
    s.license = t.value;
    saveState();
    return;
  }
  if (t.matches('[data-software-note]')) {
    const id = t.dataset.softwareNote;
    state.softwareNotes[id] = t.value;
    saveState();
    return;
  }
  if (t.matches('[data-shoot-angle]')) {
    const id = t.dataset.shootAngle;
    const s = getOrCreate(state.shooting, id, { done: false, angle: '', device: '', notes: '', status: 'not-started' });
    s.angle = t.value;
    saveState();
    return;
  }
  if (t.matches('[data-shoot-device]')) {
    const id = t.dataset.shootDevice;
    const s = getOrCreate(state.shooting, id, { done: false, angle: '', device: '', notes: '', status: 'not-started' });
    s.device = t.value;
    saveState();
    return;
  }
  if (t.matches('[data-shoot-notes]')) {
    const id = t.dataset.shootNotes;
    const s = getOrCreate(state.shooting, id, { done: false, angle: '', device: '', notes: '', status: 'not-started' });
    s.notes = t.value;
    saveState();
    return;
  }
});

function switchSection(name) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.section === name));
  document.querySelectorAll('.section').forEach(s => s.classList.toggle('active', s.id === name));
  document.getElementById('pageTitle').textContent = SECTION_TITLES[name] || name;
  document.getElementById('sidebar').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    switchSection(this.dataset.section);
  });
});

document.getElementById('menuToggle').addEventListener('click', function() {
  document.getElementById('sidebar').classList.toggle('open');
});

document.getElementById('addNoteBtn').addEventListener('click', addNote);
document.getElementById('newNoteInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addNote();
});

function addNote() {
  const inp = document.getElementById('newNoteInput');
  const text = inp.value.trim();
  if (!text) return;
  const now = new Date();
  const date = now.toLocaleDateString('ar-EG') + ' ' + now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
  state.notes.unshift({ text, date });
  inp.value = '';
  saveState();
  renderNotes();
  showToast('تمت إضافة الملاحظة');
}

document.getElementById('resetBtn').addEventListener('click', () => {
  document.getElementById('confirmModal').classList.add('show');
});

document.getElementById('cancelReset').addEventListener('click', () => {
  document.getElementById('confirmModal').classList.remove('show');
});

document.getElementById('confirmReset').addEventListener('click', () => {
  state = defaultState();
  localStorage.removeItem(STORAGE_KEY);
  document.getElementById('confirmModal').classList.remove('show');
  renderAll();
  showToast('تم مسح جميع البيانات');
});

document.getElementById('exportBtn').addEventListener('click', exportProject);

function exportProject() {
  const lines = [];
  lines.push('========================================');
  lines.push('EVANO – BAPTISM FILM PROJECT');
  lines.push('تاريخ المناسبة: 21/11/2026');
  lines.push('========================================');
  lines.push('');

  lines.push('--- EDITING PLAN ---');
  SCENES.forEach(sc => {
    const s = state.scenes[sc.id] || { done: false, status: 'not-started', notes: '', file: '' };
    lines.push(`[${s.done ? 'X' : ' '}] ${sc.num}. ${sc.title} — (${statusLabel(s.status)})`);
    if (s.notes) lines.push(`     ملاحظات: ${s.notes}`);
    if (s.file) lines.push(`     الملف: ${s.file}`);
  });
  lines.push('');

  lines.push('--- SOUND DESIGN ---');
  SOUND_GROUPS.forEach(g => {
    lines.push(`# ${g.title}`);
    g.items.forEach(it => {
      const s = state.sounds[it.id] || { done: false, volume: '', file: '', license: '' };
      lines.push(`[${s.done ? 'X' : ' '}] ${it.name}`);
      if (s.volume) lines.push(`     مستوى: ${s.volume}`);
      if (s.file) lines.push(`     الملف: ${s.file}`);
      if (s.license) lines.push(`     الترخيص: ${s.license}`);
    });
    lines.push('');
  });

  lines.push('--- SOFTWARE WORKFLOW ---');
  SOFTWARE.forEach(sw => {
    lines.push(`# ${sw.name} — ${sw.role}`);
    sw.tasks.forEach(t => {
      const done = state.software[sw.id] && state.software[sw.id][t.id];
      lines.push(`[${done ? 'X' : ' '}] ${t.label}`);
    });
    const note = state.softwareNotes[sw.id];
    if (note) lines.push(`ملاحظات: ${note}`);
    lines.push('');
  });

  lines.push('--- SHOOTING CHECKLIST ---');
  SHOOT_GROUPS.forEach(g => {
    lines.push(`# ${g.title}`);
    g.items.forEach(it => {
      const s = state.shooting[it.id] || { done: false, angle: '', device: '', notes: '', status: 'not-started' };
      lines.push(`[${s.done ? 'X' : ' '}] ${it.name} — (${statusLabel(s.status)})`);
      if (s.angle) lines.push(`     زاوية: ${s.angle}`);
      if (s.device) lines.push(`     الجهاز: ${s.device}`);
      if (s.notes) lines.push(`     ملاحظات: ${s.notes}`);
    });
    lines.push('');
  });

  lines.push('--- QUICK NOTES ---');
  if (state.notes.length) {
    state.notes.forEach(n => lines.push(`• ${n.text}  (${n.date})`));
  } else {
    lines.push('(لا توجد ملاحظات)');
  }
  lines.push('');

  lines.push('--- FINAL REVIEW ---');
  REVIEW_ITEMS.forEach(r => {
    lines.push(`[${state.review[r.id] ? 'X' : ' '}] ${r.text}`);
  });
  lines.push('');

  const stats = computeStats();
  lines.push('========================================');
  lines.push(`نسبة الإنجاز الإجمالية: ${stats.percent}%`);
  lines.push(`مكتمل: ${stats.done} / ${stats.total} — المتبقي: ${stats.remaining}`);
  lines.push('========================================');

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'EVANO_Baptism_Checklist.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('تم تصدير القائمة');
}

function statusLabel(s) {
  if (s === 'done') return 'مكتمل';
  if (s === 'in-progress') return 'قيد التنفيذ';
  return 'لم يبدأ';
}

renderAll();
