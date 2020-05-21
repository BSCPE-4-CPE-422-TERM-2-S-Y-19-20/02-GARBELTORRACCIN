

import React from 'react';
import './App.css';


const LOGIC = ({isRed,temp}) => {  
    var b = main();
    function main() {
        var table = [ [1,7,7,7,7,7], [7,2,7,7,7,7], [7,7,3,7,7,7], [7,7,7,4,7,7], [7,7,7,7,5,7],
                    [7,7,7,6,7,7],[7,7,7,7,7,7] ];
        var statement = isRed;
        var h = 0, state = 0, flag = 0, input ;
        var dot = '.';
        var comma = ',';
        var ifs = 'if';
        h = splitting(statement);
        try{
            for (var i =0;i<h.length;i++){
                if (h[i] === ifs) {
                    input = 0;
                }
                else if (h[i] === dot){
                    input = 1;
                }
                else if (check_expression(h[i]) === 1){
                    input = 2;
                }
                else if (h[i] === comma){
                    input = 3; 
                }
                else if (check_statement(h[i]) === 1) {
                    input = 4;
                }
                else {
                    input = 5;
                }
                
                state = table[state][input];
                if (state === 6){
                    flag = 1;
                } else if (state === 7){
                    break;
                }
             }
        }catch(err){}
        if (flag === 1){
            return 1;
        } 
        else {
            
            return 0;
        }
    }

    function splitting(state_ment){
        var str =toCharArray(state_ment);
        var split = varsplit(state_ment);
        var l=split.length - 1;
        try{
            var str1 = [];
            var from = 0;
            var testme = 0;
            for (var i=0;i<l;i++){
                str1.push(split[i]);
                from = split[i].length + from;
                str1.push(str[from + testme]);
                testme++;
            }
            var cap = str1.length;
            var save2 = [];
            for (i=0;i<cap;i++){
                save2.push(str1[i]);
            }
            
        }
        catch(err){
        }
        
        return save2;

    }
    
    function check_expression(hop){
        var table = [ [1,4,4,4], [4,2,4,4], [4,4,3,4], [4,4,4,4] ];
        var state = 0, flag = 0, input ,g;
        g = splitexp(hop);
        try{
            for (var i =0;i<g.length;i++){
                if (check_iden(g[i]) === 1) {
                    input = 0;
                }
                else if (g[i][0] === '=' || g[i][0] === '>' || g[i][0] === '<' || g[i][0] === '!'){
                        if(g[i][1] === '=') input = 1;
                        if(g[i][0] === '>' || g[i][0] === '<') input = 1;
                }
                else if (twodigit(g[i]) === 1){
                    input = 2;
                }
                else {
                    input = 3;
                }
                
                state = table[state][input];
                if (state === 3){
                    flag = 1;
                } else if (state === 4){
                    break;
                }
             }
        }catch(err){}
        if (flag === 1){
            return 1;
        } 
        else {
            return 0;
        }
    }

    function check_statement(st5){
        var table = [ [1,5,5,5,5], [5,2,5,5,5], [3,5,3,5,5], [5,5,5,4,5], [3,5,3,5,5], [5,5,5,5,5] ];
        var state = 0, flag = 0, input = 0 ,h;
        var equ = '=', plus = '+'; 
        h = splittingstate(st5);
        try{
            for (var i =0;i<h.length;i++){
                if (check_iden(h[i]) === 1) {
                    input = 0;
                }
                else if (h[i] === equ){
                    input = 1;
                }
                else if (twodigit(h[i]) === 1){
                    input = 2;
                }
                else if (h[i] === plus || h[i] === '-' || h[i] === '*' || h[i] === '/' || h[i] === '%'){
                    input = 3;
                }
                else {
                    input = 4;
                }
                
                state = table[state][input];
                if (state === 3){
                    flag = 1;
                } 
                else if (state === 5){
                    flag = 0;
                    break;
                }
            }
        }catch(err){}
        if (state === 3){
            return 1;
        } 
        else {
            return 0;
        }
    }

    function splitexp(clen){
        var str =filter(clen);
        var split = varexpsplit(clen);
        var l=split.length;
        try{
            var str1 = [];
            var from = 0;
            var testme = 0;
            for (var i=0;i<l;i++){
                str1.push(split[i]);
                from = split[i].length + from;
                if(i===0) str1.push(str);
                testme++;
            }
            var cap = str1.length;
            var save3 = [];
            for (i=0;i<cap;i++){
                save3.push(str1[i]);
            }
        }
        catch(err){
        }
        return save3;
    }

    function varexpsplit(st3){
        try{
            var spl;
                spl=st3.split("==");
                if(spl.length!==2) spl=st3.split("!=");
                if(spl.length!==2) spl=st3.split("<=");
                if(spl.length!==2) spl=st3.split(">=");
                if(spl.length!==2) spl=st3.split("<");
                if(spl.length!==2) spl=st3.split(">");
            }catch(err){}
            return spl;
    }

    function splittingstate(state_ment){
        var str =toCharArray(state_ment);
        var split = varsplitstate(state_ment);
        var l=split.length;
        try{
            var str1 = [];
            var from = 0;
            var testme = 0;
            for (var i=0;i<l;i++){
                if (split[i].length !== 0){
                    str1.push(split[i]);
                }
                if (from + split[i].length + testme < counter(state_ment)+1){
                    from = split[i].length + from;
                    str1.push(str[from + testme]);
                    testme++;
                }
            }
            var cap = str1.length;
            var save2 = [];
            for (i=0;i<cap;i++){
                save2.push(str1[i]);
            }
        
        }
        catch(err){
        }
        return save2;

    }

    function varsplitstate(sta){
    var te=sta.split(/[=+-/*%]/);
        return te;
    }

    function filter(state){
        var val = [];
        var p = 0;
        for(var i=0;i<state.length;i++){
            if(lettercheck(state[i]) === false && numcheck(state[i]) === false){
                val[p]=state[i];
                p++;
            }
        }
        return val;
    }

    function toCharArray(str){
        var charArray =[];
        try{
        for(var i=0;i<str.length;i++){
             charArray.push(str[i]);
        }}catch(err){}
        
        return charArray;
    }

    function varsplit(state_ment1){
        try{
        var spl=state_ment1.split(/[.,]/);
        }catch(err){}
        return spl;
    }

    function counter(str1){
        try{
        for (var i=0;;i++){
            if (str1[i] == null){
                return i-1;
            }
        }}catch(err){}
    }

    function check_iden(var1){
        var table = [ [1,2,2], [1,1,2], [2,2,2] ];
        var state = 0, flag = 0, input;
        try{
            for (var i =0;i<var1.length;i++){
                if (lettercheck(var1[i]) === true) {
                    input = 0;
                }
                else if (numcheck(var1[i]) === true){
                    input = 1;
                }
                else {
                    input = 2;
                }
                
                state = table[state][input];
                if (state === 1){
                    flag = 1;
                } else if (state === 2){
                    break;
                }
             }

        }catch(err){}
        if (flag === 1){
            return 1;
        } 
        else {
            return 0;
        }
        
    } 

    function twodigit(var2){
        var table = [ [1,3], [2,3], [3,3] ];
        var state = 0, flag = 0, input;
        try{
            for (var i =0;i<var2.length;i++){
                if (numcheck(var2[i]) === true){
                    input = 0;
                }
                else {
                    input = 1;
                }
                
                state = table[state][input];
                if (state === 2 || state === 1){
                    flag = 1;
                } else if (state === 3){
                    flag = 0;
                    break;
                }
             }

        }catch(err){}
        if (flag === 1){
            return 1;
        } 
        else {
            return 0;
        }
    }
    function lettercheck(value){
        try{
        value = value.toUpperCase();
        var p=0;
        for (let i=0; i<value.length; i++){
            if(!(value[i] >= "A" && value[i] <= "Z")){
                return false;
            }
        }}catch(err){}
        return true;
    }
    function numcheck(value){
        return value >= '0' && value <='9';
    }

    function printerror(){
        if(b !== 1){
            return "\nINVALID STATEMENT";
        }
    }
    
    return(
        <div className="App">
            <header className="inline-div1">
               <textarea cols="75" 
                    value={temp===1 ? b===1 ? "VALID IF STATEMENT" 
                        : "ERROR: \n" + printerror() : ""} 
                    placeholder="Result:" 
                    className={temp===1 ? b===1 ? "green" 
                    : "red" : "inline-txtarea"} readOnly>
                </textarea>
            </header>
        </div>
    );
}

export default LOGIC;
