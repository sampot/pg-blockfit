export function emptyGrid(n=8){return Array.from({length:n},()=>Array(n).fill(0));}
export const SHAPES=[[[1,1],[1,1]],[[1,1,1]],[[1],[1],[1]],[[1,1,1],[0,1,0]],[[1,1,0],[0,1,1]]];
export function canPlace(grid,shape,r0,c0){for(let r=0;r<shape.length;r++)for(let c=0;c<shape[r].length;c++){if(!shape[r][c])continue;const rr=r0+r,cc=c0+c;if(rr<0||cc<0||rr>=grid.length||cc>=grid[0].length||grid[rr][cc])return false;}return true;}
export function place(grid,shape,r0,c0){const next=grid.map(r=>r.slice());for(let r=0;r<shape.length;r++)for(let c=0;c<shape[r].length;c++)if(shape[r][c])next[r0+r][c0+c]=1;return clearLines(next);}
export function clearLines(grid){const n=grid.length;const fullR=grid.map(row=>row.every(v=>v===1));const fullC=Array.from({length:n},(_,c)=>grid.every(row=>row[c]===1));let cleared=0;const next=grid.map(r=>r.slice());for(let r=0;r<n;r++)if(fullR[r]){next[r]=Array(n).fill(0);cleared++;}for(let c=0;c<n;c++)if(fullC[c]){for(let r=0;r<n;r++)next[r][c]=0;cleared++;}return{grid:next,cleared};}
export function deal(rand=Math.random){return[0,1,2].map(()=>SHAPES[Math.floor(rand()*SHAPES.length)]);}
