import {assign, createMachine} from 'xstate';


export const counterMachine = createMachine({
    initial:'start',
    context:{counter:0},
    states:{
        start:{
            on:{
                'INCREMENT':{
                    actions:assign({counter:({context})=>context.counter+1})
                },
                'DECREMENT':{
                    actions:assign({counter:({context})=>context.counter-1})
                },
                'RESET':{
                    actions:assign({counter:0})
                }
            }
        }
    }
        
     
})