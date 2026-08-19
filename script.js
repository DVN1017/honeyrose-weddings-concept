const header=document.querySelector('.header');
const nav=document.querySelector('nav');
const menu=document.querySelector('.menu');

window.addEventListener('scroll',()=>{
  const scrolled=window.scrollY>40;
  header.style.background=scrolled?'rgba(20,19,17,.82)':'transparent';
  header.style.backdropFilter=scrolled?'blur(12px)':'none';
  header.style.transition='background .3s ease,backdrop-filter .3s ease';
});

menu.addEventListener('click',()=>{
  const open=nav.classList.toggle('mobile-open');
  nav.style.display=open?'flex':'';
  if(open){
    nav.style.position='absolute';
    nav.style.top='70px';
    nav.style.right='6vw';
    nav.style.flexDirection='column';
    nav.style.alignItems='flex-end';
    nav.style.gap='18px';
    nav.style.background='#171512';
    nav.style.padding='20px';
    nav.style.borderRadius='14px';
    nav.style.boxShadow='0 18px 40px rgba(0,0,0,.25)';
  }
});

document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('mobile-open');
  if(window.innerWidth<=850) nav.style.display='none';
}));

document.querySelectorAll('.space-card,.step,.everything-photo,.proposal form,.trust>div').forEach(el=>el.classList.add('reveal'));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
