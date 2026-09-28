 function maxDepth(s) {
        let currentDepth = 0;
        let maxDepth = 0;
    for (let char of s)
    {
        if( char === '(')
            {
                currentDepth++;
                    if( currentDepth > maxDepth )
                    {
                        maxDepth = currentDepth;
                    }           
            }else if(char === ')'){
                currentDepth--;
        }
    }
    return maxDepth
    }
    console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3
    console.log(maxDepth("(1)+((2))+(((3)))")); // 3
    console.log(maxDepth("()(())((()()))")); // 3