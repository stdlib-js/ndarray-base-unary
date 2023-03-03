// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,o;r=this,o=function(){"use strict";function r(){var r,o=arguments,f=o[0],s="https://stdlib.io/e/"+f+"?";for(r=1;r<o.length;r++)s+="&arg[]="+encodeURIComponent(o[r]);return s}function o(r){var o,f;for(o=0,f=0;f<r.length;f++)r[f]<0&&(o+=1);return 0===o?1:o===r.length?-1:0}var f,s="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,a=e.toString,d=e.__defineGetter__,n=e.__defineSetter__,i=e.__lookupGetter__,c=e.__lookupSetter__;function u(r,o,f){var s,t,e,a,d;for(s=r.length,t=f,e=f,d=0;d<s;d++){if(0===r[d])return[f,f];(a=o[d])>0?e+=a*(r[d]-1):a<0&&(t+=a*(r[d]-1))}return[t,e]}function p(r){var o,f,s;if(0===(o=r.length))return 0;for(f=1,s=0;s<o;s++)f*=r[s];return f}function h(r,o){return r[o]}function l(r,o){return r.get(o)}function y(r,o,f){r[o]=f}function v(r,o,f){r.set(f,o)}function m(r){var o,f,s;return o=r.data,s=r.shape,f=Boolean(o.get&&o.set),{ref:r,dtype:r.dtype,data:o,length:p(s),shape:s,strides:r.strides,offset:r.offset,order:r.order,accessors:f,getter:f?l:h,setter:f?v:y}}function g(r,o){var f,s;for(f=[],s=0;s<o.length;s++)f.push(r[o[s]]);return f}function w(r,o,f){var s;return s=function(r){var o,f;if(o=[],r<=0)return o;for(f=0;f<r;f++)o.push(f);return o}(r.length),function(r,o){var f,s,t,e,a,d,n,i,c;for(s=1,t=1,c=1;c<r.length;c++){for(f=(d=r[s])<0?-d:d,n=o[t],e=s-1,a=t-1;e>=0&&!(((i=r[e])<0?-i:i)<=f);)r[e+1]=i,o[a+1]=o[a],e-=1,a-=1;r[e+1]=d,o[a+1]=n,s+=1,t+=1}}(o=function(r){var o,f,s;for(f=r.length,o=[],s=0;s<f;s++)o.push(r[s]);return o}(o),s),{sh:r=g(r,s),sx:o,sy:f=g(f,s)}}f=function(){try{return s({},"x",{}),!0}catch(r){return!1}}()?t:function(r,o,f){var s,t,u,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===a.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((t="value"in f)&&(i.call(r,o)||c.call(r,o)?(s=r.__proto__,r.__proto__=e,delete r[o],r[o]=f.value,r.__proto__=s):r[o]=f.value),u="get"in f,p="set"in f,t&&(u||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&d&&d.call(r,o,f.get),p&&n&&n.call(r,o,f.set),r},f(u,"assign",{configurable:!1,enumerable:!1,writable:!1,value:function(r,o,f,s){var t,e,a,d,n;for(t=r.length,e=f,a=f,n=0;n<t;n++){if(0===r[n])return s[0]=f,s[1]=f,s;(d=o[n])>0?a+=d*(r[n]-1):d<0&&(e+=d*(r[n]-1))}return s[0]=e,s[1]=a,s}});var j={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function _(r){return j[r]||null}var x=64,b=8;function P(r,o){var f,s;return f=_(r),s=_(o),null===f||null===s?b:f>s?x/f|0:x/s|0}function E(r,o,f,s,t,e){var a,d,n,i,c;for(a=r.length,d=1,c=0;c<a;c++)d*=r[c];if("clamp"===e)t<0?t=0:t>=d&&(t=d-1);else if("wrap"===e)t<0?(t+=d)<0&&0!=(t%=d)&&(t+=d):t>=d&&(t-=d)>=d&&(t%=d);else if(t<0||t>=d)throw new RangeError("invalid argument. Linear index must not exceed array dimensions. Number of array elements: "+d+". Value: `"+t+"`.");if(n=f,"column-major"===s){for(c=0;c<a;c++)t-=i=t%r[c],t/=r[c],n+=i*o[c];return n}for(c=a-1;c>=0;c--)t-=i=t%r[c],t/=r[c],n+=i*o[c];return n}var O="throw",T="throw",k=[function(r,o,f){o.data[o.offset]=f(r.data[r.offset])},function(r,o,f){var s,t,e,a,d,n,i,c;for(d=r.shape[0],e=r.strides[0],a=o.strides[0],n=r.offset,i=o.offset,s=r.data,t=o.data,c=0;c<d;c++)t[i]=f(s[n]),n+=e,i+=a},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m;for(i=r.shape,p=r.strides,h=o.strides,"row-major"===r.order?(c=i[1],u=i[0],e=p[1],a=p[0]-c*p[1],d=h[1],n=h[0]-c*h[1]):(c=i[0],u=i[1],e=p[0],a=p[1]-c*p[0],d=h[0],n=h[1]-c*h[0]),l=r.offset,y=o.offset,s=r.data,t=o.data,m=0;m<u;m++){for(v=0;v<c;v++)t[y]=f(s[l]),l+=e,y+=d;l+=a,y+=n}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_;for(u=r.shape,y=r.strides,v=o.strides,"row-major"===r.order?(p=u[2],h=u[1],l=u[0],e=y[2],a=y[1]-p*y[2],d=y[0]-h*y[1],n=v[2],i=v[1]-p*v[2],c=v[0]-h*v[1]):(p=u[0],h=u[1],l=u[2],e=y[0],a=y[1]-p*y[0],d=y[2]-h*y[1],n=v[0],i=v[1]-p*v[0],c=v[2]-h*v[1]),m=r.offset,g=o.offset,s=r.data,t=o.data,_=0;_<l;_++){for(j=0;j<h;j++){for(w=0;w<p;w++)t[g]=f(s[m]),m+=e,g+=n;m+=a,g+=i}m+=d,g+=c}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_,x,b,P,E;for(h=r.shape,g=r.strides,w=o.strides,"row-major"===r.order?(l=h[3],y=h[2],v=h[1],m=h[0],e=g[3],a=g[2]-l*g[3],d=g[1]-y*g[2],n=g[0]-v*g[1],i=w[3],c=w[2]-l*w[3],u=w[1]-y*w[2],p=w[0]-v*w[1]):(l=h[0],y=h[1],v=h[2],m=h[3],e=g[0],a=g[1]-l*g[0],d=g[2]-y*g[1],n=g[3]-v*g[2],i=w[0],c=w[1]-l*w[0],u=w[2]-y*w[1],p=w[3]-v*w[2]),j=r.offset,_=o.offset,s=r.data,t=o.data,E=0;E<m;E++){for(P=0;P<v;P++){for(b=0;b<y;b++){for(x=0;x<l;x++)t[_]=f(s[j]),j+=e,_+=i;j+=a,_+=c}j+=d,_+=u}j+=n,_+=p}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_,x,b,P,E,O,T,k,A;for(y=r.shape,_=r.strides,x=o.strides,"row-major"===r.order?(v=y[4],m=y[3],g=y[2],w=y[1],j=y[0],e=_[4],a=_[3]-v*_[4],d=_[2]-m*_[3],n=_[1]-g*_[2],i=_[0]-w*_[1],c=x[4],u=x[3]-v*x[4],p=x[2]-m*x[3],h=x[1]-g*x[2],l=x[0]-w*x[1]):(v=y[0],m=y[1],g=y[2],w=y[3],j=y[4],e=_[0],a=_[1]-v*_[0],d=_[2]-m*_[1],n=_[3]-g*_[2],i=_[4]-w*_[3],c=x[0],u=x[1]-v*x[0],p=x[2]-m*x[1],h=x[3]-g*x[2],l=x[4]-w*x[3]),b=r.offset,P=o.offset,s=r.data,t=o.data,A=0;A<j;A++){for(k=0;k<w;k++){for(T=0;T<g;T++){for(O=0;O<m;O++){for(E=0;E<v;E++)t[P]=f(s[b]),b+=e,P+=c;b+=a,P+=u}b+=d,P+=p}b+=n,P+=h}b+=i,P+=l}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_,x,b,P,E,O,T,k,A,S,V,C,G;for(m=r.shape,P=r.strides,E=o.strides,"row-major"===r.order?(g=m[5],w=m[4],j=m[3],_=m[2],x=m[1],b=m[0],e=P[5],a=P[4]-g*P[5],d=P[3]-w*P[4],n=P[2]-j*P[3],i=P[1]-_*P[2],c=P[0]-x*P[1],u=E[5],p=E[4]-g*E[5],h=E[3]-w*E[4],l=E[2]-j*E[3],y=E[1]-_*E[2],v=E[0]-x*E[1]):(g=m[0],w=m[1],j=m[2],_=m[3],x=m[4],b=m[5],e=P[0],a=P[1]-g*P[0],d=P[2]-w*P[1],n=P[3]-j*P[2],i=P[4]-_*P[3],c=P[5]-x*P[4],u=E[0],p=E[1]-g*E[0],h=E[2]-w*E[1],l=E[3]-j*E[2],y=E[4]-_*E[3],v=E[5]-x*E[4]),O=r.offset,T=o.offset,s=r.data,t=o.data,G=0;G<b;G++){for(C=0;C<x;C++){for(V=0;V<_;V++){for(S=0;S<j;S++){for(A=0;A<w;A++){for(k=0;k<g;k++)t[T]=f(s[O]),O+=e,T+=u;O+=a,T+=p}O+=d,T+=h}O+=n,T+=l}O+=i,T+=y}O+=c,T+=v}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_,x,b,P,E,O,T,k,A,S,V,C,G,R,B,F,I;for(w=r.shape,T=r.strides,k=o.strides,"row-major"===r.order?(j=w[6],_=w[5],x=w[4],b=w[3],P=w[2],E=w[1],O=w[0],e=T[6],a=T[5]-j*T[6],d=T[4]-_*T[5],n=T[3]-x*T[4],i=T[2]-b*T[3],c=T[1]-P*T[2],u=T[0]-E*T[1],p=k[6],h=k[5]-j*k[6],l=k[4]-_*k[5],y=k[3]-x*k[4],v=k[2]-b*k[3],m=k[1]-P*k[2],g=k[0]-E*k[1]):(j=w[0],_=w[1],x=w[2],b=w[3],P=w[4],E=w[5],O=w[6],e=T[0],a=T[1]-j*T[0],d=T[2]-_*T[1],n=T[3]-x*T[2],i=T[4]-b*T[3],c=T[5]-P*T[4],u=T[6]-E*T[5],p=k[0],h=k[1]-j*k[0],l=k[2]-_*k[1],y=k[3]-x*k[2],v=k[4]-b*k[3],m=k[5]-P*k[4],g=k[6]-E*k[5]),A=r.offset,S=o.offset,s=r.data,t=o.data,I=0;I<O;I++){for(F=0;F<E;F++){for(B=0;B<P;B++){for(R=0;R<b;R++){for(G=0;G<x;G++){for(C=0;C<_;C++){for(V=0;V<j;V++)t[S]=f(s[A]),A+=e,S+=p;A+=a,S+=h}A+=d,S+=l}A+=n,S+=y}A+=i,S+=v}A+=c,S+=m}A+=u,S+=g}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_,x,b,P,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U;for(_=r.shape,S=r.strides,V=o.strides,"row-major"===r.order?(x=_[7],b=_[6],P=_[5],E=_[4],O=_[3],T=_[2],k=_[1],A=_[0],e=S[7],a=S[6]-x*S[7],d=S[5]-b*S[6],n=S[4]-P*S[5],i=S[3]-E*S[4],c=S[2]-O*S[3],u=S[1]-T*S[2],p=S[0]-k*S[1],h=V[7],l=V[6]-x*V[7],y=V[5]-b*V[6],v=V[4]-P*V[5],m=V[3]-E*V[4],g=V[2]-O*V[3],w=V[1]-T*V[2],j=V[0]-k*V[1]):(x=_[0],b=_[1],P=_[2],E=_[3],O=_[4],T=_[5],k=_[6],A=_[7],e=S[0],a=S[1]-x*S[0],d=S[2]-b*S[1],n=S[3]-P*S[2],i=S[4]-E*S[3],c=S[5]-O*S[4],u=S[6]-T*S[5],p=S[7]-k*S[6],h=V[0],l=V[1]-x*V[0],y=V[2]-b*V[1],v=V[3]-P*V[2],m=V[4]-E*V[3],g=V[5]-O*V[4],w=V[6]-T*V[5],j=V[7]-k*V[6]),C=r.offset,G=o.offset,s=r.data,t=o.data,U=0;U<A;U++){for(N=0;N<k;N++){for(M=0;M<T;M++){for(L=0;L<O;L++){for(I=0;I<E;I++){for(F=0;F<P;F++){for(B=0;B<b;B++){for(R=0;R<x;R++)t[G]=f(s[C]),C+=e,G+=h;C+=a,G+=l}C+=d,G+=y}C+=n,G+=v}C+=i,G+=m}C+=c,G+=g}C+=u,G+=w}C+=p,G+=j}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_,x,b,P,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H;for(b=r.shape,G=r.strides,R=o.strides,"row-major"===r.order?(P=b[8],E=b[7],O=b[6],T=b[5],k=b[4],A=b[3],S=b[2],V=b[1],C=b[0],e=G[8],a=G[7]-P*G[8],d=G[6]-E*G[7],n=G[5]-O*G[6],i=G[4]-T*G[5],c=G[3]-k*G[4],u=G[2]-A*G[3],p=G[1]-S*G[2],h=G[0]-V*G[1],l=R[8],y=R[7]-P*R[8],v=R[6]-E*R[7],m=R[5]-O*R[6],g=R[4]-T*R[5],w=R[3]-k*R[4],j=R[2]-A*R[3],_=R[1]-S*R[2],x=R[0]-V*R[1]):(P=b[0],E=b[1],O=b[2],T=b[3],k=b[4],A=b[5],S=b[6],V=b[7],C=b[8],e=G[0],a=G[1]-P*G[0],d=G[2]-E*G[1],n=G[3]-O*G[2],i=G[4]-T*G[3],c=G[5]-k*G[4],u=G[6]-A*G[5],p=G[7]-S*G[6],h=G[8]-V*G[7],l=R[0],y=R[1]-P*R[0],v=R[2]-E*R[1],m=R[3]-O*R[2],g=R[4]-T*R[3],w=R[5]-k*R[4],j=R[6]-A*R[5],_=R[7]-S*R[6],x=R[8]-V*R[7]),B=r.offset,F=o.offset,s=r.data,t=o.data,H=0;H<C;H++){for(D=0;D<V;D++){for(z=0;z<S;z++){for(q=0;q<A;q++){for(U=0;U<k;U++){for(N=0;N<T;N++){for(M=0;M<O;M++){for(L=0;L<E;L++){for(I=0;I<P;I++)t[F]=f(s[B]),B+=e,F+=l;B+=a,F+=y}B+=d,F+=v}B+=n,F+=m}B+=i,F+=g}B+=c,F+=w}B+=u,F+=j}B+=p,F+=_}B+=h,F+=x}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_,x,b,P,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H,J,K,Q,W;for(E=r.shape,F=r.strides,I=o.strides,"row-major"===r.order?(O=E[9],T=E[8],k=E[7],A=E[6],S=E[5],V=E[4],C=E[3],G=E[2],R=E[1],B=E[0],e=F[9],a=F[8]-O*F[9],d=F[7]-T*F[8],n=F[6]-k*F[7],i=F[5]-A*F[6],c=F[4]-S*F[5],u=F[3]-V*F[4],p=F[2]-C*F[3],h=F[1]-G*F[2],l=F[0]-R*F[1],y=I[9],v=I[8]-O*I[9],m=I[7]-T*I[8],g=I[6]-k*I[7],w=I[5]-A*I[6],j=I[4]-S*I[5],_=I[3]-V*I[4],x=I[2]-C*I[3],b=I[1]-G*I[2],P=I[0]-R*I[1]):(O=E[0],T=E[1],k=E[2],A=E[3],S=E[4],V=E[5],C=E[6],G=E[7],R=E[8],B=E[9],e=F[0],a=F[1]-O*F[0],d=F[2]-T*F[1],n=F[3]-k*F[2],i=F[4]-A*F[3],c=F[5]-S*F[4],u=F[6]-V*F[5],p=F[7]-C*F[6],h=F[8]-G*F[7],l=F[9]-R*F[8],y=I[0],v=I[1]-O*I[0],m=I[2]-T*I[1],g=I[3]-k*I[2],w=I[4]-A*I[3],j=I[5]-S*I[4],_=I[6]-V*I[5],x=I[7]-C*I[6],b=I[8]-G*I[7],P=I[9]-R*I[8]),L=r.offset,M=o.offset,s=r.data,t=o.data,W=0;W<B;W++){for(Q=0;Q<R;Q++){for(K=0;K<G;K++){for(J=0;J<C;J++){for(H=0;H<V;H++){for(D=0;D<S;D++){for(z=0;z<A;z++){for(q=0;q<k;q++){for(U=0;U<T;U++){for(N=0;N<O;N++)t[M]=f(s[L]),L+=e,M+=y;L+=a,M+=v}L+=d,M+=m}L+=n,M+=g}L+=i,M+=w}L+=c,M+=j}L+=u,M+=_}L+=p,M+=x}L+=h,M+=b}L+=l,M+=P}}],A=[function(r,o,f){o.accessors[1](o.data,o.offset,f(r.accessors[0](r.data,r.offset)))},function(r,o,f){var s,t,e,a,d,n,i,c,u,p;for(i=r.shape[0],d=r.strides[0],n=o.strides[0],c=r.offset,u=o.offset,s=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],p=0;p<i;p++)a(t,u,f(e(s,c))),c+=d,u+=n},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w;for(u=r.shape,l=r.strides,y=o.strides,"row-major"===r.order?(p=u[1],h=u[0],d=l[1],n=l[0]-p*l[1],i=y[1],c=y[0]-p*y[1]):(p=u[0],h=u[1],d=l[0],n=l[1]-p*l[0],i=y[0],c=y[1]-p*y[0]),v=r.offset,m=o.offset,s=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],w=0;w<h;w++){for(g=0;g<p;g++)a(t,m,f(e(s,v))),v+=d,m+=i;v+=n,m+=c}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_,x,b;for(h=r.shape,m=r.strides,g=o.strides,"row-major"===r.order?(l=h[2],y=h[1],v=h[0],d=m[2],n=m[1]-l*m[2],i=m[0]-y*m[1],c=g[2],u=g[1]-l*g[2],p=g[0]-y*g[1]):(l=h[0],y=h[1],v=h[2],d=m[0],n=m[1]-l*m[0],i=m[2]-y*m[1],c=g[0],u=g[1]-l*g[0],p=g[2]-y*g[1]),w=r.offset,j=o.offset,s=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],b=0;b<v;b++){for(x=0;x<y;x++){for(_=0;_<l;_++)a(t,j,f(e(s,w))),w+=d,j+=c;w+=n,j+=u}w+=i,j+=p}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_,x,b,P,E,O,T;for(y=r.shape,j=r.strides,_=o.strides,"row-major"===r.order?(v=y[3],m=y[2],g=y[1],w=y[0],d=j[3],n=j[2]-v*j[3],i=j[1]-m*j[2],c=j[0]-g*j[1],u=_[3],p=_[2]-v*_[3],h=_[1]-m*_[2],l=_[0]-g*_[1]):(v=y[0],m=y[1],g=y[2],w=y[3],d=j[0],n=j[1]-v*j[0],i=j[2]-m*j[1],c=j[3]-g*j[2],u=_[0],p=_[1]-v*_[0],h=_[2]-m*_[1],l=_[3]-g*_[2]),x=r.offset,b=o.offset,s=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],T=0;T<w;T++){for(O=0;O<g;O++){for(E=0;E<m;E++){for(P=0;P<v;P++)a(t,b,f(e(s,x))),x+=d,b+=u;x+=n,b+=p}x+=i,b+=h}x+=c,b+=l}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_,x,b,P,E,O,T,k,A,S,V;for(m=r.shape,b=r.strides,P=o.strides,"row-major"===r.order?(g=m[4],w=m[3],j=m[2],_=m[1],x=m[0],d=b[4],n=b[3]-g*b[4],i=b[2]-w*b[3],c=b[1]-j*b[2],u=b[0]-_*b[1],p=P[4],h=P[3]-g*P[4],l=P[2]-w*P[3],y=P[1]-j*P[2],v=P[0]-_*P[1]):(g=m[0],w=m[1],j=m[2],_=m[3],x=m[4],d=b[0],n=b[1]-g*b[0],i=b[2]-w*b[1],c=b[3]-j*b[2],u=b[4]-_*b[3],p=P[0],h=P[1]-g*P[0],l=P[2]-w*P[1],y=P[3]-j*P[2],v=P[4]-_*P[3]),E=r.offset,O=o.offset,s=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],V=0;V<x;V++){for(S=0;S<_;S++){for(A=0;A<j;A++){for(k=0;k<w;k++){for(T=0;T<g;T++)a(t,O,f(e(s,E))),E+=d,O+=p;E+=n,O+=h}E+=i,O+=l}E+=c,O+=y}E+=u,O+=v}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_,x,b,P,E,O,T,k,A,S,V,C,G,R,B;for(w=r.shape,O=r.strides,T=o.strides,"row-major"===r.order?(j=w[5],_=w[4],x=w[3],b=w[2],P=w[1],E=w[0],d=O[5],n=O[4]-j*O[5],i=O[3]-_*O[4],c=O[2]-x*O[3],u=O[1]-b*O[2],p=O[0]-P*O[1],h=T[5],l=T[4]-j*T[5],y=T[3]-_*T[4],v=T[2]-x*T[3],m=T[1]-b*T[2],g=T[0]-P*T[1]):(j=w[0],_=w[1],x=w[2],b=w[3],P=w[4],E=w[5],d=O[0],n=O[1]-j*O[0],i=O[2]-_*O[1],c=O[3]-x*O[2],u=O[4]-b*O[3],p=O[5]-P*O[4],h=T[0],l=T[1]-j*T[0],y=T[2]-_*T[1],v=T[3]-x*T[2],m=T[4]-b*T[3],g=T[5]-P*T[4]),k=r.offset,A=o.offset,s=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],B=0;B<E;B++){for(R=0;R<P;R++){for(G=0;G<b;G++){for(C=0;C<x;C++){for(V=0;V<_;V++){for(S=0;S<j;S++)a(t,A,f(e(s,k))),k+=d,A+=h;k+=n,A+=l}k+=i,A+=y}k+=c,A+=v}k+=u,A+=m}k+=p,A+=g}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_,x,b,P,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M;for(_=r.shape,A=r.strides,S=o.strides,"row-major"===r.order?(x=_[6],b=_[5],P=_[4],E=_[3],O=_[2],T=_[1],k=_[0],d=A[6],n=A[5]-x*A[6],i=A[4]-b*A[5],c=A[3]-P*A[4],u=A[2]-E*A[3],p=A[1]-O*A[2],h=A[0]-T*A[1],l=S[6],y=S[5]-x*S[6],v=S[4]-b*S[5],m=S[3]-P*S[4],g=S[2]-E*S[3],w=S[1]-O*S[2],j=S[0]-T*S[1]):(x=_[0],b=_[1],P=_[2],E=_[3],O=_[4],T=_[5],k=_[6],d=A[0],n=A[1]-x*A[0],i=A[2]-b*A[1],c=A[3]-P*A[2],u=A[4]-E*A[3],p=A[5]-O*A[4],h=A[6]-T*A[5],l=S[0],y=S[1]-x*S[0],v=S[2]-b*S[1],m=S[3]-P*S[2],g=S[4]-E*S[3],w=S[5]-O*S[4],j=S[6]-T*S[5]),V=r.offset,C=o.offset,s=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],M=0;M<k;M++){for(L=0;L<T;L++){for(I=0;I<O;I++){for(F=0;F<E;F++){for(B=0;B<P;B++){for(R=0;R<b;R++){for(G=0;G<x;G++)a(t,C,f(e(s,V))),V+=d,C+=l;V+=n,C+=y}V+=i,C+=v}V+=c,C+=m}V+=u,C+=g}V+=p,C+=w}V+=h,C+=j}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_,x,b,P,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z;for(b=r.shape,C=r.strides,G=o.strides,"row-major"===r.order?(P=b[7],E=b[6],O=b[5],T=b[4],k=b[3],A=b[2],S=b[1],V=b[0],d=C[7],n=C[6]-P*C[7],i=C[5]-E*C[6],c=C[4]-O*C[5],u=C[3]-T*C[4],p=C[2]-k*C[3],h=C[1]-A*C[2],l=C[0]-S*C[1],y=G[7],v=G[6]-P*G[7],m=G[5]-E*G[6],g=G[4]-O*G[5],w=G[3]-T*G[4],j=G[2]-k*G[3],_=G[1]-A*G[2],x=G[0]-S*G[1]):(P=b[0],E=b[1],O=b[2],T=b[3],k=b[4],A=b[5],S=b[6],V=b[7],d=C[0],n=C[1]-P*C[0],i=C[2]-E*C[1],c=C[3]-O*C[2],u=C[4]-T*C[3],p=C[5]-k*C[4],h=C[6]-A*C[5],l=C[7]-S*C[6],y=G[0],v=G[1]-P*G[0],m=G[2]-E*G[1],g=G[3]-O*G[2],w=G[4]-T*G[3],j=G[5]-k*G[4],_=G[6]-A*G[5],x=G[7]-S*G[6]),R=r.offset,B=o.offset,s=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],z=0;z<V;z++){for(q=0;q<S;q++){for(U=0;U<A;U++){for(N=0;N<k;N++){for(M=0;M<T;M++){for(L=0;L<O;L++){for(I=0;I<E;I++){for(F=0;F<P;F++)a(t,B,f(e(s,R))),R+=d,B+=y;R+=n,B+=v}R+=i,B+=m}R+=c,B+=g}R+=u,B+=w}R+=p,B+=j}R+=h,B+=_}R+=l,B+=x}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_,x,b,P,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H,J,K;for(E=r.shape,B=r.strides,F=o.strides,"row-major"===r.order?(O=E[8],T=E[7],k=E[6],A=E[5],S=E[4],V=E[3],C=E[2],G=E[1],R=E[0],d=B[8],n=B[7]-O*B[8],i=B[6]-T*B[7],c=B[5]-k*B[6],u=B[4]-A*B[5],p=B[3]-S*B[4],h=B[2]-V*B[3],l=B[1]-C*B[2],y=B[0]-G*B[1],v=F[8],m=F[7]-O*F[8],g=F[6]-T*F[7],w=F[5]-k*F[6],j=F[4]-A*F[5],_=F[3]-S*F[4],x=F[2]-V*F[3],b=F[1]-C*F[2],P=F[0]-G*F[1]):(O=E[0],T=E[1],k=E[2],A=E[3],S=E[4],V=E[5],C=E[6],G=E[7],R=E[8],d=B[0],n=B[1]-O*B[0],i=B[2]-T*B[1],c=B[3]-k*B[2],u=B[4]-A*B[3],p=B[5]-S*B[4],h=B[6]-V*B[5],l=B[7]-C*B[6],y=B[8]-G*B[7],v=F[0],m=F[1]-O*F[0],g=F[2]-T*F[1],w=F[3]-k*F[2],j=F[4]-A*F[3],_=F[5]-S*F[4],x=F[6]-V*F[5],b=F[7]-C*F[6],P=F[8]-G*F[7]),I=r.offset,L=o.offset,s=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],K=0;K<R;K++){for(J=0;J<G;J++){for(H=0;H<C;H++){for(D=0;D<V;D++){for(z=0;z<S;z++){for(q=0;q<A;q++){for(U=0;U<k;U++){for(N=0;N<T;N++){for(M=0;M<O;M++)a(t,L,f(e(s,I))),I+=d,L+=v;I+=n,L+=m}I+=i,L+=g}I+=c,L+=w}I+=u,L+=j}I+=p,L+=_}I+=h,L+=x}I+=l,L+=b}I+=y,L+=P}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,w,j,_,x,b,P,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H,J,K,Q,W,X,Y;for(T=r.shape,L=r.strides,M=o.strides,"row-major"===r.order?(k=T[9],A=T[8],S=T[7],V=T[6],C=T[5],G=T[4],R=T[3],B=T[2],F=T[1],I=T[0],d=L[9],n=L[8]-k*L[9],i=L[7]-A*L[8],c=L[6]-S*L[7],u=L[5]-V*L[6],p=L[4]-C*L[5],h=L[3]-G*L[4],l=L[2]-R*L[3],y=L[1]-B*L[2],v=L[0]-F*L[1],m=M[9],g=M[8]-k*M[9],w=M[7]-A*M[8],j=M[6]-S*M[7],_=M[5]-V*M[6],x=M[4]-C*M[5],b=M[3]-G*M[4],P=M[2]-R*M[3],E=M[1]-B*M[2],O=M[0]-F*M[1]):(k=T[0],A=T[1],S=T[2],V=T[3],C=T[4],G=T[5],R=T[6],B=T[7],F=T[8],I=T[9],d=L[0],n=L[1]-k*L[0],i=L[2]-A*L[1],c=L[3]-S*L[2],u=L[4]-V*L[3],p=L[5]-C*L[4],h=L[6]-G*L[5],l=L[7]-R*L[6],y=L[8]-B*L[7],v=L[9]-F*L[8],m=M[0],g=M[1]-k*M[0],w=M[2]-A*M[1],j=M[3]-S*M[2],_=M[4]-V*M[3],x=M[5]-C*M[4],b=M[6]-G*M[5],P=M[7]-R*M[6],E=M[8]-B*M[7],O=M[9]-F*M[8]),N=r.offset,U=o.offset,s=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],Y=0;Y<I;Y++){for(X=0;X<F;X++){for(W=0;W<B;W++){for(Q=0;Q<R;Q++){for(K=0;K<G;K++){for(J=0;J<C;J++){for(H=0;H<V;H++){for(D=0;D<S;D++){for(z=0;z<A;z++){for(q=0;q<k;q++)a(t,U,f(e(s,N))),N+=d,U+=m;N+=n,U+=g}N+=i,U+=w}N+=c,U+=j}N+=u,U+=_}N+=p,U+=x}N+=h,U+=b}N+=l,U+=P}N+=y,U+=E}N+=v,U+=O}}],S=[function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T;for(p=(T=w(r.shape,r.strides,o.strides)).sh,y=T.sx,v=T.sy,s=P(r.dtype,o.dtype),m=r.offset,g=o.offset,t=r.data,e=o.data,a=y[0],n=v[0],O=p[1];O>0;)for(O<s?(l=O,O=0):(l=s,O-=s),c=m+O*y[1],u=g+O*v[1],E=p[0];E>0;)for(E<s?(h=E,E=0):(h=s,E-=s),j=c+E*y[0],_=u+E*v[0],d=y[1]-h*y[0],i=v[1]-h*v[0],b=0;b<l;b++){for(x=0;x<h;x++)e[_]=f(t[j]),j+=a,_+=n;j+=d,_+=i}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R;for(v=(R=w(r.shape,r.strides,o.strides)).sh,_=R.sx,x=R.sy,s=P(r.dtype,o.dtype),b=r.offset,E=o.offset,t=r.data,e=o.data,a=_[0],i=x[0],G=v[2];G>0;)for(G<s?(j=G,G=0):(j=s,G-=s),h=b+G*_[2],y=E+G*x[2],C=v[1];C>0;)for(C<s?(g=C,C=0):(g=s,C-=s),n=_[2]-g*_[1],u=x[2]-g*x[1],p=h+C*_[1],l=y+C*x[1],V=v[0];V>0;)for(V<s?(m=V,V=0):(m=s,V-=s),O=p+V*_[0],T=l+V*x[0],d=_[1]-m*_[0],c=x[1]-m*x[0],S=0;S<j;S++){for(A=0;A<g;A++){for(k=0;k<m;k++)e[T]=f(t[O]),O+=a,T+=i;O+=d,T+=c}O+=n,T+=u}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U;for(_=(U=w(r.shape,r.strides,o.strides)).sh,T=U.sx,k=U.sy,s=P(r.dtype,o.dtype),A=r.offset,S=o.offset,t=r.data,e=o.data,a=T[0],c=k[0],N=_[3];N>0;)for(N<s?(O=N,N=0):(O=s,N-=s),v=A+N*T[3],j=S+N*k[3],M=_[2];M>0;)for(M<s?(E=M,M=0):(E=s,M-=s),i=T[3]-E*T[2],h=k[3]-E*k[2],y=v+M*T[2],g=j+M*k[2],L=_[1];L>0;)for(L<s?(b=L,L=0):(b=s,L-=s),n=T[2]-b*T[1],p=k[2]-b*k[1],l=y+L*T[1],m=g+L*k[1],I=_[0];I>0;)for(I<s?(x=I,I=0):(x=s,I-=s),V=l+I*T[0],C=m+I*k[0],d=T[1]-x*T[0],u=k[1]-x*k[0],F=0;F<O;F++){for(B=0;B<E;B++){for(R=0;R<b;R++){for(G=0;G<x;G++)e[C]=f(t[V]),V+=a,C+=c;V+=d,C+=u}V+=n,C+=p}V+=i,C+=h}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H,J,K,Q;for(O=(Q=w(r.shape,r.strides,o.strides)).sh,C=Q.sx,G=Q.sy,s=P(r.dtype,o.dtype),R=r.offset,B=o.offset,t=r.data,e=o.data,a=C[0],u=G[0],K=O[4];K>0;)for(K<s?(V=K,K=0):(V=s,K-=s),j=R+K*C[4],E=B+K*G[4],J=O[3];J>0;)for(J<s?(S=J,J=0):(S=s,J-=s),c=C[4]-S*C[3],y=G[4]-S*G[3],g=j+J*C[3],b=E+J*G[3],H=O[2];H>0;)for(H<s?(A=H,H=0):(A=s,H-=s),i=C[3]-A*C[2],l=G[3]-A*G[2],m=g+H*C[2],x=b+H*G[2],D=O[1];D>0;)for(D<s?(k=D,D=0):(k=s,D-=s),n=C[2]-k*C[1],h=G[2]-k*G[1],v=m+D*C[1],_=x+D*G[1],z=O[0];z>0;)for(z<s?(T=z,z=0):(T=s,z-=s),F=v+z*C[0],I=_+z*G[0],d=C[1]-T*C[0],p=G[1]-T*G[0],q=0;q<V;q++){for(U=0;U<S;U++){for(N=0;N<A;N++){for(M=0;M<k;M++){for(L=0;L<T;L++)e[I]=f(t[F]),F+=a,I+=u;F+=d,I+=p}F+=n,I+=h}F+=i,I+=l}F+=c,I+=y}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H,J,K,Q,W,X,Y,Z,$,rr,or;for(S=(or=w(r.shape,r.strides,o.strides)).sh,I=or.sx,L=or.sy,s=P(r.dtype,o.dtype),M=r.offset,N=o.offset,t=r.data,e=o.data,a=I[0],p=L[0],rr=S[5];rr>0;)for(rr<s?(F=rr,rr=0):(F=s,rr-=s),b=M+rr*I[5],A=N+rr*L[5],$=S[4];$>0;)for($<s?(B=$,$=0):(B=s,$-=s),u=I[5]-B*I[4],m=L[5]-B*L[4],x=b+$*I[4],k=A+$*L[4],Z=S[3];Z>0;)for(Z<s?(R=Z,Z=0):(R=s,Z-=s),c=I[4]-R*I[3],v=L[4]-R*L[3],_=x+Z*I[3],T=k+Z*L[3],Y=S[2];Y>0;)for(Y<s?(G=Y,Y=0):(G=s,Y-=s),i=I[3]-G*I[2],y=L[3]-G*L[2],j=_+Y*I[2],O=T+Y*L[2],X=S[1];X>0;)for(X<s?(C=X,X=0):(C=s,X-=s),n=I[2]-C*I[1],l=L[2]-C*L[1],g=j+X*I[1],E=O+X*L[1],W=S[0];W>0;)for(W<s?(V=W,W=0):(V=s,W-=s),U=g+W*I[0],q=E+W*L[0],d=I[1]-V*I[0],h=L[1]-V*L[0],Q=0;Q<F;Q++){for(K=0;K<B;K++){for(J=0;J<R;J++){for(H=0;H<G;H++){for(D=0;D<C;D++){for(z=0;z<V;z++)e[q]=f(t[U]),U+=a,q+=p;U+=d,q+=h}U+=n,q+=l}U+=i,q+=y}U+=c,q+=v}U+=u,q+=m}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,sr,tr,er,ar,dr,nr;for(R=(nr=w(r.shape,r.strides,o.strides)).sh,q=nr.sx,z=nr.sy,s=P(r.dtype,o.dtype),D=r.offset,H=o.offset,t=r.data,e=o.data,a=q[0],h=z[0],dr=R[6];dr>0;)for(dr<s?(U=dr,dr=0):(U=s,dr-=s),T=D+dr*q[6],G=H+dr*z[6],ar=R[5];ar>0;)for(ar<s?(N=ar,ar=0):(N=s,ar-=s),p=q[6]-N*q[5],j=z[6]-N*z[5],O=T+ar*q[5],C=G+ar*z[5],er=R[4];er>0;)for(er<s?(M=er,er=0):(M=s,er-=s),u=q[5]-M*q[4],g=z[5]-M*z[4],E=O+er*q[4],V=C+er*z[4],tr=R[3];tr>0;)for(tr<s?(L=tr,tr=0):(L=s,tr-=s),c=q[4]-L*q[3],m=z[4]-L*z[3],b=E+tr*q[3],S=V+tr*z[3],sr=R[2];sr>0;)for(sr<s?(I=sr,sr=0):(I=s,sr-=s),i=q[3]-I*q[2],v=z[3]-I*z[2],x=b+sr*q[2],A=S+sr*z[2],fr=R[1];fr>0;)for(fr<s?(F=fr,fr=0):(F=s,fr-=s),n=q[2]-F*q[1],y=z[2]-F*z[1],_=x+fr*q[1],k=A+fr*z[1],or=R[0];or>0;)for(or<s?(B=or,or=0):(B=s,or-=s),J=_+or*q[0],K=k+or*z[0],d=q[1]-B*q[0],l=z[1]-B*z[0],rr=0;rr<U;rr++){for($=0;$<N;$++){for(Z=0;Z<M;Z++){for(Y=0;Y<L;Y++){for(X=0;X<I;X++){for(W=0;W<F;W++){for(Q=0;Q<B;Q++)e[K]=f(t[J]),J+=a,K+=h;J+=d,K+=l}J+=n,K+=y}J+=i,K+=v}J+=c,K+=m}J+=u,K+=g}J+=p,K+=j}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,sr,tr,er,ar,dr,nr,ir,cr,ur,pr,hr,lr,yr;for(L=(yr=w(r.shape,r.strides,o.strides)).sh,K=yr.sx,Q=yr.sy,s=P(r.dtype,o.dtype),W=r.offset,X=o.offset,t=r.data,e=o.data,a=K[0],l=Q[0],lr=L[7];lr>0;)for(lr<s?(J=lr,lr=0):(J=s,lr-=s),S=W+lr*K[7],I=X+lr*Q[7],hr=L[6];hr>0;)for(hr<s?(H=hr,hr=0):(H=s,hr-=s),h=K[7]-H*K[6],x=Q[7]-H*Q[6],A=S+hr*K[6],F=I+hr*Q[6],pr=L[5];pr>0;)for(pr<s?(D=pr,pr=0):(D=s,pr-=s),p=K[6]-D*K[5],_=Q[6]-D*Q[5],k=A+pr*K[5],B=F+pr*Q[5],ur=L[4];ur>0;)for(ur<s?(z=ur,ur=0):(z=s,ur-=s),u=K[5]-z*K[4],j=Q[5]-z*Q[4],T=k+ur*K[4],R=B+ur*Q[4],cr=L[3];cr>0;)for(cr<s?(q=cr,cr=0):(q=s,cr-=s),c=K[4]-q*K[3],g=Q[4]-q*Q[3],O=T+cr*K[3],G=R+cr*Q[3],ir=L[2];ir>0;)for(ir<s?(U=ir,ir=0):(U=s,ir-=s),i=K[3]-U*K[2],m=Q[3]-U*Q[2],E=O+ir*K[2],C=G+ir*Q[2],nr=L[1];nr>0;)for(nr<s?(N=nr,nr=0):(N=s,nr-=s),n=K[2]-N*K[1],v=Q[2]-N*Q[1],b=E+nr*K[1],V=C+nr*Q[1],dr=L[0];dr>0;)for(dr<s?(M=dr,dr=0):(M=s,dr-=s),Y=b+dr*K[0],Z=V+dr*Q[0],d=K[1]-M*K[0],y=Q[1]-M*Q[0],ar=0;ar<J;ar++){for(er=0;er<H;er++){for(tr=0;tr<D;tr++){for(sr=0;sr<z;sr++){for(fr=0;fr<q;fr++){for(or=0;or<U;or++){for(rr=0;rr<N;rr++){for($=0;$<M;$++)e[Z]=f(t[Y]),Y+=a,Z+=l;Y+=d,Z+=y}Y+=n,Z+=v}Y+=i,Z+=m}Y+=c,Z+=g}Y+=u,Z+=j}Y+=p,Z+=_}Y+=h,Z+=x}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,sr,tr,er,ar,dr,nr,ir,cr,ur,pr,hr,lr,yr,vr,mr,gr,wr,jr,_r,xr;for(q=(xr=w(r.shape,r.strides,o.strides)).sh,Z=xr.sx,$=xr.sy,s=P(r.dtype,o.dtype),rr=r.offset,or=o.offset,t=r.data,e=o.data,a=Z[0],y=$[0],_r=q[8];_r>0;)for(_r<s?(Y=_r,_r=0):(Y=s,_r-=s),G=rr+_r*Z[8],U=or+_r*$[8],jr=q[7];jr>0;)for(jr<s?(X=jr,jr=0):(X=s,jr-=s),l=Z[8]-X*Z[7],E=$[8]-X*$[7],C=G+jr*Z[7],N=U+jr*$[7],wr=q[6];wr>0;)for(wr<s?(W=wr,wr=0):(W=s,wr-=s),h=Z[7]-W*Z[6],b=$[7]-W*$[6],V=C+wr*Z[6],M=N+wr*$[6],gr=q[5];gr>0;)for(gr<s?(Q=gr,gr=0):(Q=s,gr-=s),p=Z[6]-Q*Z[5],x=$[6]-Q*$[5],S=V+gr*Z[5],L=M+gr*$[5],mr=q[4];mr>0;)for(mr<s?(K=mr,mr=0):(K=s,mr-=s),u=Z[5]-K*Z[4],_=$[5]-K*$[4],A=S+mr*Z[4],I=L+mr*$[4],vr=q[3];vr>0;)for(vr<s?(J=vr,vr=0):(J=s,vr-=s),c=Z[4]-J*Z[3],j=$[4]-J*$[3],k=A+vr*Z[3],F=I+vr*$[3],yr=q[2];yr>0;)for(yr<s?(H=yr,yr=0):(H=s,yr-=s),i=Z[3]-H*Z[2],g=$[3]-H*$[2],T=k+yr*Z[2],B=F+yr*$[2],lr=q[1];lr>0;)for(lr<s?(D=lr,lr=0):(D=s,lr-=s),n=Z[2]-D*Z[1],m=$[2]-D*$[1],O=T+lr*Z[1],R=B+lr*$[1],hr=q[0];hr>0;)for(hr<s?(z=hr,hr=0):(z=s,hr-=s),fr=O+hr*Z[0],sr=R+hr*$[0],d=Z[1]-z*Z[0],v=$[1]-z*$[0],pr=0;pr<Y;pr++){for(ur=0;ur<X;ur++){for(cr=0;cr<W;cr++){for(ir=0;ir<Q;ir++){for(nr=0;nr<K;nr++){for(dr=0;dr<J;dr++){for(ar=0;ar<H;ar++){for(er=0;er<D;er++){for(tr=0;tr<z;tr++)e[sr]=f(t[fr]),fr+=a,sr+=y;fr+=d,sr+=v}fr+=n,sr+=m}fr+=i,sr+=g}fr+=c,sr+=j}fr+=u,sr+=_}fr+=p,sr+=x}fr+=h,sr+=b}fr+=l,sr+=E}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,sr,tr,er,ar,dr,nr,ir,cr,ur,pr,hr,lr,yr,vr,mr,gr,wr,jr,_r,xr,br,Pr,Er,Or,Tr,kr,Ar;for(J=(Ar=w(r.shape,r.strides,o.strides)).sh,sr=Ar.sx,tr=Ar.sy,s=P(r.dtype,o.dtype),er=r.offset,ar=o.offset,t=r.data,e=o.data,a=sr[0],v=tr[0],kr=J[9];kr>0;)for(kr<s?(fr=kr,kr=0):(fr=s,kr-=s),F=er+kr*sr[9],H=ar+kr*tr[9],Tr=J[8];Tr>0;)for(Tr<s?(or=Tr,Tr=0):(or=s,Tr-=s),y=sr[9]-or*sr[8],T=tr[9]-or*tr[8],B=F+Tr*sr[8],D=H+Tr*tr[8],Or=J[7];Or>0;)for(Or<s?(rr=Or,Or=0):(rr=s,Or-=s),l=sr[8]-rr*sr[7],O=tr[8]-rr*tr[7],R=B+Or*sr[7],z=D+Or*tr[7],Er=J[6];Er>0;)for(Er<s?($=Er,Er=0):($=s,Er-=s),h=sr[7]-$*sr[6],E=tr[7]-$*tr[6],G=R+Er*sr[6],q=z+Er*tr[6],Pr=J[5];Pr>0;)for(Pr<s?(Z=Pr,Pr=0):(Z=s,Pr-=s),p=sr[6]-Z*sr[5],b=tr[6]-Z*tr[5],C=G+Pr*sr[5],U=q+Pr*tr[5],br=J[4];br>0;)for(br<s?(Y=br,br=0):(Y=s,br-=s),u=sr[5]-Y*sr[4],x=tr[5]-Y*tr[4],V=C+br*sr[4],N=U+br*tr[4],xr=J[3];xr>0;)for(xr<s?(X=xr,xr=0):(X=s,xr-=s),c=sr[4]-X*sr[3],_=tr[4]-X*tr[3],S=V+xr*sr[3],M=N+xr*tr[3],_r=J[2];_r>0;)for(_r<s?(W=_r,_r=0):(W=s,_r-=s),i=sr[3]-W*sr[2],j=tr[3]-W*tr[2],A=S+_r*sr[2],L=M+_r*tr[2],jr=J[1];jr>0;)for(jr<s?(Q=jr,jr=0):(Q=s,jr-=s),n=sr[2]-Q*sr[1],g=tr[2]-Q*tr[1],k=A+jr*sr[1],I=L+jr*tr[1],wr=J[0];wr>0;)for(wr<s?(K=wr,wr=0):(K=s,wr-=s),dr=k+wr*sr[0],nr=I+wr*tr[0],d=sr[1]-K*sr[0],m=tr[1]-K*tr[0],gr=0;gr<fr;gr++){for(mr=0;mr<or;mr++){for(vr=0;vr<rr;vr++){for(yr=0;yr<$;yr++){for(lr=0;lr<Z;lr++){for(hr=0;hr<Y;hr++){for(pr=0;pr<X;pr++){for(ur=0;ur<W;ur++){for(cr=0;cr<Q;cr++){for(ir=0;ir<K;ir++)e[nr]=f(t[dr]),dr+=a,nr+=v;dr+=d,nr+=m}dr+=n,nr+=g}dr+=i,nr+=j}dr+=c,nr+=_}dr+=u,nr+=x}dr+=p,nr+=b}dr+=h,nr+=E}dr+=l,nr+=O}dr+=y,nr+=T}}],V=[function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A;for(l=(A=w(r.shape,r.strides,o.strides)).sh,m=A.sx,g=A.sy,s=P(r.dtype,o.dtype),j=r.offset,_=o.offset,t=r.data,e=o.data,n=m[0],c=g[0],a=r.accessors[0],d=o.accessors[1],k=l[1];k>0;)for(k<s?(v=k,k=0):(v=s,k-=s),p=j+k*m[1],h=_+k*g[1],T=l[0];T>0;)for(T<s?(y=T,T=0):(y=s,T-=s),x=p+T*m[0],b=h+T*g[0],i=m[1]-y*m[0],u=g[1]-y*g[0],O=0;O<v;O++){for(E=0;E<y;E++)d(e,b,f(a(t,x))),x+=n,b+=c;x+=i,b+=u}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R,B,F;for(g=(F=w(r.shape,r.strides,o.strides)).sh,b=F.sx,E=F.sy,s=P(r.dtype,o.dtype),O=r.offset,T=o.offset,t=r.data,e=o.data,n=b[0],u=E[0],a=r.accessors[0],d=o.accessors[1],B=g[2];B>0;)for(B<s?(x=B,B=0):(x=s,B-=s),y=O+B*b[2],m=T+B*E[2],R=g[1];R>0;)for(R<s?(_=R,R=0):(_=s,R-=s),c=b[2]-_*b[1],h=E[2]-_*E[1],l=y+R*b[1],v=m+R*E[1],G=g[0];G>0;)for(G<s?(j=G,G=0):(j=s,G-=s),k=l+G*b[0],A=v+G*E[0],i=b[1]-j*b[0],p=E[1]-j*E[0],C=0;C<x;C++){for(V=0;V<_;V++){for(S=0;S<j;S++)d(e,A,f(a(t,k))),k+=n,A+=u;k+=i,A+=p}k+=c,A+=h}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z;for(b=(z=w(r.shape,r.strides,o.strides)).sh,A=z.sx,S=z.sy,s=P(r.dtype,o.dtype),V=r.offset,C=o.offset,t=r.data,e=o.data,n=A[0],p=S[0],a=r.accessors[0],d=o.accessors[1],q=b[3];q>0;)for(q<s?(k=q,q=0):(k=s,q-=s),g=V+q*A[3],x=C+q*S[3],U=b[2];U>0;)for(U<s?(T=U,U=0):(T=s,U-=s),u=A[3]-T*A[2],y=S[3]-T*S[2],m=g+U*A[2],_=x+U*S[2],N=b[1];N>0;)for(N<s?(O=N,N=0):(O=s,N-=s),c=A[2]-O*A[1],l=S[2]-O*S[1],v=m+N*A[1],j=_+N*S[1],M=b[0];M>0;)for(M<s?(E=M,M=0):(E=s,M-=s),G=v+M*A[0],R=j+M*S[0],i=A[1]-E*A[0],h=S[1]-E*S[0],L=0;L<k;L++){for(I=0;I<T;I++){for(F=0;F<O;F++){for(B=0;B<E;B++)d(e,R,f(a(t,G))),G+=n,R+=p;G+=i,R+=h}G+=c,R+=l}G+=u,R+=y}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H,J,K,Q,W,X;for(k=(X=w(r.shape,r.strides,o.strides)).sh,R=X.sx,B=X.sy,s=P(r.dtype,o.dtype),F=r.offset,I=o.offset,t=r.data,e=o.data,n=R[0],h=B[0],a=r.accessors[0],d=o.accessors[1],W=k[4];W>0;)for(W<s?(G=W,W=0):(G=s,W-=s),x=F+W*R[4],T=I+W*B[4],Q=k[3];Q>0;)for(Q<s?(C=Q,Q=0):(C=s,Q-=s),p=R[4]-C*R[3],m=B[4]-C*B[3],_=x+Q*R[3],O=T+Q*B[3],K=k[2];K>0;)for(K<s?(V=K,K=0):(V=s,K-=s),u=R[3]-V*R[2],v=B[3]-V*B[2],j=_+K*R[2],E=O+K*B[2],J=k[1];J>0;)for(J<s?(S=J,J=0):(S=s,J-=s),c=R[2]-S*R[1],y=B[2]-S*B[1],g=j+J*R[1],b=E+J*B[1],H=k[0];H>0;)for(H<s?(A=H,H=0):(A=s,H-=s),L=g+H*R[0],M=b+H*B[0],i=R[1]-A*R[0],l=B[1]-A*B[0],D=0;D<G;D++){for(z=0;z<C;z++){for(q=0;q<V;q++){for(U=0;U<S;U++){for(N=0;N<A;N++)d(e,M,f(a(t,L))),L+=n,M+=h;L+=i,M+=l}L+=c,M+=y}L+=u,M+=v}L+=p,M+=m}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,sr;for(C=(sr=w(r.shape,r.strides,o.strides)).sh,M=sr.sx,N=sr.sy,s=P(r.dtype,o.dtype),U=r.offset,q=o.offset,t=r.data,e=o.data,n=M[0],l=N[0],a=r.accessors[0],d=o.accessors[1],fr=C[5];fr>0;)for(fr<s?(L=fr,fr=0):(L=s,fr-=s),O=U+fr*M[5],V=q+fr*N[5],or=C[4];or>0;)for(or<s?(I=or,or=0):(I=s,or-=s),h=M[5]-I*M[4],j=N[5]-I*N[4],E=O+or*M[4],S=V+or*N[4],rr=C[3];rr>0;)for(rr<s?(F=rr,rr=0):(F=s,rr-=s),p=M[4]-F*M[3],g=N[4]-F*N[3],b=E+rr*M[3],A=S+rr*N[3],$=C[2];$>0;)for($<s?(B=$,$=0):(B=s,$-=s),u=M[3]-B*M[2],m=N[3]-B*N[2],x=b+$*M[2],k=A+$*N[2],Z=C[1];Z>0;)for(Z<s?(R=Z,Z=0):(R=s,Z-=s),c=M[2]-R*M[1],v=N[2]-R*N[1],_=x+Z*M[1],T=k+Z*N[1],Y=C[0];Y>0;)for(Y<s?(G=Y,Y=0):(G=s,Y-=s),z=_+Y*M[0],D=T+Y*N[0],i=M[1]-G*M[0],y=N[1]-G*N[0],X=0;X<L;X++){for(W=0;W<I;W++){for(Q=0;Q<F;Q++){for(K=0;K<B;K++){for(J=0;J<R;J++){for(H=0;H<G;H++)d(e,D,f(a(t,z))),z+=n,D+=l;z+=i,D+=y}z+=c,D+=v}z+=u,D+=m}z+=p,D+=g}z+=h,D+=j}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,sr,tr,er,ar,dr,nr,ir,cr;for(F=(cr=w(r.shape,r.strides,o.strides)).sh,D=cr.sx,H=cr.sy,s=P(r.dtype,o.dtype),J=r.offset,K=o.offset,t=r.data,e=o.data,n=D[0],y=H[0],a=r.accessors[0],d=o.accessors[1],ir=F[6];ir>0;)for(ir<s?(z=ir,ir=0):(z=s,ir-=s),A=J+ir*D[6],B=K+ir*H[6],nr=F[5];nr>0;)for(nr<s?(q=nr,nr=0):(q=s,nr-=s),l=D[6]-q*D[5],x=H[6]-q*H[5],k=A+nr*D[5],R=B+nr*H[5],dr=F[4];dr>0;)for(dr<s?(U=dr,dr=0):(U=s,dr-=s),h=D[5]-U*D[4],_=H[5]-U*H[4],T=k+dr*D[4],G=R+dr*H[4],ar=F[3];ar>0;)for(ar<s?(N=ar,ar=0):(N=s,ar-=s),p=D[4]-N*D[3],j=H[4]-N*H[3],O=T+ar*D[3],C=G+ar*H[3],er=F[2];er>0;)for(er<s?(M=er,er=0):(M=s,er-=s),u=D[3]-M*D[2],g=H[3]-M*H[2],E=O+er*D[2],V=C+er*H[2],tr=F[1];tr>0;)for(tr<s?(L=tr,tr=0):(L=s,tr-=s),c=D[2]-L*D[1],m=H[2]-L*H[1],b=E+tr*D[1],S=V+tr*H[1],sr=F[0];sr>0;)for(sr<s?(I=sr,sr=0):(I=s,sr-=s),Q=b+sr*D[0],W=S+sr*H[0],i=D[1]-I*D[0],v=H[1]-I*H[0],fr=0;fr<z;fr++){for(or=0;or<q;or++){for(rr=0;rr<U;rr++){for($=0;$<N;$++){for(Z=0;Z<M;Z++){for(Y=0;Y<L;Y++){for(X=0;X<I;X++)d(e,W,f(a(t,Q))),Q+=n,W+=y;Q+=i,W+=v}Q+=c,W+=m}Q+=u,W+=g}Q+=p,W+=j}Q+=h,W+=_}Q+=l,W+=x}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,sr,tr,er,ar,dr,nr,ir,cr,ur,pr,hr,lr,yr,vr,mr;for(N=(mr=w(r.shape,r.strides,o.strides)).sh,W=mr.sx,X=mr.sy,s=P(r.dtype,o.dtype),Y=r.offset,Z=o.offset,t=r.data,e=o.data,n=W[0],v=X[0],a=r.accessors[0],d=o.accessors[1],vr=N[7];vr>0;)for(vr<s?(Q=vr,vr=0):(Q=s,vr-=s),C=Y+vr*W[7],M=Z+vr*X[7],yr=N[6];yr>0;)for(yr<s?(K=yr,yr=0):(K=s,yr-=s),y=W[7]-K*W[6],E=X[7]-K*X[6],V=C+yr*W[6],L=M+yr*X[6],lr=N[5];lr>0;)for(lr<s?(J=lr,lr=0):(J=s,lr-=s),l=W[6]-J*W[5],b=X[6]-J*X[5],S=V+lr*W[5],I=L+lr*X[5],hr=N[4];hr>0;)for(hr<s?(H=hr,hr=0):(H=s,hr-=s),h=W[5]-H*W[4],x=X[5]-H*X[4],A=S+hr*W[4],F=I+hr*X[4],pr=N[3];pr>0;)for(pr<s?(D=pr,pr=0):(D=s,pr-=s),p=W[4]-D*W[3],_=X[4]-D*X[3],k=A+pr*W[3],B=F+pr*X[3],ur=N[2];ur>0;)for(ur<s?(z=ur,ur=0):(z=s,ur-=s),u=W[3]-z*W[2],j=X[3]-z*X[2],T=k+ur*W[2],R=B+ur*X[2],cr=N[1];cr>0;)for(cr<s?(q=cr,cr=0):(q=s,cr-=s),c=W[2]-q*W[1],g=X[2]-q*X[1],O=T+cr*W[1],G=R+cr*X[1],ir=N[0];ir>0;)for(ir<s?(U=ir,ir=0):(U=s,ir-=s),$=O+ir*W[0],rr=G+ir*X[0],i=W[1]-U*W[0],m=X[1]-U*X[0],nr=0;nr<Q;nr++){for(dr=0;dr<K;dr++){for(ar=0;ar<J;ar++){for(er=0;er<H;er++){for(tr=0;tr<D;tr++){for(sr=0;sr<z;sr++){for(fr=0;fr<q;fr++){for(or=0;or<U;or++)d(e,rr,f(a(t,$))),$+=n,rr+=v;$+=i,rr+=m}$+=c,rr+=g}$+=u,rr+=j}$+=p,rr+=_}$+=h,rr+=x}$+=l,rr+=b}$+=y,rr+=E}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,sr,tr,er,ar,dr,nr,ir,cr,ur,pr,hr,lr,yr,vr,mr,gr,wr,jr,_r,xr,br,Pr;for(D=(Pr=w(r.shape,r.strides,o.strides)).sh,rr=Pr.sx,or=Pr.sy,s=P(r.dtype,o.dtype),fr=r.offset,sr=o.offset,t=r.data,e=o.data,n=rr[0],m=or[0],a=r.accessors[0],d=o.accessors[1],br=D[8];br>0;)for(br<s?($=br,br=0):($=s,br-=s),B=fr+br*rr[8],z=sr+br*or[8],xr=D[7];xr>0;)for(xr<s?(Z=xr,xr=0):(Z=s,xr-=s),v=rr[8]-Z*rr[7],T=or[8]-Z*or[7],R=B+xr*rr[7],q=z+xr*or[7],_r=D[6];_r>0;)for(_r<s?(Y=_r,_r=0):(Y=s,_r-=s),y=rr[7]-Y*rr[6],O=or[7]-Y*or[6],G=R+_r*rr[6],U=q+_r*or[6],jr=D[5];jr>0;)for(jr<s?(X=jr,jr=0):(X=s,jr-=s),l=rr[6]-X*rr[5],E=or[6]-X*or[5],C=G+jr*rr[5],N=U+jr*or[5],wr=D[4];wr>0;)for(wr<s?(W=wr,wr=0):(W=s,wr-=s),h=rr[5]-W*rr[4],b=or[5]-W*or[4],V=C+wr*rr[4],M=N+wr*or[4],gr=D[3];gr>0;)for(gr<s?(Q=gr,gr=0):(Q=s,gr-=s),p=rr[4]-Q*rr[3],x=or[4]-Q*or[3],S=V+gr*rr[3],L=M+gr*or[3],mr=D[2];mr>0;)for(mr<s?(K=mr,mr=0):(K=s,mr-=s),u=rr[3]-K*rr[2],_=or[3]-K*or[2],A=S+mr*rr[2],I=L+mr*or[2],vr=D[1];vr>0;)for(vr<s?(J=vr,vr=0):(J=s,vr-=s),c=rr[2]-J*rr[1],j=or[2]-J*or[1],k=A+vr*rr[1],F=I+vr*or[1],yr=D[0];yr>0;)for(yr<s?(H=yr,yr=0):(H=s,yr-=s),tr=k+yr*rr[0],er=F+yr*or[0],i=rr[1]-H*rr[0],g=or[1]-H*or[0],lr=0;lr<$;lr++){for(hr=0;hr<Z;hr++){for(pr=0;pr<Y;pr++){for(ur=0;ur<X;ur++){for(cr=0;cr<W;cr++){for(ir=0;ir<Q;ir++){for(nr=0;nr<K;nr++){for(dr=0;dr<J;dr++){for(ar=0;ar<H;ar++)d(e,er,f(a(t,tr))),tr+=n,er+=m;tr+=i,er+=g}tr+=c,er+=j}tr+=u,er+=_}tr+=p,er+=x}tr+=h,er+=b}tr+=l,er+=E}tr+=y,er+=O}tr+=v,er+=T}},function(r,o,f){var s,t,e,a,d,n,i,c,u,p,h,l,y,v,m,g,j,_,x,b,E,O,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,z,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,sr,tr,er,ar,dr,nr,ir,cr,ur,pr,hr,lr,yr,vr,mr,gr,wr,jr,_r,xr,br,Pr,Er,Or,Tr,kr,Ar,Sr,Vr;for(Q=(Vr=w(r.shape,r.strides,o.strides)).sh,er=Vr.sx,ar=Vr.sy,s=P(r.dtype,o.dtype),dr=r.offset,nr=o.offset,t=r.data,e=o.data,n=er[0],g=ar[0],a=r.accessors[0],d=o.accessors[1],Sr=Q[9];Sr>0;)for(Sr<s?(tr=Sr,Sr=0):(tr=s,Sr-=s),L=dr+Sr*er[9],K=nr+Sr*ar[9],Ar=Q[8];Ar>0;)for(Ar<s?(sr=Ar,Ar=0):(sr=s,Ar-=s),m=er[9]-sr*er[8],A=ar[9]-sr*ar[8],I=L+Ar*er[8],J=K+Ar*ar[8],kr=Q[7];kr>0;)for(kr<s?(fr=kr,kr=0):(fr=s,kr-=s),v=er[8]-fr*er[7],k=ar[8]-fr*ar[7],F=I+kr*er[7],H=J+kr*ar[7],Tr=Q[6];Tr>0;)for(Tr<s?(or=Tr,Tr=0):(or=s,Tr-=s),y=er[7]-or*er[6],T=ar[7]-or*ar[6],B=F+Tr*er[6],D=H+Tr*ar[6],Or=Q[5];Or>0;)for(Or<s?(rr=Or,Or=0):(rr=s,Or-=s),l=er[6]-rr*er[5],O=ar[6]-rr*ar[5],R=B+Or*er[5],z=D+Or*ar[5],Er=Q[4];Er>0;)for(Er<s?($=Er,Er=0):($=s,Er-=s),h=er[5]-$*er[4],E=ar[5]-$*ar[4],G=R+Er*er[4],q=z+Er*ar[4],Pr=Q[3];Pr>0;)for(Pr<s?(Z=Pr,Pr=0):(Z=s,Pr-=s),p=er[4]-Z*er[3],b=ar[4]-Z*ar[3],C=G+Pr*er[3],U=q+Pr*ar[3],br=Q[2];br>0;)for(br<s?(Y=br,br=0):(Y=s,br-=s),u=er[3]-Y*er[2],x=ar[3]-Y*ar[2],V=C+br*er[2],N=U+br*ar[2],xr=Q[1];xr>0;)for(xr<s?(X=xr,xr=0):(X=s,xr-=s),c=er[2]-X*er[1],_=ar[2]-X*ar[1],S=V+xr*er[1],M=N+xr*ar[1],_r=Q[0];_r>0;)for(_r<s?(W=_r,_r=0):(W=s,_r-=s),ir=S+_r*er[0],cr=M+_r*ar[0],i=er[1]-W*er[0],j=ar[1]-W*ar[0],jr=0;jr<tr;jr++){for(wr=0;wr<sr;wr++){for(gr=0;gr<fr;gr++){for(mr=0;mr<or;mr++){for(vr=0;vr<rr;vr++){for(yr=0;yr<$;yr++){for(lr=0;lr<Z;lr++){for(hr=0;hr<Y;hr++){for(pr=0;pr<X;pr++){for(ur=0;ur<W;ur++)d(e,cr,f(a(t,ir))),ir+=n,cr+=g;ir+=i,cr+=j}ir+=c,cr+=_}ir+=u,cr+=x}ir+=p,cr+=b}ir+=h,cr+=E}ir+=l,cr+=O}ir+=y,cr+=T}ir+=v,cr+=k}ir+=m,cr+=A}}],C=k.length-1;return function(f,s){var t,e,a,d,n,i,c,h,l,y,v,g,w,j,_,x,b;if(j=m(f[0]),_=m(f[1]),d=j.shape,n=_.shape,(t=d.length)!==n.length)throw new Error("invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == "+t+". ndims(y) == "+n.length+".");if(0===t)return j.accessorProtocol||_.accessorProtocol?A[t](j,_,s):k[t](j,_,s);for(h=1,w=0,b=0;b<t;b++){if((x=d[b])!==n[b])throw new Error(r("0Mj0d"));h*=x,1===x&&(w+=1)}if(0!==h){if(1===t)return j.accessorProtocol||_.accessorProtocol?A[t](j,_,s):k[t](j,_,s);if(l=j.strides,y=_.strides,w===t-1){for(b=0;b<t&&1===d[b];b++);return j.shape=[d[b]],_.shape=j.shape,j.strides=[l[b]],_.strides=[y[b]],j.accessorProtocol||_.accessorProtocol?A[1](j,_,s):k[1](j,_,s)}if(i=o(l),c=o(y),0!==i&&0!==c&&j.order===_.order){if(e=u(d,l,j.offset),a=u(n,y,_.offset),h===e[1]-e[0]+1&&h===a[1]-a[0]+1)return v=1===i?e[0]:e[1],g=1===c?a[0]:a[1],j.shape=[h],_.shape=j.shape,j.strides=[i],_.strides=[c],j.offset=v,_.offset=g,j.accessorProtocol||_.accessorProtocol?A[1](j,_,s):k[1](j,_,s);if(t<=C)return j.accessorProtocol||_.accessorProtocol?A[t](j,_,s):k[t](j,_,s)}return t<=C?j.accessorProtocol||_.accessorProtocol?V[t-2](j,_,s):S[t-2](j,_,s):j.accessorProtocol||_.accessorProtocol?function(r,o,f){var s,t,e,a,d,n,i,c,u,h,l,y,v,m;for(d=p(c=r.shape),s=r.data,t=o.data,u=r.strides,h=o.strides,l=r.offset,y=o.offset,e=r.order,a=o.order,n=r.accessors[0],i=o.accessors[1],m=0;m<d;m++)v=E(c,u,l,e,m,O),i(t,E(c,h,y,a,m,O),f(n(s,v)))}(j,_,s):void function(r,o,f){var s,t,e,a,d,n,i,c,u,h,l,y;for(d=p(n=r.shape),s=r.data,t=o.data,i=r.strides,c=o.strides,u=r.offset,h=o.offset,e=r.order,a=o.order,y=0;y<d;y++)l=E(n,i,u,e,y,T),t[E(n,c,h,a,y,T)]=f(s[l])}(j,_,s)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(r="undefined"!=typeof globalThis?globalThis:r||self).unary=o();
//# sourceMappingURL=index.js.map
