package lang;
public class lang_luaj$19 extends org.luaj.vm2.lib.OneArgFunction {
    org.luaj.vm2.LuaValue[] u0;
    final static org.luaj.vm2.LuaValue k0;
    
    static {
        k0 = org.luaj.vm2.LuaValue.valueOf(1);
    }
    
    public lang_luaj$19() {
    }
    
    final public org.luaj.vm2.LuaValue call(org.luaj.vm2.LuaValue a) {
        return (a.get(k0).eq_b(this.u0[0])) ? org.luaj.vm2.LuaValue.TRUE : org.luaj.vm2.LuaValue.FALSE;
    }
}
