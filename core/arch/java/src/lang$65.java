public class lang$65 extends org.luaj.vm2.lib.VarArgFunction {
    org.luaj.vm2.LuaValue u0;
    
    public lang$65() {
    }
    
    final public org.luaj.vm2.Varargs onInvoke(org.luaj.vm2.Varargs a) {
        org.luaj.vm2.LuaValue a0 = a.arg(1);
        a.subargs(2);
        return org.luaj.vm2.LuaValue.tailcallOf(this.u0, org.luaj.vm2.LuaValue.varargsOf(a0, (org.luaj.vm2.LuaValue)new lang$65$0(), (org.luaj.vm2.Varargs)new lang$65$1()));
    }
    
    final public void initupvalue1(org.luaj.vm2.LuaValue a) {
        this.u0 = a;
    }
}