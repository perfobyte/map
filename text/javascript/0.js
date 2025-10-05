import {
    on_canvas_resize,
    on_reset_click,
} from './on/i.js';
import {url, STROKE_STYLE, BG_STYLE} from './conf.js';

import {statusEl} from './elems.js';


(()=>{
    
    return (
        window.addEventListener('resize', on_canvas_resize),

        fetch(url)
        .then(r=>r.json())
        .then(
            gl => {

            }
        )
    );
  
    let features = [];
    
    statusEl.textContent = 'загрузка GeoJSON…';
    const gj = await ;
    statusEl.textContent = 'проекция координат…';
  
    function prepareFeatures
  
    prepareFeatures();
  
    
    canvas.addEventListener('mousedown',e=>{isDragging=true;lastX=e.clientX;lastY=e.clientY;});
    window.addEventListener('mouseup',()=>{isDragging=false;});
    window.addEventListener('mousemove',e=>{
      if(!isDragging)return; const dx=e.clientX-lastX,dy=e.clientY-lastY; lastX=e.clientX;lastY=e.clientY;
      view.x-=dx/view.scale; view.y-=dy/view.scale; dirty=true;
    });
    canvas.addEventListener('wheel',e=>{
      e.preventDefault();
      const rect=canvas.getBoundingClientRect();
      const cx=e.clientX-rect.left, cy=e.clientY-rect.top;
      const worldBefore=screenToWorld(cx,cy);
      const factor=(e.deltaY>0?1/1.15:1.15);
      view.scale*=factor;
      const worldAfter=screenToWorld(cx,cy);
      view.x+=worldBefore[0]-worldAfter[0];
      view.y+=worldBefore[1]-worldAfter[1];
      dirty=true;
    },{passive:false});
    resetBtn.addEventListener('click',on_reset_click);
    
  
    function worldToScreen(wx,wy){ return [(wx-view.x)*view.scale+canvas.clientWidth/2,(wy-view.y)*view.scale+canvas.clientHeight/2]; }
    function screenToWorld(sx,sy){ return [(sx-canvas.clientWidth/2)/view.scale+view.x,(sy-canvas.clientHeight/2)/view.scale+view.y]; }
    function getScreenRectAsWorld(){ const tl=screenToWorld(0,0),br=screenToWorld(canvas.clientWidth,canvas.clientHeight); return [tl[0],tl[1],br[0],br[1]]; }
  
    function draw(){
      ctx.fillStyle=BG_STYLE; ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);
      ctx.strokeStyle=STROKE_STYLE; ctx.lineWidth=1;
      const rect=getScreenRectAsWorld();
      ctx.beginPath();
      for(const f of features){
        if(f.kind==='Polygon'){
          if(!bbox_intersects(f.bboxes[0],rect)) continue;
          for(const ring of f.projected){
            ring.forEach(([x,y],i)=>{const [sx,sy]=worldToScreen(x,y);if(i===0)ctx.moveTo(sx,sy);else ctx.lineTo(sx,sy);});
            ctx.closePath();
          }
        } else if(f.kind==='MultiPolygon'){
          for(let p=0;p<f.projected.length;p++){
            if(!bbox_intersects(f.bboxes[p],rect)) continue;
            for(const ring of f.projected[p]){
              ring.forEach(([x,y],i)=>{const [sx,sy]=worldToScreen(x,y);if(i===0)ctx.moveTo(sx,sy);else ctx.lineTo(sx,sy);});
              ctx.closePath();
            }
          }
        }
      }
      ctx.stroke();
      hud.textContent=`фич: ${features.length} · масштаб: ${view.scale.toFixed(2)} · проекция: ${currentProjection}`;
    }
  
    var loop = () => {
        if (dirty) {
            draw();
            dirty=false;
        }
        requestAnimationFrame(loop);
    }
    canvas.dispatchEvent(new Event("resize"));
    on_reset_click();
    statusEl.textContent='готово';
    requestAnimationFrame(loop);
  })();