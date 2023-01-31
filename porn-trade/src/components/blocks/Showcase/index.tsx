import React from 'react'
import ShowcaseChild from './child'


function Showcase() {
  const [activeOne, setActiveOne] = React.useState(27)

  React.useEffect(() => {
    let timer1 = setTimeout(() => setActiveOne(Math.round(Math.random() * 36)), 800);
    return () => {
      clearTimeout(timer1);
    };
  }, [activeOne]);
  return (
    <div><ShowcaseChild lo={activeOne}/></div>
  )
}

export default Showcase

Math.round(Math.random() * 36)