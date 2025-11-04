
// Simple bilingual toggle (ES/EN) and smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('langBtn');
  const html = document.documentElement;
  btn.addEventListener('click', function(){
    const current = html.getAttribute('lang') || 'es';
    const next = current === 'es' ? 'en' : 'es';
    html.setAttribute('lang', next);
    // toggle visible texts
    document.querySelectorAll('[data-lang]').forEach(el=>{
      el.style.display = (el.getAttribute('data-lang')===next)?'block':'none';
    });
    btn.textContent = next === 'es' ? 'ES / EN' : 'EN / ES';
  });
  // initialize
  const current = html.getAttribute('lang') || 'es';
  document.querySelectorAll('[data-lang]').forEach(el=>{
    el.style.display = (el.getAttribute('data-lang')===current)?'block':'none';
  });
  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
