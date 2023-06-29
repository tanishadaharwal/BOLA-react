import React from 'react'
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect} from 'react';
export default function Reveal({ children, width = "fit-content" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once : true});
    const mainControls = useAnimation();
   
    useEffect(() => {
        if(isInView) {
            mainControls.start("visible");
           
        }
    }, [isInView])
    return (
        <div style={{ position: "relative", width : "100%", overflow: "hidden" }} ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}

                initial="hidden"
                animate={mainControls}
                transition={{ duraton: 1, delay: 0.5}}

            >{children}</motion.div>
{/* 
            <motion.div
                variants={{
                    hidden : {left : 0},
                    visible : {left : "100%"},
                }}

                initial = "hidden"
                animate={slideControls}
                transition={{duration : 0.5, ease : "easeIn"}}
                style={{
                    position : "absolute",
                    top : 4,
                    bottom : 4,
                    left : 52,
                    right : 0,
                    background : "#0aff9d",
                    zIndex : 20,
                }}/> */}
            
        </div>
    )
}
