#|
    The Language
    Copyright (C) 2019  Zaoqi <zaomir@outlook.com>

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
|#
#lang typed/racket
(provide (all-defined-out))
(define-type UUCCharUnicodeCode Char)
(define-type LangCode (Pairof Symbol Symbol))
(define-type UUCChar Symbol)
(: all-char (Parameterof (Immutable-HashTable UUCChar UUCCharUnicodeCode)))
(define all-char (make-parameter (ann (hash) (Immutable-HashTable UUCChar UUCCharUnicodeCode))))
(: all-langcode (Parameterof (Setof LangCode)))
(define all-langcode (make-parameter (ann (set) (Setof LangCode))))
(: l18n (Parameterof (Immutable-HashTable LangCode (Immutable-HashTable UUCChar String))))
(define l18n (make-parameter (ann (hash) (Immutable-HashTable LangCode (Immutable-HashTable UUCChar String)))))
(: add-langcode (-> LangCode Void))
(define (add-langcode x)
    (assert (not (set-member? (all-langcode) x)))
    (all-langcode (set-add (all-langcode) x)))
(: _ (-> UUCChar UUCCharUnicodeCode Void))
(define (_ x ccc)
    (assert (not (hash-has-key? (all-char) x)))
    (all-char (hash-set (all-char) x ccc)))
(: ~ (-> LangCode UUCChar String Void))
(define (~ lc ch str)
    (assert (hash-has-key? (all-char) ch))
    (assert (set-member? (all-langcode) lc))
    (l18n (hash-update (l18n) lc (lambda ([lt : (Immutable-HashTable UUCChar String)])
        (assert (not (hash-has-key? lt ch)))
        (hash-set lt ch str)) (ann hash (-> (Immutable-HashTable UUCChar String))))))

(add-langcode '(English . US))

(_ '太始初核 #\核)
(_ '符名 #\符)
(_ '化滅 #\化)
(_ '式形 #\形)
(_ '等同 #\等)
(_ '解算 #\算)
(_ '特定其物 #\獨)
(_ '省略一物 #\某)
(_ '映表 #\表)
(_ '若 #\若)
(_ '一類何物 #\：) ;; U+FF1A
(_ '是非 #\欤)
(_ '其子 #\分)
(_ '陽 #\陽)
(_ '陰 #\陰)
(_ '引用 #\引)
(_ '應用 #\用)
(_ '空 #\空)
(_ '連 #\連)
(_ '構 #\構)
(_ '誤 #\謬)
(_ '詞素 #\文)
(_ '列 #\列)
(_ '首 #\首)
(_ '尾 #\尾)
(_ '物 #\物)
(_ '宇宙亡矣 #\止)
(_ '效應 #\效)
(_ '為符名連 #\‐) ;; U+2010
(_ '出入改滅 #\變)