package lang;
public class lang_luaj$76 extends org.luaj.vm2.lib.VarArgFunction {
    org.luaj.vm2.LuaValue u0;
    org.luaj.vm2.LuaValue u1;
    org.luaj.vm2.LuaValue u2;
    org.luaj.vm2.LuaValue u3;
    org.luaj.vm2.LuaValue u4;
    org.luaj.vm2.LuaValue u5;
    org.luaj.vm2.LuaValue u6;
    org.luaj.vm2.LuaValue[] u7;
    org.luaj.vm2.LuaValue u8;
    org.luaj.vm2.LuaValue u9;
    org.luaj.vm2.LuaValue u10;
    org.luaj.vm2.LuaValue u11;
    org.luaj.vm2.LuaValue u12;
    org.luaj.vm2.LuaValue u13;
    org.luaj.vm2.LuaValue u14;
    org.luaj.vm2.LuaValue u15;
    org.luaj.vm2.LuaValue u16;
    org.luaj.vm2.LuaValue u17;
    final static org.luaj.vm2.LuaValue k0;
    final static org.luaj.vm2.LuaValue k1;
    final static org.luaj.vm2.LuaValue k2;
    final static org.luaj.vm2.LuaValue k3;
    final static org.luaj.vm2.LuaValue k4;
    
    static {
        k0 = org.luaj.vm2.LuaValue.valueOf(0);
        k1 = org.luaj.vm2.LuaString.valueOf("$");
        k2 = org.luaj.vm2.LuaString.valueOf("%");
        k3 = org.luaj.vm2.LuaString.valueOf("@");
        k4 = org.luaj.vm2.LuaString.valueOf("^");
    }
    
    public lang_luaj$76() {
    }
    
    final public org.luaj.vm2.Varargs onInvoke(org.luaj.vm2.Varargs a) {
        org.luaj.vm2.LuaValue a0 = a.arg(1);
        a.subargs(2);
        org.luaj.vm2.LuaValue a1 = org.luaj.vm2.LuaValue.NIL;
        org.luaj.vm2.LuaValue[] a2 = lang_luaj$76.newupe();
        a2[0] = a1;
        org.luaj.vm2.LuaValue[] a3 = lang_luaj$76.newupe();
        a3[0] = a1;
        org.luaj.vm2.LuaValue[] a4 = lang_luaj$76.newupe();
        a4[0] = a1;
        org.luaj.vm2.LuaValue[] a5 = lang_luaj$76.newupe();
        a5[0] = a1;
        org.luaj.vm2.LuaValue[] a6 = lang_luaj$76.newupe();
        a6[0] = a1;
        org.luaj.vm2.LuaValue[] a7 = lang_luaj$76.newupe();
        a7[0] = a1;
        org.luaj.vm2.LuaValue[] a8 = lang_luaj$76.newupe();
        a8[0] = a1;
        org.luaj.vm2.LuaValue[] a9 = lang_luaj$76.newupe();
        a9[0] = a1;
        lang_luaj$76$0 a10 = new lang_luaj$76$0();
        a10.u0 = a2;
        a10.u1 = a3;
        lang_luaj$76$1 a11 = new lang_luaj$76$1();
        a11.u0 = this.u0;
        a11.u1 = a10;
        a11.u2 = a2;
        a11.u3 = a3;
        lang_luaj$76$2 a12 = new lang_luaj$76$2();
        a12.u0 = this.u0;
        a12.u1 = a2;
        a12.u2 = a3;
        lang_luaj$76$3 a13 = new lang_luaj$76$3();
        a13.u0 = this.u1;
        lang_luaj$76$4 a14 = new lang_luaj$76$4();
        lang_luaj$76$5 a15 = new lang_luaj$76$5();
        a15.u0 = a10;
        a15.u1 = a11;
        a15.u2 = a14;
        a15.u3 = a12;
        lang_luaj$76$6 a16 = new lang_luaj$76$6();
        a16.u0 = a10;
        a16.u1 = a11;
        a16.u2 = a8;
        a16.u3 = a12;
        a16.u4 = this.u2;
        lang_luaj$76$7 a17 = new lang_luaj$76$7();
        a17.u0 = a10;
        a17.u1 = a11;
        a17.u2 = a12;
        a17.u3 = this.u2;
        a17.u4 = this.u3;
        a17.u5 = this.u4;
        a17.u6 = this.u5;
        a17.u7 = this.u6;
        a17.u8 = a15;
        a17.u9 = a13;
        a17.u10 = this.u7;
        a17.u11 = a9;
        lang_luaj$76$8 a18 = new lang_luaj$76$8();
        a18.u0 = a10;
        a18.u1 = a11;
        a18.u2 = a12;
        a18.u3 = a17;
        a18.u4 = a13;
        a18.u5 = this.u3;
        a18.u6 = this.u8;
        a18.u7 = this.u9;
        a18.u8 = this.u5;
        lang_luaj$76$9 a19 = new lang_luaj$76$9();
        a19.u0 = a10;
        a19.u1 = a11;
        a19.u2 = a12;
        a19.u3 = a17;
        a19.u4 = a13;
        a19.u5 = this.u3;
        a19.u6 = this.u10;
        a19.u7 = this.u9;
        a19.u8 = this.u5;
        lang_luaj$76$10 a20 = new lang_luaj$76$10();
        a20.u0 = a14;
        a8[0] = a20;
        lang_luaj$76$11 a21 = new lang_luaj$76$11();
        a21.u0 = a15;
        a21.u1 = a17;
        a21.u2 = a16;
        a21.u3 = a18;
        a21.u4 = a19;
        a21.u5 = a4;
        a21.u6 = a5;
        a21.u7 = a6;
        a21.u8 = a7;
        a21.u9 = a13;
        a9[0] = a21;
        a2[0] = a0;
        a3[0] = k0;
        org.luaj.vm2.LuaValue dummy = org.luaj.vm2.LuaValue.NIL;
        lang_luaj$76$12 a22 = new lang_luaj$76$12();
        a22.u0 = a10;
        a22.u1 = a11;
        a22.u2 = a12;
        a22.u3 = a17;
        a22.u4 = a13;
        a22.u5 = this.u3;
        a22.u6 = this.u5;
        a22.u7 = this.u11;
        a22.u8 = this.u9;
        org.luaj.vm2.LuaValue dummy0 = org.luaj.vm2.LuaValue.NIL;
        lang_luaj$76$13 a23 = new lang_luaj$76$13();
        a23.u0 = a10;
        a23.u1 = a11;
        a23.u2 = a12;
        a23.u3 = a17;
        a23.u4 = a13;
        a23.u5 = this.u3;
        a23.u6 = this.u5;
        a23.u7 = this.u11;
        a23.u8 = this.u9;
        org.luaj.vm2.LuaValue a24 = k1;
        lang_luaj$76$14 a25 = new lang_luaj$76$14();
        a25.u0 = this.u12;
        a25.u1 = a13;
        a25.u2 = this.u13;
        a4[0] = ((org.luaj.vm2.LuaValue)a22).call(a24, (org.luaj.vm2.LuaValue)a25);
        org.luaj.vm2.LuaValue a26 = k2;
        lang_luaj$76$15 a27 = new lang_luaj$76$15();
        a27.u0 = this.u14;
        a27.u1 = a13;
        a27.u2 = this.u15;
        a5[0] = ((org.luaj.vm2.LuaValue)a22).call(a26, (org.luaj.vm2.LuaValue)a27);
        org.luaj.vm2.LuaValue a28 = k3;
        lang_luaj$76$16 a29 = new lang_luaj$76$16();
        a29.u0 = this.u14;
        a29.u1 = a13;
        a29.u2 = this.u12;
        a29.u3 = this.u16;
        a6[0] = ((org.luaj.vm2.LuaValue)a23).call(a28, (org.luaj.vm2.LuaValue)a29);
        org.luaj.vm2.LuaValue a30 = k4;
        lang_luaj$76$17 a31 = new lang_luaj$76$17();
        a31.u0 = this.u14;
        a31.u1 = a13;
        a31.u2 = this.u17;
        a7[0] = ((org.luaj.vm2.LuaValue)a22).call(a30, (org.luaj.vm2.LuaValue)a31);
        return org.luaj.vm2.LuaValue.tailcallOf(a9[0], (org.luaj.vm2.Varargs)org.luaj.vm2.LuaValue.NONE);
    }
}
