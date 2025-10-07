

export default (
  (gl,projected_af,poly_af,mpol_bbox_af,features_af,compute_bbox) => {
    var
      i = 0,
      features = gl.features,
      f = null,
      l = features.length,
      geom=null,
      kind=0,
      projected = null,
      polyRings = null,

      v=Array.from(features,features_af),//TODO:
      _ = null,

      bb = null
    ;
    
    for(;i<l;i++){
      geom=(f=features[i]).geometry;
      kind=(_=v[i]).k;

      
      if ((kind === 0) || (kind === 1)) {
        if (kind === 0) {
          _.projected=(projected=Array.from(geom.coordinates, projected_af));
          _.bboxes=[compute_bbox([0,0,0,0],projected[0])];
        }
        else if (kind === 1) {
          _.projected = (projected=Array.from(geom.coordinates,poly_af));
          _.bboxes = Array.from(projected, mpol_bbox_af);
        }

        if (_.n) {
          bb = _.bboxes[0];

          _.nx = ((bb[0]+bb[2])/2);
          _.ny = ((bb[1]+bb[3])/2);
        }
      }
      
    }
    return v;
  }
);