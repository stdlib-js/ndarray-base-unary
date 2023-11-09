// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-iteration-order@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-minmax-view-buffer-index@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2object@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-loop-interchange-order@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-tiling-block-size@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@v0.1.1-esm/index.mjs";var i=[function(r,o,s){o.data[o.offset]=s(r.data[r.offset])},function(r,o,s){var f,t,e,a,d,i,c,n;for(d=r.shape[0],e=r.strides[0],a=o.strides[0],i=r.offset,c=o.offset,f=r.data,t=o.data,n=0;n<d;n++)t[c]=s(f[i]),i+=e,c+=a},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j;for(c=r.shape,h=r.strides,y=o.strides,"row-major"===r.order?(n=c[1],p=c[0],e=h[1],a=h[0]-n*h[1],d=y[1],i=y[0]-n*y[1]):(n=c[0],p=c[1],e=h[0],a=h[1]-n*h[0],d=y[0],i=y[1]-n*y[0]),m=r.offset,v=o.offset,f=r.data,t=o.data,j=0;j<p;j++){for(u=0;u<n;u++)t[v]=s(f[m]),m+=e,v+=d;m+=a,v+=i}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b;for(p=r.shape,v=r.strides,u=o.strides,"row-major"===r.order?(h=p[2],y=p[1],m=p[0],e=v[2],a=v[1]-h*v[2],d=v[0]-y*v[1],i=u[2],c=u[1]-h*u[2],n=u[0]-y*u[1]):(h=p[0],y=p[1],m=p[2],e=v[0],a=v[1]-h*v[0],d=v[2]-y*v[1],i=u[0],c=u[1]-h*u[0],n=u[2]-y*u[1]),j=r.offset,l=o.offset,f=r.data,t=o.data,b=0;b<m;b++){for(w=0;w<y;w++){for(x=0;x<h;x++)t[l]=s(f[j]),j+=e,l+=i;j+=a,l+=c}j+=d,l+=n}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E;for(y=r.shape,l=r.strides,x=o.strides,"row-major"===r.order?(m=y[3],v=y[2],u=y[1],j=y[0],e=l[3],a=l[2]-m*l[3],d=l[1]-v*l[2],i=l[0]-u*l[1],c=x[3],n=x[2]-m*x[3],p=x[1]-v*x[2],h=x[0]-u*x[1]):(m=y[0],v=y[1],u=y[2],j=y[3],e=l[0],a=l[1]-m*l[0],d=l[2]-v*l[1],i=l[3]-u*l[2],c=x[0],n=x[1]-m*x[0],p=x[2]-v*x[1],h=x[3]-u*x[2]),w=r.offset,b=o.offset,f=r.data,t=o.data,E=0;E<j;E++){for(k=0;k<u;k++){for(P=0;P<v;P++){for(g=0;g<m;g++)t[b]=s(f[w]),w+=e,b+=c;w+=a,b+=n}w+=d,b+=p}w+=i,b+=h}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B;for(v=r.shape,b=r.strides,g=o.strides,"row-major"===r.order?(u=v[4],j=v[3],l=v[2],x=v[1],w=v[0],e=b[4],a=b[3]-u*b[4],d=b[2]-j*b[3],i=b[1]-l*b[2],c=b[0]-x*b[1],n=g[4],p=g[3]-u*g[4],h=g[2]-j*g[3],y=g[1]-l*g[2],m=g[0]-x*g[1]):(u=v[0],j=v[1],l=v[2],x=v[3],w=v[4],e=b[0],a=b[1]-u*b[0],d=b[2]-j*b[1],i=b[3]-l*b[2],c=b[4]-x*b[3],n=g[0],p=g[1]-u*g[0],h=g[2]-j*g[1],y=g[3]-l*g[2],m=g[4]-x*g[3]),P=r.offset,k=o.offset,f=r.data,t=o.data,B=0;B<w;B++){for(q=0;q<x;q++){for(A=0;A<l;A++){for(z=0;z<j;z++){for(E=0;E<u;E++)t[k]=s(f[P]),P+=e,k+=n;P+=a,k+=p}P+=d,k+=h}P+=i,k+=y}P+=c,k+=m}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G;for(j=r.shape,k=r.strides,E=o.strides,"row-major"===r.order?(l=j[5],x=j[4],w=j[3],b=j[2],g=j[1],P=j[0],e=k[5],a=k[4]-l*k[5],d=k[3]-x*k[4],i=k[2]-w*k[3],c=k[1]-b*k[2],n=k[0]-g*k[1],p=E[5],h=E[4]-l*E[5],y=E[3]-x*E[4],m=E[2]-w*E[3],v=E[1]-b*E[2],u=E[0]-g*E[1]):(l=j[0],x=j[1],w=j[2],b=j[3],g=j[4],P=j[5],e=k[0],a=k[1]-l*k[0],d=k[2]-x*k[1],i=k[3]-w*k[2],c=k[4]-b*k[3],n=k[5]-g*k[4],p=E[0],h=E[1]-l*E[0],y=E[2]-x*E[1],m=E[3]-w*E[2],v=E[4]-b*E[3],u=E[5]-g*E[4]),z=r.offset,A=o.offset,f=r.data,t=o.data,G=0;G<P;G++){for(F=0;F<g;F++){for(D=0;D<b;D++){for(C=0;C<w;C++){for(B=0;B<x;B++){for(q=0;q<l;q++)t[A]=s(f[z]),z+=e,A+=p;z+=a,A+=h}z+=d,A+=y}z+=i,A+=m}z+=c,A+=v}z+=n,A+=u}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K;for(x=r.shape,A=r.strides,q=o.strides,"row-major"===r.order?(w=x[6],b=x[5],g=x[4],P=x[3],k=x[2],E=x[1],z=x[0],e=A[6],a=A[5]-w*A[6],d=A[4]-b*A[5],i=A[3]-g*A[4],c=A[2]-P*A[3],n=A[1]-k*A[2],p=A[0]-E*A[1],h=q[6],y=q[5]-w*q[6],m=q[4]-b*q[5],v=q[3]-g*q[4],u=q[2]-P*q[3],j=q[1]-k*q[2],l=q[0]-E*q[1]):(w=x[0],b=x[1],g=x[2],P=x[3],k=x[4],E=x[5],z=x[6],e=A[0],a=A[1]-w*A[0],d=A[2]-b*A[1],i=A[3]-g*A[2],c=A[4]-P*A[3],n=A[5]-k*A[4],p=A[6]-E*A[5],h=q[0],y=q[1]-w*q[0],m=q[2]-b*q[1],v=q[3]-g*q[2],u=q[4]-P*q[3],j=q[5]-k*q[4],l=q[6]-E*q[5]),B=r.offset,C=o.offset,f=r.data,t=o.data,K=0;K<z;K++){for(J=0;J<E;J++){for(I=0;I<k;I++){for(H=0;H<P;H++){for(G=0;G<g;G++){for(F=0;F<b;F++){for(D=0;D<w;D++)t[C]=s(f[B]),B+=e,C+=h;B+=a,C+=y}B+=d,C+=m}B+=i,C+=v}B+=c,C+=u}B+=n,C+=j}B+=p,C+=l}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O;for(b=r.shape,C=r.strides,D=o.strides,"row-major"===r.order?(g=b[7],P=b[6],k=b[5],E=b[4],z=b[3],A=b[2],q=b[1],B=b[0],e=C[7],a=C[6]-g*C[7],d=C[5]-P*C[6],i=C[4]-k*C[5],c=C[3]-E*C[4],n=C[2]-z*C[3],p=C[1]-A*C[2],h=C[0]-q*C[1],y=D[7],m=D[6]-g*D[7],v=D[5]-P*D[6],u=D[4]-k*D[5],j=D[3]-E*D[4],l=D[2]-z*D[3],x=D[1]-A*D[2],w=D[0]-q*D[1]):(g=b[0],P=b[1],k=b[2],E=b[3],z=b[4],A=b[5],q=b[6],B=b[7],e=C[0],a=C[1]-g*C[0],d=C[2]-P*C[1],i=C[3]-k*C[2],c=C[4]-E*C[3],n=C[5]-z*C[4],p=C[6]-A*C[5],h=C[7]-q*C[6],y=D[0],m=D[1]-g*D[0],v=D[2]-P*D[1],u=D[3]-k*D[2],j=D[4]-E*D[3],l=D[5]-z*D[4],x=D[6]-A*D[5],w=D[7]-q*D[6]),F=r.offset,G=o.offset,f=r.data,t=o.data,O=0;O<B;O++){for(N=0;N<q;N++){for(M=0;M<A;M++){for(L=0;L<z;L++){for(K=0;K<E;K++){for(J=0;J<k;J++){for(I=0;I<P;I++){for(H=0;H<g;H++)t[G]=s(f[F]),F+=e,G+=y;F+=a,G+=m}F+=d,G+=v}F+=i,G+=u}F+=c,G+=j}F+=n,G+=l}F+=p,G+=x}F+=h,G+=w}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T;for(P=r.shape,G=r.strides,H=o.strides,"row-major"===r.order?(k=P[8],E=P[7],z=P[6],A=P[5],q=P[4],B=P[3],C=P[2],D=P[1],F=P[0],e=G[8],a=G[7]-k*G[8],d=G[6]-E*G[7],i=G[5]-z*G[6],c=G[4]-A*G[5],n=G[3]-q*G[4],p=G[2]-B*G[3],h=G[1]-C*G[2],y=G[0]-D*G[1],m=H[8],v=H[7]-k*H[8],u=H[6]-E*H[7],j=H[5]-z*H[6],l=H[4]-A*H[5],x=H[3]-q*H[4],w=H[2]-B*H[3],b=H[1]-C*H[2],g=H[0]-D*H[1]):(k=P[0],E=P[1],z=P[2],A=P[3],q=P[4],B=P[5],C=P[6],D=P[7],F=P[8],e=G[0],a=G[1]-k*G[0],d=G[2]-E*G[1],i=G[3]-z*G[2],c=G[4]-A*G[3],n=G[5]-q*G[4],p=G[6]-B*G[5],h=G[7]-C*G[6],y=G[8]-D*G[7],m=H[0],v=H[1]-k*H[0],u=H[2]-E*H[1],j=H[3]-z*H[2],l=H[4]-A*H[3],x=H[5]-q*H[4],w=H[6]-B*H[5],b=H[7]-C*H[6],g=H[8]-D*H[7]),I=r.offset,J=o.offset,f=r.data,t=o.data,T=0;T<F;T++){for(S=0;S<D;S++){for(R=0;R<C;R++){for(Q=0;Q<B;Q++){for(O=0;O<q;O++){for(N=0;N<A;N++){for(M=0;M<z;M++){for(L=0;L<E;L++){for(K=0;K<k;K++)t[J]=s(f[I]),I+=e,J+=m;I+=a,J+=v}I+=d,J+=u}I+=i,J+=j}I+=c,J+=l}I+=n,J+=x}I+=p,J+=w}I+=h,J+=b}I+=y,J+=g}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X;for(E=r.shape,J=r.strides,K=o.strides,"row-major"===r.order?(z=E[9],A=E[8],q=E[7],B=E[6],C=E[5],D=E[4],F=E[3],G=E[2],H=E[1],I=E[0],e=J[9],a=J[8]-z*J[9],d=J[7]-A*J[8],i=J[6]-q*J[7],c=J[5]-B*J[6],n=J[4]-C*J[5],p=J[3]-D*J[4],h=J[2]-F*J[3],y=J[1]-G*J[2],m=J[0]-H*J[1],v=K[9],u=K[8]-z*K[9],j=K[7]-A*K[8],l=K[6]-q*K[7],x=K[5]-B*K[6],w=K[4]-C*K[5],b=K[3]-D*K[4],g=K[2]-F*K[3],P=K[1]-G*K[2],k=K[0]-H*K[1]):(z=E[0],A=E[1],q=E[2],B=E[3],C=E[4],D=E[5],F=E[6],G=E[7],H=E[8],I=E[9],e=J[0],a=J[1]-z*J[0],d=J[2]-A*J[1],i=J[3]-q*J[2],c=J[4]-B*J[3],n=J[5]-C*J[4],p=J[6]-D*J[5],h=J[7]-F*J[6],y=J[8]-G*J[7],m=J[9]-H*J[8],v=K[0],u=K[1]-z*K[0],j=K[2]-A*K[1],l=K[3]-q*K[2],x=K[4]-B*K[3],w=K[5]-C*K[4],b=K[6]-D*K[5],g=K[7]-F*K[6],P=K[8]-G*K[7],k=K[9]-H*K[8]),L=r.offset,M=o.offset,f=r.data,t=o.data,X=0;X<I;X++){for(W=0;W<H;W++){for(V=0;V<G;V++){for(U=0;U<F;U++){for(T=0;T<D;T++){for(S=0;S<C;S++){for(R=0;R<B;R++){for(Q=0;Q<q;Q++){for(O=0;O<A;O++){for(N=0;N<z;N++)t[M]=s(f[L]),L+=e,M+=v;L+=a,M+=u}L+=d,M+=j}L+=i,M+=l}L+=c,M+=x}L+=n,M+=w}L+=p,M+=b}L+=h,M+=g}L+=y,M+=P}L+=m,M+=k}}],c=[function(r,o,s){o.accessors[1](o.data,o.offset,s(r.accessors[0](r.data,r.offset)))},function(r,o,s){var f,t,e,a,d,i,c,n,p,h;for(c=r.shape[0],d=r.strides[0],i=o.strides[0],n=r.offset,p=o.offset,f=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],h=0;h<c;h++)a(t,p,s(e(f,n))),n+=d,p+=i},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x;for(p=r.shape,m=r.strides,v=o.strides,"row-major"===r.order?(h=p[1],y=p[0],d=m[1],i=m[0]-h*m[1],c=v[1],n=v[0]-h*v[1]):(h=p[0],y=p[1],d=m[0],i=m[1]-h*m[0],c=v[0],n=v[1]-h*v[0]),u=r.offset,j=o.offset,f=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],x=0;x<y;x++){for(l=0;l<h;l++)a(t,j,s(e(f,u))),u+=d,j+=c;u+=i,j+=n}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P;for(y=r.shape,j=r.strides,l=o.strides,"row-major"===r.order?(m=y[2],v=y[1],u=y[0],d=j[2],i=j[1]-m*j[2],c=j[0]-v*j[1],n=l[2],p=l[1]-m*l[2],h=l[0]-v*l[1]):(m=y[0],v=y[1],u=y[2],d=j[0],i=j[1]-m*j[0],c=j[2]-v*j[1],n=l[0],p=l[1]-m*l[0],h=l[2]-v*l[1]),x=r.offset,w=o.offset,f=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],P=0;P<u;P++){for(g=0;g<v;g++){for(b=0;b<m;b++)a(t,w,s(e(f,x))),x+=d,w+=n;x+=i,w+=p}x+=c,w+=h}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A;for(v=r.shape,w=r.strides,b=o.strides,"row-major"===r.order?(u=v[3],j=v[2],l=v[1],x=v[0],d=w[3],i=w[2]-u*w[3],c=w[1]-j*w[2],n=w[0]-l*w[1],p=b[3],h=b[2]-u*b[3],y=b[1]-j*b[2],m=b[0]-l*b[1]):(u=v[0],j=v[1],l=v[2],x=v[3],d=w[0],i=w[1]-u*w[0],c=w[2]-j*w[1],n=w[3]-l*w[2],p=b[0],h=b[1]-u*b[0],y=b[2]-j*b[1],m=b[3]-l*b[2]),g=r.offset,P=o.offset,f=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],A=0;A<x;A++){for(z=0;z<l;z++){for(E=0;E<j;E++){for(k=0;k<u;k++)a(t,P,s(e(f,g))),g+=d,P+=p;g+=i,P+=h}g+=c,P+=y}g+=n,P+=m}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D;for(j=r.shape,P=r.strides,k=o.strides,"row-major"===r.order?(l=j[4],x=j[3],w=j[2],b=j[1],g=j[0],d=P[4],i=P[3]-l*P[4],c=P[2]-x*P[3],n=P[1]-w*P[2],p=P[0]-b*P[1],h=k[4],y=k[3]-l*k[4],m=k[2]-x*k[3],v=k[1]-w*k[2],u=k[0]-b*k[1]):(l=j[0],x=j[1],w=j[2],b=j[3],g=j[4],d=P[0],i=P[1]-l*P[0],c=P[2]-x*P[1],n=P[3]-w*P[2],p=P[4]-b*P[3],h=k[0],y=k[1]-l*k[0],m=k[2]-x*k[1],v=k[3]-w*k[2],u=k[4]-b*k[3]),E=r.offset,z=o.offset,f=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],D=0;D<g;D++){for(C=0;C<b;C++){for(B=0;B<w;B++){for(q=0;q<x;q++){for(A=0;A<l;A++)a(t,z,s(e(f,E))),E+=d,z+=h;E+=i,z+=y}E+=c,z+=m}E+=n,z+=v}E+=p,z+=u}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I;for(x=r.shape,z=r.strides,A=o.strides,"row-major"===r.order?(w=x[5],b=x[4],g=x[3],P=x[2],k=x[1],E=x[0],d=z[5],i=z[4]-w*z[5],c=z[3]-b*z[4],n=z[2]-g*z[3],p=z[1]-P*z[2],h=z[0]-k*z[1],y=A[5],m=A[4]-w*A[5],v=A[3]-b*A[4],u=A[2]-g*A[3],j=A[1]-P*A[2],l=A[0]-k*A[1]):(w=x[0],b=x[1],g=x[2],P=x[3],k=x[4],E=x[5],d=z[0],i=z[1]-w*z[0],c=z[2]-b*z[1],n=z[3]-g*z[2],p=z[4]-P*z[3],h=z[5]-k*z[4],y=A[0],m=A[1]-w*A[0],v=A[2]-b*A[1],u=A[3]-g*A[2],j=A[4]-P*A[3],l=A[5]-k*A[4]),q=r.offset,B=o.offset,f=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],I=0;I<E;I++){for(H=0;H<k;H++){for(G=0;G<P;G++){for(F=0;F<g;F++){for(D=0;D<b;D++){for(C=0;C<w;C++)a(t,B,s(e(f,q))),q+=d,B+=y;q+=i,B+=m}q+=c,B+=v}q+=n,B+=u}q+=p,B+=j}q+=h,B+=l}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M;for(b=r.shape,B=r.strides,C=o.strides,"row-major"===r.order?(g=b[6],P=b[5],k=b[4],E=b[3],z=b[2],A=b[1],q=b[0],d=B[6],i=B[5]-g*B[6],c=B[4]-P*B[5],n=B[3]-k*B[4],p=B[2]-E*B[3],h=B[1]-z*B[2],y=B[0]-A*B[1],m=C[6],v=C[5]-g*C[6],u=C[4]-P*C[5],j=C[3]-k*C[4],l=C[2]-E*C[3],x=C[1]-z*C[2],w=C[0]-A*C[1]):(g=b[0],P=b[1],k=b[2],E=b[3],z=b[4],A=b[5],q=b[6],d=B[0],i=B[1]-g*B[0],c=B[2]-P*B[1],n=B[3]-k*B[2],p=B[4]-E*B[3],h=B[5]-z*B[4],y=B[6]-A*B[5],m=C[0],v=C[1]-g*C[0],u=C[2]-P*C[1],j=C[3]-k*C[2],l=C[4]-E*C[3],x=C[5]-z*C[4],w=C[6]-A*C[5]),D=r.offset,F=o.offset,f=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],M=0;M<q;M++){for(L=0;L<A;L++){for(K=0;K<z;K++){for(J=0;J<E;J++){for(I=0;I<k;I++){for(H=0;H<P;H++){for(G=0;G<g;G++)a(t,F,s(e(f,D))),D+=d,F+=m;D+=i,F+=v}D+=c,F+=u}D+=n,F+=j}D+=p,F+=l}D+=h,F+=x}D+=y,F+=w}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R;for(P=r.shape,F=r.strides,G=o.strides,"row-major"===r.order?(k=P[7],E=P[6],z=P[5],A=P[4],q=P[3],B=P[2],C=P[1],D=P[0],d=F[7],i=F[6]-k*F[7],c=F[5]-E*F[6],n=F[4]-z*F[5],p=F[3]-A*F[4],h=F[2]-q*F[3],y=F[1]-B*F[2],m=F[0]-C*F[1],v=G[7],u=G[6]-k*G[7],j=G[5]-E*G[6],l=G[4]-z*G[5],x=G[3]-A*G[4],w=G[2]-q*G[3],b=G[1]-B*G[2],g=G[0]-C*G[1]):(k=P[0],E=P[1],z=P[2],A=P[3],q=P[4],B=P[5],C=P[6],D=P[7],d=F[0],i=F[1]-k*F[0],c=F[2]-E*F[1],n=F[3]-z*F[2],p=F[4]-A*F[3],h=F[5]-q*F[4],y=F[6]-B*F[5],m=F[7]-C*F[6],v=G[0],u=G[1]-k*G[0],j=G[2]-E*G[1],l=G[3]-z*G[2],x=G[4]-A*G[3],w=G[5]-q*G[4],b=G[6]-B*G[5],g=G[7]-C*G[6]),H=r.offset,I=o.offset,f=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],R=0;R<D;R++){for(Q=0;Q<C;Q++){for(O=0;O<B;O++){for(N=0;N<q;N++){for(M=0;M<A;M++){for(L=0;L<z;L++){for(K=0;K<E;K++){for(J=0;J<k;J++)a(t,I,s(e(f,H))),H+=d,I+=v;H+=i,I+=u}H+=c,I+=j}H+=n,I+=l}H+=p,I+=x}H+=h,I+=w}H+=y,I+=b}H+=m,I+=g}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V;for(E=r.shape,I=r.strides,J=o.strides,"row-major"===r.order?(z=E[8],A=E[7],q=E[6],B=E[5],C=E[4],D=E[3],F=E[2],G=E[1],H=E[0],d=I[8],i=I[7]-z*I[8],c=I[6]-A*I[7],n=I[5]-q*I[6],p=I[4]-B*I[5],h=I[3]-C*I[4],y=I[2]-D*I[3],m=I[1]-F*I[2],v=I[0]-G*I[1],u=J[8],j=J[7]-z*J[8],l=J[6]-A*J[7],x=J[5]-q*J[6],w=J[4]-B*J[5],b=J[3]-C*J[4],g=J[2]-D*J[3],P=J[1]-F*J[2],k=J[0]-G*J[1]):(z=E[0],A=E[1],q=E[2],B=E[3],C=E[4],D=E[5],F=E[6],G=E[7],H=E[8],d=I[0],i=I[1]-z*I[0],c=I[2]-A*I[1],n=I[3]-q*I[2],p=I[4]-B*I[3],h=I[5]-C*I[4],y=I[6]-D*I[5],m=I[7]-F*I[6],v=I[8]-G*I[7],u=J[0],j=J[1]-z*J[0],l=J[2]-A*J[1],x=J[3]-q*J[2],w=J[4]-B*J[3],b=J[5]-C*J[4],g=J[6]-D*J[5],P=J[7]-F*J[6],k=J[8]-G*J[7]),K=r.offset,L=o.offset,f=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],V=0;V<H;V++){for(U=0;U<G;U++){for(T=0;T<F;T++){for(S=0;S<D;S++){for(R=0;R<C;R++){for(Q=0;Q<B;Q++){for(O=0;O<q;O++){for(N=0;N<A;N++){for(M=0;M<z;M++)a(t,L,s(e(f,K))),K+=d,L+=u;K+=i,L+=j}K+=c,L+=l}K+=n,L+=x}K+=p,L+=w}K+=h,L+=b}K+=y,L+=g}K+=m,L+=P}K+=v,L+=k}},function(r,o,s){var f,t,e,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z;for(A=r.shape,L=r.strides,M=o.strides,"row-major"===r.order?(q=A[9],B=A[8],C=A[7],D=A[6],F=A[5],G=A[4],H=A[3],I=A[2],J=A[1],K=A[0],d=L[9],i=L[8]-q*L[9],c=L[7]-B*L[8],n=L[6]-C*L[7],p=L[5]-D*L[6],h=L[4]-F*L[5],y=L[3]-G*L[4],m=L[2]-H*L[3],v=L[1]-I*L[2],u=L[0]-J*L[1],j=M[9],l=M[8]-q*M[9],x=M[7]-B*M[8],w=M[6]-C*M[7],b=M[5]-D*M[6],g=M[4]-F*M[5],P=M[3]-G*M[4],k=M[2]-H*M[3],E=M[1]-I*M[2],z=M[0]-J*M[1]):(q=A[0],B=A[1],C=A[2],D=A[3],F=A[4],G=A[5],H=A[6],I=A[7],J=A[8],K=A[9],d=L[0],i=L[1]-q*L[0],c=L[2]-B*L[1],n=L[3]-C*L[2],p=L[4]-D*L[3],h=L[5]-F*L[4],y=L[6]-G*L[5],m=L[7]-H*L[6],v=L[8]-I*L[7],u=L[9]-J*L[8],j=M[0],l=M[1]-q*M[0],x=M[2]-B*M[1],w=M[3]-C*M[2],b=M[4]-D*M[3],g=M[5]-F*M[4],P=M[6]-G*M[5],k=M[7]-H*M[6],E=M[8]-I*M[7],z=M[9]-J*M[8]),N=r.offset,O=o.offset,f=r.data,t=o.data,e=r.accessors[0],a=o.accessors[1],Z=0;Z<K;Z++){for(Y=0;Y<J;Y++){for(X=0;X<I;X++){for(W=0;W<H;W++){for(V=0;V<G;V++){for(U=0;U<F;U++){for(T=0;T<D;T++){for(S=0;S<C;S++){for(R=0;R<B;R++){for(Q=0;Q<q;Q++)a(t,O,s(e(f,N))),N+=d,O+=j;N+=i,O+=l}N+=c,O+=x}N+=n,O+=w}N+=p,O+=b}N+=h,O+=g}N+=y,O+=P}N+=m,O+=k}N+=v,O+=E}N+=u,O+=z}}],n=[function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A;for(m=(A=t(r.shape,r.strides,o.strides)).sh,j=A.sx,l=A.sy,f=e(r.dtype,o.dtype),x=r.offset,w=o.offset,a=r.data,d=o.data,i=j[0],n=l[0],z=m[1];z>0;)for(z<f?(u=z,z=0):(u=f,z-=f),h=x+z*j[1],y=w+z*l[1],E=m[0];E>0;)for(E<f?(v=E,E=0):(v=f,E-=f),b=h+E*j[0],g=y+E*l[0],c=j[1]-v*j[0],p=l[1]-v*l[0],k=0;k<u;k++){for(P=0;P<v;P++)d[g]=s(a[b]),b+=i,g+=n;b+=c,g+=p}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H;for(l=(H=t(r.shape,r.strides,o.strides)).sh,g=H.sx,P=H.sy,f=e(r.dtype,o.dtype),k=r.offset,E=o.offset,a=r.data,d=o.data,i=g[0],p=P[0],G=l[2];G>0;)for(G<f?(b=G,G=0):(b=f,G-=f),v=k+G*g[2],j=E+G*P[2],F=l[1];F>0;)for(F<f?(w=F,F=0):(w=f,F-=f),n=g[2]-w*g[1],y=P[2]-w*P[1],m=v+F*g[1],u=j+F*P[1],D=l[0];D>0;)for(D<f?(x=D,D=0):(x=f,D-=f),z=m+D*g[0],A=u+D*P[0],c=g[1]-x*g[0],h=P[1]-x*P[0],C=0;C<b;C++){for(B=0;B<w;B++){for(q=0;q<x;q++)d[A]=s(a[z]),z+=i,A+=p;z+=c,A+=h}z+=n,A+=y}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O;for(g=(O=t(r.shape,r.strides,o.strides)).sh,A=O.sx,q=O.sy,f=e(r.dtype,o.dtype),B=r.offset,C=o.offset,a=r.data,d=o.data,i=A[0],h=q[0],N=g[3];N>0;)for(N<f?(z=N,N=0):(z=f,N-=f),l=B+N*A[3],b=C+N*q[3],M=g[2];M>0;)for(M<f?(E=M,M=0):(E=f,M-=f),p=A[3]-E*A[2],v=q[3]-E*q[2],j=l+M*A[2],w=b+M*q[2],L=g[1];L>0;)for(L<f?(k=L,L=0):(k=f,L-=f),n=A[2]-k*A[1],m=q[2]-k*q[1],u=j+L*A[1],x=w+L*q[1],K=g[0];K>0;)for(K<f?(P=K,K=0):(P=f,K-=f),D=u+K*A[0],F=x+K*q[0],c=A[1]-P*A[0],y=q[1]-P*q[0],J=0;J<z;J++){for(I=0;I<E;I++){for(H=0;H<k;H++){for(G=0;G<P;G++)d[F]=s(a[D]),D+=i,F+=h;D+=c,F+=y}D+=n,F+=m}D+=p,F+=v}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W;for(z=(W=t(r.shape,r.strides,o.strides)).sh,F=W.sx,G=W.sy,f=e(r.dtype,o.dtype),H=r.offset,I=o.offset,a=r.data,d=o.data,i=F[0],y=G[0],V=z[4];V>0;)for(V<f?(D=V,V=0):(D=f,V-=f),b=H+V*F[4],E=I+V*G[4],U=z[3];U>0;)for(U<f?(C=U,U=0):(C=f,U-=f),h=F[4]-C*F[3],j=G[4]-C*G[3],w=b+U*F[3],k=E+U*G[3],T=z[2];T>0;)for(T<f?(B=T,T=0):(B=f,T-=f),p=F[3]-B*F[2],u=G[3]-B*G[2],x=w+T*F[2],P=k+T*G[2],S=z[1];S>0;)for(S<f?(q=S,S=0):(q=f,S-=f),n=F[2]-q*F[1],v=G[2]-q*G[1],l=x+S*F[1],g=P+S*G[1],R=z[0];R>0;)for(R<f?(A=R,R=0):(A=f,R-=f),J=l+R*F[0],K=g+R*G[0],c=F[1]-A*F[0],m=G[1]-A*G[0],Q=0;Q<D;Q++){for(O=0;O<C;O++){for(N=0;N<B;N++){for(M=0;M<q;M++){for(L=0;L<A;L++)d[K]=s(a[J]),J+=i,K+=y;J+=c,K+=m}J+=n,K+=v}J+=p,K+=u}J+=h,K+=j}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or;for(C=(or=t(r.shape,r.strides,o.strides)).sh,K=or.sx,L=or.sy,f=e(r.dtype,o.dtype),M=r.offset,N=o.offset,a=r.data,d=o.data,i=K[0],m=L[0],rr=C[5];rr>0;)for(rr<f?(J=rr,rr=0):(J=f,rr-=f),k=M+rr*K[5],B=N+rr*L[5],_=C[4];_>0;)for(_<f?(I=_,_=0):(I=f,_-=f),y=K[5]-I*K[4],x=L[5]-I*L[4],P=k+_*K[4],q=B+_*L[4],$=C[3];$>0;)for($<f?(H=$,$=0):(H=f,$-=f),h=K[4]-H*K[3],l=L[4]-H*L[3],g=P+$*K[3],A=q+$*L[3],Z=C[2];Z>0;)for(Z<f?(G=Z,Z=0):(G=f,Z-=f),p=K[3]-G*K[2],j=L[3]-G*L[2],b=g+Z*K[2],z=A+Z*L[2],Y=C[1];Y>0;)for(Y<f?(F=Y,Y=0):(F=f,Y-=f),n=K[2]-F*K[1],u=L[2]-F*L[1],w=b+Y*K[1],E=z+Y*L[1],X=C[0];X>0;)for(X<f?(D=X,X=0):(D=f,X-=f),O=w+X*K[0],Q=E+X*L[0],c=K[1]-D*K[0],v=L[1]-D*L[0],W=0;W<J;W++){for(V=0;V<I;V++){for(U=0;U<H;U++){for(T=0;T<G;T++){for(S=0;S<F;S++){for(R=0;R<D;R++)d[Q]=s(a[O]),O+=i,Q+=m;O+=c,Q+=v}O+=n,Q+=u}O+=p,Q+=j}O+=h,Q+=l}O+=y,Q+=x}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir;for(H=(ir=t(r.shape,r.strides,o.strides)).sh,Q=ir.sx,R=ir.sy,f=e(r.dtype,o.dtype),S=r.offset,T=o.offset,a=r.data,d=o.data,i=Q[0],v=R[0],dr=H[6];dr>0;)for(dr<f?(O=dr,dr=0):(O=f,dr-=f),A=S+dr*Q[6],G=T+dr*R[6],ar=H[5];ar>0;)for(ar<f?(N=ar,ar=0):(N=f,ar-=f),m=Q[6]-N*Q[5],b=R[6]-N*R[5],z=A+ar*Q[5],F=G+ar*R[5],er=H[4];er>0;)for(er<f?(M=er,er=0):(M=f,er-=f),y=Q[5]-M*Q[4],w=R[5]-M*R[4],E=z+er*Q[4],D=F+er*R[4],tr=H[3];tr>0;)for(tr<f?(L=tr,tr=0):(L=f,tr-=f),h=Q[4]-L*Q[3],x=R[4]-L*R[3],k=E+tr*Q[3],C=D+tr*R[3],fr=H[2];fr>0;)for(fr<f?(K=fr,fr=0):(K=f,fr-=f),p=Q[3]-K*Q[2],l=R[3]-K*R[2],P=k+fr*Q[2],B=C+fr*R[2],sr=H[1];sr>0;)for(sr<f?(J=sr,sr=0):(J=f,sr-=f),n=Q[2]-J*Q[1],j=R[2]-J*R[1],g=P+sr*Q[1],q=B+sr*R[1],or=H[0];or>0;)for(or<f?(I=or,or=0):(I=f,or-=f),U=g+or*Q[0],V=q+or*R[0],c=Q[1]-I*Q[0],u=R[1]-I*R[0],rr=0;rr<O;rr++){for(_=0;_<N;_++){for($=0;$<M;$++){for(Z=0;Z<L;Z++){for(Y=0;Y<K;Y++){for(X=0;X<J;X++){for(W=0;W<I;W++)d[V]=s(a[U]),U+=i,V+=v;U+=c,V+=u}U+=n,V+=j}U+=p,V+=l}U+=h,V+=x}U+=y,V+=w}U+=m,V+=b}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,yr,mr,vr;for(L=(vr=t(r.shape,r.strides,o.strides)).sh,V=vr.sx,W=vr.sy,f=e(r.dtype,o.dtype),X=r.offset,Y=o.offset,a=r.data,d=o.data,i=V[0],u=W[0],mr=L[7];mr>0;)for(mr<f?(U=mr,mr=0):(U=f,mr-=f),C=X+mr*V[7],K=Y+mr*W[7],yr=L[6];yr>0;)for(yr<f?(T=yr,yr=0):(T=f,yr-=f),v=V[7]-T*V[6],P=W[7]-T*W[6],B=C+yr*V[6],J=K+yr*W[6],hr=L[5];hr>0;)for(hr<f?(S=hr,hr=0):(S=f,hr-=f),m=V[6]-S*V[5],g=W[6]-S*W[5],q=B+hr*V[5],I=J+hr*W[5],pr=L[4];pr>0;)for(pr<f?(R=pr,pr=0):(R=f,pr-=f),y=V[5]-R*V[4],b=W[5]-R*W[4],A=q+pr*V[4],H=I+pr*W[4],nr=L[3];nr>0;)for(nr<f?(Q=nr,nr=0):(Q=f,nr-=f),h=V[4]-Q*V[3],w=W[4]-Q*W[3],z=A+nr*V[3],G=H+nr*W[3],cr=L[2];cr>0;)for(cr<f?(O=cr,cr=0):(O=f,cr-=f),p=V[3]-O*V[2],x=W[3]-O*W[2],E=z+cr*V[2],F=G+cr*W[2],ir=L[1];ir>0;)for(ir<f?(N=ir,ir=0):(N=f,ir-=f),n=V[2]-N*V[1],l=W[2]-N*W[1],k=E+ir*V[1],D=F+ir*W[1],dr=L[0];dr>0;)for(dr<f?(M=dr,dr=0):(M=f,dr-=f),Z=k+dr*V[0],$=D+dr*W[0],c=V[1]-M*V[0],j=W[1]-M*W[0],ar=0;ar<U;ar++){for(er=0;er<T;er++){for(tr=0;tr<S;tr++){for(fr=0;fr<R;fr++){for(sr=0;sr<Q;sr++){for(or=0;or<O;or++){for(rr=0;rr<N;rr++){for(_=0;_<M;_++)d[$]=s(a[Z]),Z+=i,$+=u;Z+=c,$+=j}Z+=n,$+=l}Z+=p,$+=x}Z+=h,$+=w}Z+=y,$+=b}Z+=m,$+=g}Z+=v,$+=P}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,yr,mr,vr,ur,jr,lr,xr,wr,br,gr;for(Q=(gr=t(r.shape,r.strides,o.strides)).sh,$=gr.sx,_=gr.sy,f=e(r.dtype,o.dtype),rr=r.offset,or=o.offset,a=r.data,d=o.data,i=$[0],j=_[0],br=Q[8];br>0;)for(br<f?(Z=br,br=0):(Z=f,br-=f),G=rr+br*$[8],O=or+br*_[8],wr=Q[7];wr>0;)for(wr<f?(Y=wr,wr=0):(Y=f,wr-=f),u=$[8]-Y*$[7],E=_[8]-Y*_[7],F=G+wr*$[7],N=O+wr*_[7],xr=Q[6];xr>0;)for(xr<f?(X=xr,xr=0):(X=f,xr-=f),v=$[7]-X*$[6],k=_[7]-X*_[6],D=F+xr*$[6],M=N+xr*_[6],lr=Q[5];lr>0;)for(lr<f?(W=lr,lr=0):(W=f,lr-=f),m=$[6]-W*$[5],P=_[6]-W*_[5],C=D+lr*$[5],L=M+lr*_[5],jr=Q[4];jr>0;)for(jr<f?(V=jr,jr=0):(V=f,jr-=f),y=$[5]-V*$[4],g=_[5]-V*_[4],B=C+jr*$[4],K=L+jr*_[4],ur=Q[3];ur>0;)for(ur<f?(U=ur,ur=0):(U=f,ur-=f),h=$[4]-U*$[3],b=_[4]-U*_[3],q=B+ur*$[3],J=K+ur*_[3],vr=Q[2];vr>0;)for(vr<f?(T=vr,vr=0):(T=f,vr-=f),p=$[3]-T*$[2],w=_[3]-T*_[2],A=q+vr*$[2],I=J+vr*_[2],mr=Q[1];mr>0;)for(mr<f?(S=mr,mr=0):(S=f,mr-=f),n=$[2]-S*$[1],x=_[2]-S*_[1],z=A+mr*$[1],H=I+mr*_[1],yr=Q[0];yr>0;)for(yr<f?(R=yr,yr=0):(R=f,yr-=f),sr=z+yr*$[0],fr=H+yr*_[0],c=$[1]-R*$[0],l=_[1]-R*_[0],hr=0;hr<Z;hr++){for(pr=0;pr<Y;pr++){for(nr=0;nr<X;nr++){for(cr=0;cr<W;cr++){for(ir=0;ir<V;ir++){for(dr=0;dr<U;dr++){for(ar=0;ar<T;ar++){for(er=0;er<S;er++){for(tr=0;tr<R;tr++)d[fr]=s(a[sr]),sr+=i,fr+=j;sr+=c,fr+=l}sr+=n,fr+=x}sr+=p,fr+=w}sr+=h,fr+=b}sr+=y,fr+=g}sr+=m,fr+=P}sr+=v,fr+=k}sr+=u,fr+=E}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,yr,mr,vr,ur,jr,lr,xr,wr,br,gr,Pr,kr,Er,zr,Ar,qr,Br;for(U=(Br=t(r.shape,r.strides,o.strides)).sh,fr=Br.sx,tr=Br.sy,f=e(r.dtype,o.dtype),er=r.offset,ar=o.offset,a=r.data,d=o.data,i=fr[0],l=tr[0],qr=U[9];qr>0;)for(qr<f?(sr=qr,qr=0):(sr=f,qr-=f),J=er+qr*fr[9],T=ar+qr*tr[9],Ar=U[8];Ar>0;)for(Ar<f?(or=Ar,Ar=0):(or=f,Ar-=f),j=fr[9]-or*fr[8],A=tr[9]-or*tr[8],I=J+Ar*fr[8],S=T+Ar*tr[8],zr=U[7];zr>0;)for(zr<f?(rr=zr,zr=0):(rr=f,zr-=f),u=fr[8]-rr*fr[7],z=tr[8]-rr*tr[7],H=I+zr*fr[7],R=S+zr*tr[7],Er=U[6];Er>0;)for(Er<f?(_=Er,Er=0):(_=f,Er-=f),v=fr[7]-_*fr[6],E=tr[7]-_*tr[6],G=H+Er*fr[6],Q=R+Er*tr[6],kr=U[5];kr>0;)for(kr<f?($=kr,kr=0):($=f,kr-=f),m=fr[6]-$*fr[5],k=tr[6]-$*tr[5],F=G+kr*fr[5],O=Q+kr*tr[5],Pr=U[4];Pr>0;)for(Pr<f?(Z=Pr,Pr=0):(Z=f,Pr-=f),y=fr[5]-Z*fr[4],P=tr[5]-Z*tr[4],D=F+Pr*fr[4],N=O+Pr*tr[4],gr=U[3];gr>0;)for(gr<f?(Y=gr,gr=0):(Y=f,gr-=f),h=fr[4]-Y*fr[3],g=tr[4]-Y*tr[3],C=D+gr*fr[3],M=N+gr*tr[3],br=U[2];br>0;)for(br<f?(X=br,br=0):(X=f,br-=f),p=fr[3]-X*fr[2],b=tr[3]-X*tr[2],B=C+br*fr[2],L=M+br*tr[2],wr=U[1];wr>0;)for(wr<f?(W=wr,wr=0):(W=f,wr-=f),n=fr[2]-W*fr[1],w=tr[2]-W*tr[1],q=B+wr*fr[1],K=L+wr*tr[1],xr=U[0];xr>0;)for(xr<f?(V=xr,xr=0):(V=f,xr-=f),dr=q+xr*fr[0],ir=K+xr*tr[0],c=fr[1]-V*fr[0],x=tr[1]-V*tr[0],lr=0;lr<sr;lr++){for(jr=0;jr<or;jr++){for(ur=0;ur<rr;ur++){for(vr=0;vr<_;vr++){for(mr=0;mr<$;mr++){for(yr=0;yr<Z;yr++){for(hr=0;hr<Y;hr++){for(pr=0;pr<X;pr++){for(nr=0;nr<W;nr++){for(cr=0;cr<V;cr++)d[ir]=s(a[dr]),dr+=i,ir+=l;dr+=c,ir+=x}dr+=n,ir+=w}dr+=p,ir+=b}dr+=h,ir+=g}dr+=y,ir+=P}dr+=m,ir+=k}dr+=v,ir+=E}dr+=u,ir+=z}dr+=j,ir+=A}}],p=[function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B;for(u=(B=t(r.shape,r.strides,o.strides)).sh,x=B.sx,w=B.sy,f=e(r.dtype,o.dtype),b=r.offset,g=o.offset,a=r.data,d=o.data,n=x[0],h=w[0],i=r.accessors[0],c=o.accessors[1],q=u[1];q>0;)for(q<f?(l=q,q=0):(l=f,q-=f),m=b+q*x[1],v=g+q*w[1],A=u[0];A>0;)for(A<f?(j=A,A=0):(j=f,A-=f),P=m+A*x[0],k=v+A*w[0],p=x[1]-j*x[0],y=w[1]-j*w[0],z=0;z<l;z++){for(E=0;E<j;E++)c(d,k,s(i(a,P))),P+=n,k+=h;P+=p,k+=y}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J;for(w=(J=t(r.shape,r.strides,o.strides)).sh,k=J.sx,E=J.sy,f=e(r.dtype,o.dtype),z=r.offset,A=o.offset,a=r.data,d=o.data,n=k[0],y=E[0],i=r.accessors[0],c=o.accessors[1],I=w[2];I>0;)for(I<f?(P=I,I=0):(P=f,I-=f),j=z+I*k[2],x=A+I*E[2],H=w[1];H>0;)for(H<f?(g=H,H=0):(g=f,H-=f),h=k[2]-g*k[1],v=E[2]-g*E[1],u=j+H*k[1],l=x+H*E[1],G=w[0];G>0;)for(G<f?(b=G,G=0):(b=f,G-=f),q=u+G*k[0],B=l+G*E[0],p=k[1]-b*k[0],m=E[1]-b*E[0],F=0;F<P;F++){for(D=0;D<g;D++){for(C=0;C<b;C++)c(d,B,s(i(a,q))),q+=n,B+=y;q+=p,B+=m}q+=h,B+=v}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R;for(k=(R=t(r.shape,r.strides,o.strides)).sh,B=R.sx,C=R.sy,f=e(r.dtype,o.dtype),D=r.offset,F=o.offset,a=r.data,d=o.data,n=B[0],m=C[0],i=r.accessors[0],c=o.accessors[1],Q=k[3];Q>0;)for(Q<f?(q=Q,Q=0):(q=f,Q-=f),w=D+Q*B[3],P=F+Q*C[3],O=k[2];O>0;)for(O<f?(A=O,O=0):(A=f,O-=f),y=B[3]-A*B[2],j=C[3]-A*C[2],x=w+O*B[2],g=P+O*C[2],N=k[1];N>0;)for(N<f?(z=N,N=0):(z=f,N-=f),h=B[2]-z*B[1],u=C[2]-z*C[1],l=x+N*B[1],b=g+N*C[1],M=k[0];M>0;)for(M<f?(E=M,M=0):(E=f,M-=f),G=l+M*B[0],H=b+M*C[0],p=B[1]-E*B[0],v=C[1]-E*C[0],L=0;L<q;L++){for(K=0;K<A;K++){for(J=0;J<z;J++){for(I=0;I<E;I++)c(d,H,s(i(a,G))),G+=n,H+=m;G+=p,H+=v}G+=h,H+=u}G+=y,H+=j}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y;for(q=(Y=t(r.shape,r.strides,o.strides)).sh,H=Y.sx,I=Y.sy,f=e(r.dtype,o.dtype),J=r.offset,K=o.offset,a=r.data,d=o.data,n=H[0],v=I[0],i=r.accessors[0],c=o.accessors[1],X=q[4];X>0;)for(X<f?(G=X,X=0):(G=f,X-=f),P=J+X*H[4],A=K+X*I[4],W=q[3];W>0;)for(W<f?(F=W,W=0):(F=f,W-=f),m=H[4]-F*H[3],x=I[4]-F*I[3],g=P+W*H[3],z=A+W*I[3],V=q[2];V>0;)for(V<f?(D=V,V=0):(D=f,V-=f),y=H[3]-D*H[2],l=I[3]-D*I[2],b=g+V*H[2],E=z+V*I[2],U=q[1];U>0;)for(U<f?(C=U,U=0):(C=f,U-=f),h=H[2]-C*H[1],j=I[2]-C*I[1],w=b+U*H[1],k=E+U*I[1],T=q[0];T>0;)for(T<f?(B=T,T=0):(B=f,T-=f),L=w+T*H[0],M=k+T*I[0],p=H[1]-B*H[0],u=I[1]-B*I[0],S=0;S<G;S++){for(R=0;R<F;R++){for(Q=0;Q<D;Q++){for(O=0;O<C;O++){for(N=0;N<B;N++)c(d,M,s(i(a,L))),L+=n,M+=v;L+=p,M+=u}L+=h,M+=j}L+=y,M+=l}L+=m,M+=x}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr;for(F=(fr=t(r.shape,r.strides,o.strides)).sh,M=fr.sx,N=fr.sy,f=e(r.dtype,o.dtype),O=r.offset,Q=o.offset,a=r.data,d=o.data,n=M[0],u=N[0],i=r.accessors[0],c=o.accessors[1],sr=F[5];sr>0;)for(sr<f?(L=sr,sr=0):(L=f,sr-=f),z=O+sr*M[5],D=Q+sr*N[5],or=F[4];or>0;)for(or<f?(K=or,or=0):(K=f,or-=f),v=M[5]-K*M[4],b=N[5]-K*N[4],E=z+or*M[4],C=D+or*N[4],rr=F[3];rr>0;)for(rr<f?(J=rr,rr=0):(J=f,rr-=f),m=M[4]-J*M[3],w=N[4]-J*N[3],k=E+rr*M[3],B=C+rr*N[3],_=F[2];_>0;)for(_<f?(I=_,_=0):(I=f,_-=f),y=M[3]-I*M[2],x=N[3]-I*N[2],P=k+_*M[2],q=B+_*N[2],$=F[1];$>0;)for($<f?(H=$,$=0):(H=f,$-=f),h=M[2]-H*M[1],l=N[2]-H*N[1],g=P+$*M[1],A=q+$*N[1],Z=F[0];Z>0;)for(Z<f?(G=Z,Z=0):(G=f,Z-=f),R=g+Z*M[0],S=A+Z*N[0],p=M[1]-G*M[0],j=N[1]-G*N[0],Y=0;Y<L;Y++){for(X=0;X<K;X++){for(W=0;W<J;W++){for(V=0;V<I;V++){for(U=0;U<H;U++){for(T=0;T<G;T++)c(d,S,s(i(a,R))),R+=n,S+=u;R+=p,S+=j}R+=h,S+=l}R+=y,S+=x}R+=m,S+=w}R+=v,S+=b}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr;for(J=(nr=t(r.shape,r.strides,o.strides)).sh,S=nr.sx,T=nr.sy,f=e(r.dtype,o.dtype),U=r.offset,V=o.offset,a=r.data,d=o.data,n=S[0],j=T[0],i=r.accessors[0],c=o.accessors[1],cr=J[6];cr>0;)for(cr<f?(R=cr,cr=0):(R=f,cr-=f),B=U+cr*S[6],I=V+cr*T[6],ir=J[5];ir>0;)for(ir<f?(Q=ir,ir=0):(Q=f,ir-=f),u=S[6]-Q*S[5],P=T[6]-Q*T[5],q=B+ir*S[5],H=I+ir*T[5],dr=J[4];dr>0;)for(dr<f?(O=dr,dr=0):(O=f,dr-=f),v=S[5]-O*S[4],g=T[5]-O*T[4],A=q+dr*S[4],G=H+dr*T[4],ar=J[3];ar>0;)for(ar<f?(N=ar,ar=0):(N=f,ar-=f),m=S[4]-N*S[3],b=T[4]-N*T[3],z=A+ar*S[3],F=G+ar*T[3],er=J[2];er>0;)for(er<f?(M=er,er=0):(M=f,er-=f),y=S[3]-M*S[2],w=T[3]-M*T[2],E=z+er*S[2],D=F+er*T[2],tr=J[1];tr>0;)for(tr<f?(L=tr,tr=0):(L=f,tr-=f),h=S[2]-L*S[1],x=T[2]-L*T[1],k=E+tr*S[1],C=D+tr*T[1],fr=J[0];fr>0;)for(fr<f?(K=fr,fr=0):(K=f,fr-=f),W=k+fr*S[0],X=C+fr*T[0],p=S[1]-K*S[0],l=T[1]-K*T[0],sr=0;sr<R;sr++){for(or=0;or<Q;or++){for(rr=0;rr<O;rr++){for(_=0;_<N;_++){for($=0;$<M;$++){for(Z=0;Z<L;Z++){for(Y=0;Y<K;Y++)c(d,X,s(i(a,W))),W+=n,X+=j;W+=p,X+=l}W+=h,X+=x}W+=y,X+=w}W+=m,X+=b}W+=v,X+=g}W+=u,X+=P}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,yr,mr,vr,ur,jr;for(N=(jr=t(r.shape,r.strides,o.strides)).sh,X=jr.sx,Y=jr.sy,f=e(r.dtype,o.dtype),Z=r.offset,$=o.offset,a=r.data,d=o.data,n=X[0],l=Y[0],i=r.accessors[0],c=o.accessors[1],ur=N[7];ur>0;)for(ur<f?(W=ur,ur=0):(W=f,ur-=f),F=Z+ur*X[7],M=$+ur*Y[7],vr=N[6];vr>0;)for(vr<f?(V=vr,vr=0):(V=f,vr-=f),j=X[7]-V*X[6],E=Y[7]-V*Y[6],D=F+vr*X[6],L=M+vr*Y[6],mr=N[5];mr>0;)for(mr<f?(U=mr,mr=0):(U=f,mr-=f),u=X[6]-U*X[5],k=Y[6]-U*Y[5],C=D+mr*X[5],K=L+mr*Y[5],yr=N[4];yr>0;)for(yr<f?(T=yr,yr=0):(T=f,yr-=f),v=X[5]-T*X[4],P=Y[5]-T*Y[4],B=C+yr*X[4],J=K+yr*Y[4],hr=N[3];hr>0;)for(hr<f?(S=hr,hr=0):(S=f,hr-=f),m=X[4]-S*X[3],g=Y[4]-S*Y[3],q=B+hr*X[3],I=J+hr*Y[3],pr=N[2];pr>0;)for(pr<f?(R=pr,pr=0):(R=f,pr-=f),y=X[3]-R*X[2],b=Y[3]-R*Y[2],A=q+pr*X[2],H=I+pr*Y[2],nr=N[1];nr>0;)for(nr<f?(Q=nr,nr=0):(Q=f,nr-=f),h=X[2]-Q*X[1],w=Y[2]-Q*Y[1],z=A+nr*X[1],G=H+nr*Y[1],cr=N[0];cr>0;)for(cr<f?(O=cr,cr=0):(O=f,cr-=f),_=z+cr*X[0],rr=G+cr*Y[0],p=X[1]-O*X[0],x=Y[1]-O*Y[0],ir=0;ir<W;ir++){for(dr=0;dr<V;dr++){for(ar=0;ar<U;ar++){for(er=0;er<T;er++){for(tr=0;tr<S;tr++){for(fr=0;fr<R;fr++){for(sr=0;sr<Q;sr++){for(or=0;or<O;or++)c(d,rr,s(i(a,_))),_+=n,rr+=l;_+=p,rr+=x}_+=h,rr+=w}_+=y,rr+=b}_+=m,rr+=g}_+=v,rr+=P}_+=u,rr+=k}_+=j,rr+=E}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,yr,mr,vr,ur,jr,lr,xr,wr,br,gr,Pr,kr;for(S=(kr=t(r.shape,r.strides,o.strides)).sh,rr=kr.sx,or=kr.sy,f=e(r.dtype,o.dtype),sr=r.offset,fr=o.offset,a=r.data,d=o.data,n=rr[0],x=or[0],i=r.accessors[0],c=o.accessors[1],Pr=S[8];Pr>0;)for(Pr<f?(_=Pr,Pr=0):(_=f,Pr-=f),I=sr+Pr*rr[8],R=fr+Pr*or[8],gr=S[7];gr>0;)for(gr<f?($=gr,gr=0):($=f,gr-=f),l=rr[8]-$*rr[7],A=or[8]-$*or[7],H=I+gr*rr[7],Q=R+gr*or[7],br=S[6];br>0;)for(br<f?(Z=br,br=0):(Z=f,br-=f),j=rr[7]-Z*rr[6],z=or[7]-Z*or[6],G=H+br*rr[6],O=Q+br*or[6],wr=S[5];wr>0;)for(wr<f?(Y=wr,wr=0):(Y=f,wr-=f),u=rr[6]-Y*rr[5],E=or[6]-Y*or[5],F=G+wr*rr[5],N=O+wr*or[5],xr=S[4];xr>0;)for(xr<f?(X=xr,xr=0):(X=f,xr-=f),v=rr[5]-X*rr[4],k=or[5]-X*or[4],D=F+xr*rr[4],M=N+xr*or[4],lr=S[3];lr>0;)for(lr<f?(W=lr,lr=0):(W=f,lr-=f),m=rr[4]-W*rr[3],P=or[4]-W*or[3],C=D+lr*rr[3],L=M+lr*or[3],jr=S[2];jr>0;)for(jr<f?(V=jr,jr=0):(V=f,jr-=f),y=rr[3]-V*rr[2],g=or[3]-V*or[2],B=C+jr*rr[2],K=L+jr*or[2],ur=S[1];ur>0;)for(ur<f?(U=ur,ur=0):(U=f,ur-=f),h=rr[2]-U*rr[1],b=or[2]-U*or[1],q=B+ur*rr[1],J=K+ur*or[1],vr=S[0];vr>0;)for(vr<f?(T=vr,vr=0):(T=f,vr-=f),tr=q+vr*rr[0],er=J+vr*or[0],p=rr[1]-T*rr[0],w=or[1]-T*or[0],mr=0;mr<_;mr++){for(yr=0;yr<$;yr++){for(hr=0;hr<Z;hr++){for(pr=0;pr<Y;pr++){for(nr=0;nr<X;nr++){for(cr=0;cr<W;cr++){for(ir=0;ir<V;ir++){for(dr=0;dr<U;dr++){for(ar=0;ar<T;ar++)c(d,er,s(i(a,tr))),tr+=n,er+=x;tr+=p,er+=w}tr+=h,er+=b}tr+=y,er+=g}tr+=m,er+=P}tr+=v,er+=k}tr+=u,er+=E}tr+=j,er+=z}tr+=l,er+=A}},function(r,o,s){var f,a,d,i,c,n,p,h,y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,tr,er,ar,dr,ir,cr,nr,pr,hr,yr,mr,vr,ur,jr,lr,xr,wr,br,gr,Pr,kr,Er,zr,Ar,qr,Br,Cr,Dr;for(W=(Dr=t(r.shape,r.strides,o.strides)).sh,er=Dr.sx,ar=Dr.sy,f=e(r.dtype,o.dtype),dr=r.offset,ir=o.offset,a=r.data,d=o.data,n=er[0],w=ar[0],i=r.accessors[0],c=o.accessors[1],Cr=W[9];Cr>0;)for(Cr<f?(tr=Cr,Cr=0):(tr=f,Cr-=f),L=dr+Cr*er[9],V=ir+Cr*ar[9],Br=W[8];Br>0;)for(Br<f?(fr=Br,Br=0):(fr=f,Br-=f),x=er[9]-fr*er[8],B=ar[9]-fr*ar[8],K=L+Br*er[8],U=V+Br*ar[8],qr=W[7];qr>0;)for(qr<f?(sr=qr,qr=0):(sr=f,qr-=f),l=er[8]-sr*er[7],q=ar[8]-sr*ar[7],J=K+qr*er[7],T=U+qr*ar[7],Ar=W[6];Ar>0;)for(Ar<f?(or=Ar,Ar=0):(or=f,Ar-=f),j=er[7]-or*er[6],A=ar[7]-or*ar[6],I=J+Ar*er[6],S=T+Ar*ar[6],zr=W[5];zr>0;)for(zr<f?(rr=zr,zr=0):(rr=f,zr-=f),u=er[6]-rr*er[5],z=ar[6]-rr*ar[5],H=I+zr*er[5],R=S+zr*ar[5],Er=W[4];Er>0;)for(Er<f?(_=Er,Er=0):(_=f,Er-=f),v=er[5]-_*er[4],E=ar[5]-_*ar[4],G=H+Er*er[4],Q=R+Er*ar[4],kr=W[3];kr>0;)for(kr<f?($=kr,kr=0):($=f,kr-=f),m=er[4]-$*er[3],k=ar[4]-$*ar[3],F=G+kr*er[3],O=Q+kr*ar[3],Pr=W[2];Pr>0;)for(Pr<f?(Z=Pr,Pr=0):(Z=f,Pr-=f),y=er[3]-Z*er[2],P=ar[3]-Z*ar[2],D=F+Pr*er[2],N=O+Pr*ar[2],gr=W[1];gr>0;)for(gr<f?(Y=gr,gr=0):(Y=f,gr-=f),h=er[2]-Y*er[1],g=ar[2]-Y*ar[1],C=D+gr*er[1],M=N+gr*ar[1],br=W[0];br>0;)for(br<f?(X=br,br=0):(X=f,br-=f),cr=C+br*er[0],nr=M+br*ar[0],p=er[1]-X*er[0],b=ar[1]-X*ar[0],wr=0;wr<tr;wr++){for(xr=0;xr<fr;xr++){for(lr=0;lr<sr;lr++){for(jr=0;jr<or;jr++){for(ur=0;ur<rr;ur++){for(vr=0;vr<_;vr++){for(mr=0;mr<$;mr++){for(yr=0;yr<Z;yr++){for(hr=0;hr<Y;hr++){for(pr=0;pr<X;pr++)c(d,nr,s(i(a,cr))),cr+=n,nr+=w;cr+=p,nr+=b}cr+=h,nr+=g}cr+=y,nr+=P}cr+=m,nr+=k}cr+=v,nr+=E}cr+=u,nr+=z}cr+=j,nr+=A}cr+=l,nr+=q}cr+=x,nr+=B}}],h=i.length-1;function y(t,e){var y,m,v,u,j,l,x,w,b,g,P,k,E,z,A,q,B;if(z=f(t[0]),A=f(t[1]),u=z.shape,j=A.shape,(y=u.length)!==j.length)throw new Error("invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == "+y+". ndims(y) == "+j.length+".");if(0===y)return z.accessorProtocol||A.accessorProtocol?c[y](z,A,e):i[y](z,A,e);for(w=1,E=0,B=0;B<y;B++){if((q=u[B])!==j[B])throw new Error(r("0jd0d,E1"));w*=q,1===q&&(E+=1)}if(0!==w){if(1===y)return z.accessorProtocol||A.accessorProtocol?c[y](z,A,e):i[y](z,A,e);if(b=z.strides,g=A.strides,E===y-1){for(B=0;B<y&&1===u[B];B++);return z.shape=[u[B]],A.shape=z.shape,z.strides=[b[B]],A.strides=[g[B]],z.accessorProtocol||A.accessorProtocol?c[1](z,A,e):i[1](z,A,e)}if(l=o(b),x=o(g),0!==l&&0!==x&&z.order===A.order){if(m=s(u,b,z.offset),v=s(j,g,A.offset),w===m[1]-m[0]+1&&w===v[1]-v[0]+1)return P=1===l?m[0]:m[1],k=1===x?v[0]:v[1],z.shape=[w],A.shape=z.shape,z.strides=[l],A.strides=[x],z.offset=P,A.offset=k,z.accessorProtocol||A.accessorProtocol?c[1](z,A,e):i[1](z,A,e);if(y<=h)return z.accessorProtocol||A.accessorProtocol?c[y](z,A,e):i[y](z,A,e)}return y<=h?z.accessorProtocol||A.accessorProtocol?p[y-2](z,A,e):n[y-2](z,A,e):z.accessorProtocol||A.accessorProtocol?function(r,o,s){var f,t,e,i,c,n,p,h,y,m,v,u,j,l;for(h=r.shape,c=a(h),f=r.data,t=o.data,y=r.strides,m=o.strides,v=r.offset,u=o.offset,e=r.order,i=o.order,n=r.accessors[0],p=o.accessors[1],l=0;l<c;l++)j=d(h,y,v,e,l,"throw"),p(t,d(h,m,u,i,l,"throw"),s(n(f,j)))}(z,A,e):void function(r,o,s){var f,t,e,i,c,n,p,h,y,m,v,u;for(n=r.shape,c=a(n),f=r.data,t=o.data,p=r.strides,h=o.strides,y=r.offset,m=o.offset,e=r.order,i=o.order,u=0;u<c;u++)v=d(n,p,y,e,u,"throw"),t[d(n,h,m,i,u,"throw")]=s(f[v])}(z,A,e)}}export{y as default};
//# sourceMappingURL=index.mjs.map
