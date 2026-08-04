(function(){
  // Staggered reveal on scroll
  const cards = document.querySelectorAll('.speaker-card-3d');
  if(!cards.length) return;

  const obs = new IntersectionObserver((entries)=>{
    entries.forEach((entry, i)=>{
      if(entry.isIntersecting){
        setTimeout(()=>entry.target.classList.add('revealed'), i * 120);
        obs.unobserve(entry.target);
      }
    });
  },{threshold:.2});
  cards.forEach(c=>obs.observe(c));

  // 3D tilt on mousemove
  const isMobile = window.innerWidth < 768;
  if(isMobile) return;

  cards.forEach(card=>{
    card.addEventListener('mousemove', e=>{
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -8;
      const rotY = ((x - cx) / cx) * 8;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', ()=>{
      card.style.transform = '';
    });
  });
})();
