function k(){throw"TheLanguage PANIC";}exports.new_symbol=function(a){return[0,a]};function l(a){return 0===a[0]}exports.symbol_p=l;exports.un_symbol=function(a){return a[1]};function ca(a,b){return[1,a,b]}exports.new_construction=ca;function p(a){return 1===a[0]}exports.construction_p=p;function da(a){return a[1]}exports.construction_head=da;function ea(a){return a[2]}exports.construction_tail=ea;var q=[2];exports.null_v=q;function r(a){return 2===a[0]}exports.null_p=r;
function fa(a,b){return[3,a,b]}exports.new_data=fa;function t(a){return 3===a[0]}exports.data_p=t;function ha(a){return a[1]}exports.data_name=ha;function ia(a){return a[2]}exports.data_list=ia;function ja(a,b){return[4,a,b]}exports.new_error=ja;function u(a){return 4===a[0]}exports.error_p=u;function ka(a){return a[1]}exports.error_name=ka;function la(a){return a[2]}exports.error_list=la;function v(a,b){a!==b&&(a[0]=5,a[1]=b,a[2]=!1,a[3]=!1)}exports.evaluate=function(a,b){return[6,a,b]};
function w(a,b){return[7,a,b]}exports.apply=function(a,b){return[9,a,b]};function x(a){a=y(a);if(t(a)){var b=a[1],c=a[2];a[1]=x(b);a[2]=x(c)}else u(a)?(b=a[1],c=a[2],a[1]=x(b),a[2]=x(c)):p(a)&&(b=a[1],c=a[2],a[1]=x(b),a[2]=x(c));return a}exports.force_all_rec=x;var z=[0,"\u592a\u59cb\u521d\u6838"];exports.system_symbol=z;var ma=[0,"\u7b26\u540d"];exports.name_symbol=ma;var A=[0,"\u5316\u6ec5"];exports.function_symbol=A;var B=[0,"\u5f0f\u5f62"];exports.form_symbol=B;var na=[0,"\u7b49\u540c"];
exports.equal_symbol=na;var oa=[0,"\u89e3\u7b97"];exports.evaluate_sym=oa;var C=[0,"\u7279\u5b9a\u5176\u7269"];exports.theThing_symbol=C;var D=[0,"\u7701\u7565\u4e00\u7269"];exports.something_symbol=D;var pa=[0,"\u6620\u8868"];exports.mapping_symbol=pa;var qa=[0,"\u82e5"];exports.if_symbol=qa;var F=[0,"\u4e00\u985e\u4f55\u7269"];exports.typeAnnotation_symbol=F;var G=[0,"\u662f\u975e"];exports.isOrNot_symbol=G;var ra=[0,"\u5176\u5b50"];exports.sub_symbol=ra;var sa=[0,"\u967d"];
exports.true_symbol=sa;var ta=[0,"\u9670"];exports.false_symbol=ta;var ua=[0,"\u5f15\u7528"];exports.quote_symbol=ua;var va=[0,"\u61c9\u7528"];exports.apply_symbol=va;var wa=[0,"\u7a7a"];exports.null_symbol=wa;var za=[0,"\u9023"];exports.construction_symbol=za;var Aa=[0,"\u69cb"];exports.data_symbol=Aa;var Ba=[0,"\u8aa4"];exports.error_symbol=Ba;var Ca=[0,"\u8a5e\u7d20"];exports.symbol_symbol=Ca;var Da=[0,"\u5217"];exports.list_symbol=Da;var Fa=[0,"\u9996"];exports.head_symbol=Fa;var Ga=[0,"\u5c3e"];
exports.tail_symbol=Ga;var Ha=[0,"\u7269"];exports.thing_symbol=Ha;var Ia=[0,"\u5b87\u5b99\u4ea1\u77e3"];exports.theWorldStopped_symbol=Ia;exports.effect_symbol=[0,"\u6548\u61c9"];exports.sequentialWordFormation_symbol=[0,"\u70ba\u7b26\u540d\u9023"];exports.inputOutput_symbol=[0,"\u51fa\u5165\u6539\u6ec5"];var Ja=[4,z,H(Ia,D)];function I(a){return[3,ma,H(z,a)]}function Ka(a){return I(H(F,H(A,D,a),C))}function J(a,b){return I(H(F,H(A,H(a),D),b))}function La(a){return I(H(F,A,H(G,H(F,a,D))))}
var Ma=Ka(Aa);exports.new_data_function_builtin_systemName=Ma;var Na=J(Aa,ma);exports.data_name_function_builtin_systemName=Na;var Oa=J(Aa,Da);exports.data_list_function_builtin_systemName=Oa;var Pa=La(Aa);exports.data_p_function_builtin_systemName=Pa;var Qa=Ka(Ba);exports.new_error_function_builtin_systemName=Qa;var Ra=J(Ba,ma);exports.error_name_function_builtin_systemName=Ra;var Sa=J(Ba,Da);exports.error_list_function_builtin_systemName=Sa;var Ta=La(Ba);
exports.error_p_function_builtin_systemName=Ta;var Ua=Ka(za);exports.new_construction_function_builtin_systemName=Ua;var Va=La(za);exports.construction_p_function_builtin_systemName=Va;var Wa=J(za,Fa);exports.construction_head_function_builtin_systemName=Wa;var Xa=J(za,Ga);exports.construction_tail_function_builtin_systemName=Xa;var Ya=La(Ca);exports.symbol_p_function_builtin_systemName=Ya;var Za=La(wa);exports.null_p_function_builtin_systemName=Za;var $a=I(H(F,A,H(G,na)));
exports.equal_p_function_builtin_systemName=$a;var gb=I(H(F,H(A,[1,A,D],D),va));exports.apply_function_builtin_systemName=gb;var hb=I(H(F,A,oa));exports.evaluate_function_builtin_systemName=hb;var ib=J(Da,H(F,Ha,D));exports.list_chooseOne_function_builtin_systemName=ib;var jb=I(H(F,A,qa));exports.if_function_builtin_systemName=jb;var kb=I(H(F,B,ua));exports.quote_form_builtin_systemName=kb;var lb=I(H(F,H(B,H(A,D,A)),C));exports.lambda_form_builtin_systemName=lb;var mb=I(H(B,H(z,A)));
exports.function_builtin_use_systemName=mb;var nb=I(H(B,H(z,B)));exports.form_builtin_use_systemName=nb;var ob=I(H(B,B));exports.form_use_systemName=ob;var K=[3,ta,H()],pb=[3,sa,H()];function L(a,b){return a===b?!0:a[1]===b[1]?(v(a,b),!0):!1}function O(a){for(var b=q,c=a.length-1;0<=c;c--)b=[1,a[c],b];return b}exports.jsArray_to_list=O;function P(a,b,c){for(var d=[];p(a);)d.push(a[1]),a=a[2];return r(a)?b(d):c(d,a)}function R(a){return P(a,function(a){return a},function(){return!1})}
exports.maybe_list_to_jsArray=R;function H(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];return O(a)}exports.new_list=H;function qb(a){for(var b=[];5===a[0];)b.push(a),a=a[1];for(var c=0;c<b.length;c++)v(b[c],a);return a}function S(a){return 5===a[0]||6===a[0]||8===a[0]||7===a[0]||9===a[0]}exports.delay_p=S;
function y(a,b,c){function d(){c[1]=!0;v(h,Ja);for(var a=0;a<m.length;a++)v(m[a],Ja);return Ja}function f(a){v(h,a);for(var b=0;b<m.length;b++)v(m[b],a);if(S(a))for(a=y(a),v(h,a),b=0;b<m.length;b++)v(m[b],a);return a}function e(){var a={},c;for(c in g)a[c]=!0;for(c in b)a[c]=!0;return a}void 0===b&&(b={});void 0===c&&(c=[!1,!1]);for(var g={},h=a,m=[];S(h);){a=T(h);if(!0===b[a])return d();if(!0===g[a]){c[0]=!0;if(6===h[0])return d();if(7===h[0]){a=h[1];for(var n=h[2],M=[Na,Oa,Pa,Ra,Sa,Ta,Va,Wa,Xa,
Ya,Za],Q=!1,E=0;E<M.length;E++)U(M[E],a)&&(Q=!0);if(Q)return 1===n.length||k(),!1===c[1]||k(),n=y(n[0],e(),c),c[1]?f(w(a,[n])):k();if(U(a,$a)||U(a,gb)||U(a,hb))return d();if(U(a,jb)&&(3===n.length||k(),!1===c[1]||k(),a=y(n[0],e(),c),c[1]))return f(w(jb,[a,n[1],n[2]]))}else if(8===h[0]||9===h[0])return d();return k()}g[a]=!0;m.push(h);h=V(h)}for(E=0;E<m.length;E++)v(m[E],h);return h}exports.force_all=y;
function V(a){a=qb(a);5!==a[0]||k();if(6===a[0])var b=rb(a[1],a[2]);else if(8===a[0]){b=a[1];var c=a[2],d=a[3],f=[4,z,H(nb,H(X(b),c,O(d)))];b=U(c,kb)?1!==d.length?f:d[0]:U(c,lb)?2!==d.length?f:sb(b,d[0],d[1],f):f}else if(7===a[0])a:{f=a[1];b=a[2];c=[4,z,H(mb,H(f,O(b)))];for(d=0;d<tb.length;d++)if(U(f,tb[d][0])){f=tb[d][1];if(b.length!==f)break;d=tb[d][2];b=1===f?d(b[0],c):2===f?d(b[0],b[1],c):3===f?d(b[0],b[1],b[2],c):k();break a}b=c}else b=9===a[0]?ub(a[1],a[2]):a;b=qb(b);v(a,b);return b}
exports.force1=V;var vb=[];exports.env_null_v=vb;function wb(a,b,c){for(var d=[],f=0;f<a.length;f+=2){if(U(a[f+0],b)){d[f+0]=b;d[f+1]=c;for(f+=2;f<a.length;f+=2)d[f+0]=a[f+0],d[f+1]=a[f+1];return d}d[f+0]=a[f+0];d[f+1]=a[f+1]}d[a.length+0]=b;d[a.length+1]=c;return d}exports.env_set=wb;function xb(a,b,c){for(var d=0;d<a.length;d+=2)if(U(a[d+0],b))return a[d+1];return c}exports.env_get=xb;function yb(a,b){for(var c=0;c<a.length;c+=2)if(U(a[c+0],b))return a[c+1];return k()}
function X(a){for(var b=q,c=0;c<a.length;c+=2)b=[1,H(a[c+0],a[c+1]),b];return[3,pa,H(b)]}exports.env2val=X;function zb(a,b){for(var c=0;c<a.length;c+=2)b(a[c+0],a[c+1])}exports.env_foreach=zb;
function Ab(a){a=y(a);if(!t(a))return!1;var b=y(a[1]);if(!l(b)||!L(b,pa))return!1;b=y(a[2]);if(!p(b)||!r(y(b[2])))return!1;a=[];for(b=y(b[1]);!r(b);){if(!p(b))return!1;var c=y(b[1]);b=y(b[2]);if(!p(c))return!1;var d=c[1];c=y(c[2]);if(!p(c))return!1;var f=c[1];if(!r(y(c[2])))return!1;c=!0;for(var e=0;e<a.length;e+=2)if(U(a[e+0],d)){a[e+1]=f;c=!1;break}c&&(a.push(d),a.push(f))}return a}exports.val2env=Ab;
function rb(a,b){var c=V(b);if(S(c))return[6,a,c];var d=[4,z,H(mb,H(hb,H(X(a),c)))];if(p(c)){for(var f=[],e=c;!r(e);){if(S(e))return[6,a,c];if(p(e))f.push(e[1]),e=V(e[2]);else return d}if(U(f[0],nb)){if(1===f.length)return d;e=f[1];c=[];for(d=2;d<f.length;d++)c[d-2]=f[d];return[8,a,e,c]}if(U(f[0],ob)){if(1===f.length)return d;e=y([6,a,f[1]]);if(!t(e))return d;var g=V(e[1]);if(S(g))return[6,a,c];if(!l(g)||!L(g,B))return d;g=V(e[2]);if(S(g))return[6,a,c];if(!p(g))return d;e=g[1];g=V(g[2]);if(S(g))return[6,
a,c];if(!r(g))return d;c=[X(a)];for(d=2;d<f.length;d++)c[d-1]=f[d];return[9,e,c]}if(U(f[0],mb)){if(1===f.length)return d;e=f[1];c=[];for(d=2;d<f.length;d++)c[d-2]=[6,a,f[d]];return[7,e,c]}e=[6,a,f[0]];c=[];for(d=1;d<f.length;d++)c[d-1]=[6,a,f[d]];return[9,e,c]}return r(c)?c:l(c)||t(c)?xb(a,c,d):u(c)?d:k()}function Bb(a,b){return[a,1,function(c){c=V(c);return S(c)?w(a,[c]):b(c)?pb:K}]}function Cb(a,b,c){return[a,1,function(d,f){d=V(d);return S(d)?w(a,[d]):b(d)?c(d):f}]}
var tb=[Bb(Pa,t),[Ma,2,fa],Cb(Na,t,ha),Cb(Oa,t,ia),Bb(Ta,u),[Qa,2,ja],Cb(Ra,u,ka),Cb(Sa,u,la),Bb(Za,r),[Ua,2,ca],Bb(Va,p),Cb(Wa,p,da),Cb(Xa,p,ea),[$a,2,function(a,b){function c(a,b,c,g){c=w($a,[c(a),c(b)]);a=w($a,[g(a),g(b)]);return w(jb,[c,a,K])}if(a===b)return pb;a=V(a);b=V(b);if(S(a)||S(b))return w($a,[a,b]);if(a===b)return pb;!S(a)||k();return r(a)?r(a)?pb:K:l(a)?l(b)?L(a,b)?pb:K:K:t(a)?t(b)?c(a,b,ha,ia):K:p(a)?p(b)?c(a,b,da,ea):K:u(a)?u(b)?c(a,b,ka,la):K:k()}],[gb,2,function(a,b,c){var d=[];
for(b=y(b);p(b);)d.push(b[1]),b=y(b[2]);return r(b)?[9,a,d]:c}],[hb,2,function(a,b,c){a=Ab(a);return!1===a?c:[6,a,b]}],Bb(Ya,l),[ib,1,function(a,b){a=V(a);return S(a)?w(ib,[a]):p(a)?a[1]:b}],[jb,3,function(a,b,c,d){a=V(a);if(S(a))return w(jb,[a,b,c]);if(!t(a))return d;a=y(a[1]);return l(a)?L(a,sa)?b:L(a,ta)?c:d:d}]];
function ub(a,b){function c(){return[4,z,H(mb,H(gb,H(a,O(b))))]}a=V(a);if(S(a))return[9,a,b];if(!t(a))return c();var d=y(a[1]);if(!l(d)||!L(d,A))return c();var f=y(a[2]);if(!p(f))return c();d=x(f[1]);f=y(f[2]);if(!p(f)||!r(y(f[2])))return c();f=f[1];for(var e=vb,g=0;!r(d);)if(l(d)||t(d)){for(var h=q,m=b.length-1;m>=g;m--)h=[1,b[m],h];e=wb(e,d,h);g=b.length;d=q}else if(p(d))if(g<b.length)h=b[g],g++,e=wb(e,d[1],h),d=d[2];else return c();else return c();return b.length!==g?c():[6,e,f]}
function sb(a,b,c,d){void 0===d&&(d=!1);b=x(b);for(var f=[],e=!1,g=b;!r(g);)if(l(g)||t(g))f.push(g),e=!0,g=q;else if(p(g))f.push(g[1]),g=g[2];else return!1===d?ja(z,H(nb,H(X(a),lb,O([b,c])))):d;d=b;e&&(d=O(f));var h=[];zb(a,function(a){for(var b=0;b<f.length;b++)if(U(f[b],a))return;h.push(a)});e=d;for(g=h.length-1;0<=g;g--)e=[1,h[g],e];for(g=h.length-1;0<=g;g--)d=ca(H(nb,kb,yb(a,h[g])),d);return[3,A,H(b,[1,H(nb,kb,[3,A,H(e,c)]),d])]}
function U(a,b){function c(a,b,c,g){return U(c(a),c(b))&&U(g(a),g(b))?(v(a,b),!0):!1}if(a===b)return!0;a=y(a);b=y(b);if(a===b)return!0;if(r(a)){if(!r(b))return!1;v(a,q);v(b,q);return!0}return l(a)?l(b)?L(a,b):!1:p(a)?p(b)?c(a,b,da,ea):!1:u(a)?u(b)?c(a,b,ka,la):!1:t(a)?t(b)?c(a,b,ha,ia):!1:k()}exports.equal_p=U;
function Y(a,b){function c(a,b,c,g){return Y(c(a),c(b))&&Y(g(a),g(b))?(v(a,b),!0):!1}if(a===b)return!0;a=qb(a);b=qb(b);if(a===b)return!0;if(r(a)){if(!r(b))return!1;v(a,q);v(b,q);return!0}return l(a)?l(b)?L(a,b):!1:p(a)?p(b)?c(a,b,da,ea):!1:u(a)?u(b)?c(a,b,ka,la):!1:t(a)?t(b)?c(a,b,ha,ia):!1:6===a[0]||7===a[0]||8===a[0]||9===a[0]?!1:k()}
function T(a){a=qb(a);var b;if(r(a))return"()";if(p(a)){var c="(";for(b="";p(a);)c+=b+T(a[1]),b=" ",a=qb(a[2]);return c=r(a)?c+")":c+(" . "+T(a)+")")}return t(a)?"#"+T([1,a[1],a[2]]):u(a)?"!"+T([1,a[1],a[2]]):l(a)?a[1]:6===a[0]?"$("+T(X(a[1]))+" "+T(a[2])+")":7===a[0]?"%("+T(a[1])+" "+T(O(a[2]))+")":8===a[0]?"@("+T(X(a[1]))+" "+T(a[2])+" "+T(O(a[3]))+")":9===a[0]?"^("+T(a[1])+" "+T(O(a[2]))+")":k()}exports.simple_print=T;exports.simple_print_force_all_rec=function(a){return T(x(a))};
function Db(a){function b(){return W.length===N}function c(){!b()||k();var a=W[N];N++;return a}function d(a){W[N-1]===a||k();N--}function f(){throw"TheLanguage parse ERROR!";}function e(a){return" "===a||"\n"===a||"\t"===a||"\r"===a}function g(){if(b())return!1;var a=c();if(!e(a))return d(a),!1;for(;e(a)&&!b();)a=c();e(a)||d(a);return!0}function h(){if(b())return!1;var a=c(),f="";if(!E(a))return d(a),!1;for(;E(a)&&!b();)f+=a,a=c();E(a)?f+=a:d(a);return[0,f]}function m(){function a(a){if(e===m)e=a;
else{for(var b=e;;){if(!p(b))return k();if(b[2]===m)break;b=b[2]}if(!p(b)||b[2]!==m)return k();b[2]=a}}if(b())return!1;var h=c();if("("!==h)return d(h),!1;for(var m=[0,"!!@@READ||HOLE@@!!"],e=m;;){g();if(b())return f();h=c();if(")"===h)return a(q),e;if("."===h){g();h=aa();a(h);g();if(b())return f();h=c();return")"!==h?f():e}d(h);h=aa();a([1,h,m])}}function n(){if(b())return!1;var a=c();if("#"!==a)return d(a),!1;a=m();return!1!==a&&p(a)?[3,a[1],a[2]]:f()}function M(){if(b())return!1;var a=c();if("!"!==
a)return d(a),!1;a=m();return!1!==a&&p(a)?[4,a[1],a[2]]:f()}function Q(a,h){return function(){if(b())return!1;var g=c();if(g!==a)return d(g),!1;g=m();if(!1===g||!p(g))return f();var e=g[2];return p(e)&&r(e[2])?h(g[1],e[1]):f()}}function E(a){if(e(a))return!1;for(var b="()!#.$%^@~/->_:?[]&".split(""),c=0;c<b.length;c++)if(a===b[c])return!1;return!0}function aa(){g();for(var a=[m,h,n,M,Ea,fb,xa,ba],b=0;b<a.length;b++){var c=a[b]();if(!1!==c)return c}return f()}var W=a,N=0,Ea=Q("$",function(a,b){var c=
Ab(a);return!1===c?f():[6,c,b]}),fb=Q("%",function(a,b){var c=P(b,function(a){return a},function(){return f()});return[7,a,c]}),xa=function(a,h){return function(){if(b())return!1;var g=c();if(g!==a)return d(g),!1;g=m();if(!1===g||!p(g))return f();var e=g[2];if(!p(e))return f();var cb=e[2];return p(cb)&&r(cb[2])?h(g[1],e[1],cb[1]):f()}}("@",function(a,b,c){c=P(c,function(a){return a},function(){return f()});a=Ab(a);return!1===a?f():[8,a,b,c]}),ba=Q("^",function(a,b){var c=P(b,function(a){return a},
function(){return f()});return[9,a,c]});return aa()}exports.simple_parse=Db;
exports.complex_parse=function(a){function b(){return xa.length===ba}function c(){!b()||k();var a=xa[ba];ba++;return a}function d(a){xa[ba-1]===a||k();ba--}function f(){throw"TheLanguage parse ERROR!";}function e(a){return" "===a||"\n"===a||"\t"===a||"\r"===a}function g(){if(b())return!1;var a=c();if(!e(a))return d(a),!1;for(;e(a)&&!b();)a=c();e(a)||d(a);return!0}function h(){if(b())return!1;var a=c(),f="";if(!E(a))return d(a),!1;for(;E(a)&&!b();)f+=a,a=c();E(a)?f+=a:d(a);return[0,f]}function m(){function a(a){if(e===
ya)e=a;else{for(var b=e;;){if(!p(b))return k();if(b[2]===ya)break;b=b[2]}if(!p(b)||b[2]!==ya)return k();b[2]=a}}if(b())return!1;var h=c();if("("!==h)return d(h),!1;for(var ya=[0,"!!@@READ||HOLE@@!!"],e=ya;;){g();if(b())return f();h=c();if(")"===h)return a(q),e;if("."===h){g();h=aa();a(h);g();if(b())return f();h=c();return")"!==h?f():e}d(h);h=aa();a([1,h,ya])}}function n(){if(b())return!1;var a=c();if("#"!==a)return d(a),!1;a=m();return!1!==a&&p(a)?[3,a[1],a[2]]:f()}function M(){if(b())return!1;var a=
c();if("!"!==a)return d(a),!1;a=m();return!1!==a&&p(a)?[4,a[1],a[2]]:f()}function Q(a,h){return function(){if(b())return!1;var g=c();if(g!==a)return d(g),!1;g=m();if(!1===g||!p(g))return f();var e=g[2];return p(e)&&r(e[2])?h(g[1],e[1]):f()}}function E(a){if(e(a))return!1;for(var b="()!#.$%^@~/->_:?[]&".split(""),c=0;c<b.length;c++)if(a===b[c])return!1;return!0}function aa(){g();for(var a=[m,fb,n,M,ab,bb,eb,db],b=0;b<a.length;b++){var c=a[b]();if(!1!==c)return c}return f()}function W(a){return!1===
a?f():a}function N(a){W(!b());W(c()===a)}function Ea(){function a(b){function c(){N("[");var b=a();N("]");return b}void 0===b&&(b=!1);b=b?[m,h,c,n,M,ab,bb,eb,db]:[m,Ea,n,M,ab,bb,eb,db];for(var d=0;d<b.length;d++){var e=b[d]();if(!1!==e)return e}return f()}function g(f){if(b())return f;var e=c();if("."===e)return e=a(),H(F,H(A,H(f),D),e);if(":"===e)return e=a(),H(F,e,f);if("~"===e)return H(G,f);if("@"===e)return e=a(),H(F,H(A,[1,f,D],D),e);if("?"===e)return H(F,A,H(G,f));if("/"===e){for(f=[f];;){e=
a(!0);f.push(e);if(b())break;e=c();if("/"!==e){d(e);break}}return H(ra,O(f))}d(e);return f}if(b())return!1;var e=c();if("&"===e){W(!b());e=c();if("+"===e)return e=a(),H(B,H(z,e));d(e);e=a();return H(B,e)}if(":"===e){W(!b());e=c();if("&"===e)return N(">"),e=a(),H(F,H(B,H(A,D,e)),C);if(">"===e)return e=a(),H(F,H(A,D,e),C);d(e);e=a();return H(F,e,C)}if("+"===e)return e=a(),H(z,e);if("["===e)return e=a(),N("]"),g(e);if("_"===e)return N(":"),e=a(),H(F,e,D);d(e);e=h();return!1===e?!1:g(e)}function fb(){var a=
Ea();return!1===a?!1:l(a)?a:I(a)}var xa=a,ba=0,ab=Q("$",function(a,b){var c=Ab(a);return!1===c?f():[6,c,b]}),bb=Q("%",function(a,b){var c=P(b,function(a){return a},function(){return f()});return[7,a,c]}),eb=function(a,e){return function(){if(b())return!1;var g=c();if(g!==a)return d(g),!1;g=m();if(!1===g||!p(g))return f();var h=g[2];if(!p(h))return f();var n=h[2];return p(n)&&r(n[2])?e(g[1],h[1],n[1]):f()}}("@",function(a,b,c){c=P(c,function(a){return a},function(){return f()});a=Ab(a);return!1===
a?f():[8,a,b,c]}),db=Q("^",function(a,b){var c=P(b,function(a){return a},function(){return f()});return[9,a,c]});return aa()};
function Z(a){function b(a,c){function d(a){return"inner"===c?"["+a+"]":"top"===c?a:k()}if(l(a))return a[1];var e=R(a);if(!1!==e&&3===e.length&&Y(e[0],F)){var f=R(e[1]);if(!1!==f&&3===f.length&&Y(f[0],A)){var n=f[1],M=R(n);if(!1!==M&&1===M.length&&Y(f[2],D))return d(b(M[0],"inner")+"."+b(e[2],"inner"));if(p(n)&&Y(n[2],D)&&Y(f[2],D))return d(b(n[1],"inner")+"@"+b(e[2],"inner"));if(Y(n,D)&&Y(e[2],C))return d(":>"+b(f[2],"inner"))}n=R(e[2]);if(Y(e[1],A)&&!1!==n&&2===n.length&&Y(n[0],G))return d(b(n[1],
"inner")+"?");if(!1!==f&&2===f.length&&Y(e[2],C)&&Y(f[0],B)&&(f=R(f[1]),!1!==f&&3===f.length&&Y(f[0],A)&&Y(f[1],D)))return d(":&>"+b(f[2],"inner"));f=Y(e[2],D)?"_":Y(e[2],C)?"":b(e[2],"inner");return d(f+":"+b(e[1],"inner"))}if(!1!==e&&2===e.length){if(Y(e[0],B))return f=R(e[1]),!1!==f&&2===f.length&&Y(f[0],z)?d("&+"+b(f[1],"inner")):d("&"+b(e[1],"inner"));if(Y(e[0],G))return d(b(e[1],"inner")+"~");if(Y(e[0],z))return d("+"+b(e[1],"inner"));if(Y(e[0],ra)&&(e=R(e[1]),!1!==e&&1<e.length)){f=b(e[0],
"inner");for(n=1;n<e.length;n++)f+="/"+b(e[n],"inner");return d(f)}}return"inner"===c?T(a):"top"===c?T(I(a)):k()}a=Db(T(a));var c="",d="";if(r(a))return"()";if(p(a)){c="(";for(d="";p(a);)c+=d+Z(a[1]),d=" ",a=a[2];return c=r(a)?c+")":c+(" . "+Z(a)+")")}return t(a)?(c=a[1],a=a[2],d=R(a),!1!==d&&2===d.length&&Y(c,ma)&&Y(d[0],z)?b(d[1],"top"):"#"+Z([1,c,a])):u(a)?"!"+Z([1,a[1],a[2]]):l(a)?a[1]:6===a[0]?"$("+Z(X(a[1]))+" "+Z(a[2])+")":7===a[0]?"%("+Z(a[1])+" "+Z(O(a[2]))+")":8===a[0]?"@("+Z(X(a[1]))+" "+
Z(a[2])+" "+Z(O(a[3]))+")":9===a[0]?"^("+Z(a[1])+" "+Z(O(a[2]))+")":k()}exports.complex_print=Z;