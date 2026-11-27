const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
// Storyboards now run on the shared card player (hmr-card/). The page shows each moment as a static summary.
// reveal on scroll, rail highlight
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');const id=e.target.id;document.querySelectorAll('.rail a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+id))}}),{threshold:.3});
document.querySelectorAll('.moment').forEach(m=>io.observe(m));
if(!('IntersectionObserver' in window))document.querySelectorAll('.moment').forEach(m=>m.classList.add('in'));
// Hero scene
(async()=>{
  const cv=document.getElementById('gl');
  try{
    const probe=document.createElement('canvas');
    if(!(probe.getContext('webgl2')||probe.getContext('webgl')))throw 0;
    const T=await import('./vendor/three.module.js');
    const r=new T.WebGLRenderer({canvas:cv,antialias:true,alpha:true});
    r.setPixelRatio(Math.min(devicePixelRatio,2));
    const scene=new T.Scene();scene.fog=new T.FogExp2(0x2b1f4a,.018);
    const cam=new T.PerspectiveCamera(60,1,.1,200);cam.position.set(0,3,12);
    // field of points
    const N=110,pos=new Float32Array(N*N*3),col=new Float32Array(N*N*3),base=[];
    let k=0;for(let i=0;i<N;i++)for(let j=0;j<N;j++){const x=(i-N/2)*.7,z=-(j*.7)+8;pos.set([x,0,z],k*3);base.push([x,z]);col.set([1,.7+Math.random()*.3,.4],k*3);k++}
    const g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(pos,3));g.setAttribute('color',new T.BufferAttribute(col,3));
    const pts=new T.Points(g,new T.PointsMaterial({map:(()=>{const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d');const gr=x.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,'#fff');gr.addColorStop(.5,'#fff');gr.addColorStop(1,'#fff0');x.fillStyle=gr;x.fillRect(0,0,64,64);return new T.CanvasTexture(c)})(),alphaTest:.05,depthWrite:false,size:.13,vertexColors:true,transparent:true,opacity:1,sizeAttenuation:true}));scene.add(pts);
    const sun=new T.Mesh(new T.SphereGeometry(5,48,48),new T.MeshBasicMaterial({color:0xffd23f,fog:false}));sun.position.set(0,-3,-60);scene.add(sun);
    const halo=new T.Mesh(new T.SphereGeometry(9,32,32),new T.MeshBasicMaterial({color:0xff5a36,transparent:true,opacity:.25,fog:false}));halo.position.copy(sun.position);scene.add(halo);
    let mx=0,my=0,sy=0;
    addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
    addEventListener('scroll',()=>{sy=Math.min(scrollY/innerHeight,1)},{passive:true});
    const size=()=>{const w=cv.clientWidth,h=cv.clientHeight;r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()};
    addEventListener('resize',size);size();
    const frame=t=>{
      const p=g.attributes.position.array;
      for(let i=0;i<base.length;i++){const [x,z]=base[i];p[i*3+1]=Math.sin(x*.5+t*.0006)*.35+Math.cos(z*.4+t*.0005)*.35}
      g.attributes.position.needsUpdate=true;
      const rise=reduce?.45:Math.min(.25+t*.000015,.6);
      sun.position.y=-6+rise*18+sy*8;halo.position.y=sun.position.y;
      cam.position.x+=((mx*4)-cam.position.x)*.05;cam.position.y+=((3-my*1.5-sy*1.5)-cam.position.y)*.05;cam.lookAt(0,1+sy*2,-20);
      r.setClearColor(0x000000,0);r.render(scene,cam);
    };
    if(reduce){frame(0)}else{const loop=t=>{frame(t);requestAnimationFrame(loop)};requestAnimationFrame(loop)}
    document.body.classList.add('glok');
  }catch(e){document.documentElement.classList.add('nogl')}
})();
