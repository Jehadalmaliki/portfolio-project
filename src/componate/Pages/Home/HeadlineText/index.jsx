import React from 'react'
import TextSpan from './TextSpan';

import './styles.css'
export default function HText() {
    const sentenceH = "Jehad A Almoliki".split("");

    return (
    <dev className='HText'>
       
                    {sentenceH.map((letter, index) => {
                        return (
                            <TextSpan  key={index} childern= {letter }
                            
                        />
            
                          
                      )
                    })}
                </dev>
              
            )

}