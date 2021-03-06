#lang rash
;; in-dir is in the demo file still
(require rash/demo/setup)
(require make)
(require racket)

(define (id x) x)
(define ++ string-append)
(define (string->lines x) (string-split x "\n"))
(define (lines->string x) (apply ++ (map (lambda (x) (++ x"\n")) x)))

(define c-copyright "/*
    The Language
    Copyright (C) 2018, 2019  Zaoqi <zaomir@outlook.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

*/
")
(define haskell-copyright "
--    The Language
--    Copyright (C) 2018, 2019  Zaoqi <zaomir@outlook.com>

--    This program is free software: you can redistribute it and/or modify
--    it under the terms of the GNU Affero General Public License as published
--    by the Free Software Foundation, either version 3 of the License, or
--    (at your option) any later version.

--    This program is distributed in the hope that it will be useful,
--    but WITHOUT ANY WARRANTY; without even the implied warranty of
--    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
--    GNU Affero General Public License for more details.

--    You should have received a copy of the GNU Affero General Public License
--    along with this program.  If not, see <https://www.gnu.org/licenses/>.

")
(define c-generatedby "/* Generated by make.rkt */\n")
(define haskell-generatedby "-- Generated by make.rkt\n")
(define bash-generatedby "# Generated by make.rkt\n")
(define (ecmascript/exports.list-parse) (filter-not (lambda (x) (equal? x "")) (string->lines #{cat ../ecmascript/exports.list})))

(make
    (("all" ("ecmascript/lang.js"
             "ecmascript/lang.raw.js"
             "lua/lang.lua"
             "ecmascript6/lang.js"
             "python/lang.py"
             "php/lang.php"
             "java/src"
             "c/lang.h"
             "c/lang.c"
             "go/src")
            (void))
     ("ecmascript/lang.raw.js" ("ecmascript/lang.js") (void)) ;; 生成代碼寫在"ecmascript/lang.js生成裡
     ("ecmascript/exports.list" ("ecmascript/lang.js") (void)) ;; 生成代碼寫在"ecmascript/lang.js生成裡
     ("ecmascript/lang.js" ("typescript/lang.ts") {
        in-dir "typescript" {
            yarn
            touch lang.js
            rm lang.js
            npx tsc --build tsconfig.json
            (define raw (++ c-generatedby (match (string->lines #{cat lang.js})
                [(list "\"use strict\";" "exports.__esModule = true;" xs ...) (lines->string xs)])))
            |> id raw &>! ../ecmascript/lang.raw.js
            (define exports
                (filter-not
                    (lambda (x) (equal? x ""))
                    (string->lines
                        #{grep "^exports." ../ecmascript/lang.raw.js | awk (id "{print $1}") | sed (id "s|^exports.\\(.*\\)$|\\1|")})))
            (define exports.list (lines->string exports))
            (define google-closure-exports (++
                c-generatedby
                "var exports = {};\n"
                (apply ++ (map (lambda (x) (++ "exports."x"='something';\n")) exports))
                ))
            |> id google-closure-exports &>! lang.externs.js
            java -jar ./node_modules/google-closure-compiler-java/compiler.jar -W QUIET --assume_function_wrapper --language_out ECMASCRIPT3 --js ../ecmascript/lang.raw.js --externs lang.externs.js -O ADVANCED &>! lang.js
            cp lang.js ../ecmascript
            |> id exports.list &>! ../ecmascript/exports.list
            touch ../ecmascript/lang.raw.js ;; 因為"ecmascript/lang.raw.js"生成之實現
     }})
     ("lua/lang.lua" ("typescript/lang.ts") {
         in-dir "lua" {
             yarn
             |> ++ "/** @noSelfInFile */\n" #{cat ../typescript/lang.ts} &>! lang.ts
             touch lang.lua
             rm lang.lua
             npx tstl -p tsconfig.json
             (define raw #{sed (id "s|string.sub(\\([a-zA-Z0-9_]*\\), *|\\1:sub(|g") lang.lua})
             (define out (++
                 haskell-generatedby
                 haskell-copyright
                 (match (string->lines raw)
                    [(list "--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]"
                    "-- Lua Library inline imports"
                    "__TS__ArrayPush = function(arr, ...)"
                    "    local items = ({...});"
                    "    for ____TS_index = 1, #items do"
                    "        local item = items[____TS_index];"
                    "        arr[(#arr) + 1] = item;"
                    "    end"
                    "    return #arr;"
                    "end;"
                    ""
                    "local exports = exports or {};"
                    xs ...
                    ) (++
                          "local __TS__ArrayPush = function(arr, item)\n"
                          "    arr[#arr+1] = item\n"
                          "    return #arr\n"
                          "end\n"
                          "local exports = {}\n"
                          (lines->string xs)
                      )])
                 ))
             |> id out &>! lang.lua
     }})
     ("ecmascript6/lang.js" ("typescript/lang.ts") {
         in-dir "ecmascript6" {
             yarn
             touch lang.js
             rm lang.js
             npx tsc --build tsconfig.json
             (define raw #{cat lang.js})
             |> ++ c-generatedby raw &>! lang.js
     }})
     ("python/lang.py" ("ecmascript/lang.js" "ecmascript/exports.list") {
         in-dir "python" {
             (define raw-js (++
                 "var exports={};"
                 #{cat ../ecmascript/lang.js}))
             |> id raw-js &>! lang.js
             |> id "import js2py\njs2py.translate_file('lang.js','lang.py')\n" | python2
             (define exports (ecmascript/exports.list-parse))
             (define exports-py (++
                 "exports = var.to_python().exports\n"
                 (apply ++ (map (lambda (x) (++ x" = exports."x"\n")) exports))
                 ))
             (define all-py (++
                 "__all__ = ["
                 (apply ++ (add-between (map (lambda (x) (++ "'"x"'")) exports)", "))
                 "]\n"
                 ))
             (define py-raw (string->lines #{cat lang.py}))
             (match-define (list py-raw-head py-raw-body ... py-raw-tail) py-raw)
             (define py (++
                 bash-generatedby
                 (match py-raw-head ["__all__ = ['lang']" all-py])
                 (lines->string py-raw-body)
                 "\n"
                 (match py-raw-tail ["lang = var.to_python()" exports-py])))
             |> id py &>! lang.py
     }})
     ("java/src" ("java/src/lang/Lang.java") (void))
     ("java/src/lang/Lang.java" ("lua/lang.lua" "java/real-src/lang/Lang.java" "java/real-src/lang/LangValue.java") {
         ;; TODO rewrite in rash
         in-dir "java" {
             ./compile.sh
     }})
     ("go/src" ("lua/lang.lua") {
         in-dir "go" {
           mkdir -p deps
           (define GOPATH "$PWD/deps")
           bash -c "[ -d ./deps/src/github.com/yuin/gopher-lua/ ] || (mkdir -p ./deps/src/github.com/yuin && pushd ./deps/src/github.com/yuin && git clone --depth 1 https://github.com/yuin/gopher-lua.git && popd)"
           go get github.com/yuin/gopher-lua
           (define lang.go
               (++
                   c-generatedby
                   c-copyright
                   "package lang\n"
                   "import ( \"github.com/yuin/gopher-lua\" )\n"
                   "type Value lua.LValue\n"
                   "var exports *lua.LTable\n"
                   "var ls *lua.LState\n"
                   "func assertstateempty() {if ls.GetTop() != 0 {panic(\"ls.GetTop() != 0\")}}\n"
                   "func init() {\n"
                   "ls = lua.NewState()\n"
                   "ls.OpenLibs()\n"
                   "defer ls.Close()\n"
                   "if err := ls.DoString(`"#{cat ../lua/lang.lua}"`); err != nil {panic(err)}\n"
                   "exports = ls.Get(-1).(*lua.LTable)\n"
                   "ls.Pop(1)\n"
                   "assertstateempty()\n"
                   "}\n"
                   "func ComplexParse(x string) Value {\n"
                   "ls.CallByParam(lua.P{Fn: exports.RawGetString(`complex_parse`), NRet: 1, Protect: true}, lua.LString(x))\n"
                   "ret := ls.Get(-1)\n"
                   "ls.Pop(1)\n"
                   "assertstateempty()\n"
                   "return ret.(Value)\n"
                   "}\n"
                   "func ComplexPrint(x Value) string {\n"
                   "ls.CallByParam(lua.P{Fn: exports.RawGetString(`complex_print`), NRet: 1, Protect: true}, x.(lua.LValue))\n"
                   "ret := ls.Get(-1)\n"
                   "ls.Pop(1)\n"
                   "assertstateempty()\n"
                   "return string(ret.(lua.LString))\n"
                   "}\n"
                   "func SimplePrint(x Value) string {\n"
                   "ls.CallByParam(lua.P{Fn: exports.RawGetString(`simple_print`), NRet: 1, Protect: true}, x.(lua.LValue))\n"
                   "ret := ls.Get(-1)\n"
                   "ls.Pop(1)\n"
                   "assertstateempty()\n"
                   "return string(ret.(lua.LString))\n"
                   "}\n"
               ))
           rm -fr src
           mkdir -p src/lang
           |> id lang.go &>! src/lang/lang.go
           (define package.go
               (++
                 "package lang\n"
                 "const PackageName = `The Language`\n"
                 "const PackageVersion = `0.1`\n"
                 "const PackageAuthors = `Zaoqi`\n"
                 "const PackageCopyRight = PackageName + ` ` + PackageVersion + ` Copyright (C) 2018-2019 ` + PackageAuthors\n"))
           |> id package.go &>! src/lang/package.go
     }})
     ("c/lang.h" () (void))
     ("c/lang.c" ("lua/lang.lua" "c/patch/lang.tail.c" "c/lang.h" "c/patch/linit.c" "c/patch/lualib.h" "c/testmain.c") {
       in-dir "c" {
             |> id "[ -d lua-5.1.5 ] || (wget -O - http://www.lua.org/ftp/lua-5.1.5.tar.gz | tar -xzv && cd lua-5.1.5 && make generic CC=clang && cd ..)" | sh
             |> id "[ -d lua2c ] || git clone --depth 1 https://github.com/davidm/lua2c.git" | sh

             (define raw #{|> id "LUA_PATH=./lua2c/lib/?.lua ./lua-5.1.5/src/lua ./lua2c/lua2c.lua ../lua/lang.lua" | sh | sed (id "s|static|static inline|g") | clang-format})

             |> id raw &>! lang.lua2c.out.c

             (define out (++
                 (match (string->lines raw) [(list-rest head-list ... '("static inline int lc_pmain(lua_State *L) {" "  luaL_openlibs(L);" "" "  const lc_args_t *const args = (lc_args_t *)lua_touserdata(L, 1);" "  lc_createarg(L, args);" "" "  lua_pushcfunction(L, traceback);" "" "  const int status1 = lc_handle_luainit(L);" "  if (status1 != 0)" "    return 0;" "" "  /* note: IMPROVE: closure not always needed here */" "  lua_newtable(L); /* closure table */" "  lua_pushcclosure(L, lcf_main, 1);" "  int i;" "  for (i = 1; i < args->c; i++) {" "    lua_pushstring(L, args->v[i]);" "  }" "  int status2 = lua_pcall(L, args->c - 1, 0, -2);" "  if (status2 != 0) {" "    const char *msg = lua_tostring(L, -1);" "    if (msg == NULL)" "      msg = \"(error object is not a string)\";" "    fputs(msg, stderr);" "  }" "  return 0;" "}" "" "int main(int argc, const char **argv) {" "  lc_args_t args = {argc, argv};" "  lua_State *L = luaL_newstate();" "  if (!L) {" "    fputs(\"Failed creating Lua state.\", stderr);" "    exit(1);" "  }" "" "  int status = lua_cpcall(L, lc_pmain, &args);" "  if (status != 0) {" "    fputs(lua_tostring(L, -1), stderr);" "  }" "" "  lua_close(L);" "  return 0;" "}")) (lines->string head-list)])
                 #{cat ./patch/lang.tail.c}))

             mkdir -p src
             rm -fr src
             mkdir src
             cp ./lua-5.1.5/src/lapi.c ./lua-5.1.5/src/lcode.c ./lua-5.1.5/src/ldebug.c ./lua-5.1.5/src/ldo.c ./lua-5.1.5/src/ldump.c ./lua-5.1.5/src/lfunc.c ./lua-5.1.5/src/lgc.c ./lua-5.1.5/src/llex.c ./lua-5.1.5/src/lmem.c ./lua-5.1.5/src/lobject.c ./lua-5.1.5/src/lopcodes.c ./lua-5.1.5/src/lparser.c ./lua-5.1.5/src/lstate.c ./lua-5.1.5/src/lstring.c ./lua-5.1.5/src/ltable.c ./lua-5.1.5/src/ltm.c ./lua-5.1.5/src/lundump.c ./lua-5.1.5/src/lvm.c ./lua-5.1.5/src/lzio.c ./lua-5.1.5/src/lauxlib.c ./lua-5.1.5/src/lbaselib.c ./lua-5.1.5/src/ldblib.c ./lua-5.1.5/src/liolib.c ./lua-5.1.5/src/lmathlib.c ./lua-5.1.5/src/loslib.c ./lua-5.1.5/src/ltablib.c ./lua-5.1.5/src/lstrlib.c ./lua-5.1.5/src/loadlib.c ./lua-5.1.5/src/linit.c ./src
             cp ./lua-5.1.5/src/*.h ./src
             |> id out &>! ./src/lang.c
             cp lang.h ./src

             cp ./patch/linit.c ./patch/lualib.h ./src
             rm ./src/loslib.c ./src/lmathlib.c ./src/ltablib.c ./src/liolib.c ./src/ldblib.c ./src/loadlib.c

             ./gen.single.sh
             (define single (++
                   c-generatedby
                   c-copyright
                   #{cat lang.c}))
             |> id single &>! lang.c
             touch lang.h

             clang -DNDEBUG -Ofast -Oz -o testmain testmain.c lang.c -lm
     }})
     ("php/lang.php" ("ecmascript/lang.raw.js" "ecmascript/exports.list") {
         ;; TODO
         ;; * env_foreach
         ;; * without mbstring
         in-dir "php" {
             yarn
             (define exports-function-* (list->set '(
                 new_list
                 )))
             (define exports-function-1 (list->set '(
                 new_symbol
                 symbol_p
                 un_symbol
                 construction_p
                 construction_head
                 construction_tail
                 null_p
                 data_p
                 data_name
                 data_list
                 error_p
                 error_name
                 error_list
                 force_all_rec
                 jsArray_to_list
                 maybe_list_to_jsArray
                 delay_p
                 force_all
                 force1
                 env2val
                 val2env
                 simple_print
                 simple_print_force_all_rec
                 simple_parse
                 complex_parse
                 complex_print
                 )))
             (define exports-function-2 (list->set '(
                 equal_p
                 evaluate
                 apply
                 new_construction
                 new_data
                 new_error
                 )))
             (define exports-function-3 (list->set '(
                 env_set
                 env_get
                 env_foreach ;; 應該有BUG,因為傳入函數
                 )))
             (define exports-value (list->set '(
                 null_v
                 env_null_v
                 inputOutput_symbol
                 system_symbol
                 name_symbol
                 function_symbol
                 form_symbol
                 equal_symbol
                 evaluate_sym
                 theThing_symbol
                 something_symbol
                 mapping_symbol
                 if_symbol
                 typeAnnotation_symbol
                 isOrNot_symbol
                 sub_symbol
                 true_symbol
                 false_symbol
                 quote_symbol
                 apply_symbol
                 null_symbol
                 construction_symbol
                 data_symbol
                 error_symbol
                 symbol_symbol
                 list_symbol
                 head_symbol
                 tail_symbol
                 thing_symbol
                 theWorldStopped_symbol
                 effect_symbol
                 sequentialWordFormation_symbol
                 new_data_function_builtin_systemName
                 data_name_function_builtin_systemName
                 data_list_function_builtin_systemName
                 data_p_function_builtin_systemName
                 new_error_function_builtin_systemName
                 error_name_function_builtin_systemName
                 error_list_function_builtin_systemName
                 error_p_function_builtin_systemName
                 new_construction_function_builtin_systemName
                 construction_p_function_builtin_systemName
                 construction_head_function_builtin_systemName
                 construction_tail_function_builtin_systemName
                 symbol_p_function_builtin_systemName
                 null_p_function_builtin_systemName
                 equal_p_function_builtin_systemName
                 apply_function_builtin_systemName
                 evaluate_function_builtin_systemName
                 list_chooseOne_function_builtin_systemName
                 if_function_builtin_systemName
                 quote_form_builtin_systemName
                 lambda_form_builtin_systemName
                 function_builtin_use_systemName
                 form_builtin_use_systemName
                 form_use_systemName
                 )))
             (define exports (ecmascript/exports.list-parse))
             (define raw-js (++ "var exports={};\n" #{cat ../ecmascript/lang.raw.js}))
             |> id raw-js &>! lang.js
             (define raw-php-list (string->lines #{npx js2php lang.js}))
             (define lang.php (++
                 "<?php\n"
                 c-generatedby
                 c-copyright
                 "\n"
                 (match raw-php-list [(list "<?php" xs ...) (lines->string xs)])
                 "\n"
                 (apply ++ (map
                     (lambda (export-sym)
                        (define export-str (symbol->string export-sym))
                        (cond
                            [(set-member? exports-function-* export-sym)
                             (++
                                 "function "export-str
                                 "(...$args){global $"export-str";return call($"export-str",...$args);}\n")]
                            [(set-member? exports-function-1 export-sym)
                             (++
                                 "function "export-str
                                 "($argx){global $"export-str";return call($"export-str",$argx);}\n")]
                            [(set-member? exports-function-2 export-sym)
                             (++
                                 "function "export-str
                                 "($argx,$argy){global $"export-str";return call($"export-str",$argx,$argy);}\n")]
                            [(set-member? exports-function-3 export-sym)
                             (++
                                 "function "export-str
                                 "($argx,$argy,$argz){global $"export-str";return call($"export-str",$argx,$argy,$argz);}\n")]
                            [(set-member? exports-value export-sym) ""]
                            [else (raise "ERROR!")]))
                     (map string->symbol exports)))
                 "?>\n"
                 ))
             |> id lang.php &>! lang.php
     }})
     )
    (current-command-line-arguments))
