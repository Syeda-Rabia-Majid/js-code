JAVA Script execute code/program in 2 phases


{-code-} => Global EC <= this (in browser global object is window)

js is single threaded anda has processes

1- Global Execution Context
2- Functional Execution Context
3- Eval Execution Context (property of global object)

--------------------Phase------------
1- Memory Creation Phase(memory allocate for vaiables)
2- Execution Phase
----------------------------------Steps---------------------------------
1-Global Execution/Global Environment
Firstly every code run with global execution andthen locate into 'this'.
2-Creation Phase
All variables collect and place

val1 =>undefined, val1 =>undefined, addnum => definition, result1 and result2 => undefined

3-Execution Phase
val1 <= 10, val2 <= 5 addnum =>New Executional context(make its own separate executioncontext)  =>
    [new variable Environment + Execution Thread]



when function executes it returns its value to parent/global Executional context
total => global Executional context
after complete work deleted and return to execution phase  'result'



----------------Call Stack-------------------

used stack and LIFO