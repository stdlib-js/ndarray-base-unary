// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,o;r=this,o=function(){"use strict";function r(){var r,o=arguments,f=o[0],t="https://stdlib.io/e/"+f+"?";for(r=1;r<o.length;r++)t+="&arg[]="+encodeURIComponent(o[r]);return t}function o(r){var o,f;for(o=0,f=0;f<r.length;f++)r[f]<0&&(o+=1);return 0===o?1:o===r.length?-1:0}var f,t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,s=Object.prototype,a=s.toString,n=s.__defineGetter__,i=s.__defineSetter__,d=s.__lookupGetter__,u=s.__lookupSetter__;function c(r,o,f){var t,e,s,a,n;for(t=r.length,e=f,s=f,n=0;n<t;n++){if(0===r[n])return[f,f];(a=o[n])>0?s+=a*(r[n]-1):a<0&&(e+=a*(r[n]-1))}return[e,s]}function h(r,o){return r[o]}function l(r,o){return r.get(o)}function p(r,o,f){r[o]=f}function v(r,o,f){r.set(f,o)}function g(r){var o,f;return o=r.data,f=Boolean(o.get&&o.set),{dtype:r.dtype,data:o,shape:r.shape,strides:r.strides,offset:r.offset,order:r.order,accessors:f,getter:f?l:h,setter:f?v:p}}f=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,o,f){var t,e,c,h;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===a.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((e="value"in f)&&(d.call(r,o)||u.call(r,o)?(t=r.__proto__,r.__proto__=s,delete r[o],r[o]=f.value,r.__proto__=t):r[o]=f.value),c="get"in f,h="set"in f,e&&(c||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return c&&n&&n.call(r,o,f.get),h&&i&&i.call(r,o,f.set),r},f(c,"assign",{configurable:!1,enumerable:!1,writable:!1,value:function(r,o,f,t){var e,s,a,n,i;for(e=r.length,s=f,a=f,i=0;i<e;i++){if(0===r[i])return t[0]=f,t[1]=f,t;(n=o[i])>0?a+=n*(r[i]-1):n<0&&(s+=n*(r[i]-1))}return t[0]=s,t[1]=a,t}});var m={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function y(r){return m[r]||null}function b(r,o){var f,t;for(f=[],t=0;t<r.length;t++)f.push(r[o[t]]);return f}var w=64,j=8;function _(r,o){var f,t,e,s,a,n;return f=function(r){var o,f;for(o=[],f=0;f<r;f++)o.push(f);return o}((s=r.shape).length),a=function(r){var o,f;for(o=[],f=0;f<r.length;f++)o.push(r[f]);return o}(r.strides),function(r,o){var f,t,e,s,a,n,i,d,u;for(t=1,e=1,u=1;u<r.length;u++){for(f=(n=r[t])<0?-n:n,i=o[e],s=t-1,a=e-1;s>=0&&!(((d=r[s])<0?-d:d)<=f);)r[s+1]=d,o[a+1]=o[a],s-=1,a-=1;r[s+1]=n,o[a+1]=i,t+=1,e+=1}}(a,f),s=b(s,f),n=b(o.strides,f),t=y(r.dtype),e=y(o.dtype),{sh:s,sx:a,sy:n,bsize:null===t||null===e?j:t>e?w/t|0:w/e|0}}function x(r){var o,f,t;if(0===(o=r.length))return 0;for(f=1,t=0;t<o;t++)f*=r[t];return f}function z(r,o,f,t,e,s){var a,n,i,d,u;for(a=r.length,n=1,u=0;u<a;u++)n*=r[u];if("clamp"===s)e<0?e=0:e>=n&&(e=n-1);else if("wrap"===s)e<0?(e+=n)<0&&0!=(e%=n)&&(e+=n):e>=n&&(e-=n)>=n&&(e%=n);else if(e<0||e>=n)throw new RangeError("invalid argument. Linear index must not exceed array dimensions. Number of array elements: "+n+". Value: `"+e+"`.");if(i=f,"column-major"===t){for(u=0;u<a;u++)e-=d=e%r[u],e/=r[u],i+=d*o[u];return i}for(u=a-1;u>=0;u--)e-=d=e%r[u],e/=r[u],i+=d*o[u];return i}var E="throw",O="throw",P=[function(r,o,f){o.data[o.offset]=f(r.data[r.offset])},function(r,o,f){var t,e,s,a,n,i,d,u;for(n=r.shape[0],s=r.strides[0],a=o.strides[0],i=r.offset,d=o.offset,t=r.data,e=o.data,u=0;u<n;u++)e[d]=f(t[i]),i+=s,d+=a},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m;for(d=r.shape,h=r.strides,l=o.strides,"row-major"===r.order?(u=d[1],c=d[0],s=h[1],a=h[0]-u*h[1],n=l[1],i=l[0]-u*l[1]):(u=d[0],c=d[1],s=h[0],a=h[1]-u*h[0],n=l[0],i=l[1]-u*l[0]),p=r.offset,v=o.offset,t=r.data,e=o.data,m=0;m<c;m++){for(g=0;g<u;g++)e[v]=f(t[p]),p+=s,v+=n;p+=a,v+=i}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j;for(c=r.shape,v=r.strides,g=o.strides,"row-major"===r.order?(h=c[2],l=c[1],p=c[0],s=v[2],a=v[1]-h*v[2],n=v[0]-l*v[1],i=g[2],d=g[1]-h*g[2],u=g[0]-l*g[1]):(h=c[0],l=c[1],p=c[2],s=v[0],a=v[1]-h*v[0],n=v[2]-l*v[1],i=g[0],d=g[1]-h*g[0],u=g[2]-l*g[1]),m=r.offset,y=o.offset,t=r.data,e=o.data,j=0;j<p;j++){for(w=0;w<l;w++){for(b=0;b<h;b++)e[y]=f(t[m]),m+=s,y+=i;m+=a,y+=d}m+=n,y+=u}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,_,x,z,E;for(l=r.shape,y=r.strides,b=o.strides,"row-major"===r.order?(p=l[3],v=l[2],g=l[1],m=l[0],s=y[3],a=y[2]-p*y[3],n=y[1]-v*y[2],i=y[0]-g*y[1],d=b[3],u=b[2]-p*b[3],c=b[1]-v*b[2],h=b[0]-g*b[1]):(p=l[0],v=l[1],g=l[2],m=l[3],s=y[0],a=y[1]-p*y[0],n=y[2]-v*y[1],i=y[3]-g*y[2],d=b[0],u=b[1]-p*b[0],c=b[2]-v*b[1],h=b[3]-g*b[2]),w=r.offset,j=o.offset,t=r.data,e=o.data,E=0;E<m;E++){for(z=0;z<g;z++){for(x=0;x<v;x++){for(_=0;_<p;_++)e[j]=f(t[w]),w+=s,j+=d;w+=a,j+=u}w+=n,j+=c}w+=i,j+=h}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,_,x,z,E,O,P,T,k;for(v=r.shape,j=r.strides,_=o.strides,"row-major"===r.order?(g=v[4],m=v[3],y=v[2],b=v[1],w=v[0],s=j[4],a=j[3]-g*j[4],n=j[2]-m*j[3],i=j[1]-y*j[2],d=j[0]-b*j[1],u=_[4],c=_[3]-g*_[4],h=_[2]-m*_[3],l=_[1]-y*_[2],p=_[0]-b*_[1]):(g=v[0],m=v[1],y=v[2],b=v[3],w=v[4],s=j[0],a=j[1]-g*j[0],n=j[2]-m*j[1],i=j[3]-y*j[2],d=j[4]-b*j[3],u=_[0],c=_[1]-g*_[0],h=_[2]-m*_[1],l=_[3]-y*_[2],p=_[4]-b*_[3]),x=r.offset,z=o.offset,t=r.data,e=o.data,k=0;k<w;k++){for(T=0;T<b;T++){for(P=0;P<y;P++){for(O=0;O<m;O++){for(E=0;E<g;E++)e[z]=f(t[x]),x+=s,z+=u;x+=a,z+=c}x+=n,z+=h}x+=i,z+=l}x+=d,z+=p}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,_,x,z,E,O,P,T,k,A,S,V,C;for(m=r.shape,z=r.strides,E=o.strides,"row-major"===r.order?(y=m[5],b=m[4],w=m[3],j=m[2],_=m[1],x=m[0],s=z[5],a=z[4]-y*z[5],n=z[3]-b*z[4],i=z[2]-w*z[3],d=z[1]-j*z[2],u=z[0]-_*z[1],c=E[5],h=E[4]-y*E[5],l=E[3]-b*E[4],p=E[2]-w*E[3],v=E[1]-j*E[2],g=E[0]-_*E[1]):(y=m[0],b=m[1],w=m[2],j=m[3],_=m[4],x=m[5],s=z[0],a=z[1]-y*z[0],n=z[2]-b*z[1],i=z[3]-w*z[2],d=z[4]-j*z[3],u=z[5]-_*z[4],c=E[0],h=E[1]-y*E[0],l=E[2]-b*E[1],p=E[3]-w*E[2],v=E[4]-j*E[3],g=E[5]-_*E[4]),O=r.offset,P=o.offset,t=r.data,e=o.data,C=0;C<x;C++){for(V=0;V<_;V++){for(S=0;S<j;S++){for(A=0;A<w;A++){for(k=0;k<b;k++){for(T=0;T<y;T++)e[P]=f(t[O]),O+=s,P+=c;O+=a,P+=h}O+=n,P+=l}O+=i,P+=p}O+=d,P+=v}O+=u,P+=g}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,_,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F;for(b=r.shape,P=r.strides,T=o.strides,"row-major"===r.order?(w=b[6],j=b[5],_=b[4],x=b[3],z=b[2],E=b[1],O=b[0],s=P[6],a=P[5]-w*P[6],n=P[4]-j*P[5],i=P[3]-_*P[4],d=P[2]-x*P[3],u=P[1]-z*P[2],c=P[0]-E*P[1],h=T[6],l=T[5]-w*T[6],p=T[4]-j*T[5],v=T[3]-_*T[4],g=T[2]-x*T[3],m=T[1]-z*T[2],y=T[0]-E*T[1]):(w=b[0],j=b[1],_=b[2],x=b[3],z=b[4],E=b[5],O=b[6],s=P[0],a=P[1]-w*P[0],n=P[2]-j*P[1],i=P[3]-_*P[2],d=P[4]-x*P[3],u=P[5]-z*P[4],c=P[6]-E*P[5],h=T[0],l=T[1]-w*T[0],p=T[2]-j*T[1],v=T[3]-_*T[2],g=T[4]-x*T[3],m=T[5]-z*T[4],y=T[6]-E*T[5]),k=r.offset,A=o.offset,t=r.data,e=o.data,F=0;F<O;F++){for(B=0;B<E;B++){for(R=0;R<z;R++){for(G=0;G<x;G++){for(C=0;C<_;C++){for(V=0;V<j;V++){for(S=0;S<w;S++)e[A]=f(t[k]),k+=s,A+=h;k+=a,A+=l}k+=n,A+=p}k+=i,A+=v}k+=d,A+=g}k+=u,A+=m}k+=c,A+=y}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,_,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N;for(j=r.shape,A=r.strides,S=o.strides,"row-major"===r.order?(_=j[7],x=j[6],z=j[5],E=j[4],O=j[3],P=j[2],T=j[1],k=j[0],s=A[7],a=A[6]-_*A[7],n=A[5]-x*A[6],i=A[4]-z*A[5],d=A[3]-E*A[4],u=A[2]-O*A[3],c=A[1]-P*A[2],h=A[0]-T*A[1],l=S[7],p=S[6]-_*S[7],v=S[5]-x*S[6],g=S[4]-z*S[5],m=S[3]-E*S[4],y=S[2]-O*S[3],b=S[1]-P*S[2],w=S[0]-T*S[1]):(_=j[0],x=j[1],z=j[2],E=j[3],O=j[4],P=j[5],T=j[6],k=j[7],s=A[0],a=A[1]-_*A[0],n=A[2]-x*A[1],i=A[3]-z*A[2],d=A[4]-E*A[3],u=A[5]-O*A[4],c=A[6]-P*A[5],h=A[7]-T*A[6],l=S[0],p=S[1]-_*S[0],v=S[2]-x*S[1],g=S[3]-z*S[2],m=S[4]-E*S[3],y=S[5]-O*S[4],b=S[6]-P*S[5],w=S[7]-T*S[6]),V=r.offset,C=o.offset,t=r.data,e=o.data,N=0;N<k;N++){for(M=0;M<T;M++){for(L=0;L<P;L++){for(I=0;I<O;I++){for(F=0;F<E;F++){for(B=0;B<z;B++){for(R=0;R<x;R++){for(G=0;G<_;G++)e[C]=f(t[V]),V+=s,C+=l;V+=a,C+=p}V+=n,C+=v}V+=i,C+=g}V+=d,C+=m}V+=u,C+=y}V+=c,C+=b}V+=h,C+=w}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,_,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H;for(x=r.shape,C=r.strides,G=o.strides,"row-major"===r.order?(z=x[8],E=x[7],O=x[6],P=x[5],T=x[4],k=x[3],A=x[2],S=x[1],V=x[0],s=C[8],a=C[7]-z*C[8],n=C[6]-E*C[7],i=C[5]-O*C[6],d=C[4]-P*C[5],u=C[3]-T*C[4],c=C[2]-k*C[3],h=C[1]-A*C[2],l=C[0]-S*C[1],p=G[8],v=G[7]-z*G[8],g=G[6]-E*G[7],m=G[5]-O*G[6],y=G[4]-P*G[5],b=G[3]-T*G[4],w=G[2]-k*G[3],j=G[1]-A*G[2],_=G[0]-S*G[1]):(z=x[0],E=x[1],O=x[2],P=x[3],T=x[4],k=x[5],A=x[6],S=x[7],V=x[8],s=C[0],a=C[1]-z*C[0],n=C[2]-E*C[1],i=C[3]-O*C[2],d=C[4]-P*C[3],u=C[5]-T*C[4],c=C[6]-k*C[5],h=C[7]-A*C[6],l=C[8]-S*C[7],p=G[0],v=G[1]-z*G[0],g=G[2]-E*G[1],m=G[3]-O*G[2],y=G[4]-P*G[3],b=G[5]-T*G[4],w=G[6]-k*G[5],j=G[7]-A*G[6],_=G[8]-S*G[7]),R=r.offset,B=o.offset,t=r.data,e=o.data,H=0;H<V;H++){for(D=0;D<S;D++){for(q=0;q<A;q++){for(U=0;U<k;U++){for(N=0;N<T;N++){for(M=0;M<P;M++){for(L=0;L<O;L++){for(I=0;I<E;I++){for(F=0;F<z;F++)e[B]=f(t[R]),R+=s,B+=p;R+=a,B+=v}R+=n,B+=g}R+=i,B+=m}R+=d,B+=y}R+=u,B+=b}R+=c,B+=w}R+=h,B+=j}R+=l,B+=_}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,_,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H,J,K,Q,W;for(E=r.shape,B=r.strides,F=o.strides,"row-major"===r.order?(O=E[9],P=E[8],T=E[7],k=E[6],A=E[5],S=E[4],V=E[3],C=E[2],G=E[1],R=E[0],s=B[9],a=B[8]-O*B[9],n=B[7]-P*B[8],i=B[6]-T*B[7],d=B[5]-k*B[6],u=B[4]-A*B[5],c=B[3]-S*B[4],h=B[2]-V*B[3],l=B[1]-C*B[2],p=B[0]-G*B[1],v=F[9],g=F[8]-O*F[9],m=F[7]-P*F[8],y=F[6]-T*F[7],b=F[5]-k*F[6],w=F[4]-A*F[5],j=F[3]-S*F[4],_=F[2]-V*F[3],x=F[1]-C*F[2],z=F[0]-G*F[1]):(O=E[0],P=E[1],T=E[2],k=E[3],A=E[4],S=E[5],V=E[6],C=E[7],G=E[8],R=E[9],s=B[0],a=B[1]-O*B[0],n=B[2]-P*B[1],i=B[3]-T*B[2],d=B[4]-k*B[3],u=B[5]-A*B[4],c=B[6]-S*B[5],h=B[7]-V*B[6],l=B[8]-C*B[7],p=B[9]-G*B[8],v=F[0],g=F[1]-O*F[0],m=F[2]-P*F[1],y=F[3]-T*F[2],b=F[4]-k*F[3],w=F[5]-A*F[4],j=F[6]-S*F[5],_=F[7]-V*F[6],x=F[8]-C*F[7],z=F[9]-G*F[8]),I=r.offset,L=o.offset,t=r.data,e=o.data,W=0;W<R;W++){for(Q=0;Q<G;Q++){for(K=0;K<C;K++){for(J=0;J<V;J++){for(H=0;H<S;H++){for(D=0;D<A;D++){for(q=0;q<k;q++){for(U=0;U<T;U++){for(N=0;N<P;N++){for(M=0;M<O;M++)e[L]=f(t[I]),I+=s,L+=v;I+=a,L+=g}I+=n,L+=m}I+=i,L+=y}I+=d,L+=b}I+=u,L+=w}I+=c,L+=j}I+=h,L+=_}I+=l,L+=x}I+=p,L+=z}}],T=[function(r,o,f){o.setter(o.data,o.offset,f(r.getter(r.data,r.offset)))},function(r,o,f){var t,e,s,a,n,i,d,u,c,h;for(d=r.shape[0],n=r.strides[0],i=o.strides[0],u=r.offset,c=o.offset,t=r.data,e=o.data,s=r.getter,a=o.setter,h=0;h<d;h++)a(e,c,f(s(t,u))),u+=n,c+=i},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b;for(c=r.shape,p=r.strides,v=o.strides,"row-major"===r.order?(h=c[1],l=c[0],n=p[1],i=p[0]-h*p[1],d=v[1],u=v[0]-h*v[1]):(h=c[0],l=c[1],n=p[0],i=p[1]-h*p[0],d=v[0],u=v[1]-h*v[0]),g=r.offset,m=o.offset,t=r.data,e=o.data,s=r.getter,a=o.setter,b=0;b<l;b++){for(y=0;y<h;y++)a(e,m,f(s(t,g))),g+=n,m+=d;g+=i,m+=u}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,_,x;for(l=r.shape,m=r.strides,y=o.strides,"row-major"===r.order?(p=l[2],v=l[1],g=l[0],n=m[2],i=m[1]-p*m[2],d=m[0]-v*m[1],u=y[2],c=y[1]-p*y[2],h=y[0]-v*y[1]):(p=l[0],v=l[1],g=l[2],n=m[0],i=m[1]-p*m[0],d=m[2]-v*m[1],u=y[0],c=y[1]-p*y[0],h=y[2]-v*y[1]),b=r.offset,w=o.offset,t=r.data,e=o.data,s=r.getter,a=o.setter,x=0;x<g;x++){for(_=0;_<v;_++){for(j=0;j<p;j++)a(e,w,f(s(t,b))),b+=n,w+=u;b+=i,w+=c}b+=d,w+=h}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,_,x,z,E,O,P;for(v=r.shape,w=r.strides,j=o.strides,"row-major"===r.order?(g=v[3],m=v[2],y=v[1],b=v[0],n=w[3],i=w[2]-g*w[3],d=w[1]-m*w[2],u=w[0]-y*w[1],c=j[3],h=j[2]-g*j[3],l=j[1]-m*j[2],p=j[0]-y*j[1]):(g=v[0],m=v[1],y=v[2],b=v[3],n=w[0],i=w[1]-g*w[0],d=w[2]-m*w[1],u=w[3]-y*w[2],c=j[0],h=j[1]-g*j[0],l=j[2]-m*j[1],p=j[3]-y*j[2]),_=r.offset,x=o.offset,t=r.data,e=o.data,s=r.getter,a=o.setter,P=0;P<b;P++){for(O=0;O<y;O++){for(E=0;E<m;E++){for(z=0;z<g;z++)a(e,x,f(s(t,_))),_+=n,x+=c;_+=i,x+=h}_+=d,x+=l}_+=u,x+=p}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,_,x,z,E,O,P,T,k,A,S;for(m=r.shape,x=r.strides,z=o.strides,"row-major"===r.order?(y=m[4],b=m[3],w=m[2],j=m[1],_=m[0],n=x[4],i=x[3]-y*x[4],d=x[2]-b*x[3],u=x[1]-w*x[2],c=x[0]-j*x[1],h=z[4],l=z[3]-y*z[4],p=z[2]-b*z[3],v=z[1]-w*z[2],g=z[0]-j*z[1]):(y=m[0],b=m[1],w=m[2],j=m[3],_=m[4],n=x[0],i=x[1]-y*x[0],d=x[2]-b*x[1],u=x[3]-w*x[2],c=x[4]-j*x[3],h=z[0],l=z[1]-y*z[0],p=z[2]-b*z[1],v=z[3]-w*z[2],g=z[4]-j*z[3]),E=r.offset,O=o.offset,t=r.data,e=o.data,s=r.getter,a=o.setter,S=0;S<_;S++){for(A=0;A<j;A++){for(k=0;k<w;k++){for(T=0;T<b;T++){for(P=0;P<y;P++)a(e,O,f(s(t,E))),E+=n,O+=h;E+=i,O+=l}E+=d,O+=p}E+=u,O+=v}E+=c,O+=g}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,_,x,z,E,O,P,T,k,A,S,V,C,G,R;for(b=r.shape,O=r.strides,P=o.strides,"row-major"===r.order?(w=b[5],j=b[4],_=b[3],x=b[2],z=b[1],E=b[0],n=O[5],i=O[4]-w*O[5],d=O[3]-j*O[4],u=O[2]-_*O[3],c=O[1]-x*O[2],h=O[0]-z*O[1],l=P[5],p=P[4]-w*P[5],v=P[3]-j*P[4],g=P[2]-_*P[3],m=P[1]-x*P[2],y=P[0]-z*P[1]):(w=b[0],j=b[1],_=b[2],x=b[3],z=b[4],E=b[5],n=O[0],i=O[1]-w*O[0],d=O[2]-j*O[1],u=O[3]-_*O[2],c=O[4]-x*O[3],h=O[5]-z*O[4],l=P[0],p=P[1]-w*P[0],v=P[2]-j*P[1],g=P[3]-_*P[2],m=P[4]-x*P[3],y=P[5]-z*P[4]),T=r.offset,k=o.offset,t=r.data,e=o.data,s=r.getter,a=o.setter,R=0;R<E;R++){for(G=0;G<z;G++){for(C=0;C<x;C++){for(V=0;V<_;V++){for(S=0;S<j;S++){for(A=0;A<w;A++)a(e,k,f(s(t,T))),T+=n,k+=l;T+=i,k+=p}T+=d,k+=v}T+=u,k+=g}T+=c,k+=m}T+=h,k+=y}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,_,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L;for(j=r.shape,k=r.strides,A=o.strides,"row-major"===r.order?(_=j[6],x=j[5],z=j[4],E=j[3],O=j[2],P=j[1],T=j[0],n=k[6],i=k[5]-_*k[6],d=k[4]-x*k[5],u=k[3]-z*k[4],c=k[2]-E*k[3],h=k[1]-O*k[2],l=k[0]-P*k[1],p=A[6],v=A[5]-_*A[6],g=A[4]-x*A[5],m=A[3]-z*A[4],y=A[2]-E*A[3],b=A[1]-O*A[2],w=A[0]-P*A[1]):(_=j[0],x=j[1],z=j[2],E=j[3],O=j[4],P=j[5],T=j[6],n=k[0],i=k[1]-_*k[0],d=k[2]-x*k[1],u=k[3]-z*k[2],c=k[4]-E*k[3],h=k[5]-O*k[4],l=k[6]-P*k[5],p=A[0],v=A[1]-_*A[0],g=A[2]-x*A[1],m=A[3]-z*A[2],y=A[4]-E*A[3],b=A[5]-O*A[4],w=A[6]-P*A[5]),S=r.offset,V=o.offset,t=r.data,e=o.data,s=r.getter,a=o.setter,L=0;L<T;L++){for(I=0;I<P;I++){for(F=0;F<O;F++){for(B=0;B<E;B++){for(R=0;R<z;R++){for(G=0;G<x;G++){for(C=0;C<_;C++)a(e,V,f(s(t,S))),S+=n,V+=p;S+=i,V+=v}S+=d,V+=g}S+=u,V+=m}S+=c,V+=y}S+=h,V+=b}S+=l,V+=w}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,_,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q;for(x=r.shape,V=r.strides,C=o.strides,"row-major"===r.order?(z=x[7],E=x[6],O=x[5],P=x[4],T=x[3],k=x[2],A=x[1],S=x[0],n=V[7],i=V[6]-z*V[7],d=V[5]-E*V[6],u=V[4]-O*V[5],c=V[3]-P*V[4],h=V[2]-T*V[3],l=V[1]-k*V[2],p=V[0]-A*V[1],v=C[7],g=C[6]-z*C[7],m=C[5]-E*C[6],y=C[4]-O*C[5],b=C[3]-P*C[4],w=C[2]-T*C[3],j=C[1]-k*C[2],_=C[0]-A*C[1]):(z=x[0],E=x[1],O=x[2],P=x[3],T=x[4],k=x[5],A=x[6],S=x[7],n=V[0],i=V[1]-z*V[0],d=V[2]-E*V[1],u=V[3]-O*V[2],c=V[4]-P*V[3],h=V[5]-T*V[4],l=V[6]-k*V[5],p=V[7]-A*V[6],v=C[0],g=C[1]-z*C[0],m=C[2]-E*C[1],y=C[3]-O*C[2],b=C[4]-P*C[3],w=C[5]-T*C[4],j=C[6]-k*C[5],_=C[7]-A*C[6]),G=r.offset,R=o.offset,t=r.data,e=o.data,s=r.getter,a=o.setter,q=0;q<S;q++){for(U=0;U<A;U++){for(N=0;N<k;N++){for(M=0;M<T;M++){for(L=0;L<P;L++){for(I=0;I<O;I++){for(F=0;F<E;F++){for(B=0;B<z;B++)a(e,R,f(s(t,G))),G+=n,R+=v;G+=i,R+=g}G+=d,R+=m}G+=u,R+=y}G+=c,R+=b}G+=h,R+=w}G+=l,R+=j}G+=p,R+=_}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,_,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H,J,K;for(E=r.shape,R=r.strides,B=o.strides,"row-major"===r.order?(O=E[8],P=E[7],T=E[6],k=E[5],A=E[4],S=E[3],V=E[2],C=E[1],G=E[0],n=R[8],i=R[7]-O*R[8],d=R[6]-P*R[7],u=R[5]-T*R[6],c=R[4]-k*R[5],h=R[3]-A*R[4],l=R[2]-S*R[3],p=R[1]-V*R[2],v=R[0]-C*R[1],g=B[8],m=B[7]-O*B[8],y=B[6]-P*B[7],b=B[5]-T*B[6],w=B[4]-k*B[5],j=B[3]-A*B[4],_=B[2]-S*B[3],x=B[1]-V*B[2],z=B[0]-C*B[1]):(O=E[0],P=E[1],T=E[2],k=E[3],A=E[4],S=E[5],V=E[6],C=E[7],G=E[8],n=R[0],i=R[1]-O*R[0],d=R[2]-P*R[1],u=R[3]-T*R[2],c=R[4]-k*R[3],h=R[5]-A*R[4],l=R[6]-S*R[5],p=R[7]-V*R[6],v=R[8]-C*R[7],g=B[0],m=B[1]-O*B[0],y=B[2]-P*B[1],b=B[3]-T*B[2],w=B[4]-k*B[3],j=B[5]-A*B[4],_=B[6]-S*B[5],x=B[7]-V*B[6],z=B[8]-C*B[7]),F=r.offset,I=o.offset,t=r.data,e=o.data,s=r.getter,a=o.setter,K=0;K<G;K++){for(J=0;J<C;J++){for(H=0;H<V;H++){for(D=0;D<S;D++){for(q=0;q<A;q++){for(U=0;U<k;U++){for(N=0;N<T;N++){for(M=0;M<P;M++){for(L=0;L<O;L++)a(e,I,f(s(t,F))),F+=n,I+=g;F+=i,I+=m}F+=d,I+=y}F+=u,I+=b}F+=c,I+=w}F+=h,I+=j}F+=l,I+=_}F+=p,I+=x}F+=v,I+=z}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,_,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H,J,K,Q,W,X,Y;for(P=r.shape,I=r.strides,L=o.strides,"row-major"===r.order?(T=P[9],k=P[8],A=P[7],S=P[6],V=P[5],C=P[4],G=P[3],R=P[2],B=P[1],F=P[0],n=I[9],i=I[8]-T*I[9],d=I[7]-k*I[8],u=I[6]-A*I[7],c=I[5]-S*I[6],h=I[4]-V*I[5],l=I[3]-C*I[4],p=I[2]-G*I[3],v=I[1]-R*I[2],g=I[0]-B*I[1],m=L[9],y=L[8]-T*L[9],b=L[7]-k*L[8],w=L[6]-A*L[7],j=L[5]-S*L[6],_=L[4]-V*L[5],x=L[3]-C*L[4],z=L[2]-G*L[3],E=L[1]-R*L[2],O=L[0]-B*L[1]):(T=P[0],k=P[1],A=P[2],S=P[3],V=P[4],C=P[5],G=P[6],R=P[7],B=P[8],F=P[9],n=I[0],i=I[1]-T*I[0],d=I[2]-k*I[1],u=I[3]-A*I[2],c=I[4]-S*I[3],h=I[5]-V*I[4],l=I[6]-C*I[5],p=I[7]-G*I[6],v=I[8]-R*I[7],g=I[9]-B*I[8],m=L[0],y=L[1]-T*L[0],b=L[2]-k*L[1],w=L[3]-A*L[2],j=L[4]-S*L[3],_=L[5]-V*L[4],x=L[6]-C*L[5],z=L[7]-G*L[6],E=L[8]-R*L[7],O=L[9]-B*L[8]),M=r.offset,N=o.offset,t=r.data,e=o.data,s=r.getter,a=o.setter,Y=0;Y<F;Y++){for(X=0;X<B;X++){for(W=0;W<R;W++){for(Q=0;Q<G;Q++){for(K=0;K<C;K++){for(J=0;J<V;J++){for(H=0;H<S;H++){for(D=0;D<A;D++){for(q=0;q<k;q++){for(U=0;U<T;U++)a(e,N,f(s(t,M))),M+=n,N+=m;M+=i,N+=y}M+=d,N+=b}M+=u,N+=w}M+=c,N+=j}M+=h,N+=_}M+=l,N+=x}M+=p,N+=z}M+=v,N+=E}M+=g,N+=O}}],k=[function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O;for(h=(O=_(r,o)).sh,v=O.sx,g=O.sy,t=O.bsize,m=r.offset,y=o.offset,e=r.data,s=o.data,a=v[0],i=g[0],E=h[1];E>0;)for(E<t?(p=E,E=0):(p=t,E-=t),u=m+E*v[1],c=y+E*g[1],z=h[0];z>0;)for(z<t?(l=z,z=0):(l=t,z-=t),b=u+z*v[0],w=c+z*g[0],n=v[1]-l*v[0],d=g[1]-l*g[0],x=0;x<p;x++){for(j=0;j<l;j++)s[w]=f(e[b]),b+=a,w+=i;b+=n,w+=d}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C;for(g=(C=_(r,o)).sh,w=C.sx,j=C.sy,t=C.bsize,x=r.offset,z=o.offset,e=r.data,s=o.data,a=w[0],d=j[0],V=g[2];V>0;)for(V<t?(b=V,V=0):(b=t,V-=t),l=x+V*w[2],v=z+V*j[2],S=g[1];S>0;)for(S<t?(y=S,S=0):(y=t,S-=t),i=w[2]-y*w[1],c=j[2]-y*j[1],h=l+S*w[1],p=v+S*j[1],A=g[0];A>0;)for(A<t?(m=A,A=0):(m=t,A-=t),E=h+A*w[0],O=p+A*j[0],n=w[1]-m*w[0],u=j[1]-m*j[0],k=0;k<b;k++){for(T=0;T<y;T++){for(P=0;P<m;P++)s[O]=f(e[E]),E+=a,O+=d;E+=n,O+=u}E+=i,O+=c}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M;for(w=(M=_(r,o)).sh,O=M.sx,P=M.sy,t=M.bsize,T=r.offset,k=o.offset,e=r.data,s=o.data,a=O[0],u=P[0],L=w[3];L>0;)for(L<t?(E=L,L=0):(E=t,L-=t),g=T+L*O[3],b=k+L*P[3],I=w[2];I>0;)for(I<t?(z=I,I=0):(z=t,I-=t),d=O[3]-z*O[2],l=P[3]-z*P[2],v=g+I*O[2],y=b+I*P[2],F=w[1];F>0;)for(F<t?(x=F,F=0):(x=t,F-=t),i=O[2]-x*O[1],h=P[2]-x*P[1],p=v+F*O[1],m=y+F*P[1],B=w[0];B>0;)for(B<t?(j=B,B=0):(j=t,B-=t),A=p+B*O[0],S=m+B*P[0],n=O[1]-j*O[0],c=P[1]-j*P[0],R=0;R<E;R++){for(G=0;G<z;G++){for(C=0;C<x;C++){for(V=0;V<j;V++)s[S]=f(e[A]),A+=a,S+=u;A+=n,S+=c}A+=i,S+=h}A+=d,S+=l}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H,J,K;for(E=(K=_(r,o)).sh,S=K.sx,V=K.sy,t=K.bsize,C=r.offset,G=o.offset,e=r.data,s=o.data,a=S[0],c=V[0],J=E[4];J>0;)for(J<t?(A=J,J=0):(A=t,J-=t),b=C+J*S[4],z=G+J*V[4],H=E[3];H>0;)for(H<t?(k=H,H=0):(k=t,H-=t),u=S[4]-k*S[3],v=V[4]-k*V[3],y=b+H*S[3],x=z+H*V[3],D=E[2];D>0;)for(D<t?(T=D,D=0):(T=t,D-=t),d=S[3]-T*S[2],p=V[3]-T*V[2],m=y+D*S[2],j=x+D*V[2],q=E[1];q>0;)for(q<t?(P=q,q=0):(P=t,q-=t),i=S[2]-P*S[1],l=V[2]-P*V[1],g=m+q*S[1],w=j+q*V[1],U=E[0];U>0;)for(U<t?(O=U,U=0):(O=t,U-=t),R=g+U*S[0],B=w+U*V[0],n=S[1]-O*S[0],h=V[1]-O*V[0],N=0;N<A;N++){for(M=0;M<k;M++){for(L=0;L<T;L++){for(I=0;I<P;I++){for(F=0;F<O;F++)s[B]=f(e[R]),R+=a,B+=c;R+=n,B+=h}R+=i,B+=l}R+=d,B+=p}R+=u,B+=v}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H,J,K,Q,W,X,Y,Z,$,rr;for(k=(rr=_(r,o)).sh,B=rr.sx,F=rr.sy,t=rr.bsize,I=r.offset,L=o.offset,e=r.data,s=o.data,a=B[0],h=F[0],$=k[5];$>0;)for($<t?(R=$,$=0):(R=t,$-=t),x=I+$*B[5],T=L+$*F[5],Z=k[4];Z>0;)for(Z<t?(G=Z,Z=0):(G=t,Z-=t),c=B[5]-G*B[4],m=F[5]-G*F[4],j=x+Z*B[4],P=T+Z*F[4],Y=k[3];Y>0;)for(Y<t?(C=Y,Y=0):(C=t,Y-=t),u=B[4]-C*B[3],g=F[4]-C*F[3],w=j+Y*B[3],O=P+Y*F[3],X=k[2];X>0;)for(X<t?(V=X,X=0):(V=t,X-=t),d=B[3]-V*B[2],v=F[3]-V*F[2],b=w+X*B[2],E=O+X*F[2],W=k[1];W>0;)for(W<t?(S=W,W=0):(S=t,W-=t),i=B[2]-S*B[1],p=F[2]-S*F[1],y=b+W*B[1],z=E+W*F[1],Q=k[0];Q>0;)for(Q<t?(A=Q,Q=0):(A=t,Q-=t),M=y+Q*B[0],N=z+Q*F[0],n=B[1]-A*B[0],l=F[1]-A*F[0],K=0;K<R;K++){for(J=0;J<G;J++){for(H=0;H<C;H++){for(D=0;D<V;D++){for(q=0;q<S;q++){for(U=0;U<A;U++)s[N]=f(e[M]),M+=a,N+=h;M+=n,N+=l}M+=i,N+=p}M+=d,N+=v}M+=u,N+=g}M+=c,N+=m}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,tr,er,sr,ar,nr;for(C=(nr=_(r,o)).sh,N=nr.sx,U=nr.sy,t=nr.bsize,q=r.offset,D=o.offset,e=r.data,s=o.data,a=N[0],l=U[0],ar=C[6];ar>0;)for(ar<t?(M=ar,ar=0):(M=t,ar-=t),O=q+ar*N[6],V=D+ar*U[6],sr=C[5];sr>0;)for(sr<t?(L=sr,sr=0):(L=t,sr-=t),h=N[6]-L*N[5],b=U[6]-L*U[5],E=O+sr*N[5],S=V+sr*U[5],er=C[4];er>0;)for(er<t?(I=er,er=0):(I=t,er-=t),c=N[5]-I*N[4],y=U[5]-I*U[4],z=E+er*N[4],A=S+er*U[4],tr=C[3];tr>0;)for(tr<t?(F=tr,tr=0):(F=t,tr-=t),u=N[4]-F*N[3],m=U[4]-F*U[3],x=z+tr*N[3],k=A+tr*U[3],fr=C[2];fr>0;)for(fr<t?(B=fr,fr=0):(B=t,fr-=t),d=N[3]-B*N[2],g=U[3]-B*U[2],j=x+fr*N[2],T=k+fr*U[2],or=C[1];or>0;)for(or<t?(R=or,or=0):(R=t,or-=t),i=N[2]-R*N[1],v=U[2]-R*U[1],w=j+or*N[1],P=T+or*U[1],rr=C[0];rr>0;)for(rr<t?(G=rr,rr=0):(G=t,rr-=t),H=w+rr*N[0],J=P+rr*U[0],n=N[1]-G*N[0],p=U[1]-G*U[0],$=0;$<M;$++){for(Z=0;Z<L;Z++){for(Y=0;Y<I;Y++){for(X=0;X<F;X++){for(W=0;W<B;W++){for(Q=0;Q<R;Q++){for(K=0;K<G;K++)s[J]=f(e[H]),H+=a,J+=l;H+=n,J+=p}H+=i,J+=v}H+=d,J+=g}H+=u,J+=m}H+=c,J+=y}H+=h,J+=b}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,tr,er,sr,ar,nr,ir,dr,ur,cr,hr,lr,pr;for(F=(pr=_(r,o)).sh,J=pr.sx,K=pr.sy,t=pr.bsize,Q=r.offset,W=o.offset,e=r.data,s=o.data,a=J[0],p=K[0],lr=F[7];lr>0;)for(lr<t?(H=lr,lr=0):(H=t,lr-=t),k=Q+lr*J[7],B=W+lr*K[7],hr=F[6];hr>0;)for(hr<t?(D=hr,hr=0):(D=t,hr-=t),l=J[7]-D*J[6],j=K[7]-D*K[6],T=k+hr*J[6],R=B+hr*K[6],cr=F[5];cr>0;)for(cr<t?(q=cr,cr=0):(q=t,cr-=t),h=J[6]-q*J[5],w=K[6]-q*K[5],P=T+cr*J[5],G=R+cr*K[5],ur=F[4];ur>0;)for(ur<t?(U=ur,ur=0):(U=t,ur-=t),c=J[5]-U*J[4],b=K[5]-U*K[4],O=P+ur*J[4],C=G+ur*K[4],dr=F[3];dr>0;)for(dr<t?(N=dr,dr=0):(N=t,dr-=t),u=J[4]-N*J[3],y=K[4]-N*K[3],E=O+dr*J[3],V=C+dr*K[3],ir=F[2];ir>0;)for(ir<t?(M=ir,ir=0):(M=t,ir-=t),d=J[3]-M*J[2],m=K[3]-M*K[2],z=E+ir*J[2],S=V+ir*K[2],nr=F[1];nr>0;)for(nr<t?(L=nr,nr=0):(L=t,nr-=t),i=J[2]-L*J[1],g=K[2]-L*K[1],x=z+nr*J[1],A=S+nr*K[1],ar=F[0];ar>0;)for(ar<t?(I=ar,ar=0):(I=t,ar-=t),X=x+ar*J[0],Y=A+ar*K[0],n=J[1]-I*J[0],v=K[1]-I*K[0],sr=0;sr<H;sr++){for(er=0;er<D;er++){for(tr=0;tr<q;tr++){for(fr=0;fr<U;fr++){for(or=0;or<N;or++){for(rr=0;rr<M;rr++){for($=0;$<L;$++){for(Z=0;Z<I;Z++)s[Y]=f(e[X]),X+=a,Y+=p;X+=n,Y+=v}X+=i,Y+=g}X+=d,Y+=m}X+=u,Y+=y}X+=c,Y+=b}X+=h,Y+=w}X+=l,Y+=j}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,tr,er,sr,ar,nr,ir,dr,ur,cr,hr,lr,pr,vr,gr,mr,yr,br,wr,jr;for(N=(jr=_(r,o)).sh,Y=jr.sx,Z=jr.sy,t=jr.bsize,$=r.offset,rr=o.offset,e=r.data,s=o.data,a=Y[0],v=Z[0],wr=N[8];wr>0;)for(wr<t?(X=wr,wr=0):(X=t,wr-=t),V=$+wr*Y[8],M=rr+wr*Z[8],br=N[7];br>0;)for(br<t?(W=br,br=0):(W=t,br-=t),p=Y[8]-W*Y[7],z=Z[8]-W*Z[7],S=V+br*Y[7],L=M+br*Z[7],yr=N[6];yr>0;)for(yr<t?(Q=yr,yr=0):(Q=t,yr-=t),l=Y[7]-Q*Y[6],x=Z[7]-Q*Z[6],A=S+yr*Y[6],I=L+yr*Z[6],mr=N[5];mr>0;)for(mr<t?(K=mr,mr=0):(K=t,mr-=t),h=Y[6]-K*Y[5],j=Z[6]-K*Z[5],k=A+mr*Y[5],F=I+mr*Z[5],gr=N[4];gr>0;)for(gr<t?(J=gr,gr=0):(J=t,gr-=t),c=Y[5]-J*Y[4],w=Z[5]-J*Z[4],T=k+gr*Y[4],B=F+gr*Z[4],vr=N[3];vr>0;)for(vr<t?(H=vr,vr=0):(H=t,vr-=t),u=Y[4]-H*Y[3],b=Z[4]-H*Z[3],P=T+vr*Y[3],R=B+vr*Z[3],pr=N[2];pr>0;)for(pr<t?(D=pr,pr=0):(D=t,pr-=t),d=Y[3]-D*Y[2],y=Z[3]-D*Z[2],O=P+pr*Y[2],G=R+pr*Z[2],lr=N[1];lr>0;)for(lr<t?(q=lr,lr=0):(q=t,lr-=t),i=Y[2]-q*Y[1],m=Z[2]-q*Z[1],E=O+lr*Y[1],C=G+lr*Z[1],hr=N[0];hr>0;)for(hr<t?(U=hr,hr=0):(U=t,hr-=t),or=E+hr*Y[0],fr=C+hr*Z[0],n=Y[1]-U*Y[0],g=Z[1]-U*Z[0],cr=0;cr<X;cr++){for(ur=0;ur<W;ur++){for(dr=0;dr<Q;dr++){for(ir=0;ir<K;ir++){for(nr=0;nr<J;nr++){for(ar=0;ar<H;ar++){for(sr=0;sr<D;sr++){for(er=0;er<q;er++){for(tr=0;tr<U;tr++)s[fr]=f(e[or]),or+=a,fr+=v;or+=n,fr+=g}or+=i,fr+=m}or+=d,fr+=y}or+=u,fr+=b}or+=c,fr+=w}or+=h,fr+=j}or+=l,fr+=x}or+=p,fr+=z}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,tr,er,sr,ar,nr,ir,dr,ur,cr,hr,lr,pr,vr,gr,mr,yr,br,wr,jr,_r,xr,zr,Er,Or,Pr,Tr;for(H=(Tr=_(r,o)).sh,fr=Tr.sx,tr=Tr.sy,t=Tr.bsize,er=r.offset,sr=o.offset,e=r.data,s=o.data,a=fr[0],g=tr[0],Pr=H[9];Pr>0;)for(Pr<t?(or=Pr,Pr=0):(or=t,Pr-=t),R=er+Pr*fr[9],D=sr+Pr*tr[9],Or=H[8];Or>0;)for(Or<t?(rr=Or,Or=0):(rr=t,Or-=t),v=fr[9]-rr*fr[8],O=tr[9]-rr*tr[8],G=R+Or*fr[8],q=D+Or*tr[8],Er=H[7];Er>0;)for(Er<t?($=Er,Er=0):($=t,Er-=t),p=fr[8]-$*fr[7],E=tr[8]-$*tr[7],C=G+Er*fr[7],U=q+Er*tr[7],zr=H[6];zr>0;)for(zr<t?(Z=zr,zr=0):(Z=t,zr-=t),l=fr[7]-Z*fr[6],z=tr[7]-Z*tr[6],V=C+zr*fr[6],N=U+zr*tr[6],xr=H[5];xr>0;)for(xr<t?(Y=xr,xr=0):(Y=t,xr-=t),h=fr[6]-Y*fr[5],x=tr[6]-Y*tr[5],S=V+xr*fr[5],M=N+xr*tr[5],_r=H[4];_r>0;)for(_r<t?(X=_r,_r=0):(X=t,_r-=t),c=fr[5]-X*fr[4],j=tr[5]-X*tr[4],A=S+_r*fr[4],L=M+_r*tr[4],jr=H[3];jr>0;)for(jr<t?(W=jr,jr=0):(W=t,jr-=t),u=fr[4]-W*fr[3],w=tr[4]-W*tr[3],k=A+jr*fr[3],I=L+jr*tr[3],wr=H[2];wr>0;)for(wr<t?(Q=wr,wr=0):(Q=t,wr-=t),d=fr[3]-Q*fr[2],b=tr[3]-Q*tr[2],T=k+wr*fr[2],F=I+wr*tr[2],br=H[1];br>0;)for(br<t?(K=br,br=0):(K=t,br-=t),i=fr[2]-K*fr[1],y=tr[2]-K*tr[1],P=T+br*fr[1],B=F+br*tr[1],yr=H[0];yr>0;)for(yr<t?(J=yr,yr=0):(J=t,yr-=t),ar=P+yr*fr[0],nr=B+yr*tr[0],n=fr[1]-J*fr[0],m=tr[1]-J*tr[0],mr=0;mr<or;mr++){for(gr=0;gr<rr;gr++){for(vr=0;vr<$;vr++){for(pr=0;pr<Z;pr++){for(lr=0;lr<Y;lr++){for(hr=0;hr<X;hr++){for(cr=0;cr<W;cr++){for(ur=0;ur<Q;ur++){for(dr=0;dr<K;dr++){for(ir=0;ir<J;ir++)s[nr]=f(e[ar]),ar+=a,nr+=g;ar+=n,nr+=m}ar+=i,nr+=y}ar+=d,nr+=b}ar+=u,nr+=w}ar+=c,nr+=j}ar+=h,nr+=x}ar+=l,nr+=z}ar+=p,nr+=E}ar+=v,nr+=O}}],A=[function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T;for(p=(T=_(r,o)).sh,m=T.sx,y=T.sy,t=T.bsize,b=r.offset,w=o.offset,e=r.data,s=o.data,i=m[0],u=y[0],a=r.getter,n=o.setter,P=p[1];P>0;)for(P<t?(g=P,P=0):(g=t,P-=t),h=b+P*m[1],l=w+P*y[1],O=p[0];O>0;)for(O<t?(v=O,O=0):(v=t,O-=t),j=h+O*m[0],x=l+O*y[0],d=m[1]-v*m[0],c=y[1]-v*y[0],E=0;E<g;E++){for(z=0;z<v;z++)n(s,x,f(a(e,j))),j+=i,x+=u;j+=d,x+=c}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C,G,R;for(y=(R=_(r,o)).sh,x=R.sx,z=R.sy,t=R.bsize,E=r.offset,O=o.offset,e=r.data,s=o.data,i=x[0],c=z[0],a=r.getter,n=o.setter,G=y[2];G>0;)for(G<t?(j=G,G=0):(j=t,G-=t),v=E+G*x[2],m=O+G*z[2],C=y[1];C>0;)for(C<t?(w=C,C=0):(w=t,C-=t),u=x[2]-w*x[1],l=z[2]-w*z[1],p=v+C*x[1],g=m+C*z[1],V=y[0];V>0;)for(V<t?(b=V,V=0):(b=t,V-=t),P=p+V*x[0],T=g+V*z[0],d=x[1]-b*x[0],h=z[1]-b*z[0],S=0;S<j;S++){for(A=0;A<w;A++){for(k=0;k<b;k++)n(s,T,f(a(e,P))),P+=i,T+=c;P+=d,T+=h}P+=u,T+=l}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U;for(x=(U=_(r,o)).sh,T=U.sx,k=U.sy,t=U.bsize,A=r.offset,S=o.offset,e=r.data,s=o.data,i=T[0],h=k[0],a=r.getter,n=o.setter,N=x[3];N>0;)for(N<t?(P=N,N=0):(P=t,N-=t),y=A+N*T[3],j=S+N*k[3],M=x[2];M>0;)for(M<t?(O=M,M=0):(O=t,M-=t),c=T[3]-O*T[2],v=k[3]-O*k[2],m=y+M*T[2],w=j+M*k[2],L=x[1];L>0;)for(L<t?(E=L,L=0):(E=t,L-=t),u=T[2]-E*T[1],p=k[2]-E*k[1],g=m+L*T[1],b=w+L*k[1],I=x[0];I>0;)for(I<t?(z=I,I=0):(z=t,I-=t),V=g+I*T[0],C=b+I*k[0],d=T[1]-z*T[0],l=k[1]-z*k[0],F=0;F<P;F++){for(B=0;B<O;B++){for(R=0;R<E;R++){for(G=0;G<z;G++)n(s,C,f(a(e,V))),V+=i,C+=h;V+=d,C+=l}V+=u,C+=p}V+=c,C+=v}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H,J,K,Q,W;for(P=(W=_(r,o)).sh,C=W.sx,G=W.sy,t=W.bsize,R=r.offset,B=o.offset,e=r.data,s=o.data,i=C[0],l=G[0],a=r.getter,n=o.setter,Q=P[4];Q>0;)for(Q<t?(V=Q,Q=0):(V=t,Q-=t),j=R+Q*C[4],O=B+Q*G[4],K=P[3];K>0;)for(K<t?(S=K,K=0):(S=t,K-=t),h=C[4]-S*C[3],m=G[4]-S*G[3],w=j+K*C[3],E=O+K*G[3],J=P[2];J>0;)for(J<t?(A=J,J=0):(A=t,J-=t),c=C[3]-A*C[2],g=G[3]-A*G[2],b=w+J*C[2],z=E+J*G[2],H=P[1];H>0;)for(H<t?(k=H,H=0):(k=t,H-=t),u=C[2]-k*C[1],v=G[2]-k*G[1],y=b+H*C[1],x=z+H*G[1],D=P[0];D>0;)for(D<t?(T=D,D=0):(T=t,D-=t),F=y+D*C[0],I=x+D*G[0],d=C[1]-T*C[0],p=G[1]-T*G[0],q=0;q<V;q++){for(U=0;U<S;U++){for(N=0;N<A;N++){for(M=0;M<k;M++){for(L=0;L<T;L++)n(s,I,f(a(e,F))),F+=i,I+=l;F+=d,I+=p}F+=u,I+=v}F+=c,I+=g}F+=h,I+=m}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr;for(S=(fr=_(r,o)).sh,I=fr.sx,L=fr.sy,t=fr.bsize,M=r.offset,N=o.offset,e=r.data,s=o.data,i=I[0],p=L[0],a=r.getter,n=o.setter,or=S[5];or>0;)for(or<t?(F=or,or=0):(F=t,or-=t),E=M+or*I[5],A=N+or*L[5],rr=S[4];rr>0;)for(rr<t?(B=rr,rr=0):(B=t,rr-=t),l=I[5]-B*I[4],b=L[5]-B*L[4],z=E+rr*I[4],k=A+rr*L[4],$=S[3];$>0;)for($<t?(R=$,$=0):(R=t,$-=t),h=I[4]-R*I[3],y=L[4]-R*L[3],x=z+$*I[3],T=k+$*L[3],Z=S[2];Z>0;)for(Z<t?(G=Z,Z=0):(G=t,Z-=t),c=I[3]-G*I[2],m=L[3]-G*L[2],j=x+Z*I[2],P=T+Z*L[2],Y=S[1];Y>0;)for(Y<t?(C=Y,Y=0):(C=t,Y-=t),u=I[2]-C*I[1],g=L[2]-C*L[1],w=j+Y*I[1],O=P+Y*L[1],X=S[0];X>0;)for(X<t?(V=X,X=0):(V=t,X-=t),U=w+X*I[0],q=O+X*L[0],d=I[1]-V*I[0],v=L[1]-V*L[0],W=0;W<F;W++){for(Q=0;Q<B;Q++){for(K=0;K<R;K++){for(J=0;J<G;J++){for(H=0;H<C;H++){for(D=0;D<V;D++)n(s,q,f(a(e,U))),U+=i,q+=p;U+=d,q+=v}U+=u,q+=g}U+=c,q+=m}U+=h,q+=y}U+=l,q+=b}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,tr,er,sr,ar,nr,ir,dr;for(R=(dr=_(r,o)).sh,q=dr.sx,D=dr.sy,t=dr.bsize,H=r.offset,J=o.offset,e=r.data,s=o.data,i=q[0],v=D[0],a=r.getter,n=o.setter,ir=R[6];ir>0;)for(ir<t?(U=ir,ir=0):(U=t,ir-=t),T=H+ir*q[6],G=J+ir*D[6],nr=R[5];nr>0;)for(nr<t?(N=nr,nr=0):(N=t,nr-=t),p=q[6]-N*q[5],j=D[6]-N*D[5],P=T+nr*q[5],C=G+nr*D[5],ar=R[4];ar>0;)for(ar<t?(M=ar,ar=0):(M=t,ar-=t),l=q[5]-M*q[4],w=D[5]-M*D[4],O=P+ar*q[4],V=C+ar*D[4],sr=R[3];sr>0;)for(sr<t?(L=sr,sr=0):(L=t,sr-=t),h=q[4]-L*q[3],b=D[4]-L*D[3],E=O+sr*q[3],S=V+sr*D[3],er=R[2];er>0;)for(er<t?(I=er,er=0):(I=t,er-=t),c=q[3]-I*q[2],y=D[3]-I*D[2],z=E+er*q[2],A=S+er*D[2],tr=R[1];tr>0;)for(tr<t?(F=tr,tr=0):(F=t,tr-=t),u=q[2]-F*q[1],m=D[2]-F*D[1],x=z+tr*q[1],k=A+tr*D[1],fr=R[0];fr>0;)for(fr<t?(B=fr,fr=0):(B=t,fr-=t),K=x+fr*q[0],Q=k+fr*D[0],d=q[1]-B*q[0],g=D[1]-B*D[0],or=0;or<U;or++){for(rr=0;rr<N;rr++){for($=0;$<M;$++){for(Z=0;Z<L;Z++){for(Y=0;Y<I;Y++){for(X=0;X<F;X++){for(W=0;W<B;W++)n(s,Q,f(a(e,K))),K+=i,Q+=v;K+=d,Q+=g}K+=u,Q+=m}K+=c,Q+=y}K+=h,Q+=b}K+=l,Q+=w}K+=p,Q+=j}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,tr,er,sr,ar,nr,ir,dr,ur,cr,hr,lr,pr,vr,gr;for(L=(gr=_(r,o)).sh,Q=gr.sx,W=gr.sy,t=gr.bsize,X=r.offset,Y=o.offset,e=r.data,s=o.data,i=Q[0],g=W[0],a=r.getter,n=o.setter,vr=L[7];vr>0;)for(vr<t?(K=vr,vr=0):(K=t,vr-=t),S=X+vr*Q[7],I=Y+vr*W[7],pr=L[6];pr>0;)for(pr<t?(J=pr,pr=0):(J=t,pr-=t),v=Q[7]-J*Q[6],z=W[7]-J*W[6],A=S+pr*Q[6],F=I+pr*W[6],lr=L[5];lr>0;)for(lr<t?(H=lr,lr=0):(H=t,lr-=t),p=Q[6]-H*Q[5],x=W[6]-H*W[5],k=A+lr*Q[5],B=F+lr*W[5],hr=L[4];hr>0;)for(hr<t?(D=hr,hr=0):(D=t,hr-=t),l=Q[5]-D*Q[4],j=W[5]-D*W[4],T=k+hr*Q[4],R=B+hr*W[4],cr=L[3];cr>0;)for(cr<t?(q=cr,cr=0):(q=t,cr-=t),h=Q[4]-q*Q[3],w=W[4]-q*W[3],P=T+cr*Q[3],G=R+cr*W[3],ur=L[2];ur>0;)for(ur<t?(U=ur,ur=0):(U=t,ur-=t),c=Q[3]-U*Q[2],b=W[3]-U*W[2],O=P+ur*Q[2],C=G+ur*W[2],dr=L[1];dr>0;)for(dr<t?(N=dr,dr=0):(N=t,dr-=t),u=Q[2]-N*Q[1],y=W[2]-N*W[1],E=O+dr*Q[1],V=C+dr*W[1],ir=L[0];ir>0;)for(ir<t?(M=ir,ir=0):(M=t,ir-=t),Z=E+ir*Q[0],$=V+ir*W[0],d=Q[1]-M*Q[0],m=W[1]-M*W[0],nr=0;nr<K;nr++){for(ar=0;ar<J;ar++){for(sr=0;sr<H;sr++){for(er=0;er<D;er++){for(tr=0;tr<q;tr++){for(fr=0;fr<U;fr++){for(or=0;or<N;or++){for(rr=0;rr<M;rr++)n(s,$,f(a(e,Z))),Z+=i,$+=g;Z+=d,$+=m}Z+=u,$+=y}Z+=c,$+=b}Z+=h,$+=w}Z+=l,$+=j}Z+=p,$+=x}Z+=v,$+=z}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,tr,er,sr,ar,nr,ir,dr,ur,cr,hr,lr,pr,vr,gr,mr,yr,br,wr,jr,_r,xr;for(q=(xr=_(r,o)).sh,$=xr.sx,rr=xr.sy,t=xr.bsize,or=r.offset,fr=o.offset,e=r.data,s=o.data,i=$[0],m=rr[0],a=r.getter,n=o.setter,_r=q[8];_r>0;)for(_r<t?(Z=_r,_r=0):(Z=t,_r-=t),G=or+_r*$[8],U=fr+_r*rr[8],jr=q[7];jr>0;)for(jr<t?(Y=jr,jr=0):(Y=t,jr-=t),g=$[8]-Y*$[7],O=rr[8]-Y*rr[7],C=G+jr*$[7],N=U+jr*rr[7],wr=q[6];wr>0;)for(wr<t?(X=wr,wr=0):(X=t,wr-=t),v=$[7]-X*$[6],E=rr[7]-X*rr[6],V=C+wr*$[6],M=N+wr*rr[6],br=q[5];br>0;)for(br<t?(W=br,br=0):(W=t,br-=t),p=$[6]-W*$[5],z=rr[6]-W*rr[5],S=V+br*$[5],L=M+br*rr[5],yr=q[4];yr>0;)for(yr<t?(Q=yr,yr=0):(Q=t,yr-=t),l=$[5]-Q*$[4],x=rr[5]-Q*rr[4],A=S+yr*$[4],I=L+yr*rr[4],mr=q[3];mr>0;)for(mr<t?(K=mr,mr=0):(K=t,mr-=t),h=$[4]-K*$[3],j=rr[4]-K*rr[3],k=A+mr*$[3],F=I+mr*rr[3],gr=q[2];gr>0;)for(gr<t?(J=gr,gr=0):(J=t,gr-=t),c=$[3]-J*$[2],w=rr[3]-J*rr[2],T=k+gr*$[2],B=F+gr*rr[2],vr=q[1];vr>0;)for(vr<t?(H=vr,vr=0):(H=t,vr-=t),u=$[2]-H*$[1],b=rr[2]-H*rr[1],P=T+vr*$[1],R=B+vr*rr[1],pr=q[0];pr>0;)for(pr<t?(D=pr,pr=0):(D=t,pr-=t),tr=P+pr*$[0],er=R+pr*rr[0],d=$[1]-D*$[0],y=rr[1]-D*rr[0],lr=0;lr<Z;lr++){for(hr=0;hr<Y;hr++){for(cr=0;cr<X;cr++){for(ur=0;ur<W;ur++){for(dr=0;dr<Q;dr++){for(ir=0;ir<K;ir++){for(nr=0;nr<J;nr++){for(ar=0;ar<H;ar++){for(sr=0;sr<D;sr++)n(s,er,f(a(e,tr))),tr+=i,er+=m;tr+=d,er+=y}tr+=u,er+=b}tr+=c,er+=w}tr+=h,er+=j}tr+=l,er+=x}tr+=p,er+=z}tr+=v,er+=E}tr+=g,er+=O}},function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g,m,y,b,w,j,x,z,E,O,P,T,k,A,S,V,C,G,R,B,F,I,L,M,N,U,q,D,H,J,K,Q,W,X,Y,Z,$,rr,or,fr,tr,er,sr,ar,nr,ir,dr,ur,cr,hr,lr,pr,vr,gr,mr,yr,br,wr,jr,_r,xr,zr,Er,Or,Pr,Tr,kr,Ar;for(K=(Ar=_(r,o)).sh,er=Ar.sx,sr=Ar.sy,t=Ar.bsize,ar=r.offset,nr=o.offset,e=r.data,s=o.data,i=er[0],y=sr[0],a=r.getter,n=o.setter,kr=K[9];kr>0;)for(kr<t?(tr=kr,kr=0):(tr=t,kr-=t),F=ar+kr*er[9],J=nr+kr*sr[9],Tr=K[8];Tr>0;)for(Tr<t?(fr=Tr,Tr=0):(fr=t,Tr-=t),m=er[9]-fr*er[8],T=sr[9]-fr*sr[8],B=F+Tr*er[8],H=J+Tr*sr[8],Pr=K[7];Pr>0;)for(Pr<t?(or=Pr,Pr=0):(or=t,Pr-=t),g=er[8]-or*er[7],P=sr[8]-or*sr[7],R=B+Pr*er[7],D=H+Pr*sr[7],Or=K[6];Or>0;)for(Or<t?(rr=Or,Or=0):(rr=t,Or-=t),v=er[7]-rr*er[6],O=sr[7]-rr*sr[6],G=R+Or*er[6],q=D+Or*sr[6],Er=K[5];Er>0;)for(Er<t?($=Er,Er=0):($=t,Er-=t),p=er[6]-$*er[5],E=sr[6]-$*sr[5],C=G+Er*er[5],U=q+Er*sr[5],zr=K[4];zr>0;)for(zr<t?(Z=zr,zr=0):(Z=t,zr-=t),l=er[5]-Z*er[4],z=sr[5]-Z*sr[4],V=C+zr*er[4],N=U+zr*sr[4],xr=K[3];xr>0;)for(xr<t?(Y=xr,xr=0):(Y=t,xr-=t),h=er[4]-Y*er[3],x=sr[4]-Y*sr[3],S=V+xr*er[3],M=N+xr*sr[3],_r=K[2];_r>0;)for(_r<t?(X=_r,_r=0):(X=t,_r-=t),c=er[3]-X*er[2],j=sr[3]-X*sr[2],A=S+_r*er[2],L=M+_r*sr[2],jr=K[1];jr>0;)for(jr<t?(W=jr,jr=0):(W=t,jr-=t),u=er[2]-W*er[1],w=sr[2]-W*sr[1],k=A+jr*er[1],I=L+jr*sr[1],wr=K[0];wr>0;)for(wr<t?(Q=wr,wr=0):(Q=t,wr-=t),ir=k+wr*er[0],dr=I+wr*sr[0],d=er[1]-Q*er[0],b=sr[1]-Q*sr[0],br=0;br<tr;br++){for(yr=0;yr<fr;yr++){for(mr=0;mr<or;mr++){for(gr=0;gr<rr;gr++){for(vr=0;vr<$;vr++){for(pr=0;pr<Z;pr++){for(lr=0;lr<Y;lr++){for(hr=0;hr<X;hr++){for(cr=0;cr<W;cr++){for(ur=0;ur<Q;ur++)n(s,dr,f(a(e,ir))),ir+=i,dr+=y;ir+=d,dr+=b}ir+=u,dr+=w}ir+=c,dr+=j}ir+=h,dr+=x}ir+=l,dr+=z}ir+=p,dr+=E}ir+=v,dr+=O}ir+=g,dr+=P}ir+=m,dr+=T}}],S=P.length-1;return function(f,t){var e,s,a,n,i,d,u,h,l,p,v,m,y,b,w,j,_;if(b=g(f[0]),w=g(f[1]),n=b.shape,i=w.shape,(e=n.length)!==i.length)throw new Error("invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == "+e+". ndims(y) == "+i.length+".");if(0===e)return b.accessors||w.accessors?T[e](b,w,t):P[e](b,w,t);for(h=1,y=0,_=0;_<e;_++){if((j=n[_])!==i[_])throw new Error(r("0Mj0d"));h*=j,1===j&&(y+=1)}if(0!==h){if(1===e)return b.accessors||w.accessors?T[e](b,w,t):P[e](b,w,t);if(l=b.strides,p=w.strides,y===e-1){for(_=0;_<e&&1===n[_];_++);return b.shape=[n[_]],w.shape=b.shape,b.strides=[l[_]],w.strides=[p[_]],b.accessors||w.accessors?T[1](b,w,t):P[1](b,w,t)}if(d=o(l),u=o(p),0!==d&&0!==u&&b.order===w.order){if(s=c(n,l,b.offset),a=c(i,p,w.offset),h===s[1]-s[0]+1&&h===a[1]-a[0]+1)return v=1===d?s[0]:s[1],m=1===u?a[0]:a[1],b.shape=[h],w.shape=b.shape,b.strides=[d],w.strides=[u],b.offset=v,w.offset=m,b.accessors||w.accessors?T[1](b,w,t):P[1](b,w,t);if(e<=S)return b.accessors||w.accessors?T[e](b,w,t):P[e](b,w,t)}return e<=S?b.accessors||w.accessors?A[e-2](b,w,t):k[e-2](b,w,t):b.accessors||w.accessors?function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p,v,g;for(n=x(u=r.shape),t=r.data,e=o.data,c=r.strides,h=o.strides,l=r.offset,p=o.offset,s=r.order,a=o.order,i=r.getter,d=o.setter,g=0;g<n;g++)v=z(u,c,l,s,g,E),d(e,z(u,h,p,a,g,E),f(i(t,v)))}(b,w,t):void function(r,o,f){var t,e,s,a,n,i,d,u,c,h,l,p;for(n=x(i=r.shape),t=r.data,e=o.data,d=r.strides,u=o.strides,c=r.offset,h=o.offset,s=r.order,a=o.order,p=0;p<n;p++)l=z(i,d,c,s,p,O),e[z(i,u,h,a,p,O)]=f(t[l])}(b,w,t)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(r="undefined"!=typeof globalThis?globalThis:r||self).unary=o();
//# sourceMappingURL=browser.js.map
